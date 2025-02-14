# RulerNode

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/scenery-phet/blob/main/js/RulerNode.ts](https://github.com/phetsims/scenery-phet/blob/main/js/RulerNode.ts) for the most up-to-date information.

## Overview

RulerNode is the visual representation of a ruler.

@author Chris Malley (PixelZoom, Inc.)

## Class RulerNode {: #RulerNode }


```js
import { RulerNode } from 'scenerystack/scenery-phet';
```
### Constructor

#### new RulerNode( rulerWidth : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, rulerHeight : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, majorTickWidth : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, majorTickLabels : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>[]</span>, units : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span> | [TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>&gt;</span>, providedOptions? : <span style="font-weight: 400;">[RulerNodeOptions](../scenery-phet/RulerNode.md#RulerNodeOptions)</span> ) {: #RulerNode-constructor data-toc-label='new RulerNode' }

### Instance Methods

#### dispose() {: #dispose data-toc-label='dispose' }

### Static Properties

#### DEFAULT_FILL {: #DEFAULT_FILL data-toc-label='DEFAULT_FILL' }

(readonly)



## Type RulerNodeOptions {: #RulerNodeOptions }


```js
import type { RulerNodeOptions } from 'scenerystack/scenery-phet';
```


- **backgroundFill**?: [TColor](../scenery/TColor.md)
<br>  body of the ruler
- **backgroundStroke**?: [TColor](../scenery/TColor.md)
- **backgroundLineWidth**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **insetsWidth**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **majorTickFont**?: [Font](../scenery/Font.md)
<br>  major tick options
- **majorTickHeight**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **majorTickStroke**?: [TColor](../scenery/TColor.md)
- **majorTickLineWidth**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **minorTickFont**?: [Font](../scenery/Font.md)
<br>  minor tick options
- **minorTickHeight**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **minorTickStroke**?: [TColor](../scenery/TColor.md)
- **minorTickLineWidth**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **minorTicksPerMajorTick**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **unitsFont**?: [Font](../scenery/Font.md)
<br>  units options
- **unitsMajorTickIndex**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **unitsSpacing**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **tickMarksOnTop**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
<br>  appearance options
- **tickMarksOnBottom**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
- &amp; [NodeOptions](../scenery/Node.md#NodeOptions)




## Source Code

See the source for [RulerNode.ts](https://github.com/phetsims/scenery-phet/blob/main/js/RulerNode.ts) in the [scenery-phet](https://github.com/phetsims/scenery-phet) repository.
