---
sidebar_label: y command
description: y command.
---

# y command

`y/src/dst/`

Transliterate any characters in the pattern space which match any of the `source-chars` with the corresponding character in `dest-chars`.

```bash
$ echo 'goal new user sit eat dinner' | sed 'y/aeiou/AEIOU/'
gOAl nEw UsEr sIt EAt dInnEr
```
[learn_gnused/Exercise_solutions.md at master · learnbyexample/learn_gnused](https://github.com/learnbyexample/learn_gnused/blob/master/exercises/Exercise_solutions.md)

[sed commands list (sed, a stream editor)](https://www.gnu.org/software/sed/manual/html_node/sed-commands-list.html)