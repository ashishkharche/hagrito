---
sidebar_label: Check if there is only one argument
description: Check if there is only one argument.
---

# Check if there is only one argument

```bash
#!/bin/bash
if [ "$#" -ne 1 ]; then
    echo "$#"
    echo "Usage: ./filename.sh only-1-argument-here"
    exit
fi
BUCKET=$1
echo $BUCKET
```
