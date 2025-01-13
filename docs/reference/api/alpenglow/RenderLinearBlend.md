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

#### new RenderLinearBlend( scaledNormal : <span style="font-weight: 400; opacity: 80%;">Vector2</span>, offset : <span style="font-weight: 400; opacity: 80%;">number</span>, accuracy : <span style="font-weight: 400; opacity: 80%;">RenderLinearBlendAccuracy</span>, zero : <span style="font-weight: 400; opacity: 80%;">RenderProgram</span>, one : <span style="font-weight: 400; opacity: 80%;">RenderProgram</span>, logic? : <span style="font-weight: 400; opacity: 80%;">RenderLinearBlendLogic</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### getName() : <span style="font-weight: 400; opacity: 80%;">string</span> {: #getName data-toc-label='getName' }

#### withChildren( children : <span style="font-weight: 400; opacity: 80%;">RenderProgram[]</span> ) : <span style="font-weight: 400; opacity: 80%;">RenderLinearBlend</span> {: #withChildren data-toc-label='withChildren' }

#### transformed( transform : <span style="font-weight: 400; opacity: 80%;">Matrix3</span> ) : <span style="font-weight: 400; opacity: 80%;">RenderProgram</span> {: #transformed data-toc-label='transformed' }

#### equalsTyped( other : <span style="font-weight: 400; opacity: 80%;">this</span> ) : <span style="font-weight: 400; opacity: 80%;">boolean</span> {: #equalsTyped data-toc-label='equalsTyped' }

(protected)

#### getSimplified( children : <span style="font-weight: 400; opacity: 80%;">RenderProgram[]</span> ) : <span style="font-weight: 400; opacity: 80%;">RenderProgram | null</span> {: #getSimplified data-toc-label='getSimplified' }

(protected)

#### evaluate( context : <span style="font-weight: 400; opacity: 80%;">RenderEvaluationContext</span> ) : <span style="font-weight: 400; opacity: 80%;">Vector4</span> {: #evaluate data-toc-label='evaluate' }

#### writeInstructions( instructions : <span style="font-weight: 400; opacity: 80%;">RenderInstruction[]</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #writeInstructions data-toc-label='writeInstructions' }

#### serialize() : <span style="font-weight: 400; opacity: 80%;">SerializedRenderLinearBlend</span> {: #serialize data-toc-label='serialize' }

### Instance Properties

#### logic : <span style="font-weight: 400; opacity: 80%;">RenderLinearBlendLogic</span> {: #logic data-toc-label='logic' }

(readonly)

### Static Methods

#### deserialize( obj : <span style="font-weight: 400; opacity: 80%;">SerializedRenderLinearBlend</span> ) : <span style="font-weight: 400; opacity: 80%;">RenderLinearBlend</span> {: #deserialize data-toc-label='deserialize' }



## Class RenderInstructionComputeBlendRatio {: #RenderInstructionComputeBlendRatio }


```js
import { RenderInstructionComputeBlendRatio } from 'scenerystack/alpenglow';
```
### Constructor

#### new RenderInstructionComputeBlendRatio( logic : <span style="font-weight: 400; opacity: 80%;">RenderLinearBlendLogic | RenderRadialBlendLogic</span>, zeroLocation : <span style="font-weight: 400; opacity: 80%;">RenderInstructionLocation</span>, oneLocation : <span style="font-weight: 400; opacity: 80%;">RenderInstructionLocation</span>, blendLocation : <span style="font-weight: 400; opacity: 80%;">RenderInstructionLocation</span> ) {: #RenderInstructionComputeBlendRatio-constructor data-toc-label='RenderInstructionComputeBlendRatio-constructor' }

### Instance Methods

#### toString() : <span style="font-weight: 400; opacity: 80%;">string</span> {: #RenderInstructionComputeBlendRatio-toString data-toc-label='RenderInstructionComputeBlendRatio-toString' }

#### equals( other : <span style="font-weight: 400; opacity: 80%;">RenderInstruction</span>, areLocationsEqual : <span style="font-weight: 400; opacity: 80%;">( a: RenderInstructionLocation, b: RenderInstructionLocation ) =&gt; boolean</span> ) : <span style="font-weight: 400; opacity: 80%;">boolean</span> {: #RenderInstructionComputeBlendRatio-equals data-toc-label='RenderInstructionComputeBlendRatio-equals' }

#### execute( stack : <span style="font-weight: 400; opacity: 80%;">RenderExecutionStack</span>, context : <span style="font-weight: 400; opacity: 80%;">RenderEvaluationContext</span>, executor : <span style="font-weight: 400; opacity: 80%;">RenderExecutor</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #RenderInstructionComputeBlendRatio-execute data-toc-label='RenderInstructionComputeBlendRatio-execute' }

