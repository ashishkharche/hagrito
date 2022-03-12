---
sidebar_label: SSH files are too open permissions error
description: SSH files are too open permissions error.
---

# SSH files are too open permissions error

## On Windows:

Make sure you only give permission to your account and limited perssion. Example only READ permission.

![](https://i.imgur.com/IF7Z2UI.png)

## On Linux:

Try with 

```
chmod 400 filename.pem
```