---
sidebar_label: Todo
description: Todo.
---

# Todo

## Delete .json files script

Currently it deletes file even in `guides` directory. This is not intended.

Maybe the fix is using not path instead of if condition.

[bash - Exclude a sub-directory using find - Stack Overflow](https://stackoverflow.com/questions/13460482/exclude-a-sub-directory-using-find)

## Remove `---`

This is to remove all the content before and including second occurrence of `---` from `.md` or `.mdx` files.

The objective is to clean up the frontmatter of docs first and then use bash script to fill up every `.md` or `.mdx` file with new frontmatter with more fields.

```
sed -z 's/line/LINUX/2' mytextfile
```

[Using sed to replace nth occurrence of a word - Unix & Linux Stack Exchange](https://unix.stackexchange.com/questions/587916/using-sed-to-replace-nth-occurrence-of-a-word)

```
sed 's/.*://'
```

[How to use Sed to replace all characters before colon? - Unix & Linux Stack Exchange](https://unix.stackexchange.com/questions/136794/how-to-use-sed-to-replace-all-characters-before-colon)

### Possible solution

```
sed -z 's/.*---\n\n//1' resources.md > resources.bak
```