# GridLineSet

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/bamboo/blob/main/js/GridLineSet.ts](https://github.com/phetsims/bamboo/blob/main/js/GridLineSet.ts) for the most up-to-date information.

## Overview

Draws a set of lines within a graph.  For example, the minor horizontal lines.  Back-computes the model
locations given the view area.

See also CanvasGridLineSet for one that renders to canvas. Note, these 2 files should be maintained together,
to keep as similar an API as possible.

@author Sam Reid (PhET Interactive Simulations)

## Class GridLineSet {: #GridLineSet }


```js
import { GridLineSet } from 'scenerystack/bamboo';
```
### Constructor

#### new GridLineSet( chartTransform : <span style="font-weight: 400;">[ChartTransform](../bamboo/ChartTransform.md)</span>, axisOrientation : <span style="font-weight: 400;">[Orientation](../phet-core/Orientation.md)</span>, spacing : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, providedOptions? : <span style="font-weight: 400;">[GridLineSetOptions](../bamboo/GridLineSet.md#GridLineSetOptions)</span> ) {: #GridLineSet-constructor data-toc-label='new GridLineSet' }

### Instance Methods

#### update() {: #update data-toc-label='update' }

(protected)

#### setSpacing( spacing : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) {: #setSpacing data-toc-label='setSpacing' }

#### getSpacing() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #getSpacing data-toc-label='getSpacing' }

#### dispose() {: #dispose data-toc-label='dispose' }

#### getSpacingBorders() : <span style="font-weight: 400;">[Range](../dot/Range.md)</span> {: #getSpacingBorders data-toc-label='getSpacingBorders' }



## Type GridLineSetOptions {: #GridLineSetOptions }


```js
import type { GridLineSetOptions } from 'scenerystack/bamboo';
```


- **origin**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **clippingType**?: [ClippingType](../bamboo/ClippingType.md)
- &amp; [PathOptions](../scenery/Path.md#PathOptions)




## Source Code

See the source for [GridLineSet.ts](https://github.com/phetsims/bamboo/blob/main/js/GridLineSet.ts) in the [bamboo](https://github.com/phetsims/bamboo) repository.
