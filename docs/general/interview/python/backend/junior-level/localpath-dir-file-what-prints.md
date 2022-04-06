---
sidebar_label: "LocalPath dir file what prints - Python Interview Question"
description: "LocalPath dir file what prints - Python Interview Question."
---

# LocalPath dir file what prints - Python Interview Question

## Task

**Question**:

What will be printed or returned? Walk through the code and explain logic.

What's the data type of var1?

**Code**:

```py
from py._path.local import LocalPath


def foo(lp: LocalPath):
    if lp.isdir():
        var1 = {df.basename: foo(df) for df in lp.listdir()}
        print(f" var1: {var1}")
    elif lp.isfile():
        var2 = lp.read_text('utf8')
        print(var2)
    else:
        raise Exception('not directory or file: {}'.format(lp))


# Add file path of your system here
lp = LocalPath("T://github//low//py//pythonProject")
foo(lp)
```

## Job description

Junior - Mid Python Backend Developer job