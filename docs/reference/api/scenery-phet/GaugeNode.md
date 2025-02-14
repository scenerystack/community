# GaugeNode

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/scenery-phet/blob/main/js/GaugeNode.ts](https://github.com/phetsims/scenery-phet/blob/main/js/GaugeNode.ts) for the most up-to-date information.

## Overview

GaugeNode is a circular gauge that depicts some dynamic value.
This was originally ported from the speedometer node in forces-and-motion-basics.

@author Sam Reid (PhET Interactive Simulations)
@author John Blanco (PhET Interactive Simulations)

## Class GaugeNode {: #GaugeNode }


```js
import { GaugeNode } from 'scenerystack/scenery-phet';
```
### Constructor

#### new GaugeNode( valueProperty : <span style="font-weight: 400;">[TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>&gt;</span>, labelProperty : <span style="font-weight: 400;">[TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>&gt;</span>, range : <span style="font-weight: 400;">[Range](../dot/Range.md)</span>, providedOptions? : <span style="font-weight: 400;">[GaugeNodeOptions](../scenery-phet/GaugeNode.md#GaugeNodeOptions)</span> ) {: #GaugeNode-constructor data-toc-label='new GaugeNode' }

### Instance Methods

#### dispose() {: #dispose data-toc-label='dispose' }

### Instance Properties

#### radius : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #radius data-toc-label='radius' }

(readonly)



## Type GaugeNodeOptions {: #GaugeNodeOptions }


```js
import type { GaugeNodeOptions } from 'scenerystack/scenery-phet';
```


- **radius**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **backgroundFill**?: [TColor](../scenery/TColor.md)
- **backgroundStroke**?: [TColor](../scenery/TColor.md)
- **backgroundLineWidth**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **maxLabelWidthScale**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **numberOfTicks**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
<br>  ticks
- **majorTickStroke**?: [TColor](../scenery/TColor.md)
- **minorTickStroke**?: [TColor](../scenery/TColor.md)
- **majorTickLength**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **minorTickLength**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **majorTickLineWidth**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **minorTickLineWidth**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **labelTextOptions**?: GaugeNodeLabelTextOptions
<br>  label text
- **span**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
<br>  the top half of the gauge, plus PI/8 extended below the top half on each side
- **needleLineWidth**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **updateWhenInvisible**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
<br>  true - always updates, even when invisible
  false - does not update when invisible, use to optimize performance
- &amp; [NodeOptions](../scenery/Node.md#NodeOptions)




## Source Code

See the source for [GaugeNode.ts](https://github.com/phetsims/scenery-phet/blob/main/js/GaugeNode.ts) in the [scenery-phet](https://github.com/phetsims/scenery-phet) repository.
