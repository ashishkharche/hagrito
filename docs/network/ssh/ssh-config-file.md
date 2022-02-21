---
sidebar_label: SSH .config file
description: SSH .config file.
---

# SSH .config file

In your host machine, go to `~/.ssh` directory.

Generate keys:

```
ssh-keygen
```

It will generate `id_rsa`

If you want to rename files create an `.config` file in `~/.ssh`

Example file:

```
# Personal account, - the default config
Host github.com
   HostName github.com
   User git
   IdentityFile ~/.ssh/id_rsa

Host github.com-xyz
   HostName github.com
   User git
   IdentityFile ~/.ssh/id_rsa
   
# Work account-1
Host github.com-ak
   HostName github.com
   User git
   IdentityFile ~/.ssh/id_rsa_animalkingdom

# Work account-2
Host github.com-pg
   HostName github.com
   User git
   IdentityFile ~/.ssh/id_rsa_princeg

Host ubuntu
   HostName 192.168.1.81
   User root
   Port 9022
```



## Additional

When you give `*` to Host, all SSH requests will be only applicable to 192.168.56.102 in this case. 

```
Host *
   Hostname 192.168.56.102
   User mike
   IdentityFile ~/.ssh/id_rsa_vmconfig1
```