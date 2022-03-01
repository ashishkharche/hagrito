---
sidebar_label: Anonymous and Arrow functions
description: Anonymous and Arrow functions.
---

# Anonymous and Arrow functions

## Anonymous

```js
document.querySelector('html').addEventListener('click', function() {
  alert('Ouch! Stop poking me!');
});
```

The functions we just passed to `addEventListener()` here are called _anonymous functions_, because they don't have a name.

## Arrow

```js
document.querySelector('html').addEventListener('click', () => {
  alert('Ouch! Stop poking me!');
});
```

There's an alternative way of writing anonymous functions, which we call an _arrow function_. An arrow function uses `() =>` instead of `function ()`