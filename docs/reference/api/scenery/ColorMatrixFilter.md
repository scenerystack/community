# ColorMatrixFilter

## Overview

A filter that can be represented by a single color matrix operation

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class ColorMatrixFilter {: #ColorMatrixFilter }


```js
import { ColorMatrixFilter } from 'scenerystack/scenery';
```
### Constructor

#### new ColorMatrixFilter( m00 : <span style="font-weight: 400; opacity: 80%;">number</span>, m01 : <span style="font-weight: 400; opacity: 80%;">number</span>, m02 : <span style="font-weight: 400; opacity: 80%;">number</span>, m03 : <span style="font-weight: 400; opacity: 80%;">number</span>, m04 : <span style="font-weight: 400; opacity: 80%;">number</span>, m10 : <span style="font-weight: 400; opacity: 80%;">number</span>, m11 : <span style="font-weight: 400; opacity: 80%;">number</span>, m12 : <span style="font-weight: 400; opacity: 80%;">number</span>, m13 : <span style="font-weight: 400; opacity: 80%;">number</span>, m14 : <span style="font-weight: 400; opacity: 80%;">number</span>, m20 : <span style="font-weight: 400; opacity: 80%;">number</span>, m21 : <span style="font-weight: 400; opacity: 80%;">number</span>, m22 : <span style="font-weight: 400; opacity: 80%;">number</span>, m23 : <span style="font-weight: 400; opacity: 80%;">number</span>, m24 : <span style="font-weight: 400; opacity: 80%;">number</span>, m30 : <span style="font-weight: 400; opacity: 80%;">number</span>, m31 : <span style="font-weight: 400; opacity: 80%;">number</span>, m32 : <span style="font-weight: 400; opacity: 80%;">number</span>, m33 : <span style="font-weight: 400; opacity: 80%;">number</span>, m34 : <span style="font-weight: 400; opacity: 80%;">number</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### applySVGFilter( svgFilter : <span style="font-weight: 400; opacity: 80%;">SVGFilterElement</span>, inName : <span style="font-weight: 400; opacity: 80%;">string</span>, resultName? : <span style="font-weight: 400; opacity: 80%;">string</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #applySVGFilter data-toc-label='applySVGFilter' }

Appends filter sub-elements into the SVG filter element provided. Should include an in=${inName} for all inputs,
and should either output using the resultName (or if not provided, the last element appended should be the output).
This effectively mutates the provided filter object, and will be successively called on all Filters to build an
SVG filter object.

#### applyCanvasFilter( wrapper : <span style="font-weight: 400; opacity: 80%;">CanvasContextWrapper</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #applyCanvasFilter data-toc-label='applyCanvasFilter' }

Given a specific canvas/context wrapper, this method should mutate its state so that the canvas now holds the
filtered content. Usually this would be by using getImageData/putImageData, however redrawing or other operations
are also possible.

#### isSVGCompatible() : <span style="font-weight: 400; opacity: 80%;">boolean</span> {: #isSVGCompatible data-toc-label='isSVGCompatible' }

#### isCanvasCompatible() : <span style="font-weight: 400; opacity: 80%;">boolean</span> {: #isCanvasCompatible data-toc-label='isCanvasCompatible' }

#### getCSSFilterString() : <span style="font-weight: 400; opacity: 80%;">string</span> {: #getCSSFilterString data-toc-label='getCSSFilterString' }



## Source Code

See the source for [ColorMatrixFilter.ts](https://github.com/phetsims/scenery/blob/main/js/filters/ColorMatrixFilter.ts) in the [scenery](https://github.com/phetsims/scenery) repository.
