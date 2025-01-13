# Opacity

## Overview

Opacity filter

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class Opacity {: #Opacity }


```js
import { Opacity } from 'scenerystack/scenery';
```
### Constructor

#### new Opacity( amount : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### getCSSFilterString() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> {: #getCSSFilterString data-toc-label='getCSSFilterString' }

Returns the CSS-style filter substring specific to this single filter, e.g. `grayscale(1)`. This should be used for
both DOM elements (https://developer.mozilla.org/en-US/docs/Web/CSS/filter) and when supported, Canvas
(https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/filter).

#### isDOMCompatible() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #isDOMCompatible data-toc-label='isDOMCompatible' }

#### applyCanvasFilter( wrapper : <span style="font-weight: 400;">[CanvasContextWrapper](../scenery/CanvasContextWrapper.md)</span> ) {: #applyCanvasFilter data-toc-label='applyCanvasFilter' }

#### applySVGFilter( svgFilter : <span style="font-weight: 400;">SVGFilterElement</span>, inName : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span>, resultName? : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> ) {: #applySVGFilter data-toc-label='applySVGFilter' }



## Source Code

See the source for [Opacity.ts](https://github.com/phetsims/scenery/blob/main/js/filters/Opacity.ts) in the [scenery](https://github.com/phetsims/scenery) repository.
