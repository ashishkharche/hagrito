---
sidebar_label: "Docker Postgres"
description: "Docker Postgres."
---

# Docker Postgres

```
docker exec -it  CONTAINER_NAME -U PG_USER-d database_name
```

```
docker exec -it  g111r-mesmerlord-djangocutter_postgres_1 psql -U JkcNdcsyDINitTsgSoIZnvngzqexEVrO -d django_cutter
```

## Backup

```
docker exec -t your-db-container pg_dumpall -c -U postgres > dump_`date +%d-%m-%Y"_"%H_%M_%S`.sql

```

```
docker exec -t your-db-container pg_dumpall -c -U postgres > dump_`date +%d-%m-%Y"_"%H_%M_%S`.sql
```

## Restore

```
cat your_dump.sql | docker exec -i your-db-container psql -U postgres -d databasename
```

## CNDEVAPI

### backup

```
docker exec cndevapi_local_postgres psql -U fAAfXZaBAkDOSVULZaUTyihlauPpJWCO -d cndevapi < backup-db/dump_04-09-2022_16_45_57.sql
```

### connect

```
docker exec -it g113r-clean-dockerize-cndevapi-django_postgres_1 psql -U fAAfXZaBAkDOSVULZaUTyihlauPpJWCO cndevapi
```

goto bash :

    docker exec -it <container-name> bash

from bash :

    psql -U <dataBaseUserName> <dataBaseName>

or just this one-liner :

    docker exec -it  <container-name> psql -U <dataBaseUserName> <dataBaseName>

## References

fAAfXZaBAkDOSVULZaUTyihlauPpJWCO
