# Slider

## Overview

Slider, with support for horizontal and vertical orientations. By default, the slider is constructed in the
horizontal orientation, then adjusted if the vertical orientation was specified.

Note: This type was originally named HSlider, renamed in https://github.com/phetsims/sun/issues/380.

@author Chris Malley (PixelZoom, Inc.)

## Class Slider {: #Slider }


```js
import { Slider } from 'scenerystack/sun';
```
### Constructor

#### new Slider( valueProperty : <span style="font-weight: 400;">[PhetioProperty](../axon/PhetioProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>&gt;</span>, range : <span style="font-weight: 400;">[Range](../dot/Range.md) | [TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;[Range](../dot/Range.md)&gt;</span>, providedOptions? : <span style="font-weight: 400;">[SliderOptions](../sun/Slider.md#SliderOptions)</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### dispose() {: #dispose data-toc-label='dispose' }

#### addMajorTick( value : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, label? : <span style="font-weight: 400;">[Node](../scenery/Node.md)</span> ) {: #addMajorTick data-toc-label='addMajorTick' }

Adds a major tick mark.

#### addMinorTick( value : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, label? : <span style="font-weight: 400;">[Node](../scenery/Node.md)</span> ) {: #addMinorTick data-toc-label='addMinorTick' }

Adds a minor tick mark.

#### setMajorTicksVisible( visible : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> ) {: #setMajorTicksVisible data-toc-label='setMajorTicksVisible' }

Sets visibility of major ticks.

#### getMajorTicksVisible() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #getMajorTicksVisible data-toc-label='getMajorTicksVisible' }

Gets visibility of major ticks.

#### setMinorTicksVisible( visible : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> ) {: #setMinorTicksVisible data-toc-label='setMinorTicksVisible' }

Sets visibility of minor ticks.

#### getMinorTicksVisible() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #getMinorTicksVisible data-toc-label='getMinorTicksVisible' }

Gets visibility of minor ticks.

### Instance Properties

#### enabledRangeProperty : <span style="font-weight: 400;">[TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;[Range](../dot/Range.md)&gt;</span> {: #enabledRangeProperty data-toc-label='enabledRangeProperty' }

(readonly)

#### thumbDragListener : <span style="font-weight: 400;">[DragListener](../scenery/DragListener.md)</span> {: #thumbDragListener data-toc-label='thumbDragListener' }

(readonly)

public so that clients can access Properties of these DragListeners that tell us about its state
See https://github.com/phetsims/sun/issues/680

#### trackDragListener : <span style="font-weight: 400;">[DragListener](../scenery/DragListener.md)</span> {: #trackDragListener data-toc-label='trackDragListener' }

(readonly)

### Static Properties

#### THUMB_NODE_TANDEM_NAME {: #THUMB_NODE_TANDEM_NAME data-toc-label='THUMB_NODE_TANDEM_NAME' }

(readonly)

standardized tandem names, see https://github.com/phetsims/sun/issues/694

#### TRACK_NODE_TANDEM_NAME {: #TRACK_NODE_TANDEM_NAME data-toc-label='TRACK_NODE_TANDEM_NAME' }

(readonly)

#### SliderIO : <span style="font-weight: 400;">[IOType](../tandem/IOType.md)</span> {: #SliderIO data-toc-label='SliderIO' }

(readonly)



## Source Code

See the source for [Slider.ts](https://github.com/phetsims/sun/blob/main/js/Slider.ts) in the [sun](https://github.com/phetsims/sun) repository.
