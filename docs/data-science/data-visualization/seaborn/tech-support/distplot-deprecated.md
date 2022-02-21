---
sidebar_label: Resources
description: Resources for learning TOPIC.
---

# `sns.distplot` deprecated

Use

*   `histplot` instead of `distplot`
*   and add the keyword args `kde=True, stat="density", linewidth=0`

So:

    sns.histplot(a, color="red", label="100% Equities", kde=True, stat="density", linewidth=0)

replaces

    sns.distplot(a, color="red", label="100% Equities")

[What’s new in each version — seaborn 0.11.2 documentation](https://seaborn.pydata.org/whatsnew.html#deprecations)

[python - Updating Seaborn distplot code to version 0.11 - Stack Overflow](https://stackoverflow.com/questions/65973224/updating-seaborn-distplot-code-to-version-0-11)