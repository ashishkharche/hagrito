---
sidebar_label: Algolia
description: Algolia.
---

# Algolia

## Run the crawl from the Docker image

```
docker run -it --env-file=.env -e "CONFIG=$(cat /path/to/your/config.json | jq -r tostring)" algolia/docsearch-scraper
```