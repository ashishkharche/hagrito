---
sidebar_label: "DNS Resolution"
description: "DNS Resolution."
---

# DNS Resolution

So how does DNS actually work? First, the domain name needs to get translated into your Linode’s IP address. DNS matches human-friendly domain names like _example.com_ to computer-friendly IP addresses like _192.0.2.8_. This happens in a special text file called a _zone file_, which lists domains and their corresponding IP addresses (and a [few other things](https://en.wikipedia.org/wiki/Zone_file)). A zone file is like a phone book that matches names with street addresses.

Here’s how the DNS lookup process works:

1.  You type a domain name like _example.com_ into your browser’s address bar.

2.  Your computer is connected to the internet through an internet service provider (ISP). Your ISP’s _DNS resolver_ queries a _root nameserver_ for the proper TLD nameserver. In other words, it asks the root nameserver, _Where can I find the nameserver for _.com_ domains?_

3.  The root nameserver responds with the IP address for the _.com_ nameserver.

4.  The ISP’s DNS resolver uses the IP address it got from the root nameserver to ask the _.com_ nameserver, *Where can I find the nameserver for _example.com?_

5.  The _.com_ nameserver responds with the IP address for the _example.com_ nameserver.

6.  The ISP’s DNS resolver reads the zone file from your domain’s nameserver.

7.  The zone file shows which IP address goes with the domain.

8.  Now that the ISP has the IP address for _example.com_, it (in short) returns this to your browser which then accesses the site’s web server.

![](https://www.linode.com/docs/guides/dns-records-an-introduction/1330-dnsoverview_hufa254052272092961ba87fff66194497_93477_1388x0_resize_q71_bgfafafc_catmullrom.jpg)

The scenario described above is what happens if the ISP has no current information about the requested domain. In actuality, ISPs cache a lot of DNS information after they’ve looked it up the first time. This results in faster lookups and less strain on DNS servers.

Usually caching is a good thing, but it can be a problem if you’ve recently made a change to your DNS information, like when you move to Linode from a different hosting provider. In such a case, you’ll want to pay attention to your zone file’s [time to live (TTL)](/docs/networking/dns/dns-manager-overview/#set-the-time-to-live-or-ttl) so that your DNS change happens as quickly as possible.

[DNS Records: An Introduction | Linode](https://www.linode.com/docs/guides/dns-records-an-introduction/)
