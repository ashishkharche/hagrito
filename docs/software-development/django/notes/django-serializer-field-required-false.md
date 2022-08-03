---
sidebar_label: "Django serializer field required false"
description: "Django serializer field required false."
---

# Django serializer field required false

```py
class FavoriteListSerializer(serializers.ModelSerializer):
    owner = serializers.IntegerField(required=False)
    class Meta:
        model = models.FavoriteList

    def get_validation_exclusions(self):
        exclusions = super(FavoriteListSerializer, self).get_validation_exclusions()
        return exclusions + ['owner']
```

[python - Django REST Framework serializer field required=false - Stack Overflow](https://stackoverflow.com/questions/19780731/django-rest-framework-serializer-field-required-false)
