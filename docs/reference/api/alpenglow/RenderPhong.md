# RenderPhong

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/alpenglow/blob/main/js/render-program/RenderPhong.ts](https://github.com/phetsims/alpenglow/blob/main/js/render-program/RenderPhong.ts) for the most up-to-date information.

## Overview

RenderProgram for a phong 3d reflection model

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class RenderInstructionPhong {: #RenderInstructionPhong }


```js
import { RenderInstructionPhong } from 'scenerystack/alpenglow';
```
### Constructor

#### new RenderInstructionPhong( alpha : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, numLights : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) {: #RenderInstructionPhong-RenderInstructionPhong-constructor data-toc-label='new RenderInstructionPhong-RenderInstructionPhong' }

### Instance Methods

#### toString() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> {: #RenderInstructionPhong-toString data-toc-label='RenderInstructionPhong-toString' }

#### equals( other : <span style="font-weight: 400;">[RenderInstruction](../alpenglow/RenderInstruction.md)</span>, areLocationsEqual : <span style="font-weight: 400;">( a: [RenderInstructionLocation](../alpenglow/RenderInstruction.md#RenderInstructionLocation), b: [RenderInstructionLocation](../alpenglow/RenderInstruction.md#RenderInstructionLocation) ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #RenderInstructionPhong-equals data-toc-label='RenderInstructionPhong-equals' }

#### execute( stack : <span style="font-weight: 400;">[RenderExecutionStack](../alpenglow/RenderExecutionStack.md)</span>, context : <span style="font-weight: 400;">[RenderEvaluationContext](../alpenglow/RenderEvaluationContext.md)</span>, executor : <span style="font-weight: 400;">[RenderExecutor](../alpenglow/RenderExecutor.md)</span> ) {: #RenderInstructionPhong-execute data-toc-label='RenderInstructionPhong-execute' }

#### writeBinary( encoder : <span style="font-weight: 400;">[ByteEncoder](../alpenglow/ByteEncoder.md)</span>, getOffset : <span style="font-weight: 400;">( location: [RenderInstructionLocation](../alpenglow/RenderInstruction.md#RenderInstructionLocation) ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) {: #RenderInstructionPhong-writeBinary data-toc-label='RenderInstructionPhong-writeBinary' }

#### getBinaryLength() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #RenderInstructionPhong-getBinaryLength data-toc-label='RenderInstructionPhong-getBinaryLength' }

### Static Methods

#### fromBinary( encoder : <span style="font-weight: 400;">[ByteEncoder](../alpenglow/ByteEncoder.md)</span>, offset : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, getLocation : <span style="font-weight: 400;">( offset: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> ) =&gt; [RenderInstructionLocation](../alpenglow/RenderInstruction.md#RenderInstructionLocation)</span> ) : <span style="font-weight: 400;">[RenderInstructionPhong](../alpenglow/RenderPhong.md#RenderInstructionPhong)</span> {: #RenderInstructionPhong-fromBinary data-toc-label='RenderInstructionPhong-fromBinary' }



## Class RenderPhong {: #RenderPhong }


```js
import { RenderPhong } from 'scenerystack/alpenglow';
```
### Constructor

#### new RenderPhong( alpha : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, ambientColorProgram : <span style="font-weight: 400;">[RenderProgram](../alpenglow/RenderProgram.md)</span>, diffuseColorProgram : <span style="font-weight: 400;">[RenderProgram](../alpenglow/RenderProgram.md)</span>, specularColorProgram : <span style="font-weight: 400;">[RenderProgram](../alpenglow/RenderProgram.md)</span>, positionProgram : <span style="font-weight: 400;">[RenderProgram](../alpenglow/RenderProgram.md)</span>, normalProgram : <span style="font-weight: 400;">[RenderProgram](../alpenglow/RenderProgram.md)</span>, lights : <span style="font-weight: 400;">[RenderLight](../alpenglow/RenderLight.md)[]</span> ) {: #RenderPhong-constructor data-toc-label='new RenderPhong' }

### Instance Methods

#### getName() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> {: #getName data-toc-label='getName' }

#### withChildren( children : <span style="font-weight: 400;">[RenderProgram](../alpenglow/RenderProgram.md)[]</span> ) : <span style="font-weight: 400;">[RenderPhong](../alpenglow/RenderPhong.md)</span> {: #withChildren data-toc-label='withChildren' }

#### equalsTyped( other : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #equalsTyped data-toc-label='equalsTyped' }

(protected)

#### getSimplified( children : <span style="font-weight: 400;">[RenderProgram](../alpenglow/RenderProgram.md)[]</span> ) : <span style="font-weight: 400;">[RenderProgram](../alpenglow/RenderProgram.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> {: #getSimplified data-toc-label='getSimplified' }

(protected)

#### getPhong( ambientColor : <span style="font-weight: 400;">[Vector4](../dot/Vector4.md)</span>, diffuseColor : <span style="font-weight: 400;">[Vector4](../dot/Vector4.md)</span>, specularColor : <span style="font-weight: 400;">[Vector4](../dot/Vector4.md)</span>, position : <span style="font-weight: 400;">[Vector4](../dot/Vector4.md)</span>, normal : <span style="font-weight: 400;">[Vector4](../dot/Vector4.md)</span>, lightDirections : <span style="font-weight: 400;">[Vector4](../dot/Vector4.md)[]</span>, lightColors : <span style="font-weight: 400;">[Vector4](../dot/Vector4.md)[]</span> ) : <span style="font-weight: 400;">[Vector4](../dot/Vector4.md)</span> {: #getPhong data-toc-label='getPhong' }

#### evaluate( context : <span style="font-weight: 400;">[RenderEvaluationContext](../alpenglow/RenderEvaluationContext.md)</span> ) : <span style="font-weight: 400;">[Vector4](../dot/Vector4.md)</span> {: #evaluate data-toc-label='evaluate' }

#### writeInstructions( instructions : <span style="font-weight: 400;">[RenderInstruction](../alpenglow/RenderInstruction.md)[]</span> ) {: #writeInstructions data-toc-label='writeInstructions' }

#### serialize() : <span style="font-weight: 400;">[SerializedRenderPhong](../alpenglow/RenderPhong.md#SerializedRenderPhong)</span> {: #serialize data-toc-label='serialize' }



## Type SerializedRenderPhong {: #SerializedRenderPhong }


```js
import type { SerializedRenderPhong } from 'scenerystack/alpenglow';
```


- **type**: "[RenderPhong](../alpenglow/RenderPhong.md)"
- **children**: [SerializedRenderProgram](../alpenglow/RenderProgram.md#SerializedRenderProgram)[]
- **alpha**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>




## Source Code

See the source for [RenderPhong.ts](https://github.com/phetsims/alpenglow/blob/main/js/render-program/RenderPhong.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
