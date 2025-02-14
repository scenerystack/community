# BoxNode

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/scenery-phet/blob/main/js/capacitor/BoxNode.js](https://github.com/phetsims/scenery-phet/blob/main/js/capacitor/BoxNode.js) for the most up-to-date information.

## Overview

Pseudo-3D representation of a box, using parallelograms.  Only the three visible faces are shown: top, front,
right side.  The top and right-side faces are foreshortened to give the illusion of distance between front and back
planes. Origin is at the center of the top face.

@author Chris Malley (PixelZoom, Inc.)
@author Jesse Greenberg (PhET Interactive Simulations)
@author Andrew Adare (PhET Interactive Simulations)

## Class BoxNode {: #BoxNode }


```js
import { BoxNode } from 'scenerystack/scenery-phet';
```
### Constructor

#### new BoxNode( transform, color, size, options ) {: #BoxNode-constructor data-toc-label='new BoxNode' }

### Instance Methods

#### updateShapes() {: #updateShapes data-toc-label='updateShapes' }

@private - update the shapes after the size has been set

#### setBoxSize( size ) {: #setBoxSize data-toc-label='setBoxSize' }

Set the size of this box.
@param {Bounds3} size
@public



## Source Code

See the source for [BoxNode.js](https://github.com/phetsims/scenery-phet/blob/main/js/capacitor/BoxNode.js) in the [scenery-phet](https://github.com/phetsims/scenery-phet) repository.
