---
sidebar_label: "Bluetooth bad audio quality when android emulator launch mac"
description: "Bluetooth bad audio quality when android emulator launch mac."
---

# Bluetooth bad audio quality when android emulator launch mac

As someone below pointed out:

go to Audio MIDI Setup tool

create an "Aggregate Device" using the plus button in the bottom left

select only the built-in microphone for your new aggregate device

set the aggregate device as your sound input in Sound preferences under "Input".

The aggregate device will remain selected as the sound input device when connecting your headphones, even after rebooting.

[(236) Android emulator makes audio over bluetooth sound terrible : androiddev](https://www.reddit.com/r/androiddev/comments/7ynzic/android_emulator_makes_audio_over_bluetooth_sound/)