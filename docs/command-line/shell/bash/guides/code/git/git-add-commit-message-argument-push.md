---
sidebar_label: TOPIC
description: TOPIC.
---

# git add . and then commit message and push

```bash
#!/bin/bash
# if [ "$#" -ne 1 ]; then
#     echo "$#"
#     echo "Please enter a commit message in double quotes"
#     exit
# fi
COMMIT_MESSAGE=$@
git status
git add .
git commit --allow-empty -m "$COMMIT_MESSAGE"
git status
git push
echo "$COMMIT_MESSAGE"
# $@ refers to all of a shell script's command-line arguments.
```

## Usage

```
bash filename.sh Commit message here
```

## Additional

Save file in a working directory. alias it in `~/.bashrc` like `alias gacp='bash pathtofile.sh`
