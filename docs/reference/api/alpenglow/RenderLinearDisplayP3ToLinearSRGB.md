# RenderLinearDisplayP3ToLinearSRGB

## Overview

RenderProgram to convert linear Display P3 =&gt; linear sRGB

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class RenderLinearDisplayP3ToLinearSRGB {: #RenderLinearDisplayP3ToLinearSRGB }


```js
import { RenderLinearDisplayP3ToLinearSRGB } from 'scenerystack/alpenglow';
```
### Constructor

#### new RenderLinearDisplayP3ToLinearSRGB( program : <span style="font-weight: 400; opacity: 80%;">RenderProgram</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### getName() : <span style="font-weight: 400; opacity: 80%;">string</span> {: #getName data-toc-label='getName' }

#### withChildren( children : <span style="font-weight: 400; opacity: 80%;">RenderProgram[]</span> ) : <span style="font-weight: 400; opacity: 80%;">RenderLinearDisplayP3ToLinearSRGB</span> {: #withChildren data-toc-label='withChildren' }

#### writeInstructions( instructions : <span style="font-weight: 400; opacity: 80%;">RenderInstruction[]</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #writeInstructions data-toc-label='writeInstructions' }



## Class RenderInstructionLinearDisplayP3ToLinearSRGB {: #RenderInstructionLinearDisplayP3ToLinearSRGB }


```js
import { RenderInstructionLinearDisplayP3ToLinearSRGB } from 'scenerystack/alpenglow';
```
### Instance Methods

#### toString() : <span style="font-weight: 400; opacity: 80%;">string</span> {: #RenderInstructionLinearDisplayP3ToLinearSRGB-toString data-toc-label='RenderInstructionLinearDisplayP3ToLinearSRGB-toString' }

#### equals( other : <span style="font-weight: 400; opacity: 80%;">RenderInstruction</span>, areLocationsEqual : <span style="font-weight: 400; opacity: 80%;">( a: RenderInstructionLocation, b: RenderInstructionLocation ) =&gt; boolean</span> ) : <span style="font-weight: 400; opacity: 80%;">boolean</span> {: #RenderInstructionLinearDisplayP3ToLinearSRGB-equals data-toc-label='RenderInstructionLinearDisplayP3ToLinearSRGB-equals' }

#### execute( stack : <span style="font-weight: 400; opacity: 80%;">RenderExecutionStack</span>, context : <span style="font-weight: 400; opacity: 80%;">RenderEvaluationContext</span>, executor : <span style="font-weight: 400; opacity: 80%;">RenderExecutor</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #RenderInstructionLinearDisplayP3ToLinearSRGB-execute data-toc-label='RenderInstructionLinearDisplayP3ToLinearSRGB-execute' }

#### writeBinary( encoder : <span style="font-weight: 400; opacity: 80%;">ByteEncoder</span>, getOffset : <span style="font-weight: 400; opacity: 80%;">( location: RenderInstructionLocation ) =&gt; number</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #RenderInstructionLinearDisplayP3ToLinearSRGB-writeBinary data-toc-label='RenderInstructionLinearDisplayP3ToLinearSRGB-writeBinary' }

#### getBinaryLength() : <span style="font-weight: 400; opacity: 80%;">number</span> {: #RenderInstructionLinearDisplayP3ToLinearSRGB-getBinaryLength data-toc-label='RenderInstructionLinearDisplayP3ToLinearSRGB-getBinaryLength' }

### Static Properties

#### INSTANCE : <span style="font-weight: 400; opacity: 80%;">RenderInstructionLinearDisplayP3ToLinearSRGB</span> {: #RenderInstructionLinearDisplayP3ToLinearSRGB-INSTANCE data-toc-label='RenderInstructionLinearDisplayP3ToLinearSRGB-INSTANCE' }

(readonly)



## Source Code

See the source for [RenderLinearDisplayP3ToLinearSRGB.ts](https://github.com/phetsims/alpenglow/blob/main/js/render-program/RenderLinearDisplayP3ToLinearSRGB.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
