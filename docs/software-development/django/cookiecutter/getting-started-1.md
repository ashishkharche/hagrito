---
sidebar_label: "Django Cookie Cutter Getting Started 1"
description: "Django Cookie Cutter Getting Started 1."
---

# Django Cookie Cutter Getting Started 1


```
docker-compose -f local.yml up
```

---
created: 2022-09-02T01:14:35 (UTC +01:00)
tags: []
source: https://cookiecutter-django.readthedocs.io/en/latest/deployment-with-docker.html#prerequisites
author: 
---

# Deployment with Docker — Cookiecutter Django 2022.35.4 documentation

> ## Excerpt
> Docker 17.05+.

---
You will need to build the stack first. To do that, run:

```
docker-compose -f production.yml build

```

Once this is ready, you can run it with:

```
docker-compose -f production.yml up

```

To run the stack and detach the containers, run:

```
docker-compose -f production.yml up -d

```

To run a migration, open up a second terminal and run:

```
docker-compose -f production.yml run --rm django python manage.py migrate

```

To create a superuser, run:

```
docker-compose -f production.yml run --rm django python manage.py createsuperuser

```

If you need a shell, run:

```
docker-compose -f production.yml run --rm django python manage.py shell

```

To check the logs out, run:

```
docker-compose -f production.yml logs

```

If you want to scale your application, run:

```
docker-compose -f production.yml up --scale django=4
docker-compose -f production.yml up --scale celeryworker=2
```


Warning:

don’t try to scale `postgres`, `celerybeat`, or `traefik`.

To see how your containers are doing run:

```
docker-compose -f production.yml ps
```
