---
sidebar_label: "API View"
description: "API View."
---

# API View

REST framework provides two wrappers you can use to write API views.

1.  The `@api_view` decorator for working with function based views.
2.  The `APIView` class for working with class-based views.

These wrappers provide a few bits of functionality such as making sure you receive `Request` instances in your view, and adding context to `Response` objects so that content negotiation can be performed.

The wrappers also provide behaviour such as returning `405 Method Not Allowed` responses when appropriate, and handling any `ParseError` exceptions that occur when accessing `request.data` with malformed input.
