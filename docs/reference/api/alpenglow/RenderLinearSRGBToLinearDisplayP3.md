# RenderLinearSRGBToLinearDisplayP3

## Overview

RenderProgram to convert linear sRGB =&gt; linear Display P3

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class RenderLinearSRGBToLinearDisplayP3 {: #RenderLinearSRGBToLinearDisplayP3 }


```js
import { RenderLinearSRGBToLinearDisplayP3 } from 'scenerystack/alpenglow';
```
### Constructor

#### new RenderLinearSRGBToLinearDisplayP3( program : <span style="font-weight: 400; opacity: 80%;">RenderProgram</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### getName() : <span style="font-weight: 400; opacity: 80%;">string</span> {: #getName data-toc-label='getName' }

#### withChildren( children : <span style="font-weight: 400; opacity: 80%;">RenderProgram[]</span> ) : <span style="font-weight: 400; opacity: 80%;">RenderLinearSRGBToLinearDisplayP3</span> {: #withChildren data-toc-label='withChildren' }

#### writeInstructions( instructions : <span style="font-weight: 400; opacity: 80%;">RenderInstruction[]</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #writeInstructions data-toc-label='writeInstructions' }



## Class RenderInstructionLinearSRGBToLinearDisplayP3 {: #RenderInstructionLinearSRGBToLinearDisplayP3 }


```js
import { RenderInstructionLinearSRGBToLinearDisplayP3 } from 'scenerystack/alpenglow';
```
### Instance Methods

#### toString() : <span style="font-weight: 400; opacity: 80%;">string</span> {: #RenderInstructionLinearSRGBToLinearDisplayP3-toString data-toc-label='RenderInstructionLinearSRGBToLinearDisplayP3-toString' }

#### equals( other : <span style="font-weight: 400; opacity: 80%;">RenderInstruction</span>, areLocationsEqual : <span style="font-weight: 400; opacity: 80%;">( a: RenderInstructionLocation, b: RenderInstructionLocation ) =&gt; boolean</span> ) : <span style="font-weight: 400; opacity: 80%;">boolean</span> {: #RenderInstructionLinearSRGBToLinearDisplayP3-equals data-toc-label='RenderInstructionLinearSRGBToLinearDisplayP3-equals' }

#### execute( stack : <span style="font-weight: 400; opacity: 80%;">RenderExecutionStack</span>, context : <span style="font-weight: 400; opacity: 80%;">RenderEvaluationContext</span>, executor : <span style="font-weight: 400; opacity: 80%;">RenderExecutor</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #RenderInstructionLinearSRGBToLinearDisplayP3-execute data-toc-label='RenderInstructionLinearSRGBToLinearDisplayP3-execute' }

#### writeBinary( encoder : <span style="font-weight: 400; opacity: 80%;">ByteEncoder</span>, getOffset : <span style="font-weight: 400; opacity: 80%;">( location: RenderInstructionLocation ) =&gt; number</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #RenderInstructionLinearSRGBToLinearDisplayP3-writeBinary data-toc-label='RenderInstructionLinearSRGBToLinearDisplayP3-writeBinary' }

#### getBinaryLength() : <span style="font-weight: 400; opacity: 80%;">number</span> {: #RenderInstructionLinearSRGBToLinearDisplayP3-getBinaryLength data-toc-label='RenderInstructionLinearSRGBToLinearDisplayP3-getBinaryLength' }

### Static Properties

#### INSTANCE : <span style="font-weight: 400; opacity: 80%;">RenderInstructionLinearSRGBToLinearDisplayP3</span> {: #RenderInstructionLinearSRGBToLinearDisplayP3-INSTANCE data-toc-label='RenderInstructionLinearSRGBToLinearDisplayP3-INSTANCE' }

(readonly)



## Source Code

See the source for [RenderLinearSRGBToLinearDisplayP3.ts](https://github.com/phetsims/alpenglow/blob/main/js/render-program/RenderLinearSRGBToLinearDisplayP3.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
