---
sidebar_label: "django.db.migrations.exceptions.InconsistentMigrationHistory: Migration is applied before"
description: "django.db.migrations.exceptions.InconsistentMigrationHistory: Migration is applied before."
---

# django.db.migrations.exceptions.InconsistentMigrationHistory: Migration is applied before

```
django.db.migrations.exceptions.InconsistentMigrationHistory: Migration admin.0001_initial is applied before its dependency account.0001_initial on database 'default'.
```

1.  remove 'django.contrib.admin' from INSTALLED\_APPS in settings.py (Comment out admin stuff in urls.py as well)
2.  execute commands:

> Python manage.py makemigrations appname (example account)
> 
> Python manage.py migrate appname (example account)

3.  add 'django.contrib.admin' to INSTALLED\_APPS in settings.py file.
4.  execute commands again:

> Python manage.py makemigrations appname (example account)
> 
> Python manage.py migrate appname (example account)



Comment `a

## References

https://stackoverflow.com/a/52474459