# SVGGradientStop

## Overview

Handles creation of an SVG stop element, and handles keeping it updated based on property/color changes.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class SVGGradientStop {: #SVGGradientStop }


```js
import { SVGGradientStop } from 'scenerystack/scenery';
```
### Constructor

#### new SVGGradientStop( svgGradient : <span style="font-weight: 400;">[ActiveSVGGradient](../scenery/SVGGradient.md#ActiveSVGGradient)</span>, ratio : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, color : <span style="font-weight: 400;">[TColor](../scenery/TColor.md)</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### isActiveSVGGradientStop() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span> is ActiveSVGGradientStop</span> {: #isActiveSVGGradientStop data-toc-label='isActiveSVGGradientStop' }

#### initialize( svgGradient : <span style="font-weight: 400;">[ActiveSVGGradient](../scenery/SVGGradient.md#ActiveSVGGradient)</span>, ratio : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, color : <span style="font-weight: 400;">[TColor](../scenery/TColor.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #initialize data-toc-label='initialize' }

#### update() {: #update data-toc-label='update' }

Updates the color stop to whatever the current color should be.

#### dispose() {: #dispose data-toc-label='dispose' }

Disposes, so that it can be reused from the pool.

#### freeToPool() {: #freeToPool data-toc-label='freeToPool' }

### Instance Properties

#### svgElement : <span style="font-weight: 400;">SVGStopElement</span> {: #svgElement data-toc-label='svgElement' }

persistent

#### svgGradient : <span style="font-weight: 400;">[ActiveSVGGradient](../scenery/SVGGradient.md#ActiveSVGGradient) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> {: #svgGradient data-toc-label='svgGradient' }

transient

#### color : <span style="font-weight: 400;">[TColor](../scenery/TColor.md)</span> {: #color data-toc-label='color' }

#### ratio : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #ratio data-toc-label='ratio' }

### Static Properties

#### pool : <span style="font-weight: 400;">[Pool](../phet-core/Pool.md)</span> {: #pool data-toc-label='pool' }

(readonly)



## Source Code

See the source for [SVGGradientStop.ts](https://github.com/phetsims/scenery/blob/main/js/display/SVGGradientStop.ts) in the [scenery](https://github.com/phetsims/scenery) repository.
