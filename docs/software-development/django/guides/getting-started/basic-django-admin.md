---
sidebar_label: "Basic django admin"
description: "Basic django admin."
---

# Basic django admin

In `polls/admin.py`

```py
from django.contrib import admin

from .models import Question


class QuestionAdmin(admin.ModelAdmin):
    fields = ['pub_date', 'question_text']

admin.site.register(Question, QuestionAdmin)
```

You’ll follow this pattern – create a model admin class, then pass it as the second argument to `admin.site.register()` – any time you need to change the admin options for a model.

## Fieldsets

In `polls/admin.py`

```py
from django.contrib import admin

from .models import Question


class QuestionAdmin(admin.ModelAdmin):
    fieldsets = [
        (None,               {'fields': ['question_text']}),
        ('Date information', {'fields': ['pub_date']}),
    ]

admin.site.register(Question, QuestionAdmin)
```

## Inline Choice

In `polls/admin.py`

```py
from django.contrib import admin

from .models import Choice, Question


class ChoiceInline(admin.StackedInline):
    model = Choice
    extra = 3


class QuestionAdmin(admin.ModelAdmin):
    fieldsets = [
        (None,               {'fields': ['question_text']}),
        ('Date information', {'fields': ['pub_date'], 'classes': ['collapse']}),
    ]
    inlines = [ChoiceInline]

admin.site.register(Question, QuestionAdmin)
```

This tells Django: “`Choice` objects are edited on the `Question` admin page. By default, provide enough fields for 3 choices.”

In `polls/admin.py`

```py
class ChoiceInline(admin.TabularInline):
    #...
```

With that `TabularInline` (instead of `StackedInline`), the related objects are displayed in a more compact, table-based format.

## Admin change list

Use the [`list_display`](../../ref/contrib/admin/#django.contrib.admin.ModelAdmin.list_display "django.contrib.admin.ModelAdmin.list_display") admin option, which is a tuple of field names to display, as columns, on the change list page for the object.

```py
class QuestionAdmin(admin.ModelAdmin):
    # ...
    list_display = ('question_text', 'pub_date')
```

For good measure, let’s also include the `was_published_recently()` method:

```py
class QuestionAdmin(admin.ModelAdmin):
    # ...
    list_display = ('question_text', 'pub_date', 'was_published_recently')
```

## `display()` decorator

Note that the column header for `was_published_recently` is, by default, the name of the method (with underscores replaced with spaces), and that each line contains the string representation of the output.

You can improve that by using the [`display()`](../../ref/contrib/admin/#django.contrib.admin.display "django.contrib.admin.display") decorator on that method (in `polls/models.py`), as follows:

```py
from django.contrib import admin

class Question(models.Model):
    # ...
    @admin.display(
        boolean=True,
        ordering='pub_date',
        description='Published recently?',
    )
    def was_published_recently(self):
        now = timezone.now()
        return now - datetime.timedelta(days=1) <= self.pub_date <= now
```

## Filter

In `polls/admin.py`

Add the following line to `QuestionAdmin`

```py
list_filter = ['pub_date']
```

## Search

```py
search_fields = ['question_text']
```

That adds a search box at the top of the change list. When somebody enters search terms, Django will search the `question_text` field. You can use as many fields as you’d like – although because it uses a `LIKE` query behind the scenes, limiting the number of search fields to a reasonable number will make it easier for your database to do the search.

## Admin look

Create a `templates` directory in your project directory (the one that contains `manage.py`).

In `settings.py`

```py
TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [BASE_DIR / 'templates'],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]
```

[`DIRS`](../../ref/settings/#std:setting-TEMPLATES-DIRS) is a list of filesystem directories to check when loading Django templates; it’s a search path.

Now create a directory called `admin` inside `templates`, and copy the template `admin/base_site.html` from within the default Django admin template directory in the source code of Django itself (`django/contrib/admin/templates`) into that directory.

Find django source files:

```
python -c "import django; print(django.__path__)"
```

## Edit title in Admin

Edit the file and replace `{{ site_header|default:_('Django administration') }}` (including the curly braces) with your own site’s name as you see fit. You should end up with a section of code like:

```html
{% block branding %}
<h1 id="site-name"><a href="{% url 'admin:index' %}">Polls Administration</a></h1>
{% endblock %}
```

## Customize Admin index page

The template to customize is `admin/index.html`. (Do the same as with `admin/base_site.html` in the previous section – copy it from the default directory to your custom template directory). Edit the file, and you’ll see it uses a template variable called `app_list`. That variable contains every installed Django app. Instead of using that, you can hard-code links to object-specific admin pages in whatever way you think is best.