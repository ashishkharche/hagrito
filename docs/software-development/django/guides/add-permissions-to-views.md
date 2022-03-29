---
sidebar_label: "Add permissions to views"
description: "Add permissions to views."
---

# Add permissions to views

Now that code snippets are associated with users, we want to make sure that only authenticated users are able to create, update and delete code snippets.

REST framework includes a number of permission classes that we can use to restrict who can access a given view. In this case the one we're looking for is `IsAuthenticatedOrReadOnly`, which will ensure that authenticated requests get read-write access, and unauthenticated requests get read-only access.

First add the following import in the views module

```py
from rest_framework import permissions
```

Then, add the following property to **both** the `SnippetList` and `SnippetDetail` view classes.

```py
permission_classes = [permissions.IsAuthenticatedOrReadOnly]
```

## References

[Adding required permissions to views](https://www.django-rest-framework.org/tutorial/4-authentication-and-permissions/#adding-required-permissions-to-views)