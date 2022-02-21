---
sidebar_label: Multiple Git Accounts SSH on one computer
description: Multiple Git Accounts SSH on one computer.
---

# Multiple Git Accounts SSH on one computer

## 1. SSH id for Account A

```
ssh-keygen -t rsa
```

## 2. SSH id for Account B

```
ssh-keygen -t rsa -C "email@work_mail.com" -f "id_rsa_work_user1"
```

## 3. Go to GitHub and add the pub SSH ID keys

Go to respective GitHub of Account A and in SSH and GPG Keys, create New SSH Key and copy paste the contents of `.pub` of Account A.

Do the same for Account B

## 4. ssh-agent

Read more about it here: https://unix.stackexchange.com/a/72555

```
// Ensure ssh-agent is running
eval "$(ssh-agent -s)"
```

```
// Add keys to ssh-agent

ssh-add ~/.ssh/id_rsa
ssh-add ~/.ssh/id_rsa_work_user1
```

## 5. Create `config` file in ~/.ssh

In ~/.ssh/config file, add:

```
# Personal account, - the default config
Host github.com
   HostName github.com
   User git
   IdentityFile ~/.ssh/id_rsa
   
# Work account-1
Host github.com-work_user1    
   HostName github.com
   User git
   IdentityFile ~/.ssh/id_rsa_work_user1
```

## Reference

[How to manage multiple GitHub accounts on a single machine with SSH keys](https://www.freecodecamp.org/news/manage-multiple-github-accounts-the-ssh-way-2dadc30ccaca/)

[openssh - what's the purpose of ssh-agent? - Unix & Linux Stack Exchange](https://unix.stackexchange.com/a/72555)