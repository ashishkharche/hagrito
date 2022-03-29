---
sidebar_label: "perform_create Associating Model with Users"
description: "perform_create Associating Model with Users."
---

# perform_create Associating Model with Users

**Read `ForeignKey` guide or read [tutorial 4](https://www.django-rest-framework.org/tutorial/4-authentication-and-permissions/#associating-snippets-with-users)**

Right now, if we created a code snippet, there'd be no way of associating the user that created the snippet, with the snippet instance. The user isn't sent as part of the serialized representation, but is instead a property of the incoming request.

The way we deal with that is by overriding a `.perform_create()` method on our snippet views, that allows us to modify how the instance save is managed, and handle any information that is implicit in the incoming request or requested URL.

On the `SnippetList` view class, add the following method:

```py
def perform_create(self, serializer):
    serializer.save(owner=self.request.user)
```
The `create()` method of our serializer will now be passed an additional `'owner'` field, along with the validated data from the request.

**Continue reading [Updating our serializer](https://www.django-rest-framework.org/tutorial/4-authentication-and-permissions/#updating-our-serializer)**

## References

[4 - Authentication and permissions - Django REST framework](https://www.django-rest-framework.org/tutorial/4-authentication-and-permissions/#associating-snippets-with-users)