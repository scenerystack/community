# VoicingRichText

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/scenery/blob/main/js/accessibility/voicing/nodes/VoicingRichText.ts](https://github.com/phetsims/scenery/blob/main/js/accessibility/voicing/nodes/VoicingRichText.ts) for the most up-to-date information.

## Overview

RichText that composes ReadingBlock, adding support for Voicing and input listeners that speak content upon
user activation.

Example usage:
  const voicingRichText = new VoicingRichText( 'Hello, world!' );

Example usage:
  const voicingRichText = new VoicingRichText( 'Hello, world!', {
    accessibleParagraph: 'Custom Voicing Text'
  } );

@author Jesse Greenberg (PhET Interactive Simulations)

## Class VoicingRichText {: #VoicingRichText }


```js
import { VoicingRichText } from 'scenerystack/scenery';
```
### Constructor

#### new VoicingRichText( text : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span> | [TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>&gt;</span>, providedOptions? : <span style="font-weight: 400;">[VoicingRichTextOptions](../scenery/VoicingRichText.md#VoicingRichTextOptions)</span> ) {: #VoicingRichText-constructor data-toc-label='new VoicingRichText' }

### Instance Methods





## Type VoicingRichTextOptions {: #VoicingRichTextOptions }


```js
import type { VoicingRichTextOptions } from 'scenerystack/scenery';
```


[ReadingBlockOptions](../scenery/ReadingBlock.md#ReadingBlockOptions) &amp; [StrictOmit](../phet-core/StrictOmit.md)&lt;[RichTextOptions](../scenery/RichText.md#RichTextOptions), "focusHighlight" | "innerContent"&gt;



## Source Code

See the source for [VoicingRichText.ts](https://github.com/phetsims/scenery/blob/main/js/accessibility/voicing/nodes/VoicingRichText.ts) in the [scenery](https://github.com/phetsims/scenery) repository.
