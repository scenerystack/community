# YawPitchModelViewTransform3

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/scenery-phet/blob/main/js/capacitor/YawPitchModelViewTransform3.js](https://github.com/phetsims/scenery-phet/blob/main/js/capacitor/YawPitchModelViewTransform3.js) for the most up-to-date information.

## Overview

Provides the transforms between model and view 3D-coordinate systems. In both coordinate systems, +x is to the right,
+y is down, +z is away from the viewer. Sign of rotation angles is specified using the right-hand rule.

+y
^    +z
|   /
|  /
| /
+-------&gt; +x

@author Chris Malley (PixelZoom, Inc.)
@author Jesse Greenberg (PhET Interactive Simulations)
@author Andrew Adare (PhET Interactive Simulations)

## Class YawPitchModelViewTransform3 {: #YawPitchModelViewTransform3 }


```js
import { YawPitchModelViewTransform3 } from 'scenerystack/scenery-phet';
```
### Constructor

#### new YawPitchModelViewTransform3( options ) {: #YawPitchModelViewTransform3-constructor data-toc-label='new YawPitchModelViewTransform3' }

### Instance Methods

#### modelToViewPosition( modelPoint ) {: #modelToViewPosition data-toc-label='modelToViewPosition' }

Maps a point from 3D model coordinates to 2D view coordinates.
@public

@param {Vector3} modelPoint
@returns {Vector2}

#### modelToViewXYZ( x, y, z ) {: #modelToViewXYZ data-toc-label='modelToViewXYZ' }

Maps a point from 3D model coordinates to 2D view coordinates.
@public

@param {number} x
@param {number} y
@param {number} z
@returns {Vector2}

#### modelToViewDelta( delta ) {: #modelToViewDelta data-toc-label='modelToViewDelta' }

Maps a delta from 3D model coordinates to 2D view coordinates.
@public

@param {Vector3} delta
@returns {Vector2}

#### modelToViewDeltaXYZ( xDelta, yDelta, zDelta ) {: #modelToViewDeltaXYZ data-toc-label='modelToViewDeltaXYZ' }

Maps a delta from 3D model coordinates to 2D view coordinates.
@public

@param {number} xDelta
@param {number} yDelta
@param {number} zDelta
@returns {Vector2}

#### modelToViewShape( modelShape ) {: #modelToViewShape data-toc-label='modelToViewShape' }

Model shapes are all in the 2D xy plane, and have no depth.
@public

@param {Shape} modelShape
@returns {Shape}

#### modelToViewBounds( modelBounds ) {: #modelToViewBounds data-toc-label='modelToViewBounds' }

Bounds are all in the 2D xy plane, and have no depth.
@public

@param  {Bounds2} modelBounds
@returns {Bounds2}

#### viewToModelPosition( viewPoint ) {: #viewToModelPosition data-toc-label='viewToModelPosition' }

Maps a point from 2D view coordinates to 3D model coordinates. The z coordinate will be zero.
This is different than the inverse of modelToViewPosition.
@public

@param {Vector2} viewPoint
@returns {Vector3}

#### viewToModelXY( x, y ) {: #viewToModelXY data-toc-label='viewToModelXY' }

Maps a point from 2D view coordinates to 3D model coordinates. The z coordinate will be zero.
@public

@param {number} x
@param {number} y
@returns {Vector3}

#### viewToModelDelta( delta ) {: #viewToModelDelta data-toc-label='viewToModelDelta' }

Maps a delta from 2D view coordinates to 3D model coordinates. The z coordinate will be zero.
@public

@param {Vector2} delta
@returns {Vector3}

#### viewToModelDeltaXY( xDelta, yDelta ) {: #viewToModelDeltaXY data-toc-label='viewToModelDeltaXY' }

Maps a delta from 2D view coordinates to 3D model coordinates. The z coordinate will be zero.
@public

@param {number} xDelta
@param {number} yDelta
@returns {Vector3}

#### viewToModelShape( viewShape ) {: #viewToModelShape data-toc-label='viewToModelShape' }

Model shapes are all in the 2D xy plane, and have no depth.
@public

@param {Shape} viewShape
@returns {Shape}

#### viewToModelBounds( viewBounds ) {: #viewToModelBounds data-toc-label='viewToModelBounds' }

Transforms 2D view bounds to 2D model bounds since bounds have no depth.
@public

@param {Bounds2} viewBounds
@returns {Bounds2}



## Source Code

See the source for [YawPitchModelViewTransform3.js](https://github.com/phetsims/scenery-phet/blob/main/js/capacitor/YawPitchModelViewTransform3.js) in the [scenery-phet](https://github.com/phetsims/scenery-phet) repository.
