# Range

## Overview

A numeric range.

@author Chris Malley (PixelZoom, Inc.)
@author Andrew Adare
@author Chris Klusendorf (PhET Interactive Simulations)

## Class Range {: #Range }


```js
import { Range } from 'scenerystack/dot';
```
### Constructor

#### new Range( min : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, max : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### getMin() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #getMin data-toc-label='getMin' }

Getter for min

#### setMin( min : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) {: #setMin data-toc-label='setMin' }

TODO: Allow chaining, https://github.com/phetsims/dot/issues/122
Setter for min

#### getMax() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #getMax data-toc-label='getMax' }

Getter for max

#### setMax( max : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) {: #setMax data-toc-label='setMax' }

Setter for max

#### setMinMax( min : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, max : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #setMinMax data-toc-label='setMinMax' }

Sets the minimum and maximum value of the range

#### set( range : <span style="font-weight: 400;">[Range](../dot/Range.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #set data-toc-label='set' }

Sets the minimum and maximum value of this range from the provided Range.

#### addValue( n : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) {: #addValue data-toc-label='addValue' }

#### withValue( n : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Range](../dot/Range.md)</span> {: #withValue data-toc-label='withValue' }

#### copy() : <span style="font-weight: 400;">[Range](../dot/Range.md)</span> {: #copy data-toc-label='copy' }

Makes a copy of this range

#### getLength() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #getLength data-toc-label='getLength' }

Gets the length of this range, that is the difference between the maximum and minimum value of this range

#### getCenter() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #getCenter data-toc-label='getCenter' }

Gets the center of this range, that is the average value of the maximum and minimum value of this range

#### contains( value : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #contains data-toc-label='contains' }

Determines if this range contains the value

#### containsRange( range : <span style="font-weight: 400;">[Range](../dot/Range.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #containsRange data-toc-label='containsRange' }

Does this range contain the specified range?

#### intersects( range : <span style="font-weight: 400;">[Range](../dot/Range.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #intersects data-toc-label='intersects' }

Determine if this range overlaps (intersects) with another range

#### intersectsExclusive( range : <span style="font-weight: 400;">[Range](../dot/Range.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #intersectsExclusive data-toc-label='intersectsExclusive' }

Do the two ranges overlap with one another?  Note that this assumes that
This is a open interval.

#### union( range : <span style="font-weight: 400;">[Range](../dot/Range.md)</span> ) : <span style="font-weight: 400;">[Range](../dot/Range.md)</span> {: #union data-toc-label='union' }


REVIEW: The naming is not helping me understand that this function is just the immutable version of includeRange().

The smallest range that contains both this range and the input range, returned as a copy.

The method below is the immutable form of the function includeRange(). The method will return a new range, and will not modify
this range.

#### intersection( range : <span style="font-weight: 400;">[Range](../dot/Range.md)</span> ) : <span style="font-weight: 400;">[Range](../dot/Range.md)</span> {: #intersection data-toc-label='intersection' }

REVIEW: The naming is not helping me understand that this function is just the immutable version of constrainRange().

The smallest range that is contained by both this range and the input range, returned as a copy.

The method below the immutable form of the function constrainRange(). The method below will return a new range, and will not modify
this range.

#### includeRange( range : <span style="font-weight: 400;">[Range](../dot/Range.md)</span> ) : <span style="font-weight: 400;">[Range](../dot/Range.md)</span> {: #includeRange data-toc-label='includeRange' }

Modifies this range so that it contains both its original range and the input range.

This is the mutable form of the function union(). This will mutate (change) this range, in addition to returning
this range itself.

#### constrainRange( range : <span style="font-weight: 400;">[Range](../dot/Range.md)</span> ) : <span style="font-weight: 400;">[Range](../dot/Range.md)</span> {: #constrainRange data-toc-label='constrainRange' }

Modifies this range so that it is the largest range contained both in its original range and in the input range.

This is the mutable form of the function intersection(). This will mutate (change) this range, in addition to returning
this range itself.

#### shifted( n : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Range](../dot/Range.md)</span> {: #shifted data-toc-label='shifted' }

REVIEW: do we also need a mutable form of shifted?

Returns a new range that is the same as this range, but shifted by the specified amount.

#### toString() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> {: #toString data-toc-label='toString' }

Converts the attributes of this range to a string

#### constrainValue( value : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #constrainValue data-toc-label='constrainValue' }

Constrains a value to the range.

#### times( value : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Range](../dot/Range.md)</span> {: #times data-toc-label='times' }

Multiply the min and max by the provided value, immutable

#### multiply( value : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #multiply data-toc-label='multiply' }

Multiply the min and max by the provided value, mutable

#### equals( object : <span style="font-weight: 400;">IntentionalAny</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #equals data-toc-label='equals' }

Determines if this Range is equal to some object.

#### equalsEpsilon( object : <span style="font-weight: 400;">IntentionalAny</span>, epsilon : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #equalsEpsilon data-toc-label='equalsEpsilon' }

Determines if this Range is approximately equal to some object.

#### getNormalizedValue( value : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #getNormalizedValue data-toc-label='getNormalizedValue' }

Given a value, normalize it to this Range's length, returning a value between 0 and 1 for values contained in
the Range. If the value is not contained in Range, then the return value will not be between 0 and 1.

#### expandNormalizedValue( normalizedValue : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #expandNormalizedValue data-toc-label='expandNormalizedValue' }

Compute the opposite of a normalized value. Given a normalized value (between 0 and 1). Worked with any number
though, (even outside of the range). It is the client's responsibility to clamp if that is important to the
usage.

#### toStateObject() : <span style="font-weight: 400;">[RangeStateObject](../dot/Range.md#RangeStateObject)</span> {: #toStateObject data-toc-label='toStateObject' }

#### clampDelta( value : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, delta : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #clampDelta data-toc-label='clampDelta' }

Given a value and a delta to change that value, clamp the delta to make sure the value stays within range.

### Static Methods

#### fromStateObject( stateObject : <span style="font-weight: 400;">[RangeStateObject](../dot/Range.md#RangeStateObject)</span> ) : <span style="font-weight: 400;">[Range](../dot/Range.md)</span> {: #fromStateObject data-toc-label='fromStateObject' }

### Static Properties

#### RangeIO : <span style="font-weight: 400;">[IOType](../tandem/IOType.md)</span> {: #RangeIO data-toc-label='RangeIO' }

#### EVERYTHING : <span style="font-weight: 400;">[Range](../dot/Range.md)</span> {: #EVERYTHING data-toc-label='EVERYTHING' }

(readonly)

#### NOTHING : <span style="font-weight: 400;">[Range](../dot/Range.md)</span> {: #NOTHING data-toc-label='NOTHING' }

(readonly)



## Source Code

See the source for [Range.ts](https://github.com/phetsims/dot/blob/main/js/Range.ts) in the [dot](https://github.com/phetsims/dot) repository.
