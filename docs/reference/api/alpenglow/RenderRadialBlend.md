# RenderRadialBlend

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/alpenglow/blob/main/js/render-program/RenderRadialBlend.ts](https://github.com/phetsims/alpenglow/blob/main/js/render-program/RenderRadialBlend.ts) for the most up-to-date information.

## Overview

RenderProgram for a radial blend (essentially a chunk of a radial gradient with only a linear transition between
two things.

RenderRadialBlend will interpolate between two different RenderPrograms based on the location. It will evaluate
`clamp( ( averageFragmentRadius - radius0 ) / ( radius1 - radius0 ), 0, 1 )`, and will linearly blend
between the "zero" program (when the value is 0) and the "one" program (when the value is 1).

It can be used in a standalone way, however it is primarily meant to be used when a [RenderRadialGradient](../alpenglow/RenderRadialGradient.md)
is circular, and is split into each radial-linear partition.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class RenderRadialBlend {: #RenderRadialBlend }


```js
import { RenderRadialBlend } from 'scenerystack/alpenglow';
```
### Constructor

#### new RenderRadialBlend( transform : <span style="font-weight: 400;">[Matrix3](../dot/Matrix3.md)</span>, radius0 : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, radius1 : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, accuracy : <span style="font-weight: 400;">[RenderRadialBlendAccuracy](../alpenglow/RenderRadialBlendAccuracy.md)</span>, zero : <span style="font-weight: 400;">[RenderProgram](../alpenglow/RenderProgram.md)</span>, one : <span style="font-weight: 400;">[RenderProgram](../alpenglow/RenderProgram.md)</span>, logic? : <span style="font-weight: 400;">[RenderRadialBlendLogic](../alpenglow/RenderRadialBlendLogic.md)</span> ) {: #RenderRadialBlend-constructor data-toc-label='new RenderRadialBlend' }

### Instance Methods

#### getName() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> {: #getName data-toc-label='getName' }

#### withChildren( children : <span style="font-weight: 400;">[RenderProgram](../alpenglow/RenderProgram.md)[]</span> ) : <span style="font-weight: 400;">[RenderRadialBlend](../alpenglow/RenderRadialBlend.md)</span> {: #withChildren data-toc-label='withChildren' }

#### transformed( transform : <span style="font-weight: 400;">[Matrix3](../dot/Matrix3.md)</span> ) : <span style="font-weight: 400;">[RenderProgram](../alpenglow/RenderProgram.md)</span> {: #transformed data-toc-label='transformed' }

#### equalsTyped( other : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #equalsTyped data-toc-label='equalsTyped' }

(protected)

#### getSimplified( children : <span style="font-weight: 400;">[RenderProgram](../alpenglow/RenderProgram.md)[]</span> ) : <span style="font-weight: 400;">[RenderProgram](../alpenglow/RenderProgram.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> {: #getSimplified data-toc-label='getSimplified' }

(protected)

#### evaluate( context : <span style="font-weight: 400;">[RenderEvaluationContext](../alpenglow/RenderEvaluationContext.md)</span> ) : <span style="font-weight: 400;">[Vector4](../dot/Vector4.md)</span> {: #evaluate data-toc-label='evaluate' }

#### writeInstructions( instructions : <span style="font-weight: 400;">[RenderInstruction](../alpenglow/RenderInstruction.md)[]</span> ) {: #writeInstructions data-toc-label='writeInstructions' }

#### serialize() : <span style="font-weight: 400;">[SerializedRenderRadialBlend](../alpenglow/RenderRadialBlend.md#SerializedRenderRadialBlend)</span> {: #serialize data-toc-label='serialize' }

### Instance Properties

#### logic : <span style="font-weight: 400;">[RenderRadialBlendLogic](../alpenglow/RenderRadialBlendLogic.md)</span> {: #logic data-toc-label='logic' }

(readonly)



## Type SerializedRenderRadialBlend {: #SerializedRenderRadialBlend }


```js
import type { SerializedRenderRadialBlend } from 'scenerystack/alpenglow';
```


- **type**: "[RenderRadialBlend](../alpenglow/RenderRadialBlend.md)"
- **transform**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>[]
- **radius0**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **radius1**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **accuracy**: [RenderRadialBlendAccuracy](../alpenglow/RenderRadialBlendAccuracy.md)
- **zero**: [SerializedRenderProgram](../alpenglow/RenderProgram.md#SerializedRenderProgram)
- **one**: [SerializedRenderProgram](../alpenglow/RenderProgram.md#SerializedRenderProgram)




## Source Code

See the source for [RenderRadialBlend.ts](https://github.com/phetsims/alpenglow/blob/main/js/render-program/RenderRadialBlend.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
