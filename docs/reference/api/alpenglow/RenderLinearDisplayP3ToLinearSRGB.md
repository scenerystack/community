# RenderLinearDisplayP3ToLinearSRGB

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/alpenglow/blob/main/js/render-program/RenderLinearDisplayP3ToLinearSRGB.ts](https://github.com/phetsims/alpenglow/blob/main/js/render-program/RenderLinearDisplayP3ToLinearSRGB.ts) for the most up-to-date information.

## Overview

RenderProgram to convert linear Display P3 =&gt; linear sRGB

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class RenderInstructionLinearDisplayP3ToLinearSRGB {: #RenderInstructionLinearDisplayP3ToLinearSRGB }


```js
import { RenderInstructionLinearDisplayP3ToLinearSRGB } from 'scenerystack/alpenglow';
```
### Instance Methods

#### toString() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> {: #RenderInstructionLinearDisplayP3ToLinearSRGB-toString data-toc-label='RenderInstructionLinearDisplayP3ToLinearSRGB-toString' }

#### equals( other : <span style="font-weight: 400;">[RenderInstruction](../alpenglow/RenderInstruction.md)</span>, areLocationsEqual : <span style="font-weight: 400;">( a: [RenderInstructionLocation](../alpenglow/RenderInstruction.md#RenderInstructionLocation), b: [RenderInstructionLocation](../alpenglow/RenderInstruction.md#RenderInstructionLocation) ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #RenderInstructionLinearDisplayP3ToLinearSRGB-equals data-toc-label='RenderInstructionLinearDisplayP3ToLinearSRGB-equals' }

#### execute( stack : <span style="font-weight: 400;">[RenderExecutionStack](../alpenglow/RenderExecutionStack.md)</span>, context : <span style="font-weight: 400;">[RenderEvaluationContext](../alpenglow/RenderEvaluationContext.md)</span>, executor : <span style="font-weight: 400;">[RenderExecutor](../alpenglow/RenderExecutor.md)</span> ) {: #RenderInstructionLinearDisplayP3ToLinearSRGB-execute data-toc-label='RenderInstructionLinearDisplayP3ToLinearSRGB-execute' }

#### writeBinary( encoder : <span style="font-weight: 400;">[ByteEncoder](../alpenglow/ByteEncoder.md)</span>, getOffset : <span style="font-weight: 400;">( location: [RenderInstructionLocation](../alpenglow/RenderInstruction.md#RenderInstructionLocation) ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) {: #RenderInstructionLinearDisplayP3ToLinearSRGB-writeBinary data-toc-label='RenderInstructionLinearDisplayP3ToLinearSRGB-writeBinary' }

#### getBinaryLength() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #RenderInstructionLinearDisplayP3ToLinearSRGB-getBinaryLength data-toc-label='RenderInstructionLinearDisplayP3ToLinearSRGB-getBinaryLength' }

### Static Properties

#### INSTANCE : <span style="font-weight: 400;">[RenderInstructionLinearDisplayP3ToLinearSRGB](../alpenglow/RenderLinearDisplayP3ToLinearSRGB.md#RenderInstructionLinearDisplayP3ToLinearSRGB)</span> {: #RenderInstructionLinearDisplayP3ToLinearSRGB-INSTANCE data-toc-label='RenderInstructionLinearDisplayP3ToLinearSRGB-INSTANCE' }

(readonly)



## Class RenderLinearDisplayP3ToLinearSRGB {: #RenderLinearDisplayP3ToLinearSRGB }


```js
import { RenderLinearDisplayP3ToLinearSRGB } from 'scenerystack/alpenglow';
```
### Constructor

#### new RenderLinearDisplayP3ToLinearSRGB( program : <span style="font-weight: 400;">[RenderProgram](../alpenglow/RenderProgram.md)</span> ) {: #RenderLinearDisplayP3ToLinearSRGB-constructor data-toc-label='new RenderLinearDisplayP3ToLinearSRGB' }

### Instance Methods

#### getName() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> {: #getName data-toc-label='getName' }

#### withChildren( children : <span style="font-weight: 400;">[RenderProgram](../alpenglow/RenderProgram.md)[]</span> ) : <span style="font-weight: 400;">[RenderLinearDisplayP3ToLinearSRGB](../alpenglow/RenderLinearDisplayP3ToLinearSRGB.md)</span> {: #withChildren data-toc-label='withChildren' }

#### writeInstructions( instructions : <span style="font-weight: 400;">[RenderInstruction](../alpenglow/RenderInstruction.md)[]</span> ) {: #writeInstructions data-toc-label='writeInstructions' }



## Source Code

See the source for [RenderLinearDisplayP3ToLinearSRGB.ts](https://github.com/phetsims/alpenglow/blob/main/js/render-program/RenderLinearDisplayP3ToLinearSRGB.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
