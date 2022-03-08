---
sidebar_label: "ERROR: Could not install packages due to an OSError"
description: "ERROR: Could not install packages due to an OSError."
---

# ERROR: Could not install packages due to an OSError

Instead of:

```
pip install --upgrade <packages>
```

Do:

```
python -m pip install --upgrade <packages>
```

The `-m` flag makes sure that you are using the pip that's tied to the active Python executable.

## References

[Meaning of python -m flag - Stack Overflow](https://stackoverflow.com/questions/50821312/meaning-of-python-m-flag)

[New permissions errors while running `pip install --upgrade pip` on Windows - Code to Cloud / GitHub Actions - GitHub Community](https://github.community/t/new-permissions-errors-while-running-pip-install-upgrade-pip-on-windows/18323)