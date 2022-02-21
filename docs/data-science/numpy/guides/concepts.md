---
sidebar_label: Concepts
description: NumPy Concepts.
---

# NumPy Concepts

## Universal functions (ufunc)

A universal function (or ufunc for short) is a function that operates on ndarrays in an element-by-element fashion, supporting array broadcasting, type casting, and several other standard features. That is, a ufunc is a “vectorized” wrapper for a function that takes a fixed number of specific inputs and produces a fixed number of specific outputs.

[Universal functions (ufunc) — NumPy v1.21 Manual](https://numpy.org/doc/stable/reference/ufuncs.html)

[NumPy Arithmetic and Statistics - Computations and Aggregations - Grokking Data Science](https://www.educative.io/courses/grokking-data-science/JYJZADjr4wv)

## upcasting

When operating with arrays of different types, the type of the resulting array corresponds to the more general or precise one (a behavior known as upcasting).