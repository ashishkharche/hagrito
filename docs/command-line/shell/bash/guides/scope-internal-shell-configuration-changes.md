---
sidebar_label: Scope internal shell confiiguration changes
description: Scope internal shell confiiguration changes.
---

# Scope internal shell confiiguration changes

Example code:

```bash
names=( "Susan Quinn" "Anne-Marie Davis" "Mary Tate" )
echo "Invites sent to: <${names[*]}>."
( IFS=','; echo "Invites sent to: <${names[*]}>." )
```

It is important to be extremely careful when modifying internal bash shell variables such as in the example above with `IFS`:  
When we change internal shell variables, we need to be cognisant of the fact that we are changing the way in which bash operates. Changing the value of `IFS` to a comma (`,`) for the purpose of expanding files using the `[*]` suffix is fine, but if you then continue on with your script while leaving `IFS` set to its non-default value of a "`,`", many other things in bash that are based on `IFS`'s value will suddenly malfunction.

It is for this reason that you should _always scope internal shell configuration changes_ to as narrow an area of your script as possible. You may have noticed in the example above that we introduced braces `( )` around the code. These braces create a subshell within which the code is executed and when the braces end, the subshell with the non-standard `IFS` value ends with it. As a result, the original script's bash shell never had its `IFS` variable modified and we avoid these unexpected malfunctions

[Variables and Expansions](https://guide.bash.academy/expansions/#toc5)
