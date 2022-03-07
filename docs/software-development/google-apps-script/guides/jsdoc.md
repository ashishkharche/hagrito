---
sidebar_label: JSDoc
description: JSDoc.
---

# JSDoc

```js
/**
 * Converts US dollars to Swiss francs.
 *
 * @param {number} dollars The total number of dollars.
 * @return {number} swissFrancs The converted total of Swiss francs.
 * @customfunction
 */
function USDTOCHF(dollars){
  var swissFrancs = dollars * .99; 
  return swissFrancs;
}
```

<google-codelab-step label="Welcome to Apps Script" duration="5" step="0" tabindex="-1"><google-codelab-about codelab-title="Fundamentals of Apps Script with Google Sheets #1: Macros &amp; Custom Functions" authors="Google Workspace Developer Relations" last-updated="2021-06-25T21:31:15Z" duration="60">Fundamentals of Apps Script with Google Sheets #1:Macros & Custom Functions

## About this codelab

_subject_Last updated Jun 25, 2021_account_circle_Written by Google Workspace Developer Relations</google-codelab-about>

## [1\. Welcome to Apps Script](#0)

## What is Apps Script?

[Apps Script](https://developers.google.com/apps-script/) is a rapid application development platform that gives you the ability to automate, customize, and extend your [Google Workspace](https://workspace.google.com/) experience. With Apps Script, you can save time and effort by streamlining onerous or complex work within Google Workspace.

[Apps Script features](https://developers.google.com/apps-script/overview#what_can_apps_script_do) include the following:

*   [Apps Script's built-in services](https://developers.google.com/apps-script/guides/services/) let you read, update, and manipulate your Google Workspace application data with scripts.
*   You can create scripts using Apps Script's in-browser code editor—there's no need to install or run code development software.
*   You can design user interfaces for Google Workspace editors that let you activate scripts directly from those editors using menu items, dialogs, and sidebars.

This Fundamentals of Apps Script with Google Sheets codelab playlist teaches the basics of Apps Script and how to use it to improve your Google Sheets experience. This codelab focuses on teaching Apps Script basics.

## The Spreadsheet service

You can use Apps Script to [extend Google Sheets](https://developers.google.com/apps-script/guides/sheets) to save time and effort. Apps Script provides the [Spreadsheet service](https://developers.google.com/apps-script/reference/spreadsheet/) which allows scripts to interact with your Google Sheet files and the data they contain. You can use this service to automate the following common spreadsheet tasks:

*   Create or modify a spreadsheet.
*   Read and update cell data, formulas, and formatting.
*   Create custom buttons and menus.
*   Import and export data from other Google applications or third-party sources.
*   Share and control access to spreadsheets.

## What you'll learn

This playlist covers all the topics you'll need to get started using Apps Script with Google Sheets:

1.  [Macros and Custom Functions](https://codelabs.developers.google.com/codelabs/apps-script-fundamentals-1)
2.  [Spreadsheets, Sheets, and Ranges](https://codelabs.developers.google.com/codelabs/apps-script-fundamentals-2)
3.  [Working with data](https://codelabs.developers.google.com/codelabs/apps-script-fundamentals-3)
4.  [Data formatting](https://codelabs.developers.google.com/codelabs/apps-script-fundamentals-4)
5.  [Chart and present data in Slides](https://codelabs.developers.google.com/codelabs/apps-script-fundamentals-5)

The codelabs in this playlist are meant to be read in order, so start with this one and complete them in sequence for the best learning experience.

Move to the next section to learn more about this codelab's contents.

</google-codelab-step><google-codelab-step label="Introduction" duration="5" step="1" tabindex="-1">

## [2\. Introduction](#1)

Welcome to the first codelab of this playlist. In this codelab, you'll learn the basics of using Apps Script with Google Sheets. Specifically, this codelab focuses on two key concepts: _macros_ and _custom functions_.

A [macro](https://developers.google.com/apps-script/guides/sheets/macros) is a series of recorded actions within Google Sheets. Once recorded, you can activate a macro to repeat those actions later with a menu item or shortcut key. You can both create and update your own macros in both Google Sheets and the Apps Script code editor.

In the Apps Script code editor, you can also create [custom functions](https://developers.google.com/apps-script/guides/sheets/functions). Similar to the [built-in functions](https://support.google.com/docs/topic/1361471?visit_id=636971711830904871-3213485251&rd=1) Sheets offers (such as [`SUM`](https://support.google.com/docs/answer/3093669) or [`AVERAGE`](https://support.google.com/docs/answer/3093615)), you can use Apps Script to write your own custom functions for simple and niche operations (such as conversions or string concatenation). Once created, you can call these functions in Sheets as you would a built-in function. Custom functions can also be used in cell formulas you write, combining them with other functions as needed.

Read below to learn what concepts and requirements this codelab involves.

## What you'll learn

*   How to create a script for Google Sheets.
*   How to navigate the Apps Script editor.
*   How to create and update macros.
*   How to create your first Sheets custom function.

## What you'll need

*   Basic familiarity with [JavaScript](https://www.javascript.com/)
*   Basic familiarity with [Google Sheets](https://www.google.com/sheets/about/)
*   Ability to read Sheets [A1 Notation](https://developers.google.com/sheets/api/guides/concepts#a1_notation)

**Note:** Apps Script is based on JavaScript. If you're new to JavaScript, [Codecademy](https://www.codecademy.com/) offers a free [Introductory JavaScript](https://www.codecademy.com/learn/introduction-to-javascript) course. While Google didn't build this course, it should cover everything you need to know.

You're done with the introductions. Go to the next section to start working with macros.

</google-codelab-step><google-codelab-step label="Make a macro in Sheets" duration="15" step="2" tabindex="-1" style="transform: translate3d(-110%, 0px, 0px);">

## [3\. Make a macro in Sheets](#2)

Typically, when working in spreadsheets, you can enter into a loop of repetitive actions—copying cell values, formatting, creating formulas, and so forth—which can grow tedious and lead to mistakes. To automate repeated actions, Google Sheets provides _macros_. Macros let you ‘record' a series of actions in a sheet. With a recorded macro, you can repeat the same actions elsewhere in a spreadsheet with a simple hotkey press.

In this section, you'll learn how to build a macro in Sheets. In the next section, you'll see how macros are built using Apps Script.

## Before you begin

Before you continue, you need a spreadsheet with some data. We've provided one for you: [click this link to copy the data sheet](https://docs.google.com/spreadsheets/d/1q1Mxbb4uC-P2ECsF0jKzWRE46iG7o8bjX2TWZhnGA0w/copy) and then click **Make a copy**.

![5b8aded1bb349ecf.png](/codelabs/apps-script-fundamentals-1/img/5b8aded1bb349ecf.png)

A copy of the example spreadsheet for you to use is placed in your Google Drive folder and named "Copy of Top 10 Highest Grossing Films (2018)."

## Create a macro

Now that you have a spreadsheet to work with, you can record a macro in Google Sheets. For this example, you'll create a macro that formats a header row for your data. Just follow these steps:

1.  Click cell A1 to place the cursor in the row. This is your header row.
2.  In the menu, select **Tools > Macros > Record Macros**.

Once you start recording, Google Sheets remembers every action you take within the spreadsheet: highlighting cells, adding data, switching to different sheets, formatting, and so forth. These actions become the ‘script' that gets repeated once you save and activate the macro later.

1.  In the Macro dialog, select **Relative reference.**

![c59f2f12317352d2.gif](/codelabs/apps-script-fundamentals-1/img/c59f2f12317352d2.gif)

**Key Terms:** Macros can use two types of references in Sheets to refer to specific cells. **Absolute references** are fixed to the exact locations recorded (for example, cell A5), while **relative references** are applied using the user's current selection as a starting point (for example, the fourth cell down from the current selection).

This codelab asks you to use relative references for your macros.

1.  Select **row 1**.

![1d782ee30c66a02b.gif](/codelabs/apps-script-fundamentals-1/img/1d782ee30c66a02b.gif)

1.  Recolor the top row's **Fill Color** from white to **dark magenta 3**.

![f7e7abaf76e338c7.png](/codelabs/apps-script-fundamentals-1/img/f7e7abaf76e338c7.png)

1.  Change the top row's **Text Color** from black to **white**.

![d5e630acbe83148.png](/codelabs/apps-script-fundamentals-1/img/d5e630acbe83148.png)

1.  To bold the text, press **Ctrl+B** (or **Cmd+B** on macOS).
2.  To freeze the top row, select **View > Freeze > 1 row**.

![97cb244ffebe8953.png](/codelabs/apps-script-fundamentals-1/img/97cb244ffebe8953.png)

1.  Click **Save** in the macro dialog. A new dialog asks you to name the macro. Enter the name "Header" and click **Save**.

![b4610a54340da518.gif](/codelabs/apps-script-fundamentals-1/img/b4610a54340da518.gif)

Using Sheets' user interface, you've made a macro specialized for formatting headers.

![4ed7fbed18ea3681.png](/codelabs/apps-script-fundamentals-1/img/4ed7fbed18ea3681.png)

## Activate your macro

You can apply your new macro in Sheets by following these instructions:

1.  To create a sheet, click Add Sheet ![9c9b0c19bf317e7f.png](/codelabs/apps-script-fundamentals-1/img/9c9b0c19bf317e7f.png).

![927c012b4e11475b.png](/codelabs/apps-script-fundamentals-1/img/927c012b4e11475b.png)

1.  In the new sheet, add some text to **A1:C2**. Feel free to follow the example inputs below:

![c3aadaef52a609bf.png](/codelabs/apps-script-fundamentals-1/img/c3aadaef52a609bf.png)

1.  Highlight the first row.

![cfe36fcf833d0bd7.gif](/codelabs/apps-script-fundamentals-1/img/cfe36fcf833d0bd7.gif)

1.  Select **Tools > Macros > Header** to apply the Macro to the selected area.

![6279db9a020fc9e4.png](/codelabs/apps-script-fundamentals-1/img/6279db9a020fc9e4.png)

1.  Authorize the macro by following the on-screen instructions.

**Note:** If you're using a [gmail.com](http://gmail.com) account, you might also get an unverified app dialog when you first use your script. Google uses this to warn users who may be using code from unknown or untrusted authors. If you see this dialog, it's OK to proceed since you're the script author. Follow the on-screen prompts to continue authorizing the script. The process of getting this permission is called [authorization](https://developers.google.com/apps-script/guides/services/authorization).

1.  Repeat **Step 4** to run the macro again (authorizing it stops the first execution).

Congrats, you've learned how to apply macros in Sheets. Your spreadsheet should look like this:

![7c7130a4a697bd92.png](/codelabs/apps-script-fundamentals-1/img/7c7130a4a697bd92.png)

Macros allow you to create spreadsheets efficiently, and, in the next part of this codelab, you'll learn how to make your macros even more powerful. Here's the secret: when you record a macro, what you're really doing is _writing Apps Script_ code. Behind the scenes, Sheets constructs the code that matches the macro actions. In the next section, you'll learn how to modify the code directly using Apps Script's in-browser editor.

</google-codelab-step><google-codelab-step label="Macros in the script editor" duration="15" step="3" tabindex="-1" style="transform: translate3d(-110%, 0px, 0px);">

## [4\. Macros in the script editor](#3)

As you create a macro, Google Sheets saves your actions as an Apps Script function. When you activate the macro, Google Sheets calls the Apps Script function to apply those actions in the same order.

## The script editor

Now that you've created a macro, you can look at its code. View the macro script by selecting **Tools > Script editor** to open the browser code editor for Apps Script.

![d9e99fe03c37ac87.png](/codelabs/apps-script-fundamentals-1/img/d9e99fe03c37ac87.png)

The script editor allows you to write code in Apps Script and to run those scripts on Google servers.

**Note:** The macros and scripts you're creating in this codelab are attached to the Google Sheet file they operate on, and can be accessed at any time from the Sheets **Tools > Script editor** menu item. Scripts attached to a Google Sheet like this are called [container bound](https://developers.google.com/apps-script/guides/bound).

### Analysis of `macro.gs`

Review the current script. Sheets created the `macros.gs` script file when you recorded the `Header` macro, filling it with a corresponding Apps Script function called `Header`. When you activate the `Header` macro, Sheets runs this function.

Look at the image below to get familiar with the structure of your macro function in Apps Script. If you recorded the steps in a different order, or clicked around the spreadsheet while recording, your code might look a little different than this.

![5d653a69a0897adf.png](/codelabs/apps-script-fundamentals-1/img/5d653a69a0897adf.png)

The first line is an annotation comment that affects authorization:

<devsite-code data-copy-event-label="" no-copy="">

    /** @OnlyCurrentDoc */

</devsite-code>

Most scripts ask the user for some permissions before they can run. These permissions control what the user is allowing the script to do. When the `@OnlyCurrentDoc` comment is present in a script project, Apps Script only asks for permission to access and update the current spreadsheet. Without this comment, Apps Script would ask permission to access and update _all_ of the user's spreadsheets. It's always best practice to include this annotation when you're only working with a single file. The macro recorder adds this comment automatically for you.

To understand how Apps Script represents your macro's instructions, you can look at the function:

<devsite-code data-copy-event-label="" no-copy="">

    function Header(){  var spreadsheet = SpreadsheetApp.getActive();  var sheet = spreadsheet.getActiveSheet();  sheet.getRange(    spreadsheet.getCurrentCell().getRow(),    1, 1, sheet.getMaxColumns()).activate();  spreadsheet.getActiveRangeList().setBackground('#4c1130')  .setFontColor('#ffffff')  .setFontWeight('bold');  spreadsheet.getActiveSheet().setFrozenRows(1);};

</devsite-code>

This code runs when you activate the `Header` macro. Following `function`, the label `Header()` defines the function's name and its parameters. Recognize that `Header()` requires no parameters as macro functions in Apps Script don't need inputs. The braces always enclose the body of a function in Apps Script.

Later codelabs in this playlist explain the classes and concepts involved in creating the macro. For now, you can go through the following code descriptions to get a general idea of its components and their role in constructing your macro. Consider the first line:

<devsite-code data-copy-event-label="" no-copy="">

    var spreadsheet = SpreadsheetApp.getActive();

</devsite-code>

Here, [`getActive()`](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet-app#getactive) returns an object representing the current **active** spreadsheet file in Sheets and sets it to the new variable `spreadsheet`.

<devsite-code data-copy-event-label="" no-copy="">

    var sheet = spreadsheet.getActiveSheet();sheet.getRange(    spreadsheet.getCurrentCell().getRow(),    1, 1, sheet.getMaxColumns()).activate();

</devsite-code>

These lines correspond to the action of clicking the first row to highlight it. This is called **_activation_**. The first line stores the current sheet in the variable `sheet`, while the second line gets the entire first row using the [`getRange()`](https://developers.google.com/apps-script/reference/spreadsheet/sheet#getrangerow,-column,-numrows,-numcolumns) method and then calls [`activate()`](https://developers.google.com/apps-script/reference/spreadsheet/range#activate()) to activate it. The first row is specified using the specific row and column numbers. The `spreadsheet.getCurrentCell().getRow()` call returns the number of the current row, while `sheet.getMaxColumns()` returns the maximum number of columns in the sheet.

<devsite-code data-copy-event-label="" no-copy="">

    spreadsheet.getActiveRangeList().setBackground('#4c1130').setFontColor('#ffffff').setFontWeight('bold');

</devsite-code>

This bit of code gets more complex. To efficiently call methods with `spreadsheet`, the code stacks three methods onto [`getActiveRangeList()`](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet#getActiveRangeList()) to prevent the code from redundantly calling on this `spreadsheet` method more than once. As you code more using Apps Script, you'll get more familiar with this convention of calling multiple methods on one class (also known as [method chaining](https://en.wikipedia.org/wiki/Method_chaining)). For now, you can read the following for brief explanations on each method in the code block:

*   [`getActiveRangeList()`](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet#getActiveRangeList()) returns the current active [`RangeList`](https://developers.google.com/apps-script/reference/spreadsheet/range-list) in `spreadsheet`. In this case, it's simply the first row the previous line activated.
*   Both the [`setBackground(color)`](https://developers.google.com/apps-script/reference/spreadsheet/range#setbackgroundcolor) and [`setFontColor(color)`](https://developers.google.com/apps-script/reference/spreadsheet/range#setfontcolorcolor) methods change the color attributes of the cells in the active range.
*   [`setFontWeight(fontWeight)`](https://developers.google.com/apps-script/reference/spreadsheet/range#setfontweightfontweight) adjusts the weight of the font for cells in the active range.

Lastly, the final line freezes the first row of the macro:

<devsite-code data-copy-event-label="" no-copy="">

    spreadsheet.getActiveSheet().setFrozenRows(1);

</devsite-code>

And that's the script you generated when you recorded your macro. Don't worry about any unfamiliar terms or methods mentioned above. The description is meant to get you thinking about some of the ideas Apps Script focuses on in a typical macro function, and the topics future codelabs delve into.

The next section focuses on manipulating the `Header()` function's code to show how you can use the script editor to further personalize macros.

## Customize macros with Apps Script

The Apps Script editor shows the macro you previously created in Google Sheets. By adjusting the contents of the function body, you can further customize your macro's instructions to take different or additional actions. The following exercises demonstrate various ways to manipulate macros with the script editor.

### Change the affected cells

Suppose you want to modify your macro so it only affects the first 10 columns of the first row instead of the whole row. You could delete the macro and rerecord it. But, by using the Apps Script editor, you can make those changes directly. Here's one way of doing it:

1.  In the script editor, replace `sheet.getMaxColumns()` with `10`. This edit changes the **range** of cells the macro affects in the spreadsheet.

<devsite-code data-copy-event-label="" no-copy="">

    /** @OnlyCurrentDoc */function Header(){  var spreadsheet = SpreadsheetApp.getActive();  var sheet = spreadsheet.getActiveSheet();  sheet.getRange(    spreadsheet.getCurrentCell().getRow(),    1, 1, 10).activate();    /* sheet.getMaxColumns() replaced with 10.*/  spreadsheet.getActiveRangeList().setBackground('#4c1130')  .setFontColor('#ffffff')  .setFontWeight('bold');  spreadsheet.getActiveSheet().setFrozenRows(1);}

</devsite-code>

1.  To save your script, click Save ![save](https://fonts.gstatic.com/s/i/googlematerialicons/save/v6/24px.svg).
2.  To rename your project, enter "Macros and Custom Functions" as the new project name and click **Rename**.
3.  To create a sheet, in Sheets, click Add Sheet ![9c9b0c19bf317e7f.png](/codelabs/apps-script-fundamentals-1/img/9c9b0c19bf317e7f.png).

![927c012b4e11475b.png](/codelabs/apps-script-fundamentals-1/img/927c012b4e11475b.png)

1.  In the script editor, from the functions list, select `Header` and click **Run**.

In your new sheet, you should see the following result:

![8a58ba02535b2b9c.png](/codelabs/apps-script-fundamentals-1/img/8a58ba02535b2b9c.png)

By modifying the active or target range, your macro now affects only part of the first row. Many Apps Script methods take a range or A1 notation as a parameter to specify which cells to act on.

Next, let's learn about customizing your macro colors.

### Change the colors of your macro

To help you design the color scheme of macros or other elements in Sheets, Apps Script can modify a range's fill or text color. Work through the following instructions to learn how you can customize the colors of your macro.

These instructions focus on changing the background color of your macro:

1.  In Sheets, switch back to the sheet that contains the original data (Sheet 1).
2.  Click the first row to highlight it.
3.  In the script editor, replace background color `#4c1130` with `#afeeee`. These values represent different colors using [hex triplet notation](https://en.wikipedia.org/wiki/Web_colors).

<devsite-code data-copy-event-label="" no-copy="">

    /** @OnlyCurrentDoc */function Header(){  var spreadsheet = SpreadsheetApp.getActive();  var sheet = spreadsheet.getActiveSheet();  sheet.getRange(    spreadsheet.getCurrentCell().getRow(),    1, 1, 10).activate();  spreadsheet.getActiveRangeList().setBackground('#afeeee')    /* #4c1130 replaced with #afeeee.*/  .setFontColor('#ffffff')  .setFontWeight('bold');  spreadsheet.getActiveSheet().setFrozenRows(1);}

</devsite-code>

1.  To save your script, click Save ![save](https://fonts.gstatic.com/s/i/googlematerialicons/save/v6/24px.svg).
2.  From the functions list, select `Header` and click **Run**.

In Sheets, the background fill of the first 10 columns in the first row recolors to a custom turquoise color:

![bbd26f7c8e35039.png](/codelabs/apps-script-fundamentals-1/img/bbd26f7c8e35039.png)

By switching the [hex color notation](https://www.w3schools.com/colors/colors_picker.asp) in the parameters of [`setBackground(color)`](https://developers.google.com/apps-script/reference/spreadsheet/range#setbackgroundcolor) from `#4c1130` (dark magenta 3) to `#afeeee` (pale turquoise, an option not accessible in Sheets' default color menu), you change the color attribute of your macro's background color.

You've now modified the background color set by your macro. If you want to change the text color as well, change the second color code.

1.  In Sheets, click the first row to make sure it's still highlighted.
2.  In the script editor, replace font color `#ffffff` with `#191970`. This causes the macro to set a font color of navy blue.

<devsite-code data-copy-event-label="" no-copy="">

    /** @OnlyCurrentDoc */function Header(){  var spreadsheet = SpreadsheetApp.getActive();  var sheet = spreadsheet.getActiveSheet();  sheet.getRange(    spreadsheet.getCurrentCell().getRow(),    1, 1, 10).activate();  spreadsheet.getActiveRangeList().setBackground('#afeeee')  .setFontColor('#191970')/* #ffffff replaced with #191970.*/  .setFontWeight('bold');  spreadsheet.getActiveSheet().setFrozenRows(1);}

</devsite-code>

1.  To save your script, click Save ![save](https://fonts.gstatic.com/s/i/googlematerialicons/save/v6/24px.svg).
2.  From the functions list, select `Header` and click **Run**.

Return to Sheets to see the text color of the header row is now navy blue.

![2eaf2fb4879e1b36.png](/codelabs/apps-script-fundamentals-1/img/2eaf2fb4879e1b36.png)

Now you've seen how macros are actually Sheets actions recorded as Apps Script code. In the next section, you can view another way Apps Script can help you work with Google Sheets: _custom functions_.

</google-codelab-step><google-codelab-step label="Code your first script: Custom functions" duration="15" step="4" tabindex="-1" style="transform: translate3d(0px, 0px, 0px);" selected="">

## [5\. Code your first script: Custom functions](#4)

Like most spreadsheet applications, Google Sheets has several built-in formula functions such as `=SUM()` that enable quick calculations on spreadsheet data. **Custom functions** are simply functions you specify using Apps Script. Once you've defined a custom function, you can use it anywhere in your spreadsheet, just like a built-in function.

This section shows you how to create a custom function in Apps Script that does a monetary conversion.

## Create a script file

Using the same spreadsheet and script project from the Macros section, follow these instructions to learn how to make a new script (which you can eventually use to make your first custom function):

1.  To create an Apps Script file, return to the script editor.
2.  Beside **Files**, click Add a file ![add a file](https://fonts.gstatic.com/s/i/googlematerialicons/add/v7/gm_grey-24dp/1x/gm_add_gm_grey_24dp.png) **> Script**.
3.  Name the new script file `customFunctions` and press **Enter**. (Apps Script automatically appends a `.gs` extension to the script file name.)

A new tab named `customFunctions.gs` appears within the editor.

Now that you've created a script specifically for custom functions, you can fill it with code.

## Convert US dollars to Swiss francs

Suppose you wanted to modify the data for ‘Top 10 Highest Grossing Films 2018' to show not only the worldwide gross values in U.S. dollars but also in Swiss francs. With custom functions, you can do that easily. The following exercise demonstrates how to create a custom function to mathematically convert your dollar values to franc values.

Before you can write your first custom function, modify your dataset to allow the function to demonstrate a proper output. To do this:

1.  In Sheets, right-click **column H**.
2.  In the resulting menu, click **Insert 1 right**.

![fc1421cb1c456e52.gif](/codelabs/apps-script-fundamentals-1/img/fc1421cb1c456e52.gif)

1.  Label the column "Worldwide_Gross (Swiss francs)" in cell **I1**.

Now you have a column that can store the results of your conversion custom function. Next, you can use the script editor to create your first custom function.

1.  In `customFunctions.gs`, replace the code for `myFunction()` with the following code:

<devsite-code data-copy-event-label="" no-copy="">

    /** * Converts US dollars to Swiss francs. * * @param {number} dollars The total number of dollars. * @return {number} swissFrancs The converted total of Swiss francs. * @customfunction */function USDTOCHF(dollars){  var swissFrancs = dollars * .99;   return swissFrancs;}

</devsite-code>

This is the code that will convert U.S. dollars to Swiss francs. Try the instructions below, and see how you can run a custom function in sheets.

1.  To save your script, click Save ![save](https://fonts.gstatic.com/s/i/googlematerialicons/save/v6/24px.svg).
2.  In Sheets, select the **I2** cell.
3.  In the function bar, enter `=USDTOCHF(H2)`.

To apply the formula to the rest of the cells in the column:

1.  Move your cursor to the bottom-right corner of the **I2** cell and select the small blue box (your cursor should transform into ![9c9b0c19bf317e7f.png](/codelabs/apps-script-fundamentals-1/img/9c9b0c19bf317e7f.png) when pointing to the blue box).
2.  Drag the blue box downwards to highlight the range **I3**:**I11**.

![3cf46560d6cea0de.gif](/codelabs/apps-script-fundamentals-1/img/3cf46560d6cea0de.gif)

Column I now lists the Swiss franc conversions of the US dollar values in Column H.

![7fc06b3d7e3e2a9.png](/codelabs/apps-script-fundamentals-1/img/7fc06b3d7e3e2a9.png)

Congrats, you've created your first custom function. The next section explains the code that comprises `USDTOCHF()`.

### Analysis of `USDTOCHF()`

The initial comments detail the code's purpose:

```js
/**
 * Converts US dollars to Swiss francs.
 *
 * @param {number} dollars The total number of dollars.
 * @return {number} swissFrancs The converted total of Swiss francs.
 * @customfunction
 */
function USDTOCHF(dollars){
  var swissFrancs = dollars * .99; 
  return swissFrancs;
}
```

Comment blocks like this are used frequently in programming to explain what functions do.

In this comment, you can identify two parts: the function description (to convert dollars to francs) and annotations that describe the function's parameters and return type.

With the annotations, Apps Script utilizes [JSDoc](https://en.wikipedia.org/wiki/JSDoc) to help you document and create autocomplete hints for your code. You can read below how each annotation used in `USDTOCHF()` helps you with your Apps Script development:

*   `@param`: You can use the `@param` annotation to describe each parameter passed into the function.
*   `@return`: You can utilize the `@return` annotation to describe what the function returns.
*   `@customfunction`: You should always add `@customfunction` in any custom function's doc comment. This annotation notifies Sheets to [autocomplete](https://developers.google.com/apps-script/guides/sheets/functions#autocomplete) your custom function just as Sheets autocompletes [built-in functions](https://support.google.com/docs/answer/46977) when you enter a function name in a cell as seen below:


![](https://developers.google.com/codelabs/apps-script-fundamentals-1/img/d8680ab6efae97ac.gif)

## References

[Fundamentals of Apps Script with Google Sheets #1: Macros & Custom Functions](https://developers.google.com/codelabs/apps-script-fundamentals-1#4)