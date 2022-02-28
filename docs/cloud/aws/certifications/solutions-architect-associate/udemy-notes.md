---
sidebar_label: Udemy Notes
description: Udemy Notes.
---

# Udemy Notes

## GuardDuty

GuardDuty analyzes tens of billions of events across multiple AWS data sources, such as AWS CloudTrail events, Amazon VPC Flow Logs, and DNS logs.

## Service Control Policy

Service control policies (SCPs) are a type of organization policy that you can use to manage permissions in your organization. SCPs offer central control over the maximum available permissions for all accounts in your organization. SCPs help you to ensure your accounts stay within your organization’s access control guidelines.

## Standard SQS queue

Only Standard SQS queue is allowed as an Amazon S3 event notification destination, whereas FIFO SQS queue is not allowed

## Amazon Redshift Spectrum

Using Amazon Redshift Spectrum, you can efficiently query and retrieve structured and semistructured data from files in Amazon S3 without having to load the data into Amazon Redshift tables.

## IAM database authentication

IAM database authentication works with MySQL, MariaDB and PostgreSQL.

## Multi-AZ

Multi-AZ is the best option when data retention, minimal downtime, and application performance are a priority.

Opt for Multi-AZ configuration with automatic failover functionality to help mitigate failure

## Enable API Gateway Caching

You can enable API caching in Amazon API Gateway to cache your endpoint's responses. With caching, you can reduce the number of calls made to your endpoint and also improve the latency of requests to your API. When you enable caching for a stage, API Gateway caches responses from your endpoint for a specified time-to-live (TTL) period, in seconds.

## CloudFront 

CloudFront can route to multiple origins based on the content type

Use an origin group with primary and secondary origins to configure CloudFront for high availability and failover

Use field level encryption in CloudFront to protect sensitive data for specific content

## The TTL is still in effect

TTL (time to live), is the amount of time, in seconds, that you want DNS recursive resolvers to cache information about a record. If you specify a longer value (for example, 172800 seconds, or two days), you reduce the number of calls that DNS recursive resolvers must make to Route 53 to get the latest information for the record. This has the effect of reducing latency and reducing your bill for Route 53 service