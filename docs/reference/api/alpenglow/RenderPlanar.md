# RenderPlanar

## Overview

Represents a RenderProgram on a planar (3d) surface.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class RenderPlanar {: #RenderPlanar }


TODO: better name

```js
import { RenderPlanar } from 'scenerystack/alpenglow';
```
### Constructor

#### new RenderPlanar( program : <span style="font-weight: 400; opacity: 80%;">RenderProgram</span>, pointA : <span style="font-weight: 400; opacity: 80%;">Vector3</span>, pointB : <span style="font-weight: 400; opacity: 80%;">Vector3</span>, pointC : <span style="font-weight: 400; opacity: 80%;">Vector3</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### getDepth( x : <span style="font-weight: 400; opacity: 80%;">number</span>, y : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">number</span> {: #getDepth data-toc-label='getDepth' }

#### getDepthRange( face : <span style="font-weight: 400; opacity: 80%;">ClippableFace</span> ) : <span style="font-weight: 400; opacity: 80%;">Range</span> {: #getDepthRange data-toc-label='getDepthRange' }

Returns the range of potential depth values included in the face.

#### getDepthSplit( planar : <span style="font-weight: 400; opacity: 80%;">RenderPlanar</span>, face : <span style="font-weight: 400; opacity: 80%;">ClippableFace</span> ) : <span style="font-weight: 400; opacity: 80%;">{ ourFaceFront: ClippableFace | null; otherFaceFront: ClippableFace | null }</span> {: #getDepthSplit data-toc-label='getDepthSplit' }

#### transformed( transform : <span style="font-weight: 400; opacity: 80%;">Matrix3</span> ) : <span style="font-weight: 400; opacity: 80%;">RenderPlanar</span> {: #transformed data-toc-label='transformed' }

#### withProgram( program : <span style="font-weight: 400; opacity: 80%;">RenderProgram</span> ) : <span style="font-weight: 400; opacity: 80%;">RenderPlanar</span> {: #withProgram data-toc-label='withProgram' }

### Instance Properties

#### plane : <span style="font-weight: 400; opacity: 80%;">Plane3</span> {: #plane data-toc-label='plane' }

(readonly)



## Source Code

See the source for [RenderPlanar.ts](https://github.com/phetsims/alpenglow/blob/main/js/render-program/RenderPlanar.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
