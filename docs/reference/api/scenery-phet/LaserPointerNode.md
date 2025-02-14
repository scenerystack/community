# LaserPointerNode

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/scenery-phet/blob/main/js/LaserPointerNode.ts](https://github.com/phetsims/scenery-phet/blob/main/js/LaserPointerNode.ts) for the most up-to-date information.

## Overview

A laser pointer, with optional on/off button (toggle or momentary).
Default orientation is pointing to the right. Origin is at right center (the edge of the output nozzle).

@author Chris Malley (PixelZoom, Inc.)

## Class LaserPointerNode {: #LaserPointerNode }


```js
import { LaserPointerNode } from 'scenerystack/scenery-phet';
```
### Constructor

#### new LaserPointerNode( onProperty : <span style="font-weight: 400;">[TProperty](../axon/TProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>&gt;</span>, providedOptions? : <span style="font-weight: 400;">[LaserPointerNodeOptions](../scenery-phet/LaserPointerNode.md#LaserPointerNodeOptions)</span> ) {: #LaserPointerNode-constructor data-toc-label='new LaserPointerNode' }

### Instance Methods

#### dispose() {: #dispose data-toc-label='dispose' }

### Instance Properties

#### onOffButton : <span style="font-weight: 400;">[Node](../scenery/Node.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> {: #onOffButton data-toc-label='onOffButton' }

(readonly)

Read-only access to see if the pointer is over the button specifically, ok to add listeners, but do not mutate.

### Static Properties

#### DEFAULT_LASER_NODE_OPTIONS {: #DEFAULT_LASER_NODE_OPTIONS data-toc-label='DEFAULT_LASER_NODE_OPTIONS' }

(readonly)



## Type LaserPointerNodeOptions {: #LaserPointerNodeOptions }


```js
import type { LaserPointerNodeOptions } from 'scenerystack/scenery-phet';
```


- **bodySize**?: [Dimension2](../dot/Dimension2.md)
<br>  nozzle and body options
- **nozzleSize**?: [Dimension2](../dot/Dimension2.md)
- **topColor**?: [TColor](../scenery/TColor.md)
- **bottomColor**?: [TColor](../scenery/TColor.md)
- **highlightColor**?: [TColor](../scenery/TColor.md)
- **highlightColorStop**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **stroke**?: [TColor](../scenery/TColor.md)
- **lineWidth**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **cornerRadius**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **hasButton**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
<br>  button options
- **buttonType**?: ButtonType
- **buttonOptions**?: ButtonOptions
- **getButtonLocation**?: ( bodyNode: [Node](../scenery/Node.md) ) =&gt; [Vector2](../dot/Vector2.md)
<br>  where to position the button within the body
- **hasGlass**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
<br>  When enabled, the glass shows a semi-circular blue-ish lens on the output of the laser pointer node.
  It does not change the origin of the laser pointer node, which is at the center of the casing.  The glass is
  sometimes used to help cue the user that it is a non-laser light source.
  See https://github.com/phetsims/scenery-phet/issues/366
- **glassOptions**?:
<br>  propagated to ShadedSphereNode, used to draw the lens at the output of the laser pointer
  - **heightProportion**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
<br>    The fraction of the nozzle height, between 0 (no height) and 1 (the nozzle height)
  - **proportionStickingOut**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
<br>    The amount the glass "sticks out" between 0 (not at all) and 1 (hemisphere)
- &amp; [ShadedSphereNodeOptions](../scenery-phet/ShadedSphereNode.md#ShadedSphereNodeOptions)
- &amp; [TrimParallelDOMOptions](../scenery/ParallelDOM.md#TrimParallelDOMOptions)&lt;[NodeOptions](../scenery/Node.md#NodeOptions)&gt;




## Source Code

See the source for [LaserPointerNode.ts](https://github.com/phetsims/scenery-phet/blob/main/js/LaserPointerNode.ts) in the [scenery-phet](https://github.com/phetsims/scenery-phet) repository.
