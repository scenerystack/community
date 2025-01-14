# SVGGradient

## Overview

Base type for controllers that create and keep an SVG gradient element up-to-date with a Scenery gradient.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class SVGGradient {: #SVGGradient }


```js
import { SVGGradient } from 'scenerystack/scenery';
```
### Constructor

#### new SVGGradient( svgBlock : <span style="font-weight: 400;">[SVGBlock](../scenery/SVGBlock.md)</span>, gradient : <span style="font-weight: 400;">[Gradient](../scenery/Gradient.md)</span> ) {: #SVGGradient-constructor data-toc-label='new SVGGradient' }

### Instance Methods

#### isActiveSVGGradient() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span> is [ActiveSVGGradient](../scenery/SVGGradient.md#ActiveSVGGradient)</span> {: #isActiveSVGGradient data-toc-label='isActiveSVGGradient' }

#### initialize( svgBlock : <span style="font-weight: 400;">[SVGBlock](../scenery/SVGBlock.md)</span>, gradient : <span style="font-weight: 400;">[Gradient](../scenery/Gradient.md)</span> ) {: #initialize data-toc-label='initialize' }

#### createDefinition() : <span style="font-weight: 400;">SVGGradientElement</span> {: #createDefinition data-toc-label='createDefinition' }

(protected)

Creates the gradient-type-specific definition.

#### markDirty() {: #markDirty data-toc-label='markDirty' }

Called from SVGGradientStop when a stop needs to change the actual color.

#### update() {: #update data-toc-label='update' }

Called from SVGBlock when we need to update our color stops.

#### dispose() {: #dispose data-toc-label='dispose' }

Disposes, so that it can be reused from the pool.

#### freeToPool() {: #freeToPool data-toc-label='freeToPool' }

### Instance Properties

#### gradient : <span style="font-weight: 400;">[Gradient](../scenery/Gradient.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> {: #gradient data-toc-label='gradient' }

#### stops : <span style="font-weight: 400;">[SVGGradientStop](../scenery/SVGGradientStop.md)[]</span> {: #stops data-toc-label='stops' }

#### definition : <span style="font-weight: 400;">SVGGradientElement</span> {: #definition data-toc-label='definition' }

persistent



## Type ActiveSVGGradient {: #ActiveSVGGradient }


```js
import type { ActiveSVGGradient } from 'scenerystack/scenery';
```


WithoutNull&lt;[SVGGradient](../scenery/SVGGradient.md), "svgBlock" | "gradient"&gt;



## Source Code

See the source for [SVGGradient.ts](https://github.com/phetsims/scenery/blob/main/js/display/SVGGradient.ts) in the [scenery](https://github.com/phetsims/scenery) repository.
