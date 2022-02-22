# File permission issues on Windows File System - WSL2

To clarify and summarize the solution to the original problem of this issue, I will explain how to apply the fix **without restarting your computer**.

1.  Open `/etc/wsl.conf` with your favourite text editor.
2.  Paste the following into it:

```
[automount]
enabled = true
options = "metadata"
mountFsTab = false
```

1.  Close **all** WSL windows!
2.  Open PowerShell.
3.  List your WSL distributions:

```
wsl --list
```

1.  Pick the one you want to fix. We select "Debian" as an example.
2.  Terminate the Debian WSL instance:

```
wsl --terminate Debian
```

1.  Open a new Debian WSL window. It should load for a couple of seconds, which already indicates that the whole WSL was terminated, before.
2.  The fix should be applied now. If it still does not work, repeat all above steps and make absolutely sure, that no WSL windows remain open when applying the fix.

[chmod doesn't work? · Issue #81 · microsoft/WSL](https://github.com/Microsoft/WSL/issues/81#issuecomment-796798258)