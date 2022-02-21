---
sidebar_label: Reading file from Google Drive
description: Reading file from Google Drive in Google Colab.
---

# Reading file from Google Drive in Google Colab.

Click on "Mount Drive" icon in the left sidebar

or

In a cell, enter below code and run it.

```py
from google.colab import drive
drive.mount('/content/drive')
```

This will enable your Google Drive files to show in the left sidebar.

Now, read the file.

```py
somefile = pd.read_csv('/content/drive/MyDrive/4/somefile.csv')
```
