# TriangleArrayWriter

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/mobius/blob/main/js/TriangleArrayWriter.ts](https://github.com/phetsims/mobius/blob/main/js/TriangleArrayWriter.ts) for the most up-to-date information.

## Overview

Helps writing buffer-array style triangles into buffers.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class TriangleArrayWriter {: #TriangleArrayWriter }


```js
import { TriangleArrayWriter } from 'scenerystack/mobius';
```
### Constructor

#### new TriangleArrayWriter( positionArray : <span style="font-weight: 400;">Float32Array | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span>, normalArray : <span style="font-weight: 400;">Float32Array | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span>, uvArray : <span style="font-weight: 400;">Float32Array | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span>, offset, offsetPosition : <span style="font-weight: 400;">[Vector3](../dot/Vector3.md)</span> ) {: #TriangleArrayWriter-constructor data-toc-label='new TriangleArrayWriter' }

### Instance Methods

#### position( x : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, y : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, z : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) {: #position data-toc-label='position' }

Writes a position into the (optional) positionArray, and increments the offset.

#### normal( x : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, y : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, z : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) {: #normal data-toc-label='normal' }

Writes a normal into the (optional) normalArray

#### uv( u : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, v : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) {: #uv data-toc-label='uv' }

Writes a UV into the (optional) uvArray

#### getOffset() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #getOffset data-toc-label='getOffset' }

Returns the offset (previous offset + number of triangles added, counted from the positionArray)



## Source Code

See the source for [TriangleArrayWriter.ts](https://github.com/phetsims/mobius/blob/main/js/TriangleArrayWriter.ts) in the [mobius](https://github.com/phetsims/mobius) repository.
