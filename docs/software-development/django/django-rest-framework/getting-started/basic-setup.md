---
sidebar_position: 1
sidebar_label: "Basic Setup"
description: "Basic Setup."
---

# Basic Setup

## Create project directory

```
mkdir tutorial
cd tutorial
```

## Create virtual environment

```
python3 -m venv env
source env/bin/activate 
```

## Install Django and DRF

```
pip install django
pip install djangorestframework
```

## Set up new project with single app

```
django-admin startproject tutorial .
```

```
cd tutorial
django-admin startapp quickstart
cd ..
```

## Sync Database for first time

```
python manage.py migrate
```

## Create superuser

```
python manage.py createsuperuser --email admin@example.com --username admin
```