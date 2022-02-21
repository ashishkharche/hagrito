---
sidebar_label: Escape spaces adb shell input
description: Escape spaces adb shell input.
---

# Escape spaces adb shell input

```bash
#!/bin/bash

variable=$(printf '%s%%s' "${@}")  # concatenate and replace spaces with %s
variable=${variable%%%s}  # remove the trailing %s
variable=${variable//\'/\\\'}  # escape single quotes
variable=${variable//\"/\\\"}  # escape double quotes
# echo "$variable"

adb shell input text "$variable"
```

## Run

`bash filename some characters`

Refer to `parameter expansions` page for details on the syntax.