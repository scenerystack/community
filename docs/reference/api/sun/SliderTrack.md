# SliderTrack

## Overview

Shows a track on a slider.  Must be supplied a Node for rendering the track.

@author Chris Malley (PixelZoom, Inc.)
@author Sam Reid (PhET Interactive Simulations)
@author Jesse Greenberg (PhET Interactive Simulations)

## Class SliderTrack {: #SliderTrack }


```js
import { SliderTrack } from 'scenerystack/sun';
```
### Constructor

#### new SliderTrack( valueProperty : <span style="font-weight: 400;">[TProperty](../axon/TProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>&gt;</span>, trackNode : <span style="font-weight: 400;">[Node](../scenery/Node.md)</span>, range : <span style="font-weight: 400;">[Range](../dot/Range.md) | [TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;[Range](../dot/Range.md)&gt;</span>, providedOptions? : <span style="font-weight: 400;">[SliderTrackOptions](../sun/SliderTrack.md#SliderTrackOptions)</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### dispose() {: #dispose data-toc-label='dispose' }

### Instance Properties

#### minimumSize : <span style="font-weight: 400;">[Dimension2](../dot/Dimension2.md)</span> {: #minimumSize data-toc-label='minimumSize' }

(protected, readonly)

#### internalWidthProperty : <span style="font-weight: 400;">[TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>&gt;</span> {: #internalWidthProperty data-toc-label='internalWidthProperty' }

(protected, readonly)

#### sizeProperty : <span style="font-weight: 400;">[TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;[Dimension2](../dot/Dimension2.md)&gt;</span> {: #sizeProperty data-toc-label='sizeProperty' }

(protected, readonly)

#### valueToPositionProperty : <span style="font-weight: 400;">[TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;[LinearFunction](../dot/LinearFunction.md)&gt;</span> {: #valueToPositionProperty data-toc-label='valueToPositionProperty' }

(readonly)

For use by Slider, maps the value along the range of the track to the position along the width of the track

#### dragListener : <span style="font-weight: 400;">[DragListener](../scenery/DragListener.md)</span> {: #dragListener data-toc-label='dragListener' }

(readonly)

public so that clients can access Properties of the DragListener that tell us about its state
See https://github.com/phetsims/sun/issues/680

#### leftVisualOverflow : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #leftVisualOverflow data-toc-label='leftVisualOverflow' }

(readonly)

#### rightVisualOverflow : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #rightVisualOverflow data-toc-label='rightVisualOverflow' }

(readonly)



## Source Code

See the source for [SliderTrack.ts](https://github.com/phetsims/sun/blob/main/js/SliderTrack.ts) in the [sun](https://github.com/phetsims/sun) repository.
