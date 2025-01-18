# BoxShapeCreator

## Overview

Creates 2D projections of shapes that are related to the 3D boxes.
Shapes are in the view coordinate frame, everything else is in model coordinates.
Shapes for all faces corresponds to a box with its origin in the center of the top face.

@author Chris Malley (PixelZoom, Inc.)
@author Jesse Greenberg (PhET Interactive Simulations)
@author Andrew Adare (PhET Interactive Simulations)

## Class BoxShapeCreator {: #BoxShapeCreator }


```js
import { BoxShapeCreator } from 'scenerystack/scenery-phet';
```
### Constructor

#### new BoxShapeCreator( transform ) {: #BoxShapeCreator-constructor data-toc-label='new BoxShapeCreator' }

### Instance Methods

#### createTopFace( x, y, z, width, height, depth ) {: #createTopFace data-toc-label='createTopFace' }

Top face is a parallelogram.
@public

   p0 -------------- p1
  /                /
 /                /
p3 --------------p2

@param {number} x
@param {number} y
@param {number} z
@param {number} width
@param {number} height
@param {number} depth
@returns {Shape}

#### createTopFaceBounds3( bounds ) {: #createTopFaceBounds3 data-toc-label='createTopFaceBounds3' }

Create the top face of the Box with a Bounds3 object.
@public

@param {Bounds3} bounds
@returns {Shape}

#### createFrontFace( x, y, z, width, height, depth ) {: #createFrontFace data-toc-label='createFrontFace' }

Front face is a rectangle.
@public

p0 --------------- p1
|                 |
|                 |
p3 --------------- p2

@param {number} x
@param {number} y
@param {number} z
@param {number} width
@param {number} height
@param {number} depth
@returns {Shape}

#### createFrontFaceBounds3( bounds ) {: #createFrontFaceBounds3 data-toc-label='createFrontFaceBounds3' }

Create the front face of the box with a Bounds3 object.
@public

@param {Bounds3} bounds
@returns {Shape}

#### createRightSideFace( x, y, z, width, height, depth ) {: #createRightSideFace data-toc-label='createRightSideFace' }

Right-side face is a parallelogram.
@public

     p1
    / |
   /  |
  /   |
 /    p2
p0   /
|   /
|  /
| /
p3

@param {number} x
@param {number} y
@param {number} z
@param {number} width
@param {number} height
@param {number} depth
@returns {Shape}

#### createRightSideFaceBounds3( bounds ) {: #createRightSideFaceBounds3 data-toc-label='createRightSideFaceBounds3' }

Create the right face of the box with a Bounds3 object.
@public

@param {Bounds3} bounds
@returns {Shape}

#### createBoxShape( x, y, z, width, height, depth ) {: #createBoxShape data-toc-label='createBoxShape' }

A complete box, relative to a specific origin.
@public

@param {number} x
@param {number} y
@param {number} z
@param {number} width
@param {number} height
@param {number} depth
@returns {Shape}

#### createFace( p0, p1, p2, p3 ) {: #createFace data-toc-label='createFace' }

A face is defined by 4 points, specified in view coordinates.
@public

@returns {Shape}



## Source Code

See the source for [BoxShapeCreator.js](https://github.com/phetsims/scenery-phet/blob/main/js/capacitor/BoxShapeCreator.js) in the [scenery-phet](https://github.com/phetsims/scenery-phet) repository.
