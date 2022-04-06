---
sidebar_label: "Object of type ManyRelatedManager is not JSON serializable"
description: "Object of type ManyRelatedManager is not JSON serializable."
---

# Object of type ManyRelatedManager is not JSON serializable

Add `many=True` in Serializer.

## Example

Instead of this:

```py
tags = serializers.PrimaryKeyRelatedField(
    queryset=Tag.objects.all(),
)
```

Do:

```py
tags = serializers.PrimaryKeyRelatedField(
    queryset=Tag.objects.all(),
    many=True
)
```

## References

[(240) TypeError: Object of type ManyRelatedManager is not JSON serializable in django rest framework : django](https://www.reddit.com/r/django/comments/q8tt9k/typeerror_object_of_type_manyrelatedmanager_is/)
