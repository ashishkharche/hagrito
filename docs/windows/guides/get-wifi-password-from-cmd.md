---
sidebar_label: Get Wifi password from CMD
description: Get Wifi password from CMD.
---

# Get Wifi password from CMD

Do

```
netsh wlan show profile
```

It will show wifi profiles.

Then append the interested wifi profile name in the command below, for example "wifi_profile_name"

```
netsh wlan show profile wifi_profile_name key=clear
```