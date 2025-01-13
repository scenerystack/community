# RenderBarycentricPerspectiveBlend

## Overview

RenderProgram for a triangular barycentric blend. Applies perspective correction.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class RenderBarycentricPerspectiveBlend {: #RenderBarycentricPerspectiveBlend }


```js
import { RenderBarycentricPerspectiveBlend } from 'scenerystack/alpenglow';
```
### Constructor

#### new RenderBarycentricPerspectiveBlend( pointA : <span style="font-weight: 400; opacity: 80%;">Vector3</span>, pointB : <span style="font-weight: 400; opacity: 80%;">Vector3</span>, pointC : <span style="font-weight: 400; opacity: 80%;">Vector3</span>, accuracy : <span style="font-weight: 400; opacity: 80%;">RenderBarycentricPerspectiveBlendAccuracy</span>, a : <span style="font-weight: 400; opacity: 80%;">RenderProgram</span>, b : <span style="font-weight: 400; opacity: 80%;">RenderProgram</span>, c : <span style="font-weight: 400; opacity: 80%;">RenderProgram</span>, logic? : <span style="font-weight: 400; opacity: 80%;">RenderBarycentricPerspectiveBlendLogic</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### getName() : <span style="font-weight: 400; opacity: 80%;">string</span> {: #getName data-toc-label='getName' }

#### withChildren( children : <span style="font-weight: 400; opacity: 80%;">RenderProgram[]</span> ) : <span style="font-weight: 400; opacity: 80%;">RenderBarycentricPerspectiveBlend</span> {: #withChildren data-toc-label='withChildren' }

#### transformed( transform : <span style="font-weight: 400; opacity: 80%;">Matrix3</span> ) : <span style="font-weight: 400; opacity: 80%;">RenderProgram</span> {: #transformed data-toc-label='transformed' }

#### equalsTyped( other : <span style="font-weight: 400; opacity: 80%;">this</span> ) : <span style="font-weight: 400; opacity: 80%;">boolean</span> {: #equalsTyped data-toc-label='equalsTyped' }

(protected)

#### getSimplified( children : <span style="font-weight: 400; opacity: 80%;">RenderProgram[]</span> ) : <span style="font-weight: 400; opacity: 80%;">RenderProgram | null</span> {: #getSimplified data-toc-label='getSimplified' }

(protected)

TODO: extract code for the barycentric blends? duplicated

#### evaluate( context : <span style="font-weight: 400; opacity: 80%;">RenderEvaluationContext</span> ) : <span style="font-weight: 400; opacity: 80%;">Vector4</span> {: #evaluate data-toc-label='evaluate' }

#### writeInstructions( instructions : <span style="font-weight: 400; opacity: 80%;">RenderInstruction[]</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #writeInstructions data-toc-label='writeInstructions' }

#### serialize() : <span style="font-weight: 400; opacity: 80%;">SerializedRenderBarycentricPerspectiveBlend</span> {: #serialize data-toc-label='serialize' }

### Instance Properties

#### logic : <span style="font-weight: 400; opacity: 80%;">RenderBarycentricPerspectiveBlendLogic</span> {: #logic data-toc-label='logic' }

(readonly)

### Static Methods

#### deserialize( obj : <span style="font-weight: 400; opacity: 80%;">SerializedRenderBarycentricPerspectiveBlend</span> ) : <span style="font-weight: 400; opacity: 80%;">RenderBarycentricPerspectiveBlend</span> {: #deserialize data-toc-label='deserialize' }



## Class RenderBarycentricPerspectiveBlendLogic {: #RenderBarycentricPerspectiveBlendLogic }


```js
import { RenderBarycentricPerspectiveBlendLogic } from 'scenerystack/alpenglow';
```
### Constructor

#### new RenderBarycentricPerspectiveBlendLogic( det : <span style="font-weight: 400; opacity: 80%;">number</span>, diffA : <span style="font-weight: 400; opacity: 80%;">Vector2</span>, diffB : <span style="font-weight: 400; opacity: 80%;">Vector2</span>, point2C : <span style="font-weight: 400; opacity: 80%;">Vector2</span>, zInverseA : <span style="font-weight: 400; opacity: 80%;">number</span>, zInverseB : <span style="font-weight: 400; opacity: 80%;">number</span>, zInverseC : <span style="font-weight: 400; opacity: 80%;">number</span>, accuracy : <span style="font-weight: 400; opacity: 80%;">RenderBarycentricPerspectiveBlendAccuracy</span> ) {: #RenderBarycentricPerspectiveBlendLogic-constructor data-toc-label='RenderBarycentricPerspectiveBlendLogic-constructor' }

### Instance Methods

#### equals( other : <span style="font-weight: 400; opacity: 80%;">RenderBarycentricPerspectiveBlendLogic</span> ) : <span style="font-weight: 400; opacity: 80%;">boolean</span> {: #RenderBarycentricPerspectiveBlendLogic-equals data-toc-label='RenderBarycentricPerspectiveBlendLogic-equals' }

#### apply( output : <span style="font-weight: 400; opacity: 80%;">Vector4</span>, context : <span style="font-weight: 400; opacity: 80%;">RenderEvaluationContext</span>, aColor : <span style="font-weight: 400; opacity: 80%;">Vector4</span>, bColor : <span style="font-weight: 400; opacity: 80%;">Vector4</span>, cColor : <span style="font-weight: 400; opacity: 80%;">Vector4</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #RenderBarycentricPerspectiveBlendLogic-apply data-toc-label='RenderBarycentricPerspectiveBlendLogic-apply' }

### Static Methods

#### from( pointA : <span style="font-weight: 400; opacity: 80%;">Vector3</span>, pointB : <span style="font-weight: 400; opacity: 80%;">Vector3</span>, pointC : <span style="font-weight: 400; opacity: 80%;">Vector3</span>, accuracy : <span style="font-weight: 400; opacity: 80%;">RenderBarycentricPerspectiveBlendAccuracy</span> ) : <span style="font-weight: 400; opacity: 80%;">RenderBarycentricPerspectiveBlendLogic</span> {: #RenderBarycentricPerspectiveBlendLogic-from data-toc-label='RenderBarycentricPerspectiveBlendLogic-from' }



## Class RenderInstructionBarycentricPerspectiveBlend {: #RenderInstructionBarycentricPerspectiveBlend }


```js
import { RenderInstructionBarycentricPerspectiveBlend } from 'scenerystack/alpenglow';
```
### Constructor

#### new RenderInstructionBarycentricPerspectiveBlend( logic : <span style="font-weight: 400; opacity: 80%;">RenderBarycentricPerspectiveBlendLogic</span> ) {: #RenderInstructionBarycentricPerspectiveBlend-constructor data-toc-label='RenderInstructionBarycentricPerspectiveBlend-constructor' }

### Instance Methods

#### toString() : <span style="font-weight: 400; opacity: 80%;">string</span> {: #RenderInstructionBarycentricPerspectiveBlend-toString data-toc-label='RenderInstructionBarycentricPerspectiveBlend-toString' }

#### equals( other : <span style="font-weight: 400; opacity: 80%;">RenderInstruction</span>, areLocationsEqual : <span style="font-weight: 400; opacity: 80%;">( a: RenderInstructionLocation, b: RenderInstructionLocation ) =&gt; boolean</span> ) : <span style="font-weight: 400; opacity: 80%;">boolean</span> {: #RenderInstructionBarycentricPerspectiveBlend-equals data-toc-label='RenderInstructionBarycentricPerspectiveBlend-equals' }

#### execute( stack : <span style="font-weight: 400; opacity: 80%;">RenderExecutionStack</span>, context : <span style="font-weight: 400; opacity: 80%;">RenderEvaluationContext</span>, executor : <span style="font-weight: 400; opacity: 80%;">RenderExecutor</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #RenderInstructionBarycentricPerspectiveBlend-execute data-toc-label='RenderInstructionBarycentricPerspectiveBlend-execute' }

#### writeBinary( encoder : <span style="font-weight: 400; opacity: 80%;">ByteEncoder</span>, getOffset : <span style="font-weight: 400; opacity: 80%;">( location: RenderInstructionLocation ) =&gt; number</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #RenderInstructionBarycentricPerspectiveBlend-writeBinary data-toc-label='RenderInstructionBarycentricPerspectiveBlend-writeBinary' }

#### getBinaryLength() : <span style="font-weight: 400; opacity: 80%;">number</span> {: #RenderInstructionBarycentricPerspectiveBlend-getBinaryLength data-toc-label='RenderInstructionBarycentricPerspectiveBlend-getBinaryLength' }

### Static Methods

#### fromBinary( encoder : <span style="font-weight: 400; opacity: 80%;">ByteEncoder</span>, offset : <span style="font-weight: 400; opacity: 80%;">number</span>, getLocation : <span style="font-weight: 400; opacity: 80%;">( offset: number ) =&gt; RenderInstructionLocation</span> ) : <span style="font-weight: 400; opacity: 80%;">RenderInstructionBarycentricPerspectiveBlend</span> {: #RenderInstructionBarycentricPerspectiveBlend-fromBinary data-toc-label='RenderInstructionBarycentricPerspectiveBlend-fromBinary' }



## Source Code

See the source for [RenderBarycentricPerspectiveBlend.ts](https://github.com/phetsims/alpenglow/blob/main/js/render-program/RenderBarycentricPerspectiveBlend.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
