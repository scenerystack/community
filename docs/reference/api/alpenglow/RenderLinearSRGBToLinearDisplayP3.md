# RenderLinearSRGBToLinearDisplayP3

## Overview

RenderProgram to convert linear sRGB =&gt; linear Display P3

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class RenderLinearSRGBToLinearDisplayP3 {: #RenderLinearSRGBToLinearDisplayP3 }


```js
import { RenderLinearSRGBToLinearDisplayP3 } from 'scenerystack/alpenglow';
```
### Constructor

#### new RenderLinearSRGBToLinearDisplayP3( program : <span style="font-weight: 400;">[RenderProgram](../alpenglow/RenderProgram.md)</span> ) {: #RenderLinearSRGBToLinearDisplayP3-constructor data-toc-label='new RenderLinearSRGBToLinearDisplayP3' }

### Instance Methods

#### getName() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> {: #getName data-toc-label='getName' }

#### withChildren( children : <span style="font-weight: 400;">[RenderProgram](../alpenglow/RenderProgram.md)[]</span> ) : <span style="font-weight: 400;">[RenderLinearSRGBToLinearDisplayP3](../alpenglow/RenderLinearSRGBToLinearDisplayP3.md)</span> {: #withChildren data-toc-label='withChildren' }

#### writeInstructions( instructions : <span style="font-weight: 400;">[RenderInstruction](../alpenglow/RenderInstruction.md)[]</span> ) {: #writeInstructions data-toc-label='writeInstructions' }



## Class RenderInstructionLinearSRGBToLinearDisplayP3 {: #RenderInstructionLinearSRGBToLinearDisplayP3 }


```js
import { RenderInstructionLinearSRGBToLinearDisplayP3 } from 'scenerystack/alpenglow';
```
### Instance Methods

#### toString() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> {: #RenderInstructionLinearSRGBToLinearDisplayP3-toString data-toc-label='RenderInstructionLinearSRGBToLinearDisplayP3-toString' }

#### equals( other : <span style="font-weight: 400;">[RenderInstruction](../alpenglow/RenderInstruction.md)</span>, areLocationsEqual : <span style="font-weight: 400;">( a: [RenderInstructionLocation](../alpenglow/RenderInstruction.md#RenderInstructionLocation), b: [RenderInstructionLocation](../alpenglow/RenderInstruction.md#RenderInstructionLocation) ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #RenderInstructionLinearSRGBToLinearDisplayP3-equals data-toc-label='RenderInstructionLinearSRGBToLinearDisplayP3-equals' }

#### execute( stack : <span style="font-weight: 400;">[RenderExecutionStack](../alpenglow/RenderExecutionStack.md)</span>, context : <span style="font-weight: 400;">[RenderEvaluationContext](../alpenglow/RenderEvaluationContext.md)</span>, executor : <span style="font-weight: 400;">[RenderExecutor](../alpenglow/RenderExecutor.md)</span> ) {: #RenderInstructionLinearSRGBToLinearDisplayP3-execute data-toc-label='RenderInstructionLinearSRGBToLinearDisplayP3-execute' }

#### writeBinary( encoder : <span style="font-weight: 400;">[ByteEncoder](../alpenglow/ByteEncoder.md)</span>, getOffset : <span style="font-weight: 400;">( location: [RenderInstructionLocation](../alpenglow/RenderInstruction.md#RenderInstructionLocation) ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) {: #RenderInstructionLinearSRGBToLinearDisplayP3-writeBinary data-toc-label='RenderInstructionLinearSRGBToLinearDisplayP3-writeBinary' }

#### getBinaryLength() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #RenderInstructionLinearSRGBToLinearDisplayP3-getBinaryLength data-toc-label='RenderInstructionLinearSRGBToLinearDisplayP3-getBinaryLength' }

### Static Properties

#### INSTANCE : <span style="font-weight: 400;">[RenderInstructionLinearSRGBToLinearDisplayP3](../alpenglow/RenderLinearSRGBToLinearDisplayP3.md#RenderInstructionLinearSRGBToLinearDisplayP3)</span> {: #RenderInstructionLinearSRGBToLinearDisplayP3-INSTANCE data-toc-label='RenderInstructionLinearSRGBToLinearDisplayP3-INSTANCE' }

(readonly)



## Source Code

See the source for [RenderLinearSRGBToLinearDisplayP3.ts](https://github.com/phetsims/alpenglow/blob/main/js/render-program/RenderLinearSRGBToLinearDisplayP3.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
