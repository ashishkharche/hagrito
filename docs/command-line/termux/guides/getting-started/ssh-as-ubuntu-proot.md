---
sidebar_position: 2
sidebar_label: Getting Started Termux SSH
description: Getting Started gudie for Termux SSH.
---

# Termux SSH - Getting Started

## Prerequisite

Login as root in ubuntu proot.

## apt

```
apt update
```

```
apt upgrade
```

## Install openssh-server

```
apt install openssh-server
```

## Modify sshd_config

```
nano /etc/ssh/sshd_config
```

### Port

```
Port 9022
Port 22
#AddressFamily any
ListenAddress 0.0.0.0
ListenAddress ::
```

### Login

```
#LoginGraceTime 2m
PermitRootLogin yes
```

## Restart ssh

```
/etc/init.d/ssh restart
```

## Check if ssh is setup correctly

```
ps -e | grep ssh
```

Output should show similar to:

```
root@localhost:~# ps -e | grep ssh
28292 ?        00:00:00 sshd
29576 ?        00:00:00 sshd
29679 ?        00:00:00 sshd
```

## Set root password

```
passwd root
```

## Get ip

Make sure computer and android are connected to same network.

On Termux:
```
ifconfig
```

Note the ip in wlan0:

```
wlan0: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>  mtu 1500
        inet 192.168.1.81
```

ip = 192.168.1.81

## Open windows terminal (Git bash for example)

```
ssh -l root -p 9022 192.168.1.81
```
Done

or you can use MobaXterm

Open MobaXterm and start session -> ssh.

Add

```
Remote host = 192.168.1.81
username = root
port = 9022
```


TLDR when its connected once properly, next time:

on termux
```
/etc/init.d/ssh start
``

on windows
```
ssh root@192.168.1.81 -p 9022
```