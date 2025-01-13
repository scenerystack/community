# RasterSplitReduceData

## Overview

A pair of counts (reducible/complete).

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class RasterSplitReduceData {: #RasterSplitReduceData }


```js
import { RasterSplitReduceData } from 'scenerystack/alpenglow';
```
### Constructor

#### new RasterSplitReduceData( numReducible : <span style="font-weight: 400; opacity: 80%;">number</span>, numComplete : <span style="font-weight: 400; opacity: 80%;">number</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### toString() : <span style="font-weight: 400; opacity: 80%;">string</span> {: #toString data-toc-label='toString' }

#### writeEncoding( encoder : <span style="font-weight: 400; opacity: 80%;">ByteEncoder</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #writeEncoding data-toc-label='writeEncoding' }

### Static Methods

#### readEncoding( arrayBuffer : <span style="font-weight: 400; opacity: 80%;">ArrayBuffer</span>, byteOffset : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">RasterSplitReduceData</span> {: #readEncoding data-toc-label='readEncoding' }

#### fromArrayBuffer( arrayBuffer : <span style="font-weight: 400; opacity: 80%;">ArrayBuffer</span> ) : <span style="font-weight: 400; opacity: 80%;">RasterSplitReduceData[]</span> {: #fromArrayBuffer data-toc-label='fromArrayBuffer' }

#### combine( a : <span style="font-weight: 400; opacity: 80%;">RasterSplitReduceData</span>, b : <span style="font-weight: 400; opacity: 80%;">RasterSplitReduceData</span> ) : <span style="font-weight: 400; opacity: 80%;">RasterSplitReduceData</span> {: #combine data-toc-label='combine' }

#### from( edgeClip : <span style="font-weight: 400; opacity: 80%;">RasterEdgeClip</span>, clippedChunk : <span style="font-weight: 400; opacity: 80%;">RasterClippedChunk</span>, exists : <span style="font-weight: 400; opacity: 80%;">boolean</span> ) : <span style="font-weight: 400; opacity: 80%;">RasterSplitReduceData</span> {: #from data-toc-label='from' }

### Static Properties

#### ENCODING_BYTE_LENGTH {: #ENCODING_BYTE_LENGTH data-toc-label='ENCODING_BYTE_LENGTH' }

(readonly)

#### INDETERMINATE : <span style="font-weight: 400; opacity: 80%;">RasterSplitReduceData</span> {: #INDETERMINATE data-toc-label='INDETERMINATE' }

(readonly)

#### IDENTITY : <span style="font-weight: 400; opacity: 80%;">RasterSplitReduceData</span> {: #IDENTITY data-toc-label='IDENTITY' }

(readonly)



## Source Code

See the source for [RasterSplitReduceData.ts](https://github.com/phetsims/alpenglow/blob/main/js/parallel/raster-clip/RasterSplitReduceData.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
