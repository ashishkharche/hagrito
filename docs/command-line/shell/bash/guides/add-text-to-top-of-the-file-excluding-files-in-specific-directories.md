---
sidebar_label: Add text to top of the file excluding files in specific directories
description: Add text to top of the file excluding files in specific directories.
---

# Add text to top of the file excluding files in specific directories

```bash
#!/bin/bash 

function addThreeDash {
echo "---"
}

function whenEmptyAddContent {
if [[ ! -s "$directory/resources.md" ]]
then
    echo "in ! -s"
    if [[ $directory != "." ]]
    then
        find . -type f -wholename "$directory/resources.md" -print | while read file_name
        do
            capname=${file_name##*/}
            capname=${capname^}
            capdirname=${directory##*/}
            capdirname=${capdirname^}
            echo "${directory##*/}"
            echo "$directory/resources.md"
            if [[ "$directory/resources.md" != "./resources.md" ]]
            then
                { addThreeDash;  echoit; addThreeDash;  } > $file_name
            fi
        done
    fi
fi
}

function echoit {
echo "sidebar_label: ${capname##*/}
description: ${capname##*/} for learning ${capdirname##*/}." | tr "-" " " | sed -e "s/.md//g" | sed -e "s/\.\///"
}

for directory in $(find . -maxdepth 40 -type d)
do
    # if directory name is guides, then ignore the code in if
    if [[ ${directory##*/} != "guides" && ${directory##*/} != ".mate" ]]
    then
        # if file does NOT exist called `resources.md` in each of the subdirectories, then proceed.
        if [[ ! -e "$directory/resources.md" ]]
        then
            echo "in ! -e"
            # Create the resources.md file.
            find $directory -type d -exec cp resources.md {} \;
        # if the file is empty then proceed
            whenEmptyAddContent
        else
            echo "else of ! -e"
            
            whenEmptyAddContent
        fi
    fi
done  
```