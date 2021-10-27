---
sidebar_label: Async Programming Model
description: Async Programming Model in Amplify.
---

# Async Programming Model

## Async Programming Model in Amplify

[Understanding callback hell with default way of interacting with Amplify Android](https://docs.amplify.aws/lib/project-setup/async/q/platform/android/)

## Kotlin Coroutines Support

Amplify tries to map the behavior of our callback-based APIs to Kotlin primitives in an intuitive way. Functions whose callbacks emit a single value (or error) are now expressed as suspending functions, returning the value instead. Functions whose callbacks emit a stream of values will now return Kotlin `Flow`s, instead.

[Project Setup - Kotlin Coroutines Support - Android - AWS Amplify Docs](https://docs.amplify.aws/lib/project-setup/coroutines/q/platform/android/)

