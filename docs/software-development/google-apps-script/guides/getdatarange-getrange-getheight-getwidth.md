---
sidebar_label: getDataRange(), getRange(), getHeight(), getWidth()
description: getDataRange(), getRange(), getHeight(), getWidth().
---

# getDataRange(), getRange(), getHeight(), getWidth()

```js
function loadBookList() {
  // Gets the active sheet.
  var sheet = SpreadsheetApp.getActiveSheet();

  // Gets a different spreadsheet from Drive using
  // the spreadsheet's ID.
  var bookSS = SpreadsheetApp.openById(
    "17tqLyCfFIeFdcSGAWepRUprod4Chc5NYD-X_GwFJLgk"
  );

  // Gets the sheet, data range, and values of the
  // spreadsheet stored in bookSS.
  var bookSheet = bookSS.getSheets()[0];
  var bookRange = bookSheet.getDataRange();
  var bookListValues = bookRange.getValues();

  // Add those values to the active sheet in the current
  // spreadsheet. This overwrites any values already there.
  sheet
    .getRange(1, 1, bookRange.getHeight(), bookRange.getWidth())
    .setValues(bookListValues);

  // Rename the destination sheet and resize the data
  // columns for easier reading.
  sheet.setName("Book-list");
  sheet.autoResizeColumns(1, 3);
}
```

So how does this function work? The `loadBookList()` function uses methods primarily from the `Spreadsheet`, `Sheet`, and `Range` classes the previous codelabs introduced. With these concepts in mind, you can break down the `loadBookList()` code into the following four sections:

### **1: Identify the destination sheet**

The first line uses `SpreadsheetApp.getActiveSheet()` to get a reference to the current sheet object and stores it in the variable `sheet`. This is the sheet the data will be copied to.

### **2: Identify the source data**

The next few lines establish four variables that refer to the source data you're retrieving:

*   `bookSS` stores a reference to the spreadsheet the code is reading data from. The code finds the spreadsheet by its **spreadsheet ID**. In this example, we provided the ID of a source spreadsheet to read from, and open the spreadsheet using the [`SpreadsheetApp.openById(id)`](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet-app#openById(id)) method.
*   `bookSheet` stores a reference to a sheet within `bookSS` that contains the data you want. The code identifies the sheet to read from by its name, `codelab-book-list`.
*   `bookRange` stores a reference to a range of data in `bookSheet`. The method [`Sheet.getDataRange()`](https://developers.google.com/apps-script/reference/spreadsheet/sheet#getDataRange()) returns the range containing all the non-empty cells in the sheet. It's an easy way of making sure you get a range covering all the data in a sheet without including empty rows and columns.
*   `bookListValues` is a 2D array containing all the values taken from the cells in `bookRange`. The [`Range.getValues()`](https://developers.google.com/apps-script/reference/spreadsheet/range#getValues()) method generates this array by reading data from the source sheet.

### **3: Copy the data from source to destination**

The next code section copies the `bookListValues` data into `sheet`, and then renames the sheet as well:

*   [`Sheet.getRange(row, column, numRows, numColumns)`](https://developers.google.com/apps-script/reference/spreadsheet/sheet#getRange(Integer,Integer,Integer,Integer)) is used to identify where to copy the data in `sheet`.
*   The [`Range.getHeight()`](https://developers.google.com/apps-script/reference/spreadsheet/range#getheight) and [`Range.getWidth()`](https://developers.google.com/apps-script/reference/spreadsheet/range#getwidth) methods are used to measure the size of the data and define a destination range of the same dimensions.
*   [`Range.setValues(values)`](https://developers.google.com/apps-script/reference/spreadsheet/range#setValues(Object)) copies the 2D array of `bookListValues` into the destination range, overwriting any data already there.

### **4: Format the destination sheet**

The [`Sheet.setName(name)`](https://developers.google.com/apps-script/reference/spreadsheet/sheet#setName(String)) is used to change the destination sheet name to `Book-list`. The last line in the function uses [`Sheet.autoResizeColumns(startColumn, numColumns)`](https://developers.google.com/apps-script/reference/spreadsheet/sheet#autoresizecolumnsstartcolumn,-numcolumns) to resize the first three columns in the destination sheet, allowing you to read the new data more easily.
