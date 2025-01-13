# RasterCompleteEdge

## Overview

Represents an edge from a RasterCompleteEdgeChunk

Output edge for the raster-clip algorithm

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class RasterCompleteEdge {: #RasterCompleteEdge }


```js
import { RasterCompleteEdge } from 'scenerystack/alpenglow';
```
### Constructor

#### new RasterCompleteEdge( startPoint : <span style="font-weight: 400; opacity: 80%;">Vector2</span>, endPoint : <span style="font-weight: 400; opacity: 80%;">Vector2</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### toString() : <span style="font-weight: 400; opacity: 80%;">string</span> {: #toString data-toc-label='toString' }

#### writeEncoding( encoder : <span style="font-weight: 400; opacity: 80%;">ByteEncoder</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #writeEncoding data-toc-label='writeEncoding' }

### Static Methods

#### readEncoding( arrayBuffer : <span style="font-weight: 400; opacity: 80%;">ArrayBuffer</span>, byteOffset : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">RasterCompleteEdge</span> {: #readEncoding data-toc-label='readEncoding' }

#### fromArrayBuffer( arrayBuffer : <span style="font-weight: 400; opacity: 80%;">ArrayBuffer</span> ) : <span style="font-weight: 400; opacity: 80%;">RasterCompleteEdge[]</span> {: #fromArrayBuffer data-toc-label='fromArrayBuffer' }

### Static Properties

#### ENCODING_BYTE_LENGTH {: #ENCODING_BYTE_LENGTH data-toc-label='ENCODING_BYTE_LENGTH' }

(readonly)

#### INDETERMINATE : <span style="font-weight: 400; opacity: 80%;">RasterCompleteEdge</span> {: #INDETERMINATE data-toc-label='INDETERMINATE' }

(readonly)



## Source Code

See the source for [RasterCompleteEdge.ts](https://github.com/phetsims/alpenglow/blob/main/js/parallel/raster-clip/RasterCompleteEdge.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
