---
sidebar_label: SSH windows host to oracle virtualbox guest
description: SSH windows host to oracle virtualbox guest.
---

# SSH windows host to oracle virtualbox guest

## Network settings in Oracle virtualbox

### For Adapter 1:

Name: SSH
Protocol: TCP
Host IP: 127.0.0.1
Host Port: 9022
Guest IP: Empty
Guest Port: 22

![](https://i.imgur.com/iJlqBez.png)

### For Adapter 2:

Attached to Host-only Adapter

![](https://i.imgur.com/GMrf5dX.png)

## Start up your virtualbox

```
sudo apt-get update
```

```
sudo apt-get upgrade
```

Install SSH server:

```
sudo apt-get install openssh-server
```

Start SSH:

```
service ssh start
```

Check status of SSH:

```
service ssh status
```

Make sure it is running

[Ubuntu Linux: Start, Stop, Restart, Reload OpenSSH Server - nixCraft](https://www.cyberciti.biz/faq/howto-start-stop-ssh-server/)

## Open up terminal in your host machine example Windows

Connect without port forwarding:

```
ssh username@192.168.65.102
```

Connect using port forwarding:

```
ssh username@127.0.0.1 -p 2222
```

or

```
ssh username@localhost -p 2222
```

Enter password when prompted.