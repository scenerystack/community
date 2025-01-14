# RenderColor

## Overview

RenderColor displays a single solid color everywhere, and is a basic building-block for many other RenderPrograms.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class RenderColor {: #RenderColor }


```js
import { RenderColor } from 'scenerystack/alpenglow';
```
### Constructor

#### new RenderColor( color : <span style="font-weight: 400;">[Vector4](../dot/Vector4.md)</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### getName() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> {: #getName data-toc-label='getName' }

#### withChildren( children : <span style="font-weight: 400;">[RenderProgram](../alpenglow/RenderProgram.md)[]</span> ) : <span style="font-weight: 400;">[RenderColor](../alpenglow/RenderColor.md)</span> {: #withChildren data-toc-label='withChildren' }

#### equalsTyped( other : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #equalsTyped data-toc-label='equalsTyped' }

(protected)

#### evaluate( context : <span style="font-weight: 400;">[RenderEvaluationContext](../alpenglow/RenderEvaluationContext.md)</span> ) : <span style="font-weight: 400;">[Vector4](../dot/Vector4.md)</span> {: #evaluate data-toc-label='evaluate' }

#### writeInstructions( instructions : <span style="font-weight: 400;">[RenderInstruction](../alpenglow/RenderInstruction.md)[]</span> ) {: #writeInstructions data-toc-label='writeInstructions' }

#### getExtraDebugString() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> {: #getExtraDebugString data-toc-label='getExtraDebugString' }

(protected)

#### serialize() : <span style="font-weight: 400;">[SerializedRenderColor](../alpenglow/RenderColor.md#SerializedRenderColor)</span> {: #serialize data-toc-label='serialize' }

### Static Methods

#### applyProgram( vector : <span style="font-weight: 400;">[Vector4](../dot/Vector4.md)</span>, color : <span style="font-weight: 400;">[Vector4](../dot/Vector4.md)</span> ) {: #applyProgram data-toc-label='applyProgram' }

#### sRGBToLinear( sRGB : <span style="font-weight: 400;">[Vector4](../dot/Vector4.md)</span> ) : <span style="font-weight: 400;">[Vector4](../dot/Vector4.md)</span> {: #sRGBToLinear data-toc-label='sRGBToLinear' }

#### linearToSRGB( linear : <span style="font-weight: 400;">[Vector4](../dot/Vector4.md)</span> ) : <span style="font-weight: 400;">[Vector4](../dot/Vector4.md)</span> {: #linearToSRGB data-toc-label='linearToSRGB' }

#### linearToOklab( linear : <span style="font-weight: 400;">[Vector4](../dot/Vector4.md)</span> ) : <span style="font-weight: 400;">[Vector4](../dot/Vector4.md)</span> {: #linearToOklab data-toc-label='linearToOklab' }

Oklab is a perceptually uniform color space, which is useful for color blending.
https://bottosson.github.io/posts/oklab/
returned as (L,a,b,alpha)

#### oklabToLinear( oklab : <span style="font-weight: 400;">[Vector4](../dot/Vector4.md)</span> ) : <span style="font-weight: 400;">[Vector4](../dot/Vector4.md)</span> {: #oklabToLinear data-toc-label='oklabToLinear' }

#### multiplyMatrixTimesColor( matrix : <span style="font-weight: 400;">[Matrix3](../dot/Matrix3.md)</span>, color : <span style="font-weight: 400;">[Vector4](../dot/Vector4.md)</span> ) : <span style="font-weight: 400;">[Vector4](../dot/Vector4.md)</span> {: #multiplyMatrixTimesColor data-toc-label='multiplyMatrixTimesColor' }

#### linearToLinearDisplayP3( color : <span style="font-weight: 400;">[Vector4](../dot/Vector4.md)</span> ) : <span style="font-weight: 400;">[Vector4](../dot/Vector4.md)</span> {: #linearToLinearDisplayP3 data-toc-label='linearToLinearDisplayP3' }

#### linearDisplayP3ToLinear( color : <span style="font-weight: 400;">[Vector4](../dot/Vector4.md)</span> ) : <span style="font-weight: 400;">[Vector4](../dot/Vector4.md)</span> {: #linearDisplayP3ToLinear data-toc-label='linearDisplayP3ToLinear' }

#### linearDisplayP3ToDisplayP3( linear : <span style="font-weight: 400;">[Vector4](../dot/Vector4.md)</span> ) : <span style="font-weight: 400;">[Vector4](../dot/Vector4.md)</span> {: #linearDisplayP3ToDisplayP3 data-toc-label='linearDisplayP3ToDisplayP3' }

#### displayP3ToLinearDisplayP3( displayP3 : <span style="font-weight: 400;">[Vector4](../dot/Vector4.md)</span> ) : <span style="font-weight: 400;">[Vector4](../dot/Vector4.md)</span> {: #displayP3ToLinearDisplayP3 data-toc-label='displayP3ToLinearDisplayP3' }

#### oklabToOklch( oklab : <span style="font-weight: 400;">[Vector4](../dot/Vector4.md)</span> ) : <span style="font-weight: 400;">[Vector4](../dot/Vector4.md)</span> {: #oklabToOklch data-toc-label='oklabToOklch' }

A radian-based oklch?

#### oklchToOklab( oklch : <span style="font-weight: 400;">[Vector4](../dot/Vector4.md)</span> ) : <span style="font-weight: 400;">[Vector4](../dot/Vector4.md)</span> {: #oklchToOklab data-toc-label='oklchToOklab' }

A radian-based oklch

#### linearToOklch( linear : <span style="font-weight: 400;">[Vector4](../dot/Vector4.md)</span> ) : <span style="font-weight: 400;">[Vector4](../dot/Vector4.md)</span> {: #linearToOklch data-toc-label='linearToOklch' }

#### oklchToLinear( oklch : <span style="font-weight: 400;">[Vector4](../dot/Vector4.md)</span> ) : <span style="font-weight: 400;">[Vector4](../dot/Vector4.md)</span> {: #oklchToLinear data-toc-label='oklchToLinear' }

TODO: consistent "linear" naming? (means linear SRGB here)

#### linearDisplayP3ToOklch( linear : <span style="font-weight: 400;">[Vector4](../dot/Vector4.md)</span> ) : <span style="font-weight: 400;">[Vector4](../dot/Vector4.md)</span> {: #linearDisplayP3ToOklch data-toc-label='linearDisplayP3ToOklch' }

#### oklchToLinearDisplayP3( oklch : <span style="font-weight: 400;">[Vector4](../dot/Vector4.md)</span> ) : <span style="font-weight: 400;">[Vector4](../dot/Vector4.md)</span> {: #oklchToLinearDisplayP3 data-toc-label='oklchToLinearDisplayP3' }

#### convert( color : <span style="font-weight: 400;">[Vector4](../dot/Vector4.md)</span>, fromSpace : <span style="font-weight: 400;">[RenderColorSpace](../alpenglow/RenderColorSpace.md)</span>, toSpace : <span style="font-weight: 400;">[RenderColorSpace](../alpenglow/RenderColorSpace.md)</span> ) : <span style="font-weight: 400;">[Vector4](../dot/Vector4.md)</span> {: #convert data-toc-label='convert' }

#### isColorInRange( color : <span style="font-weight: 400;">[Vector4](../dot/Vector4.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #isColorInRange data-toc-label='isColorInRange' }

ONLY remaps the r,g,b parts, not alpha

#### gamutMapColor( color : <span style="font-weight: 400;">[Vector4](../dot/Vector4.md)</span>, toOklab : <span style="font-weight: 400;">( c: [Vector4](../dot/Vector4.md) ) =&gt; [Vector4](../dot/Vector4.md)</span>, fromOklab : <span style="font-weight: 400;">( c: [Vector4](../dot/Vector4.md) ) =&gt; [Vector4](../dot/Vector4.md)</span> ) : <span style="font-weight: 400;">[Vector4](../dot/Vector4.md)</span> {: #gamutMapColor data-toc-label='gamutMapColor' }

Relative colorimetric mapping. We could add more of a perceptual intent, but this is a good start.

Modeled after https://drafts.csswg.org/css-color-4/#binsearch

#### gamutMapLinearSRGB( color : <span style="font-weight: 400;">[Vector4](../dot/Vector4.md)</span> ) : <span style="font-weight: 400;">[Vector4](../dot/Vector4.md)</span> {: #gamutMapLinearSRGB data-toc-label='gamutMapLinearSRGB' }

#### gamutMapLinearDisplayP3( color : <span style="font-weight: 400;">[Vector4](../dot/Vector4.md)</span> ) : <span style="font-weight: 400;">[Vector4](../dot/Vector4.md)</span> {: #gamutMapLinearDisplayP3 data-toc-label='gamutMapLinearDisplayP3' }

#### gamutMapSRGB( color : <span style="font-weight: 400;">[Vector4](../dot/Vector4.md)</span> ) : <span style="font-weight: 400;">[Vector4](../dot/Vector4.md)</span> {: #gamutMapSRGB data-toc-label='gamutMapSRGB' }

#### gamutMapDisplayP3( color : <span style="font-weight: 400;">[Vector4](../dot/Vector4.md)</span> ) : <span style="font-weight: 400;">[Vector4](../dot/Vector4.md)</span> {: #gamutMapDisplayP3 data-toc-label='gamutMapDisplayP3' }

#### gamutMapPremultipliedSRGB( color : <span style="font-weight: 400;">[Vector4](../dot/Vector4.md)</span> ) : <span style="font-weight: 400;">[Vector4](../dot/Vector4.md)</span> {: #gamutMapPremultipliedSRGB data-toc-label='gamutMapPremultipliedSRGB' }

OUTPUTS unpremultiplied sRGB, with a valid alpha value

#### gamutMapPremultipliedDisplayP3( color : <span style="font-weight: 400;">[Vector4](../dot/Vector4.md)</span> ) : <span style="font-weight: 400;">[Vector4](../dot/Vector4.md)</span> {: #gamutMapPremultipliedDisplayP3 data-toc-label='gamutMapPremultipliedDisplayP3' }

OUTPUTS unpremultiplied Display P3, with a valid alpha value

#### oklabToLinearDisplayP3( oklab : <span style="font-weight: 400;">[Vector4](../dot/Vector4.md)</span> ) : <span style="font-weight: 400;">[Vector4](../dot/Vector4.md)</span> {: #oklabToLinearDisplayP3 data-toc-label='oklabToLinearDisplayP3' }

#### linearDisplayP3ToOklab( linearP3 : <span style="font-weight: 400;">[Vector4](../dot/Vector4.md)</span> ) : <span style="font-weight: 400;">[Vector4](../dot/Vector4.md)</span> {: #linearDisplayP3ToOklab data-toc-label='linearDisplayP3ToOklab' }

#### premultiply( color : <span style="font-weight: 400;">[Vector4](../dot/Vector4.md)</span> ) : <span style="font-weight: 400;">[Vector4](../dot/Vector4.md)</span> {: #premultiply data-toc-label='premultiply' }

#### unpremultiply( color : <span style="font-weight: 400;">[Vector4](../dot/Vector4.md)</span> ) : <span style="font-weight: 400;">[Vector4](../dot/Vector4.md)</span> {: #unpremultiply data-toc-label='unpremultiply' }

#### xyYToXYZ( xyY : <span style="font-weight: 400;">[Vector3](../dot/Vector3.md)</span> ) : <span style="font-weight: 400;">[Vector3](../dot/Vector3.md)</span> {: #xyYToXYZ data-toc-label='xyYToXYZ' }

#### xyToXYZ( xy : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> ) : <span style="font-weight: 400;">[Vector3](../dot/Vector3.md)</span> {: #xyToXYZ data-toc-label='xyToXYZ' }

#### xyzToLinear( xyz : <span style="font-weight: 400;">[Vector4](../dot/Vector4.md)</span> ) : <span style="font-weight: 400;">[Vector4](../dot/Vector4.md)</span> {: #xyzToLinear data-toc-label='xyzToLinear' }

#### linearToXYZ( linear : <span style="font-weight: 400;">[Vector4](../dot/Vector4.md)</span> ) : <span style="font-weight: 400;">[Vector4](../dot/Vector4.md)</span> {: #linearToXYZ data-toc-label='linearToXYZ' }

#### getMatrixRGBToXYZ( redChromaticity : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span>, greenChromaticity : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span>, blueChromaticity : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span>, whiteChromaticity : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> ) : <span style="font-weight: 400;">[Matrix3](../dot/Matrix3.md)</span> {: #getMatrixRGBToXYZ data-toc-label='getMatrixRGBToXYZ' }

#### canvasSupportsDisplayP3() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #canvasSupportsDisplayP3 data-toc-label='canvasSupportsDisplayP3' }

#### ratioBlend( zeroColor : <span style="font-weight: 400;">[Vector4](../dot/Vector4.md)</span>, oneColor : <span style="font-weight: 400;">[Vector4](../dot/Vector4.md)</span>, ratio : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Vector4](../dot/Vector4.md)</span> {: #ratioBlend data-toc-label='ratioBlend' }

#### deserialize( obj : <span style="font-weight: 400;">[SerializedRenderColor](../alpenglow/RenderColor.md#SerializedRenderColor)</span> ) : <span style="font-weight: 400;">[RenderColor](../alpenglow/RenderColor.md)</span> {: #deserialize data-toc-label='deserialize' }

### Static Properties

#### sRGBToXYZMatrix {: #sRGBToXYZMatrix data-toc-label='sRGBToXYZMatrix' }

#### XYZTosRGBMatrix {: #XYZTosRGBMatrix data-toc-label='XYZTosRGBMatrix' }

#### displayP3ToXYZMatrix {: #displayP3ToXYZMatrix data-toc-label='displayP3ToXYZMatrix' }

#### XYZToDisplayP3Matrix {: #XYZToDisplayP3Matrix data-toc-label='XYZToDisplayP3Matrix' }

#### sRGBToDisplayP3Matrix {: #sRGBToDisplayP3Matrix data-toc-label='sRGBToDisplayP3Matrix' }

#### displayP3TosRGBMatrix {: #displayP3TosRGBMatrix data-toc-label='displayP3TosRGBMatrix' }

#### TRANSPARENT : <span style="font-weight: 400;">[RenderColor](../alpenglow/RenderColor.md)</span> {: #TRANSPARENT data-toc-label='TRANSPARENT' }

(readonly)



## Type SerializedRenderColor {: #SerializedRenderColor }


```js
import type { SerializedRenderColor } from 'scenerystack/alpenglow';
```
- **type**: "[RenderColor](../alpenglow/RenderColor.md)"
- **color**:
  - **r**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
  - **g**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
  - **b**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
  - **a**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>




## Source Code

See the source for [RenderColor.ts](https://github.com/phetsims/alpenglow/blob/main/js/render-program/RenderColor.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
