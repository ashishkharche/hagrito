---
sidebar_label: "Set timezone"
description: "Set timezone."
---

# Set timezone

## For most distributions

```
timedatectl list-timezones
```

```
timedatectl set-timezone 'America/New_York'
```

## For Ubuntu, Debian

```
dpkg-reconfigure tzdata
```

## Other

Check out link in the references section

## References

[How to Set Up and Secure a Linode Compute Instance | Linode](https://www.linode.com/docs/guides/set-up-and-secure/)