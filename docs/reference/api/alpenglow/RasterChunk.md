# RasterChunk

## Overview

Contains path data within a bounds, for a particular RenderProgram

Used for the raster-clip input, and the output for reducible chunks (that will be fed back in)

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class RasterChunk {: #RasterChunk }


```js
import { RasterChunk } from 'scenerystack/alpenglow';
```
### Constructor

#### new RasterChunk( renderProgramIndex : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, needsFace : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span>, isConstant : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span>, edgesOffset : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, numEdges : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, minX : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, minY : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, maxX : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, maxY : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, minXCount : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, minYCount : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, maxXCount : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, maxYCount : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) {: #RasterChunk-constructor data-toc-label='new RasterChunk' }

### Instance Methods

#### withEdgeInfo( startIndex : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, endIndex : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[RasterChunk](../alpenglow/RasterChunk.md)</span> {: #withEdgeInfo data-toc-label='withEdgeInfo' }

#### toString() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> {: #toString data-toc-label='toString' }

#### writeEncoding( encoder : <span style="font-weight: 400;">[ByteEncoder](../alpenglow/ByteEncoder.md)</span> ) {: #writeEncoding data-toc-label='writeEncoding' }

### Static Methods

#### readEncoding( arrayBuffer : <span style="font-weight: 400;">ArrayBuffer</span>, byteOffset : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[RasterChunk](../alpenglow/RasterChunk.md)</span> {: #readEncoding data-toc-label='readEncoding' }

#### fromArrayBuffer( arrayBuffer : <span style="font-weight: 400;">ArrayBuffer</span> ) : <span style="font-weight: 400;">[RasterChunk](../alpenglow/RasterChunk.md)[]</span> {: #fromArrayBuffer data-toc-label='fromArrayBuffer' }

#### validate( chunks : <span style="font-weight: 400;">[ParallelStorageArray](../alpenglow/ParallelStorageArray.md)&lt;[RasterChunk](../alpenglow/RasterChunk.md)&gt;</span>, edges : <span style="font-weight: 400;">[ParallelStorageArray](../alpenglow/ParallelStorageArray.md)&lt;[RasterEdge](../alpenglow/RasterEdge.md)&gt;</span>, numChunks : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, numEdges : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) {: #validate data-toc-label='validate' }

### Static Properties

#### ENCODING_BYTE_LENGTH {: #ENCODING_BYTE_LENGTH data-toc-label='ENCODING_BYTE_LENGTH' }

(readonly)

#### INDETERMINATE : <span style="font-weight: 400;">[RasterChunk](../alpenglow/RasterChunk.md)</span> {: #INDETERMINATE data-toc-label='INDETERMINATE' }

(readonly)



## Source Code

See the source for [RasterChunk.ts](https://github.com/phetsims/alpenglow/blob/main/js/parallel/raster-clip/RasterChunk.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
