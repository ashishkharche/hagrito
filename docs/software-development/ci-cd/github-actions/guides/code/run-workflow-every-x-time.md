---
sidebar_label: Run workflow every x time
description: Run workflow every x time.
---

# Run workflow every x time

You can configure your workflows to run when specific activity occurs on GitHub, when an event outside of GitHub happens, or at a scheduled time. The `schedule` event allows you to trigger a workflow to run at specific UTC times using [POSIX cron syntax](https://pubs.opengroup.org/onlinepubs/9699919799/utilities/crontab.html#tag_20_25_07). This cron syntax has five `*` fields, and each field represents a unit of time.

![](https://docs.microsoft.com/en-us/learn/github/github-actions-automate-tasks/media/scheduled-events.png)

For example, if you wanted to run a workflow every 15 minutes, the `schedule` event would look like the following:

```yml
on:
  schedule:
    - cron:  '*/15 * * * *'
```

And if you wanted to run a workflow every Sunday at 3:00am, the `schedule` event would look like this:

```yml
on:
  schedule:
    - cron:  '0 3 * * SUN'
```

[Configure a GitHub Actions workflow - Learn | Microsoft Docs](https://docs.microsoft.com/en-us/learn/modules/github-actions-automate-tasks/2c-configure-github-actions-workflow)