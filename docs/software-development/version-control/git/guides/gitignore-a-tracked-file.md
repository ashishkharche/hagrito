---
sidebar_label: .gitignore a tracked file
description: .gitignore a tracked file.
---

# .gitignore a tracked file

```
# Remove the files from the index (not the actual files in the working copy)
$ git rm -r --cached .

# Add files you want to be ignored to .gitignore (at this point or even before these steps)

# Add these removals to the Staging Area...
$ git add .

# ...and commit them!
$ git commit -m "Clean up ignored files"
```

## References

[How can I ignore a file that has already been committed to a Git repository? | Learn Version Control with Git](https://www.git-tower.com/learn/git/faq/ignore-tracked-files-in-git)