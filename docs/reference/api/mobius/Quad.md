# Quad

## Overview

Creates a position/normal/uv mapped quad based on vertices in a high-performance way.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class Quad {: #Quad }


```js
import { Quad } from 'scenerystack/mobius';
```
### Constructor

#### new Quad( p0x : <span style="font-weight: 400; opacity: 80%;">number</span>, p0y : <span style="font-weight: 400; opacity: 80%;">number</span>, p0z : <span style="font-weight: 400; opacity: 80%;">number</span>, p1x : <span style="font-weight: 400; opacity: 80%;">number</span>, p1y : <span style="font-weight: 400; opacity: 80%;">number</span>, p1z : <span style="font-weight: 400; opacity: 80%;">number</span>, p2x : <span style="font-weight: 400; opacity: 80%;">number</span>, p2y : <span style="font-weight: 400; opacity: 80%;">number</span>, p2z : <span style="font-weight: 400; opacity: 80%;">number</span>, p3x : <span style="font-weight: 400; opacity: 80%;">number</span>, p3y : <span style="font-weight: 400; opacity: 80%;">number</span>, p3z : <span style="font-weight: 400; opacity: 80%;">number</span>, nx : <span style="font-weight: 400; opacity: 80%;">number</span>, ny : <span style="font-weight: 400; opacity: 80%;">number</span>, nz : <span style="font-weight: 400; opacity: 80%;">number</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### set( p0x : <span style="font-weight: 400; opacity: 80%;">number</span>, p0y : <span style="font-weight: 400; opacity: 80%;">number</span>, p0z : <span style="font-weight: 400; opacity: 80%;">number</span>, p1x : <span style="font-weight: 400; opacity: 80%;">number</span>, p1y : <span style="font-weight: 400; opacity: 80%;">number</span>, p1z : <span style="font-weight: 400; opacity: 80%;">number</span>, p2x : <span style="font-weight: 400; opacity: 80%;">number</span>, p2y : <span style="font-weight: 400; opacity: 80%;">number</span>, p2z : <span style="font-weight: 400; opacity: 80%;">number</span>, p3x : <span style="font-weight: 400; opacity: 80%;">number</span>, p3y : <span style="font-weight: 400; opacity: 80%;">number</span>, p3z : <span style="font-weight: 400; opacity: 80%;">number</span>, nx : <span style="font-weight: 400; opacity: 80%;">number</span>, ny : <span style="font-weight: 400; opacity: 80%;">number</span>, nz : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #set data-toc-label='set' }

### Static Methods

#### updateArrays( positionArray : <span style="font-weight: 400; opacity: 80%;">Float32Array | null</span>, normalArray : <span style="font-weight: 400; opacity: 80%;">Float32Array | null</span>, uvArray : <span style="font-weight: 400; opacity: 80%;">Float32Array | null</span>, p0x : <span style="font-weight: 400; opacity: 80%;">number</span>, p0y : <span style="font-weight: 400; opacity: 80%;">number</span>, p0z : <span style="font-weight: 400; opacity: 80%;">number</span>, p1x : <span style="font-weight: 400; opacity: 80%;">number</span>, p1y : <span style="font-weight: 400; opacity: 80%;">number</span>, p1z : <span style="font-weight: 400; opacity: 80%;">number</span>, p2x : <span style="font-weight: 400; opacity: 80%;">number</span>, p2y : <span style="font-weight: 400; opacity: 80%;">number</span>, p2z : <span style="font-weight: 400; opacity: 80%;">number</span>, p3x : <span style="font-weight: 400; opacity: 80%;">number</span>, p3y : <span style="font-weight: 400; opacity: 80%;">number</span>, p3z : <span style="font-weight: 400; opacity: 80%;">number</span>, nx : <span style="font-weight: 400; opacity: 80%;">number</span>, ny : <span style="font-weight: 400; opacity: 80%;">number</span>, nz : <span style="font-weight: 400; opacity: 80%;">number</span>, offset, offsetPosition : <span style="font-weight: 400; opacity: 80%;">Vector3</span> ) : <span style="font-weight: 400; opacity: 80%;">number</span> {: #updateArrays data-toc-label='updateArrays' }

Updates provided geometry arrays given the specific size.

@param positionArray
@param normalArray
@param uvArray
@param p0x
@param p0y
@param p0z
@param p1x
@param p1y
@param p1z
@param p2x
@param p2y
@param p2z
@param p3x
@param p3y
@param p3z
@param nx
@param ny
@param nz
@param offset - How many vertices have been specified so far?
@param offsetPosition - How to transform all the points
@returns - The offset after the specified vertices have been written



## Source Code

See the source for [Quad.ts](https://github.com/phetsims/mobius/blob/main/js/Quad.ts) in the [mobius](https://github.com/phetsims/mobius) repository.
