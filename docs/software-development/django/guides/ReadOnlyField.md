---
sidebar_label: "ReadOnlyField"
description: "ReadOnlyField."
---

# ReadOnlyField

```py
owner = serializers.ReadOnlyField(source='owner.username')
```

[GitHub](https://github.com/encode/django-rest-framework/tree/master) [Next ](../5-relationships-and-hyperlinked-apis/)[Previous](../3-class-based-views/) [Search](#mkdocs_search_modal) <a class="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse"></a>[Django REST framework](https://www.django-rest-framework.org/)

*   [Home](../..)
*   [Tutorial](#)
    *   [Quickstart](../quickstart/)
    *   [1 - Serialization](../1-serialization/)
    *   [2 - Requests and responses](../2-requests-and-responses/)
    *   [3 - Class based views](../3-class-based-views/)
    *   [4 - Authentication and permissions](./)
    *   [5 - Relationships and hyperlinked APIs](../5-relationships-and-hyperlinked-apis/)
    *   [6 - Viewsets and routers](../6-viewsets-and-routers/)
*   [API Guide](#)
    *   [Requests](../../api-guide/requests/)
    *   [Responses](../../api-guide/responses/)
    *   [Views](../../api-guide/views/)
    *   [Generic views](../../api-guide/generic-views/)
    *   [Viewsets](../../api-guide/viewsets/)
    *   [Routers](../../api-guide/routers/)
    *   [Parsers](../../api-guide/parsers/)
    *   [Renderers](../../api-guide/renderers/)
    *   [Serializers](../../api-guide/serializers/)
    *   [Serializer fields](../../api-guide/fields/)
    *   [Serializer relations](../../api-guide/relations/)
    *   [Validators](../../api-guide/validators/)
    *   [Authentication](../../api-guide/authentication/)
    *   [Permissions](../../api-guide/permissions/)
    *   [Caching](../../api-guide/caching/)
    *   [Throttling](../../api-guide/throttling/)
    *   [Filtering](../../api-guide/filtering/)
    *   [Pagination](../../api-guide/pagination/)
    *   [Versioning](../../api-guide/versioning/)
    *   [Content negotiation](../../api-guide/content-negotiation/)
    *   [Metadata](../../api-guide/metadata/)
    *   [Schemas](../../api-guide/schemas/)
    *   [Format suffixes](../../api-guide/format-suffixes/)
    *   [Returning URLs](../../api-guide/reverse/)
    *   [Exceptions](../../api-guide/exceptions/)
    *   [Status codes](../../api-guide/status-codes/)
    *   [Testing](../../api-guide/testing/)
    *   [Settings](../../api-guide/settings/)
*   [Topics](#)
    *   [Documenting your API](../../topics/documenting-your-api/)
    *   [API Clients](../../topics/api-clients/)
    *   [Internationalization](../../topics/internationalization/)
    *   [AJAX, CSRF & CORS](../../topics/ajax-csrf-cors/)
    *   [HTML & Forms](../../topics/html-and-forms/)
    *   [Browser Enhancements](../../topics/browser-enhancements/)
    *   [The Browsable API](../../topics/browsable-api/)
    *   [REST, Hypermedia & HATEOAS](../../topics/rest-hypermedia-hateoas/)
*   [Community](#)
    *   [Tutorials and Resources](../../community/tutorials-and-resources/)
    *   [Third Party Packages](../../community/third-party-packages/)
    *   [Contributing to REST framework](../../community/contributing/)
    *   [Project management](../../community/project-management/)
    *   [Release Notes](../../community/release-notes/)
    *   [3.13 Announcement](../../community/3.13-announcement/)
    *   [3.12 Announcement](../../community/3.12-announcement/)
    *   [3.11 Announcement](../../community/3.11-announcement/)
    *   [3.10 Announcement](../../community/3.10-announcement/)
    *   [3.9 Announcement](../../community/3.9-announcement/)
    *   [3.8 Announcement](../../community/3.8-announcement/)
    *   [3.7 Announcement](../../community/3.7-announcement/)
    *   [3.6 Announcement](../../community/3.6-announcement/)
    *   [3.5 Announcement](../../community/3.5-announcement/)
    *   [3.4 Announcement](../../community/3.4-announcement/)
    *   [3.3 Announcement](../../community/3.3-announcement/)
    *   [3.2 Announcement](../../community/3.2-announcement/)
    *   [3.1 Announcement](../../community/3.1-announcement/)
    *   [3.0 Announcement](../../community/3.0-announcement/)
    *   [Kickstarter Announcement](../../community/kickstarter-announcement/)
    *   [Mozilla Grant](../../community/mozilla-grant/)
    *   [Funding](../../community/funding/)
    *   [Jobs](../../community/jobs/)

×

### Documentation search

<form role="form" autocomplete="off"><input type="text" name="q" class="form-control" placeholder="Search..." id="mkdocs-search-query"></form>

Close

*   [Tutorial 4: Authentication & Permissions](#tutorial-4-authentication-permissions)
*   [Adding information to our model](#adding-information-to-our-model)
*   [Adding endpoints for our User models](#adding-endpoints-for-our-user-models)
*   [Associating Snippets with Users](#associating-snippets-with-users)
*   [Updating our serializer](#updating-our-serializer)
*   [Adding required permissions to views](#adding-required-permissions-to-views)
*   [Adding login to the Browsable API](#adding-login-to-the-browsable-api)
*   [Object level permissions](#object-level-permissions)
*   [Authenticating with the API](#authenticating-with-the-api)
*   [Summary](#summary)

* * *

[![](https://fund-rest-framework.s3.amazonaws.com/helsinki-logo-drf.png)](https://dev.hel.fi)

[City of Helsinki Open Software Development](https://dev.hel.fi)

[Fund Django REST framework](https://fund.django-rest-framework.org/topics/funding/)

# [Tutorial 4: Authentication & Permissions](#tutorial-4-authentication-permissions)

Currently our API doesn't have any restrictions on who can edit or delete code snippets. We'd like to have some more advanced behavior in order to make sure that:

*   Code snippets are always associated with a creator.
*   Only authenticated users may create snippets.
*   Only the creator of a snippet may update or delete it.
*   Unauthenticated requests should have full read-only access.

## [Adding information to our model](#adding-information-to-our-model)

We're going to make a couple of changes to our `Snippet` model class. First, let's add a couple of fields. One of those fields will be used to represent the user who created the code snippet. The other field will be used to store the highlighted HTML representation of the code.

Add the following two fields to the `Snippet` model in `models.py`.

    owner = models.ForeignKey('auth.User', related_name='snippets', on_delete=models.CASCADE)
    highlighted = models.TextField()

We'd also need to make sure that when the model is saved, that we populate the highlighted field, using the `pygments` code highlighting library.

We'll need some extra imports:

    from pygments.lexers import get_lexer_by_name
    from pygments.formatters.html import HtmlFormatter
    from pygments import highlight

And now we can add a `.save()` method to our model class:

    def save(self, *args, **kwargs):
        """
        Use the `pygments` library to create a highlighted HTML
        representation of the code snippet.
        """
        lexer = get_lexer_by_name(self.language)
        linenos = 'table' if self.linenos else False
        options = {'title': self.title} if self.title else {}
        formatter = HtmlFormatter(style=self.style, linenos=linenos,
                                  full=True, **options)
        self.highlighted = highlight(self.code, lexer, formatter)
        super().save(*args, **kwargs)

When that's all done we'll need to update our database tables. Normally we'd create a database migration in order to do that, but for the purposes of this tutorial, let's just delete the database and start again.

    rm -f db.sqlite3
    rm -r snippets/migrations
    python manage.py makemigrations snippets
    python manage.py migrate

You might also want to create a few different users, to use for testing the API. The quickest way to do this will be with the `createsuperuser` command.

    python manage.py createsuperuser

## [Adding endpoints for our User models](#adding-endpoints-for-our-user-models)

Now that we've got some users to work with, we'd better add representations of those users to our API. Creating a new serializer is easy. In `serializers.py` add:

    from django.contrib.auth.models import User

    class UserSerializer(serializers.ModelSerializer):
        snippets = serializers.PrimaryKeyRelatedField(many=True, queryset=Snippet.objects.all())

        class Meta:
            model = User
            fields = ['id', 'username', 'snippets']

Because `'snippets'` is a _reverse_ relationship on the User model, it will not be included by default when using the `ModelSerializer` class, so we needed to add an explicit field for it.

We'll also add a couple of views to `views.py`. We'd like to just use read-only views for the user representations, so we'll use the `ListAPIView` and `RetrieveAPIView` generic class-based views.

    from django.contrib.auth.models import User

    class UserList(generics.ListAPIView):
        queryset = User.objects.all()
        serializer_class = UserSerializer

    class UserDetail(generics.RetrieveAPIView):
        queryset = User.objects.all()
        serializer_class = UserSerializer

Make sure to also import the `UserSerializer` class

    from snippets.serializers import UserSerializer

Finally we need to add those views into the API, by referencing them from the URL conf. Add the following to the patterns in `snippets/urls.py`.

    path('users/', views.UserList.as_view()),
    path('users/<int:pk>/', views.UserDetail.as_view()),

## [Associating Snippets with Users](#associating-snippets-with-users)

Right now, if we created a code snippet, there'd be no way of associating the user that created the snippet, with the snippet instance. The user isn't sent as part of the serialized representation, but is instead a property of the incoming request.

The way we deal with that is by overriding a `.perform_create()` method on our snippet views, that allows us to modify how the instance save is managed, and handle any information that is implicit in the incoming request or requested URL.

On the `SnippetList` view class, add the following method:

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)

The `create()` method of our serializer will now be passed an additional `'owner'` field, along with the validated data from the request.

## [Updating our serializer](#updating-our-serializer)

Now that snippets are associated with the user that created them, let's update our `SnippetSerializer` to reflect that. Add the following field to the serializer definition in `serializers.py`:

    owner = serializers.ReadOnlyField(source='owner.username')

**Note**: Make sure you also add `'owner',` to the list of fields in the inner `Meta` class.

This field is doing something quite interesting. The `source` argument controls which attribute is used to populate a field, and can point at any attribute on the serialized instance. It can also take the dotted notation shown above, in which case it will traverse the given attributes, in a similar way as it is used with Django's template language.

The field we've added is the untyped `ReadOnlyField` class, in contrast to the other typed fields, such as `CharField`, `BooleanField` etc... The untyped `ReadOnlyField` is always read-only, and will be used for serialized representations, but will not be used for updating model instances when they are deserialized. We could have also used `CharField(read_only=True)` here.

## References

[4 - Authentication and permissions - Django REST framework](https://www.django-rest-framework.org/tutorial/4-authentication-and-permissions/#updating-our-serializer)