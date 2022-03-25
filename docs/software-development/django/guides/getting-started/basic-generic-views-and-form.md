---
sidebar_label: "Basic generic views and form"
description: "Basic generic views and form."
---

# Basic generic views and form

## form

In `polls/details.html`

```py
<form action="{% url 'polls:vote' question.id %}" method="post">
{% csrf_token %}
<fieldset>
    <legend><h1>{{ question.question_text }}</h1></legend>
    {% if error_message %}<p><strong>{{ error_message }}</strong></p>{% endif %}
    {% for choice in question.choice_set.all %}
        <input type="radio" name="choice" id="choice{{ forloop.counter }}" value="{{ choice.id }}">
        <label for="choice{{ forloop.counter }}">{{ choice.choice_text }}</label><br>
    {% endfor %}
</fieldset>
<input type="submit" value="Vote">
</form>
```

*   The above template displays a radio button for each question choice. The `value` of each radio button is the associated question choice’s ID. The `name` of each radio button is `"choice"`. That means, when somebody selects one of the radio buttons and submits the form, it’ll send the POST data `choice=#` where # is the ID of the selected choice. This is the basic concept of HTML forms.

*   We set the form’s `action` to `{% url 'polls:vote' question.id %}`, and we set `method="post"`. Using `method="post"` (as opposed to `method="get"`) is very important, because the act of submitting this form will alter data server-side. Whenever you create a form that alters data server-side, use `method="post"`. This tip isn’t specific to Django; it’s good web development practice in general.

