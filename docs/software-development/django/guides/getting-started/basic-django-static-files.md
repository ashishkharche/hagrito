---
sidebar_label: "Basic django static files"
description: "Basic django static files."
---

# Basic django static files

## Create stylesheet

In `polls/static/polls/style.css`

or for bewvity: `polls/style.css`

```css
li a {
    color: green;
}
```

In `polls/index.html`

The `{% static %}` template tag generates the absolute URL of static files.

```html
{% load static %}

<link rel="stylesheet" type="text/css" href="{% static 'polls/style.css' %}">
```

## Add image

In `polls/static/polls/images/background.gif`

Now, in `polls/style.css`

```css
body {
    background: white url("images/background.gif") no-repeat;
}
```

## References

[Writing your first Django app, part 6 | Django documentation | Django](https://docs.djangoproject.com/en/3.2/intro/tutorial06/)