# TemporalCounter

## Overview

Used by EngagementMetrics to keep track of the seconds in which activity occurs. For example, with a binSize of 1000,
calling onEvent with three values within the range of 1000 will result in a single "count" because they were all in a
bin. See unit tests for more examples.

@author Michael Kauzmann (PhET Interactive Simulations)
@author Chris Klusendorf (PhET Interactive Simulations)
@author Sam Reid (PhET Interactive Simulations)

## Class TemporalCounter {: #TemporalCounter }


```js
import { TemporalCounter } from 'scenerystack/joist';
```
### Constructor

#### new TemporalCounter( binSize : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) {: #TemporalCounter-constructor data-toc-label='new TemporalCounter' }

### Instance Methods

#### onEvent( time : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) {: #onEvent data-toc-label='onEvent' }

### Instance Properties

#### counts : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #counts data-toc-label='counts' }



## Source Code

See the source for [TemporalCounter.ts](https://github.com/phetsims/joist/blob/main/js/TemporalCounter.ts) in the [joist](https://github.com/phetsims/joist) repository.
