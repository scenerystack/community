# RenderLinearSRGBToOklab

## Overview

RenderProgram to convert linear sRGB =&gt; Oklab

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class RenderLinearSRGBToOklab {: #RenderLinearSRGBToOklab }


```js
import { RenderLinearSRGBToOklab } from 'scenerystack/alpenglow';
```
### Constructor

#### new RenderLinearSRGBToOklab( program : <span style="font-weight: 400; opacity: 80%;">RenderProgram</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### getName() : <span style="font-weight: 400; opacity: 80%;">string</span> {: #getName data-toc-label='getName' }

#### withChildren( children : <span style="font-weight: 400; opacity: 80%;">RenderProgram[]</span> ) : <span style="font-weight: 400; opacity: 80%;">RenderLinearSRGBToOklab</span> {: #withChildren data-toc-label='withChildren' }

#### writeInstructions( instructions : <span style="font-weight: 400; opacity: 80%;">RenderInstruction[]</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #writeInstructions data-toc-label='writeInstructions' }



## Class RenderInstructionLinearSRGBToOklab {: #RenderInstructionLinearSRGBToOklab }


```js
import { RenderInstructionLinearSRGBToOklab } from 'scenerystack/alpenglow';
```
### Instance Methods

#### toString() : <span style="font-weight: 400; opacity: 80%;">string</span> {: #RenderInstructionLinearSRGBToOklab-toString data-toc-label='RenderInstructionLinearSRGBToOklab-toString' }

#### equals( other : <span style="font-weight: 400; opacity: 80%;">RenderInstruction</span>, areLocationsEqual : <span style="font-weight: 400; opacity: 80%;">( a: RenderInstructionLocation, b: RenderInstructionLocation ) =&gt; boolean</span> ) : <span style="font-weight: 400; opacity: 80%;">boolean</span> {: #RenderInstructionLinearSRGBToOklab-equals data-toc-label='RenderInstructionLinearSRGBToOklab-equals' }

#### execute( stack : <span style="font-weight: 400; opacity: 80%;">RenderExecutionStack</span>, context : <span style="font-weight: 400; opacity: 80%;">RenderEvaluationContext</span>, executor : <span style="font-weight: 400; opacity: 80%;">RenderExecutor</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #RenderInstructionLinearSRGBToOklab-execute data-toc-label='RenderInstructionLinearSRGBToOklab-execute' }

#### writeBinary( encoder : <span style="font-weight: 400; opacity: 80%;">ByteEncoder</span>, getOffset : <span style="font-weight: 400; opacity: 80%;">( location: RenderInstructionLocation ) =&gt; number</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #RenderInstructionLinearSRGBToOklab-writeBinary data-toc-label='RenderInstructionLinearSRGBToOklab-writeBinary' }

#### getBinaryLength() : <span style="font-weight: 400; opacity: 80%;">number</span> {: #RenderInstructionLinearSRGBToOklab-getBinaryLength data-toc-label='RenderInstructionLinearSRGBToOklab-getBinaryLength' }

### Static Properties

#### INSTANCE : <span style="font-weight: 400; opacity: 80%;">RenderInstructionLinearSRGBToOklab</span> {: #RenderInstructionLinearSRGBToOklab-INSTANCE data-toc-label='RenderInstructionLinearSRGBToOklab-INSTANCE' }

(readonly)



## Source Code

See the source for [RenderLinearSRGBToOklab.ts](https://github.com/phetsims/alpenglow/blob/main/js/render-program/RenderLinearSRGBToOklab.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
