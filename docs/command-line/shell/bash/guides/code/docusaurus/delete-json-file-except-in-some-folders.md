---
sidebar_label: Delete json file except in some folders
description: Delete json file except in some folders.
---

# Delete json file except in some folders

## Code

```bash
find . -type f -name file.json -not -path '*/guides/_category_.json' -not -path "./_category_.json" -exec rm -v -f {} +
```