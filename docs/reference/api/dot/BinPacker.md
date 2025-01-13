# BinPacker

## Overview

Given a rectangular containing area, takes care of allocating and deallocating smaller rectangular "bins" that fit
together inside the area and do not overlap. Optimized more for runtime CPU usage than space currently.

For example:
#begin canvasExample binPacker 256x256
#on
var binPacker = new phet.dot.BinPacker( new dot.Bounds2( 0, 0, 256, 256 ) );
var bins = [];
for ( var i = 0; i &lt; 100; i++ ) {
  var bin = binPacker.allocate( Math.random() * 64, Math.random() * 64 );
  if ( bin ) {
    bins.push( bin );
  }
}
#off

context.strokeStyle = '#000';
bins.forEach( function( bin ) {
  var bounds = bin.bounds;
  context.strokeRect( bounds.x, bounds.y, bounds.width, bounds.height );
} );
#end canvasExample

@author Sharfudeen Ashraf
@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class BinPacker {: #BinPacker }


```js
import { BinPacker } from 'scenerystack/dot';
```
### Constructor

#### new BinPacker( bounds : <span style="font-weight: 400; opacity: 80%;">Bounds2</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### allocate( width : <span style="font-weight: 400; opacity: 80%;">number</span>, height : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">Bin | null</span> {: #allocate data-toc-label='allocate' }

Allocates a bin with the specified width and height if possible (returning a {Bin}), otherwise returns null.

#### deallocate( bin : <span style="font-weight: 400; opacity: 80%;">Bin</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #deallocate data-toc-label='deallocate' }

Deallocates a bin, so that its area can be reused by future allocations.

@param bin - The bin that was returned from allocate().

#### toString() : <span style="font-weight: 400; opacity: 80%;">string</span> {: #toString data-toc-label='toString' }

### Static Properties

#### Bin : <span style="font-weight: 400; opacity: 80%;">typeof Bin</span> {: #Bin data-toc-label='Bin' }



## Class Bin {: #Bin }


```js
import { Bin } from 'scenerystack/dot';
```
### Constructor

#### new Bin( bounds : <span style="font-weight: 400; opacity: 80%;">Bounds2</span>, parent : <span style="font-weight: 400; opacity: 80%;">Bin | null</span> ) {: #Bin-constructor data-toc-label='Bin-constructor' }

### Instance Methods

#### toString() : <span style="font-weight: 400; opacity: 80%;">string</span> {: #Bin-toString data-toc-label='Bin-toString' }

### Instance Properties

#### bounds : <span style="font-weight: 400; opacity: 80%;">Bounds2</span> {: #Bin-bounds data-toc-label='Bin-bounds' }

Our containing bounds

#### children : <span style="font-weight: 400; opacity: 80%;">Bin[]</span> {: #Bin-children data-toc-label='Bin-children' }



## Source Code

See the source for [BinPacker.ts](https://github.com/phetsims/dot/blob/main/js/BinPacker.ts) in the [dot](https://github.com/phetsims/dot) repository.
