---
sidebar_label: "Basic Django Database Configuration"
description: "Basic Django Database Configuration."
---

# Basic Django Database Configuration

```
python manage.py migrate
```

## Create models

```py
from django.db import models


class Question(models.Model):
    question_text = models.CharField(max_length=200)
    pub_date = models.DateTimeField('date published')


class Choice(models.Model):
    question = models.ForeignKey(Question, on_delete=models.CASCADE)
    choice_text = models.CharField(max_length=200)
    votes = models.IntegerField(default=0)
```

Each model has a number of class variables, each of which represents a database field in the model.

The name of each [`Field`](https://docs.djangoproject.com/en/3.2/ref/models/fields/#django.db.models.Field "django.db.models.Field") instance (e.g. `question_text` or `pub_date`) is the field’s name, in machine-friendly format. You’ll use this value in your Python code, and your database will use it as the column name.

Finally, note a relationship is defined, using [`ForeignKey`](https://docs.djangoproject.com/en/3.2/ref/models/fields/#django.db.models.ForeignKey "django.db.models.ForeignKey"). That tells Django each `Choice` is related to a single `Question`.

## Add app to `INSTALLED_APPS`

To include the app in our project, we need to add a reference to its configuration class in the [`INSTALLED_APPS`](https://docs.djangoproject.com/en/3.2/ref/settings/#std:setting-INSTALLED_APPS) setting. The `PollsConfig` class is in the `polls/apps.py` file, so its dotted path is `'polls.apps.PollsConfig'`. Edit the `mysite/settings.py` file and add that dotted path to the [`INSTALLED_APPS`](https://docs.djangoproject.com/en/3.2/ref/settings/#std:setting-INSTALLED_APPS) setting. It’ll look like this:

Go to `settings.py`:

```py
INSTALLED_APPS = [
    'polls.apps.PollsConfig',
    ...
]
```

## makemigration `polls`

```
python manage.py makemigrations polls
```

## `sqlmigrate`

```
python manage.py sqlmigrate polls 0001
```

## `check`

```
python manage.py check
```

## `migrate`

```
python manage.py migrate
```

The [`migrate`](https://docs.djangoproject.com/en/3.2/ref/django-admin/#django-admin-migrate) command takes all the migrations that haven’t been applied (Django tracks which ones are applied using a special table in your database called `django_migrations`) and runs them against your database - essentially, synchronizing the changes you made to your models with the schema in the database.

## three-step guide

- Change your models (in `models.py`).

- Run [`python manage.py makemigrations`](https://docs.djangoproject.com/en/3.2/ref/django-admin/#django-admin-makemigrations) to create migrations for those changes

- Run [`python manage.py migrate`](https://docs.djangoproject.com/en/3.2/ref/django-admin/#django-admin-migrate) to apply those changes to the database.

## `createsuperuser`

```
python manage.py createsuperuser
```

## `admin.py`

Go to `polls/admin.py`

```py
from django.contrib import admin

from .models import Question

admin.site.register(Question)
```

## References

[Writing your first Django app, part 2 | Django documentation | Django](https://docs.djangoproject.com/en/3.2/intro/tutorial02/)