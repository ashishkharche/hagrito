---
sidebar_label: Tools and Tips
description: Tools and Tips related to Termux.
---

# Termux - Tools and Tips

## How to figure out distro name and its details in Termux?

Inside termux, do `uname -a`

When installed other distro like Arch Linux, enter Arch Linux by executing `startarch` and then:

```
cat /etc/*-release
```

or

```
uname -a
```


## What is `$PREFIX` in termux?

$PREFIX is a Termux rootfs, expands to `/data/data/com.termux/files/usr`

[Reference](https://www.reddit.com/r/termux/comments/g65y95/can_someone_explain_me_why_i_have_to_use_prefix/)

## How to remove all packages that are installed from Termux?

```
rm -rf $PREFIX 
```

or simply delete "App Data" from Android app setting of Termux

[Reference](https://www.reddit.com/r/termux/comments/gbpk5x/how_to_delete_everything_installed_and_related_to/)