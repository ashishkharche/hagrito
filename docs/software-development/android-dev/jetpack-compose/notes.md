---
sidebar_label: "Jetpack Compose General Notes"
description: "Jetpack Compose General Notes."
---

# Jetpack Compose General Notes

## Terms

### Kotlin compiler plugin

Jetpack Compose uses a Kotlin compiler plugin to transform these composable functions into the app's UI elements.

### content block

```kotlin
setContent {
            Text("Hello world!")
        }
```

The setContent block defines the activity's layout where composable functions are called. 

### Composable functions

add the @Composable annotation to the function name.

## General terminology notes

call composable functions to define what elements you want, and the Compose compiler will do the rest.

[Android Compose Tutorial  |  Android Developers](https://developer.android.com/jetpack/compose/tutorial)

