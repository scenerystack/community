# SVGGradientStop

## Overview

Handles creation of an SVG stop element, and handles keeping it updated based on property/color changes.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class SVGGradientStop {: #SVGGradientStop }


```js
import { SVGGradientStop } from 'scenerystack/scenery';
```
### Constructor

#### new SVGGradientStop( svgGradient : <span style="font-weight: 400; opacity: 80%;">ActiveSVGGradient</span>, ratio : <span style="font-weight: 400; opacity: 80%;">number</span>, color : <span style="font-weight: 400; opacity: 80%;">TColor</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### isActiveSVGGradientStop() : <span style="font-weight: 400; opacity: 80%;">this is ActiveSVGGradientStop</span> {: #isActiveSVGGradientStop data-toc-label='isActiveSVGGradientStop' }

#### initialize( svgGradient : <span style="font-weight: 400; opacity: 80%;">ActiveSVGGradient</span>, ratio : <span style="font-weight: 400; opacity: 80%;">number</span>, color : <span style="font-weight: 400; opacity: 80%;">TColor</span> ) : <span style="font-weight: 400; opacity: 80%;">this</span> {: #initialize data-toc-label='initialize' }

#### update() : <span style="font-weight: 400; opacity: 80%;">void</span> {: #update data-toc-label='update' }

Updates the color stop to whatever the current color should be.

#### dispose() : <span style="font-weight: 400; opacity: 80%;">void</span> {: #dispose data-toc-label='dispose' }

Disposes, so that it can be reused from the pool.

#### freeToPool() : <span style="font-weight: 400; opacity: 80%;">void</span> {: #freeToPool data-toc-label='freeToPool' }

### Instance Properties

#### svgElement : <span style="font-weight: 400; opacity: 80%;">SVGStopElement</span> {: #svgElement data-toc-label='svgElement' }

persistent

#### svgGradient : <span style="font-weight: 400; opacity: 80%;">ActiveSVGGradient | null</span> {: #svgGradient data-toc-label='svgGradient' }

transient

#### color : <span style="font-weight: 400; opacity: 80%;">TColor</span> {: #color data-toc-label='color' }

#### ratio : <span style="font-weight: 400; opacity: 80%;">number</span> {: #ratio data-toc-label='ratio' }

### Static Properties

#### pool : <span style="font-weight: 400; opacity: 80%;">Pool</span> {: #pool data-toc-label='pool' }

(readonly)



## Source Code

See the source for [SVGGradientStop.ts](https://github.com/phetsims/scenery/blob/main/js/display/SVGGradientStop.ts) in the [scenery](https://github.com/phetsims/scenery) repository.
