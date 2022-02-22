---
sidebar_label: Netlify CMS for docusaurus
description: Netlify CMS for docusaurus.
---

# Netlify CMS for docusaurus

## Create an index.js file

So that we can put netlify identity scripts in it.

## Add slug

Set a .md or .mdx file slug to / so that when clicked on Nav "Docs" link, we route there.

## Modify `docusaurus.config.js`

File: 

`docusaurus.config.js`

Code:

```js
// Remove this
routeBasePath: "/",
```