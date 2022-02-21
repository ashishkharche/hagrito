---
sidebar_label: Expand each separate element of our array list as a separate argument
description: Expand each separate element of our array list as a separate argument.
---

# Expand each separate element of our array list as a separate argument

```bash
$ files=( myscript hello.txt "05 Between Angels and Insect
s.ogg" )

username MINGW64 /t/github/random
$ echo "${files[@]: 2}"
05 Between Angels and Insects.ogg

username MINGW64 /t/github/random
$ echo "${files[@]}"
myscript hello.txt 05 Between Angels and Insects.ogg
```

[Variables and Expansions](https://guide.bash.academy/expansions/#toc5)