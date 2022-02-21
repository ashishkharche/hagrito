---
sidebar_label: Integrate Anaconda with CMDER in Windows Terminal
description: Integrate Anaconda with CMDER in Windows Terminal.
---

# Integrate Anaconda with CMDER in Windows Terminal

```
cmd.exe "/k" O:\SOFTW\CMDER\cmder\vendor\conemu-maximus5\ConEmu\CmdInit.cmd C:\Users\jiayo\anaconda3\Scripts\activate.bat
```

or if you set `ConEmuDir` as environmental variable with value: `O:\SOFTW\CMDER\cmder\vendor\conemu-maximus5`

```
cmd.exe "/k" %ConEmuDir%\ConEmu\CmdInit.cmd C:\Users\jiayo\anaconda3\Scripts\activate.bat
```
