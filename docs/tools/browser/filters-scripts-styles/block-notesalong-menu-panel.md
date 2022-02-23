---
sidebar_label: Block notesalong menu panel
description: Block notesalong menu panel.
---

# Block notesalong menu panel

## With ublock origin

When you install notesalong chrome extension, it provides a sidebar panel to access some features. However, it's annoying to look at constantly at every page.

You can block it with ublock filter lists.

Download ublock origin.

Click on the sidebar menu panel icon, right click and select ublock origin bloc element.

Then click on create in the dialog box.

Go to my filters section in ublock and modify it to work with all urls:

```css
##.notesalong-menu-panel
```

## Stylus

```css
.notesalong-menu-panel {
    display: none    
}
```

In Applies to section select:

Urls matching with regexp: `.*`

Click on RegExp Test to verify regexp working as intended.