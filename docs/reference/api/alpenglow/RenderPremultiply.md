# RenderPremultiply

## Overview

RenderProgram to premultiply the input color

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class RenderPremultiply {: #RenderPremultiply }


```js
import { RenderPremultiply } from 'scenerystack/alpenglow';
```
### Constructor

#### new RenderPremultiply( program : <span style="font-weight: 400;">[RenderProgram](../alpenglow/RenderProgram.md)</span> ) {: #RenderPremultiply-constructor data-toc-label='new RenderPremultiply' }

### Instance Methods

#### getName() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> {: #getName data-toc-label='getName' }

#### withChildren( children : <span style="font-weight: 400;">[RenderProgram](../alpenglow/RenderProgram.md)[]</span> ) : <span style="font-weight: 400;">[RenderPremultiply](../alpenglow/RenderPremultiply.md)</span> {: #withChildren data-toc-label='withChildren' }

#### writeInstructions( instructions : <span style="font-weight: 400;">[RenderInstruction](../alpenglow/RenderInstruction.md)[]</span> ) {: #writeInstructions data-toc-label='writeInstructions' }



## Class RenderInstructionPremultiply {: #RenderInstructionPremultiply }


```js
import { RenderInstructionPremultiply } from 'scenerystack/alpenglow';
```
### Instance Methods

#### toString() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> {: #RenderInstructionPremultiply-toString data-toc-label='RenderInstructionPremultiply-toString' }

#### equals( other : <span style="font-weight: 400;">[RenderInstruction](../alpenglow/RenderInstruction.md)</span>, areLocationsEqual : <span style="font-weight: 400;">( a: [RenderInstructionLocation](../alpenglow/RenderInstruction.md#RenderInstructionLocation), b: [RenderInstructionLocation](../alpenglow/RenderInstruction.md#RenderInstructionLocation) ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #RenderInstructionPremultiply-equals data-toc-label='RenderInstructionPremultiply-equals' }

#### execute( stack : <span style="font-weight: 400;">[RenderExecutionStack](../alpenglow/RenderExecutionStack.md)</span>, context : <span style="font-weight: 400;">[RenderEvaluationContext](../alpenglow/RenderEvaluationContext.md)</span>, executor : <span style="font-weight: 400;">[RenderExecutor](../alpenglow/RenderExecutor.md)</span> ) {: #RenderInstructionPremultiply-execute data-toc-label='RenderInstructionPremultiply-execute' }

#### writeBinary( encoder : <span style="font-weight: 400;">[ByteEncoder](../alpenglow/ByteEncoder.md)</span>, getOffset : <span style="font-weight: 400;">( location: [RenderInstructionLocation](../alpenglow/RenderInstruction.md#RenderInstructionLocation) ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) {: #RenderInstructionPremultiply-writeBinary data-toc-label='RenderInstructionPremultiply-writeBinary' }

#### getBinaryLength() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #RenderInstructionPremultiply-getBinaryLength data-toc-label='RenderInstructionPremultiply-getBinaryLength' }

### Static Properties

#### INSTANCE : <span style="font-weight: 400;">[RenderInstructionPremultiply](../alpenglow/RenderPremultiply.md#RenderInstructionPremultiply)</span> {: #RenderInstructionPremultiply-INSTANCE data-toc-label='RenderInstructionPremultiply-INSTANCE' }

(readonly)



## Source Code

See the source for [RenderPremultiply.ts](https://github.com/phetsims/alpenglow/blob/main/js/render-program/RenderPremultiply.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
