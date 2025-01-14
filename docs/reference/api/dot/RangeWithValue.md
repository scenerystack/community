# RangeWithValue

## Overview

A numeric range with a required default value.

@author Chris Malley (PixelZoom, Inc.)
@author Chris Klusendorf (PhET Interactive Simulations)

## Class RangeWithValue {: #RangeWithValue }


```js
import { RangeWithValue } from 'scenerystack/dot';
```
### Constructor

#### new RangeWithValue( min : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, max : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, defaultValue : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) {: #RangeWithValue-constructor data-toc-label='new RangeWithValue' }

### Instance Methods

#### getDefaultValue() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #getDefaultValue data-toc-label='getDefaultValue' }

Getter for defaultValue

#### setMin( min : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) {: #setMin data-toc-label='setMin' }

Setter for min

#### setMax( max : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) {: #setMax data-toc-label='setMax' }

Setter for max

#### setMinMax( min : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, max : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #setMinMax data-toc-label='setMinMax' }

Setter for min and max

#### toString() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> {: #toString data-toc-label='toString' }

Converts the attributes of this range to a string

#### equals( object : <span style="font-weight: 400;">IntentionalAny</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #equals data-toc-label='equals' }

Determines if this RangeWithValue is equal to some object.



## Source Code

See the source for [RangeWithValue.ts](https://github.com/phetsims/dot/blob/main/js/RangeWithValue.ts) in the [dot](https://github.com/phetsims/dot) repository.
