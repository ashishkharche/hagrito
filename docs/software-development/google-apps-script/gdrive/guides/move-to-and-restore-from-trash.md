---
sidebar_label: Move to and restore from trash
description: Google Apps Script Move to and restore from trash.
---

# Move to and restore from trash

```js 
function moveToTrash() {
  const files = DriveApp.getFilesByName('filename2')

  while (files.hasNext()) {
    const file = files.next()
    // const today = new Date()
    // const fileDate = file.getLastUpdated()
    // const filename = file.getName()
    // const fileType = file.getMimeType()

    const fileInfo = {}
    const today = new Date()
    const fileDate = file.getLastUpdated()
    fileInfo.active = today - fileDate
    fileInfo.filename = file.getName()
    fileInfo.fileType = file.getMimeType()
    if (fileInfo.active < 1200000) {
      file.setTrashed(true)
    }
    Logger.log(fileInfo)
  }
}

function restoreFromTrash() {
  const files = DriveApp.getTrashedFiles()

  while (files.hasNext()) {
    const file = files.next()
    const fileInfo = {}
    const today = new Date()
    const fileDate = file.getLastUpdated()
    fileInfo.active = today - fileDate
    fileInfo.filename = file.getName()
    fileInfo.fileType = file.getMimeType()
    if (fileInfo.active < 1200000) {
      file.setTrashed(false)
    }
    Logger.log(fileInfo)
  }
}
```
