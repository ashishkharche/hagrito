---
sidebar_label: "ForeignKey"
description: "ForeignKey."
---

# ForeignKey

## Sample

Code: [4 - Authentication and permissions - Django REST framework](https://www.django-rest-framework.org/tutorial/4-authentication-and-permissions/#adding-information-to-our-model)

In `models.py`

Add the following two fields to the Snippet model in models.py.

```py
owner = models.ForeignKey('auth.User', related_name='snippets', on_delete=models.CASCADE)
highlighted = models.TextField()
```

In `serializers.py`

```py
from django.contrib.auth.models import User

class UserSerializer(serializers.ModelSerializer):
    snippets = serializers.PrimaryKeyRelatedField(many=True, queryset=Snippet.objects.all())

    class Meta:
        model = User
        fields = ['id', 'username', 'snippets']
```

Because `'snippets'` is a _reverse_ relationship on the User model, it will not be included by default when using the `ModelSerializer` class, so we needed to add an explicit field for it.

### Additional steps

[Associating Snippets with Users](https://www.django-rest-framework.org/tutorial/4-authentication-and-permissions/#associating-snippets-with-users)

## References

[4 - Authentication and permissions - Django REST framework](https://www.django-rest-framework.org/tutorial/4-authentication-and-permissions/#adding-information-to-our-model)