---
sidebar_label: "Basic Pagination"
description: "Basic Pagination."
---

# Basic Pagination

In `tutorial/settings.py`

```py
REST_FRAMEWORK = {
    'DEFAULT_PAGINATION_CLASS': 'rest_framework.pagination.PageNumberPagination',
    'PAGE_SIZE': 10
}
```

```py
INSTALLED_APPS = [
    ...
    'rest_framework',
]
```