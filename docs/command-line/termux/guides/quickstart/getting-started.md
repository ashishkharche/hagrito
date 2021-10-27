---
sidebar_label: Getting Started
description: Getting Started gudie for Termux.
---

# Termux - Getting Started

## Install

Install from F-droid

## Setup Storage

```
termux-setup-storage
```

[Termux-setup-storage - Termux Wiki](https://wiki.termux.com/wiki/Termux-setup-storage)

## Keyboard

After Termux v0.66 extra keys row became configurable through file "~/.termux/termux.properties". If this file does not exist, you will need to create it.

```
extra-keys = [ \
 ['ESC','|','/','HOME','UP','END','PGUP','DEL'], \
 ['TAB','CTRL','ALT','LEFT','DOWN','RIGHT','PGDN','BKSP'] \
]
```

After editing Termux.properties file, you need to reload Termux configuration by executing command:

```
termux-reload-settings
```

## curl wget git

Install these common tools.

First do:

```
pkg up
```

```
pkg install curl
```

```
pkg install wget
```

```
pkg install git
```

## Create alias

Create `.bashrc` in $HOME of termux.

Example, add alias:

```
alias .='cd ..'
```

Add more to make development easier.

## proot-distro

Install:

```
pkg install proot-distro
```

## Install Ubuntu or other distributions with proot-distro

List distributions:

```
proot-distro list
```

Install:

```
proot-distro install ubuntu
```

Start shell session:

```
proot-distro login ubuntu
```

Add custom user:

```
adduser username
```

or

```
useradd -U -m username
```

Start shell as a custom user:

```
proot-distro login --user username ubuntu
```

[termux/proot-distro: An utility for managing installations of the Linux distributions in Termux.](https://github.com/termux/proot-distro#differences-from-chroot)