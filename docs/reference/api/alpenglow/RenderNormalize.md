# RenderNormalize

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/alpenglow/blob/main/js/render-program/RenderNormalize.ts](https://github.com/phetsims/alpenglow/blob/main/js/render-program/RenderNormalize.ts) for the most up-to-date information.

## Overview

RenderProgram for normalizing the result of another RenderProgram

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class RenderInstructionNormalize {: #RenderInstructionNormalize }


```js
import { RenderInstructionNormalize } from 'scenerystack/alpenglow';
```
### Instance Methods

#### toString() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> {: #RenderInstructionNormalize-toString data-toc-label='RenderInstructionNormalize-toString' }

#### equals( other : <span style="font-weight: 400;">[RenderInstruction](../alpenglow/RenderInstruction.md)</span>, areLocationsEqual : <span style="font-weight: 400;">( a: [RenderInstructionLocation](../alpenglow/RenderInstruction.md#RenderInstructionLocation), b: [RenderInstructionLocation](../alpenglow/RenderInstruction.md#RenderInstructionLocation) ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #RenderInstructionNormalize-equals data-toc-label='RenderInstructionNormalize-equals' }

#### execute( stack : <span style="font-weight: 400;">[RenderExecutionStack](../alpenglow/RenderExecutionStack.md)</span>, context : <span style="font-weight: 400;">[RenderEvaluationContext](../alpenglow/RenderEvaluationContext.md)</span>, executor : <span style="font-weight: 400;">[RenderExecutor](../alpenglow/RenderExecutor.md)</span> ) {: #RenderInstructionNormalize-execute data-toc-label='RenderInstructionNormalize-execute' }

#### writeBinary( encoder : <span style="font-weight: 400;">[ByteEncoder](../alpenglow/ByteEncoder.md)</span>, getOffset : <span style="font-weight: 400;">( location: [RenderInstructionLocation](../alpenglow/RenderInstruction.md#RenderInstructionLocation) ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) {: #RenderInstructionNormalize-writeBinary data-toc-label='RenderInstructionNormalize-writeBinary' }

#### getBinaryLength() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #RenderInstructionNormalize-getBinaryLength data-toc-label='RenderInstructionNormalize-getBinaryLength' }

### Static Properties

#### INSTANCE : <span style="font-weight: 400;">[RenderInstructionNormalize](../alpenglow/RenderNormalize.md#RenderInstructionNormalize)</span> {: #RenderInstructionNormalize-INSTANCE data-toc-label='RenderInstructionNormalize-INSTANCE' }

(readonly)



## Class RenderNormalize {: #RenderNormalize }


```js
import { RenderNormalize } from 'scenerystack/alpenglow';
```
### Constructor

#### new RenderNormalize( program : <span style="font-weight: 400;">[RenderProgram](../alpenglow/RenderProgram.md)</span> ) {: #RenderNormalize-constructor data-toc-label='new RenderNormalize' }

### Instance Methods

#### getName() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> {: #getName data-toc-label='getName' }

#### withChildren( children : <span style="font-weight: 400;">[RenderProgram](../alpenglow/RenderProgram.md)[]</span> ) : <span style="font-weight: 400;">[RenderNormalize](../alpenglow/RenderNormalize.md)</span> {: #withChildren data-toc-label='withChildren' }

#### getSimplified( children : <span style="font-weight: 400;">[RenderProgram](../alpenglow/RenderProgram.md)[]</span> ) : <span style="font-weight: 400;">[RenderProgram](../alpenglow/RenderProgram.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> {: #getSimplified data-toc-label='getSimplified' }

(protected)

#### evaluate( context : <span style="font-weight: 400;">[RenderEvaluationContext](../alpenglow/RenderEvaluationContext.md)</span> ) : <span style="font-weight: 400;">[Vector4](../dot/Vector4.md)</span> {: #evaluate data-toc-label='evaluate' }

#### writeInstructions( instructions : <span style="font-weight: 400;">[RenderInstruction](../alpenglow/RenderInstruction.md)[]</span> ) {: #writeInstructions data-toc-label='writeInstructions' }

#### serialize() : <span style="font-weight: 400;">[SerializedRenderNormalize](../alpenglow/RenderNormalize.md#SerializedRenderNormalize)</span> {: #serialize data-toc-label='serialize' }



## Type SerializedRenderNormalize {: #SerializedRenderNormalize }


```js
import type { SerializedRenderNormalize } from 'scenerystack/alpenglow';
```


- **type**: "[RenderNormalize](../alpenglow/RenderNormalize.md)"
- **program**: [SerializedRenderProgram](../alpenglow/RenderProgram.md#SerializedRenderProgram)




## Source Code

See the source for [RenderNormalize.ts](https://github.com/phetsims/alpenglow/blob/main/js/render-program/RenderNormalize.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
