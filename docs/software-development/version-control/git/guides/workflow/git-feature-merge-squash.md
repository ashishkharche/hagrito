---
sidebar_label: "git feature merge squash"
description: "git feature merge squash."
---

# git feature merge squash

**EXPERIMENTAL**

Say your bug fix branch is called `bugfix` and you want to merge it into `master`:

```
git checkout master
git merge --squash bugfix
git commit
```

**OR** 


I highly suggest performing the merge in the feature branch first `git merge master`, and only then `git merge --squash feature` in the master branch

You want to merge master into the feature branch first, and deal with any manual fixes in your feature branch. That also lets you run tests and make sure your feature branch works correctly. Then, you are guaranteed that you can do an automatic merge of your feature branch into master.

```
// you are on feature bugfix branch

git merge master
git checkout master
git merge --squash bugfix
git commit
```

When I want to merge a feature branch with 105(!!) commits and have them all squashed into one, I don't want to `git rebase -i origin/master` because I need to separately resolve merge conflicts for **each** of the intermediate commits (or at least the ones which git can't figure out itself). Using `git merge --squash` gets me the result I want, of a single commit for merging an entire feature branch. And, I only need to do at most one manual conflict resolution.

**END OR**


This will take all the commits from the `bugfix` branch, squash them into 1 commit, and merge it with your `master` branch.

**Explanation**:

    git checkout master

Switches to your `master` branch.

    git merge --squash bugfix

Takes all commits from the `bugfix` branch and groups it for a 1 commit with your current branch.  
_(no merge commit appears; you could resolve conflicts manually before following commit)_

    git commit

Creates a single commit from the merged changes.

Omitting the `-m` parameter lets you modify a draft commit message containing every message from your squashed commits before finalizing your commit.

## Additional Notes

### [Trying out a real example](/comment/1107#comment-1107)

Submitted by rfay on Sat, 2011-05-21 21:45

No, I've checked and it seems to me that everything I suggested is correct. Let's try an example that we can work together. Perhaps there's something about your question I'm misunderstanding.

Here's a repository that has a main branch (7.x-1.x) and a topic branch (topic). The topic branch started from the first commit on the 7.x-1.x branch. Each has two additional commits.

You can clone this with `git clone git://gist.github.com/985139.git rebase_example`

Here's what the repository looks like right now. It has a main branch (7.x-1.x) and a topic branch (topic). Each has two new commits.

![](https://i.imgur.com/584drH7.png)

So first, let's rebase the topic branch so that it's up-to-date:

    git checkout --track origin/7.x-1.x
    git checkout --track topic
    git rebase origin/7.x-1.x  # This puts our topic commits on top of current 7.x-1.x

Now our topic branch is on a straight line with the 7.x-1.x branch, but two commits ahead:

![](https://i.imgur.com/GElKfVH.png)

    git checkout 7.x-1.x
    git rebase topic  # now our 7.x-1.x is fast-forwarded to have the topic commits on it

Then we would have just fast-forwarded the 7.x-1.x to point at the same place as the topic branch had been:

![](https://i.imgur.com/E39V5mw.png)

Now instead of the last step we could have:

    git merge --squash topic # as you suggest

that would leave us (after committing the results) with the topic branch dangling (OK) and no record of it in the 7.x-1.x branch:

![](https://i.imgur.com/ehDXZaL.png)

which would have squashed the contents of the topic branch and dropped the resulting commit into the index ready to be committed. (This is not really a merge at all, so it's a bit hard to understand how it got into the merge command.). It works fine. You can then commit it with a good message.

We could also have:

    git merge topic

This would have had the same basic effect as the rebase:

![](https://i.imgur.com/J1aOuln.png)

and finally, we could have:

    git merge --no-ff topic

This would explicitly document our merge, adding a merge commit and leaving the merge showing in the history (see gitk or git log --graph). This would be the preferred approach for a long-running public branch.

![](https://i.imgur.com/D78uUDr.png)

Note: I used gitg on Linux for the pictures.

https://randyfay.com/comment/1093#comment-1093

## References

[git - How can I merge multiple commits onto another branch as a single squashed commit? - Stack Overflow](https://stackoverflow.com/questions/5308816/how-can-i-merge-multiple-commits-onto-another-branch-as-a-single-squashed-commit)