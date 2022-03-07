---
sidebar_label: Create Menu
description: Create Menu.
---

# Create Menu

## Code

```js
/**
 * A special function that runs when the spreadsheet is first
 * opened or reloaded. onOpen() is used to add custom menu
 * items to the spreadsheet.
 */
function onOpen() {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu('Book-list')
    .addItem('Load Book-list', 'loadBookList')
    .addToUi();
```

## `getUi()`

The first line uses the [`getUi()`](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet-app#getui) method to acquire a [**`Ui`**](https://developers.google.com/apps-script/reference/base/ui.html) object representing the user interface of the active spreadsheet this script is bound to.

## menu item

The next three lines create the menu (`Book-list`), add a menu item (`Load Book-list`) to that menu, and then add the menu to the spreadsheet's interface. This is done with the [`createMenu(caption)`](https://developers.google.com/apps-script/reference/base/ui#createmenucaption), [`addItem(caption, functionName)`](https://developers.google.com/apps-script/reference/base/menu#addItem(String,String)), and [`addToUi()`](https://developers.google.com/apps-script/reference/base/menu#addtoui) methods, respectively.

## `addItem()`

The `addItem(caption, functionName)` method creates a connection between the menu item label and the Apps Script function that runs when the menu item is selected. In this case, selecting the `Load Book-list` menu item causes Sheets to attempt to run the `loadBookList()` function (which doesn't exist yet).