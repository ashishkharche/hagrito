---
sidebar_label: "Jetpack Compose General Notes"
description: "Jetpack Compose General Notes."
---

# Jetpack Compose General Notes

## Terms

### animateContentSize

use the `animateContentSize` modifier to animate the message container size smoothly

### animateColorAsState

will animate the background color by gradually modifying its value from `MaterialTheme.colorScheme.surface` to `MaterialTheme.colorScheme.primary` and vice versa.
To do so, you will use the `animateColorAsState` function.

### remember and mutableStateOf and recomposition

Composable functions can store local state in memory by using `remember`, and track changes to the value passed to `mutableStateOf`. Composables (and their children) using this state will get redrawn automatically when the value is updated. This is called recomposition.


### Local UI State

To store this local UI state, you need to keep track of whether a message has been expanded or not. To keep track of this state change, you have to use the functions `remember` and `mutableStateOf`.

* [Android Compose Tutorial  |  Android Developers](https://developer.android.com/jetpack/compose/tutorial)

### LazyColumn and LazyRow

Compose’s LazyColumn and LazyRow. These composables render only the elements that are visible on screen, so they are designed to be very efficient for long lists.

### Material Design Compose

Material Design is built around three pillars: `Color`, `Typography`, and `Shape`.

### modifiers

To decorate or configure a composable, Compose uses modifiers.

### Resource Manager

Use the Resource Manager to import an image.

```kotlin
Image(
        painter = painterResource(R.drawable.profile_picture),
        contentDescription = "Contact profile picture",
    )
```

### Box

Use Box to stack elements.

### Row

You can use Row to arrange items horizontally

### Column

The `Column` function lets you arrange elements vertically.

### Preview annotation

The `@Preview` annotation lets you preview your composable functions within Android Studio without having to build and install the app to an Android device or emulator.

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

