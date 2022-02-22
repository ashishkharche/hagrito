---
sidebar_label: Check Jetifier
description: Check Jetifier.
---

# Check Jetifier

In the root of the Android project, do:

```
gradle tasks
```

Check if there is a task `checkJetifier`, then do:

```
gradle checkJetifier
```

According to output, enable or disable Jetifier in "gradle.properties" file:

```
// gradle.properties
android.enableJetifier=false
```

[Why disable Jetifier?](https://adambennett.dev/2020/08/disabling-jetifier/)