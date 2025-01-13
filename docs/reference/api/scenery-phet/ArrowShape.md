# ArrowShape

## Overview

An arrow shape, either single or double headed.
ArrowShape has an optimization that allows you to reuse an array of Vector2.
The array will have 0 points if the tail and tip are the same point.

@author John Blanco
@author Chris Malley (PixelZoom, Inc.)
@author Aaron Davis
@author Sam Reid (PhET Interactive Simulations)

## Class ArrowShape {: #ArrowShape }


```js
import { ArrowShape } from 'scenerystack/scenery-phet';
```
### Constructor

#### new ArrowShape( tailX : <span style="font-weight: 400; opacity: 80%;">number</span>, tailY : <span style="font-weight: 400; opacity: 80%;">number</span>, tipX : <span style="font-weight: 400; opacity: 80%;">number</span>, tipY : <span style="font-weight: 400; opacity: 80%;">number</span>, providedOptions : <span style="font-weight: 400; opacity: 80%;">ArrowShapeOptions</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods



### Static Methods

#### getArrowShapePoints( tailX : <span style="font-weight: 400; opacity: 80%;">number</span>, tailY : <span style="font-weight: 400; opacity: 80%;">number</span>, tipX : <span style="font-weight: 400; opacity: 80%;">number</span>, tipY : <span style="font-weight: 400; opacity: 80%;">number</span>, shapePoints : <span style="font-weight: 400; opacity: 80%;">Vector2[]</span>, providedOptions? : <span style="font-weight: 400; opacity: 80%;">ArrowShapeOptions</span> ) : <span style="font-weight: 400; opacity: 80%;">Vector2[]</span> {: #getArrowShapePoints data-toc-label='getArrowShapePoints' }

This method is static so it can be used in ArrowShape as well as in ArrowNode.  If the tail and tip are at the
same position, there are no points and the arrow will not be shown.
@param tailX
@param tailY
@param tipX
@param tipY
@param shapePoints - if provided, values will be overwritten. This is to achieve high performance and is used
  by ArrowNode to avoid re-creating shapes. Tested this implementation vs the old one by creating hundreds of
  arrows and saw significant performance gains.
@param providedOptions



## Source Code

See the source for [ArrowShape.ts](https://github.com/phetsims/scenery-phet/blob/main/js/ArrowShape.ts) in the [scenery-phet](https://github.com/phetsims/scenery-phet) repository.
