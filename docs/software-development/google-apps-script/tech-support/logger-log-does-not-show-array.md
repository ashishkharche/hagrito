---
sidebar_label: Logger log does not show array
description: Logger log does not show array.
---

# Logger log does not show array

When using:

```js
Logger.log(`resourceValues ${resourceValues}`)
```

The 2D array square brackets are NOT shown in console.

Prefer:

```js
Logger.log(resourceValues)
```