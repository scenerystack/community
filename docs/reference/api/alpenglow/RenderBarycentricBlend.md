# RenderBarycentricBlend

## Overview

RenderProgram for a triangular barycentric blend.

NOTE: Does not apply perspective correction, is purely a 2d blend.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class RenderBarycentricBlend {: #RenderBarycentricBlend }


```js
import { RenderBarycentricBlend } from 'scenerystack/alpenglow';
```
### Constructor

#### new RenderBarycentricBlend( pointA : <span style="font-weight: 400; opacity: 80%;">Vector2</span>, pointB : <span style="font-weight: 400; opacity: 80%;">Vector2</span>, pointC : <span style="font-weight: 400; opacity: 80%;">Vector2</span>, accuracy : <span style="font-weight: 400; opacity: 80%;">RenderBarycentricBlendAccuracy</span>, a : <span style="font-weight: 400; opacity: 80%;">RenderProgram</span>, b : <span style="font-weight: 400; opacity: 80%;">RenderProgram</span>, c : <span style="font-weight: 400; opacity: 80%;">RenderProgram</span>, logic? : <span style="font-weight: 400; opacity: 80%;">RenderBarycentricBlendLogic</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### getName() : <span style="font-weight: 400; opacity: 80%;">string</span> {: #getName data-toc-label='getName' }

#### withChildren( children : <span style="font-weight: 400; opacity: 80%;">RenderProgram[]</span> ) : <span style="font-weight: 400; opacity: 80%;">RenderBarycentricBlend</span> {: #withChildren data-toc-label='withChildren' }

#### transformed( transform : <span style="font-weight: 400; opacity: 80%;">Matrix3</span> ) : <span style="font-weight: 400; opacity: 80%;">RenderProgram</span> {: #transformed data-toc-label='transformed' }

#### equalsTyped( other : <span style="font-weight: 400; opacity: 80%;">this</span> ) : <span style="font-weight: 400; opacity: 80%;">boolean</span> {: #equalsTyped data-toc-label='equalsTyped' }

(protected)

#### getSimplified( children : <span style="font-weight: 400; opacity: 80%;">RenderProgram[]</span> ) : <span style="font-weight: 400; opacity: 80%;">RenderProgram | null</span> {: #getSimplified data-toc-label='getSimplified' }

(protected)

#### evaluate( context : <span style="font-weight: 400; opacity: 80%;">RenderEvaluationContext</span> ) : <span style="font-weight: 400; opacity: 80%;">Vector4</span> {: #evaluate data-toc-label='evaluate' }

#### writeInstructions( instructions : <span style="font-weight: 400; opacity: 80%;">RenderInstruction[]</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #writeInstructions data-toc-label='writeInstructions' }

#### serialize() : <span style="font-weight: 400; opacity: 80%;">SerializedRenderBarycentricBlend</span> {: #serialize data-toc-label='serialize' }

### Instance Properties

#### logic : <span style="font-weight: 400; opacity: 80%;">RenderBarycentricBlendLogic</span> {: #logic data-toc-label='logic' }

(readonly)

### Static Methods

#### deserialize( obj : <span style="font-weight: 400; opacity: 80%;">SerializedRenderBarycentricBlend</span> ) : <span style="font-weight: 400; opacity: 80%;">RenderBarycentricBlend</span> {: #deserialize data-toc-label='deserialize' }



## Class RenderBarycentricBlendLogic {: #RenderBarycentricBlendLogic }


```js
import { RenderBarycentricBlendLogic } from 'scenerystack/alpenglow';
```
### Constructor

#### new RenderBarycentricBlendLogic( det : <span style="font-weight: 400; opacity: 80%;">number</span>, diffA : <span style="font-weight: 400; opacity: 80%;">Vector2</span>, diffB : <span style="font-weight: 400; opacity: 80%;">Vector2</span>, pointC : <span style="font-weight: 400; opacity: 80%;">Vector2</span>, accuracy : <span style="font-weight: 400; opacity: 80%;">RenderBarycentricBlendAccuracy</span> ) {: #RenderBarycentricBlendLogic-constructor data-toc-label='RenderBarycentricBlendLogic-constructor' }

### Instance Methods

#### equals( other : <span style="font-weight: 400; opacity: 80%;">RenderBarycentricBlendLogic</span> ) : <span style="font-weight: 400; opacity: 80%;">boolean</span> {: #RenderBarycentricBlendLogic-equals data-toc-label='RenderBarycentricBlendLogic-equals' }

#### apply( output : <span style="font-weight: 400; opacity: 80%;">Vector4</span>, context : <span style="font-weight: 400; opacity: 80%;">RenderEvaluationContext</span>, aColor : <span style="font-weight: 400; opacity: 80%;">Vector4</span>, bColor : <span style="font-weight: 400; opacity: 80%;">Vector4</span>, cColor : <span style="font-weight: 400; opacity: 80%;">Vector4</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #RenderBarycentricBlendLogic-apply data-toc-label='RenderBarycentricBlendLogic-apply' }

### Static Methods

#### from( pointA : <span style="font-weight: 400; opacity: 80%;">Vector2</span>, pointB : <span style="font-weight: 400; opacity: 80%;">Vector2</span>, pointC : <span style="font-weight: 400; opacity: 80%;">Vector2</span>, accuracy : <span style="font-weight: 400; opacity: 80%;">RenderBarycentricBlendAccuracy</span> ) : <span style="font-weight: 400; opacity: 80%;">RenderBarycentricBlendLogic</span> {: #RenderBarycentricBlendLogic-from data-toc-label='RenderBarycentricBlendLogic-from' }



## Class RenderInstructionBarycentricBlend {: #RenderInstructionBarycentricBlend }


```js
import { RenderInstructionBarycentricBlend } from 'scenerystack/alpenglow';
```
### Constructor

#### new RenderInstructionBarycentricBlend( logic : <span style="font-weight: 400; opacity: 80%;">RenderBarycentricBlendLogic</span> ) {: #RenderInstructionBarycentricBlend-constructor data-toc-label='RenderInstructionBarycentricBlend-constructor' }

### Instance Methods

#### toString() : <span style="font-weight: 400; opacity: 80%;">string</span> {: #RenderInstructionBarycentricBlend-toString data-toc-label='RenderInstructionBarycentricBlend-toString' }

#### equals( other : <span style="font-weight: 400; opacity: 80%;">RenderInstruction</span>, areLocationsEqual : <span style="font-weight: 400; opacity: 80%;">( a: RenderInstructionLocation, b: RenderInstructionLocation ) =&gt; boolean</span> ) : <span style="font-weight: 400; opacity: 80%;">boolean</span> {: #RenderInstructionBarycentricBlend-equals data-toc-label='RenderInstructionBarycentricBlend-equals' }

#### execute( stack : <span style="font-weight: 400; opacity: 80%;">RenderExecutionStack</span>, context : <span style="font-weight: 400; opacity: 80%;">RenderEvaluationContext</span>, executor : <span style="font-weight: 400; opacity: 80%;">RenderExecutor</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #RenderInstructionBarycentricBlend-execute data-toc-label='RenderInstructionBarycentricBlend-execute' }

#### writeBinary( encoder : <span style="font-weight: 400; opacity: 80%;">ByteEncoder</span>, getOffset : <span style="font-weight: 400; opacity: 80%;">( location: RenderInstructionLocation ) =&gt; number</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #RenderInstructionBarycentricBlend-writeBinary data-toc-label='RenderInstructionBarycentricBlend-writeBinary' }

#### getBinaryLength() : <span style="font-weight: 400; opacity: 80%;">number</span> {: #RenderInstructionBarycentricBlend-getBinaryLength data-toc-label='RenderInstructionBarycentricBlend-getBinaryLength' }

### Static Methods

#### fromBinary( encoder : <span style="font-weight: 400; opacity: 80%;">ByteEncoder</span>, offset : <span style="font-weight: 400; opacity: 80%;">number</span>, getLocation : <span style="font-weight: 400; opacity: 80%;">( offset: number ) =&gt; RenderInstructionLocation</span> ) : <span style="font-weight: 400; opacity: 80%;">RenderInstructionBarycentricBlend</span> {: #RenderInstructionBarycentricBlend-fromBinary data-toc-label='RenderInstructionBarycentricBlend-fromBinary' }



## Source Code

See the source for [RenderBarycentricBlend.ts](https://github.com/phetsims/alpenglow/blob/main/js/render-program/RenderBarycentricBlend.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
