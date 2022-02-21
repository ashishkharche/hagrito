---
sidebar_label: QA
description: QA.
---

# QA

## How to allow instances from Private Subnets to connect to services outside our VPC (using the Internet), but external services cannot initiate a connection with our instances?

NAT Gateways or NAT instances

NAT Gateways is recommended.

![](https://miro.medium.com/max/1094/1*AMzgSZRGDzc6rF-nKqT5IQ.png)

## How route table helps in connecting to the interet?

A route table contains a set of rules (routes) used to determine where to redirect the network traffic from your subnet. Each subnet must be associated with a route table, which specifies the allowed routes for outbound traffic leaving the subnet.

When you associate a CIDR block with your VPC, a route is automatically added to your VPC route tables to enable routing within the VPC. If you want to connect with the Internet, you need a route from your subnet to the Internet Gateway, the final step.

![](https://miro.medium.com/max/839/1*9Nf4pf34yLiOXyiwBCfCDw.png)

The previous example shows how to route the IPv4 traffic (0.0.0.0/0) to our Internet Gateway (“igw-12345…”).

![](https://miro.medium.com/max/1094/1*JP8pRwiDukgGupj7hRdlug.png)

## What enables communication between VPC and Internet?

An Internet Gateway enables communication between the VPC and the Internet. It helps your VPC instances connect with the Internet. It must be created separately from the VPC, then attached. 1 VPC is going to be associated with just 1 Internet Gateway.

![](https://miro.medium.com/max/1094/1*JrbeKsswtHHh67mHpVRK9A.png)

## What's the minimum block size when creating a subnet?

When creating the subnet, you specify the IPv4 CIDR block, with an allowed block size between /16 and /28 netmasks. Why does this rule apply? AWS reserves 5 IPs for each subnet; that’s why the minimum is /28. 

```
- 10.0.0.0 --> Network address. 
- 10.0.0.1 --> Reserved by AWS for the VPC router.
- 10.0.0.2 --> Reserved by AWS for mapping to the Amazon DNS.
- 10.0.0.3 --> Reserved by AWS for future use.
- 10.0.0.255 --> Network broadcast address.
```

[Networking for the AWS Solutions Architect Exam | AWS in Plain English](https://aws.plainenglish.io/aws-networking-for-the-aws-solutions-architect-associate-certification-ae657b4dabb3#9dde)