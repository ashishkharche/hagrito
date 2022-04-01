---
sidebar_label: "createsuperuser with python shell"
description: "createsuperuser with python shell."
---

# createsuperuser with python shell

Usage: 

`sh script.sh`

`sh script.sh -u=username1`

Store files `script.sh` and `createsuperuser.py` in the root directory where `manage.py` is.

## `script.sh`

```bash
#!/bin/bash

# Bash variables
USERNAME="admin6"
PASSWORD="Test@123"
EMAIL="admin5@gmail.com"

prefix="[initialise.sh]"

function print_help() {
cat << EOF
$0

DESCRIPTION
The script initialises the database for Django and creates a user,
if root or the given user does not exist on the database.

OPTIONS
-h|--help                       Print this help.
-u=*|--user=*                   Create the given user if the user does not exist in the database
                                    (Default: root)
-p=*|--password=*               Use the given password for the user creation.
                                    (Default: password)
-s|--accountskip                Skip the account creation
EOF
}

# Parsing the arguments
for i in "$@"
do
    case $i in
        -u=*|--username=*)
            USERNAME="${i#*=}"
            shift
        ;;
        -p=*|--password=*)
            PASSWORD="${i#*=}"
            shift
        ;;
        -e=*|--email=*)
            EMAIL="${i#*=}"
            shift
        ;;
        -s|--account-skip)
            ACCOUNTSKIP=true
            shift
        ;;
        -h|--help)
            print_help
            exit
            shift
        ;;
        *)
        ;;
    esac
done

echo "$prefix started."

if [ ! $ACCOUNTSKIP ]
then
    echo "$prefix create Account"
    export USERNAME
    export PASSWORD
    export EMAIL
    python manage.py shell < createsuperuser.py
fi

echo "$prefix finished."
```

## createsuperuser.py

```py
import os

from django.contrib.auth.models import User

print(os.environ['USERNAME'] + ' user already exists') if User.objects.filter(
    username=os.environ['USERNAME']) else User.objects.create_superuser(os.environ['USERNAME'], os.environ['EMAIL'],
                                                                        os.environ['PASSWORD'])
```