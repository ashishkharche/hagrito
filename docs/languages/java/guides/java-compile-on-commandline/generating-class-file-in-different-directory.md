---
sidebar_position: 4
sidebar_label: Generating .class file in different directory
description: Generating .class file in different directory.
---

# Generating .class file in different directory

TLDR: use `-d` option for javac.

## Using -d option

The directory path where .class file is generated based on the package name example `cool` and not where the .java is located physically.

If the package name where to be `package good`

Then .class would reside in `bruh/good` despite the .java being located in `cool` directory.

```
$ javac -classpath ./lib/* cool/Some.java -d bruh
```

```
$ ls
bruh/  cool/  lib/
```

```
$ ls bruh/
cool/
```

```
$ ls bruh/cool/
Some.class
```

## Adding package to Some.java

```
package cool;

import org.apache.commons.lang3.*;

public class Some {
    public static void main(String[] args) {
        System.out.println("nice");
        System.out.println(StringUtils.capitalize("pretty cool"));
    }
}
```

## Running code

```
$ java -classpath "lib/*;bruh" cool.Some
nice
Pretty cool
```