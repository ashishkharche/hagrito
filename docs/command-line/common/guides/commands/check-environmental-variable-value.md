---
sidebar_label: Check Environmental Variable Value
description: Check Environmental Variable Value.
---

# Check Environmental Variable Value

## Windows 

```
echo %JAVA_HOME% 
```

Adding to PATH: 

Add the unpacked distribution's `bin` directory to your user PATH environment variable by opening up the system properties (WinKey + Pause), selecting the “Advanced” tab, and the “Environment Variables” button, then adding or selecting the PATH variable in the user variables with the value C:\Program Files\apache-maven-3.8.4\bin. The same dialog can be used to set `JAVA_HOME` to the location of your JDK,

e.g. C:\Program Files\Java\jdk1.7.0_51

## Unix-based Operating System (Linux, Solaris and Mac OS X)

```
echo $JAVA_HOME
```

Adding to PATH

```
export PATH=/opt/apache-maven-3.8.4/bin:$PATH

```

[Maven – Installing Apache Maven](https://maven.apache.org/install.html)