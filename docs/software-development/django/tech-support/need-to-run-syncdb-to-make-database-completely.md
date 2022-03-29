---
sidebar_label: "Need to run syncdb to make database completely"
description: "Need to run syncdb to make database completely."
---

# Need to run syncdb to make database completely

## `--run-syncdb`

Scenario: You need to do this after each database recreation to completely create all database models.

```
python manage.py migrate --run-syncdb
```

## Solution

Make sure you have `migrations` folder with `__init__.py` file in it.

Then do:

```
python manage.py makemigrations
```

```
python manage.py migrate
```

No need to do `--run-syncdb`

