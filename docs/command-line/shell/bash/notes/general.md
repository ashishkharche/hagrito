---
sidebar_label: General Notes
description: General Notes used in Bash.
---

# General Notes

## Pipe symbol

`|`

It tells bash to connect the output of the first to the input of the second command.

`|&`

Symbol inbetween the commands to indicate that we want not only the standard output of the first command, but also its standard error to be connected to the second command's input.

[Commands And Arguments](https://guide.bash.academy/commands/)

## ;

The simplest control operator is just starting a new line, which is equivalent to ; and tells bash to just run the command and wait for it to end before advancing to the next command in the list.

[Commands And Arguments](https://guide.bash.academy/commands/)

## ||

`||` control operator which tells bash to run the command before it as it normally would, but after finishing that command move to the next command only if the command before it failed. If the command before it didn't fail, the || operator will make bash skip the command after it

[Commands And Arguments](https://guide.bash.academy/commands/)

## Coprocesses

A coprocess is some more bash syntax sugar: it allows you to easily run a command asynchronously (without making bash wait for it to end, also said to be "in the background") and also set up some new file descriptor plugs that connect directly to the new command's input and output.

Read more about [coproc](https://guide.bash.academy/commands/)

[Commands And Arguments](https://guide.bash.academy/commands/)

## Functions

`example() { ... }`

After the command name go the `()` parentheses. Some languages use these parentheses to declare the arguments the function accepts: **bash does not**. The parentheses should always be empty. They simply denote the fact that you're declaring a function.

[Commands And Arguments](https://guide.bash.academy/commands/)

## Redirections

Before a command is executed, its input and output may be redirected using a special notation interpreted by the shell.

[Redirections (Bash Reference Manual)](https://www.gnu.org/software/bash/manual/html_node/Redirections.html)

## `function` keyword

Use `name()` instead for compliancy reasons. Do not use `function` keyword.

## builtin

Builtins are tiny procedures built into bash. They are small operations that were programmed into bash and bash doesn't need to run a special program to be able to perform them.

[Commands And Arguments](https://guide.bash.academy/commands/)

## Quoting

You should use "double quotes" for any argument that contains expansions (such as `$variable` or `$(command)` expansions) and 'single quotes' for any other arguments. Single quotes make sure that everything in the quotes remains literal, while double quotes still allow some bash syntax such as expansions:

[Commands And Arguments](https://guide.bash.academy/commands/)

## File descriptors

Each process will generally have three standard file descriptors: standard input (FD 0), standard output (FD 1) and standard error (FD 2).

[Commands And Arguments](https://guide.bash.academy/commands/)

## 2>&1

Copy FD 1 to FD 2 as is done above. You can translate the syntax 2>&1 as Make FD 2 write(>) to where FD(&) 1 is currently writing.

It sends FD 2's output to the stream FD 1 is connected to, which at the time is probably the terminal and not the file, because FD 1 hasn't been redirected yet.


### Proper code, correct order:

```bash
ls -l a b >myfiles.ls 2>&1
```

We now first change FD 1's target to stream to myfiles.ls. Then, we make FD 2 target the same stream FD 1 is currently using, which is the new stream to myfiles.ls. Both file descriptors are now targeting myfiles.ls and any output written by ls on either FD 1 or FD 2 will end up in the file.

### Not a proper code:

```bash
ls -l a b 2>&1 >myfiles.ls
```

The logical error in their reasoning is the assumption that 2>&1 sends FD 2's output to FD 1. It does NOT. It sends FD 2's output to the stream FD 1 is connected to, which at the time is probably the terminal and not the file, because FD 1 hasn't been redirected yet.

### Convenience operator

```bash
ls -l a b &>myfiles.ls
```
Make both FD 1 (standard output) and FD 2 (standard error) write to file.
This is a convenience operator which does the same thing as >file 2>&1 but is more concise. Again, you can append rather than truncate by doubling the arrow: &>>file

[Commands And Arguments](https://guide.bash.academy/commands/)

## Pathname expansion

Delete every file in a folder.

```bash
rm -v *
```

It is important to understand that while we see an apparent * argument in our code to rm, we are not actually passing * to rm. In fact, the rm command will never even see our pathname expansion pattern. The pattern is evaluated and expanded by bash well before rm is even started. As far as rm knows, it simply receives a -v argument followed by the exact and full name of every single file in the directory. Expansion is always performed by bash itself, and always before actually running the command!

[Variables and Expansions](https://guide.bash.academy/expansions/?=Pathname_Expansion#a1.1.0_1)

## glob

To perform a pathname expansion, we simply write a syntactical glob pattern in the place where we want to expand pathnames. A glob is the name of the type of pattern supported by the bash shell. 

Read more about [glob](https://guide.bash.academy/expansions/?=Pathname_Expansion#p1.1.0_4)

### example

```bash
# * = glob
ls *.txt
```

### subdirectories

```bash
ls ~/Downloads/*.txt
```

It is also important to understand that these globs will never jump into subdirectories. They only match against file names in their own directory. If we want a glob to go looking at the pathnames in a different directory, we need to explicitly tell it with a literal pathname:

[Variables and Expansions](https://guide.bash.academy/expansions/?=Pathname_Expansion#p1.1.0_4)

## extended globs

bash has also built support in for more advanced glob patterns. These globs are called: extended globs. By default, support for them is disabled, but we can easily enable it in our current shell with the command:

```bash
shopt -s extglob
```

Read more about [extended globs](https://guide.bash.academy/expansions/?=Pathname_Expansion#p1.1.0_4)

## spaces in assignment `=` operator

Assignment uses the = operator. It is imperative that you understand there can be no syntactical space around the operator. While other languages may permit this, bash does not. Remember from the previous chapter that spaces in bash have a special meaning: they split commands into arguments. If we were to put spaces around the = operator, they would cause bash to split the command into a command name and arguments, thinking you wanted to execute a program rather than assign a variable value

## What's `--` (Double Dash)

The first -- argument that is not an option-argument should be accepted as a delimiter indicating the end of options. Any following arguments should be treated as operands, even if they begin with the '-' character.

Code:

```bash
$ for file in *.JPG *.jpeg
do mv -- "$file" "${file%.*}.jpg"
done
```

[Utility Conventions](https://pubs.opengroup.org/onlinepubs/9699919799/basedefs/V1_chap12.html#tag_12_02)

## `-c` in bash

```bash
$ bash -c 'echo "1: $1, 2: $2, 4: $4"' -- 'New First Argument' Second Third 'Fourth Argument'
1: New First Argument, 2: Second, 4: Fourth Argument
```

If the -c option is present, then commands are read from string. If there are arguments after the string, they are assigned to the positional parameters, starting with $0.

We run the `bash` command, passing the `-c` option followed by an argument that contains some bash shell code. This will tell bash that instead of starting a new interactive bash shell, you want to just have the shell run the provided bash code and finish. After the shell code, we specify the arguments to use for populating the positional parameters. The first argument in our example is `--`, and while this argument is technically used to populate the zero'th positional parameter, it is a good idea to always use `--` for the sake of compatibility and to make clear the separation between bash's arguments and the arguments to your shell code. After this argument, each argument populates the standard positional parameters as you would expect.

[Variables and Expansions](https://guide.bash.academy/expansions/#toc9)

[bash(1): GNU Bourne-Again SHell - Linux man page](https://linux.die.net/man/1/bash)

## Create arrays

To create an array variable, bash introduces a slightly different assignment operator: `=( )`. As with the standard =, we put the name of our variable on the left hand side of the operator, however, the list of values to assign to this variable should go nicely inbetween the ( and ) braces.

[Variables and Expansions](https://guide.bash.academy/expansions/#toc9)

## Exit status

```bash
rm file || { echo 'Could not delete file!' >&2; exit 1; }
```

You should make sure that your scripts always return a non-zero exit code if something unexpected happened in their execution. You can do this with the exit builtin:

Exit Code / Exit Status: Whenever a command ends it notifies its parent (which in our case will always be the shell that started it) of its exit status. This is represented by a number ranging from 0 to 255. This code is a hint as to the success of the command's execution.

[BashGuide/TestsAndConditionals - Greg's Wiki](https://mywiki.wooledge.org/BashGuide/TestsAndConditionals)

## semicolon in braces

(Note: don't forget that you need a semicolon or newline before the closing curly brace!)

Example:

```bash
$ grep -q goodword "$file" && ! grep -q badword "$file" && { rm "$file" || echo "Couldn't delete: $file" >&2; }
```

[BashGuide/TestsAndConditionals - Greg's Wiki](https://mywiki.wooledge.org/BashGuide/TestsAndConditionals#Conditional_Blocks_.28if.2C_test_and_.5B.5B.29)

## `case` in bash

```bash
case $LANG in
    en*) echo 'Hello!' ;;
    fr*) echo 'Salut!' ;;
    de*) echo 'Guten Tag!' ;;
    nl*) echo 'Hallo!' ;;
    it*) echo 'Ciao!' ;;
    es*) echo 'Hola!' ;;
    C|POSIX) echo 'hello world' ;;
    *)   echo 'I do not speak your language.' ;;
esac
```

Each choice in a case statement consists of a pattern (or a list of patterns with | between them), a right parenthesis, a block of code that is to be executed if the string matches one of those patterns, and two semi-colons to denote the end of the block of code (since you might need to write it on several lines). A left parenthesis can be added to the left of the pattern. Using ;& instead of ;; will grant you the ability to fall-through the case matching in bash, zsh and ksh. case stops matching patterns as soon as one is successful. Therefore, we can use the * pattern in the end to match any case that has not been caught by the other choices.

[BashGuide/TestsAndConditionals - Greg's Wiki](https://mywiki.wooledge.org/BashGuide/TestsAndConditionals#Conditional_Blocks_.28if.2C_test_and_.5B.5B.29)

## `select` in bash

The user is presented by choices and asked to enter a number reflecting his choice. The code in the select block is then executed with a variable set to the choice the user made. If the user's choice was invalid, the variable is made empty:

```bash
$ echo "Which of these does not belong in the group?"; \
> select choice in Apples Pears Crisps Lemons Kiwis; do
> if [[ $choice = Crisps ]]
> then echo "Correct!  Crisps are not fruit."; break; fi
> echo "Errr... no.  Try again."
> done
```

The menu reappears so long as the break statement is not executed. In the example the break statement is only executed when the user makes the correct choice.

[BashGuide/TestsAndConditionals - Greg's Wiki](https://mywiki.wooledge.org/BashGuide/TestsAndConditionals#Conditional_Blocks_.28if.2C_test_and_.5B.5B.29)

## PS3 in bash

We can use the PS3 variable to define the prompt the user replies on. Instead of showing the question before executing the select statement, we could choose to set the question as our prompt:

```bash
$ PS3="Which of these does not belong in the group (#)? "; \
> select choice in Apples Pears Crisps Lemons Kiwis; do
> if [[ $choice = Crisps ]]
> then echo "Correct!  Crisps are not fruit."; break; fi
> echo "Errr... no.  Try again."
> done
```

The $PS3 variable in Bash is used exclusively for the prompt of a bash select loopicon mdi-link-variant to create simple shell menus. If this variable is not set, the select command prompts with the default value of #?

[BashGuide/TestsAndConditionals - Greg's Wiki](https://mywiki.wooledge.org/BashGuide/TestsAndConditionals#Conditional_Blocks_.28if.2C_test_and_.5B.5B.29)

[How To Make A Custom Bash Shell Prompt](https://www.shell-tips.com/bash/prompt/)