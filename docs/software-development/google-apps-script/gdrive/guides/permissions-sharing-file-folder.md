---
sidebar_label: Permissions and sharing file and folder
description: Google Apps Script Permissions and sharing file and folder.
---

# Permissions and sharing file and folder

```js 
function myFiles() {
  const driveFolderId = '1o3_5oLMSe-2jNsr3HJ54fco7frcgg_bf'
  const folder = DriveApp.getFolderById(driveFolderId)
  const files = folder.getFiles()
  while (files.hasNext()) {
    const file = files.next()
    const editors = file.getEditors()
    Logger.log(file.getName())
    editors.forEach((editor) => {
      logUserInfo(editor)
      // file.removeEditor(editor.getEmail())
    })

    file.setSharing(DriveApp.Access.ANYONE, DriveApp.Permission.VIEW)
    file.addEditor('example1@gmail.com')
    file.addViewer('example2@gmail.com')
  }

}

function myFolder() {
    const driveFolderId = '1o3_5oLMSe-2jNsr3HJ54fco7frcgg_bf'
  const folder = DriveApp.getFolderById(driveFolderId)
  folder.addEditor("example@gmail.com")
}

function configPermissions() {
  const driveFolderId = '1o3_5oLMSe-2jNsr3HJ54fco7frcgg_bf'
  const folder = DriveApp.getFolderById(driveFolderId)

  const editors = folder.getEditors()

  editors.forEach((editor) => {
    logUserInfo(editor)
  })

  const viewers = folder.getEditors()
  viewers.forEach((viewer) => {
    logUserInfo(viewer)
  })

  const owner = folder.getOwner()
  logUserInfo(owner)
}

function logUserInfo(user) {
  Logger.log(user.getName())
  Logger.log(user.getEmail())
}
```