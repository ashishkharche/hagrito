---
sidebar_label: Whizlabs Notes
description: Whizlabs Notes.
---

# Whizlabs Notes

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