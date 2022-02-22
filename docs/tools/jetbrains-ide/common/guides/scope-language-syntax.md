---
sidebar_label: Scope Language Syntax
description: Scope Language Syntax.
---

# Scope Language Syntax

For file mask and scope.

## Examples

*   `file[MyMod]:src/main/java/com/example/my_package//*` - include in a project all the files from module "MyMod", located in the specified directory and all subdirectories.

*   `src[MyMod]:com.example.my_package..*` - recursively include all classes in a package in the source directories of the module.

*   `lib:com.company..*||com.company..*` - recursively include all classes in a package from both project and libraries.

*   `test:com.company.*` - include all test classes in a package, but not in subpackages.

*   `[MyMod]:com.company.util.*` - include all classes and test classes in the package of the specified module.

*   `file:*.js||file:*.coffee` - include all JavaScript and CoffeeScript files.

*   `file:*js&&!file:*.min.*` - include all JavaScript files except those that were generated through minification, which is indicated by the `min` extension.

*   `!file:*/.npm//*` - exclude all .npm folders.

[Scope language syntax reference | IntelliJ IDEA](https://www.jetbrains.com/help/idea/scope-language-syntax-reference.html#examples)
