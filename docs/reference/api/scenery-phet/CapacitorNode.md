# CapacitorNode

## Overview

Visual representation of a capacitor with a vacuum gap.

@author Chris Malley (PixelZoom, Inc.)
@author Jesse Greenberg (PhET Interactive Simulations)
@author Andrew Adare (PhET Interactive Simulations)

## Class CapacitorNode {: #CapacitorNode }


```js
import { CapacitorNode } from 'scenerystack/scenery-phet';
```
### Constructor

#### new CapacitorNode( circuit, modelViewTransform, plateChargeVisibleProperty, electricFieldVisibleProperty, options ) {: #CapacitorNode-constructor data-toc-label='new CapacitorNode' }

### Instance Methods

#### dispose() {: #dispose data-toc-label='dispose' }

@public

#### frontSideContainsSensorPoint( globalPoint ) {: #frontSideContainsSensorPoint data-toc-label='frontSideContainsSensorPoint' }

Returns true if the front side contains the specified point, used for voltmeter probe hit testing.
@param {Vector2} globalPoint
@returns {boolean}
@public

#### backSideContainsSensorPoint( globalPoint ) {: #backSideContainsSensorPoint data-toc-label='backSideContainsSensorPoint' }

Returns true if the back side contains the specified point, used for voltmeter probe hit testing.
@param {Vector2} globalPoint
@returns {boolean}
@public

#### getTopPlateClipShapeToGlobal() {: #getTopPlateClipShapeToGlobal data-toc-label='getTopPlateClipShapeToGlobal' }

Returns the clipping region for the top shape, in global coordinates, used to show wires or electrons flowing in/out of the capacitor.
@returns {Shape}
@public

#### getBottomPlateClipShapeToGlobal() {: #getBottomPlateClipShapeToGlobal data-toc-label='getBottomPlateClipShapeToGlobal' }

Returns the clipping region for the bottom shape, in global coordinates, used to show wires or electrons flowing in/out of the capacitor.
@returns {Shape}
@public

#### updateGeometry() {: #updateGeometry data-toc-label='updateGeometry' }

Update the geometry of the capacitor plates.
@private

#### getPlatesBounds() {: #getPlatesBounds data-toc-label='getPlatesBounds' }

Get the bound of the capacitor from the plates.  Allows for bounds to be passed into the canvas node before the
children are added to the view.
@public

@returns {Bounds2}



## Source Code

See the source for [CapacitorNode.js](https://github.com/phetsims/scenery-phet/blob/main/js/capacitor/CapacitorNode.js) in the [scenery-phet](https://github.com/phetsims/scenery-phet) repository.
