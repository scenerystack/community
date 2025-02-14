# SVGPattern

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/scenery/blob/main/js/display/SVGPattern.ts](https://github.com/phetsims/scenery/blob/main/js/display/SVGPattern.ts) for the most up-to-date information.

## Overview

Creates an SVG pattern element for a given pattern.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class SVGPattern {: #SVGPattern }


```js
import { SVGPattern } from 'scenerystack/scenery';
```
### Constructor

#### new SVGPattern( pattern : <span style="font-weight: 400;">[Pattern](../scenery/Pattern.md)</span> ) {: #SVGPattern-constructor data-toc-label='new SVGPattern' }

### Instance Methods

#### initialize( pattern : <span style="font-weight: 400;">[Pattern](../scenery/Pattern.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #initialize data-toc-label='initialize' }

#### update() {: #update data-toc-label='update' }

Called from SVGBlock, matches other paints.

#### dispose() {: #dispose data-toc-label='dispose' }

Disposes, so that it can be reused from the pool.

#### freeToPool() {: #freeToPool data-toc-label='freeToPool' }

### Instance Properties

#### definition : <span style="font-weight: 400;">SVGPatternElement</span> {: #definition data-toc-label='definition' }

persistent

### Static Properties

#### pool : <span style="font-weight: 400;">[Pool](../phet-core/Pool.md)</span> {: #pool data-toc-label='pool' }

(readonly)



## Source Code

See the source for [SVGPattern.ts](https://github.com/phetsims/scenery/blob/main/js/display/SVGPattern.ts) in the [scenery](https://github.com/phetsims/scenery) repository.
