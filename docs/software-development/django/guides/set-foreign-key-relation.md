---
sidebar_label: "set foreign key relation"
description: "set foreign key relation."
---

# set foreign key relation


If a model has a [`ForeignKey`](../../../ref/models/fields/#django.db.models.ForeignKey "django.db.models.ForeignKey"), instances of the foreign-key model will have access to a [`Manager`](../managers/#django.db.models.Manager "django.db.models.Manager") that returns all instances of the first model. By default, this [`Manager`](../managers/#django.db.models.Manager "django.db.models.Manager") is named `FOO_set`, where `FOO` is the source model name, lowercased. This [`Manager`](../managers/#django.db.models.Manager "django.db.models.Manager") returns `QuerySets`, which can be filtered and manipulated as described in the “Retrieving objects” section above.

```py
>>> b = Blog.objects.get(id=1)
>>> b.entry_set.all() # Returns all Entry objects related to Blog.

# b.entry_set is a Manager that returns QuerySets.
>>> b.entry_set.filter(headline__contains='Lennon')
>>> b.entry_set.count()
```

You can override the `FOO_set` name by setting the [`related_name`](../../../ref/models/fields/#django.db.models.ForeignKey.related_name "django.db.models.ForeignKey.related_name") parameter in the [`ForeignKey`](../../../ref/models/fields/#django.db.models.ForeignKey "django.db.models.ForeignKey") definition. For example, if the `Entry` model was altered to `blog = ForeignKey(Blog, on_delete=models.CASCADE, related_name='entries')`, the above example code would look like this:

```py
>>> b = Blog.objects.get(id=1)
>>> b.entries.all() # Returns all Entry objects related to Blog.

# b.entries is a Manager that returns QuerySets.
>>> b.entries.filter(headline__contains='Lennon')
>>> b.entries.count()
```

## References

[Making queries | Django documentation | Django](https://docs.djangoproject.com/en/dev/topics/db/queries/#following-relationships-backward)

[Writing your first Django app, part 2 | Django documentation | Django](https://docs.djangoproject.com/en/3.2/intro/tutorial02/)

[python - What is choice_set in this Django app tutorial? - Stack Overflow](https://stackoverflow.com/questions/2048777/what-is-choice-set-in-this-django-app-tutorial)