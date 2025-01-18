# LineArrowNode

## Overview

An arrow that is composed of 3 line segments: one for the tail, and 2 for a V-shaped head

@author Chris Malley (PixelZoom, Inc.)

## Class LineArrowNode {: #LineArrowNode }


```js
import { LineArrowNode } from 'scenerystack/scenery-phet';
```
### Constructor

#### new LineArrowNode( tailX : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, tailY : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, tipX : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, tipY : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, providedOptions? : <span style="font-weight: 400;">[LineArrowNodeOptions](../scenery-phet/LineArrowNode.md#LineArrowNodeOptions)</span> ) {: #LineArrowNode-constructor data-toc-label='new LineArrowNode' }

### Instance Methods

#### setTailAndTip( tailX : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, tailY : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, tipX : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, tipY : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) {: #setTailAndTip data-toc-label='setTailAndTip' }

Set the tail and tip positions to update the arrow shape.



## Type LineArrowNodeOptions {: #LineArrowNodeOptions }


```js
import type { LineArrowNodeOptions } from 'scenerystack/scenery-phet';
```


- **stroke**?: [TColor](../scenery/TColor.md)
<br>  head &amp; tail
- **lineJoin**?: [LineJoin](../kite/LineStyles.md#LineJoin)
- **lineCap**?: [LineCap](../kite/LineStyles.md#LineCap)
- **headHeight**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
<br>  head
- **headWidth**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **headLineWidth**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **tailLineWidth**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
<br>  tail
- **tailLineDash**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>[]
- &amp; [StrictOmit](../phet-core/StrictOmit.md)&lt;[NodeOptions](../scenery/Node.md#NodeOptions), "children"&gt;




## Source Code

See the source for [LineArrowNode.ts](https://github.com/phetsims/scenery-phet/blob/main/js/LineArrowNode.ts) in the [scenery-phet](https://github.com/phetsims/scenery-phet) repository.
