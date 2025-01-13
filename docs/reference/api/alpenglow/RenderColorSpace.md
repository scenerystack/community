# RenderColorSpace

## Overview

Enumeration of color spaces we'll want to convert from/to

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class RenderColorSpace {: #RenderColorSpace }


```js
import { RenderColorSpace } from 'scenerystack/alpenglow';
```
### Constructor

#### new RenderColorSpace( name : <span style="font-weight: 400; opacity: 80%;">string</span>, isPremultiplied : <span style="font-weight: 400; opacity: 80%;">boolean</span>, isLinear : <span style="font-weight: 400; opacity: 80%;">boolean</span>, toLinear? : <span style="font-weight: 400; opacity: 80%;">( color: Vector4 ) =&gt; Vector4</span>, fromLinear? : <span style="font-weight: 400; opacity: 80%;">( color: Vector4 ) =&gt; Vector4</span>, linearToLinearSRGB? : <span style="font-weight: 400; opacity: 80%;">( color: Vector4 ) =&gt; Vector4</span>, linearSRGBToLinear? : <span style="font-weight: 400; opacity: 80%;">( color: Vector4 ) =&gt; Vector4</span>, toLinearRenderProgram? : <span style="font-weight: 400; opacity: 80%;">( renderProgram: RenderProgram ) =&gt; RenderProgram</span>, fromLinearRenderProgram? : <span style="font-weight: 400; opacity: 80%;">( renderProgram: RenderProgram ) =&gt; RenderProgram</span>, linearToLinearSRGBRenderProgram? : <span style="font-weight: 400; opacity: 80%;">( renderProgram: RenderProgram ) =&gt; RenderProgram</span>, linearSRGBToLinearRenderProgram? : <span style="font-weight: 400; opacity: 80%;">( renderProgram: RenderProgram ) =&gt; RenderProgram</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods



### Static Properties

#### XYZ : <span style="font-weight: 400; opacity: 80%;">RenderColorSpace</span> {: #XYZ data-toc-label='XYZ' }

(readonly)

TODO: better patterns for conversions
TODO: remove this or fully support it

#### xyY : <span style="font-weight: 400; opacity: 80%;">RenderColorSpace</span> {: #xyY data-toc-label='xyY' }

(readonly)

TODO: remove this or fully support it

#### sRGB : <span style="font-weight: 400; opacity: 80%;">RenderColorSpace</span> {: #sRGB data-toc-label='sRGB' }

(readonly)

#### premultipliedSRGB : <span style="font-weight: 400; opacity: 80%;">RenderColorSpace</span> {: #premultipliedSRGB data-toc-label='premultipliedSRGB' }

(readonly)

#### linearSRGB : <span style="font-weight: 400; opacity: 80%;">RenderColorSpace</span> {: #linearSRGB data-toc-label='linearSRGB' }

(readonly)

#### premultipliedLinearSRGB : <span style="font-weight: 400; opacity: 80%;">RenderColorSpace</span> {: #premultipliedLinearSRGB data-toc-label='premultipliedLinearSRGB' }

(readonly)

#### displayP3 : <span style="font-weight: 400; opacity: 80%;">RenderColorSpace</span> {: #displayP3 data-toc-label='displayP3' }

(readonly)

#### premultipliedDisplayP3 : <span style="font-weight: 400; opacity: 80%;">RenderColorSpace</span> {: #premultipliedDisplayP3 data-toc-label='premultipliedDisplayP3' }

(readonly)

#### linearDisplayP3 : <span style="font-weight: 400; opacity: 80%;">RenderColorSpace</span> {: #linearDisplayP3 data-toc-label='linearDisplayP3' }

(readonly)

#### premultipliedLinearDisplayP3 : <span style="font-weight: 400; opacity: 80%;">RenderColorSpace</span> {: #premultipliedLinearDisplayP3 data-toc-label='premultipliedLinearDisplayP3' }

(readonly)

#### oklab : <span style="font-weight: 400; opacity: 80%;">RenderColorSpace</span> {: #oklab data-toc-label='oklab' }

(readonly)

#### premultipliedOklab : <span style="font-weight: 400; opacity: 80%;">RenderColorSpace</span> {: #premultipliedOklab data-toc-label='premultipliedOklab' }

(readonly)



## Source Code

See the source for [RenderColorSpace.ts](https://github.com/phetsims/alpenglow/blob/main/js/render-program/RenderColorSpace.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
