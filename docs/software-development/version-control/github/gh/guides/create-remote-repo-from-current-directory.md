---
sidebar_label: "create remote repo from current directory"
description: "create remote repo from current directory."
---

# create remote repo from current directory

```bash
#!/bin/bash
PROJECT_NAME=$@
git init
git config user.name "ashishkharche"
git config user.email "thekharche@gmail.com"
gh repo create $PROJECT_NAME --private --source=. --remote=origin
echo "Created $PROJECT_NAME with Private visibility on GitHub from the Current Directory with Remote as origin"
```