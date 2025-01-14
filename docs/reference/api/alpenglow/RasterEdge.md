# RasterEdge

## Overview

Represents an edge from a RasterChunk

Used for the raster-clip input, and the output for reducible edges (that will be fed back in)

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class RasterEdge {: #RasterEdge }


```js
import { RasterEdge } from 'scenerystack/alpenglow';
```
### Constructor

#### new RasterEdge( chunkIndex : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, isFirstEdge : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span>, isLastEdge : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span>, startPoint : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span>, endPoint : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> ) {: #RasterEdge-constructor data-toc-label='new RasterEdge' }

### Instance Methods

#### toString() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> {: #toString data-toc-label='toString' }

#### writeEncoding( encoder : <span style="font-weight: 400;">[ByteEncoder](../alpenglow/ByteEncoder.md)</span> ) {: #writeEncoding data-toc-label='writeEncoding' }

### Static Methods

#### readEncoding( arrayBuffer : <span style="font-weight: 400;">ArrayBuffer</span>, byteOffset : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[RasterEdge](../alpenglow/RasterEdge.md)</span> {: #readEncoding data-toc-label='readEncoding' }

#### fromArrayBuffer( arrayBuffer : <span style="font-weight: 400;">ArrayBuffer</span> ) : <span style="font-weight: 400;">[RasterEdge](../alpenglow/RasterEdge.md)[]</span> {: #fromArrayBuffer data-toc-label='fromArrayBuffer' }

### Static Properties

#### ENCODING_BYTE_LENGTH {: #ENCODING_BYTE_LENGTH data-toc-label='ENCODING_BYTE_LENGTH' }

(readonly)

#### INDETERMINATE : <span style="font-weight: 400;">[RasterEdge](../alpenglow/RasterEdge.md)</span> {: #INDETERMINATE data-toc-label='INDETERMINATE' }

(readonly)



## Source Code

See the source for [RasterEdge.ts](https://github.com/phetsims/alpenglow/blob/main/js/parallel/raster-clip/RasterEdge.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
