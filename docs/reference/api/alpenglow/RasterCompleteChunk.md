# RasterCompleteChunk

## Overview

Output chunk for the raster-clip algorithm

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class RasterCompleteChunk {: #RasterCompleteChunk }


```js
import { RasterCompleteChunk } from 'scenerystack/alpenglow';
```
### Constructor

#### new RasterCompleteChunk( renderProgramIndex : <span style="font-weight: 400; opacity: 80%;">number</span>, edgesOffset : <span style="font-weight: 400; opacity: 80%;">number</span>, numEdges : <span style="font-weight: 400; opacity: 80%;">number</span>, isFullArea : <span style="font-weight: 400; opacity: 80%;">boolean</span>, area : <span style="font-weight: 400; opacity: 80%;">number</span>, minX : <span style="font-weight: 400; opacity: 80%;">number</span>, minY : <span style="font-weight: 400; opacity: 80%;">number</span>, maxX : <span style="font-weight: 400; opacity: 80%;">number</span>, maxY : <span style="font-weight: 400; opacity: 80%;">number</span>, minXCount : <span style="font-weight: 400; opacity: 80%;">number</span>, minYCount : <span style="font-weight: 400; opacity: 80%;">number</span>, maxXCount : <span style="font-weight: 400; opacity: 80%;">number</span>, maxYCount : <span style="font-weight: 400; opacity: 80%;">number</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### withEdgeInfo( startIndex : <span style="font-weight: 400; opacity: 80%;">number</span>, endIndex : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">RasterCompleteChunk</span> {: #withEdgeInfo data-toc-label='withEdgeInfo' }

#### toString() : <span style="font-weight: 400; opacity: 80%;">string</span> {: #toString data-toc-label='toString' }

#### writeEncoding( encoder : <span style="font-weight: 400; opacity: 80%;">ByteEncoder</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #writeEncoding data-toc-label='writeEncoding' }

### Static Methods

#### readEncoding( arrayBuffer : <span style="font-weight: 400; opacity: 80%;">ArrayBuffer</span>, byteOffset : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">RasterCompleteChunk</span> {: #readEncoding data-toc-label='readEncoding' }

#### fromArrayBuffer( arrayBuffer : <span style="font-weight: 400; opacity: 80%;">ArrayBuffer</span> ) : <span style="font-weight: 400; opacity: 80%;">RasterCompleteChunk[]</span> {: #fromArrayBuffer data-toc-label='fromArrayBuffer' }

#### validate( chunks : <span style="font-weight: 400; opacity: 80%;">ParallelStorageArray&lt;RasterCompleteChunk&gt;</span>, edges : <span style="font-weight: 400; opacity: 80%;">ParallelStorageArray&lt;RasterCompleteEdge&gt;</span>, numChunks : <span style="font-weight: 400; opacity: 80%;">number</span>, numEdges : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #validate data-toc-label='validate' }

### Static Properties

#### ENCODING_BYTE_LENGTH {: #ENCODING_BYTE_LENGTH data-toc-label='ENCODING_BYTE_LENGTH' }

(readonly)

#### INDETERMINATE : <span style="font-weight: 400; opacity: 80%;">RasterCompleteChunk</span> {: #INDETERMINATE data-toc-label='INDETERMINATE' }

(readonly)



## Source Code

See the source for [RasterCompleteChunk.ts](https://github.com/phetsims/alpenglow/blob/main/js/parallel/raster-clip/RasterCompleteChunk.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
