# Grayscale

## Overview

Grayscale filter

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class Grayscale {: #Grayscale }


```js
import { Grayscale } from 'scenerystack/scenery';
```
### Constructor

#### new Grayscale( amount ) {: #Grayscale-constructor data-toc-label='new Grayscale' }

### Instance Methods

#### getCSSFilterString() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> {: #getCSSFilterString data-toc-label='getCSSFilterString' }

Returns the CSS-style filter substring specific to this single filter, e.g. `grayscale(1)`. This should be used for
both DOM elements (https://developer.mozilla.org/en-US/docs/Web/CSS/filter) and when supported, Canvas
(https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/filter).

#### isDOMCompatible() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #isDOMCompatible data-toc-label='isDOMCompatible' }

### Static Properties

#### FULL : <span style="font-weight: 400;">[Grayscale](../scenery/Grayscale.md)</span> {: #FULL data-toc-label='FULL' }

(readonly)

Turns things fully gray-scale (instead of partially)



## Source Code

See the source for [Grayscale.ts](https://github.com/phetsims/scenery/blob/main/js/filters/Grayscale.ts) in the [scenery](https://github.com/phetsims/scenery) repository.
