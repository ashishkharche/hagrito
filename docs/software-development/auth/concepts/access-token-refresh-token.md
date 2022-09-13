---
sidebar_label: "Access Token and Refresh Token"
description: "Access Token and Refresh Token."
---

# Access Token and Refresh Token


## How do I handle JWT token expiration?


In short, you need to use **REFRESH\_TOKEN** when **ACCESS\_TOKEN** expires to get a new ACCESS\_TOKEN.

JWT has two kind of tokens: ACCESS\_TOKEN and REFRESH\_TOKEN.

**ACCESS\_TOKEN:** When a user logins in, the authorization server issues an access token, which is an artifact that client applications can use to make secure calls to an API server.

**REFRESH\_TOKEN:** ACCESS\_TOKEN has short lifespan. So when ACCESS\_TOKEN expires REFRESH\_TOKEN is used to get a new ACCESS\_TOKEN.

So in summary when authorization is successful you need to issue two token ACCESS\_TOKEN and REFRESH\_TOKEN. When ACCESS\_TOKEN expires you need to call another api with REFRESH\_TOKEN to get new ACCESS\_TOKEN.

The client application can get a new access token as long as the refresh token is valid and unexpired. Consequently, a refresh token that has a very long lifespan could theoretically give infinite power to the token bearer to get a new access token to access protected resources anytime. So you need to set a policy for how long you want to give ACCESS\_TOKEN for a given REFRESH\_TOKEN.


## References

[spring boot - How do I handle JWT token expiration? - Stack Overflow](https://stackoverflow.com/questions/70060722/how-do-i-handle-jwt-token-expiration)
