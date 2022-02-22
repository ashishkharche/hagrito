---
sidebar_label: List File Gdrive
description: Google Apps Script List File Gdrive.
---

# List File Gdrive

```js 
function listGdriveFiles() {
 const files = DriveApp.getFiles()
 Logger.log(files)

 while(files.hasNext) {
   const file = files.next()
   Logger.log(file)
 }
}
```