#### writeBinary( encoder : <span style="font-weight: 400; opacity: 80%;">ByteEncoder</span>, getOffset : <span style="font-weight: 400; opacity: 80%;">( location: RenderInstructionLocation ) =&gt; number</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #RenderInstructionComputeBlendRatio-writeBinary data-toc-label='RenderInstructionComputeBlendRatio-writeBinary' }

#### getBinaryLength() : <span style="font-weight: 400; opacity: 80%;">number</span> {: #RenderInstructionComputeBlendRatio-getBinaryLength data-toc-label='RenderInstructionComputeBlendRatio-getBinaryLength' }

### Static Methods

#### fromBinary( encoder : <span style="font-weight: 400; opacity: 80%;">ByteEncoder</span>, offset : <span style="font-weight: 400; opacity: 80%;">number</span>, getLocation : <span style="font-weight: 400; opacity: 80%;">( offset: number ) =&gt; RenderInstructionLocation</span> ) : <span style="font-weight: 400; opacity: 80%;">RenderInstructionComputeBlendRatio</span> {: #RenderInstructionComputeBlendRatio-fromBinary data-toc-label='RenderInstructionComputeBlendRatio-fromBinary' }



## Class RenderInstructionLinearBlend {: #RenderInstructionLinearBlend }


Takes `t` value from vector.x. If t &lt;= 0 or t &gt;= 1, it will only return the "top" value
NOTE: This is used by things in radial blends too, since it is linear at that point

```js
import { RenderInstructionLinearBlend } from 'scenerystack/alpenglow';
```
### Instance Methods

#### toString() : <span style="font-weight: 400; opacity: 80%;">string</span> {: #RenderInstructionLinearBlend-toString data-toc-label='RenderInstructionLinearBlend-toString' }

#### equals( other : <span style="font-weight: 400; opacity: 80%;">RenderInstruction</span>, areLocationsEqual : <span style="font-weight: 400; opacity: 80%;">( a: RenderInstructionLocation, b: RenderInstructionLocation ) =&gt; boolean</span> ) : <span style="font-weight: 400; opacity: 80%;">boolean</span> {: #RenderInstructionLinearBlend-equals data-toc-label='RenderInstructionLinearBlend-equals' }

#### execute( stack : <span style="font-weight: 400; opacity: 80%;">RenderExecutionStack</span>, context : <span style="font-weight: 400; opacity: 80%;">RenderEvaluationContext</span>, executor : <span style="font-weight: 400; opacity: 80%;">RenderExecutor</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #RenderInstructionLinearBlend-execute data-toc-label='RenderInstructionLinearBlend-execute' }

( t, oneColor, zeroColor -- color )

#### writeBinary( encoder : <span style="font-weight: 400; opacity: 80%;">ByteEncoder</span>, getOffset : <span style="font-weight: 400; opacity: 80%;">( location: RenderInstructionLocation ) =&gt; number</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #RenderInstructionLinearBlend-writeBinary data-toc-label='RenderInstructionLinearBlend-writeBinary' }

#### getBinaryLength() : <span style="font-weight: 400; opacity: 80%;">number</span> {: #RenderInstructionLinearBlend-getBinaryLength data-toc-label='RenderInstructionLinearBlend-getBinaryLength' }

### Static Properties

#### INSTANCE : <span style="font-weight: 400; opacity: 80%;">RenderInstructionLinearBlend</span> {: #RenderInstructionLinearBlend-INSTANCE data-toc-label='RenderInstructionLinearBlend-INSTANCE' }

(readonly)



## Class RenderLinearBlendLogic {: #RenderLinearBlendLogic }


```js
import { RenderLinearBlendLogic } from 'scenerystack/alpenglow';
```
### Constructor

#### new RenderLinearBlendLogic( scaledNormal : <span style="font-weight: 400; opacity: 80%;">Vector2</span>, offset : <span style="font-weight: 400; opacity: 80%;">number</span>, accuracy : <span style="font-weight: 400; opacity: 80%;">RenderLinearBlendAccuracy</span> ) {: #RenderLinearBlendLogic-constructor data-toc-label='RenderLinearBlendLogic-constructor' }

### Instance Methods

#### equals( other : <span style="font-weight: 400; opacity: 80%;">RenderLinearBlendLogic</span> ) : <span style="font-weight: 400; opacity: 80%;">boolean</span> {: #RenderLinearBlendLogic-equals data-toc-label='RenderLinearBlendLogic-equals' }

#### computeLinearValue( context : <span style="font-weight: 400; opacity: 80%;">RenderEvaluationContext</span> ) : <span style="font-weight: 400; opacity: 80%;">number</span> {: #RenderLinearBlendLogic-computeLinearValue data-toc-label='RenderLinearBlendLogic-computeLinearValue' }



## Source Code

See the source for [RenderLinearBlend.ts](https://github.com/phetsims/alpenglow/blob/main/js/render-program/RenderLinearBlend.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
