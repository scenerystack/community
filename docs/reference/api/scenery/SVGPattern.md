# SVGPattern

## Overview

Creates an SVG pattern element for a given pattern.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class SVGPattern {: #SVGPattern }


```js
import { SVGPattern } from 'scenerystack/scenery';
```
### Constructor

#### new SVGPattern( pattern : <span style="font-weight: 400; opacity: 80%;">Pattern</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### initialize( pattern : <span style="font-weight: 400; opacity: 80%;">Pattern</span> ) : <span style="font-weight: 400; opacity: 80%;">this</span> {: #initialize data-toc-label='initialize' }

#### update() : <span style="font-weight: 400; opacity: 80%;">void</span> {: #update data-toc-label='update' }

Called from SVGBlock, matches other paints.

#### dispose() : <span style="font-weight: 400; opacity: 80%;">void</span> {: #dispose data-toc-label='dispose' }

Disposes, so that it can be reused from the pool.

#### freeToPool() : <span style="font-weight: 400; opacity: 80%;">void</span> {: #freeToPool data-toc-label='freeToPool' }

### Instance Properties

#### definition : <span style="font-weight: 400; opacity: 80%;">SVGPatternElement</span> {: #definition data-toc-label='definition' }

persistent

### Static Properties

#### pool : <span style="font-weight: 400; opacity: 80%;">Pool</span> {: #pool data-toc-label='pool' }

(readonly)



## Source Code

See the source for [SVGPattern.ts](https://github.com/phetsims/scenery/blob/main/js/display/SVGPattern.ts) in the [scenery](https://github.com/phetsims/scenery) repository.
