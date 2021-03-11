---
title: 'How to use vue suspense: the smart way'
date: '03/10/2021'
coverImage: 'postImages/how-to-use-vue-suspense-the-smart-way/layout.jpg'
slug: 'how-to-use-vue-suspense-the-smart-way'
---

# How to use vue suspense: the smart way

![Layout](/postImages/how-to-use-vue-suspense-the-smart-way/layout.jpg)

As you may know, a few months ago [Vue 3 core was officially released](https://madewithvuejs.com/blog/vue-3-roundup#:~:text=The%20Vue%203%20core%20has,here%27s%20the%20official%20release%20announcement). One of the new features is the composition API, that allows for a function-based way of writing our components, inspired by React Hooks. This way it is easier to share logic between different components in our app.

The composition API is used inside the new setup() function which every Vue component provides. One of the first things I tried to do when I was testing Vue 3 was to try to make a request from setup() like this:

```js
<template>
  <div>
    BreedList
    <div v-for="breed in breedsList" :key="breed">{{ breed }}</div>
  </div>
  <div></div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "BreedList",
  async setup() {
    const breedsList = ref([]);
    const breeds = await (
      await fetch("https://dog.ceo/api/breeds/list/all")
    ).json();
    breedsList.value = Object.keys(breeds.message);
    return { breedsList };
  }
};
</script>
```

In the former example we are requesting the list of dog breeds from the dogs api and show them to the user.
Then I added the BreedList to the Home component:

```js
<template>
  <div class="home">
    <div>Title</div>
    <BreedList />
  </div>
</template>

<script>
import BreedList from "@/components/BreedList";

export default {
  name: "Home",
  components: {
    BreedList
  }
};
</script>
```

But there is a problem, the component was not being rendered :/

![NotRendered](/postImages/how-to-use-vue-suspense-the-smart-way/not-rendered.png)

### Why i got blank when use async setup() in Vue3?🤔

As we saw before, an async event is being performed in the setup() function of the BreedList component and this is the key to the problem. Now setup() returns a promise and that seems to interfere with the normal development of the life cycle hooks. We can check that a console.log inside the onMount lifecycle hook never gets trigger and this probably means the component is never mounted either:

```js
import { ref, onMounted } from "vue";

export default {
  name: "BreedList",
  async setup() {
    const breedsList = ref([]);
    onMounted(() => {
      console.log("mounted!");
    });
    // code to make the request ....
    return { breedsList };
  }
};
</script>
```

To fix this issue we need to use [Suspense](https://vueschool.io/articles/vuejs-tutorials/suspense-new-feature-in-vue-3/), a special component that renders a fallback content instead of our component until a condition is met. This condition is usually an async operation happening in your components setup function.

At the Home component we wrapp BreedList in a Suspense:

```js
<template>
  <div class="home">
    <div>Title</div>
    <Suspense>
      <template #default>
        <BreedList />
      </template>
      <template #fallback>
        <span>Loading...</span>
      </template>
    </Suspense>
  </div>
</template>

<script>
import BreedList from "@/components/BreedList";

export default {
  name: "Home",
  components: {
    BreedList
  }
};
</script>
```

and uala! Now the list of breeds is visible and we got a nice loader component rendered on the screen while the async event was being performed.

![BreedList](/postImages/how-to-use-vue-suspense-the-smart-way/breed-list.png)

So far, so good. We fixed the issue, but we had to add a Suspense component inside Home to be able to handle the BreedList. But wait, are we going to need to add a Suspense component in every parent which deals with async children? 🤢

### The smart way to use Suspense

A high order function is a function which receives a function as an argument and/or returns a function as result. [HOCs](https://reactjs.org/docs/higher-order-components.html) (high order components) are very common in the React ecosystem, where they are a way to share logic and UI between components. Lets see how we can use them in Vue.
Vue has something called [render functions](https://vuejs.org/v2/guide/render-function.html) which is a closer to the compiler alternative to using templates to build our HTML. The following is an example of a render function which will add an h1 element with the text "test" to the virtual DOM:

```js
import { h } from 'vue'

export default {
  render() {
    return h('h1', 'test')
  },
}
```

This is also called a Vnode. The syntax can be a little bit daunting and hard to follow, but stay with me. You can read more about how to write Vnodes [here](https://v3.vuejs.org/guide/migration/render-function-api.html#overview).

Remember our problem was we did not want having to use Suspense in every parent component with async children. As I see it, this is a piece of logic we are repetitively using in our code. It would be great if we could “wrapp” automatically every async component we make within a Suspense. Let me introduce you to the withSuspense HOC:

```js
import { h } from 'vue'
import SuspenseComponent from '../components/SuspenseComponent'

const withSuspense = (component, propsComponent = []) => {
  return {
    props: [...propsComponent],
    components: {
      SuspenseComponent,
    },
    setup(props) {
      return () => h(SuspenseComponent, [h(component, { ...props })])
    },
  }
}

export default withSuspense
```

withSuspense is simply a function which returns a vue render function. withSuspense gets a component as an argument (the async component) and wrapps it in a Suspense component (it also is responsible for handling the props to the async component). We can use it this way:

```js
import withSuspense from '../../hocs/withSuspense'
import BreedList from './BreedList'

export default withSuspense(BreedList)
```

Which leads to this folder structure:

![FolderStructure](/postImages/how-to-use-vue-suspense-the-smart-way/folder-structure.png)

And we use it as a normal component in Home:

```js
<template>
  <div class="home">
    <div>Title</div>
    <BreedList />
  </div>
</template>

<script>
import BreedList from "@/components/BreedList";

export default {
  name: "Home",
  components: {
    BreedList
  }
};
</script>
```

There is a repo in case you want to take a closer look: [vue-suspense](https://github.com/tomasgil123/vue-suspense/tree/with-hoc)

### Conclusion

Vue render functions are a great tool to implement patterns for reusing logic, like HOCs, common in other ecosystems like React.
