# RenderLinearGradient

## Overview

RenderProgram for a classic linear gradient

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class RenderLinearGradient {: #RenderLinearGradient }


```js
import { RenderLinearGradient } from 'scenerystack/alpenglow';
```
### Constructor

#### new RenderLinearGradient( transform : <span style="font-weight: 400; opacity: 80%;">Matrix3</span>, start : <span style="font-weight: 400; opacity: 80%;">Vector2</span>, end : <span style="font-weight: 400; opacity: 80%;">Vector2</span>, stops : <span style="font-weight: 400; opacity: 80%;">RenderGradientStop[]</span>, extend : <span style="font-weight: 400; opacity: 80%;">RenderExtend</span>, accuracy : <span style="font-weight: 400; opacity: 80%;">RenderLinearGradientAccuracy</span>, logic? : <span style="font-weight: 400; opacity: 80%;">RenderLinearGradientLogic</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### getName() : <span style="font-weight: 400; opacity: 80%;">string</span> {: #getName data-toc-label='getName' }

#### withChildren( children : <span style="font-weight: 400; opacity: 80%;">RenderProgram[]</span> ) : <span style="font-weight: 400; opacity: 80%;">RenderLinearGradient</span> {: #withChildren data-toc-label='withChildren' }

#### isSplittable() : <span style="font-weight: 400; opacity: 80%;">boolean</span> {: #isSplittable data-toc-label='isSplittable' }

#### transformed( transform : <span style="font-weight: 400; opacity: 80%;">Matrix3</span> ) : <span style="font-weight: 400; opacity: 80%;">RenderProgram</span> {: #transformed data-toc-label='transformed' }

#### equalsTyped( other : <span style="font-weight: 400; opacity: 80%;">this</span> ) : <span style="font-weight: 400; opacity: 80%;">boolean</span> {: #equalsTyped data-toc-label='equalsTyped' }

(protected)

#### getSimplified( children : <span style="font-weight: 400; opacity: 80%;">RenderProgram[]</span> ) : <span style="font-weight: 400; opacity: 80%;">RenderProgram | null</span> {: #getSimplified data-toc-label='getSimplified' }

(protected)

#### evaluate( context : <span style="font-weight: 400; opacity: 80%;">RenderEvaluationContext</span> ) : <span style="font-weight: 400; opacity: 80%;">Vector4</span> {: #evaluate data-toc-label='evaluate' }

#### writeInstructions( instructions : <span style="font-weight: 400; opacity: 80%;">RenderInstruction[]</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #writeInstructions data-toc-label='writeInstructions' }

#### split( face : <span style="font-weight: 400; opacity: 80%;">RenderableFace</span> ) : <span style="font-weight: 400; opacity: 80%;">RenderableFace[]</span> {: #split data-toc-label='split' }

#### serialize() : <span style="font-weight: 400; opacity: 80%;">SerializedRenderLinearGradient</span> {: #serialize data-toc-label='serialize' }

### Instance Properties

#### logic : <span style="font-weight: 400; opacity: 80%;">RenderLinearGradientLogic</span> {: #logic data-toc-label='logic' }

(readonly)

### Static Methods

#### deserialize( obj : <span style="font-weight: 400; opacity: 80%;">SerializedRenderLinearGradient</span> ) : <span style="font-weight: 400; opacity: 80%;">RenderLinearGradient</span> {: #deserialize data-toc-label='deserialize' }



## Class RenderInstructionComputeGradientRatio {: #RenderInstructionComputeGradientRatio }


```js
import { RenderInstructionComputeGradientRatio } from 'scenerystack/alpenglow';
```
### Constructor

#### new RenderInstructionComputeGradientRatio( logic : <span style="font-weight: 400; opacity: 80%;">RenderLinearGradientLogic | RenderRadialGradientLogic</span>, stopLocations : <span style="font-weight: 400; opacity: 80%;">RenderInstructionLocation[]</span>, blendLocation : <span style="font-weight: 400; opacity: 80%;">RenderInstructionLocation</span> ) {: #RenderInstructionComputeGradientRatio-constructor data-toc-label='RenderInstructionComputeGradientRatio-constructor' }

### Instance Methods

#### toString() : <span style="font-weight: 400; opacity: 80%;">string</span> {: #RenderInstructionComputeGradientRatio-toString data-toc-label='RenderInstructionComputeGradientRatio-toString' }

#### equals( other : <span style="font-weight: 400; opacity: 80%;">RenderInstruction</span>, areLocationsEqual : <span style="font-weight: 400; opacity: 80%;">( a: RenderInstructionLocation, b: RenderInstructionLocation ) =&gt; boolean</span> ) : <span style="font-weight: 400; opacity: 80%;">boolean</span> {: #RenderInstructionComputeGradientRatio-equals data-toc-label='RenderInstructionComputeGradientRatio-equals' }

#### execute( stack : <span style="font-weight: 400; opacity: 80%;">RenderExecutionStack</span>, context : <span style="font-weight: 400; opacity: 80%;">RenderEvaluationContext</span>, executor : <span style="font-weight: 400; opacity: 80%;">RenderExecutor</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #RenderInstructionComputeGradientRatio-execute data-toc-label='RenderInstructionComputeGradientRatio-execute' }

#### writeBinary( encoder : <span style="font-weight: 400; opacity: 80%;">ByteEncoder</span>, getOffset : <span style="font-weight: 400; opacity: 80%;">( location: RenderInstructionLocation ) =&gt; number</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #RenderInstructionComputeGradientRatio-writeBinary data-toc-label='RenderInstructionComputeGradientRatio-writeBinary' }

#### getBinaryLength() : <span style="font-weight: 400; opacity: 80%;">number</span> {: #RenderInstructionComputeGradientRatio-getBinaryLength data-toc-label='RenderInstructionComputeGradientRatio-getBinaryLength' }

### Static Methods

#### fromBinary( encoder : <span style="font-weight: 400; opacity: 80%;">ByteEncoder</span>, offset : <span style="font-weight: 400; opacity: 80%;">number</span>, getLocation : <span style="font-weight: 400; opacity: 80%;">( offset: number ) =&gt; RenderInstructionLocation</span> ) : <span style="font-weight: 400; opacity: 80%;">RenderInstructionComputeGradientRatio</span> {: #RenderInstructionComputeGradientRatio-fromBinary data-toc-label='RenderInstructionComputeGradientRatio-fromBinary' }

### Static Properties

#### GRADIENT_BEFORE_RATIO_COUNT_BITS {: #RenderInstructionComputeGradientRatio-GRADIENT_BEFORE_RATIO_COUNT_BITS data-toc-label='RenderInstructionComputeGradientRatio-GRADIENT_BEFORE_RATIO_COUNT_BITS' }

(readonly)



## Class RenderLinearGradientLogic {: #RenderLinearGradientLogic }


```js
import { RenderLinearGradientLogic } from 'scenerystack/alpenglow';
```
### Constructor

#### new RenderLinearGradientLogic( inverseTransform : <span style="font-weight: 400; opacity: 80%;">Matrix3</span>, start : <span style="font-weight: 400; opacity: 80%;">Vector2</span>, gradDelta : <span style="font-weight: 400; opacity: 80%;">Vector2</span>, ratios : <span style="font-weight: 400; opacity: 80%;">number[]</span>, extend : <span style="font-weight: 400; opacity: 80%;">RenderExtend</span>, accuracy : <span style="font-weight: 400; opacity: 80%;">RenderLinearGradientAccuracy</span> ) {: #RenderLinearGradientLogic-constructor data-toc-label='RenderLinearGradientLogic-constructor' }

### Instance Methods

#### equals( other : <span style="font-weight: 400; opacity: 80%;">RenderLinearGradientLogic</span> ) : <span style="font-weight: 400; opacity: 80%;">boolean</span> {: #RenderLinearGradientLogic-equals data-toc-label='RenderLinearGradientLogic-equals' }

#### computeLinearValue( context : <span style="font-weight: 400; opacity: 80%;">RenderEvaluationContext</span> ) : <span style="font-weight: 400; opacity: 80%;">number</span> {: #RenderLinearGradientLogic-computeLinearValue data-toc-label='RenderLinearGradientLogic-computeLinearValue' }

### Static Methods

#### from( transform : <span style="font-weight: 400; opacity: 80%;">Matrix3</span>, start : <span style="font-weight: 400; opacity: 80%;">Vector2</span>, end : <span style="font-weight: 400; opacity: 80%;">Vector2</span>, ratios : <span style="font-weight: 400; opacity: 80%;">number[]</span>, extend : <span style="font-weight: 400; opacity: 80%;">RenderExtend</span>, accuracy : <span style="font-weight: 400; opacity: 80%;">RenderLinearGradientAccuracy</span> ) : <span style="font-weight: 400; opacity: 80%;">RenderLinearGradientLogic</span> {: #RenderLinearGradientLogic-from data-toc-label='RenderLinearGradientLogic-from' }



## Source Code

See the source for [RenderLinearGradient.ts](https://github.com/phetsims/alpenglow/blob/main/js/render-program/RenderLinearGradient.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
