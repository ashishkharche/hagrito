---
sidebar_label: let and const
description: let and const.
---

# let and const

As well as variables, you can declare constants. These are like variables, except that:

*   you must initialize them when you declare them
*   you can't assign them a new value after you've initialized them.

For example, using `let` you can declare a variable without initializing it:

```js
let count;
```

If you try to do this using `const` you will see an error:

```js
const count;
```

Similarly, with `let` you can initialize a variable, and then assign it a new value (this is also called _reassigning_ the variable):

```js
let count = 1;
count = 2;
```

If you try to do this using `const` you will see an error:

Note that although a constant in JavaScript must always name the same value, you can change the content of the value that it names. This isn't a useful distinction for simple types like numbers or booleans, but consider an object:

```js
const bird = { species : 'Kestrel'};
console.log(bird.species);  // "Kestrel"
```

You can update, add, or remove properties of an object declared using `const`, because even though the content of the object has changed, the constant is still pointing to the same object:

```js
bird.species = 'Striated Caracara';
console.log(bird.species);  // "Striated Caracara"
```

If you can't do as much with `const` as you can with `let`, why would you prefer to use it rather than `let`? In fact `const` is very useful. If you use `const` to name a value, it tells anyone looking at your code that this name will never be assigned to a different value. Any time they see this name, they will know what it refers to.

In this course, we adopt the following principle about when to use `let` and when to use `const`:

_Use `const` when you can, and use `let` when you have to._

This means that if you can initialize a variable when you declare it, and don't need to reassign it later, make it a constant.

## References

[Storing the information you need — Variables - Learn web development | MDN](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Variables)