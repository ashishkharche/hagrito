---
sidebar_label: Test -s -e
description: Test -s -e.
---

# Test -s -e

```bash
for directory in $(find . -maxdepth 40 -type d)
do
    if [[ $directory == *"cool"* ]]
    then
        if [[ ! -e "$directory/resources.md" ]]
        then
            echo "in ! -e"
            find $directory -type d -exec cp resources.md {} \;
        elif [[ ! -s "$directory/resources.md" ]]
        then
            echo "in ! -s"
            # add code to make it full sidebar label, sidebar description
        else
            echo "else of ! -e"
        fi
    fi
done 
```
