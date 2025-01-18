# SpectrumNode

## Overview

SpectrumNode displays a color spectrum for a range of values. By default, it maps values in the range [0,1] to
the grayscale spectrum. The client can provide a different range, and different method of mapping value to color.

@author Chris Malley (PixelZoom, Inc.)
@author Sam Reid (PhET Interactive Simulations)

## Class SpectrumNode {: #SpectrumNode }


```js
import { SpectrumNode } from 'scenerystack/scenery-phet';
```
### Constructor

#### new SpectrumNode( providedOptions? : <span style="font-weight: 400;">[SpectrumNodeOptions](../scenery-phet/SpectrumNode.md#SpectrumNodeOptions)</span> ) {: #SpectrumNode-constructor data-toc-label='new SpectrumNode' }

### Instance Methods



### Static Properties

#### DEFAULT_VALUE_TO_COLOR {: #DEFAULT_VALUE_TO_COLOR data-toc-label='DEFAULT_VALUE_TO_COLOR' }

(readonly)

value is [0,1] and maps to the grayscale spectrum



## Type SpectrumNodeOptions {: #SpectrumNodeOptions }


```js
import type { SpectrumNodeOptions } from 'scenerystack/scenery-phet';
```


- **size**?: [Dimension2](../dot/Dimension2.md)
<br>  dimensions of the spectrum
- **valueToColor**?: ( value: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> ) =&gt; [Color](../scenery/Color.md)
<br>  maps value to Color, range of value is determined by the client
- **minValue**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
<br>  min value to be mapped to Color via valueToColor
- **maxValue**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
<br>  max value to be mapped to Color via valueToColor
- &amp; [StrictOmit](../phet-core/StrictOmit.md)&lt;[NodeOptions](../scenery/Node.md#NodeOptions), "children"&gt;




## Source Code

See the source for [SpectrumNode.ts](https://github.com/phetsims/scenery-phet/blob/main/js/SpectrumNode.ts) in the [scenery-phet](https://github.com/phetsims/scenery-phet) repository.
