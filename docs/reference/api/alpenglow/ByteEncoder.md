# ByteEncoder

## Overview

An appendable/settable buffer of bytes

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class ByteEncoder {: #ByteEncoder }


```js
import { ByteEncoder } from 'scenerystack/alpenglow';
```
### Constructor

#### new ByteEncoder( arrayBuffer? : <span style="font-weight: 400;">ArrayBuffer</span> ) {: #ByteEncoder-constructor data-toc-label='new ByteEncoder' }

### Instance Methods

#### clear() {: #clear data-toc-label='clear' }

#### pushByteEncoder( byteBuffer : <span style="font-weight: 400;">[ByteEncoder](../alpenglow/ByteEncoder.md)</span> ) {: #pushByteEncoder data-toc-label='pushByteEncoder' }

#### pushF32( f32 : <span style="font-weight: 400;">[F32](../alpenglow/ByteEncoder.md#F32)</span> ) {: #pushF32 data-toc-label='pushF32' }

#### pushU32( u32 : <span style="font-weight: 400;">[U32](../alpenglow/ByteEncoder.md#U32)</span> ) {: #pushU32 data-toc-label='pushU32' }

#### pushI32( i32 : <span style="font-weight: 400;">[I32](../alpenglow/ByteEncoder.md#I32)</span> ) {: #pushI32 data-toc-label='pushI32' }

#### pushReversedU32( u32 : <span style="font-weight: 400;">[U32](../alpenglow/ByteEncoder.md#U32)</span> ) {: #pushReversedU32 data-toc-label='pushReversedU32' }

#### pushU8( u8 : <span style="font-weight: 400;">[U8](../alpenglow/ByteEncoder.md#U8)</span> ) {: #pushU8 data-toc-label='pushU8' }

#### resize( byteLength ) {: #resize data-toc-label='resize' }

NOTE: this MAY truncate

#### encodeValues( values : <span style="font-weight: 400;">T[]</span>, encode : <span style="font-weight: 400;">( element: T, encoder: [ByteEncoder](../alpenglow/ByteEncoder.md) ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #encodeValues data-toc-label='encodeValues' }

#### decodeValues( decode : <span style="font-weight: 400;">( encoder: [ByteEncoder](../alpenglow/ByteEncoder.md), offset: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> ) =&gt; T</span>, bytesPerElement : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">T[]</span> {: #decodeValues data-toc-label='decodeValues' }

TODO: Note the stride of each value might be larger, based on the alignment of the type for WGSL

#### getDebug32String() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> {: #getDebug32String data-toc-label='getDebug32String' }

### Static Methods

#### padLeft( input : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span>, padding : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span>, length : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> {: #padLeft data-toc-label='padLeft' }

#### padRight( input : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span>, padding : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span>, length : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> {: #padRight data-toc-label='padRight' }

#### toU32Hex( n : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> {: #toU32Hex data-toc-label='toU32Hex' }

#### toU32Binary( n : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> {: #toU32Binary data-toc-label='toU32Binary' }

#### rightShiftU32( n : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, shift : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #rightShiftU32 data-toc-label='rightShiftU32' }

A safer right-shift that handles negative and out-of-range values

#### alignUp( len : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, alignment : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #alignUp data-toc-label='alignUp' }

#### nextMultipleOf( val : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, rhs : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #nextMultipleOf data-toc-label='nextMultipleOf' }

#### f32ToBytes( float : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[U8](../alpenglow/ByteEncoder.md#U8)[]</span> {: #f32ToBytes data-toc-label='f32ToBytes' }

Convert f32 to 4 bytes in little endian order

#### u32ToBytes( int : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[U8](../alpenglow/ByteEncoder.md#U8)[]</span> {: #u32ToBytes data-toc-label='u32ToBytes' }

Convert u32 to 4 bytes in little endian order

#### i32ToBytes( int : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[U8](../alpenglow/ByteEncoder.md#U8)[]</span> {: #i32ToBytes data-toc-label='i32ToBytes' }

Convert i32 to 4 bytes in little endian order

#### toStripedIndex( blockedIndex : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, workgroupSize : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, grainSize : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #toStripedIndex data-toc-label='toStripedIndex' }

Converts an index from a normal (blocked) order to a striped order (for improved memory coherence).

#### fromStripedIndex( stripedIndex : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, workgroupSize : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, grainSize : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #fromStripedIndex data-toc-label='fromStripedIndex' }

Converts an index from a striped order to a normal (blocked) order.

#### getConvergentIndex( index : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, size : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #getConvergentIndex data-toc-label='getConvergentIndex' }

Converts to/from convergent indices (and handles the modulo-size portion)

#### getCorank( k : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, m : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, n : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, compare : <span style="font-weight: 400;">( aIndex: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>, bIndex: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #getCorank data-toc-label='getCorank' }

Co-rank function, that determines the indices into two arrays that would be at a given rank if they were sorted
together (with a binary search).

It will return the index into the first array (A), and the index into the second array (B) would just be
k - result.

For example, if we have two arrays:

const a = [ 0, 5, 7, 7, 10, 11, 15, 16, 16, 16, 17 ];
const b = [ 1, 2, 5, 6, 7, 8, 9, 10, 11, 12, 13 ];

and define our co-rank function:
const get = k =&gt; phet.alpenglow.ByteEncoder.getCorank( k, a.length, b.length, ( i, j ) =&gt; a[ i ] - b[ j ] );

The following will return a sorted array of the values from both arrays:

_.range( 0, a.length + b.length ).map( k =&gt; {
  if ( get( k ) !== get( k + 1 ) ) {
    return a[ get( k ) ];
  } else {
    return b[ k - get( k ) ]
  }
} );
// [0, 1, 2, 5, 5, 6, 7, 7, 7, 8, 9, 10, 10, 11, 11, 12, 13, 15, 16, 16, 16, 17]

@param k
@param m
@param n
@param compare



## Type F32 {: #F32 }


```js
import type { F32 } from 'scenerystack/alpenglow';
```


<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>



## Type I32 {: #I32 }


```js
import type { I32 } from 'scenerystack/alpenglow';
```


<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>



## Type U32 {: #U32 }


```js
import type { U32 } from 'scenerystack/alpenglow';
```


<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>



## Type U8 {: #U8 }


```js
import type { U8 } from 'scenerystack/alpenglow';
```


<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>



## Source Code

See the source for [ByteEncoder.ts](https://github.com/phetsims/alpenglow/blob/main/js/webgpu/compute/ByteEncoder.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
