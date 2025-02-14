# ChartTransform

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/bamboo/blob/main/js/ChartTransform.ts](https://github.com/phetsims/bamboo/blob/main/js/ChartTransform.ts) for the most up-to-date information.

## Overview

ChartTransform defines the chart dimensions in model and view coordinate frames, and provides transform methods
for moving between those coordinate frames.

@author Sam Reid (PhET Interactive Simulations)

## Class ChartTransform {: #ChartTransform }


```js
import { ChartTransform } from 'scenerystack/bamboo';
```
### Constructor

#### new ChartTransform( providedOptions? : <span style="font-weight: 400;">[ChartTransformOptions](../bamboo/ChartTransform.md#ChartTransformOptions)</span> ) {: #ChartTransform-constructor data-toc-label='new ChartTransform' }

### Instance Methods

#### dispose() {: #dispose data-toc-label='dispose' }

#### forEachSpacing( axisOrientation : <span style="font-weight: 400;">[Orientation](../phet-core/Orientation.md)</span>, spacing : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, origin : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, clippingType : <span style="font-weight: 400;">[ClippingType](../bamboo/ClippingType.md)</span>, callback : <span style="font-weight: 400;">( modelPosition: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>, viewPosition: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span></span> ) {: #forEachSpacing data-toc-label='forEachSpacing' }

For the axis that corresponds to Orientation, iterates over the range and performs an operation (specified by
callback) at regular intervals (specified by spacing).
@param axisOrientation
@param spacing - the spacing (delta) between operations, in model coordinates
@param origin - the origin for the operation, in model coordinates. The operation is guaranteed to occur at this position.
@param clippingType - if something is clipped elsewhere, we allow slack so it doesn't disappear from view like a flicker
@param callback

#### modelToView( axisOrientation : <span style="font-weight: 400;">[Orientation](../phet-core/Orientation.md)</span>, value : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #modelToView data-toc-label='modelToView' }

Transforms a model coordinate {number} to a view coordinate {number} for the axis that corresponds to Orientation.

#### modelToViewX( x : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #modelToViewX data-toc-label='modelToViewX' }

Transforms a model coordinate {number} to a view coordinate {number} for the x axis.

#### modelToViewY( y : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #modelToViewY data-toc-label='modelToViewY' }

Transforms a model coordinate {number} to a view coordinate {number} for the y axis.

#### modelToViewXY( x : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, y : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> {: #modelToViewXY data-toc-label='modelToViewXY' }

Transforms model x,y coordinates to a view position.

#### modelToViewPosition( position : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> ) : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> {: #modelToViewPosition data-toc-label='modelToViewPosition' }

Transforms a model position to a view position.

#### modelToViewDelta( axisOrientation : <span style="font-weight: 400;">[Orientation](../phet-core/Orientation.md)</span>, modelDelta : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #modelToViewDelta data-toc-label='modelToViewDelta' }

Transforms a model delta {number} to a view delta {number} for the axis that corresponds to Orientation.

#### modelToViewDeltaX( dx : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #modelToViewDeltaX data-toc-label='modelToViewDeltaX' }

Transforms a model delta {number} to a view delta {number} for the x axis.

#### modelToViewDeltaY( dy : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #modelToViewDeltaY data-toc-label='modelToViewDeltaY' }

Transforms a model delta {number} to a view delta {number} for the y axis.

#### modelToViewDeltaXY( dx : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, dy : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> {: #modelToViewDeltaXY data-toc-label='modelToViewDeltaXY' }

Transforms a model delta pair of numbers to view Vector2

#### viewToModel( axisOrientation : <span style="font-weight: 400;">[Orientation](../phet-core/Orientation.md)</span>, value : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #viewToModel data-toc-label='viewToModel' }

Converts a scalar value from view coordinates to model coordinates, along the specified axis.  The inverse of modelToView.

#### viewToModelX( x : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #viewToModelX data-toc-label='viewToModelX' }

Convert a view position to a model position, in the horizontal direction.

#### viewToModelY( y : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #viewToModelY data-toc-label='viewToModelY' }

Convert a view position to a model position, in the vertical direction.

#### viewToModelXY( x : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, y : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> {: #viewToModelXY data-toc-label='viewToModelXY' }

Convert a view position to a model position, for a coordinate specified as x,y.

#### viewToModelPosition( position : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> ) : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> {: #viewToModelPosition data-toc-label='viewToModelPosition' }

Convert a view position to a model position.

#### viewToModelDeltaX( dx : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #viewToModelDeltaX data-toc-label='viewToModelDeltaX' }

Convert a delta in the view to a delta in the model, in the horizontal direction.

#### viewToModelDeltaY( dy : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #viewToModelDeltaY data-toc-label='viewToModelDeltaY' }

Convert a delta in the view to a delta in the model, in the vertical direction.

#### viewToModelDelta( deltaVector : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> ) : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> {: #viewToModelDelta data-toc-label='viewToModelDelta' }

Convert a delta in the view to a delta in the model, for a Vector2

#### setViewWidth( viewWidth : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) {: #setViewWidth data-toc-label='setViewWidth' }

Sets the view width.

#### setViewHeight( viewHeight : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) {: #setViewHeight data-toc-label='setViewHeight' }

Sets the view height.

#### setModelXRange( modelXRange : <span style="font-weight: 400;">[Range](../dot/Range.md)</span> ) {: #setModelXRange data-toc-label='setModelXRange' }

Sets the Range for the model's x dimension.

#### setModelYRange( modelYRange : <span style="font-weight: 400;">[Range](../dot/Range.md)</span> ) {: #setModelYRange data-toc-label='setModelYRange' }

Sets the Range for the model's y dimension.

#### getModelRange( axisOrientation : <span style="font-weight: 400;">[Orientation](../phet-core/Orientation.md)</span> ) : <span style="font-weight: 400;">[Range](../dot/Range.md)</span> {: #getModelRange data-toc-label='getModelRange' }

Gets the model range for the axis that corresponds to Orientation.

#### setXTransform( xTransform : <span style="font-weight: 400;">[Transform1](../dot/Transform1.md)</span> ) {: #setXTransform data-toc-label='setXTransform' }

Sets the model-to-view scaling function for the x-axis.

#### setYTransform( yTransform : <span style="font-weight: 400;">[Transform1](../dot/Transform1.md)</span> ) {: #setYTransform data-toc-label='setYTransform' }

Sets the model-to-view scaling function for the y-axis.

#### getSpacingBorders( axisOrientation : <span style="font-weight: 400;">[Orientation](../phet-core/Orientation.md)</span>, spacing : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, origin : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, clippingType : <span style="font-weight: 400;">[ClippingType](../bamboo/ClippingType.md)</span> ) : <span style="font-weight: 400;">[Range](../dot/Range.md)</span> {: #getSpacingBorders data-toc-label='getSpacingBorders' }

Returns a range with the min and max tick indices on the selected axis.

### Instance Properties

#### changedEmitter : <span style="font-weight: 400;">[TEmitter](../axon/TEmitter.md)</span> {: #changedEmitter data-toc-label='changedEmitter' }

(readonly)

fires when some aspects of this transform changes

#### viewWidth : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #viewWidth data-toc-label='viewWidth' }

#### viewHeight : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #viewHeight data-toc-label='viewHeight' }

#### modelXRange : <span style="font-weight: 400;">[Range](../dot/Range.md)</span> {: #modelXRange data-toc-label='modelXRange' }

#### modelYRange : <span style="font-weight: 400;">[Range](../dot/Range.md)</span> {: #modelYRange data-toc-label='modelYRange' }

#### xTransform : <span style="font-weight: 400;">[Transform1](../dot/Transform1.md)</span> {: #xTransform data-toc-label='xTransform' }

#### yTransform : <span style="font-weight: 400;">[Transform1](../dot/Transform1.md)</span> {: #yTransform data-toc-label='yTransform' }

#### modelXRangeInverted : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #modelXRangeInverted data-toc-label='modelXRangeInverted' }

#### modelYRangeInverted : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #modelYRangeInverted data-toc-label='modelYRangeInverted' }



## Type ChartTransformOptions {: #ChartTransformOptions }


```js
import type { ChartTransformOptions } from 'scenerystack/bamboo';
```


- **viewWidth**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
<br>  The horizontal axis is referred to as the "x" axis, though it may be used to depict another dimension, such as "time"
- **modelXRange**?: [Range](../dot/Range.md)
- **modelXRangeInverted**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
- **xTransform**?: [Transform1](../dot/Transform1.md)
- **viewHeight**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
<br>  The vertical axis is referred to as the "y" axis, though it may be used to depict another dimension such as "width"
- **modelYRange**?: [Range](../dot/Range.md)
- **modelYRangeInverted**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
- **yTransform**?: [Transform1](../dot/Transform1.md)




## Source Code

See the source for [ChartTransform.ts](https://github.com/phetsims/bamboo/blob/main/js/ChartTransform.ts) in the [bamboo](https://github.com/phetsims/bamboo) repository.
