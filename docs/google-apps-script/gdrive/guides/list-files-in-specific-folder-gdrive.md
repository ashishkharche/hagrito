---
sidebar_label: List files in specific folder gdrive
description: Google Apps Script List files in specific folder gdrive.
---

# List files in specific folder gdrive

```js 
function listGdriveFiles(folder) {
  const files = folder.getFiles()
  Logger.log(files)

  while (files.hasNext) {
    const file = files.next()
    Logger.log(file)
  }
}

function filesInFolder() {
  const driveFolderId = '1VDtOhdoeXTbybwMIwYT7F57cFdtY0ziW'
  const folder = DriveApp.getFolderById(driveFolderId)
  listGdriveFiles(folder)
}
```