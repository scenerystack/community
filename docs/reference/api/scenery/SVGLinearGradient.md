# SVGLinearGradient

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/scenery/blob/main/js/display/SVGLinearGradient.ts](https://github.com/phetsims/scenery/blob/main/js/display/SVGLinearGradient.ts) for the most up-to-date information.

## Overview

Controller that creates and keeps an SVG linear gradient up-to-date with a Scenery LinearGradient

SVG gradients, see http://www.w3.org/TR/SVG/pservers.html

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class SVGLinearGradient {: #SVGLinearGradient }


```js
import { SVGLinearGradient } from 'scenerystack/scenery';
```
### Constructor

#### new SVGLinearGradient( svgBlock : <span style="font-weight: 400;">[SVGBlock](../scenery/SVGBlock.md)</span>, gradient : <span style="font-weight: 400;">[LinearGradient](../scenery/LinearGradient.md)</span> ) {: #SVGLinearGradient-constructor data-toc-label='new SVGLinearGradient' }

### Instance Methods

#### initialize( svgBlock : <span style="font-weight: 400;">[SVGBlock](../scenery/SVGBlock.md)</span>, gradient : <span style="font-weight: 400;">[LinearGradient](../scenery/LinearGradient.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #initialize data-toc-label='initialize' }

#### createDefinition() : <span style="font-weight: 400;">SVGLinearGradientElement</span> {: #createDefinition data-toc-label='createDefinition' }

(protected)

Creates the gradient-type-specific definition.

#### freeToPool() {: #freeToPool data-toc-label='freeToPool' }

### Static Properties

#### pool : <span style="font-weight: 400;">[Pool](../phet-core/Pool.md)</span> {: #pool data-toc-label='pool' }

(readonly)



## Source Code

See the source for [SVGLinearGradient.ts](https://github.com/phetsims/scenery/blob/main/js/display/SVGLinearGradient.ts) in the [scenery](https://github.com/phetsims/scenery) repository.
