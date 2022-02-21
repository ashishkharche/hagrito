---
sidebar_label: Check if we can go in the directory
description: Check if we can go in the directory.
---

# Check if we can go in the directory

```bash
# Check if we can go into appdir.  If not, output an error and exit the script.
cd "$appdir" || { echo "Please create the appdir and try again" >&2; exit 1; }
```

[BashGuide/TestsAndConditionals - Greg's Wiki](https://mywiki.wooledge.org/BashGuide/TestsAndConditionals#Conditional_Blocks_.28if.2C_test_and_.5B.5B.29)