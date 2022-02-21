---
sidebar_label: Create file and folder
description: Google Apps Script Create file and folder.
---

# Create file and folder

```js 
function createFileInGdrive() {
  DriveApp.createFile('New HTML2 File', '<b>createFileInGdrive!</b>', MimeType.HTML) 
}

function createFileInSpecificFolder() {
  const folder = DriveApp.getFolderById('1tJLOO8SPgM_z-b6nqamkBLIDr24GIRrd')
    folder.createFile('filername1', '<b>createFileInSpecificFolder</b>', MimeType.HTML) 
}

function createNewFileInNewFolder() {
  const newFolder = DriveApp.createFolder('foldername')
   newFolder.createFile('filename2', '<b>new folder content</b>', MimeType.HTML) 
}
```