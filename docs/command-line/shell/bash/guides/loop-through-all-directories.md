---
sidebar_label: Loop through all directories
description: Loop through all directories.
---

# Loop through all directories

```bash
for directory in $(find . -maxdepth 40 -type d)
do
  # write code here
  echo $directory
done 
```