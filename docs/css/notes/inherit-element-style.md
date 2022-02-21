---
sidebar_label: Inherit element style
description: Inherit element style.
---

# Inherit element style

Since [`<html>`](/en-US/docs/Web/HTML/Element/html) is the parent element of the whole page, all elements inside it inherit the same `font-size` and `font-family`.

```css
html {
  font-size: 10px; /* px means "pixels": the base font size is now 10 pixels high  */
  font-family: "Open Sans", sans-serif; /* this should be the rest of the output you got from Google fonts */
}
```
