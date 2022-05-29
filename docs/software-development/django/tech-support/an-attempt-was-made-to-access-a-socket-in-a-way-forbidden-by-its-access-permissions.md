---
sidebar_label: "An attempt was made to access a socket in a way forbidden by its access permissions"
description: "An attempt was made to access a socket in a way forbidden by its access permissions."
---

# An attempt was made to access a socket in a way forbidden by its access permissions

## Solution:

In Admin mode:

```
net stop hns

net start hns
```

## References

[c# - An attempt was made to access a socket in a way forbidden by its access permissions. Why? - Stack Overflow](https://stackoverflow.com/questions/10461257/an-attempt-was-made-to-access-a-socket-in-a-way-forbidden-by-its-access-permissi)