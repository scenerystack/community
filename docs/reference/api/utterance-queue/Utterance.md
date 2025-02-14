# Utterance

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/utterance-queue/blob/main/js/Utterance.ts](https://github.com/phetsims/utterance-queue/blob/main/js/Utterance.ts) for the most up-to-date information.

## Overview

An utterance to be handed off to the AlertQueue, which manages the order of accessibility alerts
read by a screen reader.

An utterance to be provided to the AlertQueue. An utterance can be one of TAlertable.

A single Utterance can be added to the utteranceQueue multiple times. This may be so that a
number of alerts associated with the utterance get read in order (see alert in options). Or it
may be that changes are being alerted rapidly from the same source. An Utterance is considered
"unstable" if it is being added rapidly to the utteranceQueue. By default, utterances are only
announced when they are "stable", and stop getting added to the queue. This will prevent
a large number of alerts from the same interaction from spamming the user. See related options alertStableDelay,
and alertMaximumDelay.

@author Jesse Greenberg
@author Michael Kauzmann (PhET Interactive Simulations)

## Class Utterance {: #Utterance }


```js
import { Utterance } from 'scenerystack/utterance-queue';
```
### Constructor

#### new Utterance( providedOptions? : <span style="font-weight: 400;">[UtteranceOptions](../utterance-queue/Utterance.md#UtteranceOptions)</span> ) {: #Utterance-constructor data-toc-label='new Utterance' }

### Instance Methods

#### getAlertText( respectResponseCollectorProperties ) : <span style="font-weight: 400;">[ResolvedResponse](../utterance-queue/ResponsePacket.md#ResolvedResponse)</span> {: #getAlertText data-toc-label='getAlertText' }

Get the string to alert. This function has potential to run a function to generate the string. Use this with caution.
Most often UtteranceQueue should be the only spot calling this.
@param respectResponseCollectorProperties=false - if false, then do not listen to the value of responseCollector
                                             for creating the ResponsePacket conglomerate (just combine all that are supplied).

#### getAlert() : <span style="font-weight: 400;">AlertableNoUtterance</span> {: #getAlert data-toc-label='getAlert' }

#### setAlert( alert : <span style="font-weight: 400;">AlertableNoUtterance</span> ) {: #setAlert data-toc-label='setAlert' }

#### setAlertStableDelay( delay : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) {: #setAlertStableDelay data-toc-label='setAlertStableDelay' }

Set the alertStableDelay time, see alertStableDelay option for more information.

BEWARE! Why does the delay time need to be changed during the lifetime of an Utterance? It did for
https://github.com/phetsims/gravity-force-lab-basics/issues/146, but does it for you? Be sure there is good
reason changing this value.

#### toString() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> {: #toString data-toc-label='toString' }

#### toStateObject() : <span style="font-weight: 400;">SerializedUtterance</span> {: #toStateObject data-toc-label='toStateObject' }

#### reset() {: #reset data-toc-label='reset' }

#### setCanAnnounceProperties( canAnnounceProperties : <span style="font-weight: 400;">[TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>&gt;[]</span> ) {: #setCanAnnounceProperties data-toc-label='setCanAnnounceProperties' }

Set the Properties controlling whether this Utterance can announce. All Properties must be
true for the alert content of this Utterance to be announced. These Properties are used in the implementation
of this.canAnnounceProperty. Setting new canAnnounceProperties has no impact on the listeners added to
this.canAnnounceProperty.

#### getCanAnnounceProperties() : <span style="font-weight: 400;">[TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>&gt;[]</span> {: #getCanAnnounceProperties data-toc-label='getCanAnnounceProperties' }

Get the Properties that control whether the alert content for this Utterance can be announced.
All must be true for the announcement to occur.

#### setDescriptionCanAnnounceProperties( descriptionCanAnnounceProperties : <span style="font-weight: 400;">[TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>&gt;[]</span> ) {: #setDescriptionCanAnnounceProperties data-toc-label='setDescriptionCanAnnounceProperties' }

Set the Properties controlling whether this Utterance can announce to AriaLiveAnnouncer. All Properties must be
true for the alert content of this Utterance to be announced. These Properties are used in the implementation
of this.descriptionCanAnnounceProperty. Setting new descriptionCanAnnounceProperties has no impact on the
listeners added to this.descriptionCanAnnounceProperty. To announce to AriaLiveAnnouncer, this.canAnnounceProperty
must also be true

#### getDescriptionCanAnnounceProperties() : <span style="font-weight: 400;">[TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>&gt;[]</span> {: #getDescriptionCanAnnounceProperties data-toc-label='getDescriptionCanAnnounceProperties' }

Get the Properties that control whether the alert content for this Utterance can be announced.
All must be true for the announcement to occur.

#### setVoicingCanAnnounceProperties( voicingCanAnnounceProperties : <span style="font-weight: 400;">[TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>&gt;[]</span> ) {: #setVoicingCanAnnounceProperties data-toc-label='setVoicingCanAnnounceProperties' }

Set the Properties controlling whether this Utterance can announce to SpeechSynthesisAnnouncer. All Properties
must be true for the alert content of this Utterance to be announced. These Properties are used in the
implementation of this.voicingCanAnnounceProperty. Setting new voicingCanAnnounceProperties has no impact
on the listeners added to this.voicingCanAnnounceProperty. To announce to SpeechSynthesisAnnouncer,
this.canAnnounceProperty must also be true.

#### getVoicingCanAnnounceProperties() : <span style="font-weight: 400;">[TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>&gt;[]</span> {: #getVoicingCanAnnounceProperties data-toc-label='getVoicingCanAnnounceProperties' }

Get the Properties that control whether the alert content for this Utterance can be announced.
All must be true for the announcement to occur.

#### dispose() {: #dispose data-toc-label='dispose' }

Make eligible for garbage collection.

### Instance Properties

#### canAnnounceProperty : <span style="font-weight: 400;">AnnouncingControlProperty</span> {: #canAnnounceProperty data-toc-label='canAnnounceProperty' }

(readonly)

If the value of this Property is false, this Utterance will never be announced by an Announcer. See
documentation for canAnnounceImplementationProperty for implementation details and why we use a DynamicProperty.

#### descriptionCanAnnounceProperty : <span style="font-weight: 400;">AnnouncingControlProperty</span> {: #descriptionCanAnnounceProperty data-toc-label='descriptionCanAnnounceProperty' }

(readonly)

If the value of this Property is false, this Utterance will never be announced by AriaLiveAnnouncer.

#### voicingCanAnnounceProperty : <span style="font-weight: 400;">AnnouncingControlProperty</span> {: #voicingCanAnnounceProperty data-toc-label='voicingCanAnnounceProperty' }

(readonly)

If the value of this Property is false, this Utterance will never be announced by SpeechSynthesisAnnouncer.

#### priorityProperty : <span style="font-weight: 400;">[TProperty](../axon/TProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>&gt;</span> {: #priorityProperty data-toc-label='priorityProperty' }

observable for the priority, can be set to change the priority of this Utterance
while it is still in the UtteranceQueue. See options documentation for behavior of priority.

### Static Methods

#### alertableToText( alertable : <span style="font-weight: 400;">[TAlertable](../utterance-queue/Utterance.md#TAlertable)</span>, respectResponseCollectorProperties ) : <span style="font-weight: 400;">[ResolvedResponse](../utterance-queue/ResponsePacket.md#ResolvedResponse)</span> {: #alertableToText data-toc-label='alertableToText' }

@param alertable
@param respectResponseCollectorProperties=false - if false, then do not listen to the value of responseCollector
                                             for creating the ResponsePacket conglomerate (just combine all that are supplied).

### Static Properties

#### TOP_PRIORITY {: #TOP_PRIORITY data-toc-label='TOP_PRIORITY' }

(readonly)

Priority levels that can be used by Utterances providing the `announcerOptions.priority` option.

#### HIGH_PRIORITY {: #HIGH_PRIORITY data-toc-label='HIGH_PRIORITY' }

(readonly)

#### MEDIUM_PRIORITY {: #MEDIUM_PRIORITY data-toc-label='MEDIUM_PRIORITY' }

(readonly)

#### DEFAULT_PRIORITY {: #DEFAULT_PRIORITY data-toc-label='DEFAULT_PRIORITY' }

(readonly)

#### LOW_PRIORITY {: #LOW_PRIORITY data-toc-label='LOW_PRIORITY' }

(readonly)

#### UtteranceIO : <span style="font-weight: 400;">[IOType](../tandem/IOType.md)</span> {: #UtteranceIO data-toc-label='UtteranceIO' }

(readonly)



## Type FeatureSpecificAnnouncingControlProperty {: #FeatureSpecificAnnouncingControlProperty }


The names of Properties that can be accessed on Utterance that are AnnouncingControlProperties for specific Announcing
features.

```js
import type { FeatureSpecificAnnouncingControlProperty } from 'scenerystack/utterance-queue';
```


"descriptionCanAnnounceProperty" | "voicingCanAnnounceProperty"



## Type TAlertable {: #TAlertable }


```js
import type { TAlertable } from 'scenerystack/utterance-queue';
```


[ResolvedResponse](../utterance-queue/ResponsePacket.md#ResolvedResponse) | ( () =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span> ) | [TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>&gt; | [ResponsePacket](../utterance-queue/ResponsePacket.md) | [Utterance](../utterance-queue/Utterance.md)



## Type UtteranceOptions {: #UtteranceOptions }


```js
import type { UtteranceOptions } from 'scenerystack/utterance-queue';
```


- **alert**?: AlertableNoUtterance
<br>  The content of the alert that this Utterance is wrapping.
- **canAnnounceProperties**?: [TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>&gt;[]
<br>  List of Properties that must all be true in order for the Utterance to be announced by the Announcer. See
  setCanAnnounceProperties() for more information.
- **descriptionCanAnnounceProperties**?: [TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>&gt;[]
<br>  List of Properties that must all be true in order for the Utterance to be announced to the Interactive Description
  feature of PhET Simulations. canAnnounceProperties also apply (and so must all be true) to announce with this
  specific feature.
- **voicingCanAnnounceProperties**?: [TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>&gt;[]
<br>  List of Properties that must all be true in order for the Utterance to be announced to the Voicing
  feature of PhET Simulations. canAnnounceProperties also apply (and so must all be true) to announce with this
  specific feature.
- **predicate**?: () =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
<br>  if predicate returns false, the alert content associated
  with this utterance will not be announced by the utterance-queue. Announcers also optionally have the ability
  to respect this predicate before they finally alert the Utterance. This can be helpful if utterances sit and
  wait in the announcer before being alerted. If the predicate fails there is no retry. The utterance will be
  removed from the queue without announcing.
- **alertStableDelay**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
<br>  in ms, how long to wait before the utterance is considered "stable" and stops being
  added to the queue, at which point it will be spoken. Default value chosen because
  it sounds nice in most usages of Utterance with alertStableDelay. If you want to hear the utterance as fast
  as possible, reduce this delay to 0. See https://github.com/phetsims/scenery-phet/issues/491
- **alertMaximumDelay**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
<br>  in ms, the maximum amount of time that should
  pass before this alert should be spoken, even if the utterance is rapidly added to the queue
  and is not quite "stable"
- **announcerOptions**?: Record&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>, <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">unknown</span>&gt;
<br>  Options specific to the Announcer of the Utterance. See supported options in your specific Announcer's
  announce() function (for example AriaLiveAnnouncer.announce())
- **priority**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
<br>  {number} - Used to determine which utterance might interrupt another utterance. Please only use priority statics
  on Utterance when setting this value like Utterance.MEDIUM_PRIORITY.
  Any utterance (1) with a higher priority than another utterance (2) will behave as such:
  - (1) will interrupt (2) when (2) is currently being spoken, and (1) is announced by the voicingManager. In this
        case, (2) is interrupted, and never finished.
  - (1) will continue speaking if (1) was speaking, and (2) is added to the UtteranceQueue. In this case (2)
        will be spoken when (1) is done. In this case (2) will remain in the queue while waiting for (1) to finish.
- &amp; [DisposableOptions](../axon/Disposable.md#DisposableOptions)




## Source Code

See the source for [Utterance.ts](https://github.com/phetsims/utterance-queue/blob/main/js/Utterance.ts) in the [utterance-queue](https://github.com/phetsims/utterance-queue) repository.
