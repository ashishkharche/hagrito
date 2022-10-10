---
sidebar_label: "To Remember Jetpack Compose"
description: "To Remember Jetpack Compose."
---

# To Remember Jetpack Compose

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