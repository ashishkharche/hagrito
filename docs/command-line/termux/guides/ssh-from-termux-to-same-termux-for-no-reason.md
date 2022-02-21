---
sidebar_label: SSH from Termux to same Termux for no reason
description: SSH from Termux to same Termux for no reason.
---

# SSH from Termux to same Termux for no reason

## Prerequisite

Follow steps in `ssh pure termux` doc.

## SSH

Now you are inside Termux.

```
ssh localhost -p 8022
```

```
ssh 127.0.0.1 -p 8022
```

Do ifconfig, find you lan IP

```
ssh 192.168.1.81 -p 8022
```

Do `whoami` to find username:

```
ssh u0_a445@192.168.1.81 -p 8022
```

## Exit

You will need to exit for each SSH connection to get out completely.
