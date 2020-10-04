---
title: 'Persistent layout patterns in nextjs with typescript'
date: '10/03/2020'
coverImage: 'postImages/next-persistent-layout-typescript/layout.jpg'
slug: 'next-persistent-layout-typescript'
---

# Persistent layout patterns in nextjs with typescript

![Layout](/postImages/next-persistent-layout-typescript/layout.jpg)

If you ever made a website with Nextjs you probably had to decide how to handle page layouts. Adam Wathan made an excellent contribution to the community describing four different persistent layout patterns in [this post](https://adamwathan.me/2019/10/17/persistent-layout-patterns-in-nextjs/). If you havent read it, I encourage you to do it.
In my case I was building a Nextjs app with typescript and I needed to implement option 3 or 4. Was not so simple as I first thought :(

Im writing this post in case my future me forgets how to do it and to help anyone who stumbles into the same problem.

### How do we add a static 'layout' property to our page components?

Let's implement Adams option 3 in a new Nextjs proyect made with typescript (if you want to see the github repository you can find it [here](https://github.com/tomasgil123/persistent-layout-typescript)).
Our proyect will have two types of layouts and two different pages. In the home page we want to show the MainLayout, but on the /secondary-page we want to show the SecondaryLayout. This is our folder structure so far:

![FolderStructure](/postImages/next-persistent-layout-typescript/folder-structure.png)

Let's go to index.tsx and add a static 'layout' property to the Home component:

![FirstError](/postImages/next-persistent-layout-typescript/first-error.png)

What's going on? Since we are using typescript we need to specify what we are going to store in Home. In this case we stated Home is a react function component and react function components don't have a property called layout.

### How do we specify Home has also a 'layout' property?

We create a new type which will be an intersection of React.FC and layout property (you can read more about typescript intersections [here](https://www.typescriptlang.org/docs/handbook/unions-and-intersections.html) ). Basically, our home constant now will require a function component and a layout property of type MainLayout.

```ts
import React from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

import MainLayout from '../layouts/mainLayout'

type HomeComponent = React.FC & { layout: typeof MainLayout }

const Home: HomeComponent = () => {
  return (
      ...
  )
}

Home.layout = MainLayout

export default Home

```

As we see, this fades the error away. Let's implement it also on secondary-page.tsx:

```ts
import React from 'react'

import SecondaryLayout from '../layouts/secondaryLayout'

type SecondaryComponent = React.FC & { layout: typeof SecondaryLayout }

const SecondaryPage: SecondaryComponent = () => {
  return <div>This is the secondary page</div>
}

SecondaryPage.layout = SecondaryLayout

export default SecondaryPage
```

Great. We also need to modify \_app.tsx file. We will do it as Adam suggests in his post:

![_AppError](/postImages/next-persistent-layout-typescript/_app.png)

ajam. Another error. We are having again a problem with types. Typescript can't find a property layout on the Component types, where Component is NextPage component.

You might notice page works on localhost, but it fails when you try to make the build.

### How do we specify Component has also a 'layout' property?

There is alternative question to make: can we replace Component for other thing which actually has a layout property? Yes, we can and that is what we are going to do. So, instead Component we will use PageWithLayoutType, which a NextPage component with a layout property:

```ts
import { NextPage } from 'next'
import MainLayout from '../layouts/mainLayout'
import SecondaryLayout from '../layouts/secondarylayout'

type PageWithMainLayoutType = NextPage & { layout: typeof MainLayout }

type PageWithPostLayoutType = NextPage & { layout: typeof SecondaryLayout }

type PageWithLayoutType = PageWithMainLayoutType | PageWithPostLayoutType

export default PageWithLayoutType
```

We use the type defined above in our \_app.tsx file:

```ts
import '../styles/globals.css'
import PageWithLayoutType from '../types/pageWithLayout'
import React from 'react'

type AppLayoutProps = {
  Component: PageWithLayoutType
  pageProps: any
}

function MyApp({ Component, pageProps }: AppLayoutProps) {
  const Layout = Component.layout || ((children) => <>{children}</>)
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
```

Finally, we need to refactor our pages, index.tsx and second-page.tsx, to make them of type PageWithLayoutType:

```ts
import React from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import PageWithLayoutType from '../types/pageWithLayout'

import MainLayout from '../layouts/mainLayout'

const Home: React.FC = () => {
    return(
        ...
    )
}

;(Home as PageWithLayoutType).layout = MainLayout

export default Home
```

what we are doing here is changing the type of Home component to be PageWithLayoutType, which has a layout property. In this case the value of that property will be MainLayout. In the case of secondary-page.tsx will be SecondaryLayout.

And thats it. We just have implemented Adams persistent layout pattern in typescript. Hope you liked it and don't forget you can check the full repository [here](https://github.com/tomasgil123/persistent-layout-typescript).
