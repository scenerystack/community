# UtteranceWrapper

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/utterance-queue/blob/main/js/UtteranceWrapper.ts](https://github.com/phetsims/utterance-queue/blob/main/js/UtteranceWrapper.ts) for the most up-to-date information.

## Overview

A type to wrap an Utterance while in the UtteranceQueue, see UtteranceQueue for implementation. Internal to
utterance-queue, should otherwise not need to be used.

@author Jesse Greenberg
@author Michael Kauzmann (PhET Interactive Simulations)

## Class UtteranceWrapper {: #UtteranceWrapper }


One instance per entry in the UtteranceQueue.queue

```js
import { UtteranceWrapper } from 'scenerystack/utterance-queue';
```
### Constructor

#### new UtteranceWrapper( utterance : <span style="font-weight: 400;">[Utterance](../utterance-queue/Utterance.md)</span> ) {: #UtteranceWrapper-constructor data-toc-label='new UtteranceWrapper' }

### Instance Methods

#### dispose() {: #dispose data-toc-label='dispose' }

### Instance Properties

#### timeInQueue {: #timeInQueue data-toc-label='timeInQueue' }

In ms, how long this utterance has been in the queue. The
same Utterance can be in the queue more than once (for utterance looping or while the utterance stabilizes),
in this case the time will be since the first time the utterance was added to the queue.

#### stableTime {: #stableTime data-toc-label='stableTime' }

is the amount of time since this utterance has been added to the utteranceQueue.

#### utterancePriorityListener : <span style="font-weight: 400;">PriorityListener | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> {: #utterancePriorityListener data-toc-label='utterancePriorityListener' }

A reference to a listener on the Utterance priorityProperty while this Utterance
is moving through the UtteranceQueue (in the queue and currently being announced). We want to monitor for priority
changes to adjust its spot in line when needed.



## Source Code

See the source for [UtteranceWrapper.ts](https://github.com/phetsims/utterance-queue/blob/main/js/UtteranceWrapper.ts) in the [utterance-queue](https://github.com/phetsims/utterance-queue) repository.
