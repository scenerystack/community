# RasterEdgeClip

## Overview

Represents the clipped state of a RasterEdge. For the binary version, there will be two of these edge clips per
input edge.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class RasterEdgeClip {: #RasterEdgeClip }


```js
import { RasterEdgeClip } from 'scenerystack/alpenglow';
```
### Constructor

#### new RasterEdgeClip( clippedChunkIndex : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, point0 : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span>, point1 : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span>, point2 : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span>, point3 : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span>, isFirstEdge : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span>, isLastEdge : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> ) {: #RasterEdgeClip-constructor data-toc-label='new RasterEdgeClip' }

### Instance Methods

#### getCount() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #getCount data-toc-label='getCount' }

#### getArea() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #getArea data-toc-label='getArea' }

#### toString() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> {: #toString data-toc-label='toString' }

#### writeEncoding( encoder : <span style="font-weight: 400;">[ByteEncoder](../alpenglow/ByteEncoder.md)</span> ) {: #writeEncoding data-toc-label='writeEncoding' }

### Static Methods

#### readEncoding( arrayBuffer : <span style="font-weight: 400;">ArrayBuffer</span>, byteOffset : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[RasterEdgeClip](../alpenglow/RasterEdgeClip.md)</span> {: #readEncoding data-toc-label='readEncoding' }

#### fromArrayBuffer( arrayBuffer : <span style="font-weight: 400;">ArrayBuffer</span> ) : <span style="font-weight: 400;">[RasterEdgeClip](../alpenglow/RasterEdgeClip.md)[]</span> {: #fromArrayBuffer data-toc-label='fromArrayBuffer' }

### Static Properties

#### ENCODING_BYTE_LENGTH {: #ENCODING_BYTE_LENGTH data-toc-label='ENCODING_BYTE_LENGTH' }

(readonly)

#### INDETERMINATE : <span style="font-weight: 400;">[RasterEdgeClip](../alpenglow/RasterEdgeClip.md)</span> {: #INDETERMINATE data-toc-label='INDETERMINATE' }

(readonly)



## Source Code

See the source for [RasterEdgeClip.ts](https://github.com/phetsims/alpenglow/blob/main/js/parallel/raster-clip/RasterEdgeClip.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
