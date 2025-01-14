# Contrast

## Overview

Contrast filter

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class Contrast {: #Contrast }


```js
import { Contrast } from 'scenerystack/scenery';
```
### Constructor

#### new Contrast( amount : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) {: #Contrast-constructor data-toc-label='new Contrast' }

### Instance Methods

#### getCSSFilterString() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> {: #getCSSFilterString data-toc-label='getCSSFilterString' }

Returns the CSS-style filter substring specific to this single filter, e.g. `grayscale(1)`. This should be used for
both DOM elements (https://developer.mozilla.org/en-US/docs/Web/CSS/filter) and when supported, Canvas
(https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/filter).

#### isDOMCompatible() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #isDOMCompatible data-toc-label='isDOMCompatible' }

### Static Properties

#### GRAY : <span style="font-weight: 400;">[Contrast](../scenery/Contrast.md)</span> {: #GRAY data-toc-label='GRAY' }

(readonly)

Turns the content gray



## Source Code

See the source for [Contrast.ts](https://github.com/phetsims/scenery/blob/main/js/filters/Contrast.ts) in the [scenery](https://github.com/phetsims/scenery) repository.
