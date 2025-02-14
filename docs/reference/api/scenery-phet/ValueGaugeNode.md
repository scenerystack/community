# ValueGaugeNode

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/scenery-phet/blob/main/js/ValueGaugeNode.ts](https://github.com/phetsims/scenery-phet/blob/main/js/ValueGaugeNode.ts) for the most up-to-date information.

## Overview

A GaugeNode with a NumberDisplay located in the center bottom half of the GaugeNode to
display the numerical value. The NumberDisplay can be hidden but is visible by default.

@author Jesse Greenberg

## Class ValueGaugeNode {: #ValueGaugeNode }


```js
import { ValueGaugeNode } from 'scenerystack/scenery-phet';
```
### Constructor

#### new ValueGaugeNode( valueProperty : <span style="font-weight: 400;">[TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>&gt;</span>, label : <span style="font-weight: 400;">[TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>&gt;</span>, range : <span style="font-weight: 400;">[Range](../dot/Range.md)</span>, providedOptions? : <span style="font-weight: 400;">[ValueGaugeNodeOptions](../scenery-phet/ValueGaugeNode.md#ValueGaugeNodeOptions)</span> ) {: #ValueGaugeNode-constructor data-toc-label='new ValueGaugeNode' }

### Instance Methods

#### setNumberDisplayVisible( visible : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> ) {: #setNumberDisplayVisible data-toc-label='setNumberDisplayVisible' }

Sets the visibility of the gauge's NumberDisplay.

#### getNumberDisplayVisible() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #getNumberDisplayVisible data-toc-label='getNumberDisplayVisible' }

Gets the visibility of the gauge's NumberDisplay.

#### dispose() {: #dispose data-toc-label='dispose' }



## Type ValueGaugeNodeOptions {: #ValueGaugeNodeOptions }


```js
import type { ValueGaugeNodeOptions } from 'scenerystack/scenery-phet';
```


- **numberDisplayOptions**?: [NumberDisplayOptions](../scenery-phet/NumberDisplay.md#NumberDisplayOptions)
<br>  options passed to the NumberDisplay
- &amp; [GaugeNodeOptions](../scenery-phet/GaugeNode.md#GaugeNodeOptions)




## Source Code

See the source for [ValueGaugeNode.ts](https://github.com/phetsims/scenery-phet/blob/main/js/ValueGaugeNode.ts) in the [scenery-phet](https://github.com/phetsims/scenery-phet) repository.
