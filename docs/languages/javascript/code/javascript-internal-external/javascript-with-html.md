---
sidebar_label: JavaScript with HTML
description: JavaScript with HTML.
---

# JavaScript with HTML

The code in here shows different ways to use JavaScript with HTML.

## Internal

```js
document.addEventListener('DOMContentLoaded', () => {
  ...
});
```

This is an event listener, which listens for the browser's `DOMContentLoaded` event, which signifies that the HTML body is completely loaded and parsed. The JavaScript inside this block will not run until after that event is fired, therefore the error is avoided

## External

```js
<script src="script.js" defer></script>
```

In the external example, we use a more modern JavaScript feature to solve the problem, the `defer` attribute, which tells the browser to continue downloading the HTML content once the `<script>` tag element has been reached.

## Note

Note: In the external case, we did not need to use the DOMContentLoaded event because the defer attribute solved the problem for us. We didn't use the defer solution for the internal JavaScript example because defer only works for external scripts.

An old-fashioned solution to this problem used to be to put your script element right at the bottom of the body (e.g. just before the `</body>` tag), so that it would load after all the HTML has been parsed. The problem with this solution is that loading/parsing of the script is completely blocked until the HTML DOM has been loaded. On larger sites with lots of JavaScript, this can cause a major performance issue, slowing down your site.

## References

[learning-area/javascript/introduction-to-js-1/what-is-js at main · mdn/learning-area](https://github.com/mdn/learning-area/tree/main/javascript/introduction-to-js-1/what-is-js)

[What is JavaScript? - Learn web development | MDN](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript)

