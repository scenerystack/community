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

#### new RasterEdgeClip( clippedChunkIndex : <span style="font-weight: 400; opacity: 80%;">number</span>, point0 : <span style="font-weight: 400; opacity: 80%;">Vector2</span>, point1 : <span style="font-weight: 400; opacity: 80%;">Vector2</span>, point2 : <span style="font-weight: 400; opacity: 80%;">Vector2</span>, point3 : <span style="font-weight: 400; opacity: 80%;">Vector2</span>, isFirstEdge : <span style="font-weight: 400; opacity: 80%;">boolean</span>, isLastEdge : <span style="font-weight: 400; opacity: 80%;">boolean</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### getCount() : <span style="font-weight: 400; opacity: 80%;">number</span> {: #getCount data-toc-label='getCount' }

#### getArea() : <span style="font-weight: 400; opacity: 80%;">number</span> {: #getArea data-toc-label='getArea' }

#### toString() : <span style="font-weight: 400; opacity: 80%;">string</span> {: #toString data-toc-label='toString' }

#### writeEncoding( encoder : <span style="font-weight: 400; opacity: 80%;">ByteEncoder</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #writeEncoding data-toc-label='writeEncoding' }

### Static Methods

#### readEncoding( arrayBuffer : <span style="font-weight: 400; opacity: 80%;">ArrayBuffer</span>, byteOffset : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">RasterEdgeClip</span> {: #readEncoding data-toc-label='readEncoding' }

#### fromArrayBuffer( arrayBuffer : <span style="font-weight: 400; opacity: 80%;">ArrayBuffer</span> ) : <span style="font-weight: 400; opacity: 80%;">RasterEdgeClip[]</span> {: #fromArrayBuffer data-toc-label='fromArrayBuffer' }

### Static Properties

#### ENCODING_BYTE_LENGTH {: #ENCODING_BYTE_LENGTH data-toc-label='ENCODING_BYTE_LENGTH' }

(readonly)

#### INDETERMINATE : <span style="font-weight: 400; opacity: 80%;">RasterEdgeClip</span> {: #INDETERMINATE data-toc-label='INDETERMINATE' }

(readonly)



## Source Code

See the source for [RasterEdgeClip.ts](https://github.com/phetsims/alpenglow/blob/main/js/parallel/raster-clip/RasterEdgeClip.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
