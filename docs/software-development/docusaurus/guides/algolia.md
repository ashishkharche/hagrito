---
sidebar_label: Algolia
description: Algolia.
---

# Algolia


## Create Application

On Algolia website

## Create Index

## Copy public key safe to commit 

Paste in the `docusaurus.config.js` section

```js

algolia: {
    // The application ID provided by Algolia
    appId: '717DLHwerQ9',

    // Public API key: it is safe to commit it
    apiKey: '28742e8b6bb8dwerwer244cf75ee057a',

    indexName: 'cndemoindex',

    // Optional: see doc section below
    contextualSearch: true,

    // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
    externalUrlRegex: 'external\\.com|domain\\.com',

    // Optional: Algolia search parameters
    searchParameters: {},

    //... other Algolia params
},
```

## Create new API key

Dont associate index when creating this api key

Add:
search
addObject
editSettings
deleteIndex

Put the Api key in `.env`


```
APPLICATION_ID=T3YU1werB8
API_KEY=87321ff67bqwewqe89b5bwe7fef458
```

## config.json

```json
{
    "index_name": "exampleindex",
    "start_urls": [
      "https://example.netlify.app/"
    ],
    "sitemap_urls": [
      "https://example.netlify.app/sitemap.xml"
    ],
    "sitemap_alternate_links": true,
    "stop_urls": [
      "/tests"
    ],
    "selectors": {
      "lvl0": {
        "selector": "(//ul[contains(@class,'menu__list')]//a[contains(@class, 'menu__link menu__link--sublist menu__link--active')]/text() | //nav[contains(@class, 'navbar')]//a[contains(@class, 'navbar__link--active')]/text())[last()]",
        "type": "xpath",
        "global": true,
        "default_value": "Documentation"
      },
      "lvl1": "header h1",
      "lvl2": "article h2",
      "lvl3": "article h3",
      "lvl4": "article h4",
      "lvl5": "article h5, article td:first-child",
      "lvl6": "article h6",
      "text": "article p, article li, article td:last-child"
    },
    "strip_chars": " .,;:#",
    "custom_settings": {
      "separatorsToIndex": "_",
      "attributesForFaceting": [
        "language",
        "version",
        "type",
        "docusaurus_tag"
      ],
      "attributesToRetrieve": [
        "hierarchy",
        "content",
        "anchor",
        "url",
        "url_without_anchor",
        "type"
      ]
    },
    "conversation_id": [
      "833762294"
    ],
    "nb_hits": 46250
  }
  
```

## Run the crawl from the Docker image

```
docker run -it --env-file=.env -e "CONFIG=$(cat /path/to/your/config.json | jq -r tostring)" algolia/docsearch-scraper
```
