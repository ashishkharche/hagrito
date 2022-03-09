---
sidebar_label: gcloud commands
description: gcloud commands.
---

# gcloud commands

[The gcloud tool cheat sheet  |  Cloud SDK Documentation  |  Google Cloud](https://cloud.google.com/sdk/docs/cheatsheet)

## List active account name

```
gcloud auth list
```

## List project ID

```
gcloud config list project
```

## Set project ID

```
gcloud config set project <project ID>
```

## Enable API

```
gcloud services enable vision.googleapis.com
```

## Get current project ID

```
gcloud info --format='value(config.project)'
```

or

```
gcloud config get-value core/project
```