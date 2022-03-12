---
sidebar_label: "Nuke AWS resources services"
description: "Nuke AWS resources services."
---

# Nuke AWS resources services

## Download AWS Cli

### IAM

Go to https://console.aws.amazon.com/iam/

Check on Access key ID box.

You will need access key ID and secret key. Create an IAM user and you will get them. Copy the values.

[Prerequisites to use the AWS CLI version 2 - AWS Command Line Interface](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-quickstart.html#cli-configure-quickstart-creds)

### AWS Configure

Add values when prompted.

```
aws configure
```

## Download cloud-Nuke

### Run

Example:

```
cloud-nuke aws --older-than 24h
```

[gruntwork-io/cloud-nuke: A tool for cleaning up your cloud accounts by nuking (deleting) all resources within it](https://github.com/gruntwork-io/cloud-nuke)