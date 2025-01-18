# PlateNode

## Overview

Visual representation of a capacitor plate.

@author Chris Malley (PixelZoom, Inc.)
@author Jesse Greenberg (PhET Interactive Simulations)
@author Andrew Adare (PhET Interactive Simulations)

## Class PlateNode {: #PlateNode }


```js
import { PlateNode } from 'scenerystack/scenery-phet';
```
### Constructor

#### new PlateNode( capacitor, modelViewTransform, polarity, maxPlateCharge, orientation, includeChargeNode ) {: #PlateNode-constructor data-toc-label='new PlateNode' }

### Instance Methods

#### setChargeVisible( visible ) {: #setChargeVisible data-toc-label='setChargeVisible' }

Make the charges on this plate visible.
@public

@param {boolean} visible

#### getMaxBoxNodeBounds() {: #getMaxBoxNodeBounds data-toc-label='getMaxBoxNodeBounds' }

Get bounds for a plate with maximum width.  Useful for layout and bounds calculations.
@private

@returns {Bounds3}



## Source Code

See the source for [PlateNode.js](https://github.com/phetsims/scenery-phet/blob/main/js/capacitor/PlateNode.js) in the [scenery-phet](https://github.com/phetsims/scenery-phet) repository.
