# Random

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/dot/blob/main/js/Random.ts](https://github.com/phetsims/dot/blob/main/js/Random.ts) for the most up-to-date information.

## Overview

Random number generator with an optional seed.  It uses seedrandom.js, a monkey patch for Math, see
https://github.com/davidbau/seedrandom.

If you are developing a PhET Simulation, you should probably use the global `DOT/dotRandom` because it
provides built-in support for phet-io seeding and a check that it isn't used before the seed has been set.

@author John Blanco (PhET Interactive Simulations)
@author Aaron Davis (PhET Interactive Simulations)
@author Sam Reid (PhET Interactive Simulations)
@author Mohamed Safi

## Class Random {: #Random }


```js
import { Random } from 'scenerystack/dot';
```
### Constructor

#### new Random( providedOptions? : <span style="font-weight: 400;">RandomOptions</span> ) {: #Random-constructor data-toc-label='new Random' }

### Instance Methods

#### dispose() {: #dispose data-toc-label='dispose' }

Clears out this instance from all the Random instances.

#### getSeed() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> {: #getSeed data-toc-label='getSeed' }

Gets the seed.

#### nextBoolean() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #nextBoolean data-toc-label='nextBoolean' }

Returns the next pseudo-random boolean

#### nextInt( n : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #nextInt data-toc-label='nextInt' }

Returns the next pseudo random number from this random number generator sequence.
The random number is an integer ranging from 0 to n-1.
@returns an integer

#### nextIntBetween( min : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, max : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #nextIntBetween data-toc-label='nextIntBetween' }

Randomly select a random integer between min and max (inclusive).
@param min - must be an integer
@param max - must be an integer
@returns an integer between min and max, inclusive

#### sample( array : <span style="font-weight: 400;">readonly T[]</span> ) : <span style="font-weight: 400;">T</span> {: #sample data-toc-label='sample' }

Randomly select one element from the given array.
@param array - from which one element will be selected, must have at least one element
@returns the selected element from the array

#### shuffle( array : <span style="font-weight: 400;">T[]</span> ) : <span style="font-weight: 400;">T[]</span> {: #shuffle data-toc-label='shuffle' }

Creates an array of shuffled values, using a version of the Fisher-Yates shuffle.  Adapted from lodash-2.4.1 by
Sam Reid on Aug 16, 2016, See http://en.wikipedia.org/wiki/Fisher-Yates_shuffle.
@param array - the array which will be shuffled
@returns a new array with all the same elements in the passed-in array, in randomized order.

#### nextDouble() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #nextDouble data-toc-label='nextDouble' }

Returns the next pseudo random number from this random number generator sequence in the range [0, 1)
The distribution of the random numbers is uniformly distributed across the interval
@returns the random number

#### nextDoubleBetween( min : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, max : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #nextDoubleBetween data-toc-label='nextDoubleBetween' }

Randomly selects a double in the range [min,max).

#### nextGaussian() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #nextGaussian data-toc-label='nextGaussian' }

Returns the next gaussian-distributed random number from this random number generator sequence.
The distribution of the random numbers is gaussian, with a mean = 0 and standard deviation = 1

#### nextDoubleInRange( range : <span style="font-weight: 400;">[Range](../dot/Range.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #nextDoubleInRange data-toc-label='nextDoubleInRange' }

Gets the next random double in a Range.
For min &lt; max, the return value is [min,max), between min (inclusive) and max (exclusive).
For min === max, the return value is min.

#### nextPointInBounds( bounds : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md)</span> ) : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> {: #nextPointInBounds data-toc-label='nextPointInBounds' }

Gets a random point within the provided Bounds2, [min,max)

#### setSeed( seed : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> ) {: #setSeed data-toc-label='setSeed' }

@param seed - if null, Math.random will be used to create the seed.

#### sampleProbabilities( weights : <span style="font-weight: 400;">readonly <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>[]</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #sampleProbabilities data-toc-label='sampleProbabilities' }

Choose a numeric index from the array of weights.  The array of weights does not need to be normalized.
See https://stackoverflow.com/questions/8877249/generate-random-integers-with-probabilities
See also ContinuousServer.weightedSampleTest which uses the same algorithm

### Instance Properties

#### numberOfCalls {: #numberOfCalls data-toc-label='numberOfCalls' }

the number of times `nextDouble` is called. Clients should not write to this value.

### Static Properties

#### allRandomInstances : <span style="font-weight: 400;">Set</span> {: #allRandomInstances data-toc-label='allRandomInstances' }



## Source Code

See the source for [Random.ts](https://github.com/phetsims/dot/blob/main/js/Random.ts) in the [dot](https://github.com/phetsims/dot) repository.
