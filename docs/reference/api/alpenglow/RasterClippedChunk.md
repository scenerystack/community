# RasterClippedChunk

## Overview

A clipped part of a RasterChunk, which will get filled with data during reduction.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class RasterClippedChunk {: #RasterClippedChunk }


```js
import { RasterClippedChunk } from 'scenerystack/alpenglow';
```
### Constructor

#### new RasterClippedChunk( renderProgramIndex : <span style="font-weight: 400; opacity: 80%;">number</span>, needsFace : <span style="font-weight: 400; opacity: 80%;">boolean</span>, isConstant : <span style="font-weight: 400; opacity: 80%;">boolean</span>, isReducible : <span style="font-weight: 400; opacity: 80%;">boolean</span>, isComplete : <span style="font-weight: 400; opacity: 80%;">boolean</span>, isFullArea : <span style="font-weight: 400; opacity: 80%;">boolean</span>, area : <span style="font-weight: 400; opacity: 80%;">number</span>, minX : <span style="font-weight: 400; opacity: 80%;">number</span>, minY : <span style="font-weight: 400; opacity: 80%;">number</span>, maxX : <span style="font-weight: 400; opacity: 80%;">number</span>, maxY : <span style="font-weight: 400; opacity: 80%;">number</span>, minXCount : <span style="font-weight: 400; opacity: 80%;">number</span>, minYCount : <span style="font-weight: 400; opacity: 80%;">number</span>, maxXCount : <span style="font-weight: 400; opacity: 80%;">number</span>, maxYCount : <span style="font-weight: 400; opacity: 80%;">number</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### needsCompleteOutputSplit() : <span style="font-weight: 400; opacity: 80%;">boolean</span> {: #needsCompleteOutputSplit data-toc-label='needsCompleteOutputSplit' }

#### outputSplitCount() : <span style="font-weight: 400; opacity: 80%;">number</span> {: #outputSplitCount data-toc-label='outputSplitCount' }

#### getSplitReduceData() : <span style="font-weight: 400; opacity: 80%;">RasterSplitReduceData</span> {: #getSplitReduceData data-toc-label='getSplitReduceData' }

#### isExportingCompleteEdges() : <span style="font-weight: 400; opacity: 80%;">boolean</span> {: #isExportingCompleteEdges data-toc-label='isExportingCompleteEdges' }

#### toString() : <span style="font-weight: 400; opacity: 80%;">string</span> {: #toString data-toc-label='toString' }

#### writeEncoding( encoder : <span style="font-weight: 400; opacity: 80%;">ByteEncoder</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #writeEncoding data-toc-label='writeEncoding' }

### Static Methods

#### readEncoding( arrayBuffer : <span style="font-weight: 400; opacity: 80%;">ArrayBuffer</span>, byteOffset : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">RasterClippedChunk</span> {: #readEncoding data-toc-label='readEncoding' }

#### fromArrayBuffer( arrayBuffer : <span style="font-weight: 400; opacity: 80%;">ArrayBuffer</span> ) : <span style="font-weight: 400; opacity: 80%;">RasterClippedChunk[]</span> {: #fromArrayBuffer data-toc-label='fromArrayBuffer' }

### Static Properties

#### ENCODING_BYTE_LENGTH {: #ENCODING_BYTE_LENGTH data-toc-label='ENCODING_BYTE_LENGTH' }

(readonly)

#### INDETERMINATE : <span style="font-weight: 400; opacity: 80%;">RasterClippedChunk</span> {: #INDETERMINATE data-toc-label='INDETERMINATE' }

(readonly)

#### DISCARDABLE : <span style="font-weight: 400; opacity: 80%;">RasterClippedChunk</span> {: #DISCARDABLE data-toc-label='DISCARDABLE' }

(readonly)



## Source Code

See the source for [RasterClippedChunk.ts](https://github.com/phetsims/alpenglow/blob/main/js/parallel/raster-clip/RasterClippedChunk.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
