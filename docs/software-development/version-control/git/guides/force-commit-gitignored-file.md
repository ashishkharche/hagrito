---
sidebar_label: Force commit gitignored file
description: Force commit gitignored file.
---

# Force commit gitignored file

```
$ cat .gitignore
*.log
  
$ git add -f debug.log
  
$ git commit -m "Force adding debug.log"
```
