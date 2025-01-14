# BinaryClipping

## Overview

Clipping arbitrary (degenerate, non-convex, self-intersecting, etc.) polygons based on binary criteria (e.g.
left/right, inside/outside).

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class BinaryClipping {: #BinaryClipping }


```js
import { BinaryClipping } from 'scenerystack/alpenglow';
```
### Static Methods

#### binaryXClipEdge( startPoint : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span>, endPoint : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span>, x : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, fakeCornerY : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, minLinearEdges : <span style="font-weight: 400;">[LinearEdge](../alpenglow/LinearEdge.md)[]</span>, maxLinearEdges : <span style="font-weight: 400;">[LinearEdge](../alpenglow/LinearEdge.md)[]</span> ) {: #binaryXClipEdge data-toc-label='binaryXClipEdge' }

#### binaryYClipEdge( startPoint : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span>, endPoint : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span>, y : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, fakeCornerX : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, minLinearEdges : <span style="font-weight: 400;">[LinearEdge](../alpenglow/LinearEdge.md)[]</span>, maxLinearEdges : <span style="font-weight: 400;">[LinearEdge](../alpenglow/LinearEdge.md)[]</span> ) {: #binaryYClipEdge data-toc-label='binaryYClipEdge' }

#### binaryLineClipEdge( startPoint : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span>, endPoint : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span>, normal : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span>, value : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, fakeCornerPerpendicular : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, minLinearEdges : <span style="font-weight: 400;">[LinearEdge](../alpenglow/LinearEdge.md)[]</span>, maxLinearEdges : <span style="font-weight: 400;">[LinearEdge](../alpenglow/LinearEdge.md)[]</span> ) {: #binaryLineClipEdge data-toc-label='binaryLineClipEdge' }

line where dot( normal, point ) - value = 0. "min" side is dot-products &lt; value, "max" side is dot-products &gt; value

#### binaryXClipPolygon( polygon : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)[]</span>, x : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, minPolygon : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)[]</span>, maxPolygon : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)[]</span> ) {: #binaryXClipPolygon data-toc-label='binaryXClipPolygon' }

#### binaryYClipPolygon( polygon : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)[]</span>, y : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, minPolygon : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)[]</span>, maxPolygon : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)[]</span> ) {: #binaryYClipPolygon data-toc-label='binaryYClipPolygon' }

#### binaryLineClipPolygon( polygon : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)[]</span>, normal : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span>, value : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, minPolygon : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)[]</span>, maxPolygon : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)[]</span> ) {: #binaryLineClipPolygon data-toc-label='binaryLineClipPolygon' }

line where dot( normal, point ) - value = 0. "min" side is dot-products &lt; value, "max" side is dot-products &gt; value

#### binaryXClipEdgedClipped( face : <span style="font-weight: 400;">[EdgedClippedFace](../alpenglow/EdgedClippedFace.md)</span>, x : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">{ minFace: [EdgedClippedFace](../alpenglow/EdgedClippedFace.md); maxFace: [EdgedClippedFace](../alpenglow/EdgedClippedFace.md) }</span> {: #binaryXClipEdgedClipped data-toc-label='binaryXClipEdgedClipped' }

#### binaryYClipEdgedClipped( face : <span style="font-weight: 400;">[EdgedClippedFace](../alpenglow/EdgedClippedFace.md)</span>, y : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">{ minFace: [EdgedClippedFace](../alpenglow/EdgedClippedFace.md); maxFace: [EdgedClippedFace](../alpenglow/EdgedClippedFace.md) }</span> {: #binaryYClipEdgedClipped data-toc-label='binaryYClipEdgedClipped' }



## Type BinaryClipCallback {: #BinaryClipCallback }


```js
import type { BinaryClipCallback } from 'scenerystack/alpenglow';
```
(
  isMinFace: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>,
  startX: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>,
  startY: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>,
  endX: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>,
  endY: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>,
  startPoint: [Vector2](../dot/Vector2.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>,
  endPoint: [Vector2](../dot/Vector2.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span>



## Type BinaryPolygonCompleteCallback {: #BinaryPolygonCompleteCallback }


```js
import type { BinaryPolygonCompleteCallback } from 'scenerystack/alpenglow';
```
(
  isMinFace: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span>



## Type PolygonCompleteCallback {: #PolygonCompleteCallback }


```js
import type { PolygonCompleteCallback } from 'scenerystack/alpenglow';
```
() =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span>



## Source Code

See the source for [BinaryClipping.ts](https://github.com/phetsims/alpenglow/blob/main/js/clip/BinaryClipping.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
