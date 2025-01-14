# RenderNormalDebug

## Overview

RenderProgram for showing normals colored for debugging

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class RenderNormalDebug {: #RenderNormalDebug }


```js
import { RenderNormalDebug } from 'scenerystack/alpenglow';
```
### Constructor

#### new RenderNormalDebug( normalProgram : <span style="font-weight: 400;">[RenderProgram](../alpenglow/RenderProgram.md)</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### getName() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> {: #getName data-toc-label='getName' }

#### withChildren( children : <span style="font-weight: 400;">[RenderProgram](../alpenglow/RenderProgram.md)[]</span> ) : <span style="font-weight: 400;">[RenderNormalDebug](../alpenglow/RenderNormalDebug.md)</span> {: #withChildren data-toc-label='withChildren' }

#### equalsTyped( other : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #equalsTyped data-toc-label='equalsTyped' }

(protected)

#### getSimplified( children : <span style="font-weight: 400;">[RenderProgram](../alpenglow/RenderProgram.md)[]</span> ) : <span style="font-weight: 400;">[RenderProgram](../alpenglow/RenderProgram.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> {: #getSimplified data-toc-label='getSimplified' }

(protected)

#### getNormalDebug( normal : <span style="font-weight: 400;">[Vector4](../dot/Vector4.md)</span> ) : <span style="font-weight: 400;">[Vector4](../dot/Vector4.md)</span> {: #getNormalDebug data-toc-label='getNormalDebug' }

#### evaluate( context : <span style="font-weight: 400;">[RenderEvaluationContext](../alpenglow/RenderEvaluationContext.md)</span> ) : <span style="font-weight: 400;">[Vector4](../dot/Vector4.md)</span> {: #evaluate data-toc-label='evaluate' }

#### writeInstructions( instructions : <span style="font-weight: 400;">[RenderInstruction](../alpenglow/RenderInstruction.md)[]</span> ) {: #writeInstructions data-toc-label='writeInstructions' }

#### serialize() : <span style="font-weight: 400;">[SerializedRenderNormalDebug](../alpenglow/RenderNormalDebug.md#SerializedRenderNormalDebug)</span> {: #serialize data-toc-label='serialize' }

### Static Methods

#### deserialize( obj : <span style="font-weight: 400;">[SerializedRenderNormalDebug](../alpenglow/RenderNormalDebug.md#SerializedRenderNormalDebug)</span> ) : <span style="font-weight: 400;">[RenderNormalDebug](../alpenglow/RenderNormalDebug.md)</span> {: #deserialize data-toc-label='deserialize' }



## Class RenderInstructionNormalDebug {: #RenderInstructionNormalDebug }


```js
import { RenderInstructionNormalDebug } from 'scenerystack/alpenglow';
```
### Instance Methods

#### toString() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> {: #RenderInstructionNormalDebug-toString data-toc-label='RenderInstructionNormalDebug-toString' }

#### equals( other : <span style="font-weight: 400;">[RenderInstruction](../alpenglow/RenderInstruction.md)</span>, areLocationsEqual : <span style="font-weight: 400;">( a: [RenderInstructionLocation](../alpenglow/RenderInstruction.md#RenderInstructionLocation), b: [RenderInstructionLocation](../alpenglow/RenderInstruction.md#RenderInstructionLocation) ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #RenderInstructionNormalDebug-equals data-toc-label='RenderInstructionNormalDebug-equals' }

#### execute( stack : <span style="font-weight: 400;">[RenderExecutionStack](../alpenglow/RenderExecutionStack.md)</span>, context : <span style="font-weight: 400;">[RenderEvaluationContext](../alpenglow/RenderEvaluationContext.md)</span>, executor : <span style="font-weight: 400;">[RenderExecutor](../alpenglow/RenderExecutor.md)</span> ) {: #RenderInstructionNormalDebug-execute data-toc-label='RenderInstructionNormalDebug-execute' }

#### writeBinary( encoder : <span style="font-weight: 400;">[ByteEncoder](../alpenglow/ByteEncoder.md)</span>, getOffset : <span style="font-weight: 400;">( location: [RenderInstructionLocation](../alpenglow/RenderInstruction.md#RenderInstructionLocation) ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) {: #RenderInstructionNormalDebug-writeBinary data-toc-label='RenderInstructionNormalDebug-writeBinary' }

#### getBinaryLength() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #RenderInstructionNormalDebug-getBinaryLength data-toc-label='RenderInstructionNormalDebug-getBinaryLength' }

### Static Properties

#### INSTANCE : <span style="font-weight: 400;">[RenderInstructionNormalDebug](../alpenglow/RenderNormalDebug.md#RenderInstructionNormalDebug)</span> {: #RenderInstructionNormalDebug-INSTANCE data-toc-label='RenderInstructionNormalDebug-INSTANCE' }

(readonly)



## Type SerializedRenderNormalDebug {: #SerializedRenderNormalDebug }


```js
import type { SerializedRenderNormalDebug } from 'scenerystack/alpenglow';
```
- **type**: "[RenderNormalDebug](../alpenglow/RenderNormalDebug.md)"
- **normalProgram**: [SerializedRenderProgram](../alpenglow/RenderProgram.md#SerializedRenderProgram)




## Source Code

See the source for [RenderNormalDebug.ts](https://github.com/phetsims/alpenglow/blob/main/js/render-program/RenderNormalDebug.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
