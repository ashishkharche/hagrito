---
sidebar_label: Char to Int
description: Char to Int
---

# `Char` to `Int`

Char is not a numeric type, but you can convert a number to a character and vice versa according to the character code. You can take a look at the code in the Unicode table. This code is basically an integer number.

```kotlin
val n1: Int = 125
val ch: Char = n1.toChar() // '}'
val n2: Int = ch.toInt()   // 125
```