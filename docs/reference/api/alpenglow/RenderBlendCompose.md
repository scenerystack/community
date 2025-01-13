# RenderBlendCompose

## Overview

RenderProgram for binary color-blending and Porter-Duff composition.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class RenderBlendCompose {: #RenderBlendCompose }


```js
import { RenderBlendCompose } from 'scenerystack/alpenglow';
```
### Constructor

#### new RenderBlendCompose( composeType : <span style="font-weight: 400; opacity: 80%;">RenderComposeType</span>, blendType : <span style="font-weight: 400; opacity: 80%;">RenderBlendType</span>, a : <span style="font-weight: 400; opacity: 80%;">RenderProgram</span>, b : <span style="font-weight: 400; opacity: 80%;">RenderProgram</span>, logic? : <span style="font-weight: 400; opacity: 80%;">RenderBlendComposeLogic</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### getName() : <span style="font-weight: 400; opacity: 80%;">string</span> {: #getName data-toc-label='getName' }

#### withChildren( children : <span style="font-weight: 400; opacity: 80%;">RenderProgram[]</span> ) : <span style="font-weight: 400; opacity: 80%;">RenderBlendCompose</span> {: #withChildren data-toc-label='withChildren' }

#### equalsTyped( other : <span style="font-weight: 400; opacity: 80%;">this</span> ) : <span style="font-weight: 400; opacity: 80%;">boolean</span> {: #equalsTyped data-toc-label='equalsTyped' }

(protected)

#### getSimplified( children : <span style="font-weight: 400; opacity: 80%;">RenderProgram[]</span> ) : <span style="font-weight: 400; opacity: 80%;">RenderProgram | null</span> {: #getSimplified data-toc-label='getSimplified' }

(protected)

#### evaluate( context : <span style="font-weight: 400; opacity: 80%;">RenderEvaluationContext</span> ) : <span style="font-weight: 400; opacity: 80%;">Vector4</span> {: #evaluate data-toc-label='evaluate' }

#### writeInstructions( instructions : <span style="font-weight: 400; opacity: 80%;">RenderInstruction[]</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #writeInstructions data-toc-label='writeInstructions' }

#### getExtraDebugString() : <span style="font-weight: 400; opacity: 80%;">string</span> {: #getExtraDebugString data-toc-label='getExtraDebugString' }

(protected)

#### serialize() : <span style="font-weight: 400; opacity: 80%;">SerializedRenderBlendCompose</span> {: #serialize data-toc-label='serialize' }

### Instance Properties

#### logic : <span style="font-weight: 400; opacity: 80%;">RenderBlendComposeLogic</span> {: #logic data-toc-label='logic' }

(readonly)

### Static Methods

#### blendCompose( a : <span style="font-weight: 400; opacity: 80%;">Vector4</span>, b : <span style="font-weight: 400; opacity: 80%;">Vector4</span>, composeType : <span style="font-weight: 400; opacity: 80%;">RenderComposeType</span>, blendType : <span style="font-weight: 400; opacity: 80%;">RenderBlendType</span> ) : <span style="font-weight: 400; opacity: 80%;">Vector4</span> {: #blendCompose data-toc-label='blendCompose' }

#### screen( cb : <span style="font-weight: 400; opacity: 80%;">Vector3</span>, cs : <span style="font-weight: 400; opacity: 80%;">Vector3</span> ) : <span style="font-weight: 400; opacity: 80%;">Vector3</span> {: #screen data-toc-label='screen' }

#### colorDodge( cb : <span style="font-weight: 400; opacity: 80%;">number</span>, cs : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">number</span> {: #colorDodge data-toc-label='colorDodge' }

#### colorBurn( cb : <span style="font-weight: 400; opacity: 80%;">number</span>, cs : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">number</span> {: #colorBurn data-toc-label='colorBurn' }

#### hardLight( cb : <span style="font-weight: 400; opacity: 80%;">Vector3</span>, cs : <span style="font-weight: 400; opacity: 80%;">Vector3</span> ) : <span style="font-weight: 400; opacity: 80%;">Vector3</span> {: #hardLight data-toc-label='hardLight' }

TODO: check examples, tests

#### softLight( cb : <span style="font-weight: 400; opacity: 80%;">Vector3</span>, cs : <span style="font-weight: 400; opacity: 80%;">Vector3</span> ) : <span style="font-weight: 400; opacity: 80%;">Vector3</span> {: #softLight data-toc-label='softLight' }

TODO: check examples, tests

#### sat( c : <span style="font-weight: 400; opacity: 80%;">Vector3</span> ) : <span style="font-weight: 400; opacity: 80%;">number</span> {: #sat data-toc-label='sat' }

TODO: check examples, tests

#### lum( c : <span style="font-weight: 400; opacity: 80%;">Vector3</span> ) : <span style="font-weight: 400; opacity: 80%;">number</span> {: #lum data-toc-label='lum' }

TODO: check examples, tests

#### clipColor( c : <span style="font-weight: 400; opacity: 80%;">Vector3</span> ) : <span style="font-weight: 400; opacity: 80%;">Vector3</span> {: #clipColor data-toc-label='clipColor' }

TODO: check examples, tests

#### setLum( c : <span style="font-weight: 400; opacity: 80%;">Vector3</span>, l : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">Vector3</span> {: #setLum data-toc-label='setLum' }

#### setSatInner( c : <span style="font-weight: 400; opacity: 80%;">Vector3</span>, s : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #setSatInner data-toc-label='setSatInner' }

#### setSat( c : <span style="font-weight: 400; opacity: 80%;">Vector3</span>, s : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">Vector3</span> {: #setSat data-toc-label='setSat' }

#### deserialize( obj : <span style="font-weight: 400; opacity: 80%;">SerializedRenderBlendCompose</span> ) : <span style="font-weight: 400; opacity: 80%;">RenderBlendCompose</span> {: #deserialize data-toc-label='deserialize' }



## Class RenderBlendComposeLogic {: #RenderBlendComposeLogic }


```js
import { RenderBlendComposeLogic } from 'scenerystack/alpenglow';
```
### Constructor

#### new RenderBlendComposeLogic( composeType : <span style="font-weight: 400; opacity: 80%;">RenderComposeType</span>, blendType : <span style="font-weight: 400; opacity: 80%;">RenderBlendType</span> ) {: #RenderBlendComposeLogic-constructor data-toc-label='RenderBlendComposeLogic-constructor' }

### Instance Methods

#### equals( other : <span style="font-weight: 400; opacity: 80%;">RenderBlendComposeLogic</span> ) : <span style="font-weight: 400; opacity: 80%;">boolean</span> {: #RenderBlendComposeLogic-equals data-toc-label='RenderBlendComposeLogic-equals' }



## Class RenderInstructionBlendCompose {: #RenderInstructionBlendCompose }


```js
import { RenderInstructionBlendCompose } from 'scenerystack/alpenglow';
```
### Constructor

#### new RenderInstructionBlendCompose( logic : <span style="font-weight: 400; opacity: 80%;">RenderBlendComposeLogic</span> ) {: #RenderInstructionBlendCompose-constructor data-toc-label='RenderInstructionBlendCompose-constructor' }

### Instance Methods

#### toString() : <span style="font-weight: 400; opacity: 80%;">string</span> {: #RenderInstructionBlendCompose-toString data-toc-label='RenderInstructionBlendCompose-toString' }

#### equals( other : <span style="font-weight: 400; opacity: 80%;">RenderInstruction</span>, areLocationsEqual : <span style="font-weight: 400; opacity: 80%;">( a: RenderInstructionLocation, b: RenderInstructionLocation ) =&gt; boolean</span> ) : <span style="font-weight: 400; opacity: 80%;">boolean</span> {: #RenderInstructionBlendCompose-equals data-toc-label='RenderInstructionBlendCompose-equals' }

#### execute( stack : <span style="font-weight: 400; opacity: 80%;">RenderExecutionStack</span>, context : <span style="font-weight: 400; opacity: 80%;">RenderEvaluationContext</span>, executor : <span style="font-weight: 400; opacity: 80%;">RenderExecutor</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #RenderInstructionBlendCompose-execute data-toc-label='RenderInstructionBlendCompose-execute' }

#### writeBinary( encoder : <span style="font-weight: 400; opacity: 80%;">ByteEncoder</span>, getOffset : <span style="font-weight: 400; opacity: 80%;">( location: RenderInstructionLocation ) =&gt; number</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #RenderInstructionBlendCompose-writeBinary data-toc-label='RenderInstructionBlendCompose-writeBinary' }

#### getBinaryLength() : <span style="font-weight: 400; opacity: 80%;">number</span> {: #RenderInstructionBlendCompose-getBinaryLength data-toc-label='RenderInstructionBlendCompose-getBinaryLength' }

### Static Methods

#### fromBinary( encoder : <span style="font-weight: 400; opacity: 80%;">ByteEncoder</span>, offset : <span style="font-weight: 400; opacity: 80%;">number</span>, getLocation : <span style="font-weight: 400; opacity: 80%;">( offset: number ) =&gt; RenderInstructionLocation</span> ) : <span style="font-weight: 400; opacity: 80%;">RenderInstructionBlendCompose</span> {: #RenderInstructionBlendCompose-fromBinary data-toc-label='RenderInstructionBlendCompose-fromBinary' }



## Source Code

See the source for [RenderBlendCompose.ts](https://github.com/phetsims/alpenglow/blob/main/js/render-program/RenderBlendCompose.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
