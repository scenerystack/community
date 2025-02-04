# Highlight

## Overview

Highlights displayed by the overlay support these types. Highlight behavior works like the following:
- If value is null, the highlight will use default stylings of HighlightPath and surround the Node with focus.
- If value is a Shape the Shape is set to a HighlightPath with default stylings in the global coordinate frame.
- If you provide a Node it is your responsibility to position it in the global coordinate frame.
- If the value is 'invisible' no highlight will be displayed at all.

@author Jesse Greenberg (PhET Interactive Simulations)

## Type Highlight {: #Highlight }


```js
import type { Highlight } from 'scenerystack/scenery';
```


[Node](../scenery/Node.md) | [Shape](../kite/Shape.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span> | "invisible"



## Source Code

See the source for [Highlight.ts](https://github.com/phetsims/scenery/blob/main/js/accessibility/Highlight.ts) in the [scenery](https://github.com/phetsims/scenery) repository.
