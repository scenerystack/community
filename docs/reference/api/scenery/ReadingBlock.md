# ReadingBlock

## Overview

A trait that extends Voicing, adding support for "Reading Blocks" of the voicing feature. "Reading Blocks" are
UI components in the application that have unique functionality with respect to Voicing.

 - Reading Blocks are generally around graphical objects that are not otherwise interactive (like Text).
 - They have a unique focus highlight to indicate they can be clicked on to hear voiced content.
 - When activated with press or click readingBlockNameResponse is spoken.
 - ReadingBlock content is always spoken if the voicingManager is enabled, ignoring Properties of responseCollector.
 - While speaking, a yellow highlight will appear over the Node composed with ReadingBlock.
 - While voicing is enabled, reading blocks will be added to the focus order.

This trait is to be composed with Nodes and assumes that the Node is composed with ParallelDOM.  It uses Node to
support mouse/touch input and ParallelDOM to support being added to the focus order and alternative input.

@author Jesse Greenberg (PhET Interactive Simulations)

## Type ReadingBlockNode {: #ReadingBlockNode }


Export a type that lets you check if your Node is composed with ReadingBlock

```js
import type { ReadingBlockNode } from 'scenerystack/scenery';
```


[Node](../scenery/Node.md) &amp; [TReadingBlock](../scenery/ReadingBlock.md#TReadingBlock)



## Type ReadingBlockOptions {: #ReadingBlockOptions }


```js
import type { ReadingBlockOptions } from 'scenerystack/scenery';
```


- **readingBlockTagName**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
- **readingBlockDisabledTagName**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
- **readingBlockNameResponse**?: [VoicingResponse](../utterance-queue/ResponsePacket.md#VoicingResponse)
- **readingBlockHintResponse**?: [VoicingResponse](../utterance-queue/ResponsePacket.md#VoicingResponse)
- **readingBlockResponsePatternCollection**?: [ResponsePatternCollection](../utterance-queue/ResponsePatternCollection.md)
- **readingBlockActiveHighlight**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span> | [Shape](../kite/Shape.md) | [Node](../scenery/Node.md)
- &amp; [StrictOmit](../phet-core/StrictOmit.md)&lt;[VoicingOptions](../scenery/Voicing.md#VoicingOptions), UnsupportedVoicingOptions&gt;




## Type TReadingBlock {: #TReadingBlock }


```js
import type { TReadingBlock } from 'scenerystack/scenery';
```


- **readingBlockActiveHighlightChangedEmitter**: [TEmitter](../axon/TEmitter.md)
- **readingBlockTagName**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
- **readingBlockDisabledTagName**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
- **readingBlockResponsePatternCollection**: [ResponsePatternCollection](../utterance-queue/ResponsePatternCollection.md)
- **readingBlockActiveHighlight**: [Highlight](../scenery/Highlight.md)
- &amp; [TVoicing](../scenery/Voicing.md#TVoicing)&lt;SuperType&gt;




## Source Code

See the source for [ReadingBlock.ts](https://github.com/phetsims/scenery/blob/main/js/accessibility/voicing/ReadingBlock.ts) in the [scenery](https://github.com/phetsims/scenery) repository.
