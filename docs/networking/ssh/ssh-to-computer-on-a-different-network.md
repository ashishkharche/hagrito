---
sidebar_label: SSH to computer on a different network
description: SSH to computer on a different network.
---

# SSH to computer on a different network

## Devices

Termux could be any device (Ubuntu, etc.)

```
My home PC IP : 192.168.1.82
Home public IP: 89.xxx.104.xxx

My office PC IP: 172.16.20.73
Office public IP: 167.xxx.32.xx

Home = Windows (connected to WIFI A)
Office = Termux (connected to WIFI B)
```

## Goal

SSH from Termux to Windows, that is SSH from Office to Home.

That means Home is the receiving device.

## Router settings

**NOTE**: Prefer to use port forwarding section of "Advanced Settings" instead of only "Settings" *if* you router has options in both.

We need to change the Router settings of the receiving device. 

Go to your router and add port forwarding config according to the below instructions.

Protocol: Any (BOTH TCP and UDP)
Port Range: 9033
Translate to: 22

When selecting the device, add the Private IP of the Receiving device in the field.

![](https://i.imgur.com/WAoYZwo.png)

![](https://i.imgur.com/dQ4ne8X.png)

## Connect

Now go to Termux or whatever machine you have.

Syntax:
```
ssh -p portrange usernameofreceivingdeviceuser@publicip
```

Execute:

```
ssh -p 9033 mike@89.xxx.104.xxx
```

[networking - Is it possible to ssh between two different network? - Ask Ubuntu](https://askubuntu.com/questions/749230/is-it-possible-to-ssh-between-two-different-network)