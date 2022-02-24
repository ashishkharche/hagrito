---
sidebar_label: Notes
description: Notes.
---

## VPC Flow Logs

Flow Logs are used in VPC and not on specific EC2 instance.

## Cluster endpoint for Aurora DB

The cluster endpoint or writer endpoint connects to the primary instance of the cluster.

## Reader endpoint for Aurora DB

A reader endpoint for an Aurora DB cluster provides load-balancing support for read-only connections to the DB cluster. 

## Amazon API Gateway

Support for stateful (WebSocket) and stateless (HTTP and REST) APIs.

## Amazon Kinesis Data Firehose

Kinesis Data Firehose is a streaming ETL solution. It is the easiest way to load streaming data into data stores and analytics tools. It can capture, transform, and load streaming data into Amazon S3, Amazon Redshift, Amazon OpenSearch Service, and Splunk, enabling near real-time analytics with existing business intelligence tools and dashboards you’re already using today. 

## Amazon SQS short and long polling

Amazon SQS provides short polling and long polling to receive messages from a queue. By default, queues use short polling.

With short polling, the ReceiveMessage request queries only a subset of the servers (based on a weighted random distribution) to find messages that are available to include in the response. Amazon SQS sends the response right away, even if the query found no messages.

With long polling, the ReceiveMessage request queries all of the servers for messages. Amazon SQS sends a response after it collects at least one available message, up to the maximum number of messages specified in the request. Amazon SQS sends an empty response only if the polling wait time expires.

## Amazon SQS sets a visibility timeout

Immediately after a message is received, it remains in the queue. To prevent other consumers from processing the message again, Amazon SQS sets a visibility timeout, a period of time during which Amazon SQS prevents other consumers from receiving and processing the message. The default visibility timeout for a message is 30 seconds. The minimum is 0 seconds. The maximum is 12 hours

## Access logs on the application load balancer.

Elastic Load Balancing provides access logs that capture detailed information about requests sent to your load balancer. Each log contains information such as the time the request was received, the client's IP address, latencies, request paths, and server responses. You can use these access logs to analyze traffic patterns and troubleshoot issues.

## Total subnets required

A company has a two-tier environment in its on-premises data center which is composed of an application tier and database tier. You are instructed to migrate their environment to the AWS cloud, and to design the subnets in their VPC with the following requirements:

1. There is an application load balancer that would distribute the incoming traffic among the servers in the application tier.
2. The application tier and the database tier must not be accessible from the public Internet. The application tier should only accept traffic coming from the load balancer.
3. The database tier contains very sensitive data. It must not share the same subnet with other AWS resources and its custom route table with other instances in the environment.
4. The environment must be highly available and scalable to handle a surge of incoming traffic over the Internet.

How many subnets should you create to meet the above requirements?

