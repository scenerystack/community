# EFieldNode

## Overview

Visual representation of the effective E-field (E_effective) between the capacitor plates.

@author Chris Malley (PixelZoom, Inc.)
@author Emily Randall (PhET Interactive Simulations)
@author Jesse Greenberg (PhET Interactive Simulations)
modules

## Class EFieldNode {: #EFieldNode }


```js
import { EFieldNode } from 'scenerystack/scenery-phet';
```
### Constructor

#### new EFieldNode( capacitor, modelViewTransform, maxEffectiveEField, canvasBounds ) {: #EFieldNode-constructor data-toc-label='new EFieldNode' }

### Instance Methods

#### paintCanvas( context ) {: #paintCanvas data-toc-label='paintCanvas' }

Rendering
@public

@param {CanvasRenderingContext2D} context

#### getLineSpacing( effectiveEField ) {: #getLineSpacing data-toc-label='getLineSpacing' }

Gets the spacing of E-field lines. Higher E-field results in higher density,
therefore lower spacing. Density is computed for the minimum plate size.
@public

@param {number} effectiveEField
@returns {number} spacing, in model coordinates



## Source Code

See the source for [EFieldNode.js](https://github.com/phetsims/scenery-phet/blob/main/js/capacitor/EFieldNode.js) in the [scenery-phet](https://github.com/phetsims/scenery-phet) repository.
