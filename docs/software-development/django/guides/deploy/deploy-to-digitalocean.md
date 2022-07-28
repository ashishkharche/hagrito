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
ssh-keygen -f id_filename
```

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
/home/sammy/digicn/myprojectenv/bin/gunicorn --bind 0.0.0.0:8000 myproject.wsgi
```