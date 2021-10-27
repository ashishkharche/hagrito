---
sidebar_label: Move WSL2 (VHD) to another drive
description: Guide to move WSL2 to another drive from boot system drive, example C drive to other one.
---

# Move WSL2 (VHD) to another drive

```
PS L:\> wsl -l
Windows Subsystem for Linux Distributions:
Ubuntu (Default)
Arch
PS L:\> wsl --export Ubuntu L:\wsl2install\ubuntu-wsl.tar

PS L:\> cd .\wsl2drive\
PS L:\wsl2drive> ls


    Directory: L:\wsl2drive


Mode                 LastWriteTime    Length
----                 -------------    ------
d-----        10/18/2021   1:43 PM


PS L:\wsl2drive> wsl --unregister Ubuntu
Unregistering...
PS L:\wsl2drive>


PS L:\wsl2drive> wsl --shutdown
PS L:\wsl2drive> wsl -l
Windows Subsystem for Linux Distributions:
Arch (Default)


```

https://github.com/MicrosoftDocs/WSL/issues/412#issuecomment-575923176