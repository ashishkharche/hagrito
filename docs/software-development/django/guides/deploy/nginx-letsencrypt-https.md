---
sidebar_label: "Nginx letsencrypt https"
description: "Nginx letsencrypt https."
---

# Nginx letsencrypt https

## Install certbot

```
sudo apt install certbot python3-certbot-nginx
```

## Reload nginx to load configuration changes

```
sudo systemctl reload nginx
```

## Allow HTTPS through firewall

```
sudo ufw status
```

```
sudo ufw allow 'Nginx Full'
```

```
sudo ufw delete allow 'Nginx HTTP'
```

## Obtain SSL certificate

```
sudo certbot --nginx -d example.com -d www.example.com
```

## Verify certbot auto renew

```
sudo systemctl status certbot.timer
```

```
sudo certbot renew --dry-run
```