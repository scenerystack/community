# Announcer

## Overview

Abstract base class for the type that wires into an UtteranceQueue to announce Utterances.

@author Michael Kauzmann (PhET Interactive Simulations)

## Class Announcer {: #Announcer }


```js
import { Announcer } from 'scenerystack/utterance-queue';
```
### Constructor

#### new Announcer( providedOptions? : <span style="font-weight: 400;">[AnnouncerOptions](../utterance-queue/Announcer.md#AnnouncerOptions)</span> ) {: #Announcer-constructor data-toc-label='new Announcer' }

### Instance Methods

#### announce( announceText : <span style="font-weight: 400;">[ResolvedResponse](../utterance-queue/ResponsePacket.md#ResolvedResponse)</span>, utterance : <span style="font-weight: 400;">[Utterance](../utterance-queue/Utterance.md)</span>, providedOptions? : <span style="font-weight: 400;">[AnnouncerAnnounceOptions](../utterance-queue/Announcer.md#AnnouncerAnnounceOptions)</span> ) {: #announce data-toc-label='announce' }

Announce an alert, setting textContent to an aria-live element.

@param announceText - The string that was formulated from the utterance
@param utterance - Utterance with content to announce
@param [providedOptions] - specify support for options particular to this announcer's features.

#### cancelUtterance( utterance : <span style="font-weight: 400;">[Utterance](../utterance-queue/Utterance.md)</span> ) {: #cancelUtterance data-toc-label='cancelUtterance' }

Cancel announcement if this Announcer is currently announcing the Utterance. Does nothing
to queued Utterances. The announcer needs to implement cancellation of speech.

#### cancel() {: #cancel data-toc-label='cancel' }

   ’   * Cancel announcement of any Utterance that is being spoken. The announcer needs to implement cancellation of speech.

#### shouldUtteranceCancelOther( utterance : <span style="font-weight: 400;">[Utterance](../utterance-queue/Utterance.md)</span>, utteranceToCancel : <span style="font-weight: 400;">[Utterance](../utterance-queue/Utterance.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #shouldUtteranceCancelOther data-toc-label='shouldUtteranceCancelOther' }

Determine if one utterance should cancel another. Default behavior for this superclass is to cancel when
the new Utterance is of higher priority. But subclasses may re-implement this function if it has special logic
or announcerOptions that override this behavior.

#### onUtterancePriorityChange( utterance : <span style="font-weight: 400;">[Utterance](../utterance-queue/Utterance.md)</span> ) {: #onUtterancePriorityChange data-toc-label='onUtterancePriorityChange' }

Intended to be overridden by subtypes if necessary as a way to order the queue if there is announcer
specific logic.

### Instance Properties

#### respectResponseCollectorProperties : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #respectResponseCollectorProperties data-toc-label='respectResponseCollectorProperties' }

(readonly)

When an Utterance to be announced provided an alert in `ResponsePacket`-form, whether or
not to listen to the current values of responseCollector Properties, or to just combine all pieces of it no matter.

#### readyToAnnounce {: #readyToAnnounce data-toc-label='readyToAnnounce' }

A flag that indicates to an UtteranceQueue that this Announcer is ready to speak the next Utterance.

#### hasSpoken {: #hasSpoken data-toc-label='hasSpoken' }

A flag that indicates whether this announcer has successfully spoken at least once.

#### announcementCompleteEmitter : <span style="font-weight: 400;">[TEmitter](../axon/TEmitter.md)&lt;[ [Utterance](../utterance-queue/Utterance.md), [ResolvedResponse](../utterance-queue/ResponsePacket.md#ResolvedResponse) ]&gt;</span> {: #announcementCompleteEmitter data-toc-label='announcementCompleteEmitter' }

(readonly)

Emits an event when this Announcer is finished with an Utterance. It is up
to the Announcer subclass to emit this because different speech technologies may have different APIs
to determine when speaking is finished.

### Static Properties

#### AnnouncerIO : <span style="font-weight: 400;">[IOType](../tandem/IOType.md)</span> {: #AnnouncerIO data-toc-label='AnnouncerIO' }



## Type AnnouncerAnnounceOptions {: #AnnouncerAnnounceOptions }


Options for the announce method

```js
import type { AnnouncerAnnounceOptions } from 'scenerystack/utterance-queue';
```


[EmptySelfOptions](../phet-core/optionize.md#EmptySelfOptions)



## Type AnnouncerOptions {: #AnnouncerOptions }


```js
import type { AnnouncerOptions } from 'scenerystack/utterance-queue';
```


- **respectResponseCollectorProperties**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
- &amp; [PhetioObjectOptions](../tandem/PhetioObject.md#PhetioObjectOptions)




## Source Code

See the source for [Announcer.ts](https://github.com/phetsims/utterance-queue/blob/main/js/Announcer.ts) in the [utterance-queue](https://github.com/phetsims/utterance-queue) repository.
