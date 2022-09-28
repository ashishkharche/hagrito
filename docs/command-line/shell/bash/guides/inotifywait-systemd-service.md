---
sidebar_label: "inotifywait systemd service"
description: "inotifywait systemd service."
---

# inotifywait systemd service

## Create a service

```
sudo vim /lib/systemd/system/checkfile.service
```

```
[Unit]
Description = Run inotifywait in backgoround

[Service]
User=ubuntu
Group=ubuntu
ExecStart=/bin/bash /path_to/script.sh
RestartSec=10

[Install]
WantedBy=multi-user.target
```

```
inotifywait -m /path-to-dir -e create -e moved_to |
    while read dir action file; do
        echo "The file '$file' appeared in directory '$dir' via '$action'" >> /dir/event.txt
    done
```

```
sudo chmod +x /path_to/script.sh
```
```
sudo systemctl daemon-reload
```

```
sudo systemctl enable checkfile
sudo systemctl start checkfile
```

https://stackoverflow.com/questions/18901622/run-inotifywait-on-background

# NOT WORKING BELOW

## Create a service

```
[Service]
ExecStart=/path/copy-channel-backup-on-change.sh
Restart=always
RestartSec=1
StandardOutput=syslog
StandardError=syslog
SyslogIdentifier=backup-channels
User=ubuntu
Group=ubuntu

[Install]
WantedBy=multi-user.target
```

## Example script

```bash
inotifywait -m /root/dissertation-code/operation/rawaudiofile -e create -e moved_to |
   while read directory action file; do
        echo "mp3 file" >> /root/dissertation-code/trigger/notify/ok.txt # If so, do your thing here!

   done
```

[Backup channel.backup file using systemd and inotify](https://gist.github.com/alexbosworth/2c5e185aedbdac45a03655b709e255a3)