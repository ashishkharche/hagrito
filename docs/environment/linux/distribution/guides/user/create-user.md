---
sidebar_label: "Create user"
description: "Create user."
---

# Create user

Below instructions are for ubuntu and debian. Instructions for other distributions can be checked by visiting the link in references section.

## Current situation

Currently you use `root` account to login to the machine.

## Create new user

```
adduser example_user
```

## Add user to `sudo` group for admin privileges

```
adduser example_user sudo
```

## References

[How to Set Up and Secure a Linode Compute Instance | Linode](https://www.linode.com/docs/guides/set-up-and-secure/)