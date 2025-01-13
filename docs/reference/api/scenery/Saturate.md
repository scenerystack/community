# Saturate

## Overview

Saturate filter

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class Saturate {: #Saturate }


```js
import { Saturate } from 'scenerystack/scenery';
```
### Constructor

#### new Saturate( amount : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### getCSSFilterString() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> {: #getCSSFilterString data-toc-label='getCSSFilterString' }

Returns the CSS-style filter substring specific to this single filter, e.g. `grayscale(1)`. This should be used for
both DOM elements (https://developer.mozilla.org/en-US/docs/Web/CSS/filter) and when supported, Canvas
(https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/filter).

#### isDOMCompatible() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #isDOMCompatible data-toc-label='isDOMCompatible' }



## Source Code

See the source for [Saturate.ts](https://github.com/phetsims/scenery/blob/main/js/filters/Saturate.ts) in the [scenery](https://github.com/phetsims/scenery) repository.
