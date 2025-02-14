# RenderColorSpace

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/alpenglow/blob/main/js/render-program/RenderColorSpace.ts](https://github.com/phetsims/alpenglow/blob/main/js/render-program/RenderColorSpace.ts) for the most up-to-date information.

## Overview

Enumeration of color spaces we'll want to convert from/to

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class RenderColorSpace {: #RenderColorSpace }


```js
import { RenderColorSpace } from 'scenerystack/alpenglow';
```
### Constructor

#### new RenderColorSpace( name : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span>, isPremultiplied : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span>, isLinear : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span>, toLinear? : <span style="font-weight: 400;">( color: [Vector4](../dot/Vector4.md) ) =&gt; [Vector4](../dot/Vector4.md)</span>, fromLinear? : <span style="font-weight: 400;">( color: [Vector4](../dot/Vector4.md) ) =&gt; [Vector4](../dot/Vector4.md)</span>, linearToLinearSRGB? : <span style="font-weight: 400;">( color: [Vector4](../dot/Vector4.md) ) =&gt; [Vector4](../dot/Vector4.md)</span>, linearSRGBToLinear? : <span style="font-weight: 400;">( color: [Vector4](../dot/Vector4.md) ) =&gt; [Vector4](../dot/Vector4.md)</span>, toLinearRenderProgram? : <span style="font-weight: 400;">( renderProgram: [RenderProgram](../alpenglow/RenderProgram.md) ) =&gt; [RenderProgram](../alpenglow/RenderProgram.md)</span>, fromLinearRenderProgram? : <span style="font-weight: 400;">( renderProgram: [RenderProgram](../alpenglow/RenderProgram.md) ) =&gt; [RenderProgram](../alpenglow/RenderProgram.md)</span>, linearToLinearSRGBRenderProgram? : <span style="font-weight: 400;">( renderProgram: [RenderProgram](../alpenglow/RenderProgram.md) ) =&gt; [RenderProgram](../alpenglow/RenderProgram.md)</span>, linearSRGBToLinearRenderProgram? : <span style="font-weight: 400;">( renderProgram: [RenderProgram](../alpenglow/RenderProgram.md) ) =&gt; [RenderProgram](../alpenglow/RenderProgram.md)</span> ) {: #RenderColorSpace-constructor data-toc-label='new RenderColorSpace' }

### Instance Methods



### Static Properties

#### XYZ : <span style="font-weight: 400;">[RenderColorSpace](../alpenglow/RenderColorSpace.md)</span> {: #XYZ data-toc-label='XYZ' }

(readonly)

TODO: better patterns for conversions
TODO: remove this or fully support it

#### xyY : <span style="font-weight: 400;">[RenderColorSpace](../alpenglow/RenderColorSpace.md)</span> {: #xyY data-toc-label='xyY' }

(readonly)

TODO: remove this or fully support it

#### sRGB : <span style="font-weight: 400;">[RenderColorSpace](../alpenglow/RenderColorSpace.md)</span> {: #sRGB data-toc-label='sRGB' }

(readonly)

#### premultipliedSRGB : <span style="font-weight: 400;">[RenderColorSpace](../alpenglow/RenderColorSpace.md)</span> {: #premultipliedSRGB data-toc-label='premultipliedSRGB' }

(readonly)

#### linearSRGB : <span style="font-weight: 400;">[RenderColorSpace](../alpenglow/RenderColorSpace.md)</span> {: #linearSRGB data-toc-label='linearSRGB' }

(readonly)

#### premultipliedLinearSRGB : <span style="font-weight: 400;">[RenderColorSpace](../alpenglow/RenderColorSpace.md)</span> {: #premultipliedLinearSRGB data-toc-label='premultipliedLinearSRGB' }

(readonly)

#### displayP3 : <span style="font-weight: 400;">[RenderColorSpace](../alpenglow/RenderColorSpace.md)</span> {: #displayP3 data-toc-label='displayP3' }

(readonly)

#### premultipliedDisplayP3 : <span style="font-weight: 400;">[RenderColorSpace](../alpenglow/RenderColorSpace.md)</span> {: #premultipliedDisplayP3 data-toc-label='premultipliedDisplayP3' }

(readonly)

#### linearDisplayP3 : <span style="font-weight: 400;">[RenderColorSpace](../alpenglow/RenderColorSpace.md)</span> {: #linearDisplayP3 data-toc-label='linearDisplayP3' }

(readonly)

#### premultipliedLinearDisplayP3 : <span style="font-weight: 400;">[RenderColorSpace](../alpenglow/RenderColorSpace.md)</span> {: #premultipliedLinearDisplayP3 data-toc-label='premultipliedLinearDisplayP3' }

(readonly)

#### oklab : <span style="font-weight: 400;">[RenderColorSpace](../alpenglow/RenderColorSpace.md)</span> {: #oklab data-toc-label='oklab' }

(readonly)

#### premultipliedOklab : <span style="font-weight: 400;">[RenderColorSpace](../alpenglow/RenderColorSpace.md)</span> {: #premultipliedOklab data-toc-label='premultipliedOklab' }

(readonly)



## Source Code

See the source for [RenderColorSpace.ts](https://github.com/phetsims/alpenglow/blob/main/js/render-program/RenderColorSpace.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
