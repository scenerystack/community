# IntegerEdge

## Overview

A line-segment edge with integer coordinates, as part of the rendering

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class IntegerEdge {: #IntegerEdge }


```js
import { IntegerEdge } from 'scenerystack/alpenglow';
```
### Constructor

#### new IntegerEdge( renderPath : <span style="font-weight: 400;">[RenderPath](../alpenglow/RenderPath.md)</span>, x0 : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, y0 : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, x1 : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, y1 : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) {: #IntegerEdge-constructor data-toc-label='new IntegerEdge' }

### Instance Methods

#### hasBoundsIntersectionWith( other : <span style="font-weight: 400;">[IntegerEdge](../alpenglow/IntegerEdge.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #hasBoundsIntersectionWith data-toc-label='hasBoundsIntersectionWith' }

### Instance Properties

#### bounds : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md)</span> {: #bounds data-toc-label='bounds' }

(readonly)

#### intersections : <span style="font-weight: 400;">[RationalIntersection](../alpenglow/RationalIntersection.md)[]</span> {: #intersections data-toc-label='intersections' }

(readonly)

### Static Methods

#### hasBoundsIntersection( boundsA : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md)</span>, boundsB : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md)</span>, someXEqual : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span>, someYEqual : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #hasBoundsIntersection data-toc-label='hasBoundsIntersection' }

If one of the segments is (e.g.) vertical, we'll need to allow checks for overlap ONLY on the x value, otherwise
we can have a strict inequality check. This also applies to horizontal segments and the y value.
The reason this is OK is because if the segments are both (e.g.) non-vertical, then if the bounds only meet
at a single x value (and not a continuos area of overlap), THEN the only intersection would be at the
endpoints (which we would filter out and not want anyway).

#### createTransformed( path : <span style="font-weight: 400;">[RenderPath](../alpenglow/RenderPath.md)</span>, toIntegerMatrix : <span style="font-weight: 400;">[Matrix3](../dot/Matrix3.md)</span>, p0 : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span>, p1 : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> ) : <span style="font-weight: 400;">[IntegerEdge](../alpenglow/IntegerEdge.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> {: #createTransformed data-toc-label='createTransformed' }

#### clipScaleToIntegerEdges( boundedSubpaths : <span style="font-weight: 400;">[BoundedSubpath](../alpenglow/BoundedSubpath.md)[]</span>, bounds : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md)</span>, toIntegerMatrix : <span style="font-weight: 400;">[Matrix3](../dot/Matrix3.md)</span> ) : <span style="font-weight: 400;">[IntegerEdge](../alpenglow/IntegerEdge.md)[]</span> {: #clipScaleToIntegerEdges data-toc-label='clipScaleToIntegerEdges' }

Returns a list of integer edges (tagged with their respective RenderPaths) that are clipped to within the given
bounds.

Since we also need to apply the to-integer-coordinate-frame conversion at the same time, this step is included.

#### scaleToIntegerEdges( paths : <span style="font-weight: 400;">[RenderPath](../alpenglow/RenderPath.md)[]</span>, toIntegerMatrix : <span style="font-weight: 400;">[Matrix3](../dot/Matrix3.md)</span> ) : <span style="font-weight: 400;">[IntegerEdge](../alpenglow/IntegerEdge.md)[]</span> {: #scaleToIntegerEdges data-toc-label='scaleToIntegerEdges' }

Returns a list of integer edges (tagged with their respective RenderPaths) that are transformed to within the
integer coordinates.



## Source Code

See the source for [IntegerEdge.ts](https://github.com/phetsims/alpenglow/blob/main/js/cag/IntegerEdge.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
