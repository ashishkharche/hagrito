---
sidebar_label: "List Comprehensions"
description: "List Comprehensions."
---

# List Comprehensions

## With list comprehension

```py
output = ', '.join([q.question_text for q in latest_question_list])
```

## Without list comprehension

```py
output_list = []
for q in latest_question_list:
  output_list.append(q.question_text)

output = ', '.join(output_list)
```

## References

[5. Data Structures — Python 3.10.3 documentation](https://docs.python.org/3/tutorial/datastructures.html#list-comprehensions)