---
sidebar_label: virtualenv venv command not found
description: virtualenv venv command not found.
---

# virtualenv venv command not found

## Error

```
$ virtualenv venv
bash: virtualenv: command not found
```

## Solution

### Uninstall

Notice the `-y` flag.

```
$ pip uninstall virtualenv -y
Found existing installation: virtualenv 20.13.0
Uninstalling virtualenv-20.13.0:
  Successfully uninstalled virtualenv-20.13.0
```
### Install

```
$ pip install virtualenv
```

### Usage

```
$ virtualenv venv
```