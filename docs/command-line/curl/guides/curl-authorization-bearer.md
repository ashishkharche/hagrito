---
sidebar_label: TOPIC
description: TOPIC.
---

# curl authorization bearer


Use curl to make a videos:annotate request passing the filename of the entity request:


```
curl -s -H 'Content-Type: application/json' \
    -H 'Authorization: Bearer '$(gcloud auth print-access-token)'' \
    'https://videointelligence.googleapis.com/v1/videos:annotate' \
    -d @request.json
```

[Video Intelligence: Qwik Start | Qwiklabs](https://www.qwiklabs.com/focuses/603?parent=catalog)