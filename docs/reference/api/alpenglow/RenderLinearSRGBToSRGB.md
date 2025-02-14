# RenderLinearSRGBToSRGB

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/alpenglow/blob/main/js/render-program/RenderLinearSRGBToSRGB.ts](https://github.com/phetsims/alpenglow/blob/main/js/render-program/RenderLinearSRGBToSRGB.ts) for the most up-to-date information.

## Overview

RenderProgram to convert linear sRGB =&gt; sRGB

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class RenderInstructionLinearSRGBToSRGB {: #RenderInstructionLinearSRGBToSRGB }


```js
import { RenderInstructionLinearSRGBToSRGB } from 'scenerystack/alpenglow';
```
### Instance Methods

#### toString() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> {: #RenderInstructionLinearSRGBToSRGB-toString data-toc-label='RenderInstructionLinearSRGBToSRGB-toString' }

#### equals( other : <span style="font-weight: 400;">[RenderInstruction](../alpenglow/RenderInstruction.md)</span>, areLocationsEqual : <span style="font-weight: 400;">( a: [RenderInstructionLocation](../alpenglow/RenderInstruction.md#RenderInstructionLocation), b: [RenderInstructionLocation](../alpenglow/RenderInstruction.md#RenderInstructionLocation) ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #RenderInstructionLinearSRGBToSRGB-equals data-toc-label='RenderInstructionLinearSRGBToSRGB-equals' }

#### execute( stack : <span style="font-weight: 400;">[RenderExecutionStack](../alpenglow/RenderExecutionStack.md)</span>, context : <span style="font-weight: 400;">[RenderEvaluationContext](../alpenglow/RenderEvaluationContext.md)</span>, executor : <span style="font-weight: 400;">[RenderExecutor](../alpenglow/RenderExecutor.md)</span> ) {: #RenderInstructionLinearSRGBToSRGB-execute data-toc-label='RenderInstructionLinearSRGBToSRGB-execute' }

#### writeBinary( encoder : <span style="font-weight: 400;">[ByteEncoder](../alpenglow/ByteEncoder.md)</span>, getOffset : <span style="font-weight: 400;">( location: [RenderInstructionLocation](../alpenglow/RenderInstruction.md#RenderInstructionLocation) ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) {: #RenderInstructionLinearSRGBToSRGB-writeBinary data-toc-label='RenderInstructionLinearSRGBToSRGB-writeBinary' }

#### getBinaryLength() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #RenderInstructionLinearSRGBToSRGB-getBinaryLength data-toc-label='RenderInstructionLinearSRGBToSRGB-getBinaryLength' }

### Static Properties

#### INSTANCE : <span style="font-weight: 400;">[RenderInstructionLinearSRGBToSRGB](../alpenglow/RenderLinearSRGBToSRGB.md#RenderInstructionLinearSRGBToSRGB)</span> {: #RenderInstructionLinearSRGBToSRGB-INSTANCE data-toc-label='RenderInstructionLinearSRGBToSRGB-INSTANCE' }

(readonly)



## Class RenderLinearSRGBToSRGB {: #RenderLinearSRGBToSRGB }


```js
import { RenderLinearSRGBToSRGB } from 'scenerystack/alpenglow';
```
### Constructor

#### new RenderLinearSRGBToSRGB( program : <span style="font-weight: 400;">[RenderProgram](../alpenglow/RenderProgram.md)</span> ) {: #RenderLinearSRGBToSRGB-constructor data-toc-label='new RenderLinearSRGBToSRGB' }

### Instance Methods

#### getName() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> {: #getName data-toc-label='getName' }

#### withChildren( children : <span style="font-weight: 400;">[RenderProgram](../alpenglow/RenderProgram.md)[]</span> ) : <span style="font-weight: 400;">[RenderLinearSRGBToSRGB](../alpenglow/RenderLinearSRGBToSRGB.md)</span> {: #withChildren data-toc-label='withChildren' }

#### writeInstructions( instructions : <span style="font-weight: 400;">[RenderInstruction](../alpenglow/RenderInstruction.md)[]</span> ) {: #writeInstructions data-toc-label='writeInstructions' }



## Source Code

See the source for [RenderLinearSRGBToSRGB.ts](https://github.com/phetsims/alpenglow/blob/main/js/render-program/RenderLinearSRGBToSRGB.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
