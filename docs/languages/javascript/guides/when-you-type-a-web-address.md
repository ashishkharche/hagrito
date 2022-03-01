---
sidebar_label: When you type a web address
description: When you type a web address.
---

# When you type a web address

## Overview

When you type a web address into your browser:

1. The browser goes to the DNS server, and finds the real address of the server that the website lives on

2. The browser sends an HTTP request message to the server, asking it to send a copy of the website to the client. This message, and all other data sent between the client and the server, is sent across your internet connection using TCP/IP.

3. If the server approves the client's request, the server sends the client a "200 OK" message, which means "Of course you can look at that website! Here it is", and then starts sending the website's files to the browser as a series of small chunks called data packets.

4. The browser assembles the small chunks into a complete web page and displays it to you