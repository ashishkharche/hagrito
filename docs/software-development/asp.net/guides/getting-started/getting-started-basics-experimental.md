---
sidebar_label: Basics Experimental - Getting Started
description: Basics Experimental - Getting Started.
---

# Basics Experimental - Getting Started

## ConnectionString

```
"DefaultConnection": "Server=(localdb)\\mssqllocaldb; Database=DBNAME; Trusted_Connection=True; MultipleActiveResultSets=true"
```

## Migrations Command

```
Add-Migration InitialCreate
```

```
Update-Database
```

```
Remove-Migration
```

```
Script-Migration
```

## CLI

```
dotnet ef migrations add InitialCreate
dotnet ef database update
dotnet ef migrations remove
dotnet ef migrations script
```

## Renaming

When renaming, do not rename in "Migrations" folder. Rename all other files if you want.

## Changing Database

When changing database, like when changing database name from `appsettings.json` file.

Make sure to delete domain cookies and other cookies using Chrome web Developer Extension. And then refresh.

Do `update-database`.