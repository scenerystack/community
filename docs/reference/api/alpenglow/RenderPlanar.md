# RenderPlanar

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/alpenglow/blob/main/js/render-program/RenderPlanar.ts](https://github.com/phetsims/alpenglow/blob/main/js/render-program/RenderPlanar.ts) for the most up-to-date information.

## Overview

Represents a RenderProgram on a planar (3d) surface.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class RenderPlanar {: #RenderPlanar }


TODO: better name

```js
import { RenderPlanar } from 'scenerystack/alpenglow';
```
### Constructor

#### new RenderPlanar( program : <span style="font-weight: 400;">[RenderProgram](../alpenglow/RenderProgram.md)</span>, pointA : <span style="font-weight: 400;">[Vector3](../dot/Vector3.md)</span>, pointB : <span style="font-weight: 400;">[Vector3](../dot/Vector3.md)</span>, pointC : <span style="font-weight: 400;">[Vector3](../dot/Vector3.md)</span> ) {: #RenderPlanar-constructor data-toc-label='new RenderPlanar' }

### Instance Methods

#### getDepth( x : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, y : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #getDepth data-toc-label='getDepth' }

#### getDepthRange( face : <span style="font-weight: 400;">[ClippableFace](../alpenglow/ClippableFace.md)</span> ) : <span style="font-weight: 400;">[Range](../dot/Range.md)</span> {: #getDepthRange data-toc-label='getDepthRange' }

Returns the range of potential depth values included in the face.

#### getDepthSplit( planar : <span style="font-weight: 400;">[RenderPlanar](../alpenglow/RenderPlanar.md)</span>, face : <span style="font-weight: 400;">[ClippableFace](../alpenglow/ClippableFace.md)</span> ) : <span style="font-weight: 400;">{ ourFaceFront: [ClippableFace](../alpenglow/ClippableFace.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>; otherFaceFront: [ClippableFace](../alpenglow/ClippableFace.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span> }</span> {: #getDepthSplit data-toc-label='getDepthSplit' }

#### transformed( transform : <span style="font-weight: 400;">[Matrix3](../dot/Matrix3.md)</span> ) : <span style="font-weight: 400;">[RenderPlanar](../alpenglow/RenderPlanar.md)</span> {: #transformed data-toc-label='transformed' }

#### withProgram( program : <span style="font-weight: 400;">[RenderProgram](../alpenglow/RenderProgram.md)</span> ) : <span style="font-weight: 400;">[RenderPlanar](../alpenglow/RenderPlanar.md)</span> {: #withProgram data-toc-label='withProgram' }

### Instance Properties

#### plane : <span style="font-weight: 400;">[Plane3](../dot/Plane3.md)</span> {: #plane data-toc-label='plane' }

(readonly)



## Source Code

See the source for [RenderPlanar.ts](https://github.com/phetsims/alpenglow/blob/main/js/render-program/RenderPlanar.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
