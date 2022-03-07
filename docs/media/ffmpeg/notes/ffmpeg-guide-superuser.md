---
sidebar_label: FFMPEG guide superuser
description: FFMPEG guide superuser.
---

# FFMPEG guide superuser

# Our first encoded Video

Now that we have FFmpeg working, we can start with our video or audio conversion. Note that this is always a very resource intensive task, especially with video. Expect some conversions to take a little while, for example when re-encoding whole movies. A quad-core CPU like the i7 can easily be saturated with a good encoder and performs very fast then.

Before you handle videos, you should know what the difference between “codec” and “container” (also, “format”) is, as I will be using these terms without explaining them any further. I know these can be easily mixed up and aren’t as self-explaining as you’d like them to be. To read more about this, see this Super User answer: [What is a Codec (e.g. DivX?), and how does it differ from a File Format (e.g. MPG)?](http://superuser.com/a/300997/48078)

## Basic Syntax

Okay, now let’s start. The most basic form of an FFmpeg command goes like this – note the absence of an output option like `-o`:

    ffmpeg -i input output

And you’re done. For example, you could convert an MP3 into a WAV file, or an MKV video into MP4 (but don’t do that just yet, please). You could also just extract audio from a video file.

    ffmpeg -i audio.mp3 audio.wav

FFmpeg will guess which codecs you want to use depending on the format specifier (e.g. “.wav” container obviously needs a WAV codec inside, and MKV video will use x264 video and AC3 audio). But that’s not always what we want. Let’s say you have an MP4 container – which video codec should it include? There are a couple of possible answers. So, we’re better off specifying these codecs ourselves, since some codecs are better than others or have particularities that you might need.

## Specifying Video and Audio codecs

In most cases, you want a specific output codec, like h.264, or AAC audio. Today, there’s almost no reason *not* to encode to h.264, as it offers incredible quality at small file sizes. But which codecs do really work in FFmpeg? Luckily, it has a ton of built-in codecs and formats, which you can get a list of. Check the output: The `D` and `E` stand for “decoding” and/or “encoding” capabilities, respectively.

    ffmpeg -codecs

Now, we can use any of those to perform our transcoding. Use the `-c` option to specify a codec, with a `:a` or `:v` for audio and video codecs respectively. These are called “streams” in FFmpeg – normally there is one video and one audio stream, but you could of course use more. Let’s start by encoding an audio file with just one audio stream, and then a video file with a video stream and an audio stream.

    ffmpeg -i input.wav -c:a libfaac output.mp4

The possible combinations are countless, but obviously restricted by the format/container. Especially those pesky old [AVI](http://en.wikipedia.org/wiki/Audio_Video_Interleave) containers don’t like all codecs, so you’re better off encoding to MP4 or MKV containers these days, because they accept more codecs and can be easily handled by any modern player.

## When to copy, when to encode?

You might not have thought about this before, but sometimes, you want to just copy the contents of a video and not re-encode. This is actually very critical when just cutting out portions from a file, or only changing containers (and _not_ the codecs inside). In the example I gave above, we wanted to change MP4 to MKV.

The following command is **wrong**: It will re-encode your video. It will take forever, and [the result will (probably) look bad](http://en.wikipedia.org/wiki/Generation_loss).

    ffmpeg -i input.mp4 output.mkv

What FFmpeg did here was encoding the file yet another time, because you didn’t tell it to copy. This command however does it right:

    ffmpeg -i input.mp4 -c:v copy -c:a copy output.mkv

If you were to re-encode your videos all the time when you cut them, instead of just copying the codec contents, you’d eventually end up with something like this (exaggerated, but still highly entertaining) [example of generation loss](http://www.youtube.com/watch?v=icruGcSsPp0). Looks scary, does it?

If changing the container without encoding does not work for you, you can try the `mkvmerge` tool that [mkvtoolnix](http://www.bunkus.org/videotools/mkvtoolnix/) offers. This will for example create an MKV file.

    mkvmerge input.avi -o output.mkv

Similarly, [MP4Box](http://gpac.wp.mines-telecom.fr/) can create MP4 files from existing video.

---

# Advanced Options

If you’ve used some test videos or audio files for the above sequences, you might have seen that the quality wasn’t good enough to be useful. This is completely normal. Also, you will probably have constraints about bit rate, file size or target devices, such as when encoding a video for the PlayStation 3 or your Android phone.

## Quality Settings

Quality comes first. What is “quality”, even? Generally, the more bits you can spend on a file, the better it will look or sound. This means, that for the same codec, larger file size (or larger bit rate) will equal in better quality. In most cases, that is.

Most people associate quality with “bit rate”. This is a relict from the good old days where everyone would encode MP3 files from their CDs. Of course, this is a relatively simple approach, and you can get a good feeling for the bit rates you might need for certain videos. If you want to set the bit rate, you can do that with the `-b` option, again specifying the audio or video stream (just to resolve any ambiguities). The bit rate can be specified with suffixes like “K” for kBit/s or “M” for mBit/s.

    ffmpeg -i input.wav -b:a 192K out.mp3

But often, bit rate is not enough. You only need to restrict bit rate when you have a very specific target file size to reach. In all other cases, use a better concept, called “constant quality”. The reason is that sometimes you don’t want to spend the same amount of bits to a segment of a file. That’s when you should use variable bit rate. Actually, this concept is very well known for MP3 audio, where VBR rips are commonly found.

In video, this means setting a certain value called [Constant Rate Factor](http://homepage.univie.ac.at/werner.robitza/crf.html). For x264 (the h.264 encoder you should use), this is very easy:

    ffmpeg -i source.mp4 -c:v libx264 -crf 23 out.mp4

The CRF can be anything within 0 and 51, with the reasonable range being 17 to 26\. The lower, the better the quality, the higher the file size. The default value is 23 here. For MPEG-4 video (like XviD), a similar concept exists, called “qscale”.

    ffmpeg -i source.mp4 -c:v mpeg4 -qscale:v 3 out.mp4

Here, the `qscale:v` can range from 1 to 31\. The lower, the higher the quality, with values of 3 to 5 giving a good enough result in most cases.

In general, the best bet is to just *try and see for yourself* what looks good. Take into account the result file size you want and how much quality you can trade in for smaller file sizes. It’s all up to you. As a last note, don’t ever fall for the `sameq` option. [Sameq does not mean same quality](http://superuser.com/a/478550/48078) and you should never use it.

## Cutting Video

Often, you want to just cut out a portion from a file. FFmpeg supports basic cutting with the `-t` and `-ss` options. The first one will specify the duration of the output, and the second one will specify the start point. For example, to get the first five seconds, starting from one minute and 30 seconds:

    ffmpeg -ss 00:01:30 -i input.mov -c:v copy -c:a copy -t 5 output.mov

The time values can either be seconds or in the form of `HH:MM:SS.ms`. So, you could also cut one minute, ten seconds and 500 milliseconds:

    ffmpeg -ss 00:01:30 -i input.mov -c:v copy -c:a copy -t 00:01:30.500 output.mov

Note that we’ve again just copied the contents instead of re-encoding because we used the `copy` codec. Also, see how the `-ss` option is _before_ the actual input? This will first seek to the point in the file, and _then_ start to encode and cut. This is especially useful when you’re actually not just copying content, but encoding it, because it’ll speed up your conversion (although it’s less accurate). If you want to be more accurate, you’ll have to tell FFmpeg to encode the whole video and just discard the output until the position indicated by `-ss`:

    ffmpeg -i input.mov -ss 00:01:30 -c:v copy -c:a copy -t 5 output.mov

## Resizing

Got a High Definition 1080p video that you want to watch on your mobile phone? Scale it down first! FFmpeg supports software-based scaling when encoding with the `-s` option. The following example will do that:

    ffmpeg -i hd-movie.mkv -c:v libx264 -s:v 854x480 -c:a copy out.mp4

Phones have some restrictions on video playback, which can be tackled by using so-called “profiles” when encoding. More about this can be found in the resources at the bottom.
