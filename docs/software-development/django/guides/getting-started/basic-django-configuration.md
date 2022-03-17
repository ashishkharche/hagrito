---
sidebar_label: "Basic Django Configuration"
description: "Basic Django Configuration."
---

# Basic Django Configuration

## Create virtual env

```
py -m venv venv
```

Activate:

```
source venv/Scripts/activate
```

## Install Django

```
pip install django==3.2
```

## startproject

`cd` into working directory

```
mkdir src
```

```
cd src
```

```
django-admin startproject mysite .
```

or

just

```
django-admin startproject mysite src
```

## Files

Do

```
tree -f src
```

```
src
|-- src/manage.py
`-- src/mysite
    |-- src/mysite/__init__.py
    |-- src/mysite/asgi.py
    |-- src/mysite/settings.py
    |-- src/mysite/urls.py
    `-- src/mysite/wsgi.py
```

These files are:

*   The outer `src/` root directory is a container for your project. Its name doesn’t matter to Django; you can rename it to anything you like.
*   `manage.py`: A command-line utility that lets you interact with this Django project in various ways. You can read all the details about `manage.py` in [django-admin and manage.py](https://docs.djangoproject.com/en/3.2/ref/django-admin/).
*   The inner `mysite/` directory is the actual Python package for your project. Its name is the Python package name you’ll need to use to import anything inside it (e.g. `mysite.urls`).
*   `mysite/__init__.py`: An empty file that tells Python that this directory should be considered a Python package. If you’re a Python beginner, read [more about packages](https://docs.python.org/3/tutorial/modules.html#tut-packages "(in Python v3.10)") in the official Python docs.
*   `mysite/settings.py`: Settings/configuration for this Django project. [Django settings](https://docs.djangoproject.com/en/3.2/topics/settings/) will tell you all about how settings work.
*   `mysite/urls.py`: The URL declarations for this Django project; a “table of contents” of your Django-powered site. You can read more about URLs in [URL dispatcher](https://docs.djangoproject.com/en/3.2/topics/http/urls/).
*   `mysite/asgi.py`: An entry-point for ASGI-compatible web servers to serve your project. See [How to deploy with ASGI](https://docs.djangoproject.com/en/3.2/howto/deployment/asgi/) for more details.
*   `mysite/wsgi.py`: An entry-point for WSGI-compatible web servers to serve your project. See [How to deploy with WSGI](https://docs.djangoproject.com/en/3.2/howto/deployment/wsgi/) for more details.

## Run development server

Starts server on the internal IP at port 8000:
```
python manage.py runserver
```

Start server on another port:

```
python manage.py runserver 8080
```

Start server and listen on all available public IP on the network:

```
python manage.py runserver 0:8000
```

## Projects vs apps

Projects vs. apps

What’s the difference between a project and an app? An app is a Web application that does something – e.g., a Weblog system, a database of public records or a small poll app. A project is a collection of configuration and apps for a particular website. A project can contain multiple apps. An app can be in multiple projects.

## Create an app

```
python manage.py startapp polls
```

## Files in polls app

```
polls
|-- polls/__init__.py
|-- polls/admin.py
|-- polls/apps.py
|-- polls/migrations
|   `-- polls/migrations/__init__.py
|-- polls/models.py
|-- polls/tests.py
`-- polls/views.py
```

## Create view

In `polls/views.py`

```
from django.http import HttpResponse


def index(request):
    return HttpResponse("Hello mate, poll index")
```

## Map view to url

Create `urls.py` in `polls` directory.

```py
from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='index')
]
```

## Point root URLconf at `polls.urls`

```py
from django.contrib import admin
from django.urls import include, path

urlpatterns = [
    path('polls', include('polls.urls')),
    path('admin/', admin.site.urls),
]
```

Run server:

```
python manage.py runserver
```

## `path()`

The [`path()`](https://docs.djangoproject.com/en/3.2/ref/urls/#django.urls.path "django.urls.path") function is passed four arguments, two required: `route` and `view`, and two optional: `kwargs`, and `name`. At this point, it’s worth reviewing what these arguments are for.

**NOTE**: In pycharm, click on `path` and then click on `_path` and you will see `route` and `view`

## References

[Writing your first Django app, part 1 | Django documentation | Django](https://docs.djangoproject.com/en/3.2/intro/tutorial01/)