---
sidebar_label: Change frequency sample rate of audio file
description: Change frequency sample rate of audio file.
---

# Change frequency sample rate hz of audio file

## `-ar`

```
ffmpeg -i soundoftext.mp3 -ar 8000 soundoftext-8000hz.wav
```

-ar[:stream_specifier] freq (input/output,per-stream): Set the audio sampling frequency. For output streams it is set by default to the frequency of the corresponding input stream. For input streams this option only makes sense for audio grabbing devices and raw demuxers and is mapped to the corresponding demuxer options.

## References

[ffmpeg Documentation](https://ffmpeg.org/ffmpeg.html)