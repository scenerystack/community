# Brightness

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/scenery/blob/main/js/filters/Brightness.ts](https://github.com/phetsims/scenery/blob/main/js/filters/Brightness.ts) for the most up-to-date information.

## Overview

Brightness filter

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class Brightness {: #Brightness }


```js
import { Brightness } from 'scenerystack/scenery';
```
### Constructor

#### new Brightness( amount : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) {: #Brightness-constructor data-toc-label='new Brightness' }

### Instance Methods

#### getCSSFilterString() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> {: #getCSSFilterString data-toc-label='getCSSFilterString' }

Returns the CSS-style filter substring specific to this single filter, e.g. `grayscale(1)`. This should be used for
both DOM elements (https://developer.mozilla.org/en-US/docs/Web/CSS/filter) and when supported, Canvas
(https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/filter).

#### isDOMCompatible() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #isDOMCompatible data-toc-label='isDOMCompatible' }

### Static Properties

#### BLACKEN : <span style="font-weight: 400;">[Brightness](../scenery/Brightness.md)</span> {: #BLACKEN data-toc-label='BLACKEN' }

(readonly)

Fully darkens the content



## Source Code

See the source for [Brightness.ts](https://github.com/phetsims/scenery/blob/main/js/filters/Brightness.ts) in the [scenery](https://github.com/phetsims/scenery) repository.
