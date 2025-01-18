# Profiler

## Overview

This minimalistic profiler is meant to help understand the time spent in running a PhET simulation.
It was designed to be minimally invasive, so it won't alter the simulation's performance significantly.
Note: just showing the average FPS or ms/frame is not sufficient, since we need to see when garbage collections
happen, which are typically a spike in a single frame.  Hence, the data is shown as a histogram. Data that
doesn't fit in the histogram appears in an optional 'longTimes' field.

When a sim is run with ?profiler, output is displayed in the upper-left corner of the browser self, and updates
every 60 frames.

The general format is:

FPS - ms/frame - histogram [- longTimes]

Here's an example:

48 FPS - 21ms/frame - 0,0,5,0,0,0,0,0,1,0,0,0,0,3,1,3,18,19,5,3,1,0,1,0,0,0,0,1,0,0 - 50,37,217

The histogram field is a sequence of 30 numbers, for 0-29ms. Each number indicates the number of frames that took
that amount of time. In the above example, histogram[2] is 5; there were 5 frames that took 2ms.

The longTimes field is the set of frame times that exceeded 29ms, and thus don't fit in the histogram.
If 2 frames took 37ms, then 37ms will appear twice.  If no frames exceeded 29ms, then this field will be absent.
These values are sorted in descending order, so you can easily identify the largest frame time.

@author Sam Reid (PhET Interactive Simulations)
@author Chris Malley (PixelZoom, Inc.)

## Class Profiler {: #Profiler }


```js
import { Profiler } from 'scenerystack/sim';
```
### Constructor

#### new Profiler() {: #Profiler-constructor data-toc-label='new Profiler' }

### Instance Methods



### Static Methods

#### start( sim : <span style="font-weight: 400;">[Sim](../sim/Sim.md)</span> ) {: #start data-toc-label='start' }



## Source Code

See the source for [Profiler.ts](https://github.com/phetsims/joist/blob/main/js/Profiler.ts) in the [joist](https://github.com/phetsims/joist) repository.
