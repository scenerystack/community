# HighlightOverlay

## Overview

An overlay that implements highlights for a Display. This is responsible for drawing the highlights and
observing Properties or Emitters that dictate when highlights should become active. A highlight surrounds a Node
to indicate that it is in focus or relevant.

@author Jesse Greenberg (PhET Interactive Simulations)
@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class HighlightOverlay {: #HighlightOverlay }


```js
import { HighlightOverlay } from 'scenerystack/scenery';
```
### Constructor

#### new HighlightOverlay( display : <span style="font-weight: 400;">[Display](../scenery/Display.md)</span>, focusRootNode : <span style="font-weight: 400;">[Node](../scenery/Node.md)</span>, providedOptions? : <span style="font-weight: 400;">[HighlightOverlayOptions](../scenery/HighlightOverlay.md#HighlightOverlayOptions)</span> ) {: #HighlightOverlay-constructor data-toc-label='new HighlightOverlay' }

### Instance Methods

#### dispose() {: #dispose data-toc-label='dispose' }

Releases references

#### hasHighlight() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #hasHighlight data-toc-label='hasHighlight' }

Returns whether or not this HighlightOverlay is displaying some highlight.

#### hasReadingBlockHighlight() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #hasReadingBlockHighlight data-toc-label='hasReadingBlockHighlight' }

Returns true if there is an active highlight around a ReadingBlock while the voicingManager is speaking its
Voicing content.

#### update() {: #update data-toc-label='update' }

Called by Display, updates this overlay in the Display.updateDisplay call.

### Instance Properties

#### domElement : <span style="font-weight: 400;">HTMLElement</span> {: #domElement data-toc-label='domElement' }

(readonly)

HTML element of the display

### Static Methods

#### setInnerHighlightColor( color : <span style="font-weight: 400;">[TPaint](../scenery/TPaint.md)</span> ) {: #setInnerHighlightColor data-toc-label='setInnerHighlightColor' }

Set the inner color of all focus highlights.

#### getInnerHighlightColor() : <span style="font-weight: 400;">[TPaint](../scenery/TPaint.md)</span> {: #getInnerHighlightColor data-toc-label='getInnerHighlightColor' }

Get the inner color of all focus highlights.

#### setOuterHilightColor( color : <span style="font-weight: 400;">[TPaint](../scenery/TPaint.md)</span> ) {: #setOuterHilightColor data-toc-label='setOuterHilightColor' }

Set the outer color of all focus highlights.

#### getOuterHighlightColor() : <span style="font-weight: 400;">[TPaint](../scenery/TPaint.md)</span> {: #getOuterHighlightColor data-toc-label='getOuterHighlightColor' }

Get the outer color of all focus highlights.

#### setInnerGroupHighlightColor( color : <span style="font-weight: 400;">[TPaint](../scenery/TPaint.md)</span> ) {: #setInnerGroupHighlightColor data-toc-label='setInnerGroupHighlightColor' }

Set the inner color of all group focus highlights.

#### getInnerGroupHighlightColor() : <span style="font-weight: 400;">[TPaint](../scenery/TPaint.md)</span> {: #getInnerGroupHighlightColor data-toc-label='getInnerGroupHighlightColor' }

Get the inner color of all group focus highlights

#### setOuterGroupHighlightColor( color : <span style="font-weight: 400;">[TPaint](../scenery/TPaint.md)</span> ) {: #setOuterGroupHighlightColor data-toc-label='setOuterGroupHighlightColor' }

Set the outer color of all group focus highlight.

#### getOuterGroupHighlightColor() : <span style="font-weight: 400;">[TPaint](../scenery/TPaint.md)</span> {: #getOuterGroupHighlightColor data-toc-label='getOuterGroupHighlightColor' }

Get the outer color of all group focus highlights.



## Type Highlight {: #Highlight }


Highlights displayed by the overlay support these types. Highlight behavior works like the following:
- If value is null, the highlight will use default stylings of HighlightPath and surround the Node with focus.
- If value is a Shape the Shape is set to a HighlightPath with default stylings in the global coordinate frame.
- If you provide a Node it is your responsibility to position it in the global coordinate frame.
- If the value is 'invisible' no highlight will be displayed at all.

```js
import type { Highlight } from 'scenerystack/scenery';
```


[Node](../scenery/Node.md) | [Shape](../kite/Shape.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span> | "invisible"



## Type HighlightOverlayOptions {: #HighlightOverlayOptions }


```js
import type { HighlightOverlayOptions } from 'scenerystack/scenery';
```


- **pdomFocusHighlightsVisibleProperty**?: [TProperty](../axon/TProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>&gt;
<br>  Controls whether highlights related to DOM focus are visible
- **interactiveHighlightsVisibleProperty**?: [TProperty](../axon/TProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>&gt;
<br>  Controls whether highlights related to Interactive Highlights are visible
- **readingBlockHighlightsVisibleProperty**?: [TProperty](../axon/TProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>&gt;
<br>  Controls whether highlights associated with ReadingBlocks (of the Voicing feature set)
  are shown when pointerFocusProperty changes




## Source Code

See the source for [HighlightOverlay.ts](https://github.com/phetsims/scenery/blob/main/js/overlays/HighlightOverlay.ts) in the [scenery](https://github.com/phetsims/scenery) repository.
