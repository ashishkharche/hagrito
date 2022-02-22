---
sidebar_label: Resources
description: Resources for learning TOPIC.
---

# Standard Input - Kotlin

## ReadLine

Kotlin has a useful function to read data from the standard input. It is `readLine`. It reads the whole line **as a string**.

```
val line = readLine()!!
```

## Scanner

Another way to obtain data from the standard input is to use the Java `Scanner`. You can access it directly from Kotlin because it is interoperable with other Java libraries. `Scanner` allows a program to read values of **different types** (strings, numbers, etc) from the standard input.

```
val scanner = Scanner(System.`in`)
println(scanner.nextLine())
```

[Standard input – JetBrains Academy](https://hyperskill.org/learn/step/4445)