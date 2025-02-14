# PaintColorProperty

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/scenery/blob/main/js/util/PaintColorProperty.ts](https://github.com/phetsims/scenery/blob/main/js/util/PaintColorProperty.ts) for the most up-to-date information.

## Overview

A Property that will always hold a `Color` object representing the current value of a given paint (and can be set to
different paints).

This is valuable, since:
```
  const color = new phet.scenery.Color( 'red' );
  const fill = new phet.axon.Property( color );
  const paintColorProperty = new phet.scenery.PaintColorProperty( fill );

  // value is converted to a {Color}
  paintColorProperty.value; // r: 255, g: 0, b: 0, a: 1

  // watches direct Color mutation
  color.red = 128;
  paintColorProperty.value; // r: 128, g: 0, b: 0, a: 1

  // watches the Property mutation
  fill.value = 'green';
  paintColorProperty.value; // r: 0, g: 128, b: 0, a: 1

  // can switch to a different paint
  paintColorProperty.paint = 'blue';
  paintColorProperty.value; // r: 0, g: 0, b: 255, a: 1
```

Basically, you don't have to add your own listeners to both (optionally) any Properties in a paint and (optionally)
any Color objects (since it's all handled).

This is particularly helpful to create paints that are either lighter or darker than an original paint (where it
will update its color value when the original is updated).

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class PaintColorProperty {: #PaintColorProperty }


```js
import { PaintColorProperty } from 'scenerystack/scenery';
```
### Constructor

#### new PaintColorProperty( paint : <span style="font-weight: 400;">[TPaint](../scenery/TPaint.md)</span>, providedOptions? : <span style="font-weight: 400;">[PaintColorPropertyOptions](../scenery/PaintColorProperty.md#PaintColorPropertyOptions)</span> ) {: #PaintColorProperty-constructor data-toc-label='new PaintColorProperty' }

### Instance Methods

#### setPaint( paint : <span style="font-weight: 400;">[TPaint](../scenery/TPaint.md)</span> ) {: #setPaint data-toc-label='setPaint' }

Sets the current paint of the PaintColorProperty.

#### getPaint() : <span style="font-weight: 400;">[TPaint](../scenery/TPaint.md)</span> {: #getPaint data-toc-label='getPaint' }

Returns the current paint.

#### setLuminanceFactor( luminanceFactor : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) {: #setLuminanceFactor data-toc-label='setLuminanceFactor' }

Sets the current value used for adjusting the brightness or darkness (luminance) of the color.

If this factor is a non-zero value, the value of this Property will be either a brightened or darkened version of
the paint (depending on the value of the factor). 0 applies no change. Positive numbers brighten the color up to
1 (white). Negative numbers darken the color up to -1 (black).

For example, if the given paint is blue, the below factors will result in:

  -1: black
-0.5: dark blue
   0: blue
 0.5: light blue
   1: white

With intermediate values basically "interpolated". This uses the `Color` colorUtilsBrightness method to adjust
the paint.

#### getLuminanceFactor() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #getLuminanceFactor data-toc-label='getLuminanceFactor' }

Returns the current value used for adjusting the brightness or darkness (luminance) of the color.

See setLuminanceFactor() for more information.

#### dispose() {: #dispose data-toc-label='dispose' }

Releases references.



## Type PaintColorPropertyOptions {: #PaintColorPropertyOptions }


```js
import type { PaintColorPropertyOptions } from 'scenerystack/scenery';
```


- **luminanceFactor**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
<br>  0 applies no change. Positive numbers brighten the color up to 1 (white). Negative numbers darken
  the color up to -1 (black). See setLuminanceFactor() for more information.
- &amp; [PropertyOptions](../axon/ReadOnlyProperty.md#PropertyOptions)&lt;[Color](../scenery/Color.md)&gt;




## Source Code

See the source for [PaintColorProperty.ts](https://github.com/phetsims/scenery/blob/main/js/util/PaintColorProperty.ts) in the [scenery](https://github.com/phetsims/scenery) repository.
