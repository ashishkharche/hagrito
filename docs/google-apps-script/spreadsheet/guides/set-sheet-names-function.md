---
sidebar_label: Set Sheet Names Function
description: Google Apps Script Set Sheet Names Function.
---

# Set Sheet Names Function

## For Loop to set names for all sheets

```js 
function setSheetNamesFunction() {
  const id = '1-N7L_d_w0dGq2KY41Db4j2NN8zBwCLn1HXgRlraVnAU'

  const openSpreadsheet = SpreadsheetApp.openById(id)

  Logger.log(openSpreadsheet)
  const sheetList = openSpreadsheet.getSheets()

  sheetList.forEach((sheet, i)=> {
    Logger.log(sheet.getName())
    sheet.setName("SheetNumSet" + i)
  })
  Logger.log(sheetList)
}
```

## Particular Sheet Name Function

```js 
function setParticularSheetNameFunction() {
  const id = '1-N7L_d_w0dGq2KY41Db4j2NN8zBwCLn1HXgRlraVnAU'

  const openSpreadsheet = SpreadsheetApp.openById(id)

  const sheetByIndex1 = openSpreadsheet.getSheets()[0];
  if (sheetByIndex1.getName() != 'Num1') {
      sheetByIndex1.setName('Num1');
  } 

  const sheet = openSpreadsheet.getSheetByName('SheetNumSet1')
  if (sheet != null) {
      sheet.setName('ChangedN1a1me')
  } 
}
```
