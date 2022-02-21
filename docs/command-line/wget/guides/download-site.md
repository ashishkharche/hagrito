---
sidebar_label: Download Site
description: Download Site.
---

# Download Site

[internetarchive/heritrix3: Heritrix is the Internet Archive's open-source, extensible, web-scale, archival-quality web crawler project.](https://github.com/internetarchive/heritrix3)

[ArchiveTeam/grab-site: The archivist's web crawler: WARC output, dashboard for all crawls, dynamic ignore patterns](https://github.com/ArchiveTeam/grab-site)

[webrecorder/replayweb.page: Serverless Web Archive Replay directly in the browser](https://github.com/webrecorder/replayweb.page)

```
take a look at grab-site by ArchiveTeam, it's a very powerful tool for mirroring websites.

grab-site will output a compressed WARC file, so you'll need something like this to review the file.

your other options consist of wget and wpull for the most part. HTTrack is very user-friendly but it's painfully slow.

Best of luck with the exam! If you can't get anything worked out, you can always send it my way and i'll just run my server setup, wouldn't take more than an hour.
```

https://www.reddit.com/r/Piracy/comments/sn8egs/comment/hw21btq/?utm_source=share&utm_medium=web2x&context=3

## Method 1

```
wget64 --no-clobber --convert-links --random-wait -r -p -E -e robots=off -U mozilla --no-check-certificate https://www.somewebsite.com
```
