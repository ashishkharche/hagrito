# Shell Scripts - Permissions

## `ls -l filename`

`-l`: use a long listing format

Example:
(On Ubuntu WSL2)

```
ls -l hw
```

**Output**:

```
$ ls -l hw
-rw-r--r-- 1 leesoo leesoo 0 Oct 10 16:06 hw
```

**In the output**:

`r`: read permission.

`w`: write permission.

`-`: do not have executable permission.

**On doing `./hw`**:

```
-bash: ./hw: Permission denied
```

**So to add executable permission, we do**:

```
chmod u+x hw
```

`u`: user permission.

`x`: executable permission.

**Optional**: 

To make it executable for all users on the system, instead of `u` use `a`.

**The permissions now are**:

```
-rwxr--r-- 1 leesoo leesoo 10 Oct 10 16:07 hw*
```

Now on executing `./hw`, we get proper output.

To remove executable permission, do `chmod u-x filename`. Instead of `+`, do `-`.

[File security](https://tldp.org/LDP/intro-linux/html/sect_03_04.html)