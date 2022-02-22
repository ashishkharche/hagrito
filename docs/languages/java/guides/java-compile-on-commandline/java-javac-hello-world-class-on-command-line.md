---
sidebar_position: 1
sidebar_label: java, javac hello world class on command line
description: java, javac hello world class on command line.
---

# java, javac hello world class on command line

## Create Some.java

```java
public class Some {
    public static void main(String[] args) {
        System.out.println("nice");
    }
}
```

## Try running with java (for demo purpose)

On command line

```
$ java Some
```

It will give error:

```
$ java Some
Error: Could not find or load main class Some
Caused by: java.lang.ClassNotFoundException: Some
```

## Because first you need to run javac

To compile, run java compiler:

```java
$ javac Some.java
```

## Some.class is generated

```java
$ ls
Some.class  Some.java
```

Some.class is compiled bytecode.

JVM will see this and interpret and run.

## To run

Run java jvm to execute

```
$ java Some
nice
```
## Size

.class size is bigger than .java

Example 406 compared to 112