---
sidebar_label: Array Slicing
description: Array Slicing in NumPy.
---

# Array Slicing - NumPy 

We need the **slice notation**, **“:”** to access _a slice_ or a range of elements of a given array, _x_:

`x[start:stop:step]`

If we do not specify anything for _start_, _stop_, or _step_, NumPy uses the default values for these parameters: _start=0_, _stop=size of dimension_, and _step=1_.

```py
x1 = np.arange(10) # Input array
x1
#> array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])

# Get the first 5 elements of x
x1[:5]
#> array([0, 1, 2, 3, 4])

# Elements after index 4
x1[4:]
#> array([4, 5, 6, 7, 8, 9])

# From 4th to 6th position
x1[4:7]
#> array([4, 5, 6])

# Return elements at even place (every other element)
x1[ : : 2] 
#> array([0, 2, 4, 6, 8])

#return elements from 1st position step by 2 (every other element starting at index 1)
x1[1::2] 
#> array([1, 3, 5, 7, 9])
```

```py
#reverse the array
x1[::-1]
#> array([9, 8, 7, 6, 5, 4, 3, 2, 1, 0])

# reverse every other element starting from index 5
x1[5::-2] 
#> array([5, 3, 1])
```

```py
x2 = np.array([[0,1,2], [3,4,5], [6,7,8]])
#> array([[0, 1, 2],
#>        [3, 4, 5],
#>        [6, 7, 8]])

x2[:2, :2] # Extract the first two rows and two columns
#> array([[ 0,  1],
#>        [ 3,  4]])

x2[:3, ::2]  # all rows, every other column
#>array([[0,  2],
#>       [ 3,  5],
#>       [ 6,  8]])
```

```py
x2[::-1, ] # Reverse only the row positions

#> array([[ 6,  7,  8],
#>        [ 3,  4,  5],
#>        [ 0,  1,  2]])

x2[::-1, ::-1] # Reverse the row and column positions
#> array([[ 8,  7,  6],
#>        [ 5,  4,  3],
#>        [ 2,  1,  0]])
```

**Note**: Array slices are not copies of the arrays. This means that if we want to do a modification on the array obtained from the slicing operation without changing the original array, we have to use the `copy()` method:

```py
x2_subcopy = x2[::-1, ::-1].copy()
```

[NumPy Basics - Array Indexing and Slicing - Grokking Data Science](https://www.educative.io/courses/grokking-data-science/gxO53lMjvrD)