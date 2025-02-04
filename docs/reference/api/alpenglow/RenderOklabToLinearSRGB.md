# RenderOklabToLinearSRGB

## Overview

RenderProgram to convert Oklab =&gt; linear sRGB

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class RenderInstructionOklabToLinearSRGB {: #RenderInstructionOklabToLinearSRGB }


```js
import { RenderInstructionOklabToLinearSRGB } from 'scenerystack/alpenglow';
```
### Instance Methods

#### toString() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> {: #RenderInstructionOklabToLinearSRGB-toString data-toc-label='RenderInstructionOklabToLinearSRGB-toString' }

#### equals( other : <span style="font-weight: 400;">[RenderInstruction](../alpenglow/RenderInstruction.md)</span>, areLocationsEqual : <span style="font-weight: 400;">( a: [RenderInstructionLocation](../alpenglow/RenderInstruction.md#RenderInstructionLocation), b: [RenderInstructionLocation](../alpenglow/RenderInstruction.md#RenderInstructionLocation) ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #RenderInstructionOklabToLinearSRGB-equals data-toc-label='RenderInstructionOklabToLinearSRGB-equals' }

#### execute( stack : <span style="font-weight: 400;">[RenderExecutionStack](../alpenglow/RenderExecutionStack.md)</span>, context : <span style="font-weight: 400;">[RenderEvaluationContext](../alpenglow/RenderEvaluationContext.md)</span>, executor : <span style="font-weight: 400;">[RenderExecutor](../alpenglow/RenderExecutor.md)</span> ) {: #RenderInstructionOklabToLinearSRGB-execute data-toc-label='RenderInstructionOklabToLinearSRGB-execute' }

#### writeBinary( encoder : <span style="font-weight: 400;">[ByteEncoder](../alpenglow/ByteEncoder.md)</span>, getOffset : <span style="font-weight: 400;">( location: [RenderInstructionLocation](../alpenglow/RenderInstruction.md#RenderInstructionLocation) ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) {: #RenderInstructionOklabToLinearSRGB-writeBinary data-toc-label='RenderInstructionOklabToLinearSRGB-writeBinary' }

#### getBinaryLength() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #RenderInstructionOklabToLinearSRGB-getBinaryLength data-toc-label='RenderInstructionOklabToLinearSRGB-getBinaryLength' }

### Static Properties

#### INSTANCE : <span style="font-weight: 400;">[RenderInstructionOklabToLinearSRGB](../alpenglow/RenderOklabToLinearSRGB.md#RenderInstructionOklabToLinearSRGB)</span> {: #RenderInstructionOklabToLinearSRGB-INSTANCE data-toc-label='RenderInstructionOklabToLinearSRGB-INSTANCE' }

(readonly)



## Class RenderOklabToLinearSRGB {: #RenderOklabToLinearSRGB }


```js
import { RenderOklabToLinearSRGB } from 'scenerystack/alpenglow';
```
### Constructor

#### new RenderOklabToLinearSRGB( program : <span style="font-weight: 400;">[RenderProgram](../alpenglow/RenderProgram.md)</span> ) {: #RenderOklabToLinearSRGB-constructor data-toc-label='new RenderOklabToLinearSRGB' }

### Instance Methods

#### getName() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> {: #getName data-toc-label='getName' }

#### withChildren( children : <span style="font-weight: 400;">[RenderProgram](../alpenglow/RenderProgram.md)[]</span> ) : <span style="font-weight: 400;">[RenderOklabToLinearSRGB](../alpenglow/RenderOklabToLinearSRGB.md)</span> {: #withChildren data-toc-label='withChildren' }

#### writeInstructions( instructions : <span style="font-weight: 400;">[RenderInstruction](../alpenglow/RenderInstruction.md)[]</span> ) {: #writeInstructions data-toc-label='writeInstructions' }



## Source Code

See the source for [RenderOklabToLinearSRGB.ts](https://github.com/phetsims/alpenglow/blob/main/js/render-program/RenderOklabToLinearSRGB.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
