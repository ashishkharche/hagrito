---
sidebar_label: Copy File
description: Copy File.
---

# Copy File using SCP

scp [source][destination]

Remote: mike@192.168.56.102

## File

Copy file from remote to local machine.

```
$ scp mike@192.168.56.102:/home/mike/atext.sh .
```

Copy file from local to remote machine.

```
$ scp atext.sh mike@192.168.56.102:/home/mike 
``` 

## Folder

Copy `ok` directory from local to remote

```
$ scp -r ok mike@192.168.56.102:/home/mike/
```

To only copy the files in the directory `ok`

```
$ scp -r ok/* mike@192.168.56.102:/home/mike/
```