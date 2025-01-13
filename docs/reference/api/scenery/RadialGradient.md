# RadialGradient

## Overview

A radial gradient that can be passed into the 'fill' or 'stroke' parameters.

SVG gradients, see http://www.w3.org/TR/SVG/pservers.html

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class RadialGradient {: #RadialGradient }


```js
import { RadialGradient } from 'scenerystack/scenery';
```
### Constructor

#### new RadialGradient( x0 : <span style="font-weight: 400; opacity: 80%;">number</span>, y0 : <span style="font-weight: 400; opacity: 80%;">number</span>, r0 : <span style="font-weight: 400; opacity: 80%;">number</span>, x1 : <span style="font-weight: 400; opacity: 80%;">number</span>, y1 : <span style="font-weight: 400; opacity: 80%;">number</span>, r1 : <span style="font-weight: 400; opacity: 80%;">number</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### createCanvasGradient() : <span style="font-weight: 400; opacity: 80%;">CanvasGradient</span> {: #createCanvasGradient data-toc-label='createCanvasGradient' }

Returns a fresh gradient given the starting parameters

#### createSVGPaint( svgBlock : <span style="font-weight: 400; opacity: 80%;">SVGBlock</span> ) : <span style="font-weight: 400; opacity: 80%;">SVGRadialGradient</span> {: #createSVGPaint data-toc-label='createSVGPaint' }

Creates an SVG paint object for creating/updating the SVG equivalent definition.

#### getSVGStops() : <span style="font-weight: 400; opacity: 80%;">GradientStop[]</span> {: #getSVGStops data-toc-label='getSVGStops' }

Returns stops suitable for direct SVG use.

NOTE: SVG has certain stop requirements, so we need to remap/reverse in some cases.

#### toString() : <span style="font-weight: 400; opacity: 80%;">string</span> {: #toString data-toc-label='toString' }

Returns a string form of this object

### Instance Properties

#### start : <span style="font-weight: 400; opacity: 80%;">Vector2</span> {: #start data-toc-label='start' }

#### end : <span style="font-weight: 400; opacity: 80%;">Vector2</span> {: #end data-toc-label='end' }

#### endRadius : <span style="font-weight: 400; opacity: 80%;">number</span> {: #endRadius data-toc-label='endRadius' }

#### largePoint : <span style="font-weight: 400; opacity: 80%;">Vector2</span> {: #largePoint data-toc-label='largePoint' }

#### maxRadius : <span style="font-weight: 400; opacity: 80%;">number</span> {: #maxRadius data-toc-label='maxRadius' }

#### isRadialGradient : <span style="font-weight: 400; opacity: 80%;">boolean</span> {: #isRadialGradient data-toc-label='isRadialGradient' }



## Source Code

See the source for [RadialGradient.ts](https://github.com/phetsims/scenery/blob/main/js/util/RadialGradient.ts) in the [scenery](https://github.com/phetsims/scenery) repository.
