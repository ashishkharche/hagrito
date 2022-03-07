---
sidebar_label: onOpen()
description: onOpen().
---

# onOpen()

[`onOpen()`](https://developers.google.com/apps-script/guides/triggers/#onopene) is an example of a simple trigger. They're easy to set up—all you have to do is write an Apps Script function named `onOpen()` and Apps Script runs it every time the associated spreadsheet is opened or reloaded:

```js
/**
 * A special function that runs when the spreadsheet is first
 * opened or reloaded. onOpen() is used to add custom menu
 * items to the spreadsheet.
 */
function onOpen() {
 /* ... */ 
```