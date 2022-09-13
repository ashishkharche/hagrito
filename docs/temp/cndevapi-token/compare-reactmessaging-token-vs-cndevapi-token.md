---
sidebar_label: "Compare token"
description: "Compare token."
---

# Compare token

## React Messaging token

When remember is on:

```
actions.js:139 XXXAR: checkAuthenticated success: response.data.code undefined
actions.js:147 XXXAR: Inside Catch: VERIFY TOKEN
actions.js:93 XXXAR: refresh token eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY2NDg4NTgyOSwianRpIjoiYzdhN2Y4ZjdlOGJjNGUyNTk2NWZiMzA0YjZiMjY3ODciLCJ1c2VyX2lkIjoxM30.KDOCspbR6Ova8HTDfRGcz2kc64Z6iNYwe0p_XTpXXRw
actions.js:105 XXXAR: refresh token response status 200
actions.js:107 XXXAR: refresh token success: response.data.access eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjYyMjkzODM5LCJqdGkiOiIzNWYxZDczYmNiY2E0MzdkODFjOWI1ZDM0MTIxZGFiZSIsInVzZXJfaWQiOjEzfQ.teDp_z8zD84vnZBqtahNm6QZ-ITFYNRLrcC9kC4ARao
actions.js:139 XXXAR: checkAuthenticated success: response.data.code undefined
```


## CN Dev API token

```
XXXAR: checkAuthenticated success: response.data.code undefined
actions.js:153 XXXAR: Inside Catch: VERIFY TOKEN
actions.js:99 XXXAR: refresh token eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY2NDg4NjA2MSwianRpIjoiMGI1MjNiNGU4NDZmNGRkNzg5OTkzMTFmMjE0NjZlZTUiLCJ1c2VyX2lkIjoxMn0.zyoel9Gvr2Ufo87cn1Jq__akFlCsTlNORYBbB8I-tDE
actions.js:111 XXXAR: refresh token response status 200
actions.js:113 XXXAR: refresh token success: response.data.access eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjYyMjk0MDgzLCJqdGkiOiJmNDdiOGUxMTI0ODY0NmE2OWNmZGEwZWQ5ODIxZGRhOSIsInVzZXJfaWQiOjEyfQ.0p4rFJZQgLKNlKf0_cQ4UsoX37yfXHZts3vZXS-idRA
actions.js:145 XXXAR: checkAuthenticated success: response.data.code undefined
```