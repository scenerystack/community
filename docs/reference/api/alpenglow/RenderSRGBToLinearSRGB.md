# RenderSRGBToLinearSRGB

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/alpenglow/blob/main/js/render-program/RenderSRGBToLinearSRGB.ts](https://github.com/phetsims/alpenglow/blob/main/js/render-program/RenderSRGBToLinearSRGB.ts) for the most up-to-date information.

## Overview

RenderProgram to convert sRGB =&gt; linear sRGB

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class RenderInstructionSRGBToLinearSRGB {: #RenderInstructionSRGBToLinearSRGB }


```js
import { RenderInstructionSRGBToLinearSRGB } from 'scenerystack/alpenglow';
```
### Instance Methods

#### toString() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> {: #RenderInstructionSRGBToLinearSRGB-toString data-toc-label='RenderInstructionSRGBToLinearSRGB-toString' }

#### equals( other : <span style="font-weight: 400;">[RenderInstruction](../alpenglow/RenderInstruction.md)</span>, areLocationsEqual : <span style="font-weight: 400;">( a: [RenderInstructionLocation](../alpenglow/RenderInstruction.md#RenderInstructionLocation), b: [RenderInstructionLocation](../alpenglow/RenderInstruction.md#RenderInstructionLocation) ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #RenderInstructionSRGBToLinearSRGB-equals data-toc-label='RenderInstructionSRGBToLinearSRGB-equals' }

#### execute( stack : <span style="font-weight: 400;">[RenderExecutionStack](../alpenglow/RenderExecutionStack.md)</span>, context : <span style="font-weight: 400;">[RenderEvaluationContext](../alpenglow/RenderEvaluationContext.md)</span>, executor : <span style="font-weight: 400;">[RenderExecutor](../alpenglow/RenderExecutor.md)</span> ) {: #RenderInstructionSRGBToLinearSRGB-execute data-toc-label='RenderInstructionSRGBToLinearSRGB-execute' }

#### writeBinary( encoder : <span style="font-weight: 400;">[ByteEncoder](../alpenglow/ByteEncoder.md)</span>, getOffset : <span style="font-weight: 400;">( location: [RenderInstructionLocation](../alpenglow/RenderInstruction.md#RenderInstructionLocation) ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) {: #RenderInstructionSRGBToLinearSRGB-writeBinary data-toc-label='RenderInstructionSRGBToLinearSRGB-writeBinary' }

#### getBinaryLength() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #RenderInstructionSRGBToLinearSRGB-getBinaryLength data-toc-label='RenderInstructionSRGBToLinearSRGB-getBinaryLength' }

### Static Properties

#### INSTANCE : <span style="font-weight: 400;">[RenderInstructionSRGBToLinearSRGB](../alpenglow/RenderSRGBToLinearSRGB.md#RenderInstructionSRGBToLinearSRGB)</span> {: #RenderInstructionSRGBToLinearSRGB-INSTANCE data-toc-label='RenderInstructionSRGBToLinearSRGB-INSTANCE' }

(readonly)



## Class RenderSRGBToLinearSRGB {: #RenderSRGBToLinearSRGB }


```js
import { RenderSRGBToLinearSRGB } from 'scenerystack/alpenglow';
```
### Constructor

#### new RenderSRGBToLinearSRGB( program : <span style="font-weight: 400;">[RenderProgram](../alpenglow/RenderProgram.md)</span> ) {: #RenderSRGBToLinearSRGB-constructor data-toc-label='new RenderSRGBToLinearSRGB' }

### Instance Methods

#### getName() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> {: #getName data-toc-label='getName' }

#### withChildren( children : <span style="font-weight: 400;">[RenderProgram](../alpenglow/RenderProgram.md)[]</span> ) : <span style="font-weight: 400;">[RenderSRGBToLinearSRGB](../alpenglow/RenderSRGBToLinearSRGB.md)</span> {: #withChildren data-toc-label='withChildren' }

#### writeInstructions( instructions : <span style="font-weight: 400;">[RenderInstruction](../alpenglow/RenderInstruction.md)[]</span> ) {: #writeInstructions data-toc-label='writeInstructions' }



## Source Code

See the source for [RenderSRGBToLinearSRGB.ts](https://github.com/phetsims/alpenglow/blob/main/js/render-program/RenderSRGBToLinearSRGB.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
