---
sidebar_label: Get Values Data
description: Google Apps Script Get Values Data.
---

# Get Values Data

```js 
function getValuesFromParticularSpreadsheet() {
  const id = '1-N7L_d_w0dGq2KY41Db4j2NN8zBwCLn1HXgRlraVnAU'

  const openSpreadsheet = SpreadsheetApp.openById(id)

  const sheet = openSpreadsheet.getSheetByName('Num1')
  if (sheet != null) {
    // This represents ALL the data
    const range = sheet.getDataRange()
    const values = range.getValues()
    Logger.log(values)
    values.forEach((val) => {
      Logger.log(val[2])
    })
  } 
}
```
