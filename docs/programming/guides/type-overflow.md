---
sidebar_label: Type Overflow
description: Type Overflow.
---

# Type Overflow

This conversion may truncate the value, as `Long` and `Double` can store numbers larger than the truncated `Int` number.

```kotlin
val bigNum: Long = 100_000_000_000_000

val n: Int = bigNum.toInt() // 276447232; oops
```

As a result, we receive a truncated value. This problem is known as **type overflow**. The same problem may occur if you try to convert `Int` to `Short` or `Byte`. So, if you want to convert a larger type value into a smaller one, make sure that the truncation is not going to mess up your program.

[Type conversion – JetBrains Academy](https://hyperskill.org/learn/step/4672)