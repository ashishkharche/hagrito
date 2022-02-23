---
sidebar_label: How to structure content
description: How to structure content.
---

# How to structure content

## `README.md`

Every directory must either have a `README.md` or `_category_.json` or both files.

This file will be seen at the front when navigating source code on GitHub or on docusaurus when clicked on the directory name in sidebar.

The content in this file should give an overview and additional, as seen fit, details on the topic.

It should tell readers what to expect and what the topic is about at the least.

## `_category_.json`

Every directory must either have a `README.md` or `_category_.json` or both files.

This file is used to add custom label to the sidebar and adjust position of items in the sidebar.

Usecase: Words can be stylized, adjusting items sequence as they will be displayed in the sidebar.

## `guides`

The `guides` directory contains concise and focused guides to understand the topic.

The content that will go in this directory will have a goal to accomplish.

## `notes`

For content that is not focused or does not have a guided structure or lacks goal or is just good to know information should go in `notes` directory.

## `bookmarks`

The `bookmarks` file should contain links to resources on internet or within the site. The bookmarks links can be any tangentially related link that will help in the journey to understand the topic.

## `resources`

The `resources` file should contains links to resources on internet that are considered important and one must or should refer to them to complete their understanding of foundational level atleast.

## `tech-support`

The `tech-support` directory contains workarounds, help related entries for the particular topic.

## Docs front matter

The field should contain:

```
---
title: Docs Markdown Features
sidebar_label: Markdown
sidebar_position: 3
pagination_label: Markdown features
custom_edit_url: https://github.com/facebook/docusaurus/edit/main/docs/api-doc-markdown.md
description: How do I find you when I cannot solve this problem
keywords:
  - docs
  - docusaurus
image: https://i.imgur.com/mErPwqL.png
slug: /myDoc
---

# Markdown Features

My Document Markdown content
```

## Where does `code` go?

The code should be added in a dedicated repository.

For example, `bash` files are usually small so we could create a single `hagrito-bash` repository and add all bash related code there.

But source code for each project of Android, Python, JS may be huge. So create individual GitHub repository for them `hagrito-python-description`.

## Rewording content

Sometimes an article may cover all the things we want to learn for a topic. We may want to save and take notes of it but 90%+ content could be important.

Do not copy entire content.

Reword it. Be consice. It is not necessary to form full sentences, prefer brevity.

For example:

```
Go to VSCode File section and click on Auto Save
```

to

```
VSCode > File > Auto Save
```

Make sure to link the article as a reference.

## General guidelines

Be concise and detailed. Add references.



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