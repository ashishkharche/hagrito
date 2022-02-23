---
sidebar_label: sed to delete everything before second occurence of a word
description: sed to delete everything before second occurence of a word.
---

# sed to delete everything before second occurence of a word

## resources.md

Input:

```
---
sidebar_label: Resources
description: Resources for learning sed.
---

# sed - Resources

## General

[sed, a stream editor](https://www.gnu.org/software/sed/manual/sed.html)

[Introduction - GNU SED](https://learnbyexample.github.io/learn_gnused/introduction.html#introduction)
```

## Code

```bash
sed -z 's/.*---\n\n//1' resources.md > resources.bak
```

## resources.bak

Output:

```
# sed - Resources

## General

[sed, a stream editor](https://www.gnu.org/software/sed/manual/sed.html)

[Introduction - GNU SED](https://learnbyexample.github.io/learn_gnused/introduction.html#introduction)
```