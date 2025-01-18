# BinMapper

## Overview

BinMapper is an object that maps a continuous value to one of a finite number of "bins".

@author John Blanco (PhET Interactive Simulations)

## Class BinMapper {: #BinMapper }


```js
import { BinMapper } from 'scenerystack/tambo';
```
### Constructor

#### new BinMapper( valueRange : <span style="font-weight: 400;">[Range](../dot/Range.md)</span>, numBins : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, providedOptions? : <span style="font-weight: 400;">[BinMapperOptions](../tambo/BinMapper.md#BinMapperOptions)</span> ) {: #BinMapper-constructor data-toc-label='new BinMapper' }

### Instance Methods

#### mapToBin( value : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #mapToBin data-toc-label='mapToBin' }

Map the provided value to a bin.



## Type BinMapperOptions {: #BinMapperOptions }


```js
import type { BinMapperOptions } from 'scenerystack/tambo';
```


- **tolerateOutOfRangeValues**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
<br>  Allow values that are outside the specified range (if false, an assert occurs on out-of-range values).




## Source Code

See the source for [BinMapper.ts](https://github.com/phetsims/tambo/blob/main/js/BinMapper.ts) in the [tambo](https://github.com/phetsims/tambo) repository.
