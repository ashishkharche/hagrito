---
sidebar_label: "git remote ref does not exist"
description: "git remote ref does not exist."
---

# git remote ref does not exist

The command `git branch -a` shows remote branches that exist _in your local repository_. This may sound a bit confusing but to understand it, you have to understand that there is a difference between a remote branch, and a branch that exists in a remote repository. Remote branches are _local_ branches that map to branches of the remote repository. So the set of remote branches represent the state of the remote repository.

The usual way to update the list of remote branches is to use `git fetch`. This automatically gets an updated list of branches from the remote and sets up remote branches in the local repository, also fetching any commit objects you may be missing.

However, by default, `git fetch` does not remove remote branches that no longer have a counterpart branch on the remote. In order to do that, you explicitly need to _prune_ the list of remote branches:

```
git fetch --prune
```

This will automatically get rid of remote branches that no longer exist on the remote. Afterwards, `git branch -r` will show you an updated list of branches that really exist on the remote: And those you can delete using `git push`.

That being said, in order to use `git push --delete`, you need to specify the name of the branch on the remote repository; not the name of your remote branch. So to delete the branch `test` (represented by your remote branch `origin/test`), you would use `git push origin --delete test`.

## References

[Git says remote ref does not exist when I delete remote branch - Stack Overflow](https://stackoverflow.com/questions/35941566/git-says-remote-ref-does-not-exist-when-i-delete-remote-branch)
