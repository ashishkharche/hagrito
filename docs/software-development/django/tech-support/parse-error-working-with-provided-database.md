---
sidebar_label: "parse error working with provided database"
description: "parse error working with provided database."
---

# parse error working with provided database

When working with provided database, make sure the original migrations folder is kept intact or it may result in parse error when you do this:

```
sqlite3 db.sqlite3 < db_dump.sql
```

