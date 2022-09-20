---
sidebar_label: "Delete a field from a collection MongoDB"
description: "Delete a field from a collection MongoDB."
---

# Delete a field from a collection MongoDB

<!-- Where vtxes is collection name -->

```
db.vtxes.updateMany(
  {},
  { $unset: {'emotions':1}},
  false, true
)
```

Ref: [How to Remove a Field from a MongoDB Document ($unset)](https://database.guide/how-to-remove-a-field-from-a-mongodb-document-unset/#:~:text=In%20MongoDB%2C%20you%20can%20use,its%20value%20from%20the%20document.)

```
db.dogs.updateMany(
   { },
   { $unset: { type: "" } }
)
```