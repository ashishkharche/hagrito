---
sidebar_label: Tools and Tips
description: Tools and Tips related to bash.
---

# Bash - Tools and Tips

## Is this shell interactive?

Test by looking at the content of the special parameter -, it contains an 'i' when the shell is interactive:

```
$ echo $-
himrBHs
rbash: /dev/null: restricted: cannot redirect output
```
[Advantages of the Bourne Again SHell](https://tldp.org/LDP/Bash-Beginners-Guide/html/sect_01_02.html)

## The file `/etc/shells` gives an overview of known shells on a Linux system:


Example: (On Ubuntu WSL2)

```
$ cat /etc/shells
# /etc/shells: valid login shells
/bin/sh
/bin/bash
/usr/bin/bash
/bin/rbash
/usr/bin/rbash
/bin/dash
/usr/bin/dash
/usr/bin/tmux
```

The default shell is set in the `/etc/passwd` file.

```
$ cat /etc/passwd
root:x:0:0:root:/root:/bin/bash
```

[Common shell programs](https://tldp.org/LDP/Bash-Beginners-Guide/html/sect_01_01.html)