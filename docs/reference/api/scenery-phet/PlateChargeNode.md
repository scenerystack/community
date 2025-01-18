# PlateChargeNode

## Overview

Base class for representation of plate charge.  Plate charge is represented
as an integer number of '+' or '-' symbols. These symbols are distributed
across some portion of the plate's top face.

All model coordinates are relative to the capacitor's local coordinate frame.

@author Chris Malley (PixelZoom, Inc.)
@author Jesse Greenberg (PhET Interactive Simulations)
@author Sam Reid (PhET Interactive Simulations)
@author Andrew Adare (PhET Interactive Simulations)

## Class PlateChargeNode {: #PlateChargeNode }


```js
import { PlateChargeNode } from 'scenerystack/scenery-phet';
```
### Constructor

#### new PlateChargeNode( capacitor, modelViewTransform, options ) {: #PlateChargeNode-constructor data-toc-label='new PlateChargeNode' }

### Instance Methods

#### getGridSize( numberOfObjects, width, height ) {: #getGridSize data-toc-label='getGridSize' }

@param {number} numberOfObjects
@param {number} width
@param {number} height
@private

@returns {Dimension2}

#### getPlateCharge() {: #getPlateCharge data-toc-label='getPlateCharge' }

Get plate charge from capacitor in the model
@public

@returns {number} charge

#### getContactXOrigin() {: #getContactXOrigin data-toc-label='getContactXOrigin' }

Gets the x offset (relative to the plate origin) of the portion of the plate that is facing the vacuum gap
@public

@returns {number} offset

#### getContactWidth() {: #getContactWidth data-toc-label='getContactWidth' }

Gets the width of the portion of the plate that is in contact with air.
@public

@returns {number}

#### isPositivelyCharged() {: #isPositivelyCharged data-toc-label='isPositivelyCharged' }

Returns true if plate is positively charged

@returns {Boolean}
@public

#### paintCanvas( context ) {: #paintCanvas data-toc-label='paintCanvas' }

Updates the view to match the model. Charges are arranged in a grid.

@param {CanvasRenderingContext2D} context
@public

#### getNumberOfCharges( plateCharge, maxPlateCharge ) {: #getNumberOfCharges data-toc-label='getNumberOfCharges' }

Computes number of charges, linearly proportional to plate charge.  If plate charge is less than half of an
electron charge, number of charges is zero.
@public

@param {number} plateCharge
@param {number} maxPlateCharge
@returns {number}



## Source Code

See the source for [PlateChargeNode.js](https://github.com/phetsims/scenery-phet/blob/main/js/capacitor/PlateChargeNode.js) in the [scenery-phet](https://github.com/phetsims/scenery-phet) repository.
