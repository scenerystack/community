# RenderBarycentricPerspectiveBlend

## Overview

RenderProgram for a triangular barycentric blend. Applies perspective correction.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class RenderBarycentricPerspectiveBlend {: #RenderBarycentricPerspectiveBlend }


```js
import { RenderBarycentricPerspectiveBlend } from 'scenerystack/alpenglow';
```
### Constructor

#### new RenderBarycentricPerspectiveBlend( pointA : <span style="font-weight: 400;">[Vector3](../dot/Vector3.md)</span>, pointB : <span style="font-weight: 400;">[Vector3](../dot/Vector3.md)</span>, pointC : <span style="font-weight: 400;">[Vector3](../dot/Vector3.md)</span>, accuracy : <span style="font-weight: 400;">[RenderBarycentricPerspectiveBlendAccuracy](../alpenglow/RenderBarycentricPerspectiveBlend.md#RenderBarycentricPerspectiveBlendAccuracy)</span>, a : <span style="font-weight: 400;">[RenderProgram](../alpenglow/RenderProgram.md)</span>, b : <span style="font-weight: 400;">[RenderProgram](../alpenglow/RenderProgram.md)</span>, c : <span style="font-weight: 400;">[RenderProgram](../alpenglow/RenderProgram.md)</span>, logic? : <span style="font-weight: 400;">[RenderBarycentricPerspectiveBlendLogic](../alpenglow/RenderBarycentricPerspectiveBlend.md#RenderBarycentricPerspectiveBlendLogic)</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### getName() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> {: #getName data-toc-label='getName' }

#### withChildren( children : <span style="font-weight: 400;">[RenderProgram](../alpenglow/RenderProgram.md)[]</span> ) : <span style="font-weight: 400;">[RenderBarycentricPerspectiveBlend](../alpenglow/RenderBarycentricPerspectiveBlend.md)</span> {: #withChildren data-toc-label='withChildren' }

#### transformed( transform : <span style="font-weight: 400;">[Matrix3](../dot/Matrix3.md)</span> ) : <span style="font-weight: 400;">[RenderProgram](../alpenglow/RenderProgram.md)</span> {: #transformed data-toc-label='transformed' }

#### equalsTyped( other : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #equalsTyped data-toc-label='equalsTyped' }

(protected)

#### getSimplified( children : <span style="font-weight: 400;">[RenderProgram](../alpenglow/RenderProgram.md)[]</span> ) : <span style="font-weight: 400;">[RenderProgram](../alpenglow/RenderProgram.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> {: #getSimplified data-toc-label='getSimplified' }

(protected)

TODO: extract code for the barycentric blends? duplicated

#### evaluate( context : <span style="font-weight: 400;">[RenderEvaluationContext](../alpenglow/RenderEvaluationContext.md)</span> ) : <span style="font-weight: 400;">[Vector4](../dot/Vector4.md)</span> {: #evaluate data-toc-label='evaluate' }

#### writeInstructions( instructions : <span style="font-weight: 400;">[RenderInstruction](../alpenglow/RenderInstruction.md)[]</span> ) {: #writeInstructions data-toc-label='writeInstructions' }

#### serialize() : <span style="font-weight: 400;">[SerializedRenderBarycentricPerspectiveBlend](../alpenglow/RenderBarycentricPerspectiveBlend.md#SerializedRenderBarycentricPerspectiveBlend)</span> {: #serialize data-toc-label='serialize' }

### Instance Properties

#### logic : <span style="font-weight: 400;">[RenderBarycentricPerspectiveBlendLogic](../alpenglow/RenderBarycentricPerspectiveBlend.md#RenderBarycentricPerspectiveBlendLogic)</span> {: #logic data-toc-label='logic' }

(readonly)

### Static Methods

#### deserialize( obj : <span style="font-weight: 400;">[SerializedRenderBarycentricPerspectiveBlend](../alpenglow/RenderBarycentricPerspectiveBlend.md#SerializedRenderBarycentricPerspectiveBlend)</span> ) : <span style="font-weight: 400;">[RenderBarycentricPerspectiveBlend](../alpenglow/RenderBarycentricPerspectiveBlend.md)</span> {: #deserialize data-toc-label='deserialize' }



## Class RenderBarycentricPerspectiveBlendLogic {: #RenderBarycentricPerspectiveBlendLogic }


```js
import { RenderBarycentricPerspectiveBlendLogic } from 'scenerystack/alpenglow';
```
### Constructor

#### new RenderBarycentricPerspectiveBlendLogic( det : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, diffA : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span>, diffB : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span>, point2C : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span>, zInverseA : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, zInverseB : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, zInverseC : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, accuracy : <span style="font-weight: 400;">[RenderBarycentricPerspectiveBlendAccuracy](../alpenglow/RenderBarycentricPerspectiveBlend.md#RenderBarycentricPerspectiveBlendAccuracy)</span> ) {: #RenderBarycentricPerspectiveBlendLogic-constructor data-toc-label='RenderBarycentricPerspectiveBlendLogic-constructor' }

### Instance Methods

#### equals( other : <span style="font-weight: 400;">[RenderBarycentricPerspectiveBlendLogic](../alpenglow/RenderBarycentricPerspectiveBlend.md#RenderBarycentricPerspectiveBlendLogic)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #RenderBarycentricPerspectiveBlendLogic-equals data-toc-label='RenderBarycentricPerspectiveBlendLogic-equals' }

#### apply( output : <span style="font-weight: 400;">[Vector4](../dot/Vector4.md)</span>, context : <span style="font-weight: 400;">[RenderEvaluationContext](../alpenglow/RenderEvaluationContext.md)</span>, aColor : <span style="font-weight: 400;">[Vector4](../dot/Vector4.md)</span>, bColor : <span style="font-weight: 400;">[Vector4](../dot/Vector4.md)</span>, cColor : <span style="font-weight: 400;">[Vector4](../dot/Vector4.md)</span> ) {: #RenderBarycentricPerspectiveBlendLogic-apply data-toc-label='RenderBarycentricPerspectiveBlendLogic-apply' }

### Static Methods

#### from( pointA : <span style="font-weight: 400;">[Vector3](../dot/Vector3.md)</span>, pointB : <span style="font-weight: 400;">[Vector3](../dot/Vector3.md)</span>, pointC : <span style="font-weight: 400;">[Vector3](../dot/Vector3.md)</span>, accuracy : <span style="font-weight: 400;">[RenderBarycentricPerspectiveBlendAccuracy](../alpenglow/RenderBarycentricPerspectiveBlend.md#RenderBarycentricPerspectiveBlendAccuracy)</span> ) : <span style="font-weight: 400;">[RenderBarycentricPerspectiveBlendLogic](../alpenglow/RenderBarycentricPerspectiveBlend.md#RenderBarycentricPerspectiveBlendLogic)</span> {: #RenderBarycentricPerspectiveBlendLogic-from data-toc-label='RenderBarycentricPerspectiveBlendLogic-from' }



## Class RenderInstructionBarycentricPerspectiveBlend {: #RenderInstructionBarycentricPerspectiveBlend }


```js
import { RenderInstructionBarycentricPerspectiveBlend } from 'scenerystack/alpenglow';
```
### Constructor

#### new RenderInstructionBarycentricPerspectiveBlend( logic : <span style="font-weight: 400;">[RenderBarycentricPerspectiveBlendLogic](../alpenglow/RenderBarycentricPerspectiveBlend.md#RenderBarycentricPerspectiveBlendLogic)</span> ) {: #RenderInstructionBarycentricPerspectiveBlend-constructor data-toc-label='RenderInstructionBarycentricPerspectiveBlend-constructor' }

### Instance Methods

#### toString() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> {: #RenderInstructionBarycentricPerspectiveBlend-toString data-toc-label='RenderInstructionBarycentricPerspectiveBlend-toString' }

#### equals( other : <span style="font-weight: 400;">[RenderInstruction](../alpenglow/RenderInstruction.md)</span>, areLocationsEqual : <span style="font-weight: 400;">( a: [RenderInstructionLocation](../alpenglow/RenderInstruction.md#RenderInstructionLocation), b: [RenderInstructionLocation](../alpenglow/RenderInstruction.md#RenderInstructionLocation) ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #RenderInstructionBarycentricPerspectiveBlend-equals data-toc-label='RenderInstructionBarycentricPerspectiveBlend-equals' }

#### execute( stack : <span style="font-weight: 400;">[RenderExecutionStack](../alpenglow/RenderExecutionStack.md)</span>, context : <span style="font-weight: 400;">[RenderEvaluationContext](../alpenglow/RenderEvaluationContext.md)</span>, executor : <span style="font-weight: 400;">[RenderExecutor](../alpenglow/RenderExecutor.md)</span> ) {: #RenderInstructionBarycentricPerspectiveBlend-execute data-toc-label='RenderInstructionBarycentricPerspectiveBlend-execute' }

#### writeBinary( encoder : <span style="font-weight: 400;">[ByteEncoder](../alpenglow/ByteEncoder.md)</span>, getOffset : <span style="font-weight: 400;">( location: [RenderInstructionLocation](../alpenglow/RenderInstruction.md#RenderInstructionLocation) ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) {: #RenderInstructionBarycentricPerspectiveBlend-writeBinary data-toc-label='RenderInstructionBarycentricPerspectiveBlend-writeBinary' }

#### getBinaryLength() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #RenderInstructionBarycentricPerspectiveBlend-getBinaryLength data-toc-label='RenderInstructionBarycentricPerspectiveBlend-getBinaryLength' }

### Static Methods

#### fromBinary( encoder : <span style="font-weight: 400;">[ByteEncoder](../alpenglow/ByteEncoder.md)</span>, offset : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, getLocation : <span style="font-weight: 400;">( offset: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> ) =&gt; [RenderInstructionLocation](../alpenglow/RenderInstruction.md#RenderInstructionLocation)</span> ) : <span style="font-weight: 400;">[RenderInstructionBarycentricPerspectiveBlend](../alpenglow/RenderBarycentricPerspectiveBlend.md#RenderInstructionBarycentricPerspectiveBlend)</span> {: #RenderInstructionBarycentricPerspectiveBlend-fromBinary data-toc-label='RenderInstructionBarycentricPerspectiveBlend-fromBinary' }



## Type SerializedRenderBarycentricPerspectiveBlend {: #SerializedRenderBarycentricPerspectiveBlend }


```js
import type { SerializedRenderBarycentricPerspectiveBlend } from 'scenerystack/alpenglow';
```
- **type**: "[RenderBarycentricPerspectiveBlend](../alpenglow/RenderBarycentricPerspectiveBlend.md)"
- **pointA**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>[]
- **pointB**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>[]
- **pointC**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>[]
- **accuracy**: [RenderBarycentricPerspectiveBlendAccuracy](../alpenglow/RenderBarycentricPerspectiveBlend.md#RenderBarycentricPerspectiveBlendAccuracy)
- **a**: [SerializedRenderProgram](../alpenglow/RenderProgram.md#SerializedRenderProgram)
- **b**: [SerializedRenderProgram](../alpenglow/RenderProgram.md#SerializedRenderProgram)
- **c**: [SerializedRenderProgram](../alpenglow/RenderProgram.md#SerializedRenderProgram)




## Source Code

See the source for [RenderBarycentricPerspectiveBlend.ts](https://github.com/phetsims/alpenglow/blob/main/js/render-program/RenderBarycentricPerspectiveBlend.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
