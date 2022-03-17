---
sidebar_label: "Delete migration folder bash script"
description: "Delete migration folder bash script."
---

# Delete migration folder bash script

```bash
find . -type d -name migrations -exec rm -v -rf {} +
```
