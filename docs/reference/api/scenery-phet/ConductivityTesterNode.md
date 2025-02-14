# ConductivityTesterNode

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/scenery-phet/blob/main/js/ConductivityTesterNode.ts](https://github.com/phetsims/scenery-phet/blob/main/js/ConductivityTesterNode.ts) for the most up-to-date information.

## Overview

Conductivity tester. Light bulb connected to a battery, with draggable probes.
When the probes are both immersed in solution, the circuit is completed, and the bulb glows.

@author Andrey Zelenkov (Mlearner)
@author Chris Malley (PixelZoom, Inc.)

## Class ConductivityTesterNode {: #ConductivityTesterNode }


```js
import { ConductivityTesterNode } from 'scenerystack/scenery-phet';
```
### Constructor

#### new ConductivityTesterNode( brightnessProperty : <span style="font-weight: 400;">[TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>&gt;</span>, positionProperty : <span style="font-weight: 400;">[TProperty](../axon/TProperty.md)&lt;[Vector2](../dot/Vector2.md)&gt;</span>, positiveProbePositionProperty : <span style="font-weight: 400;">[TProperty](../axon/TProperty.md)&lt;[Vector2](../dot/Vector2.md)&gt;</span>, negativeProbePositionProperty : <span style="font-weight: 400;">[TProperty](../axon/TProperty.md)&lt;[Vector2](../dot/Vector2.md)&gt;</span>, providedOptions? : <span style="font-weight: 400;">[ConductivityTesterNodeOptions](../scenery-phet/ConductivityTesterNode.md#ConductivityTesterNodeOptions)</span> ) {: #ConductivityTesterNode-constructor data-toc-label='new ConductivityTesterNode' }

### Instance Methods





## Type ConductivityTesterNodeOptions {: #ConductivityTesterNodeOptions }


```js
import type { ConductivityTesterNodeOptions } from 'scenerystack/scenery-phet';
```


- **modelViewTransform**?: [ModelViewTransform2](../phetcommon/ModelViewTransform2.md)
- **bulbImageScale**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **batteryDCell_pngScale**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **probeSize**?: [Dimension2](../dot/Dimension2.md)
<br>  common to both probes
- **probeLineWidth**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **probeDragYRange**?: [Range](../dot/Range.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
- **probeCursor**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>
- **positiveProbeFill**?: [TColor](../scenery/TColor.md)
<br>  positive probe
- **positiveProbeStroke**?: [TColor](../scenery/TColor.md)
- **positiveLabelFill**?: [TColor](../scenery/TColor.md)
- **negativeProbeFill**?: [TColor](../scenery/TColor.md)
<br>  negative probe
- **negativeProbeStroke**?: [TColor](../scenery/TColor.md)
- **negativeLabelFill**?: [TColor](../scenery/TColor.md)
- **wireStroke**?: [TColor](../scenery/TColor.md)
<br>  wires
- **wireLineWidth**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **bulbToBatteryWireLength**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **shortCircuitFont**?: [Font](../scenery/Font.md)
<br>  short-circuit indicator
- **shortCircuitFill**?: [TColor](../scenery/TColor.md)
- **keyboardDragListenerOptions**?: [StrictOmit](../phet-core/StrictOmit.md)&lt;[KeyboardDragListenerOptions](../scenery/KeyboardDragListener.md#KeyboardDragListenerOptions), "tandem"&gt;
- &amp; [StrictOmit](../phet-core/StrictOmit.md)&lt;[NodeOptions](../scenery/Node.md#NodeOptions), "children"&gt; &amp; [PickRequired](../phet-core/PickRequired.md)&lt;[NodeOptions](../scenery/Node.md#NodeOptions), "tandem"&gt;




## Source Code

See the source for [ConductivityTesterNode.ts](https://github.com/phetsims/scenery-phet/blob/main/js/ConductivityTesterNode.ts) in the [scenery-phet](https://github.com/phetsims/scenery-phet) repository.
