# ShadedRectangle

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/scenery-phet/blob/main/js/ShadedRectangle.ts](https://github.com/phetsims/scenery-phet/blob/main/js/ShadedRectangle.ts) for the most up-to-date information.

## Overview

A rectangle with pseudo-3D shading.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class ShadedRectangle {: #ShadedRectangle }


```js
import { ShadedRectangle } from 'scenerystack/scenery-phet';
```
### Constructor

#### new ShadedRectangle( rectBounds : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md)</span>, providedOptions? : <span style="font-weight: 400;">[ShadedRectangleOptions](../scenery-phet/ShadedRectangle.md#ShadedRectangleOptions)</span> ) {: #ShadedRectangle-constructor data-toc-label='new ShadedRectangle' }

### Instance Methods

#### dispose() {: #dispose data-toc-label='dispose' }



## Type ShadedRectangleOptions {: #ShadedRectangleOptions }


```js
import type { ShadedRectangleOptions } from 'scenerystack/scenery-phet';
```


- **baseColor**?: [TColor](../scenery/TColor.md)
- **lightFactor**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **lighterFactor**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **darkFactor**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **darkerFactor**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **cornerRadius**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **lightSource**?: LightSource
- **lightOffset**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
<br>  What fraction of the cornerRadius should the light and dark gradients extend into the rectangle?
  Should always be less than 1.
- **darkOffset**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- &amp; [NodeOptions](../scenery/Node.md#NodeOptions)




## Source Code

See the source for [ShadedRectangle.ts](https://github.com/phetsims/scenery-phet/blob/main/js/ShadedRectangle.ts) in the [scenery-phet](https://github.com/phetsims/scenery-phet) repository.
