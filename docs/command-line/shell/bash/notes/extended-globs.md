---
sidebar_label: Extended globs
description: Extended globs.
---

# Extended globs

bash has also built support in for more advanced glob patterns. These globs are called: extended globs. By default, support for them is disabled, but we can easily enable it in our current shell with the command:

```bash
shopt -s extglob
```

```
Extended Glob	Meaning
+(pattern[ | pattern ... ])	Matches when any of the patterns in the list appears, once or many times over. Reads: at least one of ....
*(pattern[ | pattern ... ])	Matches when any of the patterns in the list appears, once, not at all, or many times over. Reads: however many of ....
?(pattern[ | pattern ... ])	Matches when any of the patterns in the list appears, once or not at all. Reads: maybe one of ....
@(pattern[ | pattern ... ])	Matches when any of the patterns in the list appears just once. Reads: one of ....
!(pattern[ | pattern ... ])	Matches only when none of the patterns in the list appear. Reads: none of ....
```

## Example code

```
$ ls +([:digit:])' '*.oggFilenames that start with one or more digits.
05 Between Angels and Insects.ogg
07 Wake Up.ogg
$ ls *.jp?(e)gFilenames that end either in .jpg or .jpeg.
img_88751.jpg
igpd_45qr.jpeg
$ ls *.@(jpg|jpeg)Same thing, perhaps written more clearly!
img_88751.jpg
igpd_45qr.jpeg
$ ls !(my*).txtAll the .txt files that do not begin with my.
hello.txt
$ ls !(my)*.txtCan you guess why this one matches myscript.txt?
myscript.txt
hello.txt
```

Extended glob patterns can be extremely useful at times, but they can also be confusing and misleading. Let's focus on the last example: why does `!(my)*.txt` expand the pathname `myscript.txt`? Isn't `!(my)` supposed to only match when the pathname does _not_ have a `my` in this position? You are correct, it is! And yet, bash expands a pathname that begins with `my`!

The answer here is that bash will happily match this part of the pattern against the `m` at the beginning (which is not the same as `my`) or even empty space at the start of the filename. This means that in order for the pathname to still be eligible for expansion, the _rest of our pattern_ needs to match against the remainder of our pathname. And it so happens that we have a `*` glob right after the `!(my)` glob which will happily match the entirety of the filename. In this situation, the `!(my)` part matches against the `m` character in the beginning of the name, the `*` matches against the `yscript` part, and the `.txt` suffix of the pattern matches against the trailing `.txt` of our pathname. The pattern matches the name, so the name is expanded! When we include the `*` inside the `!()` pattern, this no longer works and the match fails against this pathname:

```bash
$ ls !(my)*.txt
myscript.txt
hello.txt
$ ls !(my*).txt
hello.txt
```