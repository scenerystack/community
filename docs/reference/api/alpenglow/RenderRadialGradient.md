# RenderRadialGradient

## Overview

RenderProgram for a classic radial gradient.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class RenderRadialGradient {: #RenderRadialGradient }


```js
import { RenderRadialGradient } from 'scenerystack/alpenglow';
```
### Constructor

#### new RenderRadialGradient( transform : <span style="font-weight: 400;">[Matrix3](../dot/Matrix3.md)</span>, start : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span>, startRadius : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, end : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span>, endRadius : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, stops : <span style="font-weight: 400;">[RenderGradientStop](../alpenglow/RenderGradientStop.md)[]</span>, extend : <span style="font-weight: 400;">[RenderExtend](../alpenglow/RenderExtend.md)</span>, accuracy : <span style="font-weight: 400;">[RenderRadialGradientAccuracy](../alpenglow/RenderRadialGradient.md#RenderRadialGradientAccuracy)</span>, logic? : <span style="font-weight: 400;">[RenderRadialGradientLogic](../alpenglow/RenderRadialGradient.md#RenderRadialGradientLogic)</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### getName() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> {: #getName data-toc-label='getName' }

#### withChildren( children : <span style="font-weight: 400;">[RenderProgram](../alpenglow/RenderProgram.md)[]</span> ) : <span style="font-weight: 400;">[RenderRadialGradient](../alpenglow/RenderRadialGradient.md)</span> {: #withChildren data-toc-label='withChildren' }

#### isSplittable() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #isSplittable data-toc-label='isSplittable' }

#### transformed( transform : <span style="font-weight: 400;">[Matrix3](../dot/Matrix3.md)</span> ) : <span style="font-weight: 400;">[RenderProgram](../alpenglow/RenderProgram.md)</span> {: #transformed data-toc-label='transformed' }

#### equalsTyped( other : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #equalsTyped data-toc-label='equalsTyped' }

(protected)

#### getSimplified( children : <span style="font-weight: 400;">[RenderProgram](../alpenglow/RenderProgram.md)[]</span> ) : <span style="font-weight: 400;">[RenderProgram](../alpenglow/RenderProgram.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> {: #getSimplified data-toc-label='getSimplified' }

(protected)

#### getLogic() : <span style="font-weight: 400;">[RenderRadialGradientLogic](../alpenglow/RenderRadialGradient.md#RenderRadialGradientLogic)</span> {: #getLogic data-toc-label='getLogic' }

#### evaluate( context : <span style="font-weight: 400;">[RenderEvaluationContext](../alpenglow/RenderEvaluationContext.md)</span> ) : <span style="font-weight: 400;">[Vector4](../dot/Vector4.md)</span> {: #evaluate data-toc-label='evaluate' }

#### writeInstructions( instructions : <span style="font-weight: 400;">[RenderInstruction](../alpenglow/RenderInstruction.md)[]</span> ) {: #writeInstructions data-toc-label='writeInstructions' }

#### split( face : <span style="font-weight: 400;">[RenderableFace](../alpenglow/RenderableFace.md)</span> ) : <span style="font-weight: 400;">[RenderableFace](../alpenglow/RenderableFace.md)[]</span> {: #split data-toc-label='split' }

#### serialize() : <span style="font-weight: 400;">[SerializedRenderRadialGradient](../alpenglow/RenderRadialGradient.md#SerializedRenderRadialGradient)</span> {: #serialize data-toc-label='serialize' }

### Static Methods

#### deserialize( obj : <span style="font-weight: 400;">[SerializedRenderRadialGradient](../alpenglow/RenderRadialGradient.md#SerializedRenderRadialGradient)</span> ) : <span style="font-weight: 400;">[RenderRadialGradient](../alpenglow/RenderRadialGradient.md)</span> {: #deserialize data-toc-label='deserialize' }



## Class RenderRadialGradientLogic {: #RenderRadialGradientLogic }


```js
import { RenderRadialGradientLogic } from 'scenerystack/alpenglow';
```
### Constructor

#### new RenderRadialGradientLogic( conicTransform : <span style="font-weight: 400;">[Matrix3](../dot/Matrix3.md)</span>, focalX : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, radius : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, kind : <span style="font-weight: 400;">[RadialGradientType](../alpenglow/RenderRadialGradient.md#RadialGradientType)</span>, isSwapped : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span>, ratios : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>[]</span>, extend : <span style="font-weight: 400;">[RenderExtend](../alpenglow/RenderExtend.md)</span>, accuracy : <span style="font-weight: 400;">[RenderRadialGradientAccuracy](../alpenglow/RenderRadialGradient.md#RenderRadialGradientAccuracy)</span> ) {: #RenderRadialGradientLogic-constructor data-toc-label='RenderRadialGradientLogic-constructor' }

### Instance Methods

#### equals( other : <span style="font-weight: 400;">[RenderRadialGradientLogic](../alpenglow/RenderRadialGradient.md#RenderRadialGradientLogic)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #RenderRadialGradientLogic-equals data-toc-label='RenderRadialGradientLogic-equals' }

#### computeLinearValue( context : <span style="font-weight: 400;">[RenderEvaluationContext](../alpenglow/RenderEvaluationContext.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #RenderRadialGradientLogic-computeLinearValue data-toc-label='RenderRadialGradientLogic-computeLinearValue' }

### Static Methods

#### from( transform : <span style="font-weight: 400;">[Matrix3](../dot/Matrix3.md)</span>, start : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span>, startRadius : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, end : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span>, endRadius : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, ratios : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>[]</span>, extend : <span style="font-weight: 400;">[RenderExtend](../alpenglow/RenderExtend.md)</span>, accuracy : <span style="font-weight: 400;">[RenderRadialGradientAccuracy](../alpenglow/RenderRadialGradient.md#RenderRadialGradientAccuracy)</span> ) : <span style="font-weight: 400;">[RenderRadialGradientLogic](../alpenglow/RenderRadialGradient.md#RenderRadialGradientLogic)</span> {: #RenderRadialGradientLogic-from data-toc-label='RenderRadialGradientLogic-from' }



## Source Code

See the source for [RenderRadialGradient.ts](https://github.com/phetsims/alpenglow/blob/main/js/render-program/RenderRadialGradient.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
