---
sidebar_label: Getting Started
description: Getting Started guide for NumPy Basics.
---

# NumPy Basics - Getting Started

## 1-D array

```py 
import numpy as np
# Creating 1-D array
array_1d = np.array([1,2,3,4,5])
print(array_1d)
```

**Output**:

```
[1 2 3 4 5]
```

## 2-D array

```py
import numpy as np
# Creating 2-D array
array_2d = np.array([ [1,2,3,4,5],[5,4,3,2,1] ])
print(array_2d)
```

**Output**:

```
[[1 2 3 4 5]
 [5 4 3 2 1]]
```

## Important attributes of ndarray object

```py
import numpy as np
a = np.arange(15).reshape(3, 5)
print(a)

# shape of a
print(a.shape)

# dimensions of a
print(a.ndim)

# data type of a
print(a.dtype.name)

# item size of a
print(a.itemsize)

# size of a
print(a.size)

# type of a
print(type(a))

b = np.array([6, 7, 8])

print(b)

# type of b
print(type(b))
```

**Output**:

```
[[ 0  1  2  3  4]
 [ 5  6  7  8  9]
 [10 11 12 13 14]]
(3, 5)
2
int32
4
15
<class 'numpy.ndarray'>
[6 7 8]
<class 'numpy.ndarray'>
```

### Info

**ndarray.ndim**

the number of axes (dimensions) of the array.

**ndarray.shape**

the dimensions of the array. This is a tuple of integers indicating the size of the array in each dimension. For a matrix with _n_ rows and _m_ columns, `shape` will be `(n,m)`. The length of the `shape` tuple is therefore the number of axes, `ndim`.

**ndarray.size**

the total number of elements of the array. This is equal to the product of the elements of `shape`.

**ndarray.dtype**

an object describing the type of the elements in the array. One can create or specify dtype’s using standard Python types. Additionally NumPy provides types of its own. numpy.int32, numpy.int16, and numpy.float64 are some examples.

**ndarray.itemsize**

the size in bytes of each element of the array. For example, an array of elements of type `float64` has `itemsize` 8 (=64/8), while one of type `complex32` has `itemsize` 4 (=32/8). It is equivalent to `ndarray.dtype.itemsize`.

**ndarray.data**

the buffer containing the actual elements of the array. Normally, we won’t need to use this attribute because we will access the elements in an array using indexing facilities.

[NumPy quickstart — NumPy v1.21 Manual](https://numpy.org/doc/stable/user/quickstart.html)

## Resources

[NumPy quickstart — NumPy v1.21 Manual](https://numpy.org/doc/stable/user/quickstart.html)

## Indexing, Slicing

### 1-D array

```py
import numpy as np

arr = np.arange(0,10,1) # Generate array with numbers from 0 to 9
print(arr)

print(arr[5]) # Fetch element at index 5

print(arr[0:6]) # Fetch elements in a range

arr[0:6] = 20 # Assign a value to a range of elements
print(arr)
```

**Output**:

```
[0 1 2 3 4 5 6 7 8 9]
5
[0 1 2 3 4 5]
[20 20 20 20 20 20  6  7  8  9]
```

### 2-D array

```py
import numpy as np
# Declare a 2-D array
arr2d = np.array([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
])
print(arr2d)

print(arr2d[0][1])

print(arr2d[1:3, 1:3])

arr2d[1:3, 1:3] = 20
print(arr2d)
```

**Output**:

```
[[1 2 3]
 [4 5 6]
 [7 8 9]]

2

[[5 6]
 [8 9]]

[[ 1  2  3]
 [ 4 20 20]
 [ 7 20 20]]
```

The `:` inside the `[]` works the same way as in the 1-D array, but now we can give both the row and column numbers. This `arr2d[1:3, 1:3]` command before the `,` selects the rows starting from `1` to `3` (exclusive) and after the `,` selects the columns starting from `1` to `3` (exclusive).

[NumPy Array Indexing - Predictive Data Analysis with Python](https://www.educative.io/courses/predictive-data-analysis-with-python/R87n5VLq4Nw)

## `copy`

To create a copy of the array, the `copy()` function needs to be explicitly called, like in the below example.

```py
import numpy as np

arr = np.arange(0,10,1)
print(arr)

new_arr = arr[1:7].copy()
print(new_arr)

new_arr[:] = 20
print(arr)
```

**Output**:

```
[0 1 2 3 4 5 6 7 8 9]
[1 2 3 4 5 6]
[0 1 2 3 4 5 6 7 8 9]

```

As seen in the output, the changes made to the `new_arr` array are not reflected in the original array.

## Transpose

```py
import numpy as np
# Creating 2-D array
arr = np.arange(0,50,1).reshape(10,5) # Declare a 2-D array

print(arr)

print(arr.transpose()) # Print the transposed array
#print(arr.T) # This can also be used and same result will be produced
```

**Output**:

```
[[ 0  1  2  3  4]
 [ 5  6  7  8  9]
 [10 11 12 13 14]
 [15 16 17 18 19]
 [20 21 22 23 24]
 [25 26 27 28 29]
 [30 31 32 33 34]
 [35 36 37 38 39]
 [40 41 42 43 44]
 [45 46 47 48 49]]
[[ 0  5 10 15 20 25 30 35 40 45]
 [ 1  6 11 16 21 26 31 36 41 46]
 [ 2  7 12 17 22 27 32 37 42 47]
 [ 3  8 13 18 23 28 33 38 43 48]
 [ 4  9 14 19 24 29 34 39 44 49]]
```

## `where`

```py
import numpy as np
# Declare 2 arrays
arr1 = np.array([10, 20, 30, 40])
arr2 = np.array([500, 600, 700, 800])

cond = np.array([False, True, False, False]) # Create an array with bool operators

res = np.where(cond, arr1, arr2) # apply the where condition
print(res)
```

**Output**:

```
[500  20 700 800]
```

### Info

The NumPy `where` function took 3  `cond`, `arr1`, and `arr2`. This function first checks the value for `cond`. If the value of `cond` is `True`, then it returns the value of `arr1` for the respective index, and if it is `False`, then it returns the value of `arr2` for its respective index. In this case, `arr1` is the first parameter after `cond`, and `arr2` is the last parameter of the `where` function. These arrays can be changed and replaced with any desired value.

This function prevents us from writing complex nested `if` statements and provides an easy alternative.

## Array loading and saving

```py
import numpy as np

arr1 = np.random.randn(7)

print(arr1)

np.save('saved_arr',arr1) # save the array 

arr2 = np.load('saved_arr.npy') # load the saved array from file

print(arr2)
```

**Output**:

```
[ 0.2468156  -0.91085559 -1.49965914 -0.14782175 -0.77209722 -0.04307992
 -1.49262856]

[ 0.2468156  -0.91085559 -1.49965914 -0.14782175 -0.77209722 -0.04307992
 -1.49262856]
```