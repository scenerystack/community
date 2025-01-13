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

#### new HighlightOverlay( display : <span style="font-weight: 400; opacity: 80%;">Display</span>, focusRootNode : <span style="font-weight: 400; opacity: 80%;">Node</span>, providedOptions? : <span style="font-weight: 400; opacity: 80%;">HighlightOverlayOptions</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### dispose() : <span style="font-weight: 400; opacity: 80%;">void</span> {: #dispose data-toc-label='dispose' }

Releases references

#### hasHighlight() : <span style="font-weight: 400; opacity: 80%;">boolean</span> {: #hasHighlight data-toc-label='hasHighlight' }

Returns whether or not this HighlightOverlay is displaying some highlight.

#### hasReadingBlockHighlight() : <span style="font-weight: 400; opacity: 80%;">boolean</span> {: #hasReadingBlockHighlight data-toc-label='hasReadingBlockHighlight' }

Returns true if there is an active highlight around a ReadingBlock while the voicingManager is speaking its
Voicing content.

#### update() : <span style="font-weight: 400; opacity: 80%;">void</span> {: #update data-toc-label='update' }

Called by Display, updates this overlay in the Display.updateDisplay call.

### Instance Properties

#### domElement : <span style="font-weight: 400; opacity: 80%;">HTMLElement</span> {: #domElement data-toc-label='domElement' }

(readonly)

HTML element of the display

### Static Methods

#### setInnerHighlightColor( color : <span style="font-weight: 400; opacity: 80%;">TPaint</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #setInnerHighlightColor data-toc-label='setInnerHighlightColor' }

Set the inner color of all focus highlights.

#### getInnerHighlightColor() : <span style="font-weight: 400; opacity: 80%;">TPaint</span> {: #getInnerHighlightColor data-toc-label='getInnerHighlightColor' }

Get the inner color of all focus highlights.

#### setOuterHilightColor( color : <span style="font-weight: 400; opacity: 80%;">TPaint</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #setOuterHilightColor data-toc-label='setOuterHilightColor' }

Set the outer color of all focus highlights.

#### getOuterHighlightColor() : <span style="font-weight: 400; opacity: 80%;">TPaint</span> {: #getOuterHighlightColor data-toc-label='getOuterHighlightColor' }

Get the outer color of all focus highlights.

#### setInnerGroupHighlightColor( color : <span style="font-weight: 400; opacity: 80%;">TPaint</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #setInnerGroupHighlightColor data-toc-label='setInnerGroupHighlightColor' }

Set the inner color of all group focus highlights.

#### getInnerGroupHighlightColor() : <span style="font-weight: 400; opacity: 80%;">TPaint</span> {: #getInnerGroupHighlightColor data-toc-label='getInnerGroupHighlightColor' }

Get the inner color of all group focus highlights

#### setOuterGroupHighlightColor( color : <span style="font-weight: 400; opacity: 80%;">TPaint</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #setOuterGroupHighlightColor data-toc-label='setOuterGroupHighlightColor' }

Set the outer color of all group focus highlight.

#### getOuterGroupHighlightColor() : <span style="font-weight: 400; opacity: 80%;">TPaint</span> {: #getOuterGroupHighlightColor data-toc-label='getOuterGroupHighlightColor' }

Get the outer color of all group focus highlights.



## Source Code

See the source for [HighlightOverlay.ts](https://github.com/phetsims/scenery/blob/main/js/overlays/HighlightOverlay.ts) in the [scenery](https://github.com/phetsims/scenery) repository.
