# RenderLinearGradient

## Overview

RenderProgram for a classic linear gradient

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class RenderLinearGradient {: #RenderLinearGradient }


```js
import { RenderLinearGradient } from 'scenerystack/alpenglow';
```
### Constructor

#### new RenderLinearGradient( transform : <span style="font-weight: 400;">[Matrix3](../dot/Matrix3.md)</span>, start : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span>, end : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span>, stops : <span style="font-weight: 400;">[RenderGradientStop](../alpenglow/RenderGradientStop.md)[]</span>, extend : <span style="font-weight: 400;">[RenderExtend](../alpenglow/RenderExtend.md)</span>, accuracy : <span style="font-weight: 400;">[RenderLinearGradientAccuracy](../alpenglow/RenderLinearGradient.md#RenderLinearGradientAccuracy)</span>, logic? : <span style="font-weight: 400;">[RenderLinearGradientLogic](../alpenglow/RenderLinearGradient.md#RenderLinearGradientLogic)</span> ) {: #constructor data-toc-label='constructor' }

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

#### logic : <span style="font-weight: 400;">[RenderLinearGradientLogic](../alpenglow/RenderLinearGradient.md#RenderLinearGradientLogic)</span> {: #logic data-toc-label='logic' }

(readonly)

### Static Methods

#### deserialize( obj : <span style="font-weight: 400;">[SerializedRenderLinearGradient](../alpenglow/RenderLinearGradient.md#SerializedRenderLinearGradient)</span> ) : <span style="font-weight: 400;">[RenderLinearGradient](../alpenglow/RenderLinearGradient.md)</span> {: #deserialize data-toc-label='deserialize' }



## Class RenderInstructionComputeGradientRatio {: #RenderInstructionComputeGradientRatio }


```js
import { RenderInstructionComputeGradientRatio } from 'scenerystack/alpenglow';
```
### Constructor

#### new RenderInstructionComputeGradientRatio( logic : <span style="font-weight: 400;">[RenderLinearGradientLogic](../alpenglow/RenderLinearGradient.md#RenderLinearGradientLogic) | [RenderRadialGradientLogic](../alpenglow/RenderRadialGradient.md#RenderRadialGradientLogic)</span>, stopLocations : <span style="font-weight: 400;">[RenderInstructionLocation](../alpenglow/RenderInstruction.md#RenderInstructionLocation)[]</span>, blendLocation : <span style="font-weight: 400;">[RenderInstructionLocation](../alpenglow/RenderInstruction.md#RenderInstructionLocation)</span> ) {: #RenderInstructionComputeGradientRatio-constructor data-toc-label='RenderInstructionComputeGradientRatio-constructor' }

### Instance Methods

#### toString() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> {: #RenderInstructionComputeGradientRatio-toString data-toc-label='RenderInstructionComputeGradientRatio-toString' }

#### equals( other : <span style="font-weight: 400;">[RenderInstruction](../alpenglow/RenderInstruction.md)</span>, areLocationsEqual : <span style="font-weight: 400;">( a: [RenderInstructionLocation](../alpenglow/RenderInstruction.md#RenderInstructionLocation), b: [RenderInstructionLocation](../alpenglow/RenderInstruction.md#RenderInstructionLocation) ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #RenderInstructionComputeGradientRatio-equals data-toc-label='RenderInstructionComputeGradientRatio-equals' }

#### execute( stack : <span style="font-weight: 400;">[RenderExecutionStack](../alpenglow/RenderExecutionStack.md)</span>, context : <span style="font-weight: 400;">[RenderEvaluationContext](../alpenglow/RenderEvaluationContext.md)</span>, executor : <span style="font-weight: 400;">[RenderExecutor](../alpenglow/RenderExecutor.md)</span> ) {: #RenderInstructionComputeGradientRatio-execute data-toc-label='RenderInstructionComputeGradientRatio-execute' }

#### writeBinary( encoder : <span style="font-weight: 400;">[ByteEncoder](../alpenglow/ByteEncoder.md)</span>, getOffset : <span style="font-weight: 400;">( location: [RenderInstructionLocation](../alpenglow/RenderInstruction.md#RenderInstructionLocation) ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) {: #RenderInstructionComputeGradientRatio-writeBinary data-toc-label='RenderInstructionComputeGradientRatio-writeBinary' }

#### getBinaryLength() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #RenderInstructionComputeGradientRatio-getBinaryLength data-toc-label='RenderInstructionComputeGradientRatio-getBinaryLength' }

### Static Methods

#### fromBinary( encoder : <span style="font-weight: 400;">[ByteEncoder](../alpenglow/ByteEncoder.md)</span>, offset : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, getLocation : <span style="font-weight: 400;">( offset: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> ) =&gt; [RenderInstructionLocation](../alpenglow/RenderInstruction.md#RenderInstructionLocation)</span> ) : <span style="font-weight: 400;">[RenderInstructionComputeGradientRatio](../alpenglow/RenderLinearGradient.md#RenderInstructionComputeGradientRatio)</span> {: #RenderInstructionComputeGradientRatio-fromBinary data-toc-label='RenderInstructionComputeGradientRatio-fromBinary' }

### Static Properties

#### GRADIENT_BEFORE_RATIO_COUNT_BITS {: #RenderInstructionComputeGradientRatio-GRADIENT_BEFORE_RATIO_COUNT_BITS data-toc-label='RenderInstructionComputeGradientRatio-GRADIENT_BEFORE_RATIO_COUNT_BITS' }

(readonly)



## Class RenderLinearGradientLogic {: #RenderLinearGradientLogic }


```js
import { RenderLinearGradientLogic } from 'scenerystack/alpenglow';
```
### Constructor

#### new RenderLinearGradientLogic( inverseTransform : <span style="font-weight: 400;">[Matrix3](../dot/Matrix3.md)</span>, start : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span>, gradDelta : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span>, ratios : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>[]</span>, extend : <span style="font-weight: 400;">[RenderExtend](../alpenglow/RenderExtend.md)</span>, accuracy : <span style="font-weight: 400;">[RenderLinearGradientAccuracy](../alpenglow/RenderLinearGradient.md#RenderLinearGradientAccuracy)</span> ) {: #RenderLinearGradientLogic-constructor data-toc-label='RenderLinearGradientLogic-constructor' }

### Instance Methods

#### equals( other : <span style="font-weight: 400;">[RenderLinearGradientLogic](../alpenglow/RenderLinearGradient.md#RenderLinearGradientLogic)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #RenderLinearGradientLogic-equals data-toc-label='RenderLinearGradientLogic-equals' }

#### computeLinearValue( context : <span style="font-weight: 400;">[RenderEvaluationContext](../alpenglow/RenderEvaluationContext.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #RenderLinearGradientLogic-computeLinearValue data-toc-label='RenderLinearGradientLogic-computeLinearValue' }

### Static Methods

#### from( transform : <span style="font-weight: 400;">[Matrix3](../dot/Matrix3.md)</span>, start : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span>, end : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span>, ratios : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>[]</span>, extend : <span style="font-weight: 400;">[RenderExtend](../alpenglow/RenderExtend.md)</span>, accuracy : <span style="font-weight: 400;">[RenderLinearGradientAccuracy](../alpenglow/RenderLinearGradient.md#RenderLinearGradientAccuracy)</span> ) : <span style="font-weight: 400;">[RenderLinearGradientLogic](../alpenglow/RenderLinearGradient.md#RenderLinearGradientLogic)</span> {: #RenderLinearGradientLogic-from data-toc-label='RenderLinearGradientLogic-from' }



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
- **accuracy**: [RenderLinearGradientAccuracy](../alpenglow/RenderLinearGradient.md#RenderLinearGradientAccuracy)




## Source Code

See the source for [RenderLinearGradient.ts](https://github.com/phetsims/alpenglow/blob/main/js/render-program/RenderLinearGradient.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
