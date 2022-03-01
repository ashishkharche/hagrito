---
sidebar_label: Order in which component files are parsed
description: Order in which component files are parsed.
---

# Order in which component files are parsed

When browsers send requests to servers for HTML files, those HTML files often contain [`<link>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link) elements referencing external [CSS](https://developer.mozilla.org/en-US/docs/Learn/CSS) stylesheets and [`<script>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script) elements referencing external [JavaScript](https://developer.mozilla.org/en-US/docs/Learn/JavaScript) scripts. It's important to know the order in which those files are [parsed by the browser](https://developer.mozilla.org/en-US/docs/Web/Performance/How_browsers_work#parsing) as the browser loads the page:

*   The browser parses the HTML file first, and that leads to the browser recognizing any `<link>`-element references to external CSS stylesheets and any `<script>`-element references to scripts.
*   As the browser parses the HTML, it sends requests back to the server for any CSS files it has found from `<link>` elements, and any JavaScript files it has found from `<script>` elements, and from those, then parses the CSS and JavaScript.
*   The browser generates an in-memory [DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model) tree from the parsed HTML, generates an in-memory [CSSOM](https://developer.mozilla.org/en-US/docs/Glossary/CSSOM) structure from the parsed CSS, and [compiles and executes](https://developer.mozilla.org/en-US/docs/Web/Performance/How_browsers_work#javascript_compilation) the parsed JavaScript.
*   As the browser builds the DOM tree and applies the styles from the CSSOM tree and executes the JavaScript, a visual representation of the page is painted to the screen, and the user sees the page content and can begin to interact with it.


## References

[How the Web works - Learn web development | MDN](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/How_the_Web_works)