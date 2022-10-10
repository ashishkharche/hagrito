---
sidebar_label: "General Command Line usage for Android"
description: "General Command Line usage for Android."
---

# General Command Line usage for Android


## Build

**Build the APK:**

```shell
gradlew assembleDebug
```

**Install the APK:**

```shell
gradlew installDebug
```

## Test

Use `-Pci` to run tests against http://localhost:8080 instead of https://g.tenor.com.

**Run [Junit](https://junit.org/junit4/) Unit Tests:**

```shell
gradlew testDebug
```

**Run [Espresso](https://developer.android.com/training/testing/ui-testing/espresso-testing.html)
Instrumentation Tests:**

```shell
gradlew connectedDebugAndroidTest
```

## Report

**Generate [Dex Method Count](https://github.com/KeepSafe/dexcount-gradle-plugin) Report:**

```shell
gradlew countDebugDexMethods
```

**Generate [License](https://github.com/jaredsburrows/gradle-license-plugin) Report:**

```shell
gradlew licenseDebugReport
```

**Generate [Lint](https://developer.android.com/tools/help/lint.html) Report:**

```shell
gradlew lintDebug
```

## ADB SHELL SNAPSHOT Testing


https://github.com/sergio-sastre/Road-To-Effective-Snapshot-Testing