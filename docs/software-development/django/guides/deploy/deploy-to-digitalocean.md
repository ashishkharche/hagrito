---
sidebar_label: "Deploy to DigitalOcean"
description: "Deploy to DigitalOcean."
---

# Deploy to DigitalOcean

## Create a droplet

Use SSH key as authentication.

Use `ssh-keygen -f id_ssh_filename` and paste `.pub` content to DigitalOcean SSH key field.

## Configure .ssh in local machine

Go to `~/.ssh/config` and do similar to:

```
Host 198.211.109.111
   HostName 198.211.109.111
   User root
   IdentityFile ~/.ssh/id_cnapi_1
```

where 198.211.109.165 is the IP address of the droplet

## Login as root

```
ssh root@137.184.150.111
```

## Create new user

Ref: [Initial Server Setup with Ubuntu 22.04 | DigitalOcean](https://www.digitalocean.com/community/tutorials/initial-server-setup-with-ubuntu-22-04)

```
adduser sammy
```

```
usermod -aG sudo sammy
```

## Firewall

```
ufw app list
```

```
ufw allow OpenSSH
```

```
ufw enable
```

```
ufw status
```

Note: The firewall is currently blocking all connections except for SSH.

## SSH key copy

```
rsync --archive --chown=sammy:sammy ~/.ssh /home/sammy
```

## Exit and login as user

```
exit
```

```
ssh sammy@ip
```

## Install packages

```
sudo apt update
```

```
sudo apt install python3-venv python3-dev libpq-dev postgresql postgresql-contrib nginx curl
```

## Postgres

```
sudo -u postgres psql
```

```
CREATE DATABASE myproject;
```

```
CREATE USER myprojectuser WITH PASSWORD 'password';
```

```
ALTER ROLE myprojectuser SET client_encoding TO 'utf8';
ALTER ROLE myprojectuser SET default_transaction_isolation TO 'read committed';
ALTER ROLE myprojectuser SET timezone TO 'UTC';
```

```
GRANT ALL PRIVILEGES ON DATABASE myproject TO myprojectuser;
```

```
\q
```

## Virtual environment

```
mkdir ~/myprojectdir
cd ~/myprojectdir
```

```
python3 -m venv myprojectenv
```

```
source myprojectenv/bin/activate
```

## Git

Create ssh files in `~/.ssh`:

```
ssh-keygen -f id_cnapi_1
```

Copy .pub key in ssh Github.com settings

Create `config` file in `~/.ssh`

Edit `config` file:

```
Host github.com
   HostName github.com
   User git
   IdentityFile ~/.ssh/id_cnapi_1
```

Go to working directory where python environment directory is located (not inside of the folder though)

```
git clone git@github.com:androiddevnotes/cn-programming-api.git
```

## Django packages

```
pip install -r requirements.txt
```

If you get error: 

```

You may install a binary package by installing 'psycopg2-binary'
```

Then do:

```
pip install psycopg2-binary
```

and remove psycopg2-binary from requirements.txt

## Edit settings

settings.py:

```
ALLOWED_HOSTS = ['your_server_domain_or_IP', 'second_domain_or_IP', . . ., 'localhost']
```

```
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': 'myproject',
        'USER': 'myprojectuser',
        'PASSWORD': 'password',
        'HOST': 'localhost',
        'PORT': '',
    }
}
```

```
DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'

import os
STATIC_ROOT = os.path.join(BASE_DIR, 'static/')

```

## Migrations

```
~/myprojectdir/manage.py makemigrations
~/myprojectdir/manage.py migrate
```

```
~/myprojectdir/manage.py createsuperuser
```

```
~/myprojectdir/manage.py collectstatic
```

## Run

Allow port 8000
```
sudo ufw allow 8000
```

```
python manage.py runserver 0.0.0.0:8000
```

On web browser, ip:8000
```
198.211.109.111:8000
```

## Gunicorn

```
cd ~/myprojectdir
```

```
pip install gunicorn
```

Use `gunicorn` from your virtual environment only.

```
/home/sammy/myprojectdir/venv/bin/gunicorn --bind 0.0.0.0:8000 myproject.wsgi
```

```
deactivate
```

## Gunicorn socket and service

### Socket

```
sudo micro /etc/systemd/system/gunicorn.socket
```

```
[Unit]
Description=gunicorn socket

[Socket]
ListenStream=/run/gunicorn.sock

[Install]
WantedBy=sockets.target
```

### Service

```
sudo micro /etc/systemd/system/gunicorn.service
```
```
[Unit]
Description=gunicorn daemon
Requires=gunicorn.socket
After=network.target

[Service]
User=sammy
Group=www-data
WorkingDirectory=/home/sammy/myprojectdir
ExecStart=/home/sammy/myprojectdir/venv/bin/gunicorn \
          --access-logfile - \
          --workers 3 \
          --bind unix:/run/gunicorn.sock \
          cndevproject.wsgi:application

[Install]
WantedBy=multi-user.target
```

```
sudo systemctl start gunicorn.socket
```

```
sudo systemctl enable gunicorn.socket
```

```
sudo systemctl status gunicorn.socket
```

```
file /run/gunicorn.sock
```

```
sudo journalctl -u gunicorn.socket
```

```
sudo systemctl status gunicorn
```

```
curl --unix-socket /run/gunicorn.sock localhost
```

```
sudo systemctl status gunicorn
```

```
sudo journalctl -u gunicorn
```

Check your /etc/systemd/system/gunicorn.service file for problems. If you make changes to the /etc/systemd/system/gunicorn.service file, reload the daemon to reread the service definition and restart the Gunicorn process by typing:
```
sudo systemctl daemon-reload
```
```
sudo systemctl restart gunicorn
```

## Nginx

```
sudo micro /etc/nginx/sites-available/cndevproject
```

```
server {
    listen 80;
    server_name server_domain_or_IP;

    location = /favicon.ico { access_log off; log_not_found off; }
    location /static/ {
        root /home/sammy/myprojectdir;
    }

    location / {
        include proxy_params;
        proxy_pass http://unix:/run/gunicorn.sock;
    }
}
```

```
sudo ln -s /etc/nginx/sites-available/cndevproject /etc/nginx/sites-enabled
```

```
sudo nginx -t
```

```
sudo systemctl restart nginx
```

```
sudo ufw delete allow 8000
```

```
sudo ufw allow 'Nginx Full'
```

## Troubleshooting

Nginx not serving static files?

Change nginx user to root

```
sudo micro /etc/nginx/nginx.conf
```

Test: Create ok.txt with some context in static folder.

Go to: http://137.184.106.123/static/ok.txt to see if it loads or show 403 forbidden error

Ref: https://forum.djangoproject.com/t/configure-static-files-to-work-with-nginx/5689/12

## 413 entity too large?

In nginx.conf

IN http block

Add:

```
client_max_body_size 64M;
```

## Update changes to code

```
sudo service gunicorn restart
sudo service nginx restart #only if you need to
```