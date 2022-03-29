---
sidebar_label: "related_name"
description: "related_name."
---

# related_name

Let's say you have a model named Book and a model named Category. Each book has one and only one category, denoted by a foreign key. Thus, you'll have the following models:

```py
class Category(models.Model):
    name = models.CharField(max_length=128)

class Book(models.Model):
    name = models.CharField(max_length=128)
    category = models.ForeignKey('Category')
```

Now, when you have a Book instance you can refer to its category using the corresponding field. Furthermore, if you have a category instance, by default, django adds an attribute to it named book_set which returns a queryset with all the books that have this specific category. So you can do something like:

```py
category = Category.objects.get(pk=1)
print "Books in category {0}".format(category.name)
for book in category.book_set.all():
    print book.name
```

Now, book_set is an attribute that django constructed for us and gave it this name by default. Using the related_name attribute of foreign key you can give this attribute whatever name you want (for example if I had definited category as this category = models.ForeignKey('Category', related_name='book_collection') then instead of category.book_set.all() I'd use category.book_collection.all()).

In any case, you rarely need to change the related_name, if at all in usual case (I don't recommend it because it's easy to remember the django default x_set). However there's a use case where it is required: When you have _multiple_ foreign keys from a model to another. In this case there would be a clash (since django would try to create two x_set attributes to the same model) and you need to help by naming the x_set attributes yourself.

For example, if my Book model was like this (had a category and a subcategory):

```py
class Book(models.Model):
    name = models.CharField(max_length=128)
    category = models.ForeignKey('Category')
    sub_category = models.ForeignKey('Category')
```

then the model would not validate unless you give one (or both) of the ForeignKeys a related_name attribute so that the clash will be resolved. For example you could do something like this:

```py
class Book(models.Model):
    name = models.CharField(max_length=128)
    category = models.ForeignKey('Category', related_name='book_category_set')
    sub_category = models.ForeignKey('Category', related_name='book_sub_category_set')
```

and it'll work !

## References

["related_name" in models.py? : django](https://www.reddit.com/r/django/comments/76a7uw/related_name_in_modelspy/)

[related_name - Django Built-in Field Validation - GeeksforGeeks](https://www.geeksforgeeks.org/related_name-django-built-in-field-validation/)