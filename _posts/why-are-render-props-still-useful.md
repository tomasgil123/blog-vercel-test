---
title: 'Why are render props still useful'
date: '03/09/2021'
coverImage: 'postImages/why-are-render-props-still-useful/layout.jpg'
slug: 'why-are-render-props-still-useful'
tags: "react*render-props"
---

# Why are render props still useful

![Layout](/postImages/why-are-render-props-still-useful/layout.jpg)

Recently at work I had to “extend” a custom search input for places with autocomplete (we don't use a third party library), similar to this one [react-places-autocomplete](https://github.com/hibiken/react-places-autocomplete). I needed to implement the same functionality, but the input element should look and behave a little bit different. The question I faced was, how do I reuse all the logic and almost all the UI elements of the component?

### Render props vs hooks

[Hooks](https://reactjs.org/docs/hooks-custom.html) were a new addition in react 16.8 and they let you use state and other react features without writing a class. React 16.8 come with some default hooks like useState and useEffect, but also allows developers to build their own custom hooks. Custom hooks are basically a special type of functions which can use default hooks inside and also other logic. Since their introduction hooks made it very easy to reuse logic across an application.
On the other hand, render props consist in passing a function as a prop to a react component. Those functions usually return a react component themselves. This way, for example, we could customize the item component of a list:

```ts
import { useState } from 'React'

interface ListProps {
    listItem: (onClickListItem: any, name: any) => JSX.Element;
}

const List = ({ listItem }: ListProps) => {

    const [ listOfItems, setListOfItems ] = useState([... a list with items ])

    const onClickListItem = () => {
        //this function does something like mark as done the item
    }

    return <div>
        <h1>Title list</h1>
        <ul>
            {listOfItems.map( item => <>{listItem(onClickListItem, item.name)}</>)}
        </ul>
    </div>
}
export default List
```

So, the item is defined by the parent component, which allows to reuse the logic inside the list component and other UI elements present in it. For example:

```ts
import List from './List'

const Home = () => {
  return (
    <div>
      <List
        listItem={(onClickListItem, name) => <li style={{ border: '1px solid black' }}>{name}</li>}
      />
    </div>
  )
}

export default Home
```

However, many developers recommed to use hooks wherever possible [instead of render props](https://dev.to/bettercodingacademy/react-hooks-vs-render-props-vs-higher-order-components-1al0). Event the react documentation recommends to [use hooks instead of render props](https://reactjs.org/docs/hooks-faq.html#do-hooks-replace-render-props-and-higher-order-components)

### But then, are render props still useful?

There is a specific situation where I find render props are still useful. Let's go back to the case I commented in the motivation section. Let's suppose we have a component called SearchWithAutocomplete (if you want to code along this is the repo of the project: [render-props-repo](https://github.com/tomasgil123/render-props).

SearchWithAutocomplete let us search by title our todos. This component handles logic related with the filtering of the todos (for the purpose of brevity it is not shown here, but you can check it in the repo) . It also handles what happens when an option is selected. Then we have the Autocomplete component which displays the todos which include in their titles the query the user entered, and an Input component with some specific styles. This is how it looks:

```ts
import { Todo } from 'src/types/todos'
import Autocomplete from './Autocomplete'
import Input from './Input'

type SearchProps = {
  getTodo: (value: any) => void
  placeholder: string
  loading: string
}

const Search: React.FC<SearchProps> = ({ getTodo, placeholder, loading }) => {
  //custom logic...

  return (
    <div className="relative">
      <Input onChange={handleOnChange} value={todoTitle} placeholder={placeholder} />
      {!hasSelected && todoTitle.length >= 3 && (
        <Autocomplete
          loading={isLoading}
          suggestions={predictions}
          loadingText={loading}
          selected={todoTitle}
          handleSelect={handleOnSelect}
        />
      )}
    </div>
  )
}

export default Search
```

This is how it looks in the app:

![DefaultInput](/postImages/why-are-render-props-still-useful/default-input.png)

Image we need now to add this SearchWithAutocomplete in another page, but the input should look completely different. In other words, this component provides us with everything we need, except the input.

This is the how the input should look now:

![DifferentInput](/postImages/why-are-render-props-still-useful/different-input.png)

One approach to fix this issue would be to create a custom react hook which handles all the search logic. It could be called useSearchTodos and we could use it to create a new search component from scratch, with the input the way we need it. I think this is more flexibility than what we need, we could just get by “changing” the input which is what we need to be different. Render props to the rescue.

As we mentioned before, render props consist in passing a function as a prop. In this case this function will return the input we need. Now our SearchWithAutocomplete component will look like this:

```ts
import { Todo } from 'src/types/todos'
import Autocomplete from './Autocomplete'

type SearchProps = {
  getTodo: (value: any) => void
  placeholder: string
  loading: string
  input: (
    handleOnChange: (e: ChangeEvent<HTMLInputElement>) => void,
    value: string,
    placeholder: string
  ) => JSX.Element
}

const Search: React.FC<SearchProps> = ({ getTodo, placeholder, loading, input }) => {
  //custom logic...

  return (
    <div className="relative">
      {input(handleOnChange, todoTitle, placeholder)}
      {!hasSelected && todoTitle.length >= 3 && (
        <Autocomplete
          loading={isLoading}
          suggestions={predictions}
          loadingText={loading}
          selected={todoTitle}
          handleSelect={handleOnSelect}
        />
      )}
    </div>
  )
}

export default Search
```

And we can use it like this:

```ts
 import React, { useState } from 'react'
import Search from 'src/components/Search'

const DifferentInput: () => {
  const [todoSelected, setTodoSelected] = useState(null)

  return (
    <div style={{ padding: '20px' }}>
      Different input
      <Search
        getTodo={(title: string): void => setTodoSelected(title)}
        placeholder="Search todos"
        loading="Loading..."
        input={(handleOnChange, value, placeholder): JSX.Element => (
          <input
            className="border solid border-red-400"
            onChange={handleOnChange}
            value={value}
            placeholder={placeholder}
          />
        )}
      />
    </div>
  )
}

export default DifferentInput
```

### Conclusion

Even though react hooks are the preferable method for sharing logic between components, the render props pattern is still useful in one situation: when you need to share logic AND some UI.
