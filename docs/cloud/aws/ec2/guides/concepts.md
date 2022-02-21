---
sidebar_label: Concepts
description: Concepts for learning EC2.
---

# EC2 - Concepts

## Vertically scaling an instance

EC2 instances are resizable. You might start with a small instance, realize the application you are running is starting to max out that server, and then you can give that instance more memory and more CPU. Which is what we call vertically scaling an instance. 

[AWS Skill Builder](https://explore.skillbuilder.aws/learn/course/134/play/484/aws-cloud-practitioner-essentials;lp=82)

## How EC2 runs and what's multitenancy?

EC2 runs on top of physical host machines managed by AWS using virtualization technology. When you spin up an EC2 instance, you aren't necessarily taking an entire host to yourself. Instead, you are sharing the host with multiple other instances, otherwise known as virtual machines. And a hypervisor running on the host machine is responsible for sharing the underlying physical resources between the virtual machines. This idea of sharing underlying hardware is called multitenancy. 

The hypervisor is responsible for coordinating this multitenancy and it is managed by AWS. The hypervisor is responsible for isolating the virtual machines from each other as they share resources from the host. This means EC2 instances are secure. Even though they may be sharing resources, one EC2 instance is not aware of any other EC2 instances also on that host. They are secure and separate from each other. 

[AWS Skill Builder](https://explore.skillbuilder.aws/learn/course/134/play/484/aws-cloud-practitioner-essentials;lp=82)