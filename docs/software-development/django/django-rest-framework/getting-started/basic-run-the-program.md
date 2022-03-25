---
sidebar_label: "Basic run the program"
description: "Basic run the program."
---

# Basic run the program

```
python manage.py runserver
```

## With `curl`

```
curl -H 'Accept: application/json; indent=4' -u admin:password123 http://127.0.0.1:8000/users/
```

## With `HTTPie`

```
http -a admin:password123 http://127.0.0.1:8000/users/
```

## With `browser`

Go to: http://127.0.0.1:8000/users/