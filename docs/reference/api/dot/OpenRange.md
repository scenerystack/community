# OpenRange

## Overview

A numeric range that handles open and half open intervals. Defaults to an open interval.

@author Michael Barlow (PhET Interactive Simulations)

## Class OpenRange {: #OpenRange }


```js
import { OpenRange } from 'scenerystack/dot';
```
### Constructor

#### new OpenRange( min, max, options ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### setMin( min ) {: #setMin data-toc-label='setMin' }

OpenRange override for setMin.
@public
@override
@param  {number} min

#### setMax( max ) {: #setMax data-toc-label='setMax' }

OpenRange override for setMax.
@public
@override
@param  {number} max

#### setMinMax( min, max ) {: #setMinMax data-toc-label='setMinMax' }

OpenRange override for setMinMax. Ensures that min is strictly less than max.
@override
@public
@param  {number} min
@param  {number} max

#### contains( value ) {: #contains data-toc-label='contains' }

Determines if this range contains the value
@public
@param {number} value
@returns {boolean}

#### containsRange( range ) {: #containsRange data-toc-label='containsRange' }

Does this range contain the specified range?
@public
@param {Range} range
@returns {boolean}

#### intersects( range ) {: #intersects data-toc-label='intersects' }

Determine if this range overlaps (intersects) with another range
@public
@param {Range} range
@returns {boolean}

#### toString() {: #toString data-toc-label='toString' }

Converts the attributes of this range to a string
@public
@returns {string}

#### constrainValue( value ) {: #constrainValue data-toc-label='constrainValue' }

TODO: how will this function in an open range scenario? https://github.com/phetsims/dot/issues/96
Constrains a value to the range.
@public
@param {number} value
@returns {number}

#### equals( other ) {: #equals data-toc-label='equals' }

Determines if this range is equal to other range.
@public
@param {Range} other
@returns {boolean}



## Source Code

See the source for [OpenRange.js](https://github.com/phetsims/dot/blob/main/js/OpenRange.js) in the [dot](https://github.com/phetsims/dot) repository.
