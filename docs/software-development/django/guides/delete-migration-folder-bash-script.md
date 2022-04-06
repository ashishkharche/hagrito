---
sidebar_label: "Delete migration folder bash script"
description: "Delete migration folder bash script."
---

# Delete migration folder bash script

## Delete everything in migrations folder except `__init__.py`

```bash
#!/bin/sh

for directory in $(find . -maxdepth 40 -type d -name "migrations")
do 
    if [[ $directory == *"venv"* ]]
    then
        echo "do nothing"
    else
        find "$directory" ! -name __init__.py ! -name p -type f -delete
    fi
done
```

## Delete migrations folder

```bash
find . -type d -name migrations -exec rm -v -rf {} +
```


