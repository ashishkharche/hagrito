---
sidebar_label: Check if directory path contains a string
description: Check if directory path contains a string.
---

# Check if directory path contains a string

```bash
for directory in $(find . -maxdepth 40 -type d)
do
    echo $directory
    if [[ $directory == *"cool"* ]]
    then
        echo "cool there."
    else
        echo "NO cool"
    fi
done 
```