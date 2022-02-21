---
sidebar_position: 3
sidebar_label: Running Third Party Jar
description: Running Third Party Jar.
---

# Running Third Party Jar

## Download JAR

[Maven Repository: org.apache.commons » commons-lang3 » 3.12.0](https://mvnrepository.com/artifact/org.apache.commons/commons-lang3/3.12.0)

## Files available

Create lib folder

```
$ ls
lib/  Some.java
```

In lib folder place the jar

```
$ ls lib
commons-lang3-3.12.0.jar
```

## Some.java

```java
import org.apache.commons.lang3.StringUtils;

public class Some {
    public static void main(String[] args) {
        System.out.println("nice");
        System.out.println(StringUtils.capitalize("pretty cool"));
    }
}
```

## Compiler

When we compile it, we need to tell Java compiler about the library.

```
$ javac -classpath ./lib/* Some.java
```

File generated is Some.class

```
$ ls
lib/  Some.class  Some.java
```

## Run code

If we try normally, we get error:

```
$ java Some
nice
Exception in thread "main" java.lang.NoClassDefFoundError: org/apache/commons/lang3/StringUtils
        at Some.main(Some.java:6)
Caused by: java.lang.ClassNotFoundException: org.apache.commons.lang3.StringUtils
        at java.base/jdk.internal.loader.BuiltinClassLoader.loadClass(BuiltinClassLoader.java:581)
        at java.base/jdk.internal.loader.ClassLoaders$AppClassLoader.loadClass(ClassLoaders.java:178)
        at java.base/java.lang.ClassLoader.loadClass(ClassLoader.java:521)
        ... 1 more
```

We need to use this command:

We picking up everything in the lib and the root folder.

```
$ java -classpath "./lib/*;./" Some
nice
Pretty cool
```

or

```
$ java -classpath "lib/*;" Some
nice
Pretty cool
```

## Finding library

If we just did like this, it won't find additional library stored in lib folder

```
$ javac Some.java
Some.java:1: error: package org.apache.commons.lang3 does not exist
import org.apache.commons.lang3.*;
^
Some.java:6: error: cannot find symbol
        System.out.println(StringUtils.capitalize("pretty cool"));
                           ^
  symbol:   variable StringUtils
  location: class Some
2 errors
```

Things like Maven do all this for us.