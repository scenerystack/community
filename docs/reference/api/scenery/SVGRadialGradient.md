# SVGRadialGradient

## Overview

Controller that creates and keeps an SVG radial gradient up-to-date with a Scenery RadialGradient

SVG gradients, see http://www.w3.org/TR/SVG/pservers.html

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class SVGRadialGradient {: #SVGRadialGradient }


```js
import { SVGRadialGradient } from 'scenerystack/scenery';
```
### Constructor

#### new SVGRadialGradient( svgBlock : <span style="font-weight: 400;">[SVGBlock](../scenery/SVGBlock.md)</span>, gradient : <span style="font-weight: 400;">[RadialGradient](../scenery/RadialGradient.md)</span> ) {: #SVGRadialGradient-constructor data-toc-label='new SVGRadialGradient' }

### Instance Methods

#### initialize( svgBlock : <span style="font-weight: 400;">[SVGBlock](../scenery/SVGBlock.md)</span>, radialGradient : <span style="font-weight: 400;">[RadialGradient](../scenery/RadialGradient.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #initialize data-toc-label='initialize' }

#### createDefinition() : <span style="font-weight: 400;">SVGRadialGradientElement</span> {: #createDefinition data-toc-label='createDefinition' }

(protected)

Creates the gradient-type-specific definition.

#### freeToPool() {: #freeToPool data-toc-label='freeToPool' }

### Static Properties

#### pool : <span style="font-weight: 400;">[Pool](../phet-core/Pool.md)</span> {: #pool data-toc-label='pool' }

(readonly)



## Source Code

See the source for [SVGRadialGradient.ts](https://github.com/phetsims/scenery/blob/main/js/display/SVGRadialGradient.ts) in the [scenery](https://github.com/phetsims/scenery) repository.
