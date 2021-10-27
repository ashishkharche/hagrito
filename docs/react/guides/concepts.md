---
sidebar_label: Concepts
description: React Concepts.
---

# React - Concepts

## Key

When we render a list, React stores some information about each rendered list item. When we update a list, React needs to determine what has changed. We could have added, removed, re-arranged, or updated the list’s items.

When a list is re-rendered, React takes each list item’s key and searches the previous list’s items for a matching key. If the current list has a key that didn’t exist before, React creates a component. If the current list is missing a key that existed in the previous list, React destroys the previous component. If two keys match, the corresponding component is moved. Keys tell React about the identity of each component which allows React to maintain state between re-renders. If a component’s key changes, the component will be destroyed and re-created with a new state.

Keys do not need to be globally unique; they only need to be unique between components and their siblings.

[Reference](https://reactjs.org/tutorial/tutorial.html#picking-a-key)

## Mutable/Immutable Data

There are generally two approaches to changing data. The first approach is to _mutate_ the data by directly changing the data’s values. The second approach is to replace the data with a new copy which has the desired changes.

[Reference](https://reactjs.org/tutorial/tutorial.html#why-immutability-is-important)

## Lifting State Up

To collect data from multiple children, or to have two child components communicate with each other, you need to declare the shared state in their parent component instead. The parent component can pass the state back down to the children by using props; this keeps the child components in sync with each other and with the parent component.

Lifting state into a parent component is common when React components are refactored.

[Reference](https://reactjs.org/tutorial/tutorial.html#lifting-state-up)

## Function Components

In React, **function components** are a simpler way to write components that only contain a `render` method and don’t have their own state. Instead of defining a class which extends `React.Component`, we can write a function that takes `props` as input and returns what should be rendered. Function components are less tedious to write than classes, and many components can be expressed this way.

[Reference](https://reactjs.org/tutorial/tutorial.html#function-components)