# SpectrumSliderThumb

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/scenery-phet/blob/main/js/SpectrumSliderThumb.ts](https://github.com/phetsims/scenery-phet/blob/main/js/SpectrumSliderThumb.ts) for the most up-to-date information.

## Overview

SpectrumSliderThumb has (a) a thin cursor that lies on the track and (b) a teardrop-shaped handle that drops
down below the track and depicts the selected color. Origin is at top center.

@author Sam Reid (PhET Interactive Simulations)

## Class SpectrumSliderThumb {: #SpectrumSliderThumb }


```js
import { SpectrumSliderThumb } from 'scenerystack/scenery-phet';
```
### Constructor

#### new SpectrumSliderThumb( property : <span style="font-weight: 400;">[TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>&gt;</span>, providedOptions? : <span style="font-weight: 400;">[SpectrumSliderThumbOptions](../scenery-phet/SpectrumSliderThumb.md#SpectrumSliderThumbOptions)</span> ) {: #SpectrumSliderThumb-constructor data-toc-label='new SpectrumSliderThumb' }

### Instance Methods

#### setCenterY( centerY : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #setCenterY data-toc-label='setCenterY' }

Position the thumb in the track.

#### dispose() {: #dispose data-toc-label='dispose' }



## Type SpectrumSliderThumbOptions {: #SpectrumSliderThumbOptions }


```js
import type { SpectrumSliderThumbOptions } from 'scenerystack/scenery-phet';
```


- **width**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **height**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **cursorHeight**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **cursorWidth**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **windowCursorOptions**?: [RectangleOptions](../scenery/Rectangle.md#RectangleOptions)
- &amp; [PickOptional](../phet-core/PickOptional.md)&lt;[SpectrumNodeOptions](../scenery-phet/SpectrumNode.md#SpectrumNodeOptions), "valueToColor"&gt; &amp; [PathOptions](../scenery/Path.md#PathOptions)




## Source Code

See the source for [SpectrumSliderThumb.ts](https://github.com/phetsims/scenery-phet/blob/main/js/SpectrumSliderThumb.ts) in the [scenery-phet](https://github.com/phetsims/scenery-phet) repository.
