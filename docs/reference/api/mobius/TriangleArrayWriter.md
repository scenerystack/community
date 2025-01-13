# TriangleArrayWriter

## Overview

Helps writing buffer-array style triangles into buffers.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class TriangleArrayWriter {: #TriangleArrayWriter }


```js
import { TriangleArrayWriter } from 'scenerystack/mobius';
```
### Constructor

#### new TriangleArrayWriter( positionArray : <span style="font-weight: 400; opacity: 80%;">Float32Array | null</span>, normalArray : <span style="font-weight: 400; opacity: 80%;">Float32Array | null</span>, uvArray : <span style="font-weight: 400; opacity: 80%;">Float32Array | null</span>, offset, offsetPosition : <span style="font-weight: 400; opacity: 80%;">Vector3</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### position( x : <span style="font-weight: 400; opacity: 80%;">number</span>, y : <span style="font-weight: 400; opacity: 80%;">number</span>, z : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #position data-toc-label='position' }

Writes a position into the (optional) positionArray, and increments the offset.

#### normal( x : <span style="font-weight: 400; opacity: 80%;">number</span>, y : <span style="font-weight: 400; opacity: 80%;">number</span>, z : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #normal data-toc-label='normal' }

Writes a normal into the (optional) normalArray

#### uv( u : <span style="font-weight: 400; opacity: 80%;">number</span>, v : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #uv data-toc-label='uv' }

Writes a UV into the (optional) uvArray

#### getOffset() : <span style="font-weight: 400; opacity: 80%;">number</span> {: #getOffset data-toc-label='getOffset' }

Returns the offset (previous offset + number of triangles added, counted from the positionArray)



## Source Code

See the source for [TriangleArrayWriter.ts](https://github.com/phetsims/mobius/blob/main/js/TriangleArrayWriter.ts) in the [mobius](https://github.com/phetsims/mobius) repository.
