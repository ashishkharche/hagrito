---
sidebar_label: "Send email SMTP outlook"
description: "Send email SMTP outlook."
---

# Send email SMTP outlook

## settings.py

```py
EMAIL_BACKEND = 'django.core.mail.backends.smtp.EmailBackend'
EMAIL_PORT = 587
EMAIL_USE_TLS = True
EMAIL_HOST = 'smtp-mail.outlook.com'
EMAIL_HOST_USER = "scratchmybackplease@outlook.com"
EMAIL_HOST_PASSWORD = "Shareable86!"
```

## Activate python shell

```
python manage.py shell
```

```
from django.core.mail import send_mail
send_mail('DUDE Subject', 'LOL message', 'youremail@outlook.com', ['receiversemail@gmail.com'])
```

Check Spam Folders

## References

https://www.twilio.com/blog/using-twilio-sendgrid-send-emails-python-django