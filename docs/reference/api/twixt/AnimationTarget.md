# AnimationTarget

## Overview

Controls a specific animated value for an Animation.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class AnimationTarget {: #AnimationTarget }


```js
import { AnimationTarget } from 'scenerystack/twixt';
```
### Constructor

#### new AnimationTarget( providedConfig : <span style="font-weight: 400;">[AnimationTargetOptions](../twixt/AnimationTarget.md#AnimationTargetOptions)&lt;T, Obj&gt;</span> ) {: #AnimationTarget-constructor data-toc-label='new AnimationTarget' }

### Instance Methods

#### computeStartEnd() {: #computeStartEnd data-toc-label='computeStartEnd' }

Computes the starting and ending values of this target.

Generally called when the animation is just about to begin, so it can look up the current value if necessary.

#### update( ratio : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) {: #update data-toc-label='update' }

Updates the value of this target.

@param ratio - How far along (from 0 to 1) in the animation.

#### hasPreferredDuration() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #hasPreferredDuration data-toc-label='hasPreferredDuration' }

Whether this target can define the duration of an animation.

#### getPreferredDuration() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> {: #getPreferredDuration data-toc-label='getPreferredDuration' }

Returns the preferred duration of this target (or null if not defined).

### Static Methods

#### DEFAULT_BLEND( a : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, b : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, ratio : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #DEFAULT_BLEND data-toc-label='DEFAULT_BLEND' }

Default blending function for the `blend` function.

#### DEFAULT_BLEND( a : <span style="font-weight: 400;">[Color](../scenery/Color.md)</span>, b : <span style="font-weight: 400;">[Color](../scenery/Color.md)</span>, ratio : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Color](../scenery/Color.md)</span> {: #DEFAULT_BLEND data-toc-label='DEFAULT_BLEND' }

#### DEFAULT_BLEND( a : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span>, b : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span>, ratio : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> {: #DEFAULT_BLEND data-toc-label='DEFAULT_BLEND' }

#### DEFAULT_BLEND( a : <span style="font-weight: 400;">[Vector3](../dot/Vector3.md)</span>, b : <span style="font-weight: 400;">[Vector3](../dot/Vector3.md)</span>, ratio : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Vector3](../dot/Vector3.md)</span> {: #DEFAULT_BLEND data-toc-label='DEFAULT_BLEND' }

#### DEFAULT_BLEND( a : <span style="font-weight: 400;">[Vector4](../dot/Vector4.md)</span>, b : <span style="font-weight: 400;">[Vector4](../dot/Vector4.md)</span>, ratio : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Vector4](../dot/Vector4.md)</span> {: #DEFAULT_BLEND data-toc-label='DEFAULT_BLEND' }

#### DEFAULT_BLEND( a : <span style="font-weight: 400;">T</span>, b : <span style="font-weight: 400;">T</span>, ratio : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">T</span> {: #DEFAULT_BLEND data-toc-label='DEFAULT_BLEND' }

#### DEFAULT_DISTANCE( a : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, b : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #DEFAULT_DISTANCE data-toc-label='DEFAULT_DISTANCE' }

Default distance function for the `distance` option (used for the `speed` option)

#### DEFAULT_DISTANCE( a : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span>, b : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #DEFAULT_DISTANCE data-toc-label='DEFAULT_DISTANCE' }

#### DEFAULT_DISTANCE( a : <span style="font-weight: 400;">[Vector3](../dot/Vector3.md)</span>, b : <span style="font-weight: 400;">[Vector3](../dot/Vector3.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #DEFAULT_DISTANCE data-toc-label='DEFAULT_DISTANCE' }

#### DEFAULT_DISTANCE( a : <span style="font-weight: 400;">[Vector4](../dot/Vector4.md)</span>, b : <span style="font-weight: 400;">[Vector4](../dot/Vector4.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #DEFAULT_DISTANCE data-toc-label='DEFAULT_DISTANCE' }

#### DEFAULT_DISTANCE( a : <span style="font-weight: 400;">T</span>, b : <span style="font-weight: 400;">T</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #DEFAULT_DISTANCE data-toc-label='DEFAULT_DISTANCE' }

#### DEFAULT_ADD( a : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, b : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #DEFAULT_ADD data-toc-label='DEFAULT_ADD' }

Default addition function for the `add` option (used for the `delta` option)

#### DEFAULT_ADD( a : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span>, b : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> ) : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> {: #DEFAULT_ADD data-toc-label='DEFAULT_ADD' }

#### DEFAULT_ADD( a : <span style="font-weight: 400;">[Vector3](../dot/Vector3.md)</span>, b : <span style="font-weight: 400;">[Vector3](../dot/Vector3.md)</span> ) : <span style="font-weight: 400;">[Vector3](../dot/Vector3.md)</span> {: #DEFAULT_ADD data-toc-label='DEFAULT_ADD' }

#### DEFAULT_ADD( a : <span style="font-weight: 400;">[Vector4](../dot/Vector4.md)</span>, b : <span style="font-weight: 400;">[Vector4](../dot/Vector4.md)</span> ) : <span style="font-weight: 400;">[Vector4](../dot/Vector4.md)</span> {: #DEFAULT_ADD data-toc-label='DEFAULT_ADD' }

#### DEFAULT_ADD( a : <span style="font-weight: 400;">T</span>, b : <span style="font-weight: 400;">T</span> ) : <span style="font-weight: 400;">T</span> {: #DEFAULT_ADD data-toc-label='DEFAULT_ADD' }



## Type AnimationTargetOptions {: #AnimationTargetOptions }


```js
import type { AnimationTargetOptions } from 'scenerystack/twixt';
```


- **setValue**?: ( ( value: T ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span> ) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
<br>  If provided, it should be a function that acts as "setting" the value of the animation.
  NOTE: do not provide this and property/object.
- **getValue**?: ( () =&gt; T ) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
<br>  If provided, it should be a function that returns the current value that will be animated.
  NOTE: This can be omitted, even if setValue is provided, if the `from` option is set (as the current value would
  just be ignored).
- **property**?: [TProperty](../axon/TProperty.md)&lt;T&gt; | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
<br>  If provided, it should be an axon Property with the current value. It will be modified by the animation.
  NOTE: do not provide this and setValue/object
- **object**?: Obj | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
<br>  If provided, it should point to an object where `object[ attribute ]` is the value to be modified
  by the animation. NOTE: do not provide this and setValue/property
- **attribute**?: [KeysMatching](../phet-core/KeysMatching.md)&lt;Obj, T&gt; | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
<br>  If `object` is provided, it should be a string such that `object[ attribute ]` is the value to be modified.
- **to**?: T | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
<br>  If provided, the animation will treat this as the end value (what it animates toward).
- **delta**?: T | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
<br>  If provided, the animation will treat the ending value of the animation as the starting value plus this delta
  value. To determine the exact value, the `add` option will be used (which by default handles
  number/Vector2/Vector3/Vector4 as expected). The animation can be run multiple times, and each time it will use
  the "starting" value from last time (unless the `from` option is used).
- **speed**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
<br>  If provided, the animation's length will be this value (seconds/unit) times the "distance" between the start and
  end value of the animation. The `distance` option can be used to specify a way to compute the distance, and works
  by default as expected for number/Vector2/Vector3/Vector4.
- **from**?: T | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
<br>  If provided, the animation will start from this value (instead of getting the current value to start from).
- **easing**?: [Easing](../twixt/Easing.md)
<br>  Controls the relative motion from the starting value to the ending value. See Easing.js for info.
- **blend**?: BlendFunction&lt;T&gt;
<br>  Should be of the form `function( start: {*}, end: {*}, ratio: {number} ): {*}` where the ratio will be between 0
  and 1 (inclusive). If the ratio is 0, it should return the starting value, if the ratio is 1, it should return the
  ending value, and otherwise it should return the best interpolation possible between the two values. The default
  should work for number/Vector2/Vector3/Vector4/Color, but for other types either `start.blend( end, ratio )` should
  be defined and work, or this function should be overridden.
- **distance**?: DistanceFunction&lt;T&gt;
<br>  Should be of the form `function( start: {*}, end: {*} ): {number}`, and it should return a measure
  of distance (a metric) between the two values. This is only used for if the `speed` option is provided (so it
  can determine the length of the animation). The default should work for number/Vector2/Vector3/Vector4.
- **add**?: AddFunction&lt;T&gt;
<br>  Should be of the form `function( start: {*}, delta: {*} ): {*}` where it adds together a value
  and a "delta" (usually just a value of the same type) and returns the result. This is used for the `delta`
  option. The default should work for number/Vector2/Vector3/Vector4.




## Source Code

See the source for [AnimationTarget.ts](https://github.com/phetsims/twixt/blob/main/js/AnimationTarget.ts) in the [twixt](https://github.com/phetsims/twixt) repository.
