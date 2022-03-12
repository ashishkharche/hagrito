---
sidebar_label: "AWS EC2 Create OpenVPN server with easy rsa version 2"
description: "AWS EC2 Create OpenVPN server with easy rsa version 2."
---

# AWS EC2 Create OpenVPN server with easy rsa version 2

## Create EC2 Instance

Go to https://console.aws.amazon.com/ec2/v2/home

### Choose AMI

Debian, Ubuntu, etc. Free tiers.

### Instance Type

t2 micro

### Instance Details

Choose VPC, subnet of your choice. Or keep it default.

### Storage

Keep default. 8GB

### Tags

Name: OpenVpnServerEc2Instance

### Security Group

SSH TCP 22 Anywhere

Custom UDP 1194 Anywhere

All ICMP Anywhere

[Port 1194 (tcp/udp) :: SpeedGuide](https://www.speedguide.net/port.php?port=1194)

### Launch

Choose new key pair. Download.

Or use existing if you have one.

## SSH into EC2 Instance

Go to working directory where `.pem` key pair is downloaded.

Go to Ec2 Instance you just created and click on Connect. Copy the ssh command to connect.

Example:

```
ssh -i "AwsOpenVpnServerEc2Instance.pem" admin@ec2-54-86-20-173.compute-1.amazonaws.com
```

Login as root:

```
sudo su
```

## Setup Ec2 Instance

### Package update

```
apt update && apt upgrade
```

### Reboot instance

```
systemctl reboot
```

Wait 30 seconds before login in again.

### Install openvpn and eas-rsa

```
apt install openvpn easy-rsa
```

## Create CA

```
make-cadir ca
```

```
cd ca
```

```
nano vars
```

Edit vars or keep the info as is.

```
ln -s openssl-easyrsa.cnf openssl.cnf
```

See changes of link by doing `ls -l`

```
./easyrsa init-pki
```

```
./easyrsa build-ca
```

```
./easyrsa gen-dh
```

```
./easyrsa gen-req client1 nopass
```

```
./easyrsa sign server client1
```

Copy files:

```
mkdir /etc/openvpn/keys/
chmod 750 /etc/openvpn/keys
```
```
root@ip-172-31-41-255:/home/admin/ca# ls
easyrsa  openssl-easyrsa.cnf  openssl.cnf  pki  vars  x509-types
root@ip-172-31-41-255:/home/admin/ca# cp -a pki/ca.crt /etc/openvpn/keys/
root@ip-172-31-41-255:/home/admin/ca# cp -a pki/dh.pem /etc/openvpn/keys/dh2048.pem
root@ip-172-31-41-255:/home/admin/ca# cp -a pki/issued/client1.crt /etc/openvpn/keys/
root@ip-172-31-41-255:/home/admin/ca# cp -a pki/private/client1.key /etc/openvpn/keys/
root@ip-172-31-41-255:/home/admin/ca#
```

## Create client john

```
root@ip-172-31-41-255:/home/admin/ca# ./easyrsa gen-req john nopass
```

```
root@ip-172-31-41-255:/home/admin/ca# ./easyrsa sign client john
```

```
root@ip-172-31-41-255:/home/admin/ca# cp -a pki/issued/john.crt /etc/openvpn/keys/
root@ip-172-31-41-255:/home/admin/ca# cp -a pki/private/john.key /etc/openvpn/keys/
```

## Configure OpenVPN server

```
zcat /usr/share/doc/openvpn/examples/sample-config-files/server.conf.gz > /etc/openvpn/server.conf
```

```
nano /etc/openvpn/server.conf
```