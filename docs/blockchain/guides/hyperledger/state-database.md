---
sidebar_label: State Database
description: State Database define.
---

# State Database

The state database is essentially a key value based datastore(an instance of Apache CouchDB). The state database contains the final state of the ledger after applying all transactions recorded in blockchain. It is therefore like a cache. It helps make querying the blockchain faster, as the state is pre-calculated. It also gives developers an easier programming model to work with. Developers writing chaincode do not need to write transactions directly on blockchain, but rather, write to state in state database (the required transactions are generated under the hood).

[Network Concepts - Become a Blockchain Developer](https://www.educative.io/courses/hands-on-blockchain-hyperledger-fabric/YVQj9jxq7QO)