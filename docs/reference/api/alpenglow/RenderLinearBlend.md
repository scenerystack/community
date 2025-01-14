# RenderLinearBlend

## Overview

RenderProgram for a linear blend (essentially a chunk of a linear gradient with only a linear transition between
two things.

RenderLinearBlend will interpolate between two different RenderPrograms based on the location. It will evaluate
`clamp( dot( scaledNormal, point ) - offset, 0, 1 )`, and will linearly blend between the "zero"
program (when the value is 0) and the "one" program (when the value is 1).

It can be used in a standalone way, however it is primarily meant to be used when a `RenderLinearGradient`
is split into each linear segment.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class RenderLinearBlend {: #RenderLinearBlend }


```js
import { RenderLinearBlend } from 'scenerystack/alpenglow';
```
### Constructor

#### new RenderLinearBlend( scaledNormal : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span>, offset : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, accuracy : <span style="font-weight: 400;">[RenderLinearBlendAccuracy](../alpenglow/RenderLinearBlend.md#RenderLinearBlendAccuracy)</span>, zero : <span style="font-weight: 400;">[RenderProgram](../alpenglow/RenderProgram.md)</span>, one : <span style="font-weight: 400;">[RenderProgram](../alpenglow/RenderProgram.md)</span>, logic? : <span style="font-weight: 400;">[RenderLinearBlendLogic](../alpenglow/RenderLinearBlend.md#RenderLinearBlendLogic)</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### getName() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> {: #getName data-toc-label='getName' }

#### withChildren( children : <span style="font-weight: 400;">[RenderProgram](../alpenglow/RenderProgram.md)[]</span> ) : <span style="font-weight: 400;">[RenderLinearBlend](../alpenglow/RenderLinearBlend.md)</span> {: #withChildren data-toc-label='withChildren' }

#### transformed( transform : <span style="font-weight: 400;">[Matrix3](../dot/Matrix3.md)</span> ) : <span style="font-weight: 400;">[RenderProgram](../alpenglow/RenderProgram.md)</span> {: #transformed data-toc-label='transformed' }

#### equalsTyped( other : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #equalsTyped data-toc-label='equalsTyped' }

(protected)

#### getSimplified( children : <span style="font-weight: 400;">[RenderProgram](../alpenglow/RenderProgram.md)[]</span> ) : <span style="font-weight: 400;">[RenderProgram](../alpenglow/RenderProgram.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> {: #getSimplified data-toc-label='getSimplified' }

(protected)

#### evaluate( context : <span style="font-weight: 400;">[RenderEvaluationContext](../alpenglow/RenderEvaluationContext.md)</span> ) : <span style="font-weight: 400;">[Vector4](../dot/Vector4.md)</span> {: #evaluate data-toc-label='evaluate' }

#### writeInstructions( instructions : <span style="font-weight: 400;">[RenderInstruction](../alpenglow/RenderInstruction.md)[]</span> ) {: #writeInstructions data-toc-label='writeInstructions' }

#### serialize() : <span style="font-weight: 400;">[SerializedRenderLinearBlend](../alpenglow/RenderLinearBlend.md#SerializedRenderLinearBlend)</span> {: #serialize data-toc-label='serialize' }

### Instance Properties

#### logic : <span style="font-weight: 400;">[RenderLinearBlendLogic](../alpenglow/RenderLinearBlend.md#RenderLinearBlendLogic)</span> {: #logic data-toc-label='logic' }

(readonly)

### Static Methods

#### deserialize( obj : <span style="font-weight: 400;">[SerializedRenderLinearBlend](../alpenglow/RenderLinearBlend.md#SerializedRenderLinearBlend)</span> ) : <span style="font-weight: 400;">[RenderLinearBlend](../alpenglow/RenderLinearBlend.md)</span> {: #deserialize data-toc-label='deserialize' }



## Class RenderInstructionComputeBlendRatio {: #RenderInstructionComputeBlendRatio }


```js
import { RenderInstructionComputeBlendRatio } from 'scenerystack/alpenglow';
```
### Constructor

#### new RenderInstructionComputeBlendRatio( logic : <span style="font-weight: 400;">[RenderLinearBlendLogic](../alpenglow/RenderLinearBlend.md#RenderLinearBlendLogic) | [RenderRadialBlendLogic](../alpenglow/RenderRadialBlend.md#RenderRadialBlendLogic)</span>, zeroLocation : <span style="font-weight: 400;">[RenderInstructionLocation](../alpenglow/RenderInstruction.md#RenderInstructionLocation)</span>, oneLocation : <span style="font-weight: 400;">[RenderInstructionLocation](../alpenglow/RenderInstruction.md#RenderInstructionLocation)</span>, blendLocation : <span style="font-weight: 400;">[RenderInstructionLocation](../alpenglow/RenderInstruction.md#RenderInstructionLocation)</span> ) {: #RenderInstructionComputeBlendRatio-constructor data-toc-label='RenderInstructionComputeBlendRatio-constructor' }

### Instance Methods

#### toString() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> {: #RenderInstructionComputeBlendRatio-toString data-toc-label='RenderInstructionComputeBlendRatio-toString' }

#### equals( other : <span style="font-weight: 400;">[RenderInstruction](../alpenglow/RenderInstruction.md)</span>, areLocationsEqual : <span style="font-weight: 400;">( a: [RenderInstructionLocation](../alpenglow/RenderInstruction.md#RenderInstructionLocation), b: [RenderInstructionLocation](../alpenglow/RenderInstruction.md#RenderInstructionLocation) ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #RenderInstructionComputeBlendRatio-equals data-toc-label='RenderInstructionComputeBlendRatio-equals' }

#### execute( stack : <span style="font-weight: 400;">[RenderExecutionStack](../alpenglow/RenderExecutionStack.md)</span>, context : <span style="font-weight: 400;">[RenderEvaluationContext](../alpenglow/RenderEvaluationContext.md)</span>, executor : <span style="font-weight: 400;">[RenderExecutor](../alpenglow/RenderExecutor.md)</span> ) {: #RenderInstructionComputeBlendRatio-execute data-toc-label='RenderInstructionComputeBlendRatio-execute' }

#### writeBinary( encoder : <span style="font-weight: 400;">[ByteEncoder](../alpenglow/ByteEncoder.md)</span>, getOffset : <span style="font-weight: 400;">( location: [RenderInstructionLocation](../alpenglow/RenderInstruction.md#RenderInstructionLocation) ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) {: #RenderInstructionComputeBlendRatio-writeBinary data-toc-label='RenderInstructionComputeBlendRatio-writeBinary' }

#### getBinaryLength() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #RenderInstructionComputeBlendRatio-getBinaryLength data-toc-label='RenderInstructionComputeBlendRatio-getBinaryLength' }

### Static Methods

#### fromBinary( encoder : <span style="font-weight: 400;">[ByteEncoder](../alpenglow/ByteEncoder.md)</span>, offset : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, getLocation : <span style="font-weight: 400;">( offset: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> ) =&gt; [RenderInstructionLocation](../alpenglow/RenderInstruction.md#RenderInstructionLocation)</span> ) : <span style="font-weight: 400;">[RenderInstructionComputeBlendRatio](../alpenglow/RenderLinearBlend.md#RenderInstructionComputeBlendRatio)</span> {: #RenderInstructionComputeBlendRatio-fromBinary data-toc-label='RenderInstructionComputeBlendRatio-fromBinary' }



## Class RenderInstructionLinearBlend {: #RenderInstructionLinearBlend }


Takes `t` value from vector.x. If t &lt;= 0 or t &gt;= 1, it will only return the "top" value
NOTE: This is used by things in radial blends too, since it is linear at that point

```js
import { RenderInstructionLinearBlend } from 'scenerystack/alpenglow';
```
### Instance Methods

#### toString() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> {: #RenderInstructionLinearBlend-toString data-toc-label='RenderInstructionLinearBlend-toString' }

#### equals( other : <span style="font-weight: 400;">[RenderInstruction](../alpenglow/RenderInstruction.md)</span>, areLocationsEqual : <span style="font-weight: 400;">( a: [RenderInstructionLocation](../alpenglow/RenderInstruction.md#RenderInstructionLocation), b: [RenderInstructionLocation](../alpenglow/RenderInstruction.md#RenderInstructionLocation) ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #RenderInstructionLinearBlend-equals data-toc-label='RenderInstructionLinearBlend-equals' }

#### execute( stack : <span style="font-weight: 400;">[RenderExecutionStack](../alpenglow/RenderExecutionStack.md)</span>, context : <span style="font-weight: 400;">[RenderEvaluationContext](../alpenglow/RenderEvaluationContext.md)</span>, executor : <span style="font-weight: 400;">[RenderExecutor](../alpenglow/RenderExecutor.md)</span> ) {: #RenderInstructionLinearBlend-execute data-toc-label='RenderInstructionLinearBlend-execute' }

( t, oneColor, zeroColor -- color )

#### writeBinary( encoder : <span style="font-weight: 400;">[ByteEncoder](../alpenglow/ByteEncoder.md)</span>, getOffset : <span style="font-weight: 400;">( location: [RenderInstructionLocation](../alpenglow/RenderInstruction.md#RenderInstructionLocation) ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) {: #RenderInstructionLinearBlend-writeBinary data-toc-label='RenderInstructionLinearBlend-writeBinary' }

#### getBinaryLength() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #RenderInstructionLinearBlend-getBinaryLength data-toc-label='RenderInstructionLinearBlend-getBinaryLength' }

### Static Properties

#### INSTANCE : <span style="font-weight: 400;">[RenderInstructionLinearBlend](../alpenglow/RenderLinearBlend.md#RenderInstructionLinearBlend)</span> {: #RenderInstructionLinearBlend-INSTANCE data-toc-label='RenderInstructionLinearBlend-INSTANCE' }

(readonly)



## Class RenderLinearBlendLogic {: #RenderLinearBlendLogic }


```js
import { RenderLinearBlendLogic } from 'scenerystack/alpenglow';
```
### Constructor

#### new RenderLinearBlendLogic( scaledNormal : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span>, offset : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, accuracy : <span style="font-weight: 400;">[RenderLinearBlendAccuracy](../alpenglow/RenderLinearBlend.md#RenderLinearBlendAccuracy)</span> ) {: #RenderLinearBlendLogic-constructor data-toc-label='RenderLinearBlendLogic-constructor' }

### Instance Methods

#### equals( other : <span style="font-weight: 400;">[RenderLinearBlendLogic](../alpenglow/RenderLinearBlend.md#RenderLinearBlendLogic)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #RenderLinearBlendLogic-equals data-toc-label='RenderLinearBlendLogic-equals' }

#### computeLinearValue( context : <span style="font-weight: 400;">[RenderEvaluationContext](../alpenglow/RenderEvaluationContext.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #RenderLinearBlendLogic-computeLinearValue data-toc-label='RenderLinearBlendLogic-computeLinearValue' }



## Type SerializedRenderLinearBlend {: #SerializedRenderLinearBlend }


```js
import type { SerializedRenderLinearBlend } from 'scenerystack/alpenglow';
```
- **type**: "[RenderLinearBlend](../alpenglow/RenderLinearBlend.md)"
- **scaledNormal**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>[]
- **offset**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **accuracy**: [RenderLinearBlendAccuracy](../alpenglow/RenderLinearBlend.md#RenderLinearBlendAccuracy)
- **zero**: [SerializedRenderProgram](../alpenglow/RenderProgram.md#SerializedRenderProgram)
- **one**: [SerializedRenderProgram](../alpenglow/RenderProgram.md#SerializedRenderProgram)




## Source Code

See the source for [RenderLinearBlend.ts](https://github.com/phetsims/alpenglow/blob/main/js/render-program/RenderLinearBlend.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
