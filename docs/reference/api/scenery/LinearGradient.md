# LinearGradient

## Overview

A linear gradient that can be passed into the 'fill' or 'stroke' parameters.

SVG gradients, see http://www.w3.org/TR/SVG/pservers.html

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class LinearGradient {: #LinearGradient }


```js
import { LinearGradient } from 'scenerystack/scenery';
```
### Constructor

#### new LinearGradient( x0 : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, y0 : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, x1 : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, y1 : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### createCanvasGradient() : <span style="font-weight: 400;">CanvasGradient</span> {: #createCanvasGradient data-toc-label='createCanvasGradient' }

Returns a fresh gradient given the starting parameters

#### createSVGPaint( svgBlock : <span style="font-weight: 400;">[SVGBlock](../scenery/SVGBlock.md)</span> ) : <span style="font-weight: 400;">[SVGLinearGradient](../scenery/SVGLinearGradient.md)</span> {: #createSVGPaint data-toc-label='createSVGPaint' }

Creates an SVG paint object for creating/updating the SVG equivalent definition.

#### toString() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> {: #toString data-toc-label='toString' }

Returns a string form of this object

### Instance Properties

#### start : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> {: #start data-toc-label='start' }

#### end : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> {: #end data-toc-label='end' }

#### isLinearGradient : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #isLinearGradient data-toc-label='isLinearGradient' }



## Source Code

See the source for [LinearGradient.ts](https://github.com/phetsims/scenery/blob/main/js/util/LinearGradient.ts) in the [scenery](https://github.com/phetsims/scenery) repository.
