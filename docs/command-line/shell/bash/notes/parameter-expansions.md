---
sidebar_label: Parameter Expansions
description: Parameter Expansions.
---

# Parameter Expansions

## PE Tricks

Here's a summary of most of the PE tricks that are available:

<table>

<tbody>

<tr>

<td>

**Syntax**

</td>

<td>

**Description**

</td>

</tr>

<tr>

<td>

`${parameter:-word}`

</td>

<td>

**Use Default Value**. If `parameter` is unset or null, `word` (which may be an expansion) is substituted. Otherwise, the value of `parameter` is substituted.

</td>

</tr>

<tr>

<td>

`${parameter:=word}`

</td>

<td>

**Assign Default Value**. If `parameter` is unset or null, `word` (which may be an expansion) is assigned to `parameter`. The value of `parameter` is then substituted.

</td>

</tr>

<tr>

<td>

`${parameter:+word}`

</td>

<td>

**Use Alternate Value**. If `parameter` is null or unset, nothing is substituted, otherwise `word` (which may be an expansion) is substituted.

</td>

</tr>

<tr>

<td>

`${parameter:offset:length}`

</td>

<td>

**Substring Expansion**. Expands to up to `length` characters of `parameter` starting at the character specified by `offset` (0-indexed). If `:length` is omitted, go all the way to the end. If `offset` is negative (use parentheses!), count backward from the end of `parameter` instead of forward from the beginning. If `parameter` is @ or an indexed array name subscripted by @ or *, the result is `length` positional parameters or members of the array, respectively, starting from `offset`.

</td>

</tr>

<tr>

<td>

`${#parameter}`

</td>

<td>

The length in characters of the value of `parameter` is substituted. If `parameter` is an array name subscripted by @ or *, return the number of elements.

</td>

</tr>

<tr>

<td>

`${parameter#pattern}`

</td>

<td>

The `pattern` is matched against the **beginning** of `parameter`. The result is the expanded value of `parameter` with the shortest match deleted.  
If `parameter` is an array name subscripted by @ or *, this will be done on each element. Same for all following items.

</td>

</tr>

<tr>

<td>

`${parameter##pattern}`

</td>

<td>

As above, but the _longest_ match is deleted.

</td>

</tr>

<tr>

<td>

`${parameter%pattern}`

</td>

<td>

The `pattern` is matched against the **end** of `parameter`. The result is the expanded value of `parameter` with the shortest match deleted.

</td>

</tr>

<tr>

<td>

`${parameter%%pattern}`

</td>

<td>

As above, but the _longest_ match is deleted.

</td>

</tr>

<tr>

<td>

`${parameter/pat/string}`

</td>

<td>

Results in the expanded value of `parameter` with the **first** (unanchored) match of `pat` replaced by `string`. Assume null string when the `/string` part is absent.

</td>

</tr>

<tr>

<td>

`${parameter//pat/string}`

</td>

<td>

As above, but **every** match of `pat` is replaced.

</td>

</tr>

<tr>

<td>

`${parameter/#pat/string}`

</td>

<td>

As above, but matched against the **beginning**. Useful for adding a common prefix with a null pattern: `"${array[@]/#/prefix}"`.

</td>

</tr>

<tr>

<td>

`${parameter/%pat/string}`

</td>

<td>

As above, but matched against the **end**. Useful for adding a common suffix with a null pattern.

</td>

</tr>

</tbody>

</table>

## Example

```bash
$ file="$HOME/.secrets/007"; \
echo "File location: $file"; \
echo "Filename: ${file##*/}"; \
echo "Directory of file: ${file%/*}"; \
echo "Non-secret file: ${file/secrets/not_secret}"; \
echo; \
echo "Other file location: ${other:-There is no other file}"; \
echo "Using file if there is no other file: ${other:=$file}"; \
echo "Other filename: ${other##*/}"; \
echo "Other file location length: ${#other}"
File location: /home/lhunath/.secrets/007
Filename: 007
Directory of file: /home/lhunath/.secrets
Non-secret file: /home/lhunath/.not_secret/007

Other file location: There is no other file
Using file if there is no other file: /home/lhunath/.secrets/007
Other filename: 007
Other file location length: 26
```

Remember the difference between `${v#p}` and `${v##p}`. The doubling of the `#` character means patterns will become greedy. The same goes for `%`:

```bash
$ version=1.5.9; echo "MAJOR: ${version%%.*}, MINOR: ${version#*.}." 

# MAJOR: 1, MINOR: 5.9.

$ echo "Dash: ${version/./-}, Dashes: ${version//./-}."

# Dash: 1-5.9, Dashes: 1-5-9.
```

Note: You **cannot** use multiple PEs together. If you need to execute multiple PEs on a parameter, you will need to use multiple statements:

```bash
$ file=$HOME/image.jpg; file=${file##*/}; echo "${file%.*}"
image
```

## Examples

Note: `*` in below examples is also part of pattern but added in headings for understanding purpose.

### `#*pattern`

```bash
input='start abc123 xyz abc123 end'
echo ${input#*c1}
```

Output:
```
23 xyz abc123 end
```

### `##*pattern`

```bash
input='start abc123 xyz abc123 end'
echo ${input##*c1}
```

Output:
```
23 end
```

### `%%pattern*`

```bash
input='start abc123 xyz abc123 end'
echo ${input%%c1*}
```

Output:
```
start ab
```

### `%pattern*`

```bash
input='start abc123 xyz abc123 end'
echo ${input%c1*}
```

Output:
```
start abc123 xyz ab
```

### `##`

```bash
basic2='b b a b c d b b'
basic2i1=${basic2##b}
echo "${basic2i1}"
```

Output:

```
$ bash filename.sh 
babcdbb
```

### `%%`

```bash
basic2='bbabcdbb'
basic2i1=${basic2%%b}
echo "${basic2i1}"
```

Output:

```
$ bash filename.sh 
bbabcdb
```

### `##*b`

```bash
basic2='1bbabcdbb2'
basic2i1=${basic2##*b}
echo "${basic2i1}"
```

Output:

```
$ bash filename.sh 
2
```

### `%%b*`

```bash
basic2='1bbabcdbb2'
basic2i1=${basic2%%b*}
echo "${basic2i1}"
```

Output:

```
$ bash filename.sh 
1
```

[BashGuide/Parameters - Greg's Wiki](https://mywiki.wooledge.org/BashGuide/Parameters#Parameter_Expansion)

