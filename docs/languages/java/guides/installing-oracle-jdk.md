---
sidebar_label: Installing Oracle JDK
description: Guide for installing Oracle JDK
---

# Installing Oracle JDK

Java 8

## Method 1

Login when prompted on Oracle JDK site.

## Method 2

Download JDK without login.

**(Personal note only) How to generate link for the future update:**

1.  Go to [https://www.oracle.com/java/technologies/javase/javase-jdk8-downloads.html](https://www.oracle.com/java/technologies/javase/javase-jdk8-downloads.html)

2.  Click on the wanted **exe** file and accept the license agreement

3.  Get the link from the download button

> For example: `https://www.oracle.com/webapps/redirect/signon?nexturl=https://download.oracle.com/otn/java/jdk/8u261-b12/a4634525489241b9a9e1aa73d9e118e6/jdk-8u261-windows-x64.exe`

1.  Add necessary info into this link:

`https://javadl.oracle.com/webapps/download/GetFile/1.8.0_[xxx]-b[xx]/[encrypted_path]/windows-i586/[file_name_exe]`

> *   `[xxx]` is the update number; for example `261`
> *   `[xx]` is the build number; for example `12`
> *   `[encrypted_path]` is the encrypted path; for example `a4634525489241b9a9e1aa73d9e118e6`
> *   `[file_name_exe]` is the exe file name; for example `jdk-8u261-windows-x64.exe`

1.  Final and ready download link will be:  
    [https://javadl.oracle.com/webapps/download/GetFile/1.8.0_261-b12/a4634525489241b9a9e1aa73d9e118e6/windows-i586/jdk-8u261-windows-x64.exe](https://javadl.oracle.com/webapps/download/GetFile/1.8.0_261-b12/a4634525489241b9a9e1aa73d9e118e6/windows-i586/jdk-8u261-windows-x64.exe)


[Reference](https://gist.github.com/wavezhang/ba8425f24a968ec9b2a8619d7c2d86a6#gistcomment-3377085)

# JAVA 11 and 8

For Java 11 and 8, add `-pub` infront of `otn` as in `otn-pub`

```
https://download.oracle.com/otn/java/jdk/11.0.13%2B10/bdde8881e2e3437baa70044f884d2d67/jdk-11.0.13_windows-x64_bin.exe
```

becomes

```
https://download.oracle.com/otn-pub/java/jdk/11.0.13%2B10/bdde8881e2e3437baa70044f884d2d67/jdk-11.0.13_windows-x64_bin.exe
```