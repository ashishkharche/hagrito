---
sidebar_label: "Service Account permission denied"
description: "Service Account permission denied."
---

# Service Account permission denied

## Create service Account

Make sure you have created service account according to instructions: https://cloud.google.com/document-ai/docs/setup#auth

## Configure environmental variables properly

Go to `~/.bashrc` (Git bash on Windows)

```
export GOOGLE_APPLICATION_CREDENTIALS="/t/github/other/gcp/projects/mortgage/key.json"
```

Notice the full path. 

Do `source ~/.bashrc` and try again.

The error should resolve.

## Additional notes

Try giving owner level permissions when trying when creating service account for test purpose.