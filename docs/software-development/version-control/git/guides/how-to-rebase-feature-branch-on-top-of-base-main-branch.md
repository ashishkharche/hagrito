# How to rebase feature branch on top of base main branch

## 1

First backup your current `Branch2`:

```
# from Branch2
git checkout -b Branch2_backup
```

Then rebase `Branch2` on `Branch1`:

```
# from Branch2
git fetch origin           # update all tracking branches, including Branch1
git rebase origin/Branch1  # rebase on latest Branch1
```
After the rebase your branch structure should look like this:

```
master --
         \
         1 -- 2 -- 3 -- 4 -- Branch2'
```

In the diagram above, the apostrophe on `Branch2` indicates that every commit in the rebased `Branch2` _after_ commit 4 is actually a rewrite.

Keep in mind that you have now rewritten the history of `Branch2` and if the branch is already published you will have to force push it to the remote via

```
git push --force origin Branch2
```

Force pushing can cause problems for anyone else using `Branch2` so you should be careful when doing this.

[Reference](https://stackoverflow.com/a/40009875/13621090)

## 2

> I want to rebase my changes (from local `branch2`) on top of `branch1`.

```
git checkout branch2   # Go to your local branch. Use -f to force the checkout.
git reset HEAD --hard  # Drop all non-committed changes.
git rebase branch1     # Rebase on top of branch1\. Use -i for an interactive list.
```

<sup>Note: If a branch is on the remote such as `origin`, prefix the branch name with `origin/`.</sup>

### Troubleshooting

*   If you got stuck in the middle of `rebase` and you want to start over, run:

```
rm -fr .git/rebase-merge # Abort a rebase-merge mode.
git reset HEAD --hard    # Reset everything to the current HEAD.
```

*   If you're on the detached branch (run: `git branch` and look for the star symbol), run:

```
git checkout branch2 -f # and start again.
```

*   If you get conflicts, you need to [fix them](https://stackoverflow.com/a/31835412/55075), use different rebasing point.

*   If you'd like to do rebase manually step by step, use cherry-picking. E.g.

```
git reflog              # Note hashes of for your commits.
git checkout master     # Go to your base branch.
git cherry-pick C0MM1T1 # Cherry pick first commit based on its hash.
# Go to the next one or solve the conflicts.
git cherry-pick C0MM1T2 # Cherry pick another commit and so on.

```

*   If your rebase showing too many commits on the interactive list after running `git rebase branch1 -i`, you can start your rebase given the specific commit just before your changes, e.g. `git rebase pr3v1ios`.

[Reference](https://stackoverflow.com/a/48342680/13621090)

https://www.youtube.com/watch?v=gXCkYkLQ3To - Example pull request