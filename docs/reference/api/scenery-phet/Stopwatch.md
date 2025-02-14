# Stopwatch

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/scenery-phet/blob/main/js/Stopwatch.ts](https://github.com/phetsims/scenery-phet/blob/main/js/Stopwatch.ts) for the most up-to-date information.

## Overview

Stopwatch is the model for the stopwatch. It is responsible for time, position, and visibility.

@author Chris Malley (PixelZoom, Inc.)

## Class Stopwatch {: #Stopwatch }


```js
import { Stopwatch } from 'scenerystack/scenery-phet';
```
### Constructor

#### new Stopwatch( providedOptions? : <span style="font-weight: 400;">[StopwatchOptions](../scenery-phet/Stopwatch.md#StopwatchOptions)</span> ) {: #Stopwatch-constructor data-toc-label='new Stopwatch' }

### Instance Methods

#### dispose() {: #dispose data-toc-label='dispose' }

#### reset() {: #reset data-toc-label='reset' }

#### step( dt : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) {: #step data-toc-label='step' }

Steps the stopwatch.
@param dt - time delta, in units as specified by the client

#### setTime( t : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) {: #setTime data-toc-label='setTime' }

Similar to step() but sets the time to a specific value.
@param t

### Instance Properties

#### positionProperty : <span style="font-weight: 400;">[Property](../axon/Property.md)&lt;[Vector2](../dot/Vector2.md)&gt;</span> {: #positionProperty data-toc-label='positionProperty' }

(readonly)

position of the stopwatch, in view coordinates

#### isVisibleProperty : <span style="font-weight: 400;">[Property](../axon/Property.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>&gt;</span> {: #isVisibleProperty data-toc-label='isVisibleProperty' }

(readonly)

whether the stopwatch is visible

#### isRunningProperty : <span style="font-weight: 400;">[Property](../axon/Property.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>&gt;</span> {: #isRunningProperty data-toc-label='isRunningProperty' }

(readonly)

whether the stopwatch is running

#### timeProperty : <span style="font-weight: 400;">[NumberProperty](../axon/NumberProperty.md)</span> {: #timeProperty data-toc-label='timeProperty' }

(readonly)

time displayed on the stopwatch, in units as specified by the client

### Static Properties

#### ZERO_TO_ALMOST_SIXTY : <span style="font-weight: 400;">[Range](../dot/Range.md)</span> {: #ZERO_TO_ALMOST_SIXTY data-toc-label='ZERO_TO_ALMOST_SIXTY' }

(readonly)



## Type StopwatchOptions {: #StopwatchOptions }


```js
import type { StopwatchOptions } from 'scenerystack/scenery-phet';
```


- **position**?: [Vector2](../dot/Vector2.md)
- **isVisible**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
- **timePropertyOptions**?: [StrictOmit](../phet-core/StrictOmit.md)&lt;[NumberPropertyOptions](../axon/NumberProperty.md#NumberPropertyOptions), "tandem"&gt;
- &amp; [PhetioObjectOptions](../tandem/PhetioObject.md#PhetioObjectOptions)




## Source Code

See the source for [Stopwatch.ts](https://github.com/phetsims/scenery-phet/blob/main/js/Stopwatch.ts) in the [scenery-phet](https://github.com/phetsims/scenery-phet) repository.
