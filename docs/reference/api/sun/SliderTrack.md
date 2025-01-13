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

#### new SliderTrack( valueProperty : <span style="font-weight: 400; opacity: 80%;">TProperty&lt;number&gt;</span>, trackNode : <span style="font-weight: 400; opacity: 80%;">Node</span>, range : <span style="font-weight: 400; opacity: 80%;">Range | TReadOnlyProperty&lt;Range&gt;</span>, providedOptions? : <span style="font-weight: 400; opacity: 80%;">SliderTrackOptions</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### dispose() : <span style="font-weight: 400; opacity: 80%;">void</span> {: #dispose data-toc-label='dispose' }

### Instance Properties

#### minimumSize : <span style="font-weight: 400; opacity: 80%;">Dimension2</span> {: #minimumSize data-toc-label='minimumSize' }

(protected, readonly)

#### internalWidthProperty : <span style="font-weight: 400; opacity: 80%;">TReadOnlyProperty&lt;number&gt;</span> {: #internalWidthProperty data-toc-label='internalWidthProperty' }

(protected, readonly)

#### sizeProperty : <span style="font-weight: 400; opacity: 80%;">TReadOnlyProperty&lt;Dimension2&gt;</span> {: #sizeProperty data-toc-label='sizeProperty' }

(protected, readonly)

#### valueToPositionProperty : <span style="font-weight: 400; opacity: 80%;">TReadOnlyProperty&lt;LinearFunction&gt;</span> {: #valueToPositionProperty data-toc-label='valueToPositionProperty' }

(readonly)

For use by Slider, maps the value along the range of the track to the position along the width of the track

#### dragListener : <span style="font-weight: 400; opacity: 80%;">DragListener</span> {: #dragListener data-toc-label='dragListener' }

(readonly)

public so that clients can access Properties of the DragListener that tell us about its state
See https://github.com/phetsims/sun/issues/680

#### leftVisualOverflow : <span style="font-weight: 400; opacity: 80%;">number</span> {: #leftVisualOverflow data-toc-label='leftVisualOverflow' }

(readonly)

#### rightVisualOverflow : <span style="font-weight: 400; opacity: 80%;">number</span> {: #rightVisualOverflow data-toc-label='rightVisualOverflow' }

(readonly)



## Source Code

See the source for [SliderTrack.ts](https://github.com/phetsims/sun/blob/main/js/SliderTrack.ts) in the [sun](https://github.com/phetsims/sun) repository.
