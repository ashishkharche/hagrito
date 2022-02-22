#!/bin/bash

function addOpeningCurlyBrace {
    echo "{"
}

function addLinkInCateogoryJson {
    echo "  \"link\": {
    \"type\": \"generated-index\","
}
function addLinkTitleInCateogoryJson {
    echo "    \"title\": \"${capdirname##*/}\"," | tr "-" " " | sed -e "s/.md//g" | sed -e "s/\.\///"
}

function addClosingCurlyBrace {
    echo "}"
}

function addGuidesDescription {
    echo "    \"description\": \"Concise and focused guides to understand ${grandparent_directory^}\"
  }"
}

categoryfilename="_category_.json"


function whenEmptyAddContent {
    if [[ ! -s "$directory/$categoryfilename" ]]
    then
        echo "in ! -s"
        if [[ $directory != "." ]]
        then
            find . -type f -wholename "$directory/$categoryfilename" -print | while read file_name
            do
                grandparent_directory="$(basename "$(dirname "$(dirname "$file_name")")")"
                echo "Grandparent Directory: $grandparent_directory"
                capname=${file_name##*/}
                capname=${capname^}
                capdirname=${directory##*/}
                capdirname=${capdirname^}
                echo "${directory##*/}"
                echo "$directory/$categoryfilename"
                if [[ "$directory/$categoryfilename" != "./$categoryfilename" ]]
                then
                    { addOpeningCurlyBrace;  echoit; addLinkInCateogoryJson; addLinkTitleInCateogoryJson; addGuidesDescription; addClosingCurlyBrace;  } > $file_name
                fi
            done
        fi
    fi
}

function echoit {
    echo -e "  \"label\": \"${capdirname##*/}\",
  \"collapsed\": \"true\"," | tr "-" " " | sed -e "s/.md//g" | sed -e "s/\.\///"
}

for directory in $(find . -maxdepth 40 -type d)
do
    echo "DDDD: $directory"
    # if directory name is guides, then ignore the code in if
    if [[ ${directory##*/} != "HIDEFROMSITE" && ${directory##*/} != ".mate" ]]
    then
        if [[ ${directory##*/} == "guides" ]]
        then
            # if file does NOT exist called `$categoryfilename` in each of the subdirectories, then proceed.
            if [[ ! -e "$directory/_category_.json" ]]
            then
                echo "in ! -e"
                # Create the $categoryfilename file.
                find $directory -type d -exec cp _category_.json {} \;
                # if the file is empty then proceed
                whenEmptyAddContent
            else
                echo "else of ! -e"
                
                whenEmptyAddContent
            fi
        fi
    fi
done