---
sidebar_label: Useful
description: Useful.
---

# Useful

## FLV to MP4

```
ffmpeg -i input.flv -codec copy output.mp4
```
https://superuser.com/a/727081


## Join / Concanternate multiple video files (mp4, avi) using FFMPEG

Create a file `mylist.txt` with all the files you want to have concatenated in the following form (lines starting with a `#` are ignored):

```
# this is a comment
file '/path/to/file1.wav'
file '/path/to/file2.wav'
file '/path/to/file3.wav'
```

Note that these can be either relative or absolute paths. Then you can [stream copy](https://ffmpeg.org/ffmpeg.html#Stream-copy) or re-encode your files:

```
ffmpeg -f concat -safe 0 -i mylist.txt -c copy output.wav
```

The -safe 0 above is not required if the paths are relative.

#### Automatically generating the input file

It is possible to generate this list file with a bash for loop, or using `printf`. **Either** of the following would generate a list file containing every *.wav in the working directory:

``` 
# with a bash for loop
for f in *.wav; do echo "file '$f'" >> mylist.txt; done
# or with printf
printf "file '%s'\n" *.wav > mylist.txt
```
On Windows Command-line:

``` 
(for %i in (*.wav) do @echo file '%i') > mylist.txt
```

Source: https://trac.ffmpeg.org/wiki/Concatenate



## Create legit email without name and fast

Use seznam.cz

## slugify file names

Shell script:

Use: sh slugifybulk.sh

Name: slugifybulk.sh
```

#!/bin/sh
i=0;
for file in *.md; 
do 
i=$((i+1));

sh slugifyshell.sh -vidcau "$file"

done

```
Shell script:

Use: sh slugifyshell.sh -vidcau "07 Ghost.md"

Name: slugifyshell.sh
``` 
#!/usr/bin/env bash
#: Name        : slugify
#: Date        : 2012-05-01
#: Author      : "Benjamin Linton" <developer@benlinton.com>
#: Version     : 1.0.1
#: Description : Convert filenames into a web friendly format.
#: Options     : See print_usage() function.

## Initialize defaults
script_name=${0##*/}
dashes_omit_adjacent_spaces=0
consolidate_spaces=0
space_replace_char='_'
ignore_case=0
dry_run=0
dashes_to_spaces=0
underscores_to_spaces=0
verbose=0

## Initialize valid options
opt_string=acdhintuv

## Usage function
function print_usage(){
  echo "usage: $script_name [-$opt_string] source_file ..."
  echo "   -a: remove spaces immediately adjacent to dashes"
  echo "   -c: consolidate consecutive spaces into single space"
  echo "   -d: replace spaces with dashes (instead of default underscores)"
  echo "   -h: help"
  echo "   -i: ignore case"
  echo "   -n: dry run"
  echo "   -t: treat existing dashes as spaces"
  echo "   -u: treat existing underscores as spaces (useful with -a, -c, or -d)"
  echo "   -v: verbose"
}

## For each provided option arg
while getopts $opt_string opt
do
  case $opt in
    a) dashes_omit_adjacent_spaces=1 ;;
    c) consolidate_spaces=1 ;;
    d) space_replace_char='-' ;;
    h) print_usage; exit 0 ;;
    i) ignore_case=1 ;;
    n) dry_run=1 ;;
    t) dashes_to_spaces=1 ;;
    u) underscores_to_spaces=1 ;;
    v) verbose=1 ;;
    *) exit 1 ;;
  esac
done

## Remove options from args
shift "$(( $OPTIND - 1 ))"

## Unless source_file arg(s) found, print usage and exit (0 to avoid breaking pipes)
if [[ ! -n "$1" ]]; then
  print_usage
  exit 0
fi

## Identify case insensitive filesystems
case_sensitive_filesystem=1
case $OSTYPE in
  darwin*) case_sensitive_filesystem=0 ;; # OS X
  *) ;; # Do nothing
esac

## Notify if in dry_run mode
if [ $dry_run -eq 1 ]; then
  echo "--- Begin dry run mode."
fi

## For each file, directory, or glob
for source in "$@"; do

  ## Verify source exists
  if [ ! -e "$source" ]; then
    echo "not found: $source"
    ## Skip to next loop iteration unless in dry run mode
    if [ $dry_run -eq 0 ]; then
      continue
    fi
  fi

  ## Initialize target
  target="$source"

  ## Optionally convert to lowercase
  if [ $ignore_case -eq 0 ]; then
    target=$(echo "$target" | tr A-Z a-z )
  fi

  ## Optionally convert existing underscores to spaces
  if [ $underscores_to_spaces -eq 1 ]; then
    target=$(echo "$target" | tr _ ' ')
  fi

  ## Optionally convert existing dashes to spaces
  if [ $dashes_to_spaces -eq 1 ]; then
    target=$(echo "$target" | tr - ' ')
  fi

  ## Optionaly consolidate spaces
  if [ $consolidate_spaces -eq 1 ]; then
    target=$(echo "$target" | tr -s ' ')
  fi

  ## Optionally remove spaces immediately adjacent to dashes
  if [ $dashes_omit_adjacent_spaces -eq 1 ]; then
    target=$(echo "$target" | sed 's/\- /-/')
    target=$(echo "$target" | sed 's/ \-/-/')
  fi

  ## Replace spaces with underscores or dashes
  target=$(echo "$target" | tr ' ' "$space_replace_char")

  ## Handle moving the source to target
  if [ "$target" == "$source" ]; then
    ## If filename hasn't changed, skip move
    ## Print if verbose is true
    if [ $verbose -eq 1 ]; then
      echo "ignore: $source"
    fi
  elif [ -e "$target" -a $case_sensitive_filesystem -eq 1 ]; then
    ## If conflicts with existing filename, skip move and complain
    echo "conflict: $source"
  else
    ## If move is legal
    ## Skip move if dry_run is true
    if [ $dry_run -eq 0 ]; then
      mv "$source" "$target"
    fi
    ## Print if verbose or dry_run is true
    if [ $verbose -eq 1 -o $dry_run -eq 1 ]; then
      echo "rename: $source -> $target"
    fi
  fi

done

## Notify if in dry_run mode
if [ $dry_run -eq 1 ]; then
  echo "--- End dry run mode."
fi
```

Source: https://github.com/benlinton/slugify

## json to markdown table

shell script:

``` 
#!/bin/sh
i=0;
for file in *.json; 
do 
i=$((i+1));
cat "$file" | md-table >> "${file%.json}.md"
done
```

Source: https://github.com/raine/markdown-table-cli

## Use ctrl + space to select entire column

Source: https://www.exceltip.com/excel-keyboard-shortcuts/selecting-a-columns-or-rows-using-keyboard-shortcuts.html

## Excel xlsx to csv 

```
#!/bin/sh
i=0;
for file in *.xlsx; 
do 
i=$((i+1));
in2csv "$file" > "${file%.xlsx}.csv" | tail -n +2
done

```

or

to remove the first line (header row) from csv

``` 
#!/bin/sh
i=0;
for file in *.xlsx; 
do 
i=$((i+1));
in2csv "$file" | sed 1d > "${file%.xlsx}.csv"
done
```

Source: https://stackoverflow.com/questions/5256733/convert-xlsx-file-to-csv-using-batch

## Sorting reddit r/memes by flair with a full card view

https://www.reddit.com/r/memes/?f=flair_name%3A%22%232%20MotW

https://www.reddit.com/r/memes/?f=flair_name%3A%22%233%20MotW%22

https://www.reddit.com/r/memes/?f=flair_name%3A%22%232%20MotW%22

## How to save each sheet in excel into seperate excel files?

This following code will export every visible worksheet in a new workbook and save the workbook with the name of the original sheet in a newly created folder in the same path as the active workbook. Please do as following steps:

Step 1: Hold down the **ALT + F11** keys, and it opens the **Microsoft Visual Basic for Applications** window.

Step 2: Click **Insert** > **Module**, and paste the following macro in the Module Window:

**VBA : Export and save worksheets as new workbook in a new folder.**

``` 
Sub SplitWorkbook()
'Updateby20200806
Dim FileExtStr As String
Dim FileFormatNum As Long
Dim xWs As Worksheet
Dim xWb As Workbook
Dim xNWb As Workbook
Dim FolderName As String
Application.ScreenUpdating = False
Set xWb = Application.ThisWorkbook
 
DateString = Format(Now, "yyyy-mm-dd hh-mm-ss")
FolderName = xWb.Path & "\" & xWb.Name & " " & DateString
 
If Val(Application.Version) < 12 Then
    FileExtStr = ".xls": FileFormatNum = -4143
Else
    Select Case xWb.FileFormat
        Case 51:
            FileExtStr = ".xlsx": FileFormatNum = 51
        Case 52:
            If Application.ActiveWorkbook.HasVBProject Then
                FileExtStr = ".xlsm": FileFormatNum = 52
            Else
                FileExtStr = ".xlsx": FileFormatNum = 51
            End If
        Case 56:
            FileExtStr = ".xls": FileFormatNum = 56
        Case Else:
            FileExtStr = ".xlsb": FileFormatNum = 50
        End Select
End If
 
MkDir FolderName
 
For Each xWs In xWb.Worksheets
On Error GoTo NErro
    If xWs.Visible = xlSheetVisible Then
    xWs.Select
    xWs.Copy
    xFile = FolderName & "\" & xWs.Name & FileExtStr
    Set xNWb = Application.Workbooks.Item(Application.Workbooks.Count)
    xNWb.SaveAs xFile, FileFormat:=FileFormatNum
    xNWb.Close False, xFile
    End If
NErro:
    xWb.Activate
Next
 
    MsgBox "You can find the files in " & FolderName
    Application.ScreenUpdating = True
End Sub
```
Step 3: Press the **F5** key to run this code. And a prompt box will pop up to tell you the location of the new exported workbooks, and all of the worksheets of the original workbook have been exported to some new separate workbooks which named original sheets in a new specific folder. See screenshots:

Source: https://www.extendoffice.com/documents/excel/785-excel-save-export-sheet-as-new-workbook.html

## How To Split Data Into Multiple Worksheets Based On Column In Excel?

STEPS:

```
in	anime	col	
1	we	vvv	
2	werwer	cxxcv	
3	we	bngf	
4	gf	dfg	
5	gf	cbv	

```

1. When first header pops up, choose all the headers.
2. When second pop up shows, choose from the header of column to the cell you like of that column.





If you want to split the data based on column value quickly and automatically, the following VBA code is a good choice. Please do as this:

1. Hold down the ALT + F11 keys to open the Microsoft Visual Basic for Applications window.

2. Click Insert > Module, and paste the following code in the Module Window.

```
Sub Splitdatabycol()
'updateby Extendoffice
Dim lr As Long
Dim ws As Worksheet
Dim vcol, i As Integer
Dim icol As Long
Dim myarr As Variant
Dim title As String
Dim titlerow As Integer
Dim xTRg As Range
Dim xVRg As Range
Dim xWSTRg As Worksheet
On Error Resume Next
Set xTRg = Application.InputBox("Please select the header rows:", "Kutools for Excel", "", Type:=8)
If TypeName(xTRg) = "Nothing" Then Exit Sub
Set xVRg = Application.InputBox("Please select the column you want to split data based on:", "Kutools for Excel", "", Type:=8)
If TypeName(xVRg) = "Nothing" Then Exit Sub
vcol = xVRg.Column
Set ws = xTRg.Worksheet
lr = ws.Cells(ws.Rows.Count, vcol).End(xlUp).Row
title = xTRg.AddressLocal
titlerow = xTRg.Cells(1).Row
icol = ws.Columns.Count
ws.Cells(1, icol) = "Unique"
Application.DisplayAlerts = False
If Not Evaluate("=ISREF('xTRgWs_Sheet!A1')") Then
Sheets.Add(after:=Worksheets(Worksheets.Count)).Name = "xTRgWs_Sheet"
Else
Sheets("xTRgWs_Sheet").Delete
Sheets.Add(after:=Worksheets(Worksheets.Count)).Name = "xTRgWs_Sheet"
End If
Set xWSTRg = Sheets("xTRgWs_Sheet")
xTRg.Copy
xWSTRg.Paste Destination:=xWSTRg.Range("A1")
ws.Activate
For i = (titlerow + xTRg.Rows.Count) To lr
On Error Resume Next
If ws.Cells(i, vcol) <> "" And Application.WorksheetFunction.Match(ws.Cells(i, vcol), ws.Columns(icol), 0) = 0 Then
ws.Cells(ws.Rows.Count, icol).End(xlUp).Offset(1) = ws.Cells(i, vcol)
End If
Next
myarr = Application.WorksheetFunction.Transpose(ws.Columns(icol).SpecialCells(xlCellTypeConstants))
ws.Columns(icol).Clear
For i = 2 To UBound(myarr)
ws.Range(title).AutoFilter field:=vcol, Criteria1:=myarr(i) & ""
If Not Evaluate("=ISREF('" & myarr(i) & "'!A1)") Then
Sheets.Add(after:=Worksheets(Worksheets.Count)).Name = myarr(i) & ""
Else
Sheets(myarr(i) & "").Move after:=Worksheets(Worksheets.Count)
End If
xWSTRg.Range(title).Copy
Sheets(myarr(i) & "").Paste Destination:=Sheets(myarr(i) & "").Range("A1")
ws.Range("A" & (titlerow + xTRg.Rows.Count) & ":A" & lr).EntireRow.Copy Sheets(myarr(i) & "").Range("A" & (titlerow + xTRg.Rows.Count))
Sheets(myarr(i) & "").Columns.AutoFit
Next
xWSTRg.Delete
ws.AutoFilterMode = False
ws.Activate
Application.DisplayAlerts = True
End Sub

```
3. Then, press F5 key to run the code, and a prompt box is popped out to remind you select the header row, see screenshot:

4. And then, click OK button, and in the second prompt box, please select the column data that you want to split based on, see screenshot:

5. Then, click OK, and all data in the active worksheet is split into multiple worksheets by the column value. And the split worksheets are named with the split cell names. See screenshot:


Source: https://www.extendoffice.com/documents/excel/1174-excel-split-data-into-multiple-worksheets-based-on-column.html

## How to download pluralsight videos with youtube-dl

``` 
youtube-dl --username "ipponpx@gmail.com" --password "A123123z" -o "%(playlist)s/%(chapter_number)s - %(chapter)s/%(playlist_index)s - %(title)s.%(ext)s" --sleep-interval 60 "https://app.pluralsight.com/library/courses/improving-testing-refactoring-legacy-android-app" --playlist-start 1
```

or

```
youtube-dl --username "jiayounokim@gmail.com" --password "A123456z" --verbose --sleep-interval 10 "https://app.pluralsight.com/library/courses/how-git-works/"

```

Not completely sure about sleep=interval timing recommedation.

NOTE: the above command does not work on CMDER cmd but works on windows terminal ubuntu as tested.

## Tip to view the local PDF files in dark mode or inverse the color when viewing in the web browser

Create a bookmarklet or paste the code in the console.

To open the console, right-click on the page and select "inspect". In the console window or tab, paste the below code.

    javascript:(function(){var cover=document.createElement("div");let css="position: fixed;\npointer-events: none;\ntop: 0;\nleft: 0;\nwidth: 100vw;\nheight: 100vh;\nbackground-color: white;\nmix-blend-mode: difference;\nz-index: 1;";cover.setAttribute("style", css);document.body.appendChild(cover);})(); 

A more readable version of the above code:

    var cover = document.createElement("div");
    
    let css = \`
    
    position: fixed;
    
    pointer-events: none;
    
    top: 0;
    
    left: 0;
    
    width: 100vw;
    
    height: 100vh;
    
    background-color: white;
    
    mix-blend-mode: difference;
    
    z-index: 1;
    
    \`
    
    cover.setAttribute("style", css);
    
    document.body.appendChild(cover);

  Source: https://superuser.com/questions/1527410/how-can-i-preview-pdfs-with-google-chrome-in-dark-mode/1527417

## How can I extract audio from video with ffmpeg?

To encode a high quality MP3 or MP4 audio from a movie file (eg AVI, MP4, MOV, etc), I find it's best to use `-q:a 0` for variable bit rate and it's good practice to specify `-map a` to exclude video/subtitles and only grab audio:

    ffmpeg -i sample.avi -q:a 0 -map a sample.mp3

If you want to **extract a portion of audio from a video** use the `-ss` option to specify the starting timestamp, and the `-t` option to specify the encoding duration, eg from 3 minutes and 5 seconds in for 45 seconds:

    ffmpeg -i sample.avi -ss 00:03:05 -t 00:00:45.0 -q:a 0 -map a sample.mp3

*   The timestamps need to be in HH:MM:SS.xxx format or in seconds.

*   If you don't specify the **-t** option it will go to the end.

*   You can use the **-to** option instead of the **-t** option, if you want to specify the range, eg for 45 seconds: `00:03:05 + 45 = 00:03:50`

Source: https://stackoverflow.com/questions/9913032/how-can-i-extract-audio-from-video-with-ffmpeggit 

## Enable code snippets auto completion VSCode

In settings json of VSCode, add:

```json

"[markdown]": {
    "editor.quickSuggestions": {
      "other": true,
      "comments": false,
      "strings": true
    },
  },
    
```

Source: https://stackoverflow.com/a/45910856



## When IDM shows error for protected streams content, USE XDM

Source: https://github.com/subhra74/xdm

## Use outline.com to bypass Zhihu blocking translation extensions on Edge or Chrome

Source: https://outline.com/

## How to create a shell script to generate file with some content already

```
#!/bin/bash

var="your text"
echo "simply put,
just so: $var" > a.config

```

Source: https://stackoverflow.com/a/4879079/14200887

## Generate Table of Contents in Markdown automatically

```
pandoc -f gfm --toc -s README.md -o r.md
```
Source: https://superuser.com/questions/909755/generate-table-of-contents-with-links-for-github-markdown-with-pandoc

or

```
doctoc README.md
```

Source: https://github.com/thlorenz/doctoc 

## How to clone specific branch with git?

```
git clone -b solution https://github.com/googlecodelabs/android-hilt

```

## How To record in 1:1 Ratio in OBS

Since my screen resolution is 1920x1080

Change base and canvas size to 1080x1080 in Settings -> Video.

Done.

## How to clone github repo without creating additional layer or give a folder name?

To not create additional url, notice the dot (.):
```
git clone <url> .
```

To give a different folder name:

```
git clone <url> foldername
```

https://stackoverflow.com/questions/8570636/change-name-of-folder-when-cloning-from-github

## How to find unique occurences of an email and list their count in a text file?

### Solution is based on the position of the email

For example, input text file:

```
example 1 dummy text hello@google.com
something ex 43 hello@google.com
dummy 323 your@sony.com
stub 23 nice@google.com
```

Run: 

```
cut -d ' ' -f 3 your_file | sort | uniq -c

```

### Solution is based on the regex

For example, input text file:

```
example 1 dummy text hello@google.com
something asd sad ex 43 hello@google.com
your@sony.com
stub 23 nice@google.com
```

Run:

```
egrep -o '\S+@\S+' input.txt | sort | uniq -c
```

## How to download AOSP source code?

Total size, master branch as of 8th March: 115GB 

Install Repo:

https://source.android.com/setup/develop#installing-repo


Then I navigated to the working directory `aospall` to download the source there as it had sufficient space,


Run `repo init` to get the latest version of Repo with its most recent bug fixes. You must specify a URL for the manifest, which specifies where the various repositories included in the Android source are placed within your working directory.

To check out the master branch:

```
tyto@DESKTOP-3BHGFNH:/mnt/o/aospall$ repo init -u https://android.googlesource.com/platform/manifest -b master
```

To download the Android source tree to your working directory from the repositories as specified in the default manifest, run:

To speed syncs, instead pass the `-c` (current branch) and `-j<var translate="no">threadcount</var>` flags:

```
tyto@DESKTOP-3BHGFNH:/mnt/o/aospall$ repo sync -c --no-tags --no-clone-bundle -j4

```

## Scrape Data from less-real.com using Python

```python

import requests
from requests import get
from bs4 import BeautifulSoup
import pandas as pd
import numpy as np

from time import sleep
# from random import randint
from tqdm import tqdm

headers = {"Accept-Language": "en-US,en;q=0.5"}

animes = []
characters = []
quotes = []

pages = np.arange(1, 443, 1)

for page in tqdm(range(443)):

  page = requests.get("https://www.less-real.com/?p=" + str(page), headers=headers)

  soup = BeautifulSoup(page.text, 'html.parser')
  quote_div = soup.find_all('div', class_='quote')

  for items in quote_div:

        # Anime
        anime = items.find(class_="quoteAnime").text
        animes.append(anime)

        # Character
        character = items.a.text
        characters.append(character)

        # Quote
        quote = items.find('span', class_="quoteText").text
        quotes.append(quote)

data = {
	'Anime': animes,
	'Character': characters,
	'Quote': quotes,
}

df = pd.DataFrame(data)

df.to_csv('less-real_data.csv')

```

## CSV to JSON

```
npm i -g csvtojson

```

```
csvtojson source.csv > converted.json

```

or shell script

``` 
#!/bin/sh
i=0;
for file in *.csv; 
do 
i=$((i+1));
csvtojson "$file" > "${file%.csv}.json"
done
```

https://github.com/Keyang/node-csvtojson

## Download Douyin videos with Python

In conf.ini file:

For single video download add the video url like this: https://v.douyin.com/eddBBuA/

For multi download from user profile, add the user url like this: https://v.douyin.com/edRAdxt/

When running the script make sure, to add urls of this format: `https://www.iesdouyin.com/share/video/6935804194435632414/?region=IN&mid=6889745269757332237&u_code=11j3dhm7c79m&titleType=title&did=2656064572777960&iid=1547756852750061&app=aweme` in input prompt.

https://github.com/Johnserf-Seed/TikTokDownload

### For downloading collection type videos like this:

```
https://www.iesdouyin.com/share/music/6536362398318922509?app=aweme&iid=30337873848
```

Add above url in `share-url.txt`

https://github.com/loadchange/amemv-crawler

In the above repo make sure to replace:

```
"accept-encoding": "gzip, deflate, br",

```

with this:

```
"accept-encoding": "gzip, deflate",

```

Run it.

## Save output to file from code in Python

```python

import sys

print('This message will be displayed on the screen.')

original_stdout = sys.stdout # Save a reference to the original standard output

with open('filename.txt', 'w', encoding="utf-8") as f:
    sys.stdout = f # Change the standard output to the file we created.
    print(b'\nGoogle \xed\x95\x9c\xea\xb5\xad \xeb\xb8\x94\xeb\xa1\x9c\xea\xb7\xb8\n'.decode('utf-8'))
    print('This message will be written to a file.')
    sys.stdout = original_stdout 
```

EDITED: `encoding`

OR better real example:

```python

from urllib.request import Request, urlopen
import argparse

from bs4 import BeautifulSoup

parser = argparse.ArgumentParser()
parser.add_argument('-i',           help='path of input json')
parser.add_argument('-o',           help='path of output json')

def main(i, o):

    with open(i) as f, open(o, 'wb') as outputfile:
        for website in f.readlines():
            req = Request(website, headers={'User-Agent': 'Mozilla/5.0'})
            soup = BeautifulSoup(urlopen(req).read())
            print(soup.title.string)

            outputfile.write(soup.title.string.encode('utf8'))
        outputfile.close()

if __name__ == '__main__':
  args = parser.parse_args()
  main(args.i, args.o)


```

Source: [Writing to a File with Python's print() Function](https://stackabuse.com/writing-to-a-file-with-pythons-print-function/)

## How to get Webpage Title from the list of httpe urls from a txt file in bulk?

### Python WITH browser agent

#### BEST ONE

```python

from urllib.request import Request, urlopen
import argparse

from bs4 import BeautifulSoup

parser = argparse.ArgumentParser()
parser.add_argument('-i',           help='path of input json')
parser.add_argument('-o',           help='path of output json')

def main(i, o):
    with open(i) as f, open(o, 'wb') as outputfile:
        for website in f.readlines():
            req = Request(website, headers={'User-Agent': 'Mozilla/5.0'})
            soup = BeautifulSoup(urlopen(req).read())
            print(soup.title.string)
            outputfile.write(soup.title.string.encode('utf8'))
        outputfile.close()

if __name__ == '__main__':
  args = parser.parse_args()
  main(args.i, args.o)


```


#### Encoding issues

```python

from urllib.request import Request, urlopen
import argparse

from bs4 import BeautifulSoup

parser = argparse.ArgumentParser()
parser.add_argument('-i',           help='path of input json')
parser.add_argument('-o',           help='path of output json')

def main(i, o):
    with open(i, encoding='utf-8') as f:
        for website in f.readlines():
            req = Request(website, headers={'User-Agent': 'Mozilla/5.0'})
            soup = BeautifulSoup(urlopen(req).read())
            print(soup.title.string.encode("utf-8"))

if __name__ == '__main__':
  args = parser.parse_args()
  main(args.i, args.o)

```

OR

### Python WITHOUT browser user agent (blocked by certain sites)

Example: for this url `https://book.pythontips.com/en/latest/context_managers.html` it would give error: `urllib.error.HTTPError: HTTP Error 403: Forbidden`

```python

from urllib.request import urlopen
import argparse

from bs4 import BeautifulSoup

parser = argparse.ArgumentParser()
parser.add_argument('-i',           help='path of input json')
parser.add_argument('-o',           help='path of output json')

def main(i, o):
    with open(i) as f:
        for website in f.readlines():
            soup = BeautifulSoup(urlopen(website))
            print(soup.title.string)

if __name__ == '__main__':
  args = parser.parse_args()
  main(args.i, args.o)


```

Run: `python urltitle.py -i inputfile.html 2>&1 | tee title.html`

Source: https://stackoverflow.com/a/16627277/14200887

### Ruby

```

require 'open-uri'

while url = gets&.chomp
  html = URI.open(url).read
  title = html[/<title>([^<]+)</, 1]
  puts title
end

```

Run: `ruby foo.rb < urlfile`

## How to find subdomains and check for broken links?

Make a search of subdomains and export the data to a custom output file name:

```
findomain -t example.com -u example.txt

```

Upload this links as href in the github pages for example:

Install https://github.com/stevenvachon/broken-link-checker

```
blc http://username.github.io/githubrepo -ro
```

Source: 

https://github.com/Findomain/Findomain

https://github.com/stevenvachon/broken-link-checker

## List files recursively showing only full path

```

dir /b /s /a:-D > results.txt

```

Source: https://superuser.com/questions/653860/list-files-recursively-showing-only-full-path-and-file-size-from-windows-command

## How to rename Git/GitHub folder?

Basic rename (or move):

```
git mv <old name> <new name>

```

Case sensitive rename—eg. from `casesensitive` to `CaseSensitive`—you must use a two step:

```
git mv casesensitive tmp
git mv tmp CaseSensitive

```
([More about case sensitivity in Git…](https://stackoverflow.com/a/17688308/101290))

…followed by commit and push would be the simplest way to rename a directory in a git repo.

Source: https://stackoverflow.com/a/11183844/14200887

## FFMPEG resize video to 1:1 aspect ratio for example instagram or any size

```

ffmpeg -i trailer_1080p.mov -vf "scale=720:720:force_original_aspect_ratio=decrease,pad=720:720:(ow-iw)/2:(oh-ih)/2:black" video.mp4

```

The `force_original_aspect_ratio` in the scale 'fits' the video within the dimensions specified. The pad then expands the canvas to get the size desired.

Source: 

[FFmpeg commands for Social Media Basic Video Editing | by Jorge Rodríguez Araújo | Abraia | Medium](https://medium.com/abraia/basic-video-editing-for-social-media-with-ffmpeg-commands-1e873801659)

[linux - FFMPEG scale video to 720px, add black fields at the top and bottom and output 720x1280 (portrait) - Super User](https://superuser.com/questions/1271758/ffmpeg-scale-video-to-720px-add-black-fields-at-the-top-and-bottom-and-output-7)

## FFMPEG gif to mp4

```

ffmpeg -i i.gif -movflags faststart -pix_fmt yuv420p -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" video.mp4

```

**movflags** – This option optimizes the structure of the MP4 file so the browser can load it as quickly as possible.

**pix_fmt** – MP4 videos store pixels in different formats. We include this option to specify a specific format which has maximum compatibility across all browsers.

**vf** – MP4 videos using H.264 need to have a dimensions that are divisible by 2\. This option ensures that’s the case.

Source: [video - How to do I convert an animated gif to an mp4 or mv4 on the command line? - Unix & Linux Stack Exchange](https://unix.stackexchange.com/questions/40638/how-to-do-i-convert-an-animated-gif-to-an-mp4-or-mv4-on-the-command-line)

## Json to Html converter

With Encoding utf-8 Support and input files by argument CLI support:

### Encode UTF-8 support

```

encoding='utf-8'

```

```
.encode("utf-8")

```

https://stackoverflow.com/a/27093194/14200887

Example:

```python

import argparse
import json

from json2html import *

parser = argparse.ArgumentParser()
parser.add_argument('-i',           help='path of input json')
parser.add_argument('-o',           help='path of output json')

def main(i, o):
    data = json.load(open(i, encoding='utf-8'))
    print(json2html.convert(json = data).encode("utf-8"))



if __name__ == '__main__':
  args = parser.parse_args()
  main(args.i, args.o)

```

Run: 

```
python jsonhtml.py -i "JakeWharton_since_until_2010_2011.json" 2>&1 | tee 2010_2011.html 

```

https://github.com/softvar/json2html

```

pip install json2html

```

```

from json2html import *
input = {
        "name": "json2html",
        "description": "Converts JSON to HTML tabular representation"
}
print(json2html.convert(json = input))

```

```
python jsontohtml.py 2>&1 | tee SomeFile.md

```

## Download Youtube playlist with numbered title in mp4

```

youtube-dl --all-subs -o "%(playlist_index)s-%(title)s.%(ext)s" -i -f mp4 --yes-playlist "https://www.youtube.com/watch?v=zqHPE7Tib-c&list=PLgCYzUzKIBE_I0_tU5TvkfQpnmrP_9XV8"

```

Source:

https://stackoverflow.com/questions/48422377/youtube-downloading-a-playlist-youtube-dl


https://askubuntu.com/questions/694848/how-to-download-a-youtube-playlist-with-numbered-prefix-via-youtube-dl


## Download Oreilly video courses in bulk using youtube-dl

```

λ youtube-dl -u iudragon32@gmail.com -p A123123z https://learning.oreilly.com/videos/kotlin-design-patterns/9781839213021

```

Source: [ytdl-org/youtube-dl: Command-line program to download videos from YouTube.com and other video sites](https://github.com/ytdl-org/youtube-dl)

## How do I save terminal output to a file?

```
SomeCommand 2>&1 | tee SomeFile.txt

```

Source: https://askubuntu.com/questions/420981/how-do-i-save-terminal-output-to-a-file

## Merge / convert multiple PDF files into one PDF

In Windows WSL Ubuntu terminal:

```
pdftk file1.pdf file2.pdf cat output output.pdf

```

Source: https://stackoverflow.com/a/2507825/14200887

## How to filter out Json nodes?

Python code:

```python

import argparse
import json

parser = argparse.ArgumentParser()
parser.add_argument('-i',           help='path of input json')
parser.add_argument('-o',           help='path of output json')

def main(i, o):
    data = json.load(open(i, encoding='utf-8'))
    new_data = {'items': []}
    new_data['items'] = [{'created_at': item['created_at'], 'tweet': item['tweet'], 'link': item['link'], 'likes_count': item['likes_count'], 'retweets_count': item['retweets_count'], 'replies_count': item['replies_count'], 'quote_url': item['quote_url'], 'reply_to': item['reply_to'], 'mentions': item['mentions'], 'urls': item['urls'], 'photos': item['photos']} for item in data['items']]
    json.dump(new_data, open(o, 'w'), indent=2)
    print('done')


if __name__ == '__main__':
  args = parser.parse_args()
  main(args.i, args.o)
  
 ```
Run: `python meltz.py -i input_file.json -o output_file.json`

Javascript code:

```js

var obj = {
    'homes': [{
            "home_id": "1",
            "price": "925",
            "sqft": "1100",
            "num_of_beds": "2",
            "num_of_baths": "2.0",
        }, {
            "home_id": "2",
            "price": "1425",
            "sqft": "1900",
            "num_of_beds": "4",
            "num_of_baths": "2.5",
        },
        // ... (more homes) ...     
    ]
};
// (Note that because `price` and such are given as strings in your object,
// the below relies on the fact that <= and >= with a string and number
// will coerce the string to a number before comparing.)
var newArray = obj.homes.filter(function (el) {
  return el.price <= 1000 &&
         el.sqft >= 500 &&
         el.num_of_beds >= 2 &&
         el.num_of_baths >= 1.5; // Changed this so a home would match
});
console.log(newArray);

```

Run here: https://jsfiddle.net/ or https://jsconsole.com/

Source: https://stackoverflow.com/a/2722213/13621090

## Add a Javacript bookmarklet in Chrome/Edge Chromium browser

Usecase: Perform Javascript actions on a webpage with a click!

**Steps**

Create a bookmark/favorite

In the URL field, add your javascript code: `javascript:location.hostname="github1s.com"`

or with `if` block: 

```
javascript:if(location.hostname.includes('github')){location.hostname=`github${location.hostname === 'github.com' ? '1s' : ''}.com`}

```

or without `if` block which when not on GitHub (like we are on google.com), it will just go straight to github.com: 

```
javascript:/^github(?:1s)?\.com$/.test(location.hostname) ? location.hostname = `github${location.hostname === 'github.com' ? '1s' : ''}.com` : location.href = 'https://github.com'

```

Make sure "show your bookmark/favorite" option is on.

Click on the bookmarklet and done!

For adding custom favicon to bookmarklet, read below:

**NOTE**: Use a small size image under 128x128 as its just a favicon, this will ensure your base64 string is not very long!

You have to export your Bookmarks, edit the HTML file and import it again. It sounds way more complicated than it is, and it's a clean solution since Chrome puts all of your re-imported bookmarks into a separate "Imported" folder which you can delete after the changes are applied.

Step by step guide:

1.  Open the Bookmark Manager and export your bookmarks.
2.  Open the exported HTML file in your favorite editor and look for the bookmarklet you want a favicon applied to.
3.  Encode the 16×16px favicon you want to use as Base64 (there are a lot of free online converters out there, or see the link below for commandline instructions). Remove any linebreaks in the output; it needs to be one long line.
4.  Prepend a "data" prefix to the Base64 blob that is appropriate for the type of favicon you used; e.g `data:image/vnd.microsoft.icon;base64,` for `.ico` files, and `data:image/png;base64,` for `.png` files.
5.  Now add an `ICON` attribute to the link to hold the prefixed Base64 blob; for example: `ICON="data:image/png;base64,iVBORw0K………5ErkJggg=="`.
6.  Save the file and import it back into the bookmark manager. A folder called "Imported" will be created; however, the favicon should be applied to the original bookmarklet immediately, so you you can immediately delete the new "Imported" folder. If the icon doesn't show up immediately, try clicking on the bookmarklet.

Image to Base64:

https://codebeautify.org/image-to-base64-converter

https://dataurl.app/

See also: 

https://www.reddit.com/r/programming/comments/lfpngg/explore_github_source_code_right_on_the_web/gmoatai?utm_source=share&utm_medium=web2x&context=3

[JavaScript Bookmarklets Tutorial - How to create bookmarklet, amend DOM to add HTML links to page - YouTube](https://www.youtube.com/watch?v=M4NnLlffh2w&t=338s)


## JSONPath Evaluator

- https://jsonpath.com/

- https://github.com/json-path/JsonPath

- http://jsonpath.herokuapp.com/?path=$.store.book[*].author

> `$.items[:].snippet.resourceId.videoId` for `https://www.googleapis.com/youtube/v3/playlistItems?pageToken=CJYBEAA&playlistId=PLtAw-mgfCzRwduBTjBHknz5U4_ZM4n6qm&key=AIzaSyBdMj0XVaRaPX4-uPcsMu_IhSxvo1A-KRE&part=contentDetails&maxResults=5000`


## Find IP address information and location from Command line

```

curl ipinfo.io

```

## Cutting the videos based on start and end time using ffmpeg

### ACCURATE


```

# Trim from 00:02:54.583 to end of file
ffmpeg -i input.mp3 -ss 00:02:54.583 -acodec copy output.mp3
 
# Trim from 00:02:54.583 for 5 minutes
ffmpeg -i input.mp3 -ss 00:02:54.583 -t 300 -acodec copy output.mp3

```

Source:

https://snipplr.com/view/68795/ffmpeg--trim-audio-file-without-reencoding

https://stackoverflow.com/a/25981387/14200887

### NOT ACCURATE

For starting time specified to end of the video.

```

ffmpeg -ss 00:01:00 -i input.mp4 -c copy output.mp4

```

For starting time specified to end time specified.

```

ffmpeg -ss 00:01:00 -i input.mp4 -to 00:02:00 -c copy output.mp4

```

-i: This specifies the input file. In that case, it is (input.mp4).
-ss: Used with -i, this seeks in the input file (input.mp4) to position.
00:01:00: This is the time your trimmed video will start with.
-to: This specifies duration from start (00:01:40) to end (00:02:12).
00:02:00: This is the time your trimmed video will end with.
-c copy: This is an option to trim via stream copy. (NB: Very fast)

Note:

`-t` will extract the specified duration from the starting.
`to` specifies duration from start (00:01:40) to end (00:02:12).

See also: 

https://trac.ffmpeg.org/wiki/Seeking

https://www.arj.no/2018/05/18/trimvideo/

Source: https://stackoverflow.com/a/42827058

## How to get RSS feed for podcast?

**Steps**

Go to https://www.listennotes.com/

Search podcast and click on RSS button

Source: [Listen Notes: The best podcast search engine](https://www.listennotes.com/)

## How to bulk download podcast?

```

PodcastBulkDownloaderCLI.exe -f "G:\Musique\RadioKawa\Ta Gueule" --url https://feeds.radiokawa.com/podcast_ta-gueule.xml

```

Source: [cnovel/PodcastBulkDownloader: Simple software for downloading podcasts](https://github.com/cnovel/PodcastBulkDownloader)

## YouTube compatible, mp3 to mp4 using FFMPEG

```

ffmpeg -r 1 -loop 1 -y -i 1.jpg -i 1.m4a -c:a copy -r 1 -vcodec libx264 -shortest 1.avi

```

or

bash script

```

#!/bin/sh
i=0;
for file in *.mp3; 
do 
i=$((i+1));
ffmpeg -r 1 -loop 1 -y -i image.png -i "$file" -c:a copy -r 1 -vcodec libx264 -shortest "$file.mp4"
done

```

See also: [Slideshow – FFmpeg](https://trac.ffmpeg.org/wiki/Slideshow)

Source: Comment underneath this answer: https://superuser.com/a/1041820

## How to align subtitles when burning with FFMPEG

See alignment param.

```

ffmpeg -i "imput.mp4" -lavfi "subtitles=subtitles.srt:force_style='Alignment=9,OutlineColour=&H100000000,BorderStyle=3,Outline=1,Shadow=0,Fontsize=18'" -crf 1 -c:a copy "output.mp4"

```

or with margin

```

ffmpeg -i "imput.mp4" -lavfi "subtitles=subtitles.srt:force_style='Alignment=0,OutlineColour=&H100000000,BorderStyle=3,Outline=1,Shadow=0,Fontsize=18,MarginL=5,MarginV=25'" -crf 1 -c:a copy "output.mp4"

````

According to the [Line-Alignment ASS Tags](http://docs.aegisub.org/3.2/ASS_Tags/) docs, there are only 9 positions. 1: Bottom left, 2: Bottom center, 3: Bottom right, 5: Top left, 6: Top center, 7: Top right, 9: Middle left, 10: Middle center, 11: Middle right

Source: [ffmpeg subtitles alignment and position - Stack Overflow](https://stackoverflow.com/questions/57869367/ffmpeg-subtitles-alignment-and-position)

## How to burn / hardcode subtitles into the video using FFMPEG?

```
ffmpeg -i video.avi -vf subtitles=subtitle.srt out.avi
```

Source: [HowToBurnSubtitlesIntoVideo – FFmpeg](https://trac.ffmpeg.org/wiki/HowToBurnSubtitlesIntoVideo)

## How to scrape Twitter using Twint command line tool?

Steps:

Use below command on Windows Terminal Ubuntu tab (WSL) to install. As experimented, it did not work with normal Windows CMD or CMDER.
```
pip3 install --user --upgrade git+https://github.com/twintproject/twint.git@origin/master#egg=twint
```
As of January 2021, the installation method below produces error, so please use above method.

```
pip3 install twint

```
Follow the documentation at https://github.com/twintproject/twint:

For example, the below command works. 

`twint -u username --timeline` - Use an effective method to gather Tweets from a user's profile (Gathers ~3200 Tweets, including **retweets** & **replies**).

For getting tweets filtered by data range, use this:

```
twint -u JakeWharton --since 2008-01-01 --until 2009-01-01 -o twint_JakeWharton_since_until_2008_2009.json --json

```

## How to get random wikipedia article according to category? Template?

https://randomincategory.toolforge.org/Programming_idioms?site=en.wikipedia.org

Replace `Programming_idioms` with whatever category you like.

## How to change country region of TikTok in Android?

Steps:

Download Android Emulator, make sure you use Non-Google Play version

Download TikTok App

On command prompt:

Do `adb root` to root the Android Emulator

Do `adb shell setprop gsm.sim.operator.iso-country jp` to change SIM country to Japan (jp)

When login to `TikTok`, if you select `Phone` login, TikTok should automatically have `Japan` country code selected in phone number field.

Done.

Step 2:

## How to change Android Emulator SIM Country Code?

`adb shell setprop gsm.sim.operator.iso-country jp`

In order to see all of your device (emulator) properties you can enter the following command:

`adb shell getprop`

And to filter the ones only related to the SIM card we just need to:

`adb shell getprop | grep "gsm"`

which returns:

```
[gsm.current.phone-type]: [1]
[gsm.network.type]: [LTE]
[gsm.operator.alpha]: [Android]
[gsm.operator.iso-country]: [no]
[gsm.operator.isroaming]: [false]
[gsm.operator.numeric]: [310260]
[gsm.sim.operator.alpha]: [T-Mobile]
[gsm.sim.operator.iso-country]: [jp]
[gsm.sim.operator.numeric]: [310260]
[gsm.sim.state]: [LOADED]
[gsm.version.baseband]: [1.0.0.0]
[gsm.version.ril-impl]: [android reference-ril 1.0]

```

Source: [Android emulator: change your SIM card number - Carlos Mota](https://www.cafonsomota.xyz/android-emulator-change-sim-card/)

## How to view Environmental Variable path in Windows?

echo %ANDROID_HOME%

To display the current `CLASSPATH` variable, use these commands in Windows and UNIX <msreadoutspan class="msreadout-line-highlight msreadout-inactive-highlight">(Bourne <msreadoutspan class="msreadout-word-highlight">shell</msreadoutspan>):</msreadoutspan>

<pre>In Windows:   C:\> set CLASSPATH
In UNIX:      % echo $CLASSPATH
</pre>

To delete the current contents of the `CLASSPATH` variable, use these commands:

<pre>In Windows:   C:\> set CLASSPATH=
In UNIX:      % unset CLASSPATH; export CLASSPATH
</pre>

To set the `CLASSPATH` variable, use these commands (for example):

<pre>In Windows:   C:\> set CLASSPATH=C:\users\george\java\classes
In UNIX:      % CLASSPATH=/home/george/java/classes; export CLASSPATH</pre>
 
Source: 

[Environment Variables for Java Applications - PATH, CLASSPATH, JAVA_HOME](https://www3.ntu.edu.sg/home/ehchua/programming/howto/Environment_Variables.html)

[Managing Source and Class Files (The Java™ Tutorials > Learning the Java Language > Packages)](https://docs.oracle.com/javase/tutorial/java/package/managingfiles.html)

## Android emulator: change your SIM card number

Source: [Android emulator: change your SIM card number - Carlos Mota](https://www.cafonsomota.xyz/android-emulator-change-sim-card/)

## Download YouTube video

Add `dld` after youtube in the url.

## When Chrome shows error page for unsafe site?

Type `thisisunsafe` on the webpage. Chrome will let you view it!

## Article on how to use Microsoft Edge Read Aloud TTS engine on Android instead of default Google TTS engine.

### UPDATE: IT IS NO LONGER WORKING> EVEN MICROSOFT EDGE ANDROID CLIENT STOPPED SUPPORTING IT.

Comments: https://post.smzdm.com/p/a5k426e3/#comments

### Original post:

**Steps:**

**1. What is Microsoft Edge Read Aloud?**

See [here](https://i.imgur.com/r23GnvH.png)

These voices are also available on Microsoft Edge Android Browser.

The voices are natural-sounding and soothing to hear.

We extract the TTS engine from the browser and install it on our device.

**2. Where to find TTS engine for Microsoft Edge Read Aloud?**

The download site is in Chinese language.

Link to download APK is [here](https://lanzoui.com/iKXJVkm2x2j) or on Google Drive [here.](https://drive.google.com/file/d/1e0fk3tPlrPsCDpzb_hWPpjCemj7h-I0q/view?usp=sharing)

After downloading and installing, select this option shown in the image [here](https://i.imgur.com/bMDOYd6.jpg)

This will open the Preferred engine settings, select the engine shown in the image [here](https://i.imgur.com/BEtUgwq.jpg)

**3. Done try it out!**

Open for example any app where you use TTS. Here I opened Moon Reader Pro and opened a PDF and instructed the app to read aloud by clicking on speaker icon as shown [here](https://i.imgur.com/9sTbvDJ.jpg)

The voice is from Microsoft Edge Read Aloud TTS engine and NOT from default Google TTS engine!

PS: It's important to note that use it if you trust or don't use it otherwise.

I am using it for accessibility reasons and how good the voices are.

Source: 

https://iao.su/3739/

https://www.52pojie.cn/thread-1346893-1-1.html

https://docs.google.com/document/d/e/2PACX-1vRebCRTFAixfb0B4psxXVkFbFBvRbh3GCyTwRvvddHvz6bFoxvIH1ZYKlc4JE4kMOZ7ENRjI0MMdh-2/pub
