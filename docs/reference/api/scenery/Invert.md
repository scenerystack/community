# Invert

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/scenery/blob/main/js/filters/Invert.ts](https://github.com/phetsims/scenery/blob/main/js/filters/Invert.ts) for the most up-to-date information.

## Overview

Invert filter

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class Invert {: #Invert }


```js
import { Invert } from 'scenerystack/scenery';
```
### Constructor

#### new Invert( amount ) {: #Invert-constructor data-toc-label='new Invert' }

### Instance Methods

#### getCSSFilterString() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> {: #getCSSFilterString data-toc-label='getCSSFilterString' }

Returns the CSS-style filter substring specific to this single filter, e.g. `grayscale(1)`. This should be used for
both DOM elements (https://developer.mozilla.org/en-US/docs/Web/CSS/filter) and when supported, Canvas
(https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/filter).

#### isDOMCompatible() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #isDOMCompatible data-toc-label='isDOMCompatible' }

#### applyCanvasFilter( wrapper : <span style="font-weight: 400;">[CanvasContextWrapper](../scenery/CanvasContextWrapper.md)</span> ) {: #applyCanvasFilter data-toc-label='applyCanvasFilter' }

#### applySVGFilter( svgFilter : <span style="font-weight: 400;">SVGFilterElement</span>, inName : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span>, resultName? : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> ) {: #applySVGFilter data-toc-label='applySVGFilter' }

### Static Properties

#### FULL : <span style="font-weight: 400;">[Invert](../scenery/Invert.md)</span> {: #FULL data-toc-label='FULL' }

(readonly)



## Source Code

See the source for [Invert.ts](https://github.com/phetsims/scenery/blob/main/js/filters/Invert.ts) in the [scenery](https://github.com/phetsims/scenery) repository.
