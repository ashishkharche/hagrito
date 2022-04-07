---
sidebar_label: "Git local prioritize changes over remote"
description: "Git local prioritize changes over remote."
---

# Git local prioritize changes over remote

**READ ADDITIONAL NOTES**

## Use `-f`

```
git push -f origin branch_name
```

## Additional Notes

`git push -f` will overwrite the upstream changes, and is technically correct. Most of the time, you want to add your changes to the existing code, so what you need to do is `git fetch` to get those changes, and then `git rebase origin/branchname` to replay your changes on top of upstream. There may be merge conflicts to address, but that way you aren't overwriting someone else's work.

## References

[git - Updates were rejected because the tip of your current branch is behind its remote counterpart - Stack Overflow](https://stackoverflow.com/questions/39399804/updates-were-rejected-because-the-tip-of-your-current-branch-is-behind-its-remot)