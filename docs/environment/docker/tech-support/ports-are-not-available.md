---
sidebar_label: "TOPIC"
description: "TOPIC."
---

# TOPIC

## Error

```
ERROR: for django-on-docker_nginx_1  Cannot start service nginx: Ports are not available: listen tcp 0.0.0.0:1337: bind: An attempt was made to access a socket in a way forbidden by its access permissions.  

ERROR: for nginx  Cannot start service nginx: Ports are not available: listen tcp 0.0.0.0:1337: bind: An attempt was made to access a socket in a way forbidden by its access permissions. 

ERROR: Encountered errors while bringing up the project.
```

## Solution

In Admin mode of Windows Terminal:

```
net stop winnat
docker start ...
net start winnat
```

## References

[Docker error "Ports are not available" on Windows 10](https://www.herlitz.io/2020/12/01/docker-error-ports-are-not-available-on-windows-10/)

[Unable to bind ports: Docker-for-Windows & Hyper-V excluding but not using important port ranges · Issue #3171 · docker/for-win](https://github.com/docker/for-win/issues/3171)