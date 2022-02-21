---
sidebar_label: General Notes
description: General Notes used in sed.
---

# General Notes

## Name

*s*tream *ed*itor

## Functionality

Text editor for `stdin`

Output to `stdout`

## Replace matching sed syntax

Replace matching text.

Syntax: `s/REGEXP/REPLACEMENT/FLAGS`

- s stands for substitute command
- / is an idiomatic delimiter character to separate various portions of the command
- REGEXP stands for regular expression
- REPLACEMENT specifies the replacement string
- FLAGS are options to change default behavior of the command

## Simple replace

```bash
$ # sample command output for stream editing
$ printf '1,2,3,4\na,b,c,d\n'
1,2,3,4
a,b,c,d

$ # for each input line, change only the first ',' to '-'
$ printf '1,2,3,4\na,b,c,d\n' | sed 's/,/-/'
1-2,3,4
a-b,c,d

$ # change all matches by adding the 'g' flag
$ printf '1,2,3,4\na,b,c,d\n' | sed 's/,/-/g'
1-2-3-4
a-b-c-d
```

[Introduction - GNU SED](https://learnbyexample.github.io/learn_gnused/introduction.html#editing-standard-input)

## What is `g` in sed

`g` = global. Replaces all occurences.

## Backup with sed

```bash
sed -i.bak 's/blue/green/' colors.txt
```

Creates `colors.txt.bak`

To not do backup, just use `-i` standalone.

### Multiple files

```bash
$ sed -i.bkp 's/bad/good/' f1.txt f2.txt
$ ls f?.*
f1.txt  f1.txt.bkp  f2.txt  f2.txt.bkp
```

### Prefix backup

`*` here gets replaced with input filename

```bash
$ # single quotes is used here as * is a special shell character
$ sed -i'bkp.*' 's/green/yellow/' colors.txt

$ ls *colors*
bkp.colors.txt  colors.txt
```

### Backups in different directory

```bash
$ mkdir backups
$ sed -i'backups/*' 's/good/nice/' f1.txt f2.txt
$ ls backups/
f1.txt  f2.txt
```

[In-place file editing - GNU SED](https://learnbyexample.github.io/learn_gnused/in-place-file-editing.html#in-place-file-editing)

## Delete command

```bash
$ # same as: grep -v 'at'
$ printf 'sea\neat\ndrop\n' | sed '/at/d'
sea
drop
```

```bash
$ # same as: grep 'at'
$ printf 'sea\neat\ndrop\n' | sed '/at/!d'
eat
```

Using an **address** is optional. So, for example, sed '!d' file would be equivalent to the cat file command.

## print command

To print the filtered lines, use the `p` command. But, recall that all input lines are printed by default. So, this command is typically used in combination with `-n` command line option, which would turn off the default printing.

```bash
$ # same as: grep '1' programming_quotes.txt | sed 's/1/one/g'
$ sed -n 's/1/one/gp' programming_quotes.txt
naming things, and off-by-one errors by Leon Bambrick

$ # filter + substitution + p combination
$ # same as: grep 'not' programming_quotes.txt | sed 's/in/**/g'
$ sed -n '/not/ s/in/**/gp' programming_quotes.txt
by def**ition, not smart enough to debug it by Brian W. Kernighan
A language that does not affect the way you th**k about programm**g,
is not worth know**g by Alan Perlis
```

Using `!p` with `-n` option will be equivalent to using the d command.

```bash
$ # same as: sed '/at/d'
$ printf 'sea\neat\ndrop\n' | sed -n '/at/!p'
sea
drop
```