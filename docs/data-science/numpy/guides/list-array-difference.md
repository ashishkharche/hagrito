---
sidebar_label: List Array Difference
description: List Array Difference in NumPy.
---

# List Array Difference - NumPy

**A key difference between an array and a list** is that arrays allow you to perform _vectorized_ operations while a list is not designed to handle vector operations. A <msreadoutspan class="msreadout-line-highlight msreadout-inactive-highlight">vector <msreadoutspan class="msreadout-word-highlight">operation</msreadoutspan> means a function gets</msreadoutspan> applied to every item in the array.

Say we have a list and we want to multiply each item by 2\. We cannot do element-wise operations by simply saying “_mylist * 2_”. However, we can do so on a NumPy array. Let’s see some code-examples:

```
arr1 = np.array([1, 2, 3, 4])
print(arr1)

# Vector (element-wise) operations
print(arr1 * 2)
print(arr1 + 2)
print(arr1 * arr1)
```

**Output**:

```
[1 2 3 4]
[2 4 6 8]
[3 4 5 6]
[ 1  4  9 16]
```

[NumPy Basics - Creating NumPy Arrays and Array Attributes - Grokking Data Science](https://www.educative.io/courses/grokking-data-science/JPJWqrJJw4J)

**Some other key differences** between Python built-in lists and NumPy arrays are:

*   Array size cannot be changed after creation, you will have to create a new array or overwrite the existing one to change size.
*   Unlike lists, all items in the array must be of the same _dtype_.
*   An equivalent NumPy array occupies much less space than a Python list of lists.