# VoicingText

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/scenery/blob/main/js/accessibility/voicing/nodes/VoicingText.ts](https://github.com/phetsims/scenery/blob/main/js/accessibility/voicing/nodes/VoicingText.ts) for the most up-to-date information.

## Overview

Text that mixes ReadingBlock, supporting features of Voicing and adding listeners that speak the text string
upon user input.

Example usage:
  const voicingText = new VoicingText( 'Hello, world!' );

Example usage:
  const voicingText = new VoicingText( 'Hello, world!', {
    accessibleParagraph: 'Custom Voicing Text'
  } );

@author Jesse Greenberg (PhET Interactive Simulations)

## Class VoicingText {: #VoicingText }


```js
import { VoicingText } from 'scenerystack/scenery';
```
### Constructor

#### new VoicingText( text : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span> | [TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>&gt;</span>, providedOptions? : <span style="font-weight: 400;">[VoicingTextOptions](../scenery/VoicingText.md#VoicingTextOptions)</span> ) {: #VoicingText-constructor data-toc-label='new VoicingText' }

### Instance Methods





## Type VoicingTextOptions {: #VoicingTextOptions }


```js
import type { VoicingTextOptions } from 'scenerystack/scenery';
```


[ReadingBlockOptions](../scenery/ReadingBlock.md#ReadingBlockOptions) &amp; [StrictOmit](../phet-core/StrictOmit.md)&lt;[TextOptions](../scenery/Text.md#TextOptions), "innerContent" | "focusHighlight"&gt;



## Source Code

See the source for [VoicingText.ts](https://github.com/phetsims/scenery/blob/main/js/accessibility/voicing/nodes/VoicingText.ts) in the [scenery](https://github.com/phetsims/scenery) repository.
