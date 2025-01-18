# EyeDropperNode

## Overview

Eye dropper, with a button for dispensing whatever is in the dropper.

@author Chris Malley (PixelZoom, Inc.)

## Class EyeDropperNode {: #EyeDropperNode }


```js
import { EyeDropperNode } from 'scenerystack/scenery-phet';
```
### Constructor

#### new EyeDropperNode( provideOptions? : <span style="font-weight: 400;">[EyeDropperNodeOptions](../scenery-phet/EyeDropperNode.md#EyeDropperNodeOptions)</span> ) {: #EyeDropperNode-constructor data-toc-label='new EyeDropperNode' }

### Instance Methods

#### dispose() {: #dispose data-toc-label='dispose' }

#### getFluidColor() : <span style="font-weight: 400;">[TPaint](../scenery/TPaint.md)</span> {: #getFluidColor data-toc-label='getFluidColor' }

Gets the color of the fluid in the dropper.

#### setFluidColor( color : <span style="font-weight: 400;">[TPaint](../scenery/TPaint.md)</span> ) {: #setFluidColor data-toc-label='setFluidColor' }

Sets the color of the fluid in the dropper.

### Instance Properties

#### isDispensingProperty : <span style="font-weight: 400;">[Property](../axon/Property.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>&gt;</span> {: #isDispensingProperty data-toc-label='isDispensingProperty' }

(readonly)

is the dropper dispensing?

#### isEmptyProperty : <span style="font-weight: 400;">[Property](../axon/Property.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>&gt;</span> {: #isEmptyProperty data-toc-label='isEmptyProperty' }

(readonly)

is the dropper empty of fluid?

#### button : <span style="font-weight: 400;">[Node](../scenery/Node.md)</span> {: #button data-toc-label='button' }

(readonly)

for clients who want to hide the button

### Static Properties

#### TIP_WIDTH {: #TIP_WIDTH data-toc-label='TIP_WIDTH' }

(readonly)

You'll need these if you want to create fluid coming out of the tip.

#### TIP_HEIGHT {: #TIP_HEIGHT data-toc-label='TIP_HEIGHT' }

(readonly)

#### GLASS_WIDTH {: #GLASS_WIDTH data-toc-label='GLASS_WIDTH' }

(readonly)

#### GLASS_MIN_Y {: #GLASS_MIN_Y data-toc-label='GLASS_MIN_Y' }

(readonly)

You'll need these if you want to put a label on the glass. Values are relative to bottom center.

#### GLASS_MAX_Y {: #GLASS_MAX_Y data-toc-label='GLASS_MAX_Y' }

(readonly)



## Type EyeDropperNodeOptions {: #EyeDropperNodeOptions }


```js
import type { EyeDropperNodeOptions } from 'scenerystack/scenery-phet';
```


- **isDispensingProperty**?: [Property](../axon/Property.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>&gt;
<br>  is the dropper dispensing?
- **isEmptyProperty**?: [Property](../axon/Property.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>&gt;
<br>  does the dropper appear to be empty?
- **fluidColor**?: [TPaint](../scenery/TPaint.md)
<br>  color of the fluid in the glass
- **buttonOptions**?: [RoundMomentaryButtonOptions](../sun/RoundMomentaryButton.md#RoundMomentaryButtonOptions)
<br>  propagated to RoundMomentaryButton
- &amp; [StrictOmit](../phet-core/StrictOmit.md)&lt;[NodeOptions](../scenery/Node.md#NodeOptions), "children"&gt;




## Source Code

See the source for [EyeDropperNode.ts](https://github.com/phetsims/scenery-phet/blob/main/js/EyeDropperNode.ts) in the [scenery-phet](https://github.com/phetsims/scenery-phet) repository.
