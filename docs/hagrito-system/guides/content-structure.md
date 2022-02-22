---
sidebar_label: How to structure content
description: How to structure content.
---

# How to structure content

## README.md

Every directory must either have a `README.md` or `_category_.json` or both files.

This file will be seen at the front when navigating source code on GitHub or on docusaurus when clicked on the directory name in sidebar.

The content in this file should give an overview and additional, as seen fit, details on the topic.

It should tell readers what to expect and what the topic is about at the least.

## _category_.json

Every directory must either have a `README.md` or `_category_.json` or both files.

This file is used to add custom label to the sidebar and adjust position of items in the sidebar.

Usecase: Words can be stylized, adjusting items sequence as they will be displayed in the sidebar.

## Structure

```
$ tree -f
.
|-- ./README.md
|-- ./_category_.json
|-- ./guides
|   |-- ./guides/README.md <-- OKAY, as it has one of the two files.
|   |-- ./guides/getting-started
|   |   |-- ./guides/getting-started/_category_.json <-- OKAY, as it has one of the two files.
|   |   |-- ./guides/getting-started/installing.md
|   |   |-- ./guides/getting-started/intro.md
|   |   |-- ./guides/getting-started/ssh.md
|   |   `-- ./guides/getting-started/vscode.md
|   `-- ./guides/other <-- NOT RECOMMENDED, as it does not have either files README.md or _category_.json
|       `-- ./guides/other/intro.md
|-- ./sub-topic <-- OKAY, as it has both files.
|   |-- ./sub-topic/README.md 
|   `-- ./sub-topic/_category_.json
`-- ./tech-support
    `-- ./tech-support/README.md <-- OKAY, as it has one of the two files.

7 directories, 14 files
```