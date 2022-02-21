---
sidebar_label: SSH without a password
description: SSH without a password.
---

# SSH without a password

In your host machine, go to `~/.ssh` directory.s

Generate keys:

```
ssh-keygen
```

It will generate `id_rsa`

If you want to rename files create an `.config` file in `~/.ssh`

Copy the contents of `.pub` file.

SSH into your remote machine:
(It will ask for a password)
```
// Example
ssh mike@192.168.56.102
```

In your remote machine's `~/.ssh` directory, create a `authorized_keys` file.

Add the content from `.pub` to the `authorized_keys` file.

or from your host machine use to copy it to `authorized_keys` file:
(you do not need to manually create `authorized_keys` file before executing this command. It generates it.)

```
ssh-copy-id -i id_rsa_vmconfig1 mike@192.168.56.102
```
or
For pure Termux (port 8022)
```
ssh-copy-id -i id_rsa -p 8022 u0_a445@192.168.1.81
```

Now try to SSH in to your remote machine from new instance of your terminal in your host machine.
(It will NOT ask for a password)
// Example
ssh mike@192.168.56.102
```

[Using ssh-copy-id to install SSH keys on servers as authorized keys for passwordless authentication. Options and troubleshooting.](https://www.ssh.com/academy/ssh/copy-id)