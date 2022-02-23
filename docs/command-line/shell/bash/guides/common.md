
---
sidebar_label: Common
description: Common.
---

# Common

## Create directories before cloning Git based on username and remove a .idea directory after cloning it with a shell script

For `ssh`: git@github.com/username/repo.git

```
#!/bin/bash

url=$1

# git@github.com:geolay/MyRetroFit.git

username_and_repo=${url##*:}; 
username=${username_and_repo%/*}

echo "username_and_repo: $username_and_repo" # geolay/MyRetroFit
echo "username: $username" # geolay

mkdir "$username" 
cd "$username"
git clone $url

repogit=${url##*/};

echo "repogit: $repogit"

folder=${repogit%.*}

echo "folder: $folder" # geolay

rm -r $folder/.idea
rm -r $folder/.gradle

```

Usage:

```
sh filename.sh git@github.com:geolay/MyRetroFit.git

```

For `https`

``` 
#!/bin/bash

url=$1

# https://github.com/androiddevnotes/awesome-google-engineering-blogs.git

username_and_repo=${url#*/};
username_and_repo2=${username_and_repo#*/};
username_and_repo3=${username_and_repo2#*/};

username=${username_and_repo3%/*}

echo "username_and_repo: $username_and_repo" # geolay/MyRetroFit
echo "username_and_repo2: $username_and_repo2" # geolay/MyRetroFit
echo "username_and_repo3: $username_and_repo3" # geolay/MyRetroFit
echo "username: $username" # geolay

mkdir "$username"

cd "$username"

echo "----- creating directory: $username -----" # geolay

git clone $url

repogit=${url##*/};

echo "repogit: $repogit"

folder=${repogit%.*}

# echo "folder: $folder" # geolay

echo "----- removing troublesome directories if they are cloned. -----" # geolay

rm -r $folder/.idea
rm -r $folder/.gradle
```

Source: https://stackoverflow.com/questions/15148796/get-string-after-character

## Rename files recursively from all subdirectories

```
find . -name '*.*' -exec sh -c 'mv "$0" "${0%.*}.md"' {} \;

```

or

```
find . -name '*.md' -exec sh -c 'mv "$0" "${0%.md}.txt"' {} \;

```

https://superuser.com/a/213143/1296039

## Delete files recursively from all subdirectories

```
find . -name "*.sh" -type f -delete
```

https://askubuntu.com/questions/377438/how-can-i-recursively-delete-all-files-of-a-specific-extension-in-the-current-di

## Add files recursively to all the subdirectories

```
find . -type d -exec cp file {} \;
```

## Remove all contents from the text file using bash `sed`

Recursive:

Replace all contents from the .md files to empty.

```
find dir1 -name '*.md' -exec sed -i '/.*/d' {} +
```

or 

Append " operating system" to "beach"

```
find dir1 -name '*.md' -exec sed -i 's/beach/& operating system/g' {} +
```

Not recursive:

```
for file in *.md
do
    sed '/.*/d' "$file" > "docs/$file".new_file.md
done

```

Source: https://www.baeldung.com/linux/recursive-search-and-replace

## How to add text to the top of file where text is derived from the filename

Usecase:

hello-bro.md
```

sometext

```

Result:

```
---

title: hello bro.md

sometext

```

NAME: 1.sh

``` 
find . -type f -name "*.md" -print | while read file_name
do
    basename=$file_name
    echo "---
" > "$basename.tmp"
    cat "$file_name" >> "$basename.tmp"
    mv "$basename.tmp" "$file_name"
done

```

NAME: 2.sh

``` 
find . -type f -name "*.md" -print | while read file_name
do
    basename=${file_name##*/}
    echo "  
title: \"$basename\"
sub: \"$basename Some Text\"
dub: \"Some Text $basename text\"
" | tr "-" " " | sed -e "s/.md//g" | sed -e "s/\.\///" > "$basename.tmp"
    cat "$file_name" >> "$basename.tmp"
    mv "$basename.tmp" "$file_name"
done
```

NAME: 3.sh

``` 
find . -type f -name "*.md" -print | while read file_name
do
    basename=$file_name
    echo "---" > "$basename.tmp"
    cat "$file_name" >> "$basename.tmp"
    mv "$basename.tmp" "$file_name"
done

```

RUN: sh 1.sh && sh 2.sh && sh 3.sh