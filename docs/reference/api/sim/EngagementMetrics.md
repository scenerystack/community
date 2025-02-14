# EngagementMetrics

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/joist/blob/main/js/EngagementMetrics.ts](https://github.com/phetsims/joist/blob/main/js/EngagementMetrics.ts) for the most up-to-date information.

## Overview

Monitors the engagement as it relates to time spent on each screen of a sim. Mainly this is to provide this information
to a PhET-iO wrapper frame.

The main output of this file is powered by the data stream. As a result the finest granularity of this data is based on
the most frequent events that are emitting. As of this writing, when emitting high frequency events, that is every
frame on the "stepSimulation" event. Note that this Type requires high frequency events to be emitted.

@author Michael Kauzmann (PhET Interactive Simulations)
@author Chris Klusendorf (PhET Interactive Simulations)
@author Sam Reid (PhET Interactive Simulations)

## Class EngagementMetrics {: #EngagementMetrics }


```js
import { EngagementMetrics } from 'scenerystack/sim';
```
### Constructor

#### new EngagementMetrics( sim : <span style="font-weight: 400;">[Sim](../sim/Sim.md)</span> ) {: #EngagementMetrics-constructor data-toc-label='new EngagementMetrics' }

### Instance Methods

#### getEngagementMetrics() : <span style="font-weight: 400;">EngagementMetricsData</span> {: #getEngagementMetrics data-toc-label='getEngagementMetrics' }

get the current engagement data of the simulation.



## Source Code

See the source for [EngagementMetrics.ts](https://github.com/phetsims/joist/blob/main/js/EngagementMetrics.ts) in the [joist](https://github.com/phetsims/joist) repository.
