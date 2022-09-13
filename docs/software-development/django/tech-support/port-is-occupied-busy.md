---
sidebar_label: "Port is occupied or busy"
description: "Port is occupied or busy."
---

# Port is occupied or busy

```
sudo lsof -i -P -n | grep <port number>
```

```
kill -9 <port number>
```

## References

[ubuntu - Docker Error bind: address already in use - Stack Overflow](https://stackoverflow.com/questions/37971961/docker-error-bind-address-already-in-use)