![](https://i.udemycdn.com/redactor/raw/2019-11-15_05-21-05-c823048b82f65f434901a13b2ecdbfce.png)

To summarize, we need to have one private subnet for the application tier and another one for the database tier. We then need to create another public subnet in the same Availability Zone where the private EC2 instances are hosted, in order to properly connect the public Internet-facing load balancer to your instances. This means that we have to use a total of 3 subnets consisting of 2 private subnets and 1 public subnet.

Answer: 6

## AWS Transit Gateway 

It is a service that enables customers to connect their Amazon Virtual Private Clouds (VPCs) and their on-premises networks to a single gateway. As you grow the number of workloads running on AWS, you need to be able to scale your networks across multiple accounts and Amazon VPCs to keep up with the growth.

## Amazon Simple Workflow (SWF)

Amazon SWF provides useful guarantees around task assignments. It ensures that a task is never duplicated and is assigned only once. Thus, even though you may have multiple workers for a particular activity type (or a number of instances of a decider), Amazon SWF will give a specific task to only one worker (or one decider instance). 

Amazon SWF helps developers design, run, and scale background jobs that have parallel or sequential steps.

## Provisioned IOPS to requested volume siz

The maximum ratio of provisioned IOPS to requested volume size (in GiB) is 50:1.

For instance, a 10 GiB volume can be provisioned with up to 500 IOPS. Any volume 640 GiB in size or greater allows provisioning up to a maximum of 32,000 IOPS (50 × 640 GiB = 32,000). Hence, the correct answer is to set the IOPS to 500 then maintain a low queue length.

## Amazon EBS

Amazon EBS can deliver performance for workloads that require the lowest-latency access to data from a single EC2 instance. You can also increase EBS storage for up to 16TB or add new volumes for additional storage.

## EBS Magnetic volumes 

They provide the lowest cost per gigabyte of all EBS volume types and are ideal for workloads where data is accessed infrequently, and applications where the lowest storage cost is important.

## AWS Batch

This is primarily used to efficiently run hundreds of thousands of batch computing jobs in AWS.

## AWS Step Functions

AWS Step Functions provides serverless orchestration for modern applications. Orchestration centrally manages a workflow by breaking it into multiple steps, adding flow logic, and tracking the inputs and outputs between the steps

## Install a CloudWatch agent in your EC2 instances

By default, CloudWatch doesn't monitor memory usage but only the CPU utilization, Network utilization, Disk performance, and Disk Reads/Writes.

This is the reason why you have to install a CloudWatch agent in your EC2 instances to collect and monitor the custom metric (memory usage), which will be used by your Auto Scaling Group as a trigger for scaling activities.

## Kinesis data stream

Amazon Kinesis Data Streams enables real-time processing of streaming big data. It provides ordering of records, as well as the ability to read and/or replay records in the same order to multiple Amazon Kinesis Applications.

## AWS does charge for the storage of any Amazon EBS volumes.

## Amazon Athena

Amazon Athena is a serverless, interactive query service to query data and analyze big data in Amazon S3 using standard SQL

## AWS X-ray

AWS X-Ray is a service that helps developers analyze and debug distributed applications. Customers use X-Ray to monitor application traces, including the performance of calls to other downstream components or services, in either cloud-hosted applications or from their own machines during development.

## Amazon S3 server access logging

Server access logging provides detailed records for the requests that are made to an Amazon S3 bucket. ... For example, access log information can be useful in security and access audits. It can also help you learn about your customer base and understand your Amazon S3 bill.

## AWS Batch

AWS Batch is a set of batch management capabilities that enables developers, scientists, and engineers to easily and efficiently run hundreds of thousands of batch computing jobs on AWS.

## Elastic network interfaces (ENI)

An elastic network interface is a logical networking component in a VPC that represents a virtual network card. It can include the following attributes: ... One or more secondary private IPv4 addresses from the IPv4 address range of your VPC. One Elastic IP address (IPv4) per private IPv4 address. One public IPv4 address.

## Elastic Network Adapter (ENA)

ENA is a custom network interface optimized to deliver high throughput and packet per second (PPS) performance, and consistently low latencies on EC2 instances. Using ENA, customers can utilize up to 20 Gbps of network bandwidth on certain EC2 instance types.

## Elastic Fabric Adapter (EFA)

Elastic Fabric Adapter (EFA) is a network interface for Amazon EC2 instances that enables customers to run applications requiring high levels of inter-node communications at scale on AWS. Its custom-built operating system (OS) bypass hardware interface enhances the performance of inter-instance communications, which is critical to scaling these applications.

## Amazon SQS

SQS does not automatically delete the messages.

Amazon Simple Queue Service (SQS) is a fully managed message queuing service that enables you to decouple and scale microservices, distributed systems, and serverless applications.

SQS is a valid messaging service, it is not suitable for scenarios where you need to process the data based on the order they were received. Take note that a default queue in SQS is just a standard queue and not a FIFO (First-In-First-Out) queue. In addition, SQS does not guarantee that no duplicates will be sent.

![](https://udemy-images.s3.amazonaws.com/redactor/raw/2020-03-09_11-14-42-e24d31f607e373f989c2829e2805b01e.png)

## Types of message queues SQS

SQS offers two types of message queues. Standard queues offer maximum throughput, best-effort ordering, and at-least-once delivery. SQS FIFO queues are designed to guarantee that messages are processed exactly once, in the exact order that they are sent.

## AWS inspector

Amazon Inspector is an automated vulnerability management service that continually scans AWS workloads for software vulnerabilities and unintended network exposure.

## CloudWatch Logs Insights

CloudWatch Logs Insights enables you to interactively search and analyze your log data in Amazon CloudWatch Logs.

## Unified CloudWatch agent 

The unified CloudWatch agent enables you to do the following: Collect internal system-level metrics from Amazon EC2 instances across operating systems. ... Collect logs from Amazon EC2 instances and on-premises servers, running either Linux or Windows Server.

## AWS System Manager agent

AWS Systems Manager Agent (SSM Agent) is Amazon software that runs on Amazon Elastic Compute Cloud (Amazon EC2) instances, edge devices, and on-premises servers and virtual machines (VMs). SSM Agent makes it possible for Systems Manager to update, manage, and configure these resources.

## Route 53 Geoproximity routing policy

Geoproximity routing lets Amazon Route 53 route traffic to your resources based on the geographic location of your users and your resources.

## Lambda@Edge

Lambda@Edge is a feature of Amazon CloudFront that lets you run code closer to users of your application, which improves performance and reduces latency.

## AWS Certificate Manager

AWS Certificate Manager (ACM) handles the complexity of creating, storing, and renewing public and private SSL/TLS X.509 certificates and keys that protect your AWS websites and applications. 

## Managing server certificates in IAM

IAM securely encrypts your private keys and stores the encrypted version in IAM SSL certificate storage.

## Rule number in security group and NACL

Rules are evaluated starting with the lowest numbered rule. As soon as a rule matches traffic, it’s applied immediately regardless of any higher-numbered rule that may contradict it.

## AWS Backup Plan

In AWS Backup, a backup plan is a policy expression that defines when and how you want to back up your AWS resources, such as Amazon DynamoDB tables or Amazon Elastic File System (Amazon EFS) file systems. You can assign resources to backup plans, and AWS Backup automatically backs up and retains backups for those resources according to the backup plan. 

## Amazon Aurora Parallel Query

Amazon Aurora Parallel Query is a feature of the Amazon Aurora database that provides faster analytical queries over your current data, without having to copy the data into a separate system. It can speed up queries by up to two orders of magnitude, while maintaining high throughput for your core transactional workload.

## AWS VPN CloudHub

AWS VPN CloudHub is only for VPNs and not for VPCs.

Building on the AWS managed VPN options described previously, you can securely communicate from one site to another using the AWS VPN CloudHub. The AWS VPN CloudHub operates on a simple hub-and-spoke model that you can use with or without a VPC. Use this approach if you have multiple branch offices and existing internet connections and would like to implement a convenient, potentially low-cost hub-and-spoke model for primary or backup connectivity between these remote offices.

## Elastic Fabric Adapter

Elastic Fabric Adapter (EFA) is a network interface for Amazon EC2 instances that enables customers to run applications requiring high levels of inter-node communications at scale on AWS. 

## SAN or subject alternative name

A SAN or subject alternative name is a structured way to indicate all of the domain names and IP addresses that are secured by the certificate. 

## Origin Access Identity (OAI)

An Origin Access Identity (OAI) is used for sharing private content via CloudFront. The OAI is a virtual user identity that will be used to give your CF distribution permission to fetch a private object from your origin server (e.g. S3 bucket).

## AWS App Mesh

AWS App Mesh makes it easy to monitor, control, and debug the communications between services. App Mesh uses Envoy, an open source service mesh proxy which is deployed alongside your microservice containers. App Mesh is integrated with AWS services for monitoring and tracing, and it works with many popular third-party tools. App Mesh can be used with microservice containers managed by Amazon ECS, Amazon EKS, AWS Fargate, Kubernetes running on AWS, and services running on Amazon EC2.

## AWS Cloud Map

AWS Cloud Map is a cloud resource discovery service. With Cloud Map, you can define custom names for your application resources, and it maintains the updated location of these dynamically changing resources. This increases your application availability because your web service always discovers the most up-to-date locations of its resources.

## AWS Mobile Hub

The new AWS Mobile Hub (Beta) simplifies the process of building, testing, and monitoring mobile applications that make use of one or more AWS services. It helps you skip the heavy lifting of integrating and configuring services by letting you add and configure features to your apps, including user authentication, data storage, backend logic, push notifications, content delivery, and analytics—all from a single, integrated console.

## AWS AppSync

AWS AppSync is a fully managed service that makes it easy to develop GraphQL APIs by handling the heavy lifting of securely connecting to data sources like AWS DynamoDB, Lambda, and more. 

## Gateway endpoint vs interface

You can use two types of VPC endpoints to access Amazon S3: _gateway endpoints_ and _interface endpoints_. A _gateway endpoint_ is a gateway that you specify in your route table to access Amazon S3 from your VPC over the AWS network. _Interface endpoints_ extend the functionality of gateway endpoints by using private IP addresses to route requests to Amazon S3 from within your VPC, on premises, or from a VPC in another AWS Region using VPC peering or AWS Transit Gateway.

<table id="w1732aac20c25c11b7">

<thead>

<tr>

<th>

Gateway endpoints for Amazon S3

</th>

<th>

Interface endpoints for Amazon S3

</th>

</tr>

</thead>

<tbody>

<tr>

<td colspan="2">

In both cases, your network traffic remains on the AWS network.

</td>

</tr>

<tr>

<td>

Use Amazon S3 public IP addresses

</td>

<td>

Use private IP addresses from your VPC to access Amazon S3

</td>

</tr>

<tr>

<td>

Does not allow access from on premises

</td>

<td>

Allow access from on premises

</td>

</tr>

<tr>

<td>

Does not allow access from another AWS Region

</td>

<td>

Allow access from a VPC in another AWS Region using VPC peering or AWS Transit Gateway

</td>

</tr>

<tr>

<td>

Not billed

</td>

<td>

Billed

</td>

</tr>

</tbody>

</table>

## NACL and security groups

![](https://k2y3h8q6.stackpathcdn.com/wp-content/uploads/2019/01/SGNCL-latest.jpg)

![](https://udemy-images.s3.amazonaws.com/redactor/raw/2020-01-11_09-55-33-102a3438068e9bb4c45fa670155c2044.png)

> Because you have to use the security group ID instead of the Network ACL ID of the application tier. Take note that the Network ACL covers the entire subnet which means that other applications that use the same subnet will also be affected.

You have to use the security group ID instead of the Network ACL ID of the application tier. Take note that the Network ACL covers the entire subnet which means that other applications that use the same subnet will also be affected.

## VPC peering connections

a VPC peering connection does not support edge to edge routing. This means that if either VPC in a peering relationship has one of the following connections, you cannot extend the peering relationship to that connection:

- A VPN connection or an AWS Direct Connect connection to a corporate network

- An Internet connection through an Internet gateway

- An Internet connection in a private subnet through a NAT device

- A gateway VPC endpoint to an AWS service; for example, an endpoint to Amazon S3.

- (IPv6) A ClassicLink connection. You can enable IPv4 communication between a linked EC2-Classic instance and instances in a VPC on the other side of a VPC peering connection. However, IPv6 is not supported in EC2-Classic, so you cannot extend this connection for IPv6 communication.

![](https://docs.aws.amazon.com/vpc/latest/peering/images/edge-to-edge-vpn-diagram.png)

For example, if VPC A and VPC B are peered, and VPC A has any of these connections, then instances in VPC B cannot use the connection to access resources on the other side of the connection. Similarly, resources on the other side of a connection cannot use the connection to access VPC B.

Hence, this means that you cannot use VPC-2 to extend the peering relationship that exists between VPC-1 and the on-premises network. For example, traffic from the corporate network can't directly access VPC-1 by using the VPN connection or the AWS Direct Connect connection to VPC-2

## VPN connection

Although the term **VPN connection** is a general term, in the Amazon VPC documentation, a VPN connection refers to the connection between your VPC and your own network. AWS supports Internet Protocol security (IPsec) VPN connections.

A **customer gateway** is a physical device or software application on your side of the VPN connection.

To create a VPN connection, you must create a customer gateway resource in AWS, which provides information to AWS about your customer gateway device. Next, you have to set up an Internet-routable IP address (static) of the customer gateway's external interface.

The following diagram illustrates single VPN connections. The VPC has an attached virtual private gateway, and your remote network includes a customer gateway, which you must configure to enable the VPN connection. You set up the routing so that any traffic from the VPC bound for your network is routed to the virtual private gateway.

![](https://udemy-images.s3.amazonaws.com/redactor/raw/2018-10-27_22-45-01-dbcb3de60063eaba73e8d2d12c61d6dc.png)

## Instances in VPC communicate with our network

By default, instances that you launch into a virtual private cloud (VPC) can't communicate with your own network. You can enable access to your network from your VPC by attaching a virtual private gateway to the VPC, creating a custom route table, updating your security group rules, and creating an AWS managed VPN connection.

## AWS Config

AWS Config is a service that enables you to assess, audit, and evaluate the configurations of your AWS resources. Config continuously monitors and records your AWS resource configurations and allows you to automate the evaluation of recorded configurations against desired configurations. 

## VPC endpoint

A VPC endpoint enables you to privately connect your VPC to supported AWS services and VPC endpoint services powered by AWS PrivateLink without requiring an internet gateway, NAT device, VPN connection, or AWS Direct Connect connection. Instances in your VPC do not require public IP addresses to communicate with resources in the service. Traffic between your VPC and the other service does not leave the Amazon network.

## Route 53 active-passive failover

Use an active-passive failover configuration when you want a primary resource or group of resources to be available majority of the time and you want a secondary resource or group of resources to be on standby in case all the primary resources become unavailable.

## Auto Scaling Cooldown period

In Auto Scaling, the following statements are correct regarding the cooldown period:

1.  It ensures that the Auto Scaling group does not launch or terminate additional EC2 instances before the previous scaling activity takes effect.
2.  Its default value is 300 seconds.
3.  It is a configurable setting for your Auto Scaling group

## Alias A and AAAA

To route domain traffic to an ELB load balancer, use Amazon Route 53 to create an alias record that points to your load balancer. An alias record is a Route 53 extension to DNS. It's similar to a CNAME record, but you can create an alias record both for the root domain, such as tutorialsdojo.com, and for subdomains, such as portal.tutorialsdojo.com. (You can create CNAME records only for subdomains.) To enable IPv6 resolution, you would need to create a second resource record, tutorialsdojo.com ALIAS AAAA -> myelb.us-west-2.elb.amazonnaws.com, this is assuming your Elastic Load Balancer has IPv6 support.

You only use Non-Alias with a type “A” record set for IP addresses.

You can't create a CNAME record at the zone apex. For example, if you register the DNS name tutorialsdojo.com, the zone apex is tutorialsdojo.com.

## Subnet

Every subnet that you create is automatically associated with the main route table for the VPC.

A subnet is a range of IP addresses in your VPC. You can launch AWS resources into a specified subnet. When you create a VPC, you must specify a range of IPv4 addresses for the VPC in the form of a CIDR block. Each subnet must reside entirely within one Availability Zone and cannot span zones. You can also optionally assign an IPv6 CIDR block to your VPC, and assign IPv6 CIDR blocks to your subnets.

Your VPC has an implicit router and you use route tables to control where network traffic is directed. Each subnet in your VPC must be associated with a route table, which controls the routing for the subnet (subnet route table). You can explicitly associate a subnet with a particular route table. Otherwise, the subnet is implicitly associated with the main route table.

A subnet can only be associated with one route table at a time, but you can associate multiple subnets with the same subnet route table. You can optionally associate a route table with an internet gateway or a virtual private gateway (gateway route table). This enables you to specify routing rules for inbound traffic that enters your VPC through the gateway

Be sure that the subnet route table also has a route entry to the internet gateway. If this entry doesn’t exist, the instance is in a private subnet and is inaccessible from the internet.

## AWS Resource Access Manager (RAM)

AWS Resource Access Manager (RAM) is a service that enables you to easily and securely share AWS resources with any AWS account or within your AWS Organization.

## Multi-AZ and Read Replicas

![](https://udemy-images.s3.amazonaws.com/redactor/raw/2019-06-07_10-00-40-e7c750751ea701ec7b91cbeeb464f364.png)

## Aurora Serverless

Aurora Serverless provides a relatively simple, cost-effective option for infrequent, intermittent, sporadic or unpredictable workloads.

## NAT Gateway 

A NAT Gateway is a highly available, managed Network Address Translation (NAT) service for your resources in a private subnet to access the Internet. 