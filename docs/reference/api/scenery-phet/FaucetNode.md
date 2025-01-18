# FaucetNode

## Overview

FaucetNode is a faucet with a pinball machine 'shooter' that behaves like a slider.
When the faucet is disabled, the flow rate is set to zero and the shooter is disabled.
The origin is at the bottom-center of the spout.

The shooter is optionally interactive. When it's not interactive, the shooter and track are hidden.
When the shooter is interactive, it has the following features:

(1) Close-on-release mode: When the user drags the slider, releasing it sets the flow to zero.
See options.closeToRelease: true.

(2) Slider mode: When the user drags the slider, releasing it will leave the shooter wherever it is
released, and (if in the on position) the flow will continue. See options.closeToRelease: false.

(3) Tap-to-dispense: When the user taps on the shooter without dragging, it's on/off state toggles.
If the shooter was in the off state when tapped, it opens and dispenses a configurable amount of fluid.
This feature can be enabled simultaneously with (1) and (2) above. See the various tapToDispense* options.

@author Chris Malley (PixelZoom, Inc.)

## Class FaucetNode {: #FaucetNode }


```js
import { FaucetNode } from 'scenerystack/scenery-phet';
```
### Constructor

#### new FaucetNode( maxFlowRate : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, flowRateProperty : <span style="font-weight: 400;">[Property](../axon/Property.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>&gt;</span>, enabledProperty : <span style="font-weight: 400;">[TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>&gt;</span>, providedOptions? : <span style="font-weight: 400;">[FaucetNodeOptions](../scenery-phet/FaucetNode.md#FaucetNodeOptions)</span> ) {: #FaucetNode-constructor data-toc-label='new FaucetNode' }

### Instance Methods

#### dispose() {: #dispose data-toc-label='dispose' }

### Static Properties

#### CLOSE_FAUCET_HOTKEY_DATA : <span style="font-weight: 400;">[HotkeyData](../scenery/HotkeyData.md)</span> {: #CLOSE_FAUCET_HOTKEY_DATA data-toc-label='CLOSE_FAUCET_HOTKEY_DATA' }

(readonly)

#### TAP_TO_DISPENSE_HOTKEY_DATA : <span style="font-weight: 400;">[HotkeyData](../scenery/HotkeyData.md)</span> {: #TAP_TO_DISPENSE_HOTKEY_DATA data-toc-label='TAP_TO_DISPENSE_HOTKEY_DATA' }

(readonly)

#### FaucetNodeIO : <span style="font-weight: 400;">[IOType](../tandem/IOType.md)</span> {: #FaucetNodeIO data-toc-label='FaucetNodeIO' }



## Type FaucetNodeOptions {: #FaucetNodeOptions }


```js
import type { FaucetNodeOptions } from 'scenerystack/scenery-phet';
```


- **horizontalPipeLength**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **verticalPipeLength**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **tapToDispenseEnabled**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
- **tapToDispenseAmount**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **tapToDispenseInterval**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **closeOnRelease**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
- **interactiveProperty**?: [TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>&gt;
- **rasterizeHorizontalPipeNode**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
<br>  Overcome a flickering problems, see https://github.com/phetsims/wave-interference/issues/187
- **shooterOptions**?: ShooterNodeOptions
<br>  options for the nested type ShooterNode
- &amp; [StrictOmit](../phet-core/StrictOmit.md)&lt;ParentOptions, "interactiveHighlightEnabled" | "enabledRangeProperty" | "valueProperty"&gt;




## Source Code

See the source for [FaucetNode.ts](https://github.com/phetsims/scenery-phet/blob/main/js/FaucetNode.ts) in the [scenery-phet](https://github.com/phetsims/scenery-phet) repository.
