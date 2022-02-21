---
sidebar_label: Concepts
description: Flutter Concepts.
---

# Flutter - Concepts

## Stateless widget

_Stateless_ widgets are immutable, meaning that their properties can't change. All values are final.

## Stateful widget

_Stateful_ widgets maintain state that might change during the lifetime of the widget. Implementing a stateful widget requires at least two classes: 1) a [`StatefulWidget`](https://docs.flutter.io/flutter/widgets/StatefulWidget-class.html) that creates an instance of a [`State`](https://docs.flutter.io/flutter/widgets/State-class.html) class. The `StatefulWidget` object is, itself, immutable and can be thrown away and regenerated, but the `State` object persists over the lifetime of the widget.