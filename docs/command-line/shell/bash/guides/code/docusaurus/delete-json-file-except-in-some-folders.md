---
sidebar_label: Delete json file except in some folders
description: Delete json file except in some folders.
---

# Delete json file except in some folders

## Code

```bash
for directory in $(find . -maxdepth 40 -type d)
do
    # if directory name is guides, then ignore the code in if
    if [[ ${directory##*/} != "guides" && ${directory##*/} != "tech-support" && ${directory##*/} != "." && ${directory##*/} != "notes" ]]
    then
        for i in ${directory##*/}
        do
            echo "i: $i"
            find $i -name "*_category_.json" -type f -delete
        done
    fi
done
```

## Structure

Before executing code:

```
|-- ./del.sh
|-- ./guides
|   `-- ./guides/_category_.json
`-- ./ok
    `-- ./ok/_category_.json

2 directories, 3 files
```

Executing code:

```
$ bash del.sh 
i: ok
```

After executing code:

``` 
|-- ./del.sh
|-- ./guides
|   `-- ./guides/_category_.json
`-- ./ok

2 directories, 2 files
```