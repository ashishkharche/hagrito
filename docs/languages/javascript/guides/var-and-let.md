---
sidebar_label: var and let
description: var and let.
---

# var and let

When you use `var`, you can declare the same variable as many times as you like, but with `let` you can't. The following would work:

```js
var myName = 'Chris';
var myName = 'Bob';
```

But the following would throw an error on the second line:

```js
let myName = 'Chris';
let myName = 'Bob';
```

You'd have to do this instead:

```js
let myName = 'Chris';
myName = 'Bob';
```

## References

[Storing the information you need — Variables - Learn web development | MDN](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Variables)