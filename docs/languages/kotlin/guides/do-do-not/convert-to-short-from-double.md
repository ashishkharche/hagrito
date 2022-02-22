dd---
sidebar_label: Convert to Short from Double
description: Convert to Short from Double in Kotlin
---

# Convert to `Short` from `Double`

Normally, you can use functions `toShort()` and `toByte()` to convert something to these types. Since Kotlin 1.4, you should avoid these functions when you try to convert `Double` or `Float` type. This feature will be removed in future releases. The main problem here is that the conversion can lead to unexpected results due to the variable's smaller size. Now, you need to convert `Double` or `Float` to `Int` and then convert the result to `Short` or `Byte`:

```kotlin
val floatNumber = 10f
val doubleNumber = 1

val shortNumber = floatNumber.toShort() // avoid this
val byteNumber = doubleNumber.toByte()  // avoid this

val shortNumber = floatNumber.toInt().toShort() // correct way
val byteNumber = doubleNumber.toInt().toByte()  // correct way
```

[Type conversion – JetBrains Academy](https://hyperskill.org/learn/step/4672)