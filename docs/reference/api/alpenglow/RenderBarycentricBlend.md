# RenderBarycentricBlend

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/alpenglow/blob/main/js/render-program/RenderBarycentricBlend.ts](https://github.com/phetsims/alpenglow/blob/main/js/render-program/RenderBarycentricBlend.ts) for the most up-to-date information.

## Overview

RenderProgram for a triangular barycentric blend.

NOTE: Does not apply perspective correction, is purely a 2d blend.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class RenderBarycentricBlend {: #RenderBarycentricBlend }


```js
import { RenderBarycentricBlend } from 'scenerystack/alpenglow';
```
### Constructor

#### new RenderBarycentricBlend( pointA : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span>, pointB : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span>, pointC : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span>, accuracy : <span style="font-weight: 400;">[RenderBarycentricBlendAccuracy](../alpenglow/RenderBarycentricBlend.md#RenderBarycentricBlendAccuracy)</span>, a : <span style="font-weight: 400;">[RenderProgram](../alpenglow/RenderProgram.md)</span>, b : <span style="font-weight: 400;">[RenderProgram](../alpenglow/RenderProgram.md)</span>, c : <span style="font-weight: 400;">[RenderProgram](../alpenglow/RenderProgram.md)</span>, logic? : <span style="font-weight: 400;">[RenderBarycentricBlendLogic](../alpenglow/RenderBarycentricBlend.md#RenderBarycentricBlendLogic)</span> ) {: #RenderBarycentricBlend-constructor data-toc-label='new RenderBarycentricBlend' }

### Instance Methods

#### getName() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> {: #getName data-toc-label='getName' }

#### withChildren( children : <span style="font-weight: 400;">[RenderProgram](../alpenglow/RenderProgram.md)[]</span> ) : <span style="font-weight: 400;">[RenderBarycentricBlend](../alpenglow/RenderBarycentricBlend.md)</span> {: #withChildren data-toc-label='withChildren' }

#### transformed( transform : <span style="font-weight: 400;">[Matrix3](../dot/Matrix3.md)</span> ) : <span style="font-weight: 400;">[RenderProgram](../alpenglow/RenderProgram.md)</span> {: #transformed data-toc-label='transformed' }

#### equalsTyped( other : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #equalsTyped data-toc-label='equalsTyped' }

(protected)

#### getSimplified( children : <span style="font-weight: 400;">[RenderProgram](../alpenglow/RenderProgram.md)[]</span> ) : <span style="font-weight: 400;">[RenderProgram](../alpenglow/RenderProgram.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> {: #getSimplified data-toc-label='getSimplified' }

(protected)

#### evaluate( context : <span style="font-weight: 400;">[RenderEvaluationContext](../alpenglow/RenderEvaluationContext.md)</span> ) : <span style="font-weight: 400;">[Vector4](../dot/Vector4.md)</span> {: #evaluate data-toc-label='evaluate' }

#### writeInstructions( instructions : <span style="font-weight: 400;">[RenderInstruction](../alpenglow/RenderInstruction.md)[]</span> ) {: #writeInstructions data-toc-label='writeInstructions' }

#### serialize() : <span style="font-weight: 400;">[SerializedRenderBarycentricBlend](../alpenglow/RenderBarycentricBlend.md#SerializedRenderBarycentricBlend)</span> {: #serialize data-toc-label='serialize' }

### Instance Properties

#### logic : <span style="font-weight: 400;">[RenderBarycentricBlendLogic](../alpenglow/RenderBarycentricBlend.md#RenderBarycentricBlendLogic)</span> {: #logic data-toc-label='logic' }

(readonly)



## Class RenderBarycentricBlendLogic {: #RenderBarycentricBlendLogic }


```js
import { RenderBarycentricBlendLogic } from 'scenerystack/alpenglow';
```
### Constructor

#### new RenderBarycentricBlendLogic( det : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, diffA : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span>, diffB : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span>, pointC : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span>, accuracy : <span style="font-weight: 400;">[RenderBarycentricBlendAccuracy](../alpenglow/RenderBarycentricBlend.md#RenderBarycentricBlendAccuracy)</span> ) {: #RenderBarycentricBlendLogic-RenderBarycentricBlendLogic-constructor data-toc-label='new RenderBarycentricBlendLogic-RenderBarycentricBlendLogic' }

### Instance Methods

#### equals( other : <span style="font-weight: 400;">[RenderBarycentricBlendLogic](../alpenglow/RenderBarycentricBlend.md#RenderBarycentricBlendLogic)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #RenderBarycentricBlendLogic-equals data-toc-label='RenderBarycentricBlendLogic-equals' }

#### apply( output : <span style="font-weight: 400;">[Vector4](../dot/Vector4.md)</span>, context : <span style="font-weight: 400;">[RenderEvaluationContext](../alpenglow/RenderEvaluationContext.md)</span>, aColor : <span style="font-weight: 400;">[Vector4](../dot/Vector4.md)</span>, bColor : <span style="font-weight: 400;">[Vector4](../dot/Vector4.md)</span>, cColor : <span style="font-weight: 400;">[Vector4](../dot/Vector4.md)</span> ) {: #RenderBarycentricBlendLogic-apply data-toc-label='RenderBarycentricBlendLogic-apply' }

### Static Methods

#### from( pointA : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span>, pointB : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span>, pointC : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span>, accuracy : <span style="font-weight: 400;">[RenderBarycentricBlendAccuracy](../alpenglow/RenderBarycentricBlend.md#RenderBarycentricBlendAccuracy)</span> ) : <span style="font-weight: 400;">[RenderBarycentricBlendLogic](../alpenglow/RenderBarycentricBlend.md#RenderBarycentricBlendLogic)</span> {: #RenderBarycentricBlendLogic-from data-toc-label='RenderBarycentricBlendLogic-from' }



## Class RenderInstructionBarycentricBlend {: #RenderInstructionBarycentricBlend }


```js
import { RenderInstructionBarycentricBlend } from 'scenerystack/alpenglow';
```
### Constructor

#### new RenderInstructionBarycentricBlend( logic : <span style="font-weight: 400;">[RenderBarycentricBlendLogic](../alpenglow/RenderBarycentricBlend.md#RenderBarycentricBlendLogic)</span> ) {: #RenderInstructionBarycentricBlend-RenderInstructionBarycentricBlend-constructor data-toc-label='new RenderInstructionBarycentricBlend-RenderInstructionBarycentricBlend' }

### Instance Methods

#### toString() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> {: #RenderInstructionBarycentricBlend-toString data-toc-label='RenderInstructionBarycentricBlend-toString' }

#### equals( other : <span style="font-weight: 400;">[RenderInstruction](../alpenglow/RenderInstruction.md)</span>, areLocationsEqual : <span style="font-weight: 400;">( a: [RenderInstructionLocation](../alpenglow/RenderInstruction.md#RenderInstructionLocation), b: [RenderInstructionLocation](../alpenglow/RenderInstruction.md#RenderInstructionLocation) ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #RenderInstructionBarycentricBlend-equals data-toc-label='RenderInstructionBarycentricBlend-equals' }

#### execute( stack : <span style="font-weight: 400;">[RenderExecutionStack](../alpenglow/RenderExecutionStack.md)</span>, context : <span style="font-weight: 400;">[RenderEvaluationContext](../alpenglow/RenderEvaluationContext.md)</span>, executor : <span style="font-weight: 400;">[RenderExecutor](../alpenglow/RenderExecutor.md)</span> ) {: #RenderInstructionBarycentricBlend-execute data-toc-label='RenderInstructionBarycentricBlend-execute' }

#### writeBinary( encoder : <span style="font-weight: 400;">[ByteEncoder](../alpenglow/ByteEncoder.md)</span>, getOffset : <span style="font-weight: 400;">( location: [RenderInstructionLocation](../alpenglow/RenderInstruction.md#RenderInstructionLocation) ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) {: #RenderInstructionBarycentricBlend-writeBinary data-toc-label='RenderInstructionBarycentricBlend-writeBinary' }

#### getBinaryLength() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #RenderInstructionBarycentricBlend-getBinaryLength data-toc-label='RenderInstructionBarycentricBlend-getBinaryLength' }

### Static Methods

#### fromBinary( encoder : <span style="font-weight: 400;">[ByteEncoder](../alpenglow/ByteEncoder.md)</span>, offset : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, getLocation : <span style="font-weight: 400;">( offset: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> ) =&gt; [RenderInstructionLocation](../alpenglow/RenderInstruction.md#RenderInstructionLocation)</span> ) : <span style="font-weight: 400;">[RenderInstructionBarycentricBlend](../alpenglow/RenderBarycentricBlend.md#RenderInstructionBarycentricBlend)</span> {: #RenderInstructionBarycentricBlend-fromBinary data-toc-label='RenderInstructionBarycentricBlend-fromBinary' }



## Type SerializedRenderBarycentricBlend {: #SerializedRenderBarycentricBlend }


```js
import type { SerializedRenderBarycentricBlend } from 'scenerystack/alpenglow';
```


- **type**: "[RenderBarycentricBlend](../alpenglow/RenderBarycentricBlend.md)"
- **pointA**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>[]
- **pointB**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>[]
- **pointC**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>[]
- **accuracy**: [RenderBarycentricBlendAccuracy](../alpenglow/RenderBarycentricBlend.md#RenderBarycentricBlendAccuracy)
- **a**: [SerializedRenderProgram](../alpenglow/RenderProgram.md#SerializedRenderProgram)
- **b**: [SerializedRenderProgram](../alpenglow/RenderProgram.md#SerializedRenderProgram)
- **c**: [SerializedRenderProgram](../alpenglow/RenderProgram.md#SerializedRenderProgram)




## Source Code

See the source for [RenderBarycentricBlend.ts](https://github.com/phetsims/alpenglow/blob/main/js/render-program/RenderBarycentricBlend.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
