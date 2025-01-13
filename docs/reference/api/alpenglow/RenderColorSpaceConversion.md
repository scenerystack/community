# RenderColorSpaceConversion

## Overview

RenderProgram to convert between color spaces. Should not change whether something is transparent or opaque

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class RenderColorSpaceConversion {: #RenderColorSpaceConversion }


```js
import { RenderColorSpaceConversion } from 'scenerystack/alpenglow';
```
### Constructor

#### new RenderColorSpaceConversion( program : <span style="font-weight: 400; opacity: 80%;">RenderProgram</span>, convert : <span style="font-weight: 400; opacity: 80%;">( color: Vector4 ) =&gt; Vector4</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### getSimplified( children : <span style="font-weight: 400; opacity: 80%;">RenderProgram[]</span> ) : <span style="font-weight: 400; opacity: 80%;">RenderProgram | null</span> {: #getSimplified data-toc-label='getSimplified' }

(protected)

#### evaluate( context : <span style="font-weight: 400; opacity: 80%;">RenderEvaluationContext</span> ) : <span style="font-weight: 400; opacity: 80%;">Vector4</span> {: #evaluate data-toc-label='evaluate' }

#### serialize() : <span style="font-weight: 400; opacity: 80%;">SerializedRenderColorSpaceConversion</span> {: #serialize data-toc-label='serialize' }

### Instance Properties

#### inverse : <span style="font-weight: 400; opacity: 80%;">Constructor&lt;RenderColorSpaceConversion&gt;</span> {: #inverse data-toc-label='inverse' }

### Static Methods

#### convert( renderProgram : <span style="font-weight: 400; opacity: 80%;">RenderProgram</span>, fromSpace : <span style="font-weight: 400; opacity: 80%;">RenderColorSpace</span>, toSpace : <span style="font-weight: 400; opacity: 80%;">RenderColorSpace</span> ) : <span style="font-weight: 400; opacity: 80%;">RenderProgram</span> {: #convert data-toc-label='convert' }

TODO: add a helper on RenderProgram

#### displayP3ToSRGB( renderProgram : <span style="font-weight: 400; opacity: 80%;">RenderProgram</span> ) : <span style="font-weight: 400; opacity: 80%;">RenderProgram</span> {: #displayP3ToSRGB data-toc-label='displayP3ToSRGB' }

#### sRGBToDisplayP3( renderProgram : <span style="font-weight: 400; opacity: 80%;">RenderProgram</span> ) : <span style="font-weight: 400; opacity: 80%;">RenderProgram</span> {: #sRGBToDisplayP3 data-toc-label='sRGBToDisplayP3' }

#### displayP3ToLinearSRGB( renderProgram : <span style="font-weight: 400; opacity: 80%;">RenderProgram</span> ) : <span style="font-weight: 400; opacity: 80%;">RenderProgram</span> {: #displayP3ToLinearSRGB data-toc-label='displayP3ToLinearSRGB' }

#### linearSRGBToDisplayP3( renderProgram : <span style="font-weight: 400; opacity: 80%;">RenderProgram</span> ) : <span style="font-weight: 400; opacity: 80%;">RenderProgram</span> {: #linearSRGBToDisplayP3 data-toc-label='linearSRGBToDisplayP3' }

#### oklabToSRGB( renderProgram : <span style="font-weight: 400; opacity: 80%;">RenderProgram</span> ) : <span style="font-weight: 400; opacity: 80%;">RenderProgram</span> {: #oklabToSRGB data-toc-label='oklabToSRGB' }

#### sRGBToOklab( renderProgram : <span style="font-weight: 400; opacity: 80%;">RenderProgram</span> ) : <span style="font-weight: 400; opacity: 80%;">RenderProgram</span> {: #sRGBToOklab data-toc-label='sRGBToOklab' }

#### oklabToDisplayP3( renderProgram : <span style="font-weight: 400; opacity: 80%;">RenderProgram</span> ) : <span style="font-weight: 400; opacity: 80%;">RenderProgram</span> {: #oklabToDisplayP3 data-toc-label='oklabToDisplayP3' }

#### displayP3ToOklab( renderProgram : <span style="font-weight: 400; opacity: 80%;">RenderProgram</span> ) : <span style="font-weight: 400; opacity: 80%;">RenderProgram</span> {: #displayP3ToOklab data-toc-label='displayP3ToOklab' }

#### premulSRGBToPremulLinearSRGB( renderProgram : <span style="font-weight: 400; opacity: 80%;">RenderProgram</span> ) : <span style="font-weight: 400; opacity: 80%;">RenderProgram</span> {: #premulSRGBToPremulLinearSRGB data-toc-label='premulSRGBToPremulLinearSRGB' }

#### premulLinearSRGBToPremulSRGB( renderProgram : <span style="font-weight: 400; opacity: 80%;">RenderProgram</span> ) : <span style="font-weight: 400; opacity: 80%;">RenderProgram</span> {: #premulLinearSRGBToPremulSRGB data-toc-label='premulLinearSRGBToPremulSRGB' }

#### premulLinearSRGBToPremulDisplayP3( renderProgram : <span style="font-weight: 400; opacity: 80%;">RenderProgram</span> ) : <span style="font-weight: 400; opacity: 80%;">RenderProgram</span> {: #premulLinearSRGBToPremulDisplayP3 data-toc-label='premulLinearSRGBToPremulDisplayP3' }

#### premulDisplayP3ToPremulLinearSRGB( renderProgram : <span style="font-weight: 400; opacity: 80%;">RenderProgram</span> ) : <span style="font-weight: 400; opacity: 80%;">RenderProgram</span> {: #premulDisplayP3ToPremulLinearSRGB data-toc-label='premulDisplayP3ToPremulLinearSRGB' }

#### premulDisplayP3ToPremulSRGB( renderProgram : <span style="font-weight: 400; opacity: 80%;">RenderProgram</span> ) : <span style="font-weight: 400; opacity: 80%;">RenderProgram</span> {: #premulDisplayP3ToPremulSRGB data-toc-label='premulDisplayP3ToPremulSRGB' }

#### premulSRGBToPremulDisplayP3( renderProgram : <span style="font-weight: 400; opacity: 80%;">RenderProgram</span> ) : <span style="font-weight: 400; opacity: 80%;">RenderProgram</span> {: #premulSRGBToPremulDisplayP3 data-toc-label='premulSRGBToPremulDisplayP3' }

#### premulOklabToPremulSRGB( renderProgram : <span style="font-weight: 400; opacity: 80%;">RenderProgram</span> ) : <span style="font-weight: 400; opacity: 80%;">RenderProgram</span> {: #premulOklabToPremulSRGB data-toc-label='premulOklabToPremulSRGB' }

#### premulSRGBToPremulOklab( renderProgram : <span style="font-weight: 400; opacity: 80%;">RenderProgram</span> ) : <span style="font-weight: 400; opacity: 80%;">RenderProgram</span> {: #premulSRGBToPremulOklab data-toc-label='premulSRGBToPremulOklab' }

#### premulOklabToPremulDisplayP3( renderProgram : <span style="font-weight: 400; opacity: 80%;">RenderProgram</span> ) : <span style="font-weight: 400; opacity: 80%;">RenderProgram</span> {: #premulOklabToPremulDisplayP3 data-toc-label='premulOklabToPremulDisplayP3' }

#### premulDisplayP3ToPremulOklab( renderProgram : <span style="font-weight: 400; opacity: 80%;">RenderProgram</span> ) : <span style="font-weight: 400; opacity: 80%;">RenderProgram</span> {: #premulDisplayP3ToPremulOklab data-toc-label='premulDisplayP3ToPremulOklab' }

#### deserialize( obj : <span style="font-weight: 400; opacity: 80%;">SerializedRenderColorSpaceConversion</span> ) : <span style="font-weight: 400; opacity: 80%;">RenderColorSpaceConversion</span> {: #deserialize data-toc-label='deserialize' }



## Source Code

See the source for [RenderColorSpaceConversion.ts](https://github.com/phetsims/alpenglow/blob/main/js/render-program/RenderColorSpaceConversion.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
