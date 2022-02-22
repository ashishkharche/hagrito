---
sidebar_label: Rebasing a local branch and dealing with merge conflicts
description: Rebasing a local branch and dealing with merge conflicts.
---

# Rebasing a local branch and dealing with merge conflicts

For purely local branches, bringing your branch up to date is called
"rebasing", which causes the branch to look _as if_ you had started from
the latest version of 'master'.  The steps are as follows:

```
$ git checkout master                Checkout master
$ git pull                           Update it
$ git checkout feature/python        Move back to new, purely local branch
$ git rebase master                  "Start over" from current master
```

Sometimes, when merging from 'master' into your branch, or from a branch
into 'master', there will be "merge conflicts".  These are one or more
areas within a file where there are conflicting sets of changes, and Git
could not do the merge for you.  In this case, the conflicted area will
be delimited by the traditional conflict markers, '<<<', '===' and
'>>>'.

   Your mission is then to edit the file and "resolve" the conflict by
fixing the order of additions (such as in a 'ChangeLog' file), or fixing
the code to take new changes into account.

   Once you have done so, you tell Git that everything is OK using 'git
add' and 'git commit':

```
$ git checkout feature/python        Move back to new, purely local branch
$ git rebase master                  "Start over" from current master
-| ... Kaboom! Conflict. FIXME: Show real output here
$ gvim main.c                        Edit the file and fix the problem
$ git add main.c                     Tell Git everything is OK now ...
$ git commit                         ... and it's settled
$ git rebase --continue              Continue the rebase
```

[https://www.gnu.org/savannah-checkouts/gnu/gawk/manual/gawkworkflow/gawkworkflow.txt](https://www.gnu.org/savannah-checkouts/gnu/gawk/manual/gawkworkflow/gawkworkflow.txt)