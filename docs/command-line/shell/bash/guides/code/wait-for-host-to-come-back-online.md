---
sidebar_label: Wait for a host to come back online
description: Wait for a host to come back online.
---

# Wait for a host to come back online

```bash
while ! ping -c 1 -W 1 "$host"
do echo "$host is still unavailable."
done; echo -e "$host is available again.\a"
```

[BashGuide/TestsAndConditionals - Greg's Wiki](https://mywiki.wooledge.org/BashGuide/TestsAndConditionals#Conditional_Blocks_.28if.2C_test_and_.5B.5B.29)