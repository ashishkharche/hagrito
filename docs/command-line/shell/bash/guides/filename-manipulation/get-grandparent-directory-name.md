---
sidebar_label: Get grandparent directory name
description: Get grandparent directory name.
---

# Get grandparent directory name

```bash
var=-one/-two/_three/four/here.md
basename -- "$(dirname -- "$(dirname -- "$var")")"

echo $basename
```

Output:
```
_three
```