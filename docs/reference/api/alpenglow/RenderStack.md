# RenderStack

## Overview

RenderProgram for repeated compositing of multiple RenderPrograms in a row with normal blending and source-over
Porter-Duff composition.

RenderStack will apply normal compositing/blending to a list of RenderPrograms, where each RenderProgram in the
list is drawn "on top" of all of the previous ones.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class RenderStack {: #RenderStack }


```js
import { RenderStack } from 'scenerystack/alpenglow';
```
### Constructor

#### new RenderStack( children : <span style="font-weight: 400;">[RenderProgram](../alpenglow/RenderProgram.md)[]</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### getName() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> {: #getName data-toc-label='getName' }

#### withChildren( children : <span style="font-weight: 400;">[RenderProgram](../alpenglow/RenderProgram.md)[]</span> ) : <span style="font-weight: 400;">[RenderStack](../alpenglow/RenderStack.md)</span> {: #withChildren data-toc-label='withChildren' }

#### getSimplified( children : <span style="font-weight: 400;">[RenderProgram](../alpenglow/RenderProgram.md)[]</span> ) : <span style="font-weight: 400;">[RenderProgram](../alpenglow/RenderProgram.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> {: #getSimplified data-toc-label='getSimplified' }

(protected)

#### evaluate( context : <span style="font-weight: 400;">[RenderEvaluationContext](../alpenglow/RenderEvaluationContext.md)</span> ) : <span style="font-weight: 400;">[Vector4](../dot/Vector4.md)</span> {: #evaluate data-toc-label='evaluate' }

#### writeInstructions( instructions : <span style="font-weight: 400;">[RenderInstruction](../alpenglow/RenderInstruction.md)[]</span> ) {: #writeInstructions data-toc-label='writeInstructions' }

#### serialize() : <span style="font-weight: 400;">[SerializedRenderStack](../alpenglow/RenderStack.md#SerializedRenderStack)</span> {: #serialize data-toc-label='serialize' }

### Static Methods

#### combine( a : <span style="font-weight: 400;">[Vector4](../dot/Vector4.md)</span>, b : <span style="font-weight: 400;">[Vector4](../dot/Vector4.md)</span> ) : <span style="font-weight: 400;">[Vector4](../dot/Vector4.md)</span> {: #combine data-toc-label='combine' }

#### deserialize( obj : <span style="font-weight: 400;">[SerializedRenderStack](../alpenglow/RenderStack.md#SerializedRenderStack)</span> ) : <span style="font-weight: 400;">[RenderStack](../alpenglow/RenderStack.md)</span> {: #deserialize data-toc-label='deserialize' }



## Class RenderInstructionOpaqueJump {: #RenderInstructionOpaqueJump }


```js
import { RenderInstructionOpaqueJump } from 'scenerystack/alpenglow';
```
### Constructor

#### new RenderInstructionOpaqueJump( location : <span style="font-weight: 400;">[RenderInstructionLocation](../alpenglow/RenderInstruction.md#RenderInstructionLocation)</span> ) {: #RenderInstructionOpaqueJump-constructor data-toc-label='RenderInstructionOpaqueJump-constructor' }

### Instance Methods

#### toString() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> {: #RenderInstructionOpaqueJump-toString data-toc-label='RenderInstructionOpaqueJump-toString' }

#### equals( other : <span style="font-weight: 400;">[RenderInstruction](../alpenglow/RenderInstruction.md)</span>, areLocationsEqual : <span style="font-weight: 400;">( a: [RenderInstructionLocation](../alpenglow/RenderInstruction.md#RenderInstructionLocation), b: [RenderInstructionLocation](../alpenglow/RenderInstruction.md#RenderInstructionLocation) ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #RenderInstructionOpaqueJump-equals data-toc-label='RenderInstructionOpaqueJump-equals' }

#### execute( stack : <span style="font-weight: 400;">[RenderExecutionStack](../alpenglow/RenderExecutionStack.md)</span>, context : <span style="font-weight: 400;">[RenderEvaluationContext](../alpenglow/RenderEvaluationContext.md)</span>, executor : <span style="font-weight: 400;">[RenderExecutor](../alpenglow/RenderExecutor.md)</span> ) {: #RenderInstructionOpaqueJump-execute data-toc-label='RenderInstructionOpaqueJump-execute' }

#### writeBinary( encoder : <span style="font-weight: 400;">[ByteEncoder](../alpenglow/ByteEncoder.md)</span>, getOffset : <span style="font-weight: 400;">( location: [RenderInstructionLocation](../alpenglow/RenderInstruction.md#RenderInstructionLocation) ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) {: #RenderInstructionOpaqueJump-writeBinary data-toc-label='RenderInstructionOpaqueJump-writeBinary' }

#### getBinaryLength() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #RenderInstructionOpaqueJump-getBinaryLength data-toc-label='RenderInstructionOpaqueJump-getBinaryLength' }

### Static Methods

#### fromBinary( encoder : <span style="font-weight: 400;">[ByteEncoder](../alpenglow/ByteEncoder.md)</span>, offset : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, getLocation : <span style="font-weight: 400;">( offset: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> ) =&gt; [RenderInstructionLocation](../alpenglow/RenderInstruction.md#RenderInstructionLocation)</span> ) : <span style="font-weight: 400;">[RenderInstructionOpaqueJump](../alpenglow/RenderStack.md#RenderInstructionOpaqueJump)</span> {: #RenderInstructionOpaqueJump-fromBinary data-toc-label='RenderInstructionOpaqueJump-fromBinary' }

### Static Properties

#### SKIP_RENDER_COLOR_JUMPS {: #RenderInstructionOpaqueJump-SKIP_RENDER_COLOR_JUMPS data-toc-label='RenderInstructionOpaqueJump-SKIP_RENDER_COLOR_JUMPS' }

(readonly)



## Class RenderInstructionStackBlend {: #RenderInstructionStackBlend }


Background on the top of the stack

```js
import { RenderInstructionStackBlend } from 'scenerystack/alpenglow';
```
### Instance Methods

#### toString() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> {: #RenderInstructionStackBlend-toString data-toc-label='RenderInstructionStackBlend-toString' }

#### equals( other : <span style="font-weight: 400;">[RenderInstruction](../alpenglow/RenderInstruction.md)</span>, areLocationsEqual : <span style="font-weight: 400;">( a: [RenderInstructionLocation](../alpenglow/RenderInstruction.md#RenderInstructionLocation), b: [RenderInstructionLocation](../alpenglow/RenderInstruction.md#RenderInstructionLocation) ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #RenderInstructionStackBlend-equals data-toc-label='RenderInstructionStackBlend-equals' }

#### execute( stack : <span style="font-weight: 400;">[RenderExecutionStack](../alpenglow/RenderExecutionStack.md)</span>, context : <span style="font-weight: 400;">[RenderEvaluationContext](../alpenglow/RenderEvaluationContext.md)</span>, executor : <span style="font-weight: 400;">[RenderExecutor](../alpenglow/RenderExecutor.md)</span> ) {: #RenderInstructionStackBlend-execute data-toc-label='RenderInstructionStackBlend-execute' }

#### writeBinary( encoder : <span style="font-weight: 400;">[ByteEncoder](../alpenglow/ByteEncoder.md)</span>, getOffset : <span style="font-weight: 400;">( location: [RenderInstructionLocation](../alpenglow/RenderInstruction.md#RenderInstructionLocation) ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) {: #RenderInstructionStackBlend-writeBinary data-toc-label='RenderInstructionStackBlend-writeBinary' }

#### getBinaryLength() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #RenderInstructionStackBlend-getBinaryLength data-toc-label='RenderInstructionStackBlend-getBinaryLength' }

### Static Properties

#### INSTANCE : <span style="font-weight: 400;">[RenderInstructionStackBlend](../alpenglow/RenderStack.md#RenderInstructionStackBlend)</span> {: #RenderInstructionStackBlend-INSTANCE data-toc-label='RenderInstructionStackBlend-INSTANCE' }

(readonly)



## Source Code

See the source for [RenderStack.ts](https://github.com/phetsims/alpenglow/blob/main/js/render-program/RenderStack.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
