# MultiListenerPress

## Overview

A logical "press" for the MultiListener, capturing information when a Pointer goes down on the screen.

@author Jesse Greenberg (PhET Interactive Simulations)
@author Jonathan Olson (PhET Interactive Simulations)

## Class MultiListenerPress {: #MultiListenerPress }


```js
import { MultiListenerPress } from 'scenerystack/scenery';
```
### Constructor

#### new MultiListenerPress( pointer : <span style="font-weight: 400;">[Pointer](../scenery/Pointer.md)</span>, trail : <span style="font-weight: 400;">[Trail](../scenery/Trail.md)</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### recomputeLocalPoint() {: #recomputeLocalPoint data-toc-label='recomputeLocalPoint' }

Compute the local point for this Press, which is the local point for the leaf Node of this Press's Trail.

### Instance Properties

#### pointer : <span style="font-weight: 400;">[Pointer](../scenery/Pointer.md)</span> {: #pointer data-toc-label='pointer' }

#### trail : <span style="font-weight: 400;">[Trail](../scenery/Trail.md)</span> {: #trail data-toc-label='trail' }

#### interrupted : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #interrupted data-toc-label='interrupted' }

#### initialPoint : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> {: #initialPoint data-toc-label='initialPoint' }

(readonly)

down point for the new press, in the global coordinate frame

#### localPoint : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> {: #localPoint data-toc-label='localPoint' }

point for the new press, in the local coordinate frame of the leaf Node of the Trail



## Source Code

See the source for [MultiListenerPress.ts](https://github.com/phetsims/scenery/blob/main/js/listeners/MultiListenerPress.ts) in the [scenery](https://github.com/phetsims/scenery) repository.
