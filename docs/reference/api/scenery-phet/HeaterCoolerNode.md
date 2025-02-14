# HeaterCoolerNode

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/scenery-phet/blob/main/js/HeaterCoolerNode.ts](https://github.com/phetsims/scenery-phet/blob/main/js/HeaterCoolerNode.ts) for the most up-to-date information.

## Overview

This is the graphical representation of a stove that can be used to heat or cool things.  The HeaterCoolerNode is
composed of HeaterCoolerFront and HeaterCoolerBack so that objects can be layered inside of the heater to create a
3D effect.  This is a convenience node that puts the back and the front together for cases where nothing other than
the flame and the ice needs to come out of the bucket.

@author Siddhartha Chinthapally (Actual Concepts) on 20-11-2014.
@author Jesse Greenberg
@author Denzell Barnett (PhET Interactive Sims)
@author Chris Malley  (PixelZoom, Inc.)

## Class HeaterCoolerNode {: #HeaterCoolerNode }


```js
import { HeaterCoolerNode } from 'scenerystack/scenery-phet';
```
### Constructor

#### new HeaterCoolerNode( heatCoolAmountProperty : <span style="font-weight: 400;">[NumberProperty](../axon/NumberProperty.md)</span>, providedOptions? : <span style="font-weight: 400;">[HeaterCoolerNodeOptions](../scenery-phet/HeaterCoolerNode.md#HeaterCoolerNodeOptions)</span> ) {: #HeaterCoolerNode-constructor data-toc-label='new HeaterCoolerNode' }

### Instance Methods

#### dispose() {: #dispose data-toc-label='dispose' }

### Instance Properties

#### heatCoolAmountProperty : <span style="font-weight: 400;">[NumberProperty](../axon/NumberProperty.md)</span> {: #heatCoolAmountProperty data-toc-label='heatCoolAmountProperty' }

(readonly)

#### slider : <span style="font-weight: 400;">[VSlider](../sun/VSlider.md)</span> {: #slider data-toc-label='slider' }

(readonly)

With public visibility annotation comes great power - use it wisely.
See https://github.com/phetsims/scenery-phet/issues/442



## Type HeaterCoolerNodeOptions {: #HeaterCoolerNodeOptions }


```js
import type { HeaterCoolerNodeOptions } from 'scenerystack/scenery-phet';
```


- **baseColor**?: [Color](../scenery/Color.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>
<br>  color of the stove body, applied to HeaterCoolerFront and HeaterCoolerBack
- **frontOptions**?: [HeaterCoolerFrontOptions](../scenery-phet/HeaterCoolerFront.md#HeaterCoolerFrontOptions)
<br>  options passed to HeaterCoolerFront
- **backOptions**?: [HeaterCoolerBackOptions](../scenery-phet/HeaterCoolerBack.md#HeaterCoolerBackOptions)
<br>  options passed to HeaterCoolerBack
- &amp; [StrictOmit](../phet-core/StrictOmit.md)&lt;[NodeOptions](../scenery/Node.md#NodeOptions), "children"&gt;




## Source Code

See the source for [HeaterCoolerNode.ts](https://github.com/phetsims/scenery-phet/blob/main/js/HeaterCoolerNode.ts) in the [scenery-phet](https://github.com/phetsims/scenery-phet) repository.
