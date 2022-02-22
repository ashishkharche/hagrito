---
sidebar_label: View Local PDF in Dark Mode in Browser
description: View Local PDF in Dark Mode in Browser.
---

# View Local PDF in Dark Mode in Browser

Create a bookmarklet or paste the code in the console.

To open the console, right-click on the page and select "inspect". In the console window or tab, paste the below code.

```js
javascript:(function(){var cover=document.createElement("div");let css="position: fixed;\npointer-events: none;\ntop: 0;\nleft: 0;\nwidth: 100vw;\nheight: 100vh;\nbackground-color: white;\nmix-blend-mode: difference;\nz-index: 1;";cover.setAttribute("style", css);document.body.appendChild(cover);})(); 
```

A more readable version of the above code:

```js 
var cover = document.createElement("div");

let css = \`

position: fixed;

pointer-events: none;

top: 0;

left: 0;

width: 100vw;

height: 100vh;

background-color: white;

mix-blend-mode: difference;

z-index: 1;

\`

cover.setAttribute("style", css);

document.body.appendChild(cover);
```

## Steps

*   (If you don't see the bookmark bar) CTRL-SHIFT-B
*   Right-click on the bookmark bar to get the dropdown menu
*   Choose Bookmark Manager
*   Right-click again (anywhere) and choose 'Add new bookmark'
*   Type in a name for it.
*   In the URL part, if you are adding a javascript bookmarklet, paste the javscript code in. You have to prefex it with `javascript:` and it should minified and free of comments.

or you can use [Bookmarkleter](https://chriszarate.github.io/bookmarkleter/)