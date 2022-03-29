---
sidebar_label: "POST"
description: "POST."
---

# POST

## POST using form data

```
http --form POST http://127.0.0.1:8000/snippets/ code="print(123)"
```

## POST using JSON

```
http --json POST http://127.0.0.1:8000/snippets/ code="print(456)"
```

If you add a `--debug` switch to the `http` requests above, you will be able to see the request type in request headers.

## References

[2 - Requests and responses - Django REST framework](https://www.django-rest-framework.org/tutorial/2-requests-and-responses/#adding-optional-format-suffixes-to-our-urls)