---
sidebar_label: SSH to AWS EC2 Instance
description: SSH to AWS EC2 Instance.
---

# SSH to AWS EC2 Instance

## Save your .pem file 

Give proper permissions as show in `tech-support` file are too open doc.

## Click on Connect in EC2 Aws

Under SSH Client, copy the command and navigate to where you .pem file is saved on your local machine.

Execute: 

```
ssh -i "my-aws-lab.pem" ec2-user@ec2-3-85-31-95.compute-1.amazonaws.com
```

Make sure your `~/.ssh/config` file is proper as show in `ssh-config-file` doc.