*   `forloop.counter` indicates how many times the [`for`](../../ref/templates/builtins/#std:templatetag-for) tag has gone through its loop

*   Since we’re creating a POST form (which can have the effect of modifying data), we need to worry about Cross Site Request Forgeries. Thankfully, you don’t have to worry too hard, because Django comes with a helpful system for protecting against it. In short, all POST forms that are targeted at internal URLs should use the [`{% csrf_token %}`](../../ref/templates/builtins/#std:templatetag-csrf_token) template tag.

## In `polls/views.py`

```py
from django.http import HttpResponse, HttpResponseRedirect
from django.shortcuts import get_object_or_404, render
from django.urls import reverse

from .models import Choice, Question
# ...
def vote(request, question_id):
    question = get_object_or_404(Question, pk=question_id)
    try:
        selected_choice = question.choice_set.get(pk=request.POST['choice'])
    except (KeyError, Choice.DoesNotExist):
        # Redisplay the question voting form.
        return render(request, 'polls/detail.html', {
            'question': question,
            'error_message': "You didn't select a choice.",
        })
    else:
        selected_choice.votes += 1
        selected_choice.save()
        # Always return an HttpResponseRedirect after successfully dealing
        # with POST data. This prevents data from being posted twice if a
        # user hits the Back button.
        return HttpResponseRedirect(reverse('polls:results', args=(question.id,)))
```

*   [`request.POST`](../../ref/request-response/#django.http.HttpRequest.POST "django.http.HttpRequest.POST") is a dictionary-like object that lets you access submitted data by key name. In this case, `request.POST['choice']` returns the ID of the selected choice, as a string. [`request.POST`](../../ref/request-response/#django.http.HttpRequest.POST "django.http.HttpRequest.POST") values are always strings.

Note that Django also provides [`request.GET`](../../ref/request-response/#django.http.HttpRequest.GET "django.http.HttpRequest.GET") for accessing GET data in the same way – but we’re explicitly using [`request.POST`](../../ref/request-response/#django.http.HttpRequest.POST "django.http.HttpRequest.POST") in our code, to ensure that data is only altered via a POST call.

*   `request.POST['choice']` will raise [`KeyError`](https://docs.python.org/3/library/exceptions.html#KeyError "(in Python v3.10)") if `choice` wasn’t provided in POST data. The above code checks for [`KeyError`](https://docs.python.org/3/library/exceptions.html#KeyError "(in Python v3.10)") and redisplays the question form with an error message if `choice` isn’t given.

*   After incrementing the choice count, the code returns an [`HttpResponseRedirect`](../../ref/request-response/#django.http.HttpResponseRedirect "django.http.HttpResponseRedirect") rather than a normal [`HttpResponse`](../../ref/request-response/#django.http.HttpResponse "django.http.HttpResponse"). [`HttpResponseRedirect`](../../ref/request-response/#django.http.HttpResponseRedirect "django.http.HttpResponseRedirect") takes a single argument: the URL to which the user will be redirected (see the following point for how we construct the URL in this case).

As the Python comment above points out, you should always return an [`HttpResponseRedirect`](../../ref/request-response/#django.http.HttpResponseRedirect "django.http.HttpResponseRedirect") after successfully dealing with POST data. This tip isn’t specific to Django; it’s good web development practice in general.

*   We are using the [`reverse()`](../../ref/urlresolvers/#django.urls.reverse "django.urls.reverse") function in the [`HttpResponseRedirect`](../../ref/request-response/#django.http.HttpResponseRedirect "django.http.HttpResponseRedirect") constructor in this example. This function helps avoid having to hardcode a URL in the view function. It is given the name of the view that we want to pass control to and the variable portion of the URL pattern that points to that view. In this case, using the URLconf we set up in [Tutorial 3](../tutorial03/), this [`reverse()`](../../ref/urlresolvers/#django.urls.reverse "django.urls.reverse") call will return a string like

```py
'/polls/3/results/'
```

where the `3` is the value of `question.id`. This redirected URL will then call the `'results'` view to display the final page.

After somebody votes in a question, the `vote()` view redirects to the results page for the question. Let’s write that view:

In `polls/views.py`

```py
from django.shortcuts import get_object_or_404, render


def results(request, question_id):
    question = get_object_or_404(Question, pk=question_id)
    return render(request, 'polls/results.html', {'question': question})
```

## In `polls/results.html`

```py
<h1>{{ question.question_text }}</h1>

<ul>
{% for choice in question.choice_set.all %}
    <li>{{ choice.choice_text }} -- {{ choice.votes }} vote{{ choice.votes|pluralize }}</li>
{% endfor %}
</ul>

<a href="{% url 'polls:detail' question.id %}">Vote again?</a>
```

## Race condition

The code for our `vote()` view does have a small problem. It first gets the `selected_choice` object from the database, then computes the new value of `votes`, and then saves it back to the database. If two users of your website try to vote at _exactly the same time_, this might go wrong: The same value, let’s say 42, will be retrieved for `votes`. Then, for both users the new value of 43 is computed and saved, but 44 would be the expected value.

This is called a _race condition_. If you are interested, you can read [Avoiding race conditions using F()](../../ref/models/expressions/#avoiding-race-conditions-using-f) to learn how you can solve this issue.

## Generic views

Let’s convert our poll app to use the generic views system, so we can delete a bunch of our own code. We’ll have to take a few steps to make the conversion. We will:

1.  Convert the URLconf.
2.  Delete some of the old, unneeded views.
3.  Introduce new views based on Django’s generic views.

## In `polls/urls.py`

```py
from django.urls import path

from . import views

app_name = 'polls'
urlpatterns = [
    path('', views.IndexView.as_view(), name='index'),
    path('<int:pk>/', views.DetailView.as_view(), name='detail'),
    path('<int:pk>/results/', views.ResultsView.as_view(), name='results'),
    path('<int:question_id>/vote/', views.vote, name='vote'),
]
```

Note that the name of the matched pattern in the path strings of the second and third patterns has changed from `<question_id>` to `<pk>`.

## In `polls/views.py`

```py
from django.http import HttpResponseRedirect
from django.shortcuts import get_object_or_404, render
from django.urls import reverse
from django.views import generic

from .models import Choice, Question


class IndexView(generic.ListView):
    template_name = 'polls/index.html'
    context_object_name = 'latest_question_list'

    def get_queryset(self):
        """Return the last five published questions."""
        return Question.objects.order_by('-pub_date')[:5]


class DetailView(generic.DetailView):
    model = Question
    template_name = 'polls/detail.html'


class ResultsView(generic.DetailView):
    model = Question
    template_name = 'polls/results.html'


def vote(request, question_id):
    ... # same as above, no changes needed.
```

We’re using two generic views here: [`ListView`](../../ref/class-based-views/generic-display/#django.views.generic.list.ListView "django.views.generic.list.ListView") and [`DetailView`](../../ref/class-based-views/generic-display/#django.views.generic.detail.DetailView "django.views.generic.detail.DetailView"). Respectively, those two views abstract the concepts of “display a list of objects” and “display a detail page for a particular type of object.”

*   Each generic view needs to know what model it will be acting upon. This is provided using the `model` attribute.
*   The [`DetailView`](../../ref/class-based-views/generic-display/#django.views.generic.detail.DetailView "django.views.generic.detail.DetailView") generic view expects the primary key value captured from the URL to be called `"pk"`, so we’ve changed `question_id` to `pk` for the generic views.

For ListView, as an example, the automatically generated context variable is `question_list`. To override this we provide the `context_object_name` attribute, specifying that we want to use `latest_question_list` instead.

## References

[Writing your first Django app, part 4 | Django documentation | Django](https://docs.djangoproject.com/en/3.2/intro/tutorial04/)