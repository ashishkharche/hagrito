---
sidebar_label: Rename jpeg to jpg using bash
description: Rename jpeg to jpg using bash.
---

# Rename jpeg to jpg using bash

```bash
$ for file in *.JPG *.jpeg
do mv -- "$file" "${file%.*}.jpg"
done
```

[BashGuide/Parameters - Greg's Wiki](https://mywiki.wooledge.org/BashGuide/Parameters#Parameter_Expansion)

### What's `--`

The first -- argument that is not an option-argument should be accepted as a delimiter indicating the end of options. Any following arguments should be treated as operands, even if they begin with the '-' character.

[Utility Conventions](https://pubs.opengroup.org/onlinepubs/9699919799/basedefs/V1_chap12.html#tag_12_02)
