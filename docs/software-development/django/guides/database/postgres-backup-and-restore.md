---
sidebar_label: "Postgres backup and restore"
description: "Postgres backup and restore."
---

# Postgres backup and restore

```
sudo service postgresql restart
```

## Backup

```
pg_dump -U db_user database_name > path/to/backup.sql
```

## Restore

```
psql -U db_user < path/to/backup.sql
```

## References

https://djangocentral.com/backup-and-restore-data-in-postgresql/
