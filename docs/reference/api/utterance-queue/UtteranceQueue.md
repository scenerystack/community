# UtteranceQueue

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/utterance-queue/blob/main/js/UtteranceQueue.ts](https://github.com/phetsims/utterance-queue/blob/main/js/UtteranceQueue.ts) for the most up-to-date information.

## Overview

Manages a queue of Utterances that are read in order by assistive technology (AT). This queue typically reads
things in a first-in-first-out manner, but it is possible to send an alert directly to the front of
the queue. Items in the queue are sent to AT front to back, driven by AXON/timer.

An Utterance instance is used as a unique value to the UtteranceQueue. If you add an Utterance a second time to the,
queue, the queue will remove the previous instance, and treat the new addition as if the Utterance has been in the
queue the entire time, but in the new position.

AT are inconsistent in the way that they order alerts, some use last-in-first-out order,
others use first-in-first-out order, others just read the last alert that was provided. This queue
manages order and improves consistency.

@author Jesse Greenberg (PhET Interactive Simulations)
@author Michael Kauzmann (PhET Interactive Simulations)

## Class UtteranceQueue {: #UtteranceQueue }


```js
import { UtteranceQueue } from 'scenerystack/utterance-queue';
```
### Constructor

#### new UtteranceQueue( announcer : <span style="font-weight: 400;">A</span>, providedOptions? : <span style="font-weight: 400;">UtteranceQueueOptions</span> ) {: #UtteranceQueue-constructor data-toc-label='new UtteranceQueue' }

### Instance Methods

#### addToBack( utterance : <span style="font-weight: 400;">[TAlertable](../utterance-queue/Utterance.md#TAlertable)</span> ) {: #addToBack data-toc-label='addToBack' }

Add an utterance ot the end of the queue.  If the utterance has a type of alert which
is already in the queue, the older alert will be immediately removed.

#### addToFront( utterance : <span style="font-weight: 400;">[TAlertable](../utterance-queue/Utterance.md#TAlertable)</span> ) {: #addToFront data-toc-label='addToFront' }

Add an utterance to the front of the queue to be read immediately.
@deprecated

#### removeUtterance( utterance : <span style="font-weight: 400;">[Utterance](../utterance-queue/Utterance.md)</span> ) {: #removeUtterance data-toc-label='removeUtterance' }

Remove an Utterance from the queue. This function is only able to remove `Utterance` instances, and cannot remove
other TAlertable types.

#### hasUtterance( utterance : <span style="font-weight: 400;">[Utterance](../utterance-queue/Utterance.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #hasUtterance data-toc-label='hasUtterance' }

Returns true if the utterances is in this queue.

#### clear() {: #clear data-toc-label='clear' }

Clear the utteranceQueue of all Utterances, any Utterances remaining in the queue will
not be announced by the screen reader.

#### cancelUtterance( utterance : <span style="font-weight: 400;">[Utterance](../utterance-queue/Utterance.md)</span> ) {: #cancelUtterance data-toc-label='cancelUtterance' }

Cancel the provided Utterance if it is being spoken by the Announcer. Removes the Utterance from the queue if
it is not being spoken by the announcer. Does nothing to other Utterances. The Announcer implements the behavior
to stop speech.

#### cancel() {: #cancel data-toc-label='cancel' }

Clears all Utterances from the queue and cancels announcement of any Utterances that are being
announced by the Announcer.

#### setMuted( isMuted : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> ) {: #setMuted data-toc-label='setMuted' }

Set whether or not the utterance queue is muted.  When muted, Utterances will still
move through the queue, but nothing will be sent to assistive technology.

#### getMuted() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #getMuted data-toc-label='getMuted' }

Get whether or not the utteranceQueue is muted.  When muted, Utterances will still
move through the queue, but nothing will be read by asistive technology.

#### setEnabled( isEnabled : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> ) {: #setEnabled data-toc-label='setEnabled' }

Set whether or not the utterance queue is enabled.  When enabled, Utterances cannot be added to
the queue, and the Queue cannot be cleared. Also nothing will be sent to assistive technology.

#### isEnabled() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #isEnabled data-toc-label='isEnabled' }

Get whether or not the utterance queue is enabled.  When enabled, Utterances cannot be added to
the queue, and the Queue cannot be cleared. Also nothing will be sent to assistive technology.

#### announceImmediately( utterance : <span style="font-weight: 400;">[TAlertable](../utterance-queue/Utterance.md#TAlertable)</span> ) {: #announceImmediately data-toc-label='announceImmediately' }

Immediately announce the provided Utterance. If the Announcer is ready to announce, the Utterance will be announced
synchronously with this call. Otherwise, the Utterance will be added to the front of the queue to be announced
as soon as the Announcer is ready.

This function should generally not be used. Use addToBack() in correlation with priorityProperty and timing variables
to control the flow of Utterances. This function can be useful when you need an Utterance to be announced
synchronously with user input (for example, due to browser constraints on initializing SpeechSynthesis).

Any duplicate instance of the provided Utterance that is already in the queue will be removed, matching the
behavior of addToBack().

announceImmediately() respects Utterance.priorityProperty. A provided Utterance with a priority equal to or lower
than what is being announced will not interrupt and will never be announced. If an Utterance at the front of the
queue has a higher priority than the provided Utterance, the provided Utterance will never be announced. If the
provided Utterance has a higher priority than what is at the front of the queue or what is being announced, it will
be announced immediately and interrupt the announcer. Otherwise, it will never be announced.

#### dispose() {: #dispose data-toc-label='dispose' }

### Instance Properties

#### announcer : <span style="font-weight: 400;">A</span> {: #announcer data-toc-label='announcer' }

(readonly)

Sends browser requests to announce either through aria-live with a screen reader or
SpeechSynthesis with Web Speech API (respectively), or any method that implements this interface. Use with caution,
and only with the understanding that you know what Announcer this UtteranceQueue instance uses.

### Static Methods

#### fromFactory() : <span style="font-weight: 400;">[UtteranceQueue](../utterance-queue/UtteranceQueue.md)</span> {: #fromFactory data-toc-label='fromFactory' }

Simple factory to wire up all steps for using UtteranceQueue for aria-live alerts. This accomplishes the three items
needed for UtteranceQueue to run:
1. Step stepTimer on animation frame (passing it elapsed time in seconds)
2. Add UtteranceQueue's aria-live elements to the document
3. Create the UtteranceQueue instance



## Source Code

See the source for [UtteranceQueue.ts](https://github.com/phetsims/utterance-queue/blob/main/js/UtteranceQueue.ts) in the [utterance-queue](https://github.com/phetsims/utterance-queue) repository.
