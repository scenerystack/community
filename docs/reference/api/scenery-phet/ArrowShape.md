# ArrowShape

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/scenery-phet/blob/main/js/ArrowShape.ts](https://github.com/phetsims/scenery-phet/blob/main/js/ArrowShape.ts) for the most up-to-date information.

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

#### new ArrowShape( tailX : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, tailY : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, tipX : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, tipY : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, providedOptions : <span style="font-weight: 400;">[ArrowShapeOptions](../scenery-phet/ArrowShape.md#ArrowShapeOptions)</span> ) {: #ArrowShape-constructor data-toc-label='new ArrowShape' }

### Instance Methods



### Static Methods

#### getArrowShapePoints( tailX : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, tailY : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, tipX : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, tipY : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, shapePoints : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)[]</span>, providedOptions? : <span style="font-weight: 400;">[ArrowShapeOptions](../scenery-phet/ArrowShape.md#ArrowShapeOptions)</span> ) : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)[]</span> {: #getArrowShapePoints data-toc-label='getArrowShapePoints' }

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



## Type ArrowShapeOptions {: #ArrowShapeOptions }


```js
import type { ArrowShapeOptions } from 'scenerystack/scenery-phet';
```


- **tailWidth**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **headWidth**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **headHeight**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **fractionalHeadHeight**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **doubleHead**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
- **isHeadDynamic**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
- **scaleTailToo**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>




## Source Code

See the source for [ArrowShape.ts](https://github.com/phetsims/scenery-phet/blob/main/js/ArrowShape.ts) in the [scenery-phet](https://github.com/phetsims/scenery-phet) repository.
