---
sidebar_label: Boolean Masks
description: Boolean Masks in NumPy.
---

# Boolean Masks - NumPy

A more powerful pattern than just obtaining a boolean output array is to use boolean arrays as masks. This means that we are selecting particular subsets of the array that satisfy some given conditions by indexing the boolean array. We don’t just want to know if an index holds a value less than 10, we want to get all the values less than 10 themselves.

```py
import numpy as np 

# Random integers between [0, 10) of shape 3x3
x = np.random.randint(0, 10, (3, 3))
print(x)

# Boolean array
print(x < 6)

# Boolean mask
print(x[x < 6])
```

**Output**:

```
[[3 2 1]
 [2 7 2]
 [7 9 2]]
[[ True  True  True]
 [ True False  True]
 [False False  True]]
[3 2 1 2 2 2]
```

[NumPy Arithmetic and Statistics - Comparison and Boolean Masks - Grokking Data Science](https://www.educative.io/courses/grokking-data-science/qApgDvPwBp3)