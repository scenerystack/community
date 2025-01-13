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

#### new RadialGradient( x0 : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, y0 : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, r0 : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, x1 : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, y1 : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, r1 : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### createCanvasGradient() : <span style="font-weight: 400;">CanvasGradient</span> {: #createCanvasGradient data-toc-label='createCanvasGradient' }

Returns a fresh gradient given the starting parameters

#### createSVGPaint( svgBlock : <span style="font-weight: 400;">[SVGBlock](../scenery/SVGBlock.md)</span> ) : <span style="font-weight: 400;">[SVGRadialGradient](../scenery/SVGRadialGradient.md)</span> {: #createSVGPaint data-toc-label='createSVGPaint' }

Creates an SVG paint object for creating/updating the SVG equivalent definition.

#### getSVGStops() : <span style="font-weight: 400;">[GradientStop](../scenery/Gradient.md#GradientStop)[]</span> {: #getSVGStops data-toc-label='getSVGStops' }

Returns stops suitable for direct SVG use.

NOTE: SVG has certain stop requirements, so we need to remap/reverse in some cases.

#### toString() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> {: #toString data-toc-label='toString' }

Returns a string form of this object

### Instance Properties

#### start : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> {: #start data-toc-label='start' }

#### end : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> {: #end data-toc-label='end' }

#### endRadius : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #endRadius data-toc-label='endRadius' }

#### largePoint : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> {: #largePoint data-toc-label='largePoint' }

#### maxRadius : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #maxRadius data-toc-label='maxRadius' }

#### isRadialGradient : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #isRadialGradient data-toc-label='isRadialGradient' }



## Source Code

See the source for [RadialGradient.ts](https://github.com/phetsims/scenery/blob/main/js/util/RadialGradient.ts) in the [scenery](https://github.com/phetsims/scenery) repository.
