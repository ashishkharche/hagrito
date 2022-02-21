---
sidebar_label: Shell Initialization
description: Shell Initialization.
---

# Shell Initialization (.bash_profile, .bashrc, .profile)

When you start an interactive bash session, bash will prepare itself for usage by reading a few initialization commands from different files on your system. You can use these files to tell bash how to behave. One in particular is intended to give you the opportunity to export variables into the environment. The file is called `.bash_profile` and it lives in your home directory. There's a good chance that you don't have this file yet; if this is the case, you can just create the file and bash will find it the next time it goes looking for it.

At the very end of your `~/.bash_profile`, you should have the command `source ~/.bashrc`. That's because when `.bash_profile` exists, bash behaves a little curious in that it stops looking for its standard shell initialization file `~/.bashrc`. The `source` command remedies this oddity.

Note that if there is no `~/.bash_profile` file, bash will try to read from `~/.profile` instead, if it exists. The latter is a generic shell profile configuration file, which is also read by other shells. You can opt to put your environment configuration there instead, but if you do, you need to be aware that you should limit yourself to POSIX sh syntax and not use any bash-specific shell syntax in the file.

## sourcing from .bash_profile and .bashrc

```bash
Notice how the first (login) bash sources both `~/.bash_profile` and `~/.bashrc` while the bottom two source only `~/.bashrc`. That's because only the first bash process is started as a "login shell" (by means of having a `-` in front of its name). The bottom two bash processes are ordinary interactive shells. The reason they have no need for sourcing `~/.bash_profile` is now becoming more obvious: the responsibility of `~/.bash_profile` is to set up bash's environment, and the bottom two shells are already inheriting the environment from their login shell ancestor.
```

[Variables and Expansions](https://guide.bash.academy/expansions/)