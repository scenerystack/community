# Filter

## Overview

Base type for filters

Filters have different ways of being applied, depending on what the platform supports AND what content is below.
These different ways have potentially different performance characteristics, and potentially quality differences.

The current ways are:
- DOM element with CSS filter specified (can include mixed content and WebGL underneath, and this is used as a
  general fallback). NOTE: General color matrix support is NOT provided under this, we only have specific named
  filters that can be used.
- SVG filter elements (which are very flexible, a combination of filters may be combined into SVG filter elements).
  This only works if ALL of the content under the filter(s) can be placed in one SVG element, so a layerSplit or
  non-SVG content can prevent this from being used.
- Canvas filter attribute (similar to DOM CSS). Similar to DOM CSS, but not as accelerated (requires applying the
  filter by drawing into another Canvas). Chromium-based browsers seem to have issues with the color space used,
  so this can't be used on that platform. Additionally, this only works if ALL the content under the filter(s) can
  be placed in one Canvas, so a layerSplit or non-SVG content can prevent this from being used.
- Canvas ImageData. This is a fallback where we directly get, manipulate, and set pixel data in a Canvas (with the
  corresponding performance hit that it takes to CPU-process every pixel). Additionally, this only works if ALL the
  content under the filter(s) can   be placed in one Canvas, so a layerSplit or non-SVG content can prevent this from
  being used.

Some filters may have slightly different appearances depending on the browser/platform/renderer.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class Filter {: #Filter }


```js
import { Filter } from 'scenerystack/scenery';
```
### Constructor

#### new Filter() {: #constructor data-toc-label='constructor' }

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

#### applyCanvasFilter( wrapper : <span style="font-weight: 400;">[CanvasContextWrapper](../scenery/CanvasContextWrapper.md)</span> ) {: #applyCanvasFilter data-toc-label='applyCanvasFilter' }

Given a specific canvas/context wrapper, this method should mutate its state so that the canvas now holds the
filtered content. Usually this would be by using getImageData/putImageData, however redrawing or other operations
are also possible.

#### isDOMCompatible() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #isDOMCompatible data-toc-label='isDOMCompatible' }

#### isSVGCompatible() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #isSVGCompatible data-toc-label='isSVGCompatible' }

#### isCanvasCompatible() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #isCanvasCompatible data-toc-label='isCanvasCompatible' }

#### isWebGLCompatible() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #isWebGLCompatible data-toc-label='isWebGLCompatible' }

#### toString() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> {: #toString data-toc-label='toString' }

Returns a string form of this object

### Instance Properties

#### filterRegionPercentageIncrease : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #filterRegionPercentageIncrease data-toc-label='filterRegionPercentageIncrease' }

Can be mutated by subtypes, determines what filter region increases should be used for when SVG is used for
rendering.

### Static Methods

#### applyColorMatrix( matrixValues : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span>, svgFilter : <span style="font-weight: 400;">SVGFilterElement</span>, inName : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span>, resultName? : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> ) {: #applyColorMatrix data-toc-label='applyColorMatrix' }

Applies a color matrix effect into an existing SVG filter.



## Source Code

See the source for [Filter.ts](https://github.com/phetsims/scenery/blob/main/js/filters/Filter.ts) in the [scenery](https://github.com/phetsims/scenery) repository.
