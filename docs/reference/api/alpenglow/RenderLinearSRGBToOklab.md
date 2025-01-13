# RenderLinearSRGBToOklab

## Overview

RenderProgram to convert linear sRGB =&gt; Oklab

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class RenderLinearSRGBToOklab {: #RenderLinearSRGBToOklab }


```js
import { RenderLinearSRGBToOklab } from 'scenerystack/alpenglow';
```
### Constructor

#### new RenderLinearSRGBToOklab( program : <span style="font-weight: 400;">[RenderProgram](../alpenglow/RenderProgram.md)</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### getName() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> {: #getName data-toc-label='getName' }

#### withChildren( children : <span style="font-weight: 400;">[RenderProgram](../alpenglow/RenderProgram.md)[]</span> ) : <span style="font-weight: 400;">[RenderLinearSRGBToOklab](../alpenglow/RenderLinearSRGBToOklab.md)</span> {: #withChildren data-toc-label='withChildren' }

#### writeInstructions( instructions : <span style="font-weight: 400;">[RenderInstruction](../alpenglow/RenderInstruction.md)[]</span> ) {: #writeInstructions data-toc-label='writeInstructions' }



## Class RenderInstructionLinearSRGBToOklab {: #RenderInstructionLinearSRGBToOklab }


```js
import { RenderInstructionLinearSRGBToOklab } from 'scenerystack/alpenglow';
```
### Instance Methods

#### toString() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> {: #RenderInstructionLinearSRGBToOklab-toString data-toc-label='RenderInstructionLinearSRGBToOklab-toString' }

#### equals( other : <span style="font-weight: 400;">[RenderInstruction](../alpenglow/RenderInstruction.md)</span>, areLocationsEqual : <span style="font-weight: 400;">( a: [RenderInstructionLocation](../alpenglow/RenderInstruction.md#RenderInstructionLocation), b: [RenderInstructionLocation](../alpenglow/RenderInstruction.md#RenderInstructionLocation) ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #RenderInstructionLinearSRGBToOklab-equals data-toc-label='RenderInstructionLinearSRGBToOklab-equals' }

#### execute( stack : <span style="font-weight: 400;">[RenderExecutionStack](../alpenglow/RenderExecutionStack.md)</span>, context : <span style="font-weight: 400;">[RenderEvaluationContext](../alpenglow/RenderEvaluationContext.md)</span>, executor : <span style="font-weight: 400;">[RenderExecutor](../alpenglow/RenderExecutor.md)</span> ) {: #RenderInstructionLinearSRGBToOklab-execute data-toc-label='RenderInstructionLinearSRGBToOklab-execute' }

#### writeBinary( encoder : <span style="font-weight: 400;">[ByteEncoder](../alpenglow/ByteEncoder.md)</span>, getOffset : <span style="font-weight: 400;">( location: [RenderInstructionLocation](../alpenglow/RenderInstruction.md#RenderInstructionLocation) ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) {: #RenderInstructionLinearSRGBToOklab-writeBinary data-toc-label='RenderInstructionLinearSRGBToOklab-writeBinary' }

#### getBinaryLength() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #RenderInstructionLinearSRGBToOklab-getBinaryLength data-toc-label='RenderInstructionLinearSRGBToOklab-getBinaryLength' }

### Static Properties

#### INSTANCE : <span style="font-weight: 400;">[RenderInstructionLinearSRGBToOklab](../alpenglow/RenderLinearSRGBToOklab.md#RenderInstructionLinearSRGBToOklab)</span> {: #RenderInstructionLinearSRGBToOklab-INSTANCE data-toc-label='RenderInstructionLinearSRGBToOklab-INSTANCE' }

(readonly)



## Source Code

See the source for [RenderLinearSRGBToOklab.ts](https://github.com/phetsims/alpenglow/blob/main/js/render-program/RenderLinearSRGBToOklab.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
