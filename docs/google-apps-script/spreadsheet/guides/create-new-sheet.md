---
sidebar_label: Create New Sheet
description: Google Apps Script Create New Sheet.
---

# Create New Sheet

```js 

function createNewSheet() {
    const id = '1-N7L_d_w0dGq2KY41Db4j2NN8zBwCLn1HXgRlraVnAU'

  const openSpreadsheet = SpreadsheetApp.openById(id)

  const name = 'SheetNameValue'

  let sheet = openSpreadsheet.getSheetByName(name)

  if (sheet == null) {
    sheet = openSpreadsheet.insertSheet()
    sheet.setName(name)
  }
}

```