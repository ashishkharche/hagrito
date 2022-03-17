---
sidebar_label: "__init__.py"
description: "__init__.py."
---

# __init__.py

The `__init__.py` files are required to make Python treat directories containing the file as packages. This prevents directories with a common name, such as `string`, unintentionally hiding valid modules that occur later on the module search path. In the simplest case, `__init__.py` can just be an empty file, but it can also execute initialization code for the package or set the `__all__` variable, described later.

## References

[6. Modules — Python 3.10.2 documentation](https://docs.python.org/3/tutorial/modules.html#tut-packages)