# RasterSplitReduceData

## Overview

A pair of counts (reducible/complete).

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class RasterSplitReduceData {: #RasterSplitReduceData }


```js
import { RasterSplitReduceData } from 'scenerystack/alpenglow';
```
### Constructor

#### new RasterSplitReduceData( numReducible : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, numComplete : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### toString() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> {: #toString data-toc-label='toString' }

#### writeEncoding( encoder : <span style="font-weight: 400;">[ByteEncoder](../alpenglow/ByteEncoder.md)</span> ) {: #writeEncoding data-toc-label='writeEncoding' }

### Static Methods

#### readEncoding( arrayBuffer : <span style="font-weight: 400;">ArrayBuffer</span>, byteOffset : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[RasterSplitReduceData](../alpenglow/RasterSplitReduceData.md)</span> {: #readEncoding data-toc-label='readEncoding' }

#### fromArrayBuffer( arrayBuffer : <span style="font-weight: 400;">ArrayBuffer</span> ) : <span style="font-weight: 400;">[RasterSplitReduceData](../alpenglow/RasterSplitReduceData.md)[]</span> {: #fromArrayBuffer data-toc-label='fromArrayBuffer' }

#### combine( a : <span style="font-weight: 400;">[RasterSplitReduceData](../alpenglow/RasterSplitReduceData.md)</span>, b : <span style="font-weight: 400;">[RasterSplitReduceData](../alpenglow/RasterSplitReduceData.md)</span> ) : <span style="font-weight: 400;">[RasterSplitReduceData](../alpenglow/RasterSplitReduceData.md)</span> {: #combine data-toc-label='combine' }

#### from( edgeClip : <span style="font-weight: 400;">[RasterEdgeClip](../alpenglow/RasterEdgeClip.md)</span>, clippedChunk : <span style="font-weight: 400;">[RasterClippedChunk](../alpenglow/RasterClippedChunk.md)</span>, exists : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> ) : <span style="font-weight: 400;">[RasterSplitReduceData](../alpenglow/RasterSplitReduceData.md)</span> {: #from data-toc-label='from' }

### Static Properties

#### ENCODING_BYTE_LENGTH {: #ENCODING_BYTE_LENGTH data-toc-label='ENCODING_BYTE_LENGTH' }

(readonly)

#### INDETERMINATE : <span style="font-weight: 400;">[RasterSplitReduceData](../alpenglow/RasterSplitReduceData.md)</span> {: #INDETERMINATE data-toc-label='INDETERMINATE' }

(readonly)

#### IDENTITY : <span style="font-weight: 400;">[RasterSplitReduceData](../alpenglow/RasterSplitReduceData.md)</span> {: #IDENTITY data-toc-label='IDENTITY' }

(readonly)



## Source Code

See the source for [RasterSplitReduceData.ts](https://github.com/phetsims/alpenglow/blob/main/js/parallel/raster-clip/RasterSplitReduceData.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
