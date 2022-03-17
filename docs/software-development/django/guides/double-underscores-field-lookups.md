---
sidebar_label: "Double underscores field lookups"
description: "Double underscores field lookups."
---

# Double underscores field lookups

Field lookups are how you specify the meat of an SQL `WHERE` clause. They’re specified as keyword arguments to the [`QuerySet`](https://docs.djangoproject.com/en/3.2/../ref/models/querysets/#django.db.models.query.QuerySet "django.db.models.query.QuerySet") methods [`filter()`](https://docs.djangoproject.com/en/3.2/../ref/models/querysets/#django.db.models.query.QuerySet.filter "django.db.models.query.QuerySet.filter"), [`exclude()`](https://docs.djangoproject.com/en/3.2/../ref/models/querysets/#django.db.models.query.QuerySet.exclude "django.db.models.query.QuerySet.exclude") and [`get()`](https://docs.djangoproject.com/en/3.2/../ref/models/querysets/#django.db.models.query.QuerySet.get "django.db.models.query.QuerySet.get").

Basic lookups keyword arguments take the form `field__lookuptype=value`. (That’s a double-underscore). For example:

```py
>>> Entry.objects.filter(pub_date__lte='2006-01-01')
```

translates (roughly) into the following SQL:

```sql
SELECT * FROM blog_entry WHERE pub_date <= '2006-01-01';
```

[Making queries | Django documentation | Django](https://docs.djangoproject.com/en/3.2/topics/db/queries/#field-lookups)

