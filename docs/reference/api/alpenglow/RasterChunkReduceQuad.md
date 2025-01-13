# RasterChunkReduceQuad

## Overview

Represents an "applied interval" of reduce data, for both the min and max binary clips.

In our segmented reduction, at each level we need to track intervals with the "fragments" of chunks' edges that
have not been completed yet.

"left" means "the reduction of all values for the chunk index at the start of this interval"
"right" means "the reduction of all values for the chunk index at the end of this interval"

Sometimes the left/right are equal (IFF they have the same chunk index).

Each reduced data notes whether it contains the first/last edge of the chunk it references. Once we combine reduces
so that it contains both the first and last edge, we can "apply" it, moving the reduced data into the chunk.

TODO: produce general documentation on this whole process.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class RasterChunkReduceQuad {: #RasterChunkReduceQuad }


```js
import { RasterChunkReduceQuad } from 'scenerystack/alpenglow';
```
### Constructor

#### new RasterChunkReduceQuad( leftMin : <span style="font-weight: 400;">[RasterChunkReduceData](../alpenglow/RasterChunkReduceData.md)</span>, leftMax : <span style="font-weight: 400;">[RasterChunkReduceData](../alpenglow/RasterChunkReduceData.md)</span>, rightMin : <span style="font-weight: 400;">[RasterChunkReduceData](../alpenglow/RasterChunkReduceData.md)</span>, rightMax : <span style="font-weight: 400;">[RasterChunkReduceData](../alpenglow/RasterChunkReduceData.md)</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### toStrings() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>[]</span> {: #toStrings data-toc-label='toStrings' }

#### writeEncoding( encoder : <span style="font-weight: 400;">[ByteEncoder](../alpenglow/ByteEncoder.md)</span> ) {: #writeEncoding data-toc-label='writeEncoding' }

### Static Methods

#### combine( a : <span style="font-weight: 400;">[RasterChunkReduceQuad](../alpenglow/RasterChunkReduceQuad.md)</span>, b : <span style="font-weight: 400;">[RasterChunkReduceQuad](../alpenglow/RasterChunkReduceQuad.md)</span> ) : <span style="font-weight: 400;">[RasterChunkReduceQuad](../alpenglow/RasterChunkReduceQuad.md)</span> {: #combine data-toc-label='combine' }

#### readEncoding( arrayBuffer : <span style="font-weight: 400;">ArrayBuffer</span>, byteOffset : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[RasterChunkReduceQuad](../alpenglow/RasterChunkReduceQuad.md)</span> {: #readEncoding data-toc-label='readEncoding' }

#### fromArrayBuffer( arrayBuffer : <span style="font-weight: 400;">ArrayBuffer</span> ) : <span style="font-weight: 400;">[RasterChunkReduceQuad](../alpenglow/RasterChunkReduceQuad.md)[]</span> {: #fromArrayBuffer data-toc-label='fromArrayBuffer' }

### Static Properties

#### ENCODING_BYTE_LENGTH {: #ENCODING_BYTE_LENGTH data-toc-label='ENCODING_BYTE_LENGTH' }

(readonly)

#### INDETERMINATE : <span style="font-weight: 400;">[RasterChunkReduceQuad](../alpenglow/RasterChunkReduceQuad.md)</span> {: #INDETERMINATE data-toc-label='INDETERMINATE' }

(readonly)

#### OUT_OF_RANGE : <span style="font-weight: 400;">[RasterChunkReduceQuad](../alpenglow/RasterChunkReduceQuad.md)</span> {: #OUT_OF_RANGE data-toc-label='OUT_OF_RANGE' }

(readonly)



## Source Code

See the source for [RasterChunkReduceQuad.ts](https://github.com/phetsims/alpenglow/blob/main/js/parallel/raster-clip/RasterChunkReduceQuad.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
