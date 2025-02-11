# OffScaleIndicatorNode

## Overview

An indicator that shows when something is off scale - usually in the context of a plot.

@author Jesse Greenberg (PhET Interactive Simulations)

## Class OffScaleIndicatorNode {: #OffScaleIndicatorNode }


```js
import { OffScaleIndicatorNode } from 'scenerystack/scenery-phet';
```
### Constructor

#### new OffScaleIndicatorNode( direction : <span style="font-weight: 400;">'left' | 'right' | 'up' | 'down'</span>, providedOptions? : <span style="font-weight: 400;">[OffScaleIndicatorNodeOptions](../scenery-phet/OffScaleIndicatorNode.md#OffScaleIndicatorNodeOptions)</span> ) {: #OffScaleIndicatorNode-constructor data-toc-label='new OffScaleIndicatorNode' }

### Instance Methods

#### dispose() {: #dispose data-toc-label='dispose' }



## Type OffScaleIndicatorNodeOptions {: #OffScaleIndicatorNodeOptions }


```js
import type { OffScaleIndicatorNodeOptions } from 'scenerystack/scenery-phet';
```


- **offScaleStringProperty**?: [TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>&gt;
<br>  The label string for the off scale indicator.
- **arrowTailLength**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
<br>  The length of the arrow icon tail.
- **spacing**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
<br>  Spacing between the label text and the icon arrow.
- **arrowNodeOptions**?: [ArrowNodeOptions](../scenery-phet/ArrowNode.md#ArrowNodeOptions)
<br>  Options forwarded to the ArrowNode.
- **richTextOptions**?: [RichTextOptions](../scenery/RichText.md#RichTextOptions)
<br>  Options forwarded to the RichText label.
- **panelOptions**?: [PanelOptions](../sun/Panel.md#PanelOptions)
<br>  Options forwarded to the Panel.
- &amp; [ReadingBlockOptions](../scenery/ReadingBlock.md#ReadingBlockOptions) &amp; [StrictOmit](../phet-core/StrictOmit.md)&lt;[TrimParallelDOMOptions](../scenery/ParallelDOM.md#TrimParallelDOMOptions)&lt;[NodeOptions](../scenery/Node.md#NodeOptions)&gt;, "accessibleName" | "helpText"&gt;




## Source Code

See the source for [OffScaleIndicatorNode.ts](https://github.com/phetsims/scenery-phet/blob/main/js/OffScaleIndicatorNode.ts) in the [scenery-phet](https://github.com/phetsims/scenery-phet) repository.
