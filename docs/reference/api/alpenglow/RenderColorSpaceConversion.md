# RenderColorSpaceConversion

## Overview

RenderProgram to convert between color spaces. Should not change whether something is transparent or opaque

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class RenderColorSpaceConversion {: #RenderColorSpaceConversion }


```js
import { RenderColorSpaceConversion } from 'scenerystack/alpenglow';
```
### Constructor

#### new RenderColorSpaceConversion( program : <span style="font-weight: 400;">[RenderProgram](../alpenglow/RenderProgram.md)</span>, convert : <span style="font-weight: 400;">( color: [Vector4](../dot/Vector4.md) ) =&gt; [Vector4](../dot/Vector4.md)</span> ) {: #RenderColorSpaceConversion-constructor data-toc-label='new RenderColorSpaceConversion' }

### Instance Methods

#### getSimplified( children : <span style="font-weight: 400;">[RenderProgram](../alpenglow/RenderProgram.md)[]</span> ) : <span style="font-weight: 400;">[RenderProgram](../alpenglow/RenderProgram.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> {: #getSimplified data-toc-label='getSimplified' }

(protected)

#### evaluate( context : <span style="font-weight: 400;">[RenderEvaluationContext](../alpenglow/RenderEvaluationContext.md)</span> ) : <span style="font-weight: 400;">[Vector4](../dot/Vector4.md)</span> {: #evaluate data-toc-label='evaluate' }

#### serialize() : <span style="font-weight: 400;">[SerializedRenderColorSpaceConversion](../alpenglow/RenderColorSpaceConversion.md#SerializedRenderColorSpaceConversion)</span> {: #serialize data-toc-label='serialize' }

### Instance Properties

#### inverse : <span style="font-weight: 400;">[Constructor](../phet-core/Constructor.md)&lt;[RenderColorSpaceConversion](../alpenglow/RenderColorSpaceConversion.md)&gt;</span> {: #inverse data-toc-label='inverse' }

### Static Methods

#### convert( renderProgram : <span style="font-weight: 400;">[RenderProgram](../alpenglow/RenderProgram.md)</span>, fromSpace : <span style="font-weight: 400;">[RenderColorSpace](../alpenglow/RenderColorSpace.md)</span>, toSpace : <span style="font-weight: 400;">[RenderColorSpace](../alpenglow/RenderColorSpace.md)</span> ) : <span style="font-weight: 400;">[RenderProgram](../alpenglow/RenderProgram.md)</span> {: #convert data-toc-label='convert' }

TODO: add a helper on RenderProgram

#### displayP3ToSRGB( renderProgram : <span style="font-weight: 400;">[RenderProgram](../alpenglow/RenderProgram.md)</span> ) : <span style="font-weight: 400;">[RenderProgram](../alpenglow/RenderProgram.md)</span> {: #displayP3ToSRGB data-toc-label='displayP3ToSRGB' }

#### sRGBToDisplayP3( renderProgram : <span style="font-weight: 400;">[RenderProgram](../alpenglow/RenderProgram.md)</span> ) : <span style="font-weight: 400;">[RenderProgram](../alpenglow/RenderProgram.md)</span> {: #sRGBToDisplayP3 data-toc-label='sRGBToDisplayP3' }

#### displayP3ToLinearSRGB( renderProgram : <span style="font-weight: 400;">[RenderProgram](../alpenglow/RenderProgram.md)</span> ) : <span style="font-weight: 400;">[RenderProgram](../alpenglow/RenderProgram.md)</span> {: #displayP3ToLinearSRGB data-toc-label='displayP3ToLinearSRGB' }

#### linearSRGBToDisplayP3( renderProgram : <span style="font-weight: 400;">[RenderProgram](../alpenglow/RenderProgram.md)</span> ) : <span style="font-weight: 400;">[RenderProgram](../alpenglow/RenderProgram.md)</span> {: #linearSRGBToDisplayP3 data-toc-label='linearSRGBToDisplayP3' }

#### oklabToSRGB( renderProgram : <span style="font-weight: 400;">[RenderProgram](../alpenglow/RenderProgram.md)</span> ) : <span style="font-weight: 400;">[RenderProgram](../alpenglow/RenderProgram.md)</span> {: #oklabToSRGB data-toc-label='oklabToSRGB' }

#### sRGBToOklab( renderProgram : <span style="font-weight: 400;">[RenderProgram](../alpenglow/RenderProgram.md)</span> ) : <span style="font-weight: 400;">[RenderProgram](../alpenglow/RenderProgram.md)</span> {: #sRGBToOklab data-toc-label='sRGBToOklab' }

#### oklabToDisplayP3( renderProgram : <span style="font-weight: 400;">[RenderProgram](../alpenglow/RenderProgram.md)</span> ) : <span style="font-weight: 400;">[RenderProgram](../alpenglow/RenderProgram.md)</span> {: #oklabToDisplayP3 data-toc-label='oklabToDisplayP3' }

#### displayP3ToOklab( renderProgram : <span style="font-weight: 400;">[RenderProgram](../alpenglow/RenderProgram.md)</span> ) : <span style="font-weight: 400;">[RenderProgram](../alpenglow/RenderProgram.md)</span> {: #displayP3ToOklab data-toc-label='displayP3ToOklab' }

#### premulSRGBToPremulLinearSRGB( renderProgram : <span style="font-weight: 400;">[RenderProgram](../alpenglow/RenderProgram.md)</span> ) : <span style="font-weight: 400;">[RenderProgram](../alpenglow/RenderProgram.md)</span> {: #premulSRGBToPremulLinearSRGB data-toc-label='premulSRGBToPremulLinearSRGB' }

#### premulLinearSRGBToPremulSRGB( renderProgram : <span style="font-weight: 400;">[RenderProgram](../alpenglow/RenderProgram.md)</span> ) : <span style="font-weight: 400;">[RenderProgram](../alpenglow/RenderProgram.md)</span> {: #premulLinearSRGBToPremulSRGB data-toc-label='premulLinearSRGBToPremulSRGB' }

#### premulLinearSRGBToPremulDisplayP3( renderProgram : <span style="font-weight: 400;">[RenderProgram](../alpenglow/RenderProgram.md)</span> ) : <span style="font-weight: 400;">[RenderProgram](../alpenglow/RenderProgram.md)</span> {: #premulLinearSRGBToPremulDisplayP3 data-toc-label='premulLinearSRGBToPremulDisplayP3' }

#### premulDisplayP3ToPremulLinearSRGB( renderProgram : <span style="font-weight: 400;">[RenderProgram](../alpenglow/RenderProgram.md)</span> ) : <span style="font-weight: 400;">[RenderProgram](../alpenglow/RenderProgram.md)</span> {: #premulDisplayP3ToPremulLinearSRGB data-toc-label='premulDisplayP3ToPremulLinearSRGB' }

#### premulDisplayP3ToPremulSRGB( renderProgram : <span style="font-weight: 400;">[RenderProgram](../alpenglow/RenderProgram.md)</span> ) : <span style="font-weight: 400;">[RenderProgram](../alpenglow/RenderProgram.md)</span> {: #premulDisplayP3ToPremulSRGB data-toc-label='premulDisplayP3ToPremulSRGB' }

#### premulSRGBToPremulDisplayP3( renderProgram : <span style="font-weight: 400;">[RenderProgram](../alpenglow/RenderProgram.md)</span> ) : <span style="font-weight: 400;">[RenderProgram](../alpenglow/RenderProgram.md)</span> {: #premulSRGBToPremulDisplayP3 data-toc-label='premulSRGBToPremulDisplayP3' }

#### premulOklabToPremulSRGB( renderProgram : <span style="font-weight: 400;">[RenderProgram](../alpenglow/RenderProgram.md)</span> ) : <span style="font-weight: 400;">[RenderProgram](../alpenglow/RenderProgram.md)</span> {: #premulOklabToPremulSRGB data-toc-label='premulOklabToPremulSRGB' }

#### premulSRGBToPremulOklab( renderProgram : <span style="font-weight: 400;">[RenderProgram](../alpenglow/RenderProgram.md)</span> ) : <span style="font-weight: 400;">[RenderProgram](../alpenglow/RenderProgram.md)</span> {: #premulSRGBToPremulOklab data-toc-label='premulSRGBToPremulOklab' }

#### premulOklabToPremulDisplayP3( renderProgram : <span style="font-weight: 400;">[RenderProgram](../alpenglow/RenderProgram.md)</span> ) : <span style="font-weight: 400;">[RenderProgram](../alpenglow/RenderProgram.md)</span> {: #premulOklabToPremulDisplayP3 data-toc-label='premulOklabToPremulDisplayP3' }

#### premulDisplayP3ToPremulOklab( renderProgram : <span style="font-weight: 400;">[RenderProgram](../alpenglow/RenderProgram.md)</span> ) : <span style="font-weight: 400;">[RenderProgram](../alpenglow/RenderProgram.md)</span> {: #premulDisplayP3ToPremulOklab data-toc-label='premulDisplayP3ToPremulOklab' }

#### deserialize( obj : <span style="font-weight: 400;">[SerializedRenderColorSpaceConversion](../alpenglow/RenderColorSpaceConversion.md#SerializedRenderColorSpaceConversion)</span> ) : <span style="font-weight: 400;">[RenderColorSpaceConversion](../alpenglow/RenderColorSpaceConversion.md)</span> {: #deserialize data-toc-label='deserialize' }



## Type SerializedRenderColorSpaceConversion {: #SerializedRenderColorSpaceConversion }


```js
import type { SerializedRenderColorSpaceConversion } from 'scenerystack/alpenglow';
```


- **type**: "[RenderColorSpaceConversion](../alpenglow/RenderColorSpaceConversion.md)"
- **subtype**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>
- **program**: [SerializedRenderProgram](../alpenglow/RenderProgram.md#SerializedRenderProgram)




## Source Code

See the source for [RenderColorSpaceConversion.ts](https://github.com/phetsims/alpenglow/blob/main/js/render-program/RenderColorSpaceConversion.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
