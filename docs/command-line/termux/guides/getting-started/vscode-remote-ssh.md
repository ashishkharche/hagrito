---
sidebar_position: 3
sidebar_label: VSCode Remote SSH
description: VSCode Remote SSH.
---

# VSCode Remote SSH

## Install

Install Remote - SSH extension in VSCode

## Modify configuration file

Click on the `><` green button at bottom left and select `open SSH configuration file`

Select the path of `path/.ssh/config`

Add:

```
Host ubuntu
   HostName 192.168.1.81
   User root
   Port 9022
```

Make sure the port matches the one set in the Termux ubuntu config `/etc/ssh/sshd_config`

## Connect to host

Click on the `><` green button at bottom left and select `Connect to Host`

Choose `Linux` and enter password.

## Create files

Create new files. Done.
