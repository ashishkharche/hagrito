---
sidebar_label: "JetBrains IDE stuck at splash screen"
description: "JetBrains IDE stuck at splash screen."
---

# JetBrains IDE stuck at splash screen

Workaround:

```
net stop winnat
net start winnat
```

## References

[Revise IDE folders locking mechanism (don't fail startup if all ports in range are taken, limited network due to firewall/VPN) : IDEA-238995](https://youtrack.jetbrains.com/issue/IDEA-238995)
