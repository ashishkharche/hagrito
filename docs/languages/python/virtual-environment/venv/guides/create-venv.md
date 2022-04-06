---
sidebar_label: Create venv
description: Create venv.
---

# Create venv

## Init venv

Linux:

```
cd your-project
python3 -m venv env
```

Windows:

```
cd your-project
py -m venv env
```

## Activate

Linux:

```
source env/bin/activate
```

Windows:

```
.\env\Scripts\activate
```

or

```
env\Scripts\activate.bat
```

## Deactivate

```
deactivate
```

Now you can install packages without affecting other projects or your global Python installation:

## References

[Setting up a Python development environment  |  Google Cloud](https://cloud.google.com/python/docs/setup#windows_2)