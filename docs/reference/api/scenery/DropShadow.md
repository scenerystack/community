# DropShadow

## Overview

DropShadow filter

EXPERIMENTAL! DO not use in production code yet

TODO: preventFit OR handle bounds increase (or both) https://github.com/phetsims/scenery/issues/1581

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class DropShadow {: #DropShadow }


```js
import { DropShadow } from 'scenerystack/scenery';
```
### Constructor

#### new DropShadow( offset : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span>, blurRadius : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, color : <span style="font-weight: 400;">[TColor](../scenery/TColor.md)</span>, filterRegionPercentage ) {: #DropShadow-constructor data-toc-label='new DropShadow' }

### Instance Methods

#### getCSSFilterString() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> {: #getCSSFilterString data-toc-label='getCSSFilterString' }

Returns the CSS-style filter substring specific to this single filter, e.g. `grayscale(1)`. This should be used for
both DOM elements (https://developer.mozilla.org/en-US/docs/Web/CSS/filter) and when supported, Canvas
(https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/filter).

#### isDOMCompatible() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #isDOMCompatible data-toc-label='isDOMCompatible' }

#### applyCanvasFilter() {: #applyCanvasFilter data-toc-label='applyCanvasFilter' }

#### applySVGFilter( svgFilter : <span style="font-weight: 400;">SVGFilterElement</span>, inName : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span>, resultName? : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> ) {: #applySVGFilter data-toc-label='applySVGFilter' }



## Source Code

See the source for [DropShadow.ts](https://github.com/phetsims/scenery/blob/main/js/filters/DropShadow.ts) in the [scenery](https://github.com/phetsims/scenery) repository.
