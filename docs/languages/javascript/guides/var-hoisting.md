---
sidebar_label: var hoisting
description: var hoisting.
---

# var hoisting

Because `var` declarations are processed before any code is executed, declaring a variable anywhere in the code is equivalent to declaring it at the top. This also means that a variable can appear to be used before it's declared. This behavior is called "_hoisting_", as it appears that the variable declaration is moved to the top of the function or global code.

```js
bla = 2;
var bla;

// ...is implicitly understood as:

var bla;
bla = 2;

```

It's important to point out that only a variable's declaration is hoisted, not its initialization. The initialization happens only when the assignment statement is reached. Until then the variable remains `undefined` (but declared):

```js
function do_something() {
  console.log(bar); // undefined
  var bar = 111;
  console.log(bar); // 111
}

// ...is implicitly understood as:

function do_something() {
  var bar;
  console.log(bar); // undefined
  bar = 111;
  console.log(bar); // 111
}
```

## Note

Hoisting no longer works with `let`. If we changed `var` to `let` in the above example, it would fail with an error. This is a good thing — declaring a variable after you initialize it results in confusing, harder to understand code.

## References

[var - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var#var_hoisting)

[Storing the information you need — Variables - Learn web development | MDN](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Variables)