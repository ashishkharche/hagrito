---
sidebar_label: .bashrc for Git Bash
description: .bashrc for Git Bash.
---

.bashrc for Git Bash

```bash

alias c.='code .'

alias s.='start .'
alias e.='explorer.exe .'

alias gcong='git config --global user.name && git config --global user.email'

alias gconl='git config user.name && git config user.email'

alias gun='git config user.name'
alias gue='git config user.email'

alias gunak='git config user.name "username"'
alias gueak='git config user.email "username@gmail.com"'

alias gcm='git commit -m'
alias ga='git add .'
alias gbm='git branch -M'
alias gpo='git push origin'
alias gcb='git checkout -b'
alias grsu='git remote set-url origin'
alias grv='git remote -v'
alias gs='git status'
alias gcl='git clone'
alias gb=' git branch'
alias gcam='git commit --allow-empty -m'
alias gc='git checkout'
alias grpc='git rebase dev main && git push && gc dev'

alias .='cd ..'
alias ..='cd .. && cd ..'
alias ...='=cd .. && cd .. && cd ..'
alias ....='cd .. && cd .. && cd .. && cd ..'
alias .....='cd .. && cd .. && cd .. && cd .. && cd ..'

alias c='clear'
alias l='ls'
alias d='cd'

alias ls='ls -hFX --color=auto --group-directories-first'

alias efi='echo find -iname "**"'

alias ela='emulator -list-avds'
alias e='emulator'

alias ide='idea64.exe'

alias diff="for next in \$( git ls-files --others --exclude-standard ) ; do git --no-pager diff --no-index /dev/null \$next; done;"

alias ffmcut="echo ffmpeg -i input.mp3 -ss 00:02:54.583 -t 300 -acodec copy output.mp3"

# Create directory if not exist and cd into it.
cc () {
  case "$1" in
    */..|*/../) cd -- "$1";; # that doesn't make any sense unless the directory already exists
    /*/../*) (cd "${1%/../*}/.." && mkdir -p "./${1##*/../}") && cd -- "$1";;
    /*) mkdir -p "$1" && cd "$1";;
    */../*) (cd "./${1%/../*}/.." && mkdir -p "./${1##*/../}") && cd "./$1";;
    ../*) (cd .. && mkdir -p "${1#.}") && cd "$1";;
    *) mkdir -p "./$1" && cd "./$1";;
  esac
}

# Create directory and add .gitkeep to into while cding to it.
gitcc () {
  case "$1" in
    */..|*/../) cd -- "$1";; # that doesn't make any sense unless the directory already exists
    /*/../*) (cd "${1%/../*}/.." && mkdir -p "./${1##*/../}") && cd -- "$1" && touch "./.gitkeep";;
    /*) mkdir -p "$1" && cd "$1" && touch "./.gitkeep";;
    */../*) (cd "./${1%/../*}/.." && mkdir -p "./${1##*/../}") && cd "./$1" && touch "./.gitkeep";;
    ../*) (cd .. && mkdir -p "${1#.}") && cd "$1" && touch "./.gitkeep";;
    *) mkdir -p "./$1" && cd "./$1" && touch "./.gitkeep";;
  esac
}

```