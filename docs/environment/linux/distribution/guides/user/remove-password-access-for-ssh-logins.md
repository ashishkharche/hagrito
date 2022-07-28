---
sidebar_label: "Remove password access for SSH logins"
description: "Remove password access for SSH logins."
---

# Remove password access for SSH logins

Assuming you are using git bash.

## ssh-copy-id

Confirm you have it installed.

```
where ssh-copy-id
C:\Program Files\Git\usr\bin\ssh-copy-id
```

## ssh-keygen 

Go to `~/.ssh` directory in terminal.

```
ssh-keygen -b 4096 -f id_rsa_filename
```

## Add id_rsa file to `config`

Open or create `config` file in `~/.ssh` directory.

Add this:

```
Host 139.xx2.xxx.184
   HostName 139.xx2.xxx.184
   User your_username
   IdentityFile ~/.ssh/id_rsa_filename
```

## Run ssh-copy-id

```
ssh-copy-id -i ~/.ssh/id_rsa_filename username@139.xx2.xxx.184
```

## Alternatively, If you dont have ssh-copy-id installed

### NOT SURE ABOUT THE USAGE OF THIS

```
mkdir -p ~/.ssh && sudo chmod -R 700 ~/.ssh/
```

## Additional Info

https://www.dwarmstrong.org/ssh-keys/