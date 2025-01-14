# RasterCompleteChunk

## Overview

Output chunk for the raster-clip algorithm

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class RasterCompleteChunk {: #RasterCompleteChunk }


```js
import { RasterCompleteChunk } from 'scenerystack/alpenglow';
```
### Constructor

#### new RasterCompleteChunk( renderProgramIndex : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, edgesOffset : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, numEdges : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, isFullArea : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span>, area : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, minX : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, minY : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, maxX : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, maxY : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, minXCount : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, minYCount : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, maxXCount : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, maxYCount : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) {: #RasterCompleteChunk-constructor data-toc-label='new RasterCompleteChunk' }

### Instance Methods

#### withEdgeInfo( startIndex : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, endIndex : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[RasterCompleteChunk](../alpenglow/RasterCompleteChunk.md)</span> {: #withEdgeInfo data-toc-label='withEdgeInfo' }

#### toString() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> {: #toString data-toc-label='toString' }

#### writeEncoding( encoder : <span style="font-weight: 400;">[ByteEncoder](../alpenglow/ByteEncoder.md)</span> ) {: #writeEncoding data-toc-label='writeEncoding' }

### Static Methods

#### readEncoding( arrayBuffer : <span style="font-weight: 400;">ArrayBuffer</span>, byteOffset : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[RasterCompleteChunk](../alpenglow/RasterCompleteChunk.md)</span> {: #readEncoding data-toc-label='readEncoding' }

#### fromArrayBuffer( arrayBuffer : <span style="font-weight: 400;">ArrayBuffer</span> ) : <span style="font-weight: 400;">[RasterCompleteChunk](../alpenglow/RasterCompleteChunk.md)[]</span> {: #fromArrayBuffer data-toc-label='fromArrayBuffer' }

#### validate( chunks : <span style="font-weight: 400;">[ParallelStorageArray](../alpenglow/ParallelStorageArray.md)&lt;[RasterCompleteChunk](../alpenglow/RasterCompleteChunk.md)&gt;</span>, edges : <span style="font-weight: 400;">[ParallelStorageArray](../alpenglow/ParallelStorageArray.md)&lt;[RasterCompleteEdge](../alpenglow/RasterCompleteEdge.md)&gt;</span>, numChunks : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, numEdges : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) {: #validate data-toc-label='validate' }

### Static Properties

#### ENCODING_BYTE_LENGTH {: #ENCODING_BYTE_LENGTH data-toc-label='ENCODING_BYTE_LENGTH' }

(readonly)

#### INDETERMINATE : <span style="font-weight: 400;">[RasterCompleteChunk](../alpenglow/RasterCompleteChunk.md)</span> {: #INDETERMINATE data-toc-label='INDETERMINATE' }

(readonly)



## Source Code

See the source for [RasterCompleteChunk.ts](https://github.com/phetsims/alpenglow/blob/main/js/parallel/raster-clip/RasterCompleteChunk.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
