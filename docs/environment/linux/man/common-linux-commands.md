# Common Linux Commands

This page contains some information of commonly used Linux commands.

This information is not complete, exhaustive. It is meant to be only for quick reference or maybe only interesting bits.

## What is `-type f, d, l`

`f`: files

`d`: directories

`l`: symbolic links

Example:

```
find docs -type f,d,l
```

[find(1) - Linux manual page](https://man7.org/linux/man-pages/man1/find.1.html)

## Operators: Logical OR and Logical AND.

Operators join together the other items within the expression. They include for example **-o** (meaning logical OR) and **-a** (meaning logical AND). Where an operator is missing, **-a** is assumed.

[find(1) - Linux manual page](https://man7.org/linux/man-pages/man1/find.1.html)
