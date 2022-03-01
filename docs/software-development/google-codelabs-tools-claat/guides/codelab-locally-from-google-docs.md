---
sidebar_label: Codelab locally from Google Docs
description: Codelab locally from Google Docs.
---

# Codelab locally from Google Docs

## Install Go

[Download and install - The Go Programming Language](https://go.dev/doc/install)

## Install claat

```
go get github.com/googlecodelabs/tools/claat
```

## Create Google Doc

Example: [Example Codelab - Your first Progressive Web App - Google Docs](https://docs.google.com/document/d/1E6XMcdTexh5O8JwGy42SY3Ehzi8gOfUGiqTiUX6N04o/edit)

## Preview Codelab

Use [Preview Codelab - Chrome Web Store](https://chrome.google.com/webstore/detail/preview-codelab/lhojjnijnkiglhkggagbapfonpdlinji) to preview codelab from Google Docs

## Run claat

Do claat export with Google Docs document ID

```
$ claat export 1rpHleSSeY-MJZ8JvncvYA8CFqlnlcrW8-a4uEaqizPY  
ok      your-first-pwapp
```

### Use markdown

```
$ claat export document.md
ok      your-md-based-codelab
```

## Serve

```
$ claat serve
```