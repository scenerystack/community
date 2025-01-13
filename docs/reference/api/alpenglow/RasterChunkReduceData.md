# RasterChunkReduceData

## Overview

(Partial) data for a single clipped chunk, which is reduced and then when complete (isFirstEdge &amp;&amp; isLastEdge) is
applied to the clipped chunk.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class RasterChunkReduceData {: #RasterChunkReduceData }


```js
import { RasterChunkReduceData } from 'scenerystack/alpenglow';
```
### Constructor

#### new RasterChunkReduceData( clippedChunkIndex : <span style="font-weight: 400; opacity: 80%;">number</span>, area : <span style="font-weight: 400; opacity: 80%;">number</span>, isFirstEdge : <span style="font-weight: 400; opacity: 80%;">boolean</span>, isLastEdge : <span style="font-weight: 400; opacity: 80%;">boolean</span>, minX : <span style="font-weight: 400; opacity: 80%;">number</span>, minY : <span style="font-weight: 400; opacity: 80%;">number</span>, maxX : <span style="font-weight: 400; opacity: 80%;">number</span>, maxY : <span style="font-weight: 400; opacity: 80%;">number</span>, minXCount : <span style="font-weight: 400; opacity: 80%;">number</span>, minYCount : <span style="font-weight: 400; opacity: 80%;">number</span>, maxXCount : <span style="font-weight: 400; opacity: 80%;">number</span>, maxYCount : <span style="font-weight: 400; opacity: 80%;">number</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### isValid() : <span style="font-weight: 400; opacity: 80%;">boolean</span> {: #isValid data-toc-label='isValid' }

#### toString() : <span style="font-weight: 400; opacity: 80%;">string</span> {: #toString data-toc-label='toString' }

#### writeEncoding( encoder : <span style="font-weight: 400; opacity: 80%;">ByteEncoder</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #writeEncoding data-toc-label='writeEncoding' }

#### equals( other : <span style="font-weight: 400; opacity: 80%;">RasterChunkReduceData</span> ) : <span style="font-weight: 400; opacity: 80%;">boolean</span> {: #equals data-toc-label='equals' }

#### apply( clippedChunk : <span style="font-weight: 400; opacity: 80%;">RasterClippedChunk</span> ) : <span style="font-weight: 400; opacity: 80%;">RasterClippedChunk</span> {: #apply data-toc-label='apply' }

### Static Methods

#### readEncoding( arrayBuffer : <span style="font-weight: 400; opacity: 80%;">ArrayBuffer</span>, byteOffset : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">RasterChunkReduceData</span> {: #readEncoding data-toc-label='readEncoding' }

#### fromArrayBuffer( arrayBuffer : <span style="font-weight: 400; opacity: 80%;">ArrayBuffer</span> ) : <span style="font-weight: 400; opacity: 80%;">RasterChunkReduceData[]</span> {: #fromArrayBuffer data-toc-label='fromArrayBuffer' }

#### combine( a : <span style="font-weight: 400; opacity: 80%;">RasterChunkReduceData</span>, b : <span style="font-weight: 400; opacity: 80%;">RasterChunkReduceData</span> ) : <span style="font-weight: 400; opacity: 80%;">RasterChunkReduceData</span> {: #combine data-toc-label='combine' }

### Static Properties

#### ENCODING_BYTE_LENGTH {: #ENCODING_BYTE_LENGTH data-toc-label='ENCODING_BYTE_LENGTH' }

(readonly)

#### INDETERMINATE : <span style="font-weight: 400; opacity: 80%;">RasterChunkReduceData</span> {: #INDETERMINATE data-toc-label='INDETERMINATE' }

(readonly)

#### OUT_OF_RANGE : <span style="font-weight: 400; opacity: 80%;">RasterChunkReduceData</span> {: #OUT_OF_RANGE data-toc-label='OUT_OF_RANGE' }

(readonly)



## Source Code

See the source for [RasterChunkReduceData.ts](https://github.com/phetsims/alpenglow/blob/main/js/parallel/raster-clip/RasterChunkReduceData.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
