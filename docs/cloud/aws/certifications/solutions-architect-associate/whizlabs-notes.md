---
sidebar_label: Whizlabs Notes
description: Whizlabs Notes.
---

# Whizlabs Notes

## The public IP addresses have changed after the instance was stopped and started again.

By default, the public IP address of an EC2 Instance is released after the instance is stopped and started. Hence, the earlier IP address which was mapped to the domain names would have become invalid now.

This only applies to IPv4 public addresses. IPv6 public address isn't disassociated after an instance is stopped.

## Migrate master account from one Organization to another

Delete Organization A and invite the master account to join Organization B.

## Subnet and Availability Zone

Each subnet must reside entirely within one Availability Zone and cannot span zones

## ELB

ELBs can manage traffic within a region, not between regions.

## Passing user data to the EC2 instance

When you launch an instance in Amazon EC2, you have the option of passing user data to the instance that can be used to perform common automated configuration tasks and even run scripts after the instance starts.

## AWS OpsWorks Stacks

AWS OpsWorks Stacks lets you manage applications and servers on AWS and on-premises. With OpsWorks Stacks, you can model your application as a stack containing different layers, such as load balancing, database, and application server. You can deploy and configure Amazon EC2 instances in each layer or connect other resources such as Amazon RDS databases. 

## Simple AD

Simple AD is a Microsoft Active Directory–compatible directory from AWS Directory Service. You can use Simple AD as a standalone directory in the cloud to support Windows workloads that need basic AD features or compatible AWS applications. It can also be used to support Linux workloads that need LDAP service.

## AWS Serverless Application Model (AWS SAM)

The AWS Serverless Application Model (AWS SAM) is an open-source framework that you can use to build serverless applications in AWS. It provides you with a simple and clean syntax to describe the functions, APIs, permissions, configurations, and events that make up a serverless application.

## AWS Migration Hub

AWS Migration Hub is used to track the progress of migrations in AWS.

## DataSync 

DataSync is a service mainly used to migrate NFS servers to S3, EFS, Fsx, etc. It does not support database migrations

## Default network ACL

The default network ACL is configured to allow all traffic to flow in and out of the subnets to which it is associated.

## SQS main usecase

Even though SQS guarantees the order of messages for FIFO queues, the main reason for using it is that it helps in horizontal scaling of AWS resources and is used for decoupling systems. 

## EC2 Hibernate

To pre-warm EC2 instance, EC2 Hibernate can be used. The instance needs to be launched with an Amazon EBS root volume. Besides, you cannot hibernate an instance in an Auto Scaling group or used by Amazon ECS.

*   **Options A & D are incorrect** as EC2 hibernate is not supported if the EC2 instance is in an Auto-Scaling group.
*   **Option B is incorrect** as EC2 hibernate is not supported on Instance store volume. An EBS root volume is required.

## EFS vs Fx for Lustre

EFS is a shared storage for Linux instances. But it does not read data from S3, and it is not a high-performance storage.

FSx for Lustre is a high-performance storage. It can read data from S3 and connect to multiple instances at the same time.

## Move objects from Glacier Deep Archive to different storage classes

To move objects from Glacier Deep Archive to different storage classes, first need to restore to original locations using Amazon S3 console & then use lifecycle policy to move objects to required S3 Intelligent-Tiering storage class.

## Improve the write performance

SQS Queues can be used to cache the pending database writes so that the database can handle the load properly.

## 403 access denied

VPC endpoint might have a restrictive policy and does not contain the new S3 bucket.

## Amazon SQS

When a consumer receives and processes a message from a queue, the message remains in the queue. Amazon SQS doesn't automatically delete the message. Because Amazon SQS is a distributed system, there's no guarantee that the consumer actually receives the message (for example, due to a connectivity issue, or due to an issue inthe consumer application). Thus, the consumer must delete the message from the queue after receiving and processing it.


## Amazon SES

Amazon SES is an email platform that provides an easy, cost-effective way for youtosend and receive email using your own email addresses and domains.

AWS SES is in sandbox mode by default which can send emails only to verified email addresses.

## A route with the target as local cannot be deleted.

## How many VPCs can an Internet Gateway be attached to at any given time?

At any given time, an Internet Gateway can be attached to only one VPC. It can be detached from the VPC and be used for another VPC.

## AssumeRoleWithSAML

Returns a set of temporary security credentials for users who have been authenticated via a SAML authentication response. This operation provides a mechanism for tying an enterprise identity store or directory to role-based AWS access without user-specific credentials or configuration.

## Allow performing any tasks during launch of instance

Use Instance user data for shell scripts

Use AutoScaling Group lifecycle hooks and trigger AWS Lambda function through CloudWatch events

## DB parameter groups

Database parameters specify how the database is configured. For example, database parameters can specify the amount of resources, such as memory, to allocate to a database.

