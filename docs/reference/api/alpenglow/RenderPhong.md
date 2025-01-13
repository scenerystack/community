# RenderPhong

## Overview

RenderProgram for a phong 3d reflection model

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class RenderPhong {: #RenderPhong }


```js
import { RenderPhong } from 'scenerystack/alpenglow';
```
### Constructor

#### new RenderPhong( alpha : <span style="font-weight: 400; opacity: 80%;">number</span>, ambientColorProgram : <span style="font-weight: 400; opacity: 80%;">RenderProgram</span>, diffuseColorProgram : <span style="font-weight: 400; opacity: 80%;">RenderProgram</span>, specularColorProgram : <span style="font-weight: 400; opacity: 80%;">RenderProgram</span>, positionProgram : <span style="font-weight: 400; opacity: 80%;">RenderProgram</span>, normalProgram : <span style="font-weight: 400; opacity: 80%;">RenderProgram</span>, lights : <span style="font-weight: 400; opacity: 80%;">RenderLight[]</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### getName() : <span style="font-weight: 400; opacity: 80%;">string</span> {: #getName data-toc-label='getName' }

#### withChildren( children : <span style="font-weight: 400; opacity: 80%;">RenderProgram[]</span> ) : <span style="font-weight: 400; opacity: 80%;">RenderPhong</span> {: #withChildren data-toc-label='withChildren' }

#### equalsTyped( other : <span style="font-weight: 400; opacity: 80%;">this</span> ) : <span style="font-weight: 400; opacity: 80%;">boolean</span> {: #equalsTyped data-toc-label='equalsTyped' }

(protected)

#### getSimplified( children : <span style="font-weight: 400; opacity: 80%;">RenderProgram[]</span> ) : <span style="font-weight: 400; opacity: 80%;">RenderProgram | null</span> {: #getSimplified data-toc-label='getSimplified' }

(protected)

#### getPhong( ambientColor : <span style="font-weight: 400; opacity: 80%;">Vector4</span>, diffuseColor : <span style="font-weight: 400; opacity: 80%;">Vector4</span>, specularColor : <span style="font-weight: 400; opacity: 80%;">Vector4</span>, position : <span style="font-weight: 400; opacity: 80%;">Vector4</span>, normal : <span style="font-weight: 400; opacity: 80%;">Vector4</span>, lightDirections : <span style="font-weight: 400; opacity: 80%;">Vector4[]</span>, lightColors : <span style="font-weight: 400; opacity: 80%;">Vector4[]</span> ) : <span style="font-weight: 400; opacity: 80%;">Vector4</span> {: #getPhong data-toc-label='getPhong' }

#### evaluate( context : <span style="font-weight: 400; opacity: 80%;">RenderEvaluationContext</span> ) : <span style="font-weight: 400; opacity: 80%;">Vector4</span> {: #evaluate data-toc-label='evaluate' }

#### writeInstructions( instructions : <span style="font-weight: 400; opacity: 80%;">RenderInstruction[]</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #writeInstructions data-toc-label='writeInstructions' }

#### serialize() : <span style="font-weight: 400; opacity: 80%;">SerializedRenderPhong</span> {: #serialize data-toc-label='serialize' }

### Static Methods

#### deserialize( obj : <span style="font-weight: 400; opacity: 80%;">SerializedRenderPhong</span> ) : <span style="font-weight: 400; opacity: 80%;">RenderPhong</span> {: #deserialize data-toc-label='deserialize' }



## Class RenderInstructionPhong {: #RenderInstructionPhong }


```js
import { RenderInstructionPhong } from 'scenerystack/alpenglow';
```
### Constructor

#### new RenderInstructionPhong( alpha : <span style="font-weight: 400; opacity: 80%;">number</span>, numLights : <span style="font-weight: 400; opacity: 80%;">number</span> ) {: #RenderInstructionPhong-constructor data-toc-label='RenderInstructionPhong-constructor' }

### Instance Methods

#### toString() : <span style="font-weight: 400; opacity: 80%;">string</span> {: #RenderInstructionPhong-toString data-toc-label='RenderInstructionPhong-toString' }

#### equals( other : <span style="font-weight: 400; opacity: 80%;">RenderInstruction</span>, areLocationsEqual : <span style="font-weight: 400; opacity: 80%;">( a: RenderInstructionLocation, b: RenderInstructionLocation ) =&gt; boolean</span> ) : <span style="font-weight: 400; opacity: 80%;">boolean</span> {: #RenderInstructionPhong-equals data-toc-label='RenderInstructionPhong-equals' }

#### execute( stack : <span style="font-weight: 400; opacity: 80%;">RenderExecutionStack</span>, context : <span style="font-weight: 400; opacity: 80%;">RenderEvaluationContext</span>, executor : <span style="font-weight: 400; opacity: 80%;">RenderExecutor</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #RenderInstructionPhong-execute data-toc-label='RenderInstructionPhong-execute' }

#### writeBinary( encoder : <span style="font-weight: 400; opacity: 80%;">ByteEncoder</span>, getOffset : <span style="font-weight: 400; opacity: 80%;">( location: RenderInstructionLocation ) =&gt; number</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #RenderInstructionPhong-writeBinary data-toc-label='RenderInstructionPhong-writeBinary' }

#### getBinaryLength() : <span style="font-weight: 400; opacity: 80%;">number</span> {: #RenderInstructionPhong-getBinaryLength data-toc-label='RenderInstructionPhong-getBinaryLength' }

### Static Methods

#### fromBinary( encoder : <span style="font-weight: 400; opacity: 80%;">ByteEncoder</span>, offset : <span style="font-weight: 400; opacity: 80%;">number</span>, getLocation : <span style="font-weight: 400; opacity: 80%;">( offset: number ) =&gt; RenderInstructionLocation</span> ) : <span style="font-weight: 400; opacity: 80%;">RenderInstructionPhong</span> {: #RenderInstructionPhong-fromBinary data-toc-label='RenderInstructionPhong-fromBinary' }



## Source Code

See the source for [RenderPhong.ts](https://github.com/phetsims/alpenglow/blob/main/js/render-program/RenderPhong.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
