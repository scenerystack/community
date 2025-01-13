# RenderBlendCompose

## Overview

RenderProgram for binary color-blending and Porter-Duff composition.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class RenderBlendCompose {: #RenderBlendCompose }


```js
import { RenderBlendCompose } from 'scenerystack/alpenglow';
```
### Constructor

#### new RenderBlendCompose( composeType : <span style="font-weight: 400;">[RenderComposeType](../alpenglow/RenderComposeType.md)</span>, blendType : <span style="font-weight: 400;">[RenderBlendType](../alpenglow/RenderBlendType.md)</span>, a : <span style="font-weight: 400;">[RenderProgram](../alpenglow/RenderProgram.md)</span>, b : <span style="font-weight: 400;">[RenderProgram](../alpenglow/RenderProgram.md)</span>, logic? : <span style="font-weight: 400;">[RenderBlendComposeLogic](../alpenglow/RenderBlendCompose.md#RenderBlendComposeLogic)</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### getName() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> {: #getName data-toc-label='getName' }

#### withChildren( children : <span style="font-weight: 400;">[RenderProgram](../alpenglow/RenderProgram.md)[]</span> ) : <span style="font-weight: 400;">[RenderBlendCompose](../alpenglow/RenderBlendCompose.md)</span> {: #withChildren data-toc-label='withChildren' }

#### equalsTyped( other : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #equalsTyped data-toc-label='equalsTyped' }

(protected)

#### getSimplified( children : <span style="font-weight: 400;">[RenderProgram](../alpenglow/RenderProgram.md)[]</span> ) : <span style="font-weight: 400;">[RenderProgram](../alpenglow/RenderProgram.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> {: #getSimplified data-toc-label='getSimplified' }

(protected)

#### evaluate( context : <span style="font-weight: 400;">[RenderEvaluationContext](../alpenglow/RenderEvaluationContext.md)</span> ) : <span style="font-weight: 400;">[Vector4](../dot/Vector4.md)</span> {: #evaluate data-toc-label='evaluate' }

#### writeInstructions( instructions : <span style="font-weight: 400;">[RenderInstruction](../alpenglow/RenderInstruction.md)[]</span> ) {: #writeInstructions data-toc-label='writeInstructions' }

#### getExtraDebugString() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> {: #getExtraDebugString data-toc-label='getExtraDebugString' }

(protected)

#### serialize() : <span style="font-weight: 400;">[SerializedRenderBlendCompose](../alpenglow/RenderBlendCompose.md#SerializedRenderBlendCompose)</span> {: #serialize data-toc-label='serialize' }

### Instance Properties

#### logic : <span style="font-weight: 400;">[RenderBlendComposeLogic](../alpenglow/RenderBlendCompose.md#RenderBlendComposeLogic)</span> {: #logic data-toc-label='logic' }

(readonly)

### Static Methods

#### blendCompose( a : <span style="font-weight: 400;">[Vector4](../dot/Vector4.md)</span>, b : <span style="font-weight: 400;">[Vector4](../dot/Vector4.md)</span>, composeType : <span style="font-weight: 400;">[RenderComposeType](../alpenglow/RenderComposeType.md)</span>, blendType : <span style="font-weight: 400;">[RenderBlendType](../alpenglow/RenderBlendType.md)</span> ) : <span style="font-weight: 400;">[Vector4](../dot/Vector4.md)</span> {: #blendCompose data-toc-label='blendCompose' }

#### screen( cb : <span style="font-weight: 400;">[Vector3](../dot/Vector3.md)</span>, cs : <span style="font-weight: 400;">[Vector3](../dot/Vector3.md)</span> ) : <span style="font-weight: 400;">[Vector3](../dot/Vector3.md)</span> {: #screen data-toc-label='screen' }

#### colorDodge( cb : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, cs : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #colorDodge data-toc-label='colorDodge' }

#### colorBurn( cb : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, cs : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #colorBurn data-toc-label='colorBurn' }

#### hardLight( cb : <span style="font-weight: 400;">[Vector3](../dot/Vector3.md)</span>, cs : <span style="font-weight: 400;">[Vector3](../dot/Vector3.md)</span> ) : <span style="font-weight: 400;">[Vector3](../dot/Vector3.md)</span> {: #hardLight data-toc-label='hardLight' }

TODO: check examples, tests

#### softLight( cb : <span style="font-weight: 400;">[Vector3](../dot/Vector3.md)</span>, cs : <span style="font-weight: 400;">[Vector3](../dot/Vector3.md)</span> ) : <span style="font-weight: 400;">[Vector3](../dot/Vector3.md)</span> {: #softLight data-toc-label='softLight' }

TODO: check examples, tests

#### sat( c : <span style="font-weight: 400;">[Vector3](../dot/Vector3.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #sat data-toc-label='sat' }

TODO: check examples, tests

#### lum( c : <span style="font-weight: 400;">[Vector3](../dot/Vector3.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #lum data-toc-label='lum' }

TODO: check examples, tests

#### clipColor( c : <span style="font-weight: 400;">[Vector3](../dot/Vector3.md)</span> ) : <span style="font-weight: 400;">[Vector3](../dot/Vector3.md)</span> {: #clipColor data-toc-label='clipColor' }

TODO: check examples, tests

#### setLum( c : <span style="font-weight: 400;">[Vector3](../dot/Vector3.md)</span>, l : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Vector3](../dot/Vector3.md)</span> {: #setLum data-toc-label='setLum' }

#### setSatInner( c : <span style="font-weight: 400;">[Vector3](../dot/Vector3.md)</span>, s : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) {: #setSatInner data-toc-label='setSatInner' }

#### setSat( c : <span style="font-weight: 400;">[Vector3](../dot/Vector3.md)</span>, s : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Vector3](../dot/Vector3.md)</span> {: #setSat data-toc-label='setSat' }

#### deserialize( obj : <span style="font-weight: 400;">[SerializedRenderBlendCompose](../alpenglow/RenderBlendCompose.md#SerializedRenderBlendCompose)</span> ) : <span style="font-weight: 400;">[RenderBlendCompose](../alpenglow/RenderBlendCompose.md)</span> {: #deserialize data-toc-label='deserialize' }



## Class RenderBlendComposeLogic {: #RenderBlendComposeLogic }


```js
import { RenderBlendComposeLogic } from 'scenerystack/alpenglow';
```
### Constructor

#### new RenderBlendComposeLogic( composeType : <span style="font-weight: 400;">[RenderComposeType](../alpenglow/RenderComposeType.md)</span>, blendType : <span style="font-weight: 400;">[RenderBlendType](../alpenglow/RenderBlendType.md)</span> ) {: #RenderBlendComposeLogic-constructor data-toc-label='RenderBlendComposeLogic-constructor' }

### Instance Methods

#### equals( other : <span style="font-weight: 400;">[RenderBlendComposeLogic](../alpenglow/RenderBlendCompose.md#RenderBlendComposeLogic)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #RenderBlendComposeLogic-equals data-toc-label='RenderBlendComposeLogic-equals' }



## Class RenderInstructionBlendCompose {: #RenderInstructionBlendCompose }


```js
import { RenderInstructionBlendCompose } from 'scenerystack/alpenglow';
```
### Constructor

#### new RenderInstructionBlendCompose( logic : <span style="font-weight: 400;">[RenderBlendComposeLogic](../alpenglow/RenderBlendCompose.md#RenderBlendComposeLogic)</span> ) {: #RenderInstructionBlendCompose-constructor data-toc-label='RenderInstructionBlendCompose-constructor' }

### Instance Methods

#### toString() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> {: #RenderInstructionBlendCompose-toString data-toc-label='RenderInstructionBlendCompose-toString' }

#### equals( other : <span style="font-weight: 400;">[RenderInstruction](../alpenglow/RenderInstruction.md)</span>, areLocationsEqual : <span style="font-weight: 400;">( a: [RenderInstructionLocation](../alpenglow/RenderInstruction.md#RenderInstructionLocation), b: [RenderInstructionLocation](../alpenglow/RenderInstruction.md#RenderInstructionLocation) ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #RenderInstructionBlendCompose-equals data-toc-label='RenderInstructionBlendCompose-equals' }

#### execute( stack : <span style="font-weight: 400;">[RenderExecutionStack](../alpenglow/RenderExecutionStack.md)</span>, context : <span style="font-weight: 400;">[RenderEvaluationContext](../alpenglow/RenderEvaluationContext.md)</span>, executor : <span style="font-weight: 400;">[RenderExecutor](../alpenglow/RenderExecutor.md)</span> ) {: #RenderInstructionBlendCompose-execute data-toc-label='RenderInstructionBlendCompose-execute' }

#### writeBinary( encoder : <span style="font-weight: 400;">[ByteEncoder](../alpenglow/ByteEncoder.md)</span>, getOffset : <span style="font-weight: 400;">( location: [RenderInstructionLocation](../alpenglow/RenderInstruction.md#RenderInstructionLocation) ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) {: #RenderInstructionBlendCompose-writeBinary data-toc-label='RenderInstructionBlendCompose-writeBinary' }

#### getBinaryLength() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #RenderInstructionBlendCompose-getBinaryLength data-toc-label='RenderInstructionBlendCompose-getBinaryLength' }

### Static Methods

#### fromBinary( encoder : <span style="font-weight: 400;">[ByteEncoder](../alpenglow/ByteEncoder.md)</span>, offset : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, getLocation : <span style="font-weight: 400;">( offset: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> ) =&gt; [RenderInstructionLocation](../alpenglow/RenderInstruction.md#RenderInstructionLocation)</span> ) : <span style="font-weight: 400;">[RenderInstructionBlendCompose](../alpenglow/RenderBlendCompose.md#RenderInstructionBlendCompose)</span> {: #RenderInstructionBlendCompose-fromBinary data-toc-label='RenderInstructionBlendCompose-fromBinary' }



## Source Code

See the source for [RenderBlendCompose.ts](https://github.com/phetsims/alpenglow/blob/main/js/render-program/RenderBlendCompose.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
