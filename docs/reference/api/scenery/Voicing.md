# Voicing

## Overview

A trait for Node that supports the Voicing feature, under accessibility. Allows you to define responses for the Node
and make requests to speak that content using HTML5 SpeechSynthesis and the UtteranceQueue. Voicing content is
organized into four categories which are responsible for describing different things. Responses are stored on the
composed type: "ResponsePacket." See that file for details about what responses it stores. Output of this content
can be controlled by the responseCollector. Responses are defined as the following. . .

- "Name" response: The name of the object that uses Voicing. Similar to the "Accessible Name" in web accessibility.
- "Object" response: The state information about the object that uses Voicing.
- "Context" response: The contextual changes that result from interaction with the Node that uses Voicing.
- "Hint" response: A supporting hint that guides the user toward a desired interaction with this Node.

See ResponsePacket, as well as the property and setter documentation for each of these responses for more
information.

Once this content is set, you can make a request to speak it using an UtteranceQueue with one of the provided
functions in this Trait. It is up to you to call one of these functions when you wish for speech to be made. The only
exception is on the 'focus' event. Every Node that composes Voicing will speak its responses by when it
receives focus.

@author Jesse Greenberg (PhET Interactive Simulations)
@author Michael Kauzmann (PhET Interactive Simulations)

## Type SpeakingOptions {: #SpeakingOptions }


```js
import type { SpeakingOptions } from 'scenerystack/scenery';
```
- **utterance**?: SelfOptions['voicingUtterance']
- &amp; SpeakableResolvedOptions




## Type VoicingNode {: #VoicingNode }


```js
import type { VoicingNode } from 'scenerystack/scenery';
```
[Node](../scenery/Node.md) &amp; [TVoicing](../scenery/Voicing.md#TVoicing)



## Type VoicingOptions {: #VoicingOptions }


```js
import type { VoicingOptions } from 'scenerystack/scenery';
```
- **voicingNameResponse**?: VoicingResponse
- **voicingObjectResponse**?: VoicingResponse
- **voicingContextResponse**?: VoicingResponse
- **voicingHintResponse**?: VoicingResponse
- **voicingResponsePatternCollection**?: ResponsePatternCollection
- **voicingIgnoreVoicingManagerProperties**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
- **voicingFocusListener**?: [SceneryListenerFunction](../scenery/TInputListener.md#SceneryListenerFunction)&lt;FocusEvent&gt; | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
- **voicingUtterance**?: Utterance | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
- &amp; [InteractiveHighlightingOptions](../scenery/InteractiveHighlighting.md#InteractiveHighlightingOptions)




## Source Code

See the source for [Voicing.ts](https://github.com/phetsims/scenery/blob/main/js/accessibility/voicing/Voicing.ts) in the [scenery](https://github.com/phetsims/scenery) repository.
