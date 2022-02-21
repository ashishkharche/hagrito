---
sidebar_label: Copy file only if that file does not already exists
description: Copy file only if that file does not already exists.
---

# Copy file only if that file does not already exists

```bash
for directory in $(find . -maxdepth 40 -type d)
do
    if [[ $directory == *"cool"* ]]
    then
        if [[ ! -e "$directory/resources.md" ]]
        then
            find $directory -type d -exec cp resources.md {} \;
        fi
    fi
done 
``` 

```
[[ -s resources.md ]] && echo "full" || echo "empty"
```