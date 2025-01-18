# DefaultSliderTrack

## Overview

DefaultSliderTrack is composed of two rectangles, one for the enabled section of the track and one for the disabled
section.  The enabled track rectangle sits on top of the disabled track so that the enabled range can be any
desired sub range of the full slider range.

@author Chris Malley (PixelZoom, Inc.)
@author Sam Reid (PhET Interactive Simulations)
@author Jesse Greenberg (PhET Interactive Simulations)

## Class DefaultSliderTrack {: #DefaultSliderTrack }


```js
import { DefaultSliderTrack } from 'scenerystack/sun';
```
### Constructor

#### new DefaultSliderTrack( valueProperty : <span style="font-weight: 400;">[TProperty](../axon/TProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>&gt;</span>, range : <span style="font-weight: 400;">[Range](../dot/Range.md) | [TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;[Range](../dot/Range.md)&gt;</span>, providedOptions? : <span style="font-weight: 400;">[DefaultSliderTrackOptions](../sun/DefaultSliderTrack.md#DefaultSliderTrackOptions)</span> ) {: #DefaultSliderTrack-constructor data-toc-label='new DefaultSliderTrack' }

### Instance Methods

#### dispose() {: #dispose data-toc-label='dispose' }



## Type DefaultSliderTrackOptions {: #DefaultSliderTrackOptions }


We require size/enabledRangeProperty instead of leaving it optional for the supertype

```js
import type { DefaultSliderTrackOptions } from 'scenerystack/sun';
```


- **fillEnabled**?: [TPaint](../scenery/TPaint.md)
- **fillDisabled**?: [TPaint](../scenery/TPaint.md)
- **stroke**?: [TPaint](../scenery/TPaint.md)
- **lineWidth**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **cornerRadius**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- &amp; [SliderTrackOptions](../sun/SliderTrack.md#SliderTrackOptions) &amp; [PickRequired](../phet-core/PickRequired.md)&lt;[SliderTrackOptions](../sun/SliderTrack.md#SliderTrackOptions), "size" | "enabledRangeProperty"&gt;




## Source Code

See the source for [DefaultSliderTrack.ts](https://github.com/phetsims/sun/blob/main/js/DefaultSliderTrack.ts) in the [sun](https://github.com/phetsims/sun) repository.
