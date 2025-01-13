# RasterChunkReducePair

## Overview

Like RasterChunkReduceQuad, but for the initial case where our left/right values are the same, and we can do a
slightly different optimized reduce.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class RasterChunkReducePair {: #RasterChunkReducePair }


```js
import { RasterChunkReducePair } from 'scenerystack/alpenglow';
```
### Constructor

#### new RasterChunkReducePair( min : <span style="font-weight: 400;">[RasterChunkReduceData](../alpenglow/RasterChunkReduceData.md)</span>, max : <span style="font-weight: 400;">[RasterChunkReduceData](../alpenglow/RasterChunkReduceData.md)</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### isFirstEdge() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #isFirstEdge data-toc-label='isFirstEdge' }

#### isLastEdge() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #isLastEdge data-toc-label='isLastEdge' }

#### toStrings() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>[]</span> {: #toStrings data-toc-label='toStrings' }

#### writeEncoding( encoder : <span style="font-weight: 400;">[ByteEncoder](../alpenglow/ByteEncoder.md)</span> ) {: #writeEncoding data-toc-label='writeEncoding' }

### Static Methods

#### combine( a : <span style="font-weight: 400;">[RasterChunkReducePair](../alpenglow/RasterChunkReducePair.md)</span>, b : <span style="font-weight: 400;">[RasterChunkReducePair](../alpenglow/RasterChunkReducePair.md)</span> ) : <span style="font-weight: 400;">[RasterChunkReducePair](../alpenglow/RasterChunkReducePair.md)</span> {: #combine data-toc-label='combine' }

#### readEncoding( arrayBuffer : <span style="font-weight: 400;">ArrayBuffer</span>, byteOffset : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[RasterChunkReducePair](../alpenglow/RasterChunkReducePair.md)</span> {: #readEncoding data-toc-label='readEncoding' }

#### fromArrayBuffer( arrayBuffer : <span style="font-weight: 400;">ArrayBuffer</span> ) : <span style="font-weight: 400;">[RasterChunkReducePair](../alpenglow/RasterChunkReducePair.md)[]</span> {: #fromArrayBuffer data-toc-label='fromArrayBuffer' }

### Static Properties

#### ENCODING_BYTE_LENGTH {: #ENCODING_BYTE_LENGTH data-toc-label='ENCODING_BYTE_LENGTH' }

(readonly)

#### INDETERMINATE : <span style="font-weight: 400;">[RasterChunkReducePair](../alpenglow/RasterChunkReducePair.md)</span> {: #INDETERMINATE data-toc-label='INDETERMINATE' }

(readonly)

#### OUT_OF_RANGE : <span style="font-weight: 400;">[RasterChunkReducePair](../alpenglow/RasterChunkReducePair.md)</span> {: #OUT_OF_RANGE data-toc-label='OUT_OF_RANGE' }

(readonly)



## Source Code

See the source for [RasterChunkReducePair.ts](https://github.com/phetsims/alpenglow/blob/main/js/parallel/raster-clip/RasterChunkReducePair.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
