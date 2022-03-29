---
sidebar_label: "Format of the response"
description: "Format of the response."
---

# Format of the response

We can control the format of the response that we get back, either by using the `Accept` header:

```
http http://127.0.0.1:8000/snippets/ Accept:application/json # Request JSON http http://127.0.0.1:8000/snippets/ Accept:text/html
```

## References

[2 - Requests and responses - Django REST framework](https://www.django-rest-framework.org/tutorial/2-requests-and-responses/#adding-optional-format-suffixes-to-our-urls)