---
sidebar_label: SDKManager Error JDK
description: Resources for learning TOPIC.
---

# SDKManager error related to JDK when trying to install

```
I encounterd this when I set the JAVA_HOME with AdoptOpenJDK 11 or 14, after I set it back to OpenJDK 8 it works well.
```

[Reference](https://github.com/flutter/flutter/issues/56778#issuecomment-633948509)

Related:

```
Make sure that you have a version of Java 8 installed and that your `JAVA_HOME` environment variable is set to the JDK’s folder.
```

[Windows install | Flutter](https://flutter.dev/docs/get-started/install/windows#agree-to-android-licenses)