## VPC notes

A network ACL can be associated with multiple subnets.

Subnet’s IP CIDR block can be same as the VPC CIDR block

A subnet can have only one route table associated with it

## AWS CloudFront origins

AWS Lambda is not supported directly as the CloudFront origin. However, Lambda can be invoked through API Gateway which can be set as the
origin for AWS CloudFront. Read more here:

## EBS volume for root encryption

When launching an EC2 instance, the EBS volume for root cannot be encrypted.

Launch an unencrypted EC2 instance and create a snapshot of the root volume. Make a copy of the snapshot with the encryption option selected and CreateImage
using the encrypted snapshot. Use this image to launch EC2 instances.

## Lustre file system

The Lustre file system is an open-source, parallel file system that can be used for HPC applications. Refer to http://lustre.org/ for its introduction. In Amazon FSx, users can quickly launch a Lustre file system at a low cost.

## AWS Global accelerator

AWS Global accelerator provides static IP addresses that are anycast in the AWS edge network. Incoming traffic is distributed across endpoints in AWS regions. The
performance and availability of the application are improved.

## VPC Gateway Endpoint

It is mostly used for S3 and DynamoDB access from Instances in the private subnet.

## VPC Interface Endpoint

You can use an interface VPC endpoint to keep traffic between your Amazon VPC and Kinesis Data Streams from leaving the Amazon network. Interface VPC endpoints don't require an internet gateway,

## Permission sets 

Permission sets can control the time duration for user login to the AWS Console by setting session duration. The Default Session duration is 1 hour, while the maximum can be set to 12 hours.

AWS Single Sign-On (SSO) enables you to customize the session duration to AWS accounts ranging from 1 hour up to 12 hours.

## Amazon Kinesis Data Firehose

Amazon Kinesis Data Firehose cannot directly send data logs to Amazon Redshift but needs to first store in the Amazon S3 bucket & then it copies data to Amazon Redshift.

## Deny in Security Groups

By default, nothing is allowed, and in the Security group, we can’t specify what is denied. We don’t have any deny option in Security Groups.

## EBS Volume snapshot

You cannot directly create a snapshot in another region.

## Storage type for the underlying EC2 Instance

![](https://s3.amazonaws.com/media.whizlabs.com/learn/2020/04/17/ckeditor_ebs_throughput.png)

## Multi-AZ deployment

In a Multi-AZ deployment, Amazon RDS automatically provisions and maintains a synchronous standby replica in a different Availability Zone. The primary DB instance is synchronously replicated across Availability Zones to a standby replica to provide data redundancy, eliminate I/O freezes, and minimize latency spikes during system backups. Running a DB instance with high availability can enhance availability during planned system maintenance and help protect your databases against DB instance failure and Availability Zone disruption.

**Points to remember for Multi-AZ deployments:**

*   No failover occurs for DB operations: long-running queries, deadlocks, or database corruption errors.

## S3 server access log to a centralized Audit AWS Account

Collect all S3 buckets server access logs in one S3 bucket per account. Enable replication in the S3 server access log buckets to copy the logs to a centralized destination S3 bucket in the Audit account.

## VPC Flow Logs

VPC Flow Logs is a feature that enables you to capture information about the IP traffic going to and from network interfaces in your VPC. Flow log data can be published to Amazon CloudWatch Logs and Amazon S3.

## DeleteOnTermination EBS Volumes

When an instance is terminated, Amazon Elastic Compute Cloud (Amazon EC2) uses the value of the DeleteOnTermination attribute for each root EBS volume to determine whether to preserve or delete the volume when the instance is terminated. By default, the DeleteOnTermination attribute for an instance's root volume is set to true, but it is set to false for all other volume types.

## Rack server

Rack server is a computer dedicated to use as a server and designed to be installed in a framework called a rack. Each rack has its own network and power source.

## General Purpose Performance Mode

We recommend the General Purpose performance mode for the majority of your Amazon EFS file systems. General Purpose is ideal for latency-sensitive use cases, like web serving environments, content management systems, home directories, and general file serving. If you don't choose a performance mode when you create your file system, Amazon EFS selects the General Purpose mode for you by default.

## Scheduled Scaling policy

Scheduled Scaling can be used to ensure that the capacity is peaked before 9:00 AM every day.

Scaling based on a schedule allows you to scale your application in response to predictable load changes. For example, every week the traffic to your web application starts to increase on Wednesday, remains high on Thursday, and starts to decrease on Friday. You can plan your scaling activities based on the predictable traffic patterns of your web application

## Cross-account IAM roles

Cross-account IAM roles allow customers to securely grant access to AWS resources in their account to a third party, like an APN Partner, while retaining the ability to control and audit who is accessing their AWS account. Cross-account roles reduce the amount of sensitive information APN Partners need to store for their customers so that they can focus on their product instead of managing keys.

## Database credentials in AWS Secrets Manager

Secrets Manager supports many types of secrets. However, Secrets Manager can natively rotate credentials for supported AWS databases without any additional programming. However, rotating the secrets for other databases or services requires creating a custom Lambda function to define how Secrets Manager interacts with the database or service.

## AWS Data Pipeline

AWS Data Pipeline is a web service that you can use to automate the movement and transformation of data. With AWS Data Pipeline, you can define data-driven workflows, so that tasks can be dependent on the successful completion of previous tasks. You define the parameters of your data transformations and AWS Data Pipeline enforces the logic that you've set up.

## AWS Fargate with Amazon EKS

Amazon EKS integrates Kubernetes with AWS Fargate by using controllers that are built by AWS using the upstream, extensible model provided by Kubernetes. These controllers run as part of the Amazon EKS managed Kubernetes control plane and are responsible for scheduling native Kubernetes pods onto Fargate.

## Cached Volumes vs Stored Volumes

Cached volumes offer substantial cost savings on primary storage and minimize the need to scale your storage on-premises. You also retain low-latency access to your **frequently** accessed data.

Stored volumes provide your on-premises applications with low-latency access to their **entire** datasets. At the same time, they provide durable, offsite **backups**. With stored volumes, 

## Elastic Beanstalk 

AWS Elastic Beanstalk is an easy-to-use service for deploying and scaling web applications and services developed with Java, . NET, PHP, Node. js, Python, Ruby, Go, and Docker on familiar servers such as Apache, Nginx, Passenger, and IIS.

### S3 vs C vs KMS

**SSE-S3** requires that Amazon S3 manage the data and master encryption keys.  
**SSE-C** requires that you manage the encryption key.

**SSE-KMS** requires that AWS manage the data key, but you manage the master key in AWS KMS.

## S3 server-side encryption with Customer keys

**Server-side encryption is about protecting data at rest**. Using server-side encryption with customer-provided encryption keys (SSE-C) allows you to set your own encryption keys. With the encryption key you provide as part of your request, Amazon S3 manages both the encryption, as it writes to disks, and decryption, when you access your objects. Therefore, you don't need to maintain any code to perform data encryption and decryption. The only thing you do is manage the encryption keys you provide.

## DynamoDB partition keys

DynamoDB is optimized for uniform distribution of items across a table's partitions, no matter how many partitions there may be. We recommend that you choose a partition key that can have a large number of distinct values relative to the number of items in the table.

## Amazon Kinesis Firehose

Amazon Kinesis Firehose is a scalable option to load data to analytical tools like Amazon Redshift from multiple sources. Amazon Redshift can be used for complex analytical queries for large amounts of data. 

## Glacier Select

With Glacier Select, you can perform filtering directly against a Glacier object using standard SQL statements.

## S3 presigned URLs 

When you create a presigned URL for your object, you must provide your security credentials, specify a bucket name, an object key, specify the HTTP method (GET to download the object) and expiration date and time. The presigned URLs are valid only for the specified duration.

## DynamoDB Stream

A DynamoDB Stream is an ordered flow of information about changes to items in an Amazon DynamoDB table. When you enable a stream on a table, DynamoDB captures information about every modification to data items in the table.

## Amazon Route 53

Amazon Route 53 is a highly available and scalable Domain Name System (DNS) web service. You can use Route 53 to perform three main functions in any combination: domain registration, DNS routing, and health checking.

## Amazon EMR

Amazon EMR is a managed cluster platform that simplifies running big data frameworks, such as Apache Hadoop and Apache Spark, on AWS to process and analyze vast amounts of data. 

## Lambda function can interact with the DynamoDB table

Each Lambda function has an IAM role (execution role) associated with it. You specify the IAM role when you create your Lambda function. Permissions you grant to this role determine what AWS Lambda can do when it assumes the role. 

## VPC endpoint

VPC gateway endpoint supports S3 and DynamoDB. Using the VPC endpoint, communication will not go over the internet, and it will use AWS private network. A VPC endpoint does not require an IGW, NAT device. Instances in the VPC do not require public IP addresses to communicate with resources in the service. Traffic between VPC and the other service stays in the Amazon network.

## Enable encryption for an RDS DB instance 

You can enable encryption for an RDS DB instance when you create it, but not after it's created. However, you can add encryption to an unencrypted DB instance by creating a snapshot of your DB instance and then creating an encrypted copy of that snapshot. You can then restore a DB instance from the encrypted snapshot to get an encrypted copy of your original DB instance.

## EC2 saving plan

With an EC2 saving plan, you can save up to 72%. This plan applies to all of your EC2 instances using the same instance family. It also offers the flexibility of changing sizes of EC2 instances.

## CloudFront Viewer protocol policy

Choose the protocol policy that you want viewers to use to access your content in CloudFront edge locations:

*   **HTTP and HTTPS**: Viewers can use both protocols.

*   **Redirect HTTP to HTTPS**: Viewers can use both protocols, but HTTP requests are automatically redirected to HTTPS requests.

*   **HTTPS Only**: Viewers can only access your content if they're using HTTPS.

## Resource Access Manager

You can share the resource with AWS accounts of another Organization in RAM.

## Internet Gateway

An Internet Gateway is a horizontally scaled, redundant, and highly available VPC component that allows communication between instances in your VPC and the Internet. It, therefore, imposes no availability risks or bandwidth constraints on your network traffic.

## Amazon Kinesis

Amazon Kinesis makes it easy to collect, process, and analyze real-time, streaming data so you can get timely insights and react quickly to new information.

## Multivalue answer routing policy

If you want to route traffic randomly to multiple resources such as web servers, you can create one multivalue answer record for each resource and, optionally, associate an Amazon Route 53 health check with each record.

## Spread Placement Groups

Spread Placement Groups place the instances in different racks. Every rack has its own hardware and power source. So, there is a minimum chance of simultaneous failure. 

## Amazon S3 event notification

You can use the Amazon S3 Event Notifications feature to receive notifications when certain events happen in your S3 bucket.

You can use an Event Notification from the S3 bucket to invoke the Lambda function whenever a file is uploaded.

## Create CloudWatch Alarms That Stop, Terminate, Reboot, or Recover an Instance 

Using Amazon CloudWatch alarm actions, you can create alarms that automatically stop, terminate, reboot, or recover your instances. You can use the stop or terminate actions to save money when you no longer need an instance. 

## Restrict access to your REST APIs

Use a VPC Interface Endpoint to restrict access to your REST APIs to traffic that arrives via the VPC Endpoint.

## REST APIs private

You can make your REST APIs private by using the aws:SourceVpce condition in your API Gateway resource policy to restrict access to only your VPC Endpoint.

## API Gateway has exceeded the steady-state request rate and burst limits.

When your API Gateway request volume reaches the steady-state request rate and bursting limit, API Gateway throttles your requests to protect your back-end services. When these requests are throttled, API Gateway returns a 429 error response (too many requests).

## Lambda function has exceeded the concurrency limit

When your traffic spikes, your Lambda function can exceed the limit set on the number of concurrent instances that can be run (burst concurrency limit in the US: 3,000).

## S3 Standard tiering

S3 Intelligent-Tiering gives you the ability to have S3 monitor the access patterns of your objects and move objects across the various storage tiers based on the relevant access patterns. This will give you both cost and performance optimization. Also, smaller files (less than 128 KB) can be stored in S3 Intelligent-Tiering but they will always remain in the S3 Standard storage class.

## CloudFront Signed Cookies

CloudFront Signed Cookies allow you to control access to multiple content files and you don’t have to change your URL for each customer access.

## Encryption algorithms of VPN IPSec tunnels

Encryption algorithms of VPN IPSec tunnels can be configured by users such as AES128 and AES256

![](https://s3.amazonaws.com/media.whizlabs.com/learn/vpc-5.1.png)

## Control traffic in and out of the Transit Gateway

Inbound and outbound NACL rules applied in the subnets can act as a firewall and control traffic in and out of the Transit Gateway.

## Cross-zone load balancing

When cross-zone load balancing is enabled, each load balancer node distributes traffic across the registered targets in all enabled Availability Zones.

## Amazon Redshift Enhanced VPC Routing

Amazon Redshift Enhanced VPC Routing provides VPC resources access to Redshift.

Redshift will not be able to access the S3 VPC endpoints without enabling Enhanced VPC routing

## Default Termination Policy

![](https://s3.amazonaws.com/media.whizlabs.com/learn/2019/01/22/questions_8z3hm1.png)

## Crawler in AWS Glue

You can use a crawler to populate the AWS Glue Data Catalog with tables. This is the primary method used by most AWS Glue users. A crawler can crawl multiple data stores in a single run. Upon completion, the crawler creates or updates one or more tables in your Data Catalog. The AWS Glue Data Catalog can then be used to guide ETL operations.

![](https://s3.amazonaws.com/media.whizlabs.com/learn/CSAA-latest-19.PNG)

## Cluster Placement groups

A cluster placement group is appropriate for this use case because of a higher per-flow throughput limit of up to 10 Gbps except for the traffic over an AWS Direct Connect connection to on-premises resources.

You can migrate an instance from one placement group to another but cannot merge placement groups.

## Amazon FSx for Windows File Server

Amazon FSx for Windows File Server allows to access file systems from multiple Amazon Virtual Private Clouds (VPCs), AWS accounts, and AWS Regions via VPC Peering or AWS Transit Gateway.

Amazon FSx for Windows File Server offers single-AZ and multi-AZ deployment options with SSD and HDD storage options.