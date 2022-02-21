---
sidebar_label: Pandas Series vs NumPy Arrays
description: Pandas Series vs NumPy Arrays.
---

# Pandas Series vs NumPy Arrays

Pandas’ Series are much more general and flexible than the _1D_ NumPy arrays. The essential difference is the presence of the index; while the values in the **NumPy array have an implicitly defined integer index** (to get and set values), the **Pandas Series has an explicitly defined integer index**, which gives the Series object additional capabilities.

For example, in Pandas, the index doesn’t have to be an integer— it can consist of values of any desired type, e.g., we can use strings as an index and the item access works as expected. Here is an **example of a Series based on non-integer index**:

```py
import pandas as pd 
data = pd.Series([12, 24, 13, 54], 
                index=['a', 'b', 'c', 'd'])

print(data, "\n")
print("Value at index b:", data['b'])
```

[Pandas Core Components - The Series Object - Grokking Data Science](https://www.educative.io/courses/grokking-data-science/mENEWlEA2MG)