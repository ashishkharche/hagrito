---
sidebar_label: "Basic linode configuration for test"
description: "Basic linode configuration for test."
---

# Basic linode configuration for test

## Create Linode

Importantly, go to "Shared" tab when choosing Linode.

Select the "5 USD per month" one.

Get the ssh access link in detail view of Linode instance.

## SSH access

### ssh into remote

First time, do this and enter root password. Get in to the remote machine.

```
ssh root@139.xx2.xxx.184
```

### ssh-keygen

In local machine. NOT remote machine, do:

Go to `~/.ssh` directory in terminal.

```
ssh-keygen -b 4096 -f id_rsa_filename
```

### Add id_rsa file to `config`

Open or create `config` file in `~/.ssh` directory.

Add this:

```
Host 139.xx2.xxx.184
   HostName 139.xx2.xxx.184
   User your_username
   IdentityFile ~/.ssh/id_rsa_filename
```

### Run ssh-copy-id

```
ssh-copy-id -i ~/.ssh/id_rsa_filename username@139.xx2.xxx.184
```

### Alternatively, If you dont have ssh-copy-id installed

On your 

```
mkdir -p ~/.ssh && sudo chmod -R 700 ~/.ssh/
```

## Update

```
apt update && apt upgrade
```

## Timezone

After entering in Linode through SSH, configure them.

### For most distributions

```
timedatectl list-timezones
```

```
timedatectl set-timezone 'America/New_York'
```

### For Ubuntu, Debian

```
dpkg-reconfigure tzdata
```

## Hostname

```
hostnamectl set-hostname example-hostname
```

Exit and login again.

```
exit
```

Optional:
```
sudo reboot
```

## Add user

Create custom user from the guide in remote password access

## SSH config file

```
sudo nano /etc/ssh/sshd_config
```

Do:

```
PermitRootLogin no
```

If you continuously use multiple devices, leave this at yes. Or you may need to create ssh for all devices. 

```
PasswordAuthentication no
```

Restart ssh service to load new configuration:

```
sudo systemctl restart sshd
```

## Optional: Remove public keys

In remote machine:

```
rm ~/.ssh/authorized_keys
```

or manually edit your specific public key from `authorized_keys` file.

## References

[How to Set Up and Secure a Linode Compute Instance | Linode](https://www.linode.com/docs/guides/set-up-and-secure/)