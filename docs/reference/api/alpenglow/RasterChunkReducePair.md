# RasterChunkReducePair

## Overview

Like RasterChunkReduceQuad, but for the initial case where our left/right values are the same, and we can do a
slightly different optimized reduce.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class RasterChunkReducePair {: #RasterChunkReducePair }


```js
import { RasterChunkReducePair } from 'scenerystack/alpenglow';
```
### Constructor

#### new RasterChunkReducePair( min : <span style="font-weight: 400; opacity: 80%;">RasterChunkReduceData</span>, max : <span style="font-weight: 400; opacity: 80%;">RasterChunkReduceData</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### isFirstEdge() : <span style="font-weight: 400; opacity: 80%;">boolean</span> {: #isFirstEdge data-toc-label='isFirstEdge' }

#### isLastEdge() : <span style="font-weight: 400; opacity: 80%;">boolean</span> {: #isLastEdge data-toc-label='isLastEdge' }

#### toStrings() : <span style="font-weight: 400; opacity: 80%;">string[]</span> {: #toStrings data-toc-label='toStrings' }

#### writeEncoding( encoder : <span style="font-weight: 400; opacity: 80%;">ByteEncoder</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #writeEncoding data-toc-label='writeEncoding' }

### Static Methods

#### combine( a : <span style="font-weight: 400; opacity: 80%;">RasterChunkReducePair</span>, b : <span style="font-weight: 400; opacity: 80%;">RasterChunkReducePair</span> ) : <span style="font-weight: 400; opacity: 80%;">RasterChunkReducePair</span> {: #combine data-toc-label='combine' }

#### readEncoding( arrayBuffer : <span style="font-weight: 400; opacity: 80%;">ArrayBuffer</span>, byteOffset : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">RasterChunkReducePair</span> {: #readEncoding data-toc-label='readEncoding' }

#### fromArrayBuffer( arrayBuffer : <span style="font-weight: 400; opacity: 80%;">ArrayBuffer</span> ) : <span style="font-weight: 400; opacity: 80%;">RasterChunkReducePair[]</span> {: #fromArrayBuffer data-toc-label='fromArrayBuffer' }

### Static Properties

#### ENCODING_BYTE_LENGTH {: #ENCODING_BYTE_LENGTH data-toc-label='ENCODING_BYTE_LENGTH' }

(readonly)

#### INDETERMINATE : <span style="font-weight: 400; opacity: 80%;">RasterChunkReducePair</span> {: #INDETERMINATE data-toc-label='INDETERMINATE' }

(readonly)

#### OUT_OF_RANGE : <span style="font-weight: 400; opacity: 80%;">RasterChunkReducePair</span> {: #OUT_OF_RANGE data-toc-label='OUT_OF_RANGE' }

(readonly)



## Source Code

See the source for [RasterChunkReducePair.ts](https://github.com/phetsims/alpenglow/blob/main/js/parallel/raster-clip/RasterChunkReducePair.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
