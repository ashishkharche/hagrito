---
sidebar_label: Return DataFrame as output over Series

description: Return DataFrame as output over Series.
---

# Return DataFrame as output over Series

If we want to **obtain a DataFrame object as output instead**, then we need to pass the column name(s) as a list (double square brackets), as shown below:

```py
# We can select any column using its label:

# To obtain a Series as output
col_as_series = movies_df['Genre']

# Print the object type and the first 5 rows of the series
print(type(col_as_series))
col_as_series.head()


# To obtain a dataFrame as output
col_as_df = movies_df[['Genre']]

# Print the object type and the first 5 rows of the DF
print(type(col_as_df))
col_as_df.head()
```

[Pandas DataFrame Operations - Selection, Slicing, and Filtering - Grokking Data Science](https://www.educative.io/courses/grokking-data-science/7X7jPRWVR0r)