---
sidebar_label: Basic
description: Basic.
---

# Basic

## `getActive()`

```js
var spreadsheet = SpreadsheetApp.getActive();
```

Here, [`getActive()`](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet-app#getactive) returns an object representing the current **active** spreadsheet file in Sheets and sets it to the new variable `spreadsheet`.


## activation

```js
var sheet = spreadsheet.getActiveSheet();
sheet.getRange(
    spreadsheet.getCurrentCell().getRow(),
    1, 1, sheet.getMaxColumns()).activate();
```

These lines correspond to the action of clicking the first row to highlight it. This is called **_activation_**. The first line stores the current sheet in the variable `sheet`, while the second line gets the entire first row using the [`getRange()`](https://developers.google.com/apps-script/reference/spreadsheet/sheet#getrangerow,-column,-numrows,-numcolumns) method and then calls [`activate()`](https://developers.google.com/apps-script/reference/spreadsheet/range#activate()) to activate it. The first row is specified using the specific row and column numbers. The `spreadsheet.getCurrentCell().getRow()` call returns the number of the current row, while `sheet.getMaxColumns()` returns the maximum number of columns in the sheet.

## `getActiveRangeList()`

```js
spreadsheet.getActiveRangeList().setBackground('#4c1130')
.setFontColor('#ffffff')
.setFontWeight('bold');
```

This bit of code gets more complex. To efficiently call methods with `spreadsheet`, the code stacks three methods onto [`getActiveRangeList()`](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet#getActiveRangeList()) to prevent the code from redundantly calling on this `spreadsheet` method more than once. As you code more using Apps Script, you'll get more familiar with this convention of calling multiple methods on one class (also known as [method chaining](https://en.wikipedia.org/wiki/Method_chaining)). For now, you can read the following for brief explanations on each method in the code block:

*   [`getActiveRangeList()`](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet#getActiveRangeList()) returns the current active [`RangeList`](https://developers.google.com/apps-script/reference/spreadsheet/range-list) in `spreadsheet`. In this case, it's simply the first row the previous line activated.
*   Both the [`setBackground(color)`](https://developers.google.com/apps-script/reference/spreadsheet/range#setbackgroundcolor) and [`setFontColor(color)`](https://developers.google.com/apps-script/reference/spreadsheet/range#setfontcolorcolor) methods change the color attributes of the cells in the active range.
*   [`setFontWeight(fontWeight)`](https://developers.google.com/apps-script/reference/spreadsheet/range#setfontweightfontweight) adjusts the weight of the font for cells in the active range.

## `setFrozenRows()`

```js
spreadsheet.getActiveSheet().setFrozenRows(1);
```

This line freezes the first row of the macro.

To pin data in the same place and see it when you scroll, you can freeze rows or columns

## `@OnlyCurrentDoc`

When the `@OnlyCurrentDoc` comment is present in a script project, Apps Script only asks for permission to access and update the current spreadsheet. Without this comment, Apps Script would ask permission to access and update _all_ of the user's spreadsheets