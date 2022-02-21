---
sidebar_label: Add text to the top of file where text is derived from the filename
description: Add text to the top of file where text is derived from the filename.
---

# Add text to the top of file where text is derived from the filename

## Script 1

Filename: 1.sh

```bash
find . -type f -name "*.md" -print | while read file_name
do
    basename=$file_name
    echo "---
" > "$basename.tmp"
    cat "$file_name" >> "$basename.tmp"
    mv "$basename.tmp" "$file_name"
done
```

## Script 2

Filename: 2.sh

```bash
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

## Script 3

Filename: 3.sh

```bash
find . -type f -name "*.md" -print | while read file_name
do
    basename=$file_name
    echo "---" > "$basename.tmp"
    cat "$file_name" >> "$basename.tmp"
    mv "$basename.tmp" "$file_name"
done
```

## Run

sh 1.sh && sh 2.sh && sh 3.sh