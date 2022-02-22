---
sidebar_label: Move WSL2 (VHD) to another drive
description: Guide to move WSL2 to another drive from boot system drive, example C drive to other one.
---

# Move WSL2 (VHD) to another drive

## Bash

```
./move-wsl
Select your distro
Enter your target (i.e. /d/path_wsl_target/ubuntu)
```

## Bonus

After moving, to change user from root to normal user:

```
// In git bash
ubuntu config --default-user leesooubuntu
```

https://github.com/pxlrbt/move-wsl