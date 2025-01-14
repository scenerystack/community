# ArrowNode

## Overview

A single- or double-headed arrow. This is a convenience class, most of the work is done in ArrowShape.

@author John Blanco
@author Chris Malley (PixelZoom, Inc.)
@author Aaron Davis
@author Sam Reid (PhET Interactive Simulations)

## Class ArrowNode {: #ArrowNode }


```js
import { ArrowNode } from 'scenerystack/scenery-phet';
```
### Constructor

#### new ArrowNode( tailX : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, tailY : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, tipX : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, tipY : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, providedOptions? : <span style="font-weight: 400;">[ArrowNodeOptions](../scenery-phet/ArrowNode.md#ArrowNodeOptions)</span> ) {: #ArrowNode-constructor data-toc-label='new ArrowNode' }

### Instance Methods

#### setTailAndTip( tailX : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, tailY : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, tipX : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, tipY : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) {: #setTailAndTip data-toc-label='setTailAndTip' }

Sets the tail and tip positions to update the arrow shape.
If the tail and tip are at the same point, the arrow is not shown.

#### setTail( tailX : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, tailY : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) {: #setTail data-toc-label='setTail' }

Sets the tail position.

#### setTip( tipX : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, tipY : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) {: #setTip data-toc-label='setTip' }

Sets the tip position.

#### setTailWidth( tailWidth : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) {: #setTailWidth data-toc-label='setTailWidth' }

Sets the tail width.

#### setDoubleHead( doubleHead : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> ) {: #setDoubleHead data-toc-label='setDoubleHead' }

Sets whether the arrow has one or two heads.



## Type ArrowNodeOptions {: #ArrowNodeOptions }


```js
import type { ArrowNodeOptions } from 'scenerystack/scenery-phet';
```


- **headHeight**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **headWidth**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **tailWidth**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **isHeadDynamic**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
- **scaleTailToo**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
- **fractionalHeadHeight**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **doubleHead**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
- &amp; [PathOptions](../scenery/Path.md#PathOptions)




## Source Code

See the source for [ArrowNode.ts](https://github.com/phetsims/scenery-phet/blob/main/js/ArrowNode.ts) in the [scenery-phet](https://github.com/phetsims/scenery-phet) repository.
