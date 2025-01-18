# ProbeNode

## Overview

ProbeNode is a physical-looking probe with a handle and a circular sensor region. It is used in simulations like
Bending Light and Beer's Law Lab to show how much light is being received. It is typically connected to a body
with readouts via a wire. The origin is in the center of the sensor.

This code was generalized from Bending Light, see https://github.com/phetsims/bending-light/issues/165

@author Sam Reid (PhET Interactive Simulations)
@author Chandrashekar Bemagoni (Actual Concepts)
@author Chris Malley (PixelZoom, Inc.)

## Class ProbeNode {: #ProbeNode }


```js
import { ProbeNode } from 'scenerystack/scenery-phet';
```
### Constructor

#### new ProbeNode( providedOptions? : <span style="font-weight: 400;">[ProbeNodeOptions](../scenery-phet/ProbeNode.md#ProbeNodeOptions)</span> ) {: #ProbeNode-constructor data-toc-label='new ProbeNode' }

### Instance Methods

#### dispose() {: #dispose data-toc-label='dispose' }

### Static Properties

#### DEFAULT_PROBE_NODE_OPTIONS {: #DEFAULT_PROBE_NODE_OPTIONS data-toc-label='DEFAULT_PROBE_NODE_OPTIONS' }

(readonly)

#### glass {: #glass data-toc-label='glass' }

(readonly)

#### crosshairs {: #crosshairs data-toc-label='crosshairs' }

(readonly)



## Type ProbeNodeOptions {: #ProbeNodeOptions }


```js
import type { ProbeNodeOptions } from 'scenerystack/scenery-phet';
```


- **radius**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **innerRadius**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **handleWidth**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **handleHeight**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **handleCornerRadius**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **lightAngle**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
<br>  in radians, the angle of the incoming light.  0 is from the right, PI/2 from the bottom, PI from the left, etc.
  The default is from the upper-left.  Generally, it is difficult to know the global rotation of the ProbeNode
  and automatically update the lightAngle when the global rotation changes, so this is up to the developer
  to set properly.  The light in PhET simulations often comes from the top-left, so please set this value
  accordingly depending on the context of how the probe is embedded in the simulation.
- **color**?: [TColor](../scenery/TColor.md)
- **sensorTypeFunction**?: SensorTypeFunction | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
<br>  Determines what is displayed in the sensor area, the circular cut-out part of the ProbeNode.
  Set this to null to display nothing in the sensor.
- &amp; [NodeOptions](../scenery/Node.md#NodeOptions)




## Source Code

See the source for [ProbeNode.ts](https://github.com/phetsims/scenery-phet/blob/main/js/ProbeNode.ts) in the [scenery-phet](https://github.com/phetsims/scenery-phet) repository.
