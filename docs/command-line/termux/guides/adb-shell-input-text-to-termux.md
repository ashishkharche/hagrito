---
sidebar_label: adb shell input text to termux
description: adb shell input text to termux.
---

# adb shell input text to termux

## Start up Termux

```
adb shell am start -n com.termux/.HomeActivity
```

## Input Text

```
adb shell input text 'nice\ one'
```

or

```
adb shell input text "insert%syour%stext%shere"
```

## Tap

```
adb shell input tap 500 1600
```

## Press Enter

```
adb shell input keyevent ENTER
```


[termux: running termux via adb without *any* direct interaction with the device? - Android Enthusiasts Stack Exchange](https://android.stackexchange.com/questions/225260/termux-running-termux-via-adb-without-any-direct-interaction-with-the-device)