# SpeechSynthesisAnnouncer

## Overview

Uses the Web Speech API to produce speech from the browser. There is no speech output until the SpeechSynthesisAnnouncer has
been initialized. Supported voices will depend on platform. For each voice, you can customize the rate and pitch.

Only one SpeechSynthesisAnnouncer can be used at a time. This class uses a global instance of self.speechSynthesis
and assumes it has full control over it. This is not a singleton because subclasses may extend this for specific
uses. For example, PhET has one subclass specific to its Voicing feature and another specific to
custom speech synthesis in number-suite-common sims.

A note about PhET-iO instrumentation:
Properties are instrumented for PhET-iO to provide a record of learners that may have used this feature (and how). All
Properties should be phetioState:false so the values are not overwritten when a customized state is loaded.
Properties are not phetioReadonly so that clients can overwrite the values using the PhET-iO API and studio.

@author Jesse Greenberg

## Class SpeechSynthesisAnnouncer {: #SpeechSynthesisAnnouncer }


```js
import { SpeechSynthesisAnnouncer } from 'scenerystack/utterance-queue';
```
### Constructor

#### new SpeechSynthesisAnnouncer( providedOptions? : <span style="font-weight: 400;">[SpeechSynthesisAnnouncerOptions](../utterance-queue/SpeechSynthesisAnnouncer.md#SpeechSynthesisAnnouncerOptions)</span> ) {: #SpeechSynthesisAnnouncer-constructor data-toc-label='new SpeechSynthesisAnnouncer' }

### Instance Methods

#### initialize( userGestureEmitter : <span style="font-weight: 400;">[TReadOnlyEmitter](../axon/TEmitter.md#TReadOnlyEmitter)</span>, providedOptions? : <span style="font-weight: 400;">[SpeechSynthesisInitializeOptions](../utterance-queue/SpeechSynthesisAnnouncer.md#SpeechSynthesisInitializeOptions)</span> ) {: #initialize data-toc-label='initialize' }

Indicate that the SpeechSynthesisAnnouncer is ready for use, and attempt to populate voices (if they are ready yet). Adds
listeners that control speech.

@param userGestureEmitter - Emits when user input happens, which is required before the browser is
                                      allowed to use SpeechSynthesis for the first time.
@param [providedOptions]

#### getPrioritizedVoices() : <span style="font-weight: 400;">SpeechSynthesisVoice[]</span> {: #getPrioritizedVoices data-toc-label='getPrioritizedVoices' }

Returns an array of SpeechSynthesisVoices that are sorted such that the best sounding voices come first.
As of 9/27/21, we find that the "Google" voices sound best while Apple's "Fred" sounds the worst so the list
will be ordered to reflect that. This way "Google" voices will be selected by default when available and "Fred"
will almost never be the default Voice since it is last in the list. See
https://github.com/phetsims/scenery/issues/1282/ for discussion and this decision.

#### getEnglishPrioritizedVoices() : <span style="font-weight: 400;">SpeechSynthesisVoice[]</span> {: #getEnglishPrioritizedVoices data-toc-label='getEnglishPrioritizedVoices' }

Voicing as a feature is not translatable. This function gets the "prioritized" voices (as decided by PhET) and
prunes out the non-english ones. This does not use this.getPrioritizedVoicesForLocale because the required Locale
type doesn't include 'en-US' or 'en_US' as valid values, just 'en'.

#### getPrioritizedVoicesForLocale( locale : <span style="font-weight: 400;">[Locale](../joist/localeProperty.md#Locale)</span> ) : <span style="font-weight: 400;">SpeechSynthesisVoice[]</span> {: #getPrioritizedVoicesForLocale data-toc-label='getPrioritizedVoicesForLocale' }

Voicing as a feature is not translatable, but some SpeechSynthesisAnnouncer usages outside of voicing are. This
function gets the "prioritized" voices (as decided by PhET) and
prunes out everything that is not the "provided" locale. The algorithm for mapping locale is as follows:

locale: 'en' - Provided locale parameter
voice: 'en_GB' - YES matches!
voice: 'en' - YES

locale: 'en_GB'
voice: 'en' - NO
voice: 'en_GB' - YES
voice: 'en-GB' - YES
voice: 'en-US' - NO

locale: 'zh_CN'
voice: 'zh' - NO
voice: 'zh_CN' - YES

locale: 'zh'
voice: 'zh' - YES
voice: 'zh_CN' - YES
voice: 'zh-TW' - YES

locale: 'es_ES'
voice: 'es_MX' - NO
voice: 'es' - NO
voice: 'es-ES' - YES

#### announce( announceText : <span style="font-weight: 400;">[ResolvedResponse](../utterance-queue/ResponsePacket.md#ResolvedResponse)</span>, utterance : <span style="font-weight: 400;">[Utterance](../utterance-queue/Utterance.md)</span> ) {: #announce data-toc-label='announce' }

Implements announce so the SpeechSynthesisAnnouncer can be a source of output for utteranceQueue.

#### speakIgnoringEnabled( utterance : <span style="font-weight: 400;">[Utterance](../utterance-queue/Utterance.md)</span> ) {: #speakIgnoringEnabled data-toc-label='speakIgnoringEnabled' }

Use speech synthesis to speak an utterance. No-op unless SpeechSynthesisAnnouncer is initialized and other output
controlling Properties are true (see speechAllowedProperty in initialize()). This explicitly ignores
this.enabledProperty, allowing speech even when SpeechSynthesisAnnouncer is disabled. This is useful in rare cases, for
example when the SpeechSynthesisAnnouncer recently becomes disabled by the user and we need to announce confirmation of
that decision ("Voicing off" or "All audio off").

NOTE: This will interrupt any currently speaking utterance.

#### cancel() {: #cancel data-toc-label='cancel' }

Stops any Utterance that is currently being announced or is (about to be announced).
(utterance-queue internal)

#### cancelUtterance( utterance : <span style="font-weight: 400;">[Utterance](../utterance-queue/Utterance.md)</span> ) {: #cancelUtterance data-toc-label='cancelUtterance' }

Cancel the provided Utterance, if it is currently being spoken by this Announcer. Does not cancel
any other utterances that may be in the UtteranceQueue.
(utterance-queue internal)

#### shouldUtteranceCancelOther( utterance : <span style="font-weight: 400;">[Utterance](../utterance-queue/Utterance.md)</span>, utteranceToCancel : <span style="font-weight: 400;">[Utterance](../utterance-queue/Utterance.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #shouldUtteranceCancelOther data-toc-label='shouldUtteranceCancelOther' }

Given one utterance, should it cancel another provided utterance?

#### onUtterancePriorityChange( nextAvailableUtterance : <span style="font-weight: 400;">[Utterance](../utterance-queue/Utterance.md)</span> ) {: #onUtterancePriorityChange data-toc-label='onUtterancePriorityChange' }

When the priority for a new utterance changes or if a new utterance is added to the queue, determine whether
we should cancel the synth immediately.

### Instance Properties

#### voiceProperty : <span style="font-weight: 400;">[Property](../axon/Property.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span> | SpeechSynthesisVoice&gt;</span> {: #voiceProperty data-toc-label='voiceProperty' }

(readonly)

#### voiceRateProperty : <span style="font-weight: 400;">[NumberProperty](../axon/NumberProperty.md)</span> {: #voiceRateProperty data-toc-label='voiceRateProperty' }

(readonly)

controls the speaking rate of Web Speech

#### voicePitchProperty : <span style="font-weight: 400;">[NumberProperty](../axon/NumberProperty.md)</span> {: #voicePitchProperty data-toc-label='voicePitchProperty' }

(readonly)

controls the pitch of the synth

#### startSpeakingEmitter : <span style="font-weight: 400;">[TEmitter](../axon/TEmitter.md)&lt;[ [ResolvedResponse](../utterance-queue/ResponsePacket.md#ResolvedResponse), [Utterance](../utterance-queue/Utterance.md) ]&gt;</span> {: #startSpeakingEmitter data-toc-label='startSpeakingEmitter' }

(readonly)

emits events when the speaker starts/stops speaking, with the Utterance that is
either starting or stopping

#### endSpeakingEmitter : <span style="font-weight: 400;">[TEmitter](../axon/TEmitter.md)&lt;[ [ResolvedResponse](../utterance-queue/ResponsePacket.md#ResolvedResponse), [Utterance](../utterance-queue/Utterance.md) ]&gt;</span> {: #endSpeakingEmitter data-toc-label='endSpeakingEmitter' }

(readonly)

#### enabledProperty : <span style="font-weight: 400;">[TProperty](../axon/TProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>&gt;</span> {: #enabledProperty data-toc-label='enabledProperty' }

(readonly)

#### mainWindowVoicingEnabledProperty : <span style="font-weight: 400;">[Property](../axon/Property.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>&gt;</span> {: #mainWindowVoicingEnabledProperty data-toc-label='mainWindowVoicingEnabledProperty' }

(readonly)

Controls whether Voicing is enabled in a "main window" area of the application.
This supports the ability to disable Voicing for the important screen content of your application while keeping
Voicing for surrounding UI components enabled (for example).

#### voicingFullyEnabledProperty : <span style="font-weight: 400;">[TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>&gt;</span> {: #voicingFullyEnabledProperty data-toc-label='voicingFullyEnabledProperty' }

Property that indicates that the Voicing feature is enabled for all areas of the application.

#### speechAllowedAndFullyEnabledProperty : <span style="font-weight: 400;">[TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>&gt;</span> {: #speechAllowedAndFullyEnabledProperty data-toc-label='speechAllowedAndFullyEnabledProperty' }

(readonly)

Indicates whether speech is fully enabled AND speech is allowed, as specified
by the Property provided in initialize(). See speechAllowedProperty of initialize(). In order for this Property
to be true, speechAllowedProperty, enabledProperty, and mainWindowVoicingEnabledProperty must all be true.
Initialized in the constructor because we don't have access to all the dependency Properties until initialize.
These two variable keep a public, readonly interface. We cannot use a DerivedProperty because it needs to be
listened to before its dependencies are created, see https://github.com/phetsims/utterance-queue/issues/72

#### voicesProperty : <span style="font-weight: 400;">[TProperty](../axon/TProperty.md)&lt;SpeechSynthesisVoice[]&gt;</span> {: #voicesProperty data-toc-label='voicesProperty' }

possible voices for Web Speech synthesis

#### isInitializedProperty : <span style="font-weight: 400;">[TProperty](../axon/TProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>&gt;</span> {: #isInitializedProperty data-toc-label='isInitializedProperty' }

is the VoicingManager initialized for use? This is prototypal so it isn't always initialized

### Static Methods

#### isSpeechSynthesisSupported() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #isSpeechSynthesisSupported data-toc-label='isSpeechSynthesisSupported' }

Returns true if SpeechSynthesis is available on the self. This check is sufficient for all of
SpeechSynthesisAnnouncer. On platforms where speechSynthesis is available, all features of it are available, except for the
onvoiceschanged event in a couple of platforms. However, the listener can still be set
without issue on those platforms so we don't need to check for its existence. On those platforms, voices
are provided right on load.



## Type SpeechSynthesisAnnouncerOptions {: #SpeechSynthesisAnnouncerOptions }


```js
import type { SpeechSynthesisAnnouncerOptions } from 'scenerystack/utterance-queue';
```


- **debug**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
<br>  Switch to true to enable debugging features (like logging)
- &amp; [AnnouncerOptions](../utterance-queue/Announcer.md#AnnouncerOptions)




## Type SpeechSynthesisInitializeOptions {: #SpeechSynthesisInitializeOptions }


Options to the initialize function

```js
import type { SpeechSynthesisInitializeOptions } from 'scenerystack/utterance-queue';
```


- **speechAllowedProperty**?: [TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>&gt;




## Source Code

See the source for [SpeechSynthesisAnnouncer.ts](https://github.com/phetsims/utterance-queue/blob/main/js/SpeechSynthesisAnnouncer.ts) in the [utterance-queue](https://github.com/phetsims/utterance-queue) repository.
