---
sidebar_label: mkdir directory from file name
description: mkdir directory from file name.
---

# mkdir directory from file name

```bash
for file in $(find . -name "*.md" -type f)
do
    echo "file: $file"
    filenamewithextension=${file##*/}
    echo "file name with extension: $filenamewithextension"
    mkdir ${filenamewithextension%.*} 
    echo "file name without extension: ${filenamewithextension%.*}"
    mv ${filenamewithextension} ${filenamewithextension%.*}/${filenamewithextension}
done
```