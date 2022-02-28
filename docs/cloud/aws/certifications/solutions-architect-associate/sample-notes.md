---
sidebar_label: Sample Notes
description: Sample Notes.
---

# Sample Notes

## Allow traffic to be quickly directed to a standby instance if the application fails

Attach a secondary elastic network interface (ENI) to the instance configured with the private IP address.
Move the ENI to the standby instance if the primary instance becomes unreachable

## instances store data in instance memory (RAM) that must be present when the instances resume operation.

Run the applications on instances enabled for hibernation. Hibernate the instances before the shutdown.

## Reduce empty responses

Increase the receive message wait time for the queue.

## If instance fails, Load Balancer

The load balancer will stop sending requests to the failed instance.
