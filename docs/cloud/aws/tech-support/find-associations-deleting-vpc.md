---
sidebar_label: "Find associations when deleting VPC"
description: "Find associations when deleting VPC."
---

# Find associations when deleting VPC

Note: Change the VPC and region variables

Or with GUI, just go to services and check the details tab. Notice what services are owned or are associated and delete them.

```bash
#!/bin/bash
vpc="vpc-039a1db583a820aca" 
region="us-east-1"
aws ec2 describe-vpc-peering-connections --region $region --filters 'Name=requester-vpc-info.vpc-id,Values='$vpc | grep VpcPeeringConnectionId
aws ec2 describe-nat-gateways --region $region --filter 'Name=vpc-id,Values='$vpc | grep NatGatewayId
aws ec2 describe-instances --region $region --filters 'Name=vpc-id,Values='$vpc | grep InstanceId
aws ec2 describe-vpn-gateways --region $region --filters 'Name=attachment.vpc-id,Values='$vpc | grep VpnGatewayId
aws ec2 describe-network-interfaces --region $region --filters 'Name=vpc-id,Values='$vpc | grep NetworkInterfaceId
```

In case, ELB refuses to delete because of deletion protection, do "Edit Attributes" and disable the delete protection.