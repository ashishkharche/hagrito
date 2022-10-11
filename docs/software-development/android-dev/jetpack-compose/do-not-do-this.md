---
sidebar_label: "Do not do this Jetpack Compose"
description: "Do not do this Jetpack Compose."
---

# Do not do this Jetpack Compose

## Bad way to keep track of `state`

Before getting into how to make a button clickable and how to resize an item, you need to store some value somewhere that indicates whether each item is expanded or not–the **_state_** of the item. Since we need to have one of these values per greeting, the logical place for it is in the `Greeting` composable. Take a look at this `expanded` boolean and how it's used in the code:

```kotlin
@Composable
private fun Greeting(name: String) {
    var expanded = false // Don't do this!

    Surface(
        color = MaterialTheme.colors.primary,
        modifier = Modifier.padding(vertical = 4.dp, horizontal = 8.dp)
    ) {
        Row(modifier = Modifier.padding(24.dp)) {
            Column(modifier = Modifier.weight(1f)) {
                Text(text = "Hello, ")
                Text(text = name)
            }
            OutlinedButton(
                onClick = { expanded = !expanded }
            ) {
                Text(if (expanded) "Show less" else "Show more")
            }
        }
    }
}
```

The reason why mutating this variable does not trigger recompositions is that **it's not being tracked by Compose**. Also, each time `Greeting` is called, the variable will be reset to false.

To add internal state to a composable, you can use the `mutableStateOf` function, which makes Compose recompose functions that read that `State`.

State and MutableState are interfaces that hold some value and trigger UI updates (recompositions) whenever that value changes.

### Bad way to using `mutableStateOf`

```kotlin
@Composable
fun Greeting() {
    val expanded = mutableStateOf(false) // Don't do this!
}
```

However **you can't just assign** `mutableStateOf` **to a variable inside a composable**. As explained before, recomposition can happen at any time which would call the composable again, resetting the state to a new mutable state with a value of `false`.

### Good way to using `mutableStateOf`

To preserve state across recompositions, _remember_ the mutable state using `remember`.

```kotlin
@Composable
fun Greeting() {
    val expanded = remember { mutableStateOf(false) }
    ...
}
```

`remember` is used to **_guard_** against recomposition, so the state is not reset.

* [Jetpack Compose basics](https://developer.android.com/codelabs/jetpack-compose-basics#6)