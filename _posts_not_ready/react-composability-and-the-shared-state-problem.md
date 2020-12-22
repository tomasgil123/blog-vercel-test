---
title: 'React composability and the shared state problem'
date: '10/18/2020'
coverImage: 'postImages/react-composability-and-the-shared-state-problem/layout.jpg'
slug: 'react-composability-and-the-shared-state-problem'
---

# React composability and the shared state problem

![Layout](/postImages/react-composability-and-the-shared-state-problem/layout.jpg)

React components are composable which means we can use the components we already build to come up with new components.

https://krasimir.gitbooks.io/react-in-patterns/content/chapter-04/

We have a few different options to compose new components:

- React children api
- Passing react elements as props
- High order functions

```ts
function add(input1: number, input2: number): number {
  return input1 + input2
}
```
