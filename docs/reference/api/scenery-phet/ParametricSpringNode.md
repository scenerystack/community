# ParametricSpringNode

## Overview

Spring described by a parametric equation. This implementation is a variation of the cycloid equation.
A prolate cycloid (see http://mathworld.wolfram.com/ProlateCycloid.html) comes closest to this implementation,
although it doesn't include aspect ratio and delta phase.

The origin (0, 0) of this node is at its left center.
The front and back of the spring are drawn as separate paths to provide pseudo-3D visual cues.
Performance can be improved dramatically by setting options.pathBoundsMethod to 'none', at
the expense of layout accuracy. If you use this option, you can only rely on Node.x and Node.y for
doing layout.  See Path.boundsMethod for additional details.

The "Spring" screen in the scenery-demo application provides an extensive test harness for ParametricSpringNode.

@author Martin Veillette (Berea College)
@author Chris Malley (PixelZoom, Inc.)

## Class ParametricSpringNode {: #ParametricSpringNode }


```js
import { ParametricSpringNode } from 'scenerystack/scenery-phet';
```
### Constructor

#### new ParametricSpringNode( providedOptions? : <span style="font-weight: 400;">[ParametricSpringNodeOptions](../scenery-phet/ParametricSpringNode.md#ParametricSpringNodeOptions)</span> ) {: #ParametricSpringNode-constructor data-toc-label='new ParametricSpringNode' }

### Instance Methods

#### reset() {: #reset data-toc-label='reset' }

### Instance Properties

#### loopsProperty : <span style="font-weight: 400;">[NumberProperty](../axon/NumberProperty.md)</span> {: #loopsProperty data-toc-label='loopsProperty' }

(readonly)

#### radiusProperty : <span style="font-weight: 400;">[NumberProperty](../axon/NumberProperty.md)</span> {: #radiusProperty data-toc-label='radiusProperty' }

(readonly)

#### aspectRatioProperty : <span style="font-weight: 400;">[NumberProperty](../axon/NumberProperty.md)</span> {: #aspectRatioProperty data-toc-label='aspectRatioProperty' }

(readonly)

#### pointsPerLoopProperty : <span style="font-weight: 400;">[NumberProperty](../axon/NumberProperty.md)</span> {: #pointsPerLoopProperty data-toc-label='pointsPerLoopProperty' }

(readonly)

#### lineWidthProperty : <span style="font-weight: 400;">[NumberProperty](../axon/NumberProperty.md)</span> {: #lineWidthProperty data-toc-label='lineWidthProperty' }

(readonly)

#### phaseProperty : <span style="font-weight: 400;">[NumberProperty](../axon/NumberProperty.md)</span> {: #phaseProperty data-toc-label='phaseProperty' }

(readonly)

#### deltaPhaseProperty : <span style="font-weight: 400;">[NumberProperty](../axon/NumberProperty.md)</span> {: #deltaPhaseProperty data-toc-label='deltaPhaseProperty' }

(readonly)

#### xScaleProperty : <span style="font-weight: 400;">[NumberProperty](../axon/NumberProperty.md)</span> {: #xScaleProperty data-toc-label='xScaleProperty' }

(readonly)



## Type ParametricSpringNodeOptions {: #ParametricSpringNodeOptions }


```js
import type { ParametricSpringNodeOptions } from 'scenerystack/scenery-phet';
```


- **frontColor**?: [TColor](../scenery/TColor.md)
<br>  colors used for the gradient strokes
- **middleColor**?: [TColor](../scenery/TColor.md)
- **backColor**?: [TColor](../scenery/TColor.md)
- **leftEndLength**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
<br>  length of the horizontal line added to the left end of the coil
- **rightEndLength**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
<br>  {number} length of the horizontal line added to the right end of the coil
- **loops**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
<br>  number of loops in the coil
- **pointsPerLoop**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
<br>  number of points used to approximate 1 loop of the coil
- **radius**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
<br>  radius of a loop with aspect ratio of 1:1
- **aspectRatio**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
<br>  y:x aspect ratio of the loop radius
- **lineWidth**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
<br>  lineWidth used to stroke the Paths
- **phase**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
<br>  phase angle of where the loop starts, period is (0,2*PI) radians, counterclockwise
- **deltaPhase**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
<br>  responsible for the leaning of the coil, variation on a Lissjoue curve, period is (0,2*PI) radians
- **xScale**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
<br>  multiplier for radius in the x dimension, makes the coil appear to get longer
- &amp; [PickOptional](../phet-core/PickOptional.md)&lt;[PathOptions](../scenery/Path.md#PathOptions), "boundsMethod"&gt; &amp; [NodeOptions](../scenery/Node.md#NodeOptions)




## Source Code

See the source for [ParametricSpringNode.ts](https://github.com/phetsims/scenery-phet/blob/main/js/ParametricSpringNode.ts) in the [scenery-phet](https://github.com/phetsims/scenery-phet) repository.
