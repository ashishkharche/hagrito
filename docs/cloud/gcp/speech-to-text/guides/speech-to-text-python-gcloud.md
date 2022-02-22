---
sidebar_label: Speech to Text Python gcloud
description: Speech to Text Python gcloud.
---

# Speech to Text Python gcloud

## Create Google Cloud account

with billing

https://console.cloud.google.com/

## Install Google Cloud SDK

gcloud command-line tool

[Installing Cloud SDK  |  Google Cloud](https://cloud.google.com/sdk/docs/install)

## Commands

Configure `gcloud` to use your new Google Cloud project:

```
gcloud init
```

Export an environment variable with your current Google Cloud project ID:
```
PROJECT_ID=$(gcloud info --format='value(config.project)')
```
Enable the services used in this tutorial:

You can also enable services in the web app.
```
gcloud services enable speech.googleapis.com texttospeech.googleapis.com translate.googleapis.com storage-component.googleapis.com
```

Download code:

```
git clone https://github.com/GoogleCloudPlatform/community.git
```

Code is in speech2srt

Install virtualenv

```
python install virtualenv
```

Create virtual environment:

```
virtualenv venv
```

or

```
python -m venv venv
```

Activate virtual environment:

```
source venv/Scripts/activate
```

Install dependencies:

```
pip install -r requirements.txt
```


## Buckets

Create two Cloud Storage buckets: one for input, one for output. Because bucket names are a global namespace, you must use unique bucket names.

1.  Export the two bucket names into environment variables. Replace `[YOUR_FIRST_BUCKET]` and `[YOUR_SECOND_BUCKET]` with your custom bucket names:


```
BUCKET_IN=somebucketinput
BUCKET_OUT=somebucketoutput
```

Create buckets:

```
gsutil mb gs://$BUCKET_IN
gsutil mb gs://$BUCKET_OUT
```

## Service Account

All this steps can be done in web app.

In this section, you create a Service Account in your Google Cloud project and grant sufficient permissions to it so that it can use the AI services. You also download a JSON key for the Service Account. The JSON key is used by the Python utilities to authenticate with the Cloud services.

Create a new Service Account:

You can also create service account in IAM in web app.

```
gcloud iam service-accounts create ml-dev --description="ML APIs developer access" --display-name="ML Developer Service Account"
```

Grant the ML Developer role to the Service Account:

```
gcloud projects add-iam-policy-binding $PROJECT_ID --member serviceAccount:ml-dev@$PROJECT_ID.iam.gserviceaccount.com --role roles/ml.developer
```

Grant the Storage Object Admin role to the Service Account, so that it can upload and download objects to and from Cloud Storage:

```
gcloud projects add-iam-policy-binding $PROJECT_ID --member serviceAccount:ml-dev@$PROJECT_ID.iam.gserviceaccount.com --role roles/storage.objectAdmin
```

Create a JSON key for the Service Account:

```
gcloud iam service-accounts keys create ./ml-dev.json --iam-account ml-dev@$PROJECT_ID.iam.gserviceaccount.com
```

Export your service account JSON key to the shell environment variables, so that the utilities can authenticate with the Cloud AI services:

```
export GOOGLE_APPLICATION_CREDENTIALS=ml-dev.json
```

## Upload audio file

Upload your dialog audio file to the Cloud Storage bucket:

or go to Cloud storage in web app and upload audio file in input bucket.

```
gsutil cp example.wav gs://$BUCKET_IN/
```

Help:

```
python speech2srt.py -h
```

You might have to lower the hertz value depending on your audio file.

```
python speech2srt.py --storage_uri gs://$BUCKET_IN/example.wav --sample_rate_hertz 24000
```