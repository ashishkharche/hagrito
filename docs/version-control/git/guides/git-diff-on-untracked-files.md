---
sidebar_label: Git Diff on untracked files
description: Git Diff on untracked files.
---

# Git Diff on untracked files

## Method 1

For one file:

    git diff --no-index /dev/null new_file

For all new files:

    for next in $( git ls-files --others --exclude-standard ) ; do git --no-pager diff --no-index /dev/null $next; done;

As alias:

    alias gdnew="for next in \$( git ls-files --others --exclude-standard ) ; do git --no-pager diff --no-index /dev/null \$next; done;"

For all modified and new files combined as one command:

    { git --no-pager diff; gdnew }

[Reference](https://stackoverflow.com/a/52093887)

or

## Method 2

Track files:

```
git add filename
```

Then:

```
git diff --cached
```

