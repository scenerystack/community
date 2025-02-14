# RenderUnpremultiply

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/alpenglow/blob/main/js/render-program/RenderUnpremultiply.ts](https://github.com/phetsims/alpenglow/blob/main/js/render-program/RenderUnpremultiply.ts) for the most up-to-date information.

## Overview

RenderProgram to unpremultiply the input color

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class RenderInstructionUnpremultiply {: #RenderInstructionUnpremultiply }


```js
import { RenderInstructionUnpremultiply } from 'scenerystack/alpenglow';
```
### Instance Methods

#### toString() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> {: #RenderInstructionUnpremultiply-toString data-toc-label='RenderInstructionUnpremultiply-toString' }

#### equals( other : <span style="font-weight: 400;">[RenderInstruction](../alpenglow/RenderInstruction.md)</span>, areLocationsEqual : <span style="font-weight: 400;">( a: [RenderInstructionLocation](../alpenglow/RenderInstruction.md#RenderInstructionLocation), b: [RenderInstructionLocation](../alpenglow/RenderInstruction.md#RenderInstructionLocation) ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #RenderInstructionUnpremultiply-equals data-toc-label='RenderInstructionUnpremultiply-equals' }

#### execute( stack : <span style="font-weight: 400;">[RenderExecutionStack](../alpenglow/RenderExecutionStack.md)</span>, context : <span style="font-weight: 400;">[RenderEvaluationContext](../alpenglow/RenderEvaluationContext.md)</span>, executor : <span style="font-weight: 400;">[RenderExecutor](../alpenglow/RenderExecutor.md)</span> ) {: #RenderInstructionUnpremultiply-execute data-toc-label='RenderInstructionUnpremultiply-execute' }

#### writeBinary( encoder : <span style="font-weight: 400;">[ByteEncoder](../alpenglow/ByteEncoder.md)</span>, getOffset : <span style="font-weight: 400;">( location: [RenderInstructionLocation](../alpenglow/RenderInstruction.md#RenderInstructionLocation) ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) {: #RenderInstructionUnpremultiply-writeBinary data-toc-label='RenderInstructionUnpremultiply-writeBinary' }

#### getBinaryLength() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #RenderInstructionUnpremultiply-getBinaryLength data-toc-label='RenderInstructionUnpremultiply-getBinaryLength' }

### Static Properties

#### INSTANCE : <span style="font-weight: 400;">[RenderInstructionUnpremultiply](../alpenglow/RenderUnpremultiply.md#RenderInstructionUnpremultiply)</span> {: #RenderInstructionUnpremultiply-INSTANCE data-toc-label='RenderInstructionUnpremultiply-INSTANCE' }

(readonly)



## Class RenderUnpremultiply {: #RenderUnpremultiply }


```js
import { RenderUnpremultiply } from 'scenerystack/alpenglow';
```
### Constructor

#### new RenderUnpremultiply( program : <span style="font-weight: 400;">[RenderProgram](../alpenglow/RenderProgram.md)</span> ) {: #RenderUnpremultiply-constructor data-toc-label='new RenderUnpremultiply' }

### Instance Methods

#### getName() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> {: #getName data-toc-label='getName' }

#### withChildren( children : <span style="font-weight: 400;">[RenderProgram](../alpenglow/RenderProgram.md)[]</span> ) : <span style="font-weight: 400;">[RenderUnpremultiply](../alpenglow/RenderUnpremultiply.md)</span> {: #withChildren data-toc-label='withChildren' }

#### writeInstructions( instructions : <span style="font-weight: 400;">[RenderInstruction](../alpenglow/RenderInstruction.md)[]</span> ) {: #writeInstructions data-toc-label='writeInstructions' }



## Source Code

See the source for [RenderUnpremultiply.ts](https://github.com/phetsims/alpenglow/blob/main/js/render-program/RenderUnpremultiply.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
