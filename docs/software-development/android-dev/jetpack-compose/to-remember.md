---
sidebar_label: "To Remember Jetpack Compose"
description: "To Remember Jetpack Compose."
---

# To Remember Jetpack Compose

## In compose, we don't hide UI elements

In Compose **you don't hide UI elements**. Instead, you simply don't add them to the composition, so they're not added to the UI tree that Compose generates. You do this with simple conditional Kotlin logic. For example to show the onboarding screen or the list of greetings you would do something like:

## `by` delegate

shouldShowOnboarding is using a by keyword instead of the =. This is a property delegate that saves you from typing .value every time.

```kotlin
var shouldShowOnboarding by remember { mutableStateOf(true) }
```

## No nee to `remember` in simple calculations

You don't need to remember `extraPadding` against recomposition because it's doing a simple calculation.

```kotlin
@Composable
private fun Greeting(name: String) {

    val expanded = remember { mutableStateOf(false) }

    val extraPadding = if (expanded.value) 48.dp else 0.dp
...
```

## Calling composable from different parts of the screen

Note that if you call the same composable from different parts of the screen you will create different UI elements, each with its own version of the state. **You can think of internal state as a private variable in a class.**

The composable function will automatically be "subscribed" to the state. If the state changes, composables that read these fields will be recomposed to display the updates.



## Thingking in compose (Recomposition)

Compose apps transform data into UI by calling composable functions. If your data changes, Compose re-executes these functions with the new data, creating an updated UI—this is called **recomposition**. Compose also looks at what data is needed by an individual composable so that it only needs to recompose components whose data has changed and skip recomposing those that are not affected.

As mentioned in [Thinking in Compose](https://developer.android.com/jetpack/compose/mental-model#recomposition):

_Composable functions can execute frequently and in any order, you must not rely on the ordering in which the code is executed, or on how many times this function will be recomposed._

## Placing composable at the end of the row

There's no `alignEnd` modifier so, instead, you give some `weight` to the composable at the start. The `weight` modifier makes the element fill all available space, making it _flexible_, effectively pushing away the other elements that don't have a weight, which are called _inflexible_. It also makes the `fillMaxWidth` modifier redundant.

## Material is opinionated

Material is opinionated because it provides good defaults and patterns that are common to most apps.

> Change background color with `Surface` and the Text composable inside with will change its text color for accessibility, as an example.

In this case, `Surface` understands that, when the background is set to the `primary` color, any text on top of it should use the `onPrimary` color, which is also defined in the theme.

* [Jetpack Compose basics](https://developer.android.com/codelabs/jetpack-compose-basics)

## Compose packages

**Note:** When importing classes related to Jetpack Compose in this project, use those from:

*   androidx.compose.* for compiler and runtime classes
*   androidx.compose.ui.* for UI toolkit and libraries

## Preview annotation

The annotation must be used on a composable function that does not take in parameters. For this reason, you can't preview the `MessageCard` function directly. Instead, make a second function named `PreviewMessageCard`, which calls `MessageCard` with an appropriate parameter. Add the `@Preview` annotation before `@Composable`.

```kotlin
// ...
import androidx.compose.ui.tooling.preview.Preview

@Composable
fun MessageCard(name: String) {
    Text(text = "Hello $name!")
}

@Preview
@Composable
fun PreviewMessageCard() {
    MessageCard("Android")
}
  
```

## Composable functions

Composable functions can only be called from other composable functions.