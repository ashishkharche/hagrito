---
sidebar_label: Array Routines
description: Array Routines in NumPy.
---

# Array Routines - NumPy

```py
# Create an integer array of length 100 filled with zeros
np.zeros(100, dtype=int)

# Create a 3x3 floating-point array filled with 1s
np.ones((3, 3), dtype=float)

# Create an array filled with a linear sequence
# Starting at 0, ending at 20, stepping by 3
# (this is similar to the built-in range() function)
np.arange(0, 20, 3)

# Create an array of hundred values evenly spaced between 0 and 1
np.linspace(0, 1, 100)

# Create a 3x3 array of uniformly distributed random values between 0 and 1
np.random.random((3, 3))

# Create a 3x3 array of random integers in the interval [0, 10)
np.random.randint(0, 10, (3, 3))

# Create a 3x3 array of normally distributed random values
# with mean 0 and standard deviation 1
np.random.normal(0, 1, (3, 3))

np.random.randint(10, size=6)  # One-dimensional array of random integers
np.random.randint(10, size=(3, 3))  # Two-dimensional array of random integers
np.random.randint(10, size=(3, 3, 3))  # Three-dimensional array of random integers
```

[NumPy Basics - Creating NumPy Arrays and Array Attributes - Grokking Data Science](https://www.educative.io/courses/grokking-data-science/JPJWqrJJw4J)