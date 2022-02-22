---
sidebar_label: Sitemap to json plugin
description: Sitemap to json plugin.
---

# Sitemap to json plugin

## Create file in `src/plugins`

Example: `src/plugins/sitemap-to-json.js`

## Add Code

```js
const { writeFileSync } = require("fs")

module.exports = function sitemapToJson() {
    return {
        name: "docusaurus-plugin-sitemap-to-json",

        postBuild({ routesPaths }) {
            writeFileSync(
                "./misc/sitemaptojson.json",
                JSON.stringify({ routesPaths })
            )
        },
    }
}
```

## Create a file inside a directory to store output data

Example: `misc/sitemaptojson.json`

## Add the plugin path in `docusaurus.config.js`

```js
  plugins: [
    path.resolve("./src/plugins/sitemap-to-json")

    // or require.resolve("./src/plugins/sitemap-to-json"),
  ],
```

Make sure you have that `path` constant at top of `docusaurus.config.js` file.

```js
const path = require("path");
```

## Run

Do `yarn build` to generate output data.

Go to `misc/sitemaptojson.json` and check the content.

