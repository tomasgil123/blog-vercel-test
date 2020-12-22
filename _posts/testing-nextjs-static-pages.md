---
title: 'Testing nextjs static pages'
date: '12/14/2020'
coverImage: 'postImages/testing-nextjs-static-pages/layout.jpg'
slug: 'testing-nextjs-static-pages'
---

# Testing nextjs static pages

![Layout](/postImages/testing-nextjs-static-pages/layout.jpg)

Recently I faced the challenge to add a new feature and corresponding tests for a group of static pages of a nextjs site.

The site in question is a marketplace for new and used cars and has one static page for each combination of car maker and model, as part of the SEO strategy of the company. Cars can have none, one or several videos and the task was to display them correctly. The feature was easy to implement, but what is the best way to test it?

### What to test

Kent Dodds said on twitter:

> The more your tests resemble the way your software is used, the more confidence they can give you.

I think this is very important to keep that in mind in order to avoid testing [implementation details](https://kentcdodds.com/blog/testing-implementation-details)

In this case, the use cases were pretty easy to be defined:

- If the car does not have videos, user should not see the video section
- If car has ONE video, user should be able to see a lazy loaded embed youtube video
- If car has MORE than one video, user should be able to see a gallery of lazy loaded embed youtube videos

Notice “lazy loaded” here means the video should only be loaded if the user gets to the section of the page where videos are displayed.
Now we have to decide how to implement a set of tests such as we can be confident those three use cases are covered.

### How to test

The first solution that came to my mind was to test the Video component I made to display the videos was acting the way it was supposed to depending on the props it received. But I quickly realized that the test did not cover the fact the video should be lazy loaded.

It was clear that to test only the video component was not enough. I had to replicate the process a user would make on the page: enter, scroll to the video section and be able to see the video or group of videos.

So far, so good. I started implementing the tests with the e2e testing Playwright, but soon after starting with the first test I stumble with the following problem: how do I know which pages to test for each case? In other words, which combinations of car maker and model had only one video, which ones had more than one and which had none?

Taking a step back, this problem arises because we have a list of entities (cars in this case) and we want to create a page for each one, but all entities are not equal (some do not have videos, some have only one and other have more than one) and the nextjs page needs to take that into account. Moreover, these attributes could also change (we could remove videos from a car or add new ones to one). How do I know if all types of entities are being displayed correctly? I needed to mock the response of the request made in the getStaticProps of the page to be able to easily cover each use case.

### Mocking requests in getStaticProps

I had two options:

- Mocking the entire response of the request which was made in getStaticProps
- Stubbing the response, in other words, modify the response adding the amount of videos I needed to test each use case

I discarded the first one because the body of the response was quite big and I wanted to avoid dealing with the hassle of handling big mocks of data.
So I try to modify the response of the request. But there was a problem: request in getStaticProps can not be intercepted by Cypress or by Playwright.

Then now what? Mock service worker to the rescue! [Msw](https://github.com/mswjs/msw) (short for mock service worker) is a mocking API library for the browser and node.

I built a small project in order to make it easier for anyone to follow along (check it [here](https://github.com/tomasgil123/testing-static-pages-nextjs)). The project is an app which shows todos instead of cars (because the api I used only had todos) and some of them have one or more videos and some none.

To add msw to my proyect I followed this [example](https://github.com/vercel/next.js/tree/canary/examples/with-msw) . The first step was to add a “mock” folder to the repo and add the files handlers.ts, server.ts and index.ts:

![FolderStructure](/postImages/testing-nextjs-static-pages/folder-structure.png)

In handlers.ts we will write down the code which will allow us to modify the responses for todo 1 and 2 (this is also called “patching a response”):

```ts
import { rest } from 'msw'

//we mock a situation where the first todo has one video and the second todo has two videos
//the rest of the todos do not have videos
const mockVideos = [
  ['https://www.youtube.com/watch?v=91CzTz2-IJw'],
  ['https://www.youtube.com/watch?v=91CzTz2-IJw', 'https://www.youtube.com/watch?v=N6Kqg7bdKCQ'],
]

export const handlers = [
  rest.get('https://jsonplaceholder.typicode.com/todos/1', async (req, res, ctx) => {
    const originalResponse = await ctx.fetch(req)
    const originalResponseData = await originalResponse.json()
    originalResponseData.videoUrls = mockVideos[0]
    return res(ctx.json(originalResponseData))
  }),
  rest.get('https://jsonplaceholder.typicode.com/todos/2', async (req, res, ctx) => {
    const originalResponse = await ctx.fetch(req)
    const originalResponseData = await originalResponse.json()
    originalResponseData.videoUrls = mockVideos[1]
    return res(ctx.json(originalResponseData))
  }),
]
```

Now when we make a request to todos/1 we will get a todo with a video and two videos for todos/2.

Then we use setupServer() to set up a request interception layer in our NodeJS environment and make our former handlers work:

```ts
import { setupServer } from 'msw/node'
import { handlers } from './handlers'

export const server = setupServer(...handlers)
```

We only want to use the request interception layer when we are testing, so we add to \_app.ts:

```ts
if (process.env.NODE_ENV === 'test') {
  require('../../mocks')
}
```

### The tests

[Playwright](https://playwright.dev/) is a great alternative to Cypress. More versatile, but maybe not so intuitive.
We will make the following tests:

- video section is not visible until scrolling
- todo with one video is displayed correctly
- todo with more than one video is displayed correctly
- todo without videos is displayed correctly

The core of a test will consist of accessing a page, scrolling down until the video section and asserting if the amount of videos displayed is correct. This is the tests to check if todo 1 is displaying only one video (when the todo has only one video the text "--Has video--" is print to the screen), as it should:

```ts
test('todo with one video are display correctly', async () => {
  let browser = await playwright[browserType].launch()
  const context = await browser.newContext()
  let page = await context.newPage()
  await page.goto('http://localhost:3000/todos/1')

  const videoSection = await page.$('text="Video"')
  videoSection.scrollIntoViewIfNeeded()

  await page.waitForSelector('text="--Has video--"')

  const numberElementsWithOneVideo = await page.$$eval(
    'text="--Has video--"',
    (items) => items.length
  )
  expect(numberElementsWithOneVideo).toBe(1)
})
```

You can find the other tests [here](https://github.com/tomasgil123/testing-static-pages-nextjs).

So you might be thinking: Ok, but this does not seem very useful if not added to a workflow. How do we make this work in a Continuous Integration flow? We will discuss it in another post (I promise to drop the link here when it's done). Stay tuned!

### Conclusion

An alternative way of testing nextjs static pages is using a “response patching” strategy to mock the data the way we needed, using a library like mock service worker, and then using Playwright to make the e2e tests.
