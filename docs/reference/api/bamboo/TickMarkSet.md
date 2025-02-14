# TickMarkSet

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/bamboo/blob/main/js/TickMarkSet.ts](https://github.com/phetsims/bamboo/blob/main/js/TickMarkSet.ts) for the most up-to-date information.

## Overview

Shows tick marks within or next to a chart.

@author Sam Reid (PhET Interactive Simulations)

## Class TickMarkSet {: #TickMarkSet }


```js
import { TickMarkSet } from 'scenerystack/bamboo';
```
### Constructor

#### new TickMarkSet( chartTransform : <span style="font-weight: 400;">[ChartTransform](../bamboo/ChartTransform.md)</span>, axisOrientation : <span style="font-weight: 400;">[Orientation](../phet-core/Orientation.md)</span>, spacing : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, providedOptions? : <span style="font-weight: 400;">[TickMarkSetOptions](../bamboo/TickMarkSet.md#TickMarkSetOptions)</span> ) {: #TickMarkSet-constructor data-toc-label='new TickMarkSet' }

### Instance Methods

#### setSpacing( spacing : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) {: #setSpacing data-toc-label='setSpacing' }

#### getSpacing() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #getSpacing data-toc-label='getSpacing' }

#### update() {: #update data-toc-label='update' }

(protected)

#### dispose() {: #dispose data-toc-label='dispose' }

#### getSpacingBorders() : <span style="font-weight: 400;">[Range](../dot/Range.md)</span> {: #getSpacingBorders data-toc-label='getSpacingBorders' }

### Static Properties

#### DEFAULT_EXTENT {: #DEFAULT_EXTENT data-toc-label='DEFAULT_EXTENT' }

(readonly)



## Type TickMarkSetOptions {: #TickMarkSetOptions }


```js
import type { TickMarkSetOptions } from 'scenerystack/bamboo';
```


- **value**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **edge**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span> | "min" | "max"
- **origin**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **skipCoordinates**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>[]
- **lineWidth**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **extent**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **clippingType**?: [ClippingType](../bamboo/ClippingType.md)
<br>  determines whether the rounding is lenient, see ChartTransform
- &amp; [PathOptions](../scenery/Path.md#PathOptions)




## Source Code

See the source for [TickMarkSet.ts](https://github.com/phetsims/bamboo/blob/main/js/TickMarkSet.ts) in the [bamboo](https://github.com/phetsims/bamboo) repository.
