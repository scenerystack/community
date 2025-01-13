# Invert

## Overview

Invert filter

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class Invert {: #Invert }


```js
import { Invert } from 'scenerystack/scenery';
```
### Constructor

#### new Invert( amount ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### getCSSFilterString() : <span style="font-weight: 400; opacity: 80%;">string</span> {: #getCSSFilterString data-toc-label='getCSSFilterString' }

Returns the CSS-style filter substring specific to this single filter, e.g. `grayscale(1)`. This should be used for
both DOM elements (https://developer.mozilla.org/en-US/docs/Web/CSS/filter) and when supported, Canvas
(https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/filter).

#### isDOMCompatible() : <span style="font-weight: 400; opacity: 80%;">boolean</span> {: #isDOMCompatible data-toc-label='isDOMCompatible' }

#### applyCanvasFilter( wrapper : <span style="font-weight: 400; opacity: 80%;">CanvasContextWrapper</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #applyCanvasFilter data-toc-label='applyCanvasFilter' }

#### applySVGFilter( svgFilter : <span style="font-weight: 400; opacity: 80%;">SVGFilterElement</span>, inName : <span style="font-weight: 400; opacity: 80%;">string</span>, resultName? : <span style="font-weight: 400; opacity: 80%;">string</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #applySVGFilter data-toc-label='applySVGFilter' }

### Static Properties

#### FULL : <span style="font-weight: 400; opacity: 80%;">Invert</span> {: #FULL data-toc-label='FULL' }

(readonly)



## Source Code

See the source for [Invert.ts](https://github.com/phetsims/scenery/blob/main/js/filters/Invert.ts) in the [scenery](https://github.com/phetsims/scenery) repository.
