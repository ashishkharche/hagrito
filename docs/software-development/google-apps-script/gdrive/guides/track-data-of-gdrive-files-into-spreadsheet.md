---
sidebar_label: Track data of gdrive files into spreadsheet
description: Google Apps Script Track data of gdrive files into spreadsheet.
---

# Track data of gdrive files into spreadsheet

```js 

function getFileDetails() {
  const id = '1JJ_VZf3TbdywA-DA0NnjVFOoKiVnE36t'
  const folder = DriveApp.getFolderById(id)
  const files = folder.getFiles()

  const spreadSheet = SpreadsheetApp.create(folder.getName())
  spreadSheet.insertSheet('details')
  spreadSheet.appendRow(['URL', 'Size', 'Id'])
  while (files.hasNext()) {
    const file = files.next()
    // with spreadsheet we need array format
    const fileInfo = []
    fileInfo.push(file.getUrl())
    fileInfo.push(file.getSize())
    fileInfo.push(file.getId())
    Logger.log(fileInfo)
    spreadSheet.appendRow(fileInfo)
  }
}
```