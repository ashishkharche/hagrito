---
sidebar_label: Weird Characters Output
description: Weird Characters in Git Bash output
---

# Git bash Terminal - Weird Characters Output

When you get weird characters in Git Bash output:

Open terminal in Adminstrator Mode.

Edit "bash.bashrc" file to include term cygwin:

````
nano /etc/bash.bashrc
```

Add this line at the end of file:

```
export TERM=cygwin
```

Restart terminal.

Done.

[linux - Git Bash is displaying strange characters on Windows 7 - Stack Overflow](https://stackoverflow.com/questions/35387667/git-bash-is-displaying-strange-characters-on-windows-7)