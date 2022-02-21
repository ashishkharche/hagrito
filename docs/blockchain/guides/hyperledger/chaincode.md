---
sidebar_label: Chaincode
description: Chaincode define.
---

# Chaincode

A chaincode typically handles business logic agreed to by members of the network, so it may be considered as a “smart contract”. State created by a chaincode is scoped exclusively to that chaincode and can’t be accessed directly by another chaincode. However, within the same network, given the appropriate permission a chaincode may invoke another chaincode to access its state.

This is a piece of code that is part of the ledger. The chaincode provides logic on what, how, when, and by whom things can be written on ledger. It is essentially business rules coded to store data onto the ledger. For example the chaincode can make sure an account holder has enough balance before he transfers an amount to another account.

[Network Concepts - Become a Blockchain Developer](https://www.educative.io/courses/hands-on-blockchain-hyperledger-fabric/YVQj9jxq7QO)

[Chaincode Tutorials — hyperledger-fabricdocs master documentation](https://hyperledger-fabric.readthedocs.io/en/release-1.3/chaincode.html)