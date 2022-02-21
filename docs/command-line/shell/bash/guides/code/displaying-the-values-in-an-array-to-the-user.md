---
sidebar_label: Displaying the values in an array to the user.
description: Displaying the values in an array to the user..
---

# Displaying the values in an array to the user.

```bash
names=( "Susan Quinn" "Anne-Marie Davis" "Mary Tate" )
echo "Invites sent to: <${names[*]}>."
( IFS=','; echo "Invites sent to: <${names[*]}>." )
```

## Display count

The `${#parameter}` operator combined with the [@] suffix gives us a count of the elements:

But we can still get the length of a string by specifying directly which string element in the array we want to get the length of

```bash
echo "${#names[@]}"
3
$ echo "${#names[1]}"
16
```

## Slices of array

The ${parameter[@]:start:length} operator can be used to obtain slices or "sub-sets" of our array:

```bash
$ echo "${names[@]:1:2}"
Anne-Marie Davis Mary Tate
$ echo "${names[@]: -2}"Specifying a negative start allows us to count backwards from the end!
Anne-Marie Davis Mary Tate
```

Notice that it is important to include a space in front of the negative start value: if we omit the space, bash gets confused and thinks you are trying to invoke the `${parameter:-value}` operator, which substitutes a default `value` whenever parameter's value is empty. This is obviously not what we want.

[Variables and Expansions](https://guide.bash.academy/expansions/#toc5)