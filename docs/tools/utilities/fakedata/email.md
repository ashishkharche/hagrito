---
sidebar_label: "Email"
description: "Email."
---

# Email

```js
var email = "someemail@gmail.com";

var min = 10000;
var max = 99990;
var rand = Math.floor(Math.random() * (max - min + 1)) + min;
var email_split = email.split('@');

return email_split[0]+'+data'+rand+'@'+email_split[1];
```