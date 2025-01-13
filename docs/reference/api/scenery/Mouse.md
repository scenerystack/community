# Mouse

## Overview

Tracks the mouse state

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class Mouse {: #Mouse }


```js
import { Mouse } from 'scenerystack/scenery';
```
### Constructor

#### new Mouse( point : <span style="font-weight: 400; opacity: 80%;">Vector2</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### toString() : <span style="font-weight: 400; opacity: 80%;">string</span> {: #toString data-toc-label='toString' }

Returns an improved string representation of this object.

### Instance Properties

#### id : <span style="font-weight: 400; opacity: 80%;">number | null</span> {: #id data-toc-label='id' }

Since we need to track the mouse's pointer id occasionally

#### leftDown : <span style="font-weight: 400; opacity: 80%;">boolean</span> {: #leftDown data-toc-label='leftDown' }

@deprecated, see https://github.com/phetsims/scenery/issues/803

#### middleDown : <span style="font-weight: 400; opacity: 80%;">boolean</span> {: #middleDown data-toc-label='middleDown' }

#### rightDown : <span style="font-weight: 400; opacity: 80%;">boolean</span> {: #rightDown data-toc-label='rightDown' }

#### wheelDelta : <span style="font-weight: 400; opacity: 80%;">Vector3</span> {: #wheelDelta data-toc-label='wheelDelta' }

Mouse wheel delta for the last event, see https://developer.mozilla.org/en-US/docs/Web/Events/wheel

#### wheelDeltaMode : <span style="font-weight: 400; opacity: 80%;">number</span> {: #wheelDeltaMode data-toc-label='wheelDeltaMode' }

Mouse wheel mode for the last event (0: pixels, 1: lines, 2: pages), see
https://developer.mozilla.org/en-US/docs/Web/Events/wheel



## Source Code

See the source for [Mouse.ts](https://github.com/phetsims/scenery/blob/main/js/input/Mouse.ts) in the [scenery](https://github.com/phetsims/scenery) repository.
