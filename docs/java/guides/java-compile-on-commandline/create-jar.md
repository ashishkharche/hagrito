---
sidebar_position: 2
sidebar_label: Create JAR
description: Create JAR.
---

# Create JAR

## On Command line

```
$ jar cf somejar.jar Some.class
```

.jar is generated

```
$ ls
Some.class  somejar.jar  Some.java
```

## The usage of -classpath

```
$ rm Some.class

$ ls
somejar.jar  Some.java

$ java Some
Error: Could not find or load main class Some
Caused by: java.lang.ClassNotFoundException: Some

$ java -classpath somejar.jar Some
nice
```

## This is what maven does and more

Creating .class, .jar, adding stuff to manifest file and more.