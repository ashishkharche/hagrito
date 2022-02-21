---
sidebar_label: address
description: address.
---

# address

You can specify **address** as a filter to commands, for example based on line number, regexp match, etc.

*   `sed '/4/ s/_/-/g'` will perform the substitution only for lines containing `4`

*   `sed '3,7 s/_/-/g'` will perform the substitution only for 3rd to 7th lines

Here's some examples with other commands:

*   `sed '3,7 d'` delete 3rd to 7th lines

*   `sed -n '/search/ p'` will only print lines containing `search`

[Please explain the syntax of this sed command, especially the 4 part: sed '/4/ s/_/-/g' : bash](https://www.reddit.com/r/bash/comments/sjlg2k/please_explain_the_syntax_of_this_sed_command/)
