# SpanNode

## Overview

SpanNode shows a double-headed arrow pointing to parallel bars, and a text label. It is shown under a chart to
indicate the distance between gridlines.

@author Sam Reid (PhET Interactive Simulations)

## Class SpanNode {: #SpanNode }


```js
import { SpanNode } from 'scenerystack/bamboo';
```
### Constructor

#### new SpanNode( chartTransform : <span style="font-weight: 400;">[ChartTransform](../bamboo/ChartTransform.md)</span>, axisOrientation : <span style="font-weight: 400;">[Orientation](../phet-core/Orientation.md)</span>, delta : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, labelNode : <span style="font-weight: 400;">[Node](../scenery/Node.md)</span>, providedOptions? : <span style="font-weight: 400;">[SpanNodeOptions](../bamboo/SpanNode.md#SpanNodeOptions)</span> ) {: #SpanNode-constructor data-toc-label='new SpanNode' }

### Instance Methods

#### setDelta( delta : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) {: #setDelta data-toc-label='setDelta' }

Sets delta and updates.
@param delta - in model coordinates

#### dispose() {: #dispose data-toc-label='dispose' }



## Type SpanNodeOptions {: #SpanNodeOptions }


```js
import type { SpanNodeOptions } from 'scenerystack/bamboo';
```


- **color**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span> | [Color](../scenery/Color.md)
- **outerLineLength**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **arrowNodeOptions**?: [StrictOmit](../phet-core/StrictOmit.md)&lt;[ArrowNodeOptions](../scenery-phet/ArrowNode.md#ArrowNodeOptions), "stroke"&gt;
- &amp; [StrictOmit](../phet-core/StrictOmit.md)&lt;[FlowBoxOptions](../scenery/FlowBox.md#FlowBoxOptions), "children" | "orientation"&gt;




## Source Code

See the source for [SpanNode.ts](https://github.com/phetsims/bamboo/blob/main/js/SpanNode.ts) in the [bamboo](https://github.com/phetsims/bamboo) repository.
