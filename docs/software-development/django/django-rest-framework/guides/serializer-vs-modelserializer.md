---
sidebar_label: "Serializer vs ModelSerializer"
description: "Serializer vs ModelSerializer."
---

# Serializer vs ModelSerializer

**Refer to reference link for code samples.**

It's important to remember that `ModelSerializer` classes don't do anything particularly magical, they are simply a shortcut for creating serializer classes:

*   An automatically determined set of fields.
*   Simple default implementations for the `create()` and `update()` methods.

## References

[1 - Serialization - Django REST framework](https://www.django-rest-framework.org/tutorial/1-serialization/)