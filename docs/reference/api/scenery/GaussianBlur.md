# GaussianBlur

## Overview

GaussianBlur filter

EXPERIMENTAL! DO not use in production code yet

TODO: preventFit OR handle bounds increase (or both) https://github.com/phetsims/scenery/issues/1581

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class GaussianBlur {: #GaussianBlur }


```js
import { GaussianBlur } from 'scenerystack/scenery';
```
### Constructor

#### new GaussianBlur( standardDeviation : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, filterRegionPercentage ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### getCSSFilterString() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> {: #getCSSFilterString data-toc-label='getCSSFilterString' }

Returns the CSS-style filter substring specific to this single filter, e.g. `grayscale(1)`. This should be used for
both DOM elements (https://developer.mozilla.org/en-US/docs/Web/CSS/filter) and when supported, Canvas
(https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/filter).

#### applySVGFilter( svgFilter : <span style="font-weight: 400;">SVGFilterElement</span>, inName : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span>, resultName? : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> ) {: #applySVGFilter data-toc-label='applySVGFilter' }

Appends filter sub-elements into the SVG filter element provided. Should include an in=${inName} for all inputs,
and should either output using the resultName (or if not provided, the last element appended should be the output).
This effectively mutates the provided filter object, and will be successively called on all Filters to build an
SVG filter object.

#### isDOMCompatible() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #isDOMCompatible data-toc-label='isDOMCompatible' }

#### isSVGCompatible() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #isSVGCompatible data-toc-label='isSVGCompatible' }

#### applyCanvasFilter( wrapper : <span style="font-weight: 400;">[CanvasContextWrapper](../scenery/CanvasContextWrapper.md)</span> ) {: #applyCanvasFilter data-toc-label='applyCanvasFilter' }



## Source Code

See the source for [GaussianBlur.ts](https://github.com/phetsims/scenery/blob/main/js/filters/GaussianBlur.ts) in the [scenery](https://github.com/phetsims/scenery) repository.
