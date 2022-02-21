---
sidebar_label: Put array elements as arguments
description: Put array elements as arguments.
---

# Put array elements as arguments

You can expand the array anywhere you want to put its elements as arguments; for instance in a cp command:

```bash
$ myfiles=(db.sql home.tbz2 etc.tbz2)
$ cp "${myfiles[@]}" /backups/
```

This runs the cp command, replacing the "${myfiles[@]}" part with every filename in the myfiles array, properly quoted. After expansion, Bash will effectively run this:

```bash
$ cp "db.sql" "home.tbz2" "etc.tbz2" /backups/
```