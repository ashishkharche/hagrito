---
sidebar_label: Conditional
description: Conditional.
---

# Conditional

The `/REGEXP/FLAGS` portion can be used as a conditional expression to allow commands to execute only for the lines matching the pattern.

```bash
$ # change commas to hyphens only if the input line contains '2'
$ # space between the filter and the command is optional
$ printf '1,2,3,4\na,b,c,d\n' | sed '/2/ s/,/-/g'
1-2-3-4
a,b,c,d
```

Use /REGEXP/FLAGS! to act upon lines other than the matching ones.

```bash
$ # change commas to hyphens if the input line does NOT contain '2'
$ # space around ! is optional
$ printf '1,2,3,4\na,b,c,d\n' | sed '/2/! s/,/-/g'
1,2,3,4
a-b-c-d
```

`/REGEXP/` is one of the ways to define a filter in `sed`, termed as **address** in the manual.

[Selective editing - GNU SED](https://learnbyexample.github.io/learn_gnused/selective-editing.html)