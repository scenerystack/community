# TickLabelSet

## Overview

Shows a set of tick labels within or next to a chart.

@author Sam Reid (PhET Interactive Simulations)

## Class TickLabelSet {: #TickLabelSet }


```js
import { TickLabelSet } from 'scenerystack/bamboo';
```
### Constructor

#### new TickLabelSet( chartTransform : <span style="font-weight: 400;">[ChartTransform](../bamboo/ChartTransform.md)</span>, axisOrientation : <span style="font-weight: 400;">[Orientation](../phet-core/Orientation.md)</span>, spacing : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, providedOptions? : <span style="font-weight: 400;">[TickLabelSetOptions](../bamboo/TickLabelSet.md#TickLabelSetOptions)</span> ) {: #TickLabelSet-constructor data-toc-label='new TickLabelSet' }

### Instance Methods

#### setSpacing( spacing : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) {: #setSpacing data-toc-label='setSpacing' }

#### getSpacing() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #getSpacing data-toc-label='getSpacing' }

#### update() {: #update data-toc-label='update' }

(protected)

Updates the labels when range or spacing has changed.

#### invalidateTickLabelSet() {: #invalidateTickLabelSet data-toc-label='invalidateTickLabelSet' }

Clears the cache and updates the label set. Use this if you need to have new labels for values that are in
the cache. For example, if your createLabel function had logic to switch between numeric (e.g. 2) and
symbolic labels (e.g. '2L').

#### setCreateLabel( createLabel : <span style="font-weight: 400;">( value: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> ) =&gt; [Node](../scenery/Node.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> ) {: #setCreateLabel data-toc-label='setCreateLabel' }

#### dispose() {: #dispose data-toc-label='dispose' }

#### getSpacingBorders() : <span style="font-weight: 400;">[Range](../dot/Range.md)</span> {: #getSpacingBorders data-toc-label='getSpacingBorders' }



## Type TickLabelSetOptions {: #TickLabelSetOptions }


```js
import type { TickLabelSetOptions } from 'scenerystack/bamboo';
```


- **value**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **edge**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span> | "min" | "max"
- **origin**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **skipCoordinates**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>[]
- **extent**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
<br>  act as if there is a corresponding tick with this extent, for positioning the label relatively
- **clippingType**?: [ClippingType](../bamboo/ClippingType.md)
<br>  determines whether the rounding is lenient, see ChartTransform
- **createLabel**?: ( value: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> ) =&gt; [Node](../scenery/Node.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
<br>  or return null if no label for that value
- **positionLabel**?: ( label: [Node](../scenery/Node.md), tickBounds: [Bounds2](../dot/Bounds2.md), axisOrientation: [Orientation](../phet-core/Orientation.md) ) =&gt; [Node](../scenery/Node.md)
- &amp; [StrictOmit](../phet-core/StrictOmit.md)&lt;[PathOptions](../scenery/Path.md#PathOptions), "children"&gt;




## Source Code

See the source for [TickLabelSet.ts](https://github.com/phetsims/bamboo/blob/main/js/TickLabelSet.ts) in the [bamboo](https://github.com/phetsims/bamboo) repository.
