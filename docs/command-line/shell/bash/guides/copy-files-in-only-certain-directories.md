---
sidebar_label: Copy files in only certain directories
description: Copy files in only certain directories.
---

# Copy files in only certain directories

```bash
for directory in $(find . -maxdepth 40 -type d)
do
    echo $directory
    if [[ $directory == *"cool"* ]]
    then
        find $directory -type d -exec cp 3.sh {} \;
        echo "cool there."
    else
        echo "NO cool"
    fi
done 
```