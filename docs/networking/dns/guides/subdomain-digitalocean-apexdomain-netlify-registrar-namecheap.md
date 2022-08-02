---
sidebar_label: "Subdomain to Digitalocean, Apex domain to Netlify, Domain registrar Namecheap"
description: "Subdomain to Digitalocean, Apex domain to Netlify, Domain registrar Namecheap."
---

# Subdomain to Digitalocean, Apex domain to Netlify, Domain registrar Namecheap

## Namecheap

Use basic DNS

Go to Advanced DNS settings:

![](https://i.imgur.com/ooiOlrH.png)

## Netlify

Click on Add domain, use Netlify DNS (everything default)

![](https://i.imgur.com/AMyK1Ok.png)

## Digitalocean

No need to make use of DigitalOcean UIs Domain/DNS settings.

Edit `/etc/nginx/sites-available/cndevproject` for subdomain settings

```
server {
    server_name rest.cnsomeapi.com api.cnsomeapi.com;

    location = /favicon.ico { access_log off; log_not_found off; }
    location /static/ {
        root /home/sammy/myprojectdir;
    }

    location / {
        include proxy_params;
        proxy_pass http://unix:/run/gunicorn.sock;
    }


    listen 443 ssl; # managed by Certbot
    ssl_certificate /etc/letsencrypt/live/api.cnsomeapi.com/fullchain.pem; # managed by Certbot
    ssl_certificate_key /etc/letsencrypt/live/api.cnsomeapi.com/privkey.pem; # managed by Certbot
    include /etc/letsencrypt/options-ssl-nginx.conf; # managed by Certbot
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem; # managed by Certbot


}
server {
    if ($host = rest.cnsomeapi.com) {
        return 301 https://$host$request_uri;
    } # managed by Certbot


    if ($host = api.cnsomeapi.com) {
        return 301 https://$host$request_uri;
    } # managed by Certbot


    server_name rest.cnsomeapi.com api.cnsomeapi.com;
    listen 80;
    return 404; # managed by Certbot




}
```

## Certbot (letsencrypt)

[How To Secure Nginx with Let's Encrypt on Ubuntu 20.04 | DigitalOcean](https://www.digitalocean.com/community/tutorials/how-to-secure-nginx-with-let-s-encrypt-on-ubuntu-20-04)