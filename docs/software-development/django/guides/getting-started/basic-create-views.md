---
sidebar_label: "Basic create views"
description: "Basic create views."
---

# Basic create views

## Update `polls/views.py`

These views are slightly different, because they take an argument:

```py
def detail(request, question_id):
    return HttpResponse("You're looking at question %s." % question_id)

def results(request, question_id):
    response = "You're looking at the results of question %s."
    return HttpResponse(response % question_id)

def vote(request, question_id):
    return HttpResponse("You're voting on question %s." % question_id)
```

## Maps views to urls

In `polls/urls.py`

```py
from django.urls import path

from . import views

urlpatterns = [
    # ex: /polls/
    path('', views.index, name='index'),
    # ex: /polls/5/
    path('<int:question_id>/', views.detail, name='detail'),
    # ex: /polls/5/results/
    path('<int:question_id>/results/', views.results, name='results'),
    # ex: /polls/5/vote/
    path('<int:question_id>/vote/', views.vote, name='vote'),
]
```

Using angle brackets “captures” part of the URL and sends it as a keyword argument to the view function. The `question_id` part of the string defines the name that will be used to identify the matched pattern, and the `int` part is a converter that determines what patterns should match this part of the URL path. The colon (`:`) separates the converter and pattern name.

## Display latest 5 questions

```py
from django.http import HttpResponse

from .models import Question


def index(request):
    latest_question_list = Question.objects.order_by('-pub_date')[:5]
    output = ', '.join([q.question_text for q in latest_question_list])
    return HttpResponse(output)

# Leave the rest of the views (detail, results, vote) unchanged
```

## Django’s template system

Create `polls/templates/polls/index.html` file.

Refer to above template as `polls/index.html`

By convention `DjangoTemplates` looks for a “templates” subdirectory in each of the [`INSTALLED_APPS`](../../ref/settings/#std:setting-INSTALLED_APPS).

## Template namespacing

Now we _might_ be able to get away with putting our templates directly in `polls/templates` (rather than creating another `polls` subdirectory), but it would actually be a bad idea. Django will choose the first template it finds whose name matches, and if you had a template with the same name in a _different_ application, Django would be unable to distinguish between them. We need to be able to point Django at the right one, and the best way to ensure this is by _namespacing_ them. That is, by putting those templates inside _another_ directory named for the application itself.


## In `index.html`

```py
{% if latest_question_list %}
    <ul>
    {% for question in latest_question_list %}
        <li><a href="/polls/{{ question.id }}/">{{ question.question_text }}</a></li>
    {% endfor %}
    </ul>
{% else %}
    <p>No polls are available.</p>
{% endif %}
```

In real projects, use [complete HTML documents](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Getting_started#anatomy_of_an_html_document).

## In `polls/views.py`

That code loads the template called `polls/index.html` and passes it a context. The context is a dictionary mapping template variable names to Python objects.

```py
from django.http import HttpResponse
from django.template import loader

from .models import Question


def index(request):
    latest_question_list = Question.objects.order_by('-pub_date')[:5]
    template = loader.get_template('polls/index.html')
    context = {
        'latest_question_list': latest_question_list,
    }
    return HttpResponse(template.render(context, request))
```

**OR BETTER, alternatively**:

The [`render()`](../../topics/http/shortcuts/#django.shortcuts.render "django.shortcuts.render") function takes the request object as its first argument, a template name as its second argument and a dictionary as its optional third argument. It returns an [`HttpResponse`](../../ref/request-response/#django.http.HttpResponse "django.http.HttpResponse") object of the given template rendered with the given context.

```py
from django.shortcuts import render

from .models import Question


def index(request):
    latest_question_list = Question.objects.order_by('-pub_date')[:5]
    context = {'latest_question_list': latest_question_list}
    return render(request, 'polls/index.html', context)
```

## Detail view

In `polls/views.py`

The new concept here: The view raises the [`Http404`](../../topics/http/views/#django.http.Http404 "django.http.Http404") exception if a question with the requested ID doesn’t exist.

```py
from django.http import Http404
from django.shortcuts import render

from .models import Question
# ...
def detail(request, question_id):
    try:
        question = Question.objects.get(pk=question_id)
    except Question.DoesNotExist:
        raise Http404("Question does not exist")
    return render(request, 'polls/detail.html', {'question': question})
```

**OR WITH SHORTCUT, alternatively**:

The [`get_object_or_404()`](../../topics/http/shortcuts/#django.shortcuts.get_object_or_404 "django.shortcuts.get_object_or_404") function takes a Django model as its first argument and an arbitrary number of keyword arguments, which it passes to the [`get()`](../../ref/models/querysets/#django.db.models.query.QuerySet.get "django.db.models.query.QuerySet.get") function of the model’s manager. It raises [`Http404`](../../topics/http/views/#django.http.Http404 "django.http.Http404") if the object doesn’t exist.

```py
from django.shortcuts import get_object_or_404, render

from .models import Question
# ...
def detail(request, question_id):
    question = get_object_or_404(Question, pk=question_id)
    return render(request, 'polls/detail.html', {'question': question})
```

There’s also a [`get_list_or_404()`](../../topics/http/shortcuts/#django.shortcuts.get_list_or_404 "django.shortcuts.get_list_or_404") function, which works just as [`get_object_or_404()`](../../topics/http/shortcuts/#django.shortcuts.get_object_or_404 "django.shortcuts.get_object_or_404") – except using [`filter()`](../../ref/models/querysets/#django.db.models.query.QuerySet.filter "django.db.models.query.QuerySet.filter") instead of [`get()`](../../ref/models/querysets/#django.db.models.query.QuerySet.get "django.db.models.query.QuerySet.get"). It raises [`Http404`](../../topics/http/views/#django.http.Http404 "django.http.Http404") if the list is empty.

## In `polls/details.html`

```py
<h1>{{ question.question_text }}</h1>
<ul>
{% for choice in question.choice_set.all %}
    <li>{{ choice.choice_text }}</li>
{% endfor %}
</ul>
```

The template system uses dot-lookup syntax to access variable attributes. In the example of `{{ question.question_text }}`, first Django does a dictionary lookup on the object `question`. Failing that, it tries an attribute lookup – which works, in this case. If attribute lookup had failed, it would’ve tried a list-index lookup.

Method-calling happens in the [`{% for %}`](../../ref/templates/builtins/#std:templatetag-for) loop: `question.choice_set.all` is interpreted as the Python code `question.choice_set.all()`, which returns an iterable of `Choice` objects and is suitable for use in the [`{% for %}`](../../ref/templates/builtins/#std:templatetag-for) tag.

## `{% url %}` template tag

Hardcoded:

```py
<li><a href="/polls/{{ question.id }}/">{{ question.question_text }}</a></li>
```

to

```py
<li><a href="{% url 'detail' question.id %}">{{ question.question_text }}</a></li>
```

The problem with this hardcoded, tightly-coupled approach is that it becomes challenging to change URLs on projects with a lot of templates. However, since you defined the name argument in the [`path()`](../../ref/urls/#django.urls.path "django.urls.path") functions in the `polls.urls` module, you can remove a reliance on specific URL paths defined in your url configurations by using the `{% url %}` template tag.

The way this works is by looking up the URL definition as specified in the `polls.urls` module. You can see exactly where the URL name of ‘detail’ is defined below:

```py
...
# the 'name' value as called by the {% url %} template tag
path('<int:question_id>/', views.detail, name='detail'),
...
```

## Add namespaces to your URLconf

The tutorial project has just one app, `polls`. In real Django projects, there might be five, ten, twenty apps or more. How does Django differentiate the URL names between them? For example, the `polls` app has a `detail` view, and so might an app on the same project that is for a blog. How does one make it so that Django knows which app view to create for a url when using the `{% url %}` template tag?

In the `polls/urls.py` file, go ahead and add an `app_name` to set the application namespace:

```py
from django.urls import path

from . import views

app_name = 'polls'
urlpatterns = [
    path('', views.index, name='index'),
    path('<int:question_id>/', views.detail, name='detail'),
    path('<int:question_id>/results/', views.results, name='results'),
    path('<int:question_id>/vote/', views.vote, name='vote'),
]
```

Now change your `polls/index.html` template from:

In `polls/index.html`

```py
<li><a href="{% url 'detail' question.id %}">{{ question.question_text }}</a></li>
```

to point at the namespaced detail view:

```py
<li><a href="{% url 'polls:detail' question.id %}">{{ question.question_text }}</a></li>
```

## References

[Writing your first Django app, part 3 | Django documentation | Django](https://docs.djangoproject.com/en/4.0/intro/tutorial03/)