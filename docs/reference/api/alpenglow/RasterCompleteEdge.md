# RasterCompleteEdge

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/alpenglow/blob/main/js/parallel/raster-clip/RasterCompleteEdge.ts](https://github.com/phetsims/alpenglow/blob/main/js/parallel/raster-clip/RasterCompleteEdge.ts) for the most up-to-date information.

## Overview

Represents an edge from a RasterCompleteEdgeChunk

Output edge for the raster-clip algorithm

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class RasterCompleteEdge {: #RasterCompleteEdge }


```js
import { RasterCompleteEdge } from 'scenerystack/alpenglow';
```
### Constructor

#### new RasterCompleteEdge( startPoint : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span>, endPoint : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> ) {: #RasterCompleteEdge-constructor data-toc-label='new RasterCompleteEdge' }

### Instance Methods

#### toString() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> {: #toString data-toc-label='toString' }

#### writeEncoding( encoder : <span style="font-weight: 400;">[ByteEncoder](../alpenglow/ByteEncoder.md)</span> ) {: #writeEncoding data-toc-label='writeEncoding' }

### Static Methods

#### readEncoding( arrayBuffer : <span style="font-weight: 400;">ArrayBuffer</span>, byteOffset : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[RasterCompleteEdge](../alpenglow/RasterCompleteEdge.md)</span> {: #readEncoding data-toc-label='readEncoding' }

#### fromArrayBuffer( arrayBuffer : <span style="font-weight: 400;">ArrayBuffer</span> ) : <span style="font-weight: 400;">[RasterCompleteEdge](../alpenglow/RasterCompleteEdge.md)[]</span> {: #fromArrayBuffer data-toc-label='fromArrayBuffer' }

### Static Properties

#### ENCODING_BYTE_LENGTH {: #ENCODING_BYTE_LENGTH data-toc-label='ENCODING_BYTE_LENGTH' }

(readonly)

#### INDETERMINATE : <span style="font-weight: 400;">[RasterCompleteEdge](../alpenglow/RasterCompleteEdge.md)</span> {: #INDETERMINATE data-toc-label='INDETERMINATE' }

(readonly)



## Source Code

See the source for [RasterCompleteEdge.ts](https://github.com/phetsims/alpenglow/blob/main/js/parallel/raster-clip/RasterCompleteEdge.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
