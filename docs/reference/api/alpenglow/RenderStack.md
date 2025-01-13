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

#### new RenderStack( children : <span style="font-weight: 400; opacity: 80%;">RenderProgram[]</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### getName() : <span style="font-weight: 400; opacity: 80%;">string</span> {: #getName data-toc-label='getName' }

#### withChildren( children : <span style="font-weight: 400; opacity: 80%;">RenderProgram[]</span> ) : <span style="font-weight: 400; opacity: 80%;">RenderStack</span> {: #withChildren data-toc-label='withChildren' }

#### getSimplified( children : <span style="font-weight: 400; opacity: 80%;">RenderProgram[]</span> ) : <span style="font-weight: 400; opacity: 80%;">RenderProgram | null</span> {: #getSimplified data-toc-label='getSimplified' }

(protected)

#### evaluate( context : <span style="font-weight: 400; opacity: 80%;">RenderEvaluationContext</span> ) : <span style="font-weight: 400; opacity: 80%;">Vector4</span> {: #evaluate data-toc-label='evaluate' }

#### writeInstructions( instructions : <span style="font-weight: 400; opacity: 80%;">RenderInstruction[]</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #writeInstructions data-toc-label='writeInstructions' }

#### serialize() : <span style="font-weight: 400; opacity: 80%;">SerializedRenderStack</span> {: #serialize data-toc-label='serialize' }

### Static Methods

#### combine( a : <span style="font-weight: 400; opacity: 80%;">Vector4</span>, b : <span style="font-weight: 400; opacity: 80%;">Vector4</span> ) : <span style="font-weight: 400; opacity: 80%;">Vector4</span> {: #combine data-toc-label='combine' }

#### deserialize( obj : <span style="font-weight: 400; opacity: 80%;">SerializedRenderStack</span> ) : <span style="font-weight: 400; opacity: 80%;">RenderStack</span> {: #deserialize data-toc-label='deserialize' }



## Class RenderInstructionOpaqueJump {: #RenderInstructionOpaqueJump }


```js
import { RenderInstructionOpaqueJump } from 'scenerystack/alpenglow';
```
### Constructor

#### new RenderInstructionOpaqueJump( location : <span style="font-weight: 400; opacity: 80%;">RenderInstructionLocation</span> ) {: #RenderInstructionOpaqueJump-constructor data-toc-label='RenderInstructionOpaqueJump-constructor' }

### Instance Methods

#### toString() : <span style="font-weight: 400; opacity: 80%;">string</span> {: #RenderInstructionOpaqueJump-toString data-toc-label='RenderInstructionOpaqueJump-toString' }

#### equals( other : <span style="font-weight: 400; opacity: 80%;">RenderInstruction</span>, areLocationsEqual : <span style="font-weight: 400; opacity: 80%;">( a: RenderInstructionLocation, b: RenderInstructionLocation ) =&gt; boolean</span> ) : <span style="font-weight: 400; opacity: 80%;">boolean</span> {: #RenderInstructionOpaqueJump-equals data-toc-label='RenderInstructionOpaqueJump-equals' }

#### execute( stack : <span style="font-weight: 400; opacity: 80%;">RenderExecutionStack</span>, context : <span style="font-weight: 400; opacity: 80%;">RenderEvaluationContext</span>, executor : <span style="font-weight: 400; opacity: 80%;">RenderExecutor</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #RenderInstructionOpaqueJump-execute data-toc-label='RenderInstructionOpaqueJump-execute' }

#### writeBinary( encoder : <span style="font-weight: 400; opacity: 80%;">ByteEncoder</span>, getOffset : <span style="font-weight: 400; opacity: 80%;">( location: RenderInstructionLocation ) =&gt; number</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #RenderInstructionOpaqueJump-writeBinary data-toc-label='RenderInstructionOpaqueJump-writeBinary' }

#### getBinaryLength() : <span style="font-weight: 400; opacity: 80%;">number</span> {: #RenderInstructionOpaqueJump-getBinaryLength data-toc-label='RenderInstructionOpaqueJump-getBinaryLength' }

### Static Methods

#### fromBinary( encoder : <span style="font-weight: 400; opacity: 80%;">ByteEncoder</span>, offset : <span style="font-weight: 400; opacity: 80%;">number</span>, getLocation : <span style="font-weight: 400; opacity: 80%;">( offset: number ) =&gt; RenderInstructionLocation</span> ) : <span style="font-weight: 400; opacity: 80%;">RenderInstructionOpaqueJump</span> {: #RenderInstructionOpaqueJump-fromBinary data-toc-label='RenderInstructionOpaqueJump-fromBinary' }

### Static Properties

#### SKIP_RENDER_COLOR_JUMPS {: #RenderInstructionOpaqueJump-SKIP_RENDER_COLOR_JUMPS data-toc-label='RenderInstructionOpaqueJump-SKIP_RENDER_COLOR_JUMPS' }

(readonly)



## Class RenderInstructionStackBlend {: #RenderInstructionStackBlend }


Background on the top of the stack

```js
import { RenderInstructionStackBlend } from 'scenerystack/alpenglow';
```
### Instance Methods

#### toString() : <span style="font-weight: 400; opacity: 80%;">string</span> {: #RenderInstructionStackBlend-toString data-toc-label='RenderInstructionStackBlend-toString' }

#### equals( other : <span style="font-weight: 400; opacity: 80%;">RenderInstruction</span>, areLocationsEqual : <span style="font-weight: 400; opacity: 80%;">( a: RenderInstructionLocation, b: RenderInstructionLocation ) =&gt; boolean</span> ) : <span style="font-weight: 400; opacity: 80%;">boolean</span> {: #RenderInstructionStackBlend-equals data-toc-label='RenderInstructionStackBlend-equals' }

#### execute( stack : <span style="font-weight: 400; opacity: 80%;">RenderExecutionStack</span>, context : <span style="font-weight: 400; opacity: 80%;">RenderEvaluationContext</span>, executor : <span style="font-weight: 400; opacity: 80%;">RenderExecutor</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #RenderInstructionStackBlend-execute data-toc-label='RenderInstructionStackBlend-execute' }

#### writeBinary( encoder : <span style="font-weight: 400; opacity: 80%;">ByteEncoder</span>, getOffset : <span style="font-weight: 400; opacity: 80%;">( location: RenderInstructionLocation ) =&gt; number</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #RenderInstructionStackBlend-writeBinary data-toc-label='RenderInstructionStackBlend-writeBinary' }

#### getBinaryLength() : <span style="font-weight: 400; opacity: 80%;">number</span> {: #RenderInstructionStackBlend-getBinaryLength data-toc-label='RenderInstructionStackBlend-getBinaryLength' }

### Static Properties

#### INSTANCE : <span style="font-weight: 400; opacity: 80%;">RenderInstructionStackBlend</span> {: #RenderInstructionStackBlend-INSTANCE data-toc-label='RenderInstructionStackBlend-INSTANCE' }

(readonly)



## Source Code

See the source for [RenderStack.ts](https://github.com/phetsims/alpenglow/blob/main/js/render-program/RenderStack.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
