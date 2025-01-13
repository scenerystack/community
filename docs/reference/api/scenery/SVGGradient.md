# SVGGradient

## Overview

Base type for controllers that create and keep an SVG gradient element up-to-date with a Scenery gradient.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class SVGGradient {: #SVGGradient }


```js
import { SVGGradient } from 'scenerystack/scenery';
```
### Constructor

#### new SVGGradient( svgBlock : <span style="font-weight: 400; opacity: 80%;">SVGBlock</span>, gradient : <span style="font-weight: 400; opacity: 80%;">Gradient</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### isActiveSVGGradient() : <span style="font-weight: 400; opacity: 80%;">this is ActiveSVGGradient</span> {: #isActiveSVGGradient data-toc-label='isActiveSVGGradient' }

#### initialize( svgBlock : <span style="font-weight: 400; opacity: 80%;">SVGBlock</span>, gradient : <span style="font-weight: 400; opacity: 80%;">Gradient</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #initialize data-toc-label='initialize' }

#### createDefinition() : <span style="font-weight: 400; opacity: 80%;">SVGGradientElement</span> {: #createDefinition data-toc-label='createDefinition' }

(protected)

Creates the gradient-type-specific definition.

#### markDirty() : <span style="font-weight: 400; opacity: 80%;">void</span> {: #markDirty data-toc-label='markDirty' }

Called from SVGGradientStop when a stop needs to change the actual color.

#### update() : <span style="font-weight: 400; opacity: 80%;">void</span> {: #update data-toc-label='update' }

Called from SVGBlock when we need to update our color stops.

#### dispose() : <span style="font-weight: 400; opacity: 80%;">void</span> {: #dispose data-toc-label='dispose' }

Disposes, so that it can be reused from the pool.

#### freeToPool() : <span style="font-weight: 400; opacity: 80%;">void</span> {: #freeToPool data-toc-label='freeToPool' }

### Instance Properties

#### gradient : <span style="font-weight: 400; opacity: 80%;">Gradient | null</span> {: #gradient data-toc-label='gradient' }

#### stops : <span style="font-weight: 400; opacity: 80%;">SVGGradientStop[]</span> {: #stops data-toc-label='stops' }

#### definition : <span style="font-weight: 400; opacity: 80%;">SVGGradientElement</span> {: #definition data-toc-label='definition' }

persistent



## Source Code

See the source for [SVGGradient.ts](https://github.com/phetsims/scenery/blob/main/js/display/SVGGradient.ts) in the [scenery](https://github.com/phetsims/scenery) repository.
