# RunningAverage

## Overview

Data structure that keeps track of running average over a given self.

@author Sam Reid (PhET Interactive Simulations)
@author Jonathan Olson (PhET Interactive Simulations)

## Class RunningAverage {: #RunningAverage }


```js
import { RunningAverage } from 'scenerystack/dot';
```
### Constructor

#### new RunningAverage( windowSize ) {: #RunningAverage-constructor data-toc-label='new RunningAverage' }

### Instance Methods

#### clear() {: #clear data-toc-label='clear' }

Clear the running average.
@public

#### getRunningAverage() {: #getRunningAverage data-toc-label='getRunningAverage' }

Gets the current value of the running average.
@public

@returns {number}

#### isSaturated() {: #isSaturated data-toc-label='isSaturated' }

Returns whether the number of samples is at least as large as the self size (the buffer is full).
@public

@returns {boolean}

#### updateRunningAverage( sample ) {: #updateRunningAverage data-toc-label='updateRunningAverage' }

Add a data point to the average and return the new running average.
@public

@param {number} sample
@returns {number}



## Source Code

See the source for [RunningAverage.js](https://github.com/phetsims/dot/blob/main/js/RunningAverage.js) in the [dot](https://github.com/phetsims/dot) repository.
