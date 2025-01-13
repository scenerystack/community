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

#### new MultiListenerPress( pointer : <span style="font-weight: 400; opacity: 80%;">Pointer</span>, trail : <span style="font-weight: 400; opacity: 80%;">Trail</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### recomputeLocalPoint() : <span style="font-weight: 400; opacity: 80%;">void</span> {: #recomputeLocalPoint data-toc-label='recomputeLocalPoint' }

Compute the local point for this Press, which is the local point for the leaf Node of this Press's Trail.

### Instance Properties

#### pointer : <span style="font-weight: 400; opacity: 80%;">Pointer</span> {: #pointer data-toc-label='pointer' }

#### trail : <span style="font-weight: 400; opacity: 80%;">Trail</span> {: #trail data-toc-label='trail' }

#### interrupted : <span style="font-weight: 400; opacity: 80%;">boolean</span> {: #interrupted data-toc-label='interrupted' }

#### initialPoint : <span style="font-weight: 400; opacity: 80%;">Vector2</span> {: #initialPoint data-toc-label='initialPoint' }

(readonly)

down point for the new press, in the global coordinate frame

#### localPoint : <span style="font-weight: 400; opacity: 80%;">Vector2 | null</span> {: #localPoint data-toc-label='localPoint' }

point for the new press, in the local coordinate frame of the leaf Node of the Trail



## Source Code

See the source for [MultiListenerPress.ts](https://github.com/phetsims/scenery/blob/main/js/listeners/MultiListenerPress.ts) in the [scenery](https://github.com/phetsims/scenery) repository.
