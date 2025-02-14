# RenderLinearGradient

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/alpenglow/blob/main/js/render-program/RenderLinearGradient.ts](https://github.com/phetsims/alpenglow/blob/main/js/render-program/RenderLinearGradient.ts) for the most up-to-date information.

## Overview

RenderProgram for a classic linear gradient

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class RenderLinearGradient {: #RenderLinearGradient }


```js
import { RenderLinearGradient } from 'scenerystack/alpenglow';
```
### Constructor

#### new RenderLinearGradient( transform : <span style="font-weight: 400;">[Matrix3](../dot/Matrix3.md)</span>, start : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span>, end : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span>, stops : <span style="font-weight: 400;">[RenderGradientStop](../alpenglow/RenderGradientStop.md)[]</span>, extend : <span style="font-weight: 400;">[RenderExtend](../alpenglow/RenderExtend.md)</span>, accuracy : <span style="font-weight: 400;">[RenderLinearGradientAccuracy](../alpenglow/RenderLinearGradientAccuracy.md)</span>, logic? : <span style="font-weight: 400;">[RenderLinearGradientLogic](../alpenglow/RenderLinearGradientLogic.md)</span> ) {: #RenderLinearGradient-constructor data-toc-label='new RenderLinearGradient' }

### Instance Methods

#### getName() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> {: #getName data-toc-label='getName' }

#### withChildren( children : <span style="font-weight: 400;">[RenderProgram](../alpenglow/RenderProgram.md)[]</span> ) : <span style="font-weight: 400;">[RenderLinearGradient](../alpenglow/RenderLinearGradient.md)</span> {: #withChildren data-toc-label='withChildren' }

#### isSplittable() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #isSplittable data-toc-label='isSplittable' }

#### transformed( transform : <span style="font-weight: 400;">[Matrix3](../dot/Matrix3.md)</span> ) : <span style="font-weight: 400;">[RenderProgram](../alpenglow/RenderProgram.md)</span> {: #transformed data-toc-label='transformed' }

#### equalsTyped( other : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #equalsTyped data-toc-label='equalsTyped' }

(protected)

#### getSimplified( children : <span style="font-weight: 400;">[RenderProgram](../alpenglow/RenderProgram.md)[]</span> ) : <span style="font-weight: 400;">[RenderProgram](../alpenglow/RenderProgram.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> {: #getSimplified data-toc-label='getSimplified' }

(protected)

#### evaluate( context : <span style="font-weight: 400;">[RenderEvaluationContext](../alpenglow/RenderEvaluationContext.md)</span> ) : <span style="font-weight: 400;">[Vector4](../dot/Vector4.md)</span> {: #evaluate data-toc-label='evaluate' }

#### writeInstructions( instructions : <span style="font-weight: 400;">[RenderInstruction](../alpenglow/RenderInstruction.md)[]</span> ) {: #writeInstructions data-toc-label='writeInstructions' }

#### split( face : <span style="font-weight: 400;">[RenderableFace](../alpenglow/RenderableFace.md)</span> ) : <span style="font-weight: 400;">[RenderableFace](../alpenglow/RenderableFace.md)[]</span> {: #split data-toc-label='split' }

#### serialize() : <span style="font-weight: 400;">[SerializedRenderLinearGradient](../alpenglow/RenderLinearGradient.md#SerializedRenderLinearGradient)</span> {: #serialize data-toc-label='serialize' }

### Instance Properties

#### logic : <span style="font-weight: 400;">[RenderLinearGradientLogic](../alpenglow/RenderLinearGradientLogic.md)</span> {: #logic data-toc-label='logic' }

(readonly)



## Type SerializedRenderLinearGradient {: #SerializedRenderLinearGradient }


```js
import type { SerializedRenderLinearGradient } from 'scenerystack/alpenglow';
```


- **type**: "[RenderLinearGradient](../alpenglow/RenderLinearGradient.md)"
- **transform**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>[]
- **start**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>[]
- **end**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>[]
- **stops**: [SerializedRenderGradientStop](../alpenglow/RenderGradientStop.md#SerializedRenderGradientStop)[]
- **extend**: [RenderExtend](../alpenglow/RenderExtend.md)
- **accuracy**: [RenderLinearGradientAccuracy](../alpenglow/RenderLinearGradientAccuracy.md)




## Source Code

See the source for [RenderLinearGradient.ts](https://github.com/phetsims/alpenglow/blob/main/js/render-program/RenderLinearGradient.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
