---
sidebar_label: Terminals database is inaccessible
description: Terminals database is inaccessible.
---

# Terminals database is inaccessible

Assuming you are using Git bash.

In your /etc/bash.bashrc, add this:

```
export TERM='xterm'
```
If you have the following line `export TERM=cygwin`, comment it or remove it.

