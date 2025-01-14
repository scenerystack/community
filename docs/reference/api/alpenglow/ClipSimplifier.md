# ClipSimplifier

## Overview

Simplification of a polygon for clipping output (compacts equal or axis-aligned-collinear points).

TODO: ClipSimplifier should accept Vector2, and store it if possible (instead of mutating)

TODO: Create a "not-a-simplifier" to swap into the simplifier to ensure testing works nicely.

TODO: ClipSimplifier collinearity checks, to see if we are missing things and this improves things drastically?
TODO: Like, enable general collinearity, and inspect cases to see if it changes how many pixels get partials?
TODO: Or improves performance

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class ClipSimplifier {: #ClipSimplifier }


```js
import { ClipSimplifier } from 'scenerystack/alpenglow';
```
### Constructor

#### new ClipSimplifier( checkGeneralCollinearity ) {: #ClipSimplifier-constructor data-toc-label='new ClipSimplifier' }

### Instance Methods

#### addTransformed( matrix : <span style="font-weight: 400;">[Matrix3](../dot/Matrix3.md)</span>, x : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, y : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) {: #addTransformed data-toc-label='addTransformed' }

#### addPoint( p : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> ) {: #addPoint data-toc-label='addPoint' }

#### add( x : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, y : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) {: #add data-toc-label='add' }

We mutate points, so for the interest of safety, we'll end up copying the points.
TODO: For performance (CPU), it would make sense to instead pass in (x,y,?:point) so we could use immutable points
TODO: Only create points when needed - This would allow much better pass-through

#### hasPoints() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #hasPoints data-toc-label='hasPoints' }

#### finalize() : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)[]</span> {: #finalize data-toc-label='finalize' }

Treats the entire list of points so far as a closed polygon, completes simplification (between the start/end),
returns the simplified points, AND resets the state for the next time

#### finalizeInto( polygons : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)[][]</span> ) {: #finalizeInto data-toc-label='finalizeInto' }

#### reset() {: #reset data-toc-label='reset' }

### Static Methods

#### simplifyPolygon( polygon : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)[]</span>, checkGeneralCollinearity ) : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)[]</span> {: #simplifyPolygon data-toc-label='simplifyPolygon' }



## Source Code

See the source for [ClipSimplifier.ts](https://github.com/phetsims/alpenglow/blob/main/js/clip/ClipSimplifier.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
