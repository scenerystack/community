# BeakerNode

## Overview

BeakerNode draws a pseudo-3D cylindrical beaker, with optional tick marks, containing a solution.
Based on the value of solutionLevelProperty, it fills the beaker with solution from the bottom up.
The Beaker and solution use flat style shading and highlights to provide pseudo-3D dimension.

This node expects the provided solutionLevelProperty that maps between 0 (empty) and 1 (full).

@author Marla Schulz &lt;marla.schulz@colorado.edu&gt;

## Class BeakerNode {: #BeakerNode }


```js
import { BeakerNode } from 'scenerystack/scenery-phet';
```
### Constructor

#### new BeakerNode( solutionLevelProperty : <span style="font-weight: 400;">[TRangedProperty](../axon/TRangedProperty.md)</span>, providedOptions? : <span style="font-weight: 400;">[BeakerNodeOptions](../scenery-phet/BeakerNode.md#BeakerNodeOptions)</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### dispose() {: #dispose data-toc-label='dispose' }

#### setTicksVisible( visible : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> ) {: #setTicksVisible data-toc-label='setTicksVisible' }



## Type BeakerNodeOptions {: #BeakerNodeOptions }


```js
import type { BeakerNodeOptions } from 'scenerystack/scenery-phet';
```
- **emptyBeakerFill**?: [TPaint](../scenery/TPaint.md)
- **solutionFill**?: [TColor](../scenery/TColor.md)
- **solutionShadowFill**?: [TPaint](../scenery/TPaint.md)
- **solutionGlareFill**?: [TPaint](../scenery/TPaint.md)
- **beakerGlareFill**?: [TPaint](../scenery/TPaint.md)
- **beakerHeight**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **beakerWidth**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **yRadiusOfEnds**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **ticksVisible**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
- **tickStroke**?: [TPaint](../scenery/TPaint.md)
- **beakerStroke**?: [TPaint](../scenery/TPaint.md)
- **lineWidth**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **numberOfTicks**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **majorTickMarkModulus**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- &amp; StrictOmit&lt;[NodeOptions](../scenery/Node.md#NodeOptions), "children"&gt;




## Source Code

See the source for [BeakerNode.ts](https://github.com/phetsims/scenery-phet/blob/main/js/BeakerNode.ts) in the [scenery-phet](https://github.com/phetsims/scenery-phet) repository.
