---
sidebar_label: Centering the image
description: Centering the image.
---

# Centering the image

```css
img {
  display: block;
  margin: 0 auto;
}
```

The [`<body>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/body) is a **block** element, meaning it takes up space on the page. The margin applied to a block element will be respected by other elements on the page. In contrast, images are **inline** elements, for the auto margin trick to work on this image, we must give it block-level behavior using `display: block;`.

## References

[CSS basics - Learn web development | MDN](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/CSS_basics)