# RasterChunkReduceData

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/alpenglow/blob/main/js/parallel/raster-clip/RasterChunkReduceData.ts](https://github.com/phetsims/alpenglow/blob/main/js/parallel/raster-clip/RasterChunkReduceData.ts) for the most up-to-date information.

## Overview

(Partial) data for a single clipped chunk, which is reduced and then when complete (isFirstEdge &amp;&amp; isLastEdge) is
applied to the clipped chunk.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class RasterChunkReduceData {: #RasterChunkReduceData }


```js
import { RasterChunkReduceData } from 'scenerystack/alpenglow';
```
### Constructor

#### new RasterChunkReduceData( clippedChunkIndex : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, area : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, isFirstEdge : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span>, isLastEdge : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span>, minX : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, minY : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, maxX : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, maxY : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, minXCount : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, minYCount : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, maxXCount : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, maxYCount : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) {: #RasterChunkReduceData-constructor data-toc-label='new RasterChunkReduceData' }

### Instance Methods

#### isValid() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #isValid data-toc-label='isValid' }

#### toString() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> {: #toString data-toc-label='toString' }

#### writeEncoding( encoder : <span style="font-weight: 400;">[ByteEncoder](../alpenglow/ByteEncoder.md)</span> ) {: #writeEncoding data-toc-label='writeEncoding' }

#### equals( other : <span style="font-weight: 400;">[RasterChunkReduceData](../alpenglow/RasterChunkReduceData.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #equals data-toc-label='equals' }

#### apply( clippedChunk : <span style="font-weight: 400;">[RasterClippedChunk](../alpenglow/RasterClippedChunk.md)</span> ) : <span style="font-weight: 400;">[RasterClippedChunk](../alpenglow/RasterClippedChunk.md)</span> {: #apply data-toc-label='apply' }

### Static Methods

#### readEncoding( arrayBuffer : <span style="font-weight: 400;">ArrayBuffer</span>, byteOffset : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[RasterChunkReduceData](../alpenglow/RasterChunkReduceData.md)</span> {: #readEncoding data-toc-label='readEncoding' }

#### fromArrayBuffer( arrayBuffer : <span style="font-weight: 400;">ArrayBuffer</span> ) : <span style="font-weight: 400;">[RasterChunkReduceData](../alpenglow/RasterChunkReduceData.md)[]</span> {: #fromArrayBuffer data-toc-label='fromArrayBuffer' }

#### combine( a : <span style="font-weight: 400;">[RasterChunkReduceData](../alpenglow/RasterChunkReduceData.md)</span>, b : <span style="font-weight: 400;">[RasterChunkReduceData](../alpenglow/RasterChunkReduceData.md)</span> ) : <span style="font-weight: 400;">[RasterChunkReduceData](../alpenglow/RasterChunkReduceData.md)</span> {: #combine data-toc-label='combine' }

### Static Properties

#### ENCODING_BYTE_LENGTH {: #ENCODING_BYTE_LENGTH data-toc-label='ENCODING_BYTE_LENGTH' }

(readonly)

#### INDETERMINATE : <span style="font-weight: 400;">[RasterChunkReduceData](../alpenglow/RasterChunkReduceData.md)</span> {: #INDETERMINATE data-toc-label='INDETERMINATE' }

(readonly)

#### OUT_OF_RANGE : <span style="font-weight: 400;">[RasterChunkReduceData](../alpenglow/RasterChunkReduceData.md)</span> {: #OUT_OF_RANGE data-toc-label='OUT_OF_RANGE' }

(readonly)



## Source Code

See the source for [RasterChunkReduceData.ts](https://github.com/phetsims/alpenglow/blob/main/js/parallel/raster-clip/RasterChunkReduceData.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
