# RenderSRGBToLinearSRGB

## Overview

RenderProgram to convert sRGB =&gt; linear sRGB

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class RenderSRGBToLinearSRGB {: #RenderSRGBToLinearSRGB }


```js
import { RenderSRGBToLinearSRGB } from 'scenerystack/alpenglow';
```
### Constructor

#### new RenderSRGBToLinearSRGB( program : <span style="font-weight: 400; opacity: 80%;">RenderProgram</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### getName() : <span style="font-weight: 400; opacity: 80%;">string</span> {: #getName data-toc-label='getName' }

#### withChildren( children : <span style="font-weight: 400; opacity: 80%;">RenderProgram[]</span> ) : <span style="font-weight: 400; opacity: 80%;">RenderSRGBToLinearSRGB</span> {: #withChildren data-toc-label='withChildren' }

#### writeInstructions( instructions : <span style="font-weight: 400; opacity: 80%;">RenderInstruction[]</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #writeInstructions data-toc-label='writeInstructions' }



## Class RenderInstructionSRGBToLinearSRGB {: #RenderInstructionSRGBToLinearSRGB }


```js
import { RenderInstructionSRGBToLinearSRGB } from 'scenerystack/alpenglow';
```
### Instance Methods

#### toString() : <span style="font-weight: 400; opacity: 80%;">string</span> {: #RenderInstructionSRGBToLinearSRGB-toString data-toc-label='RenderInstructionSRGBToLinearSRGB-toString' }

#### equals( other : <span style="font-weight: 400; opacity: 80%;">RenderInstruction</span>, areLocationsEqual : <span style="font-weight: 400; opacity: 80%;">( a: RenderInstructionLocation, b: RenderInstructionLocation ) =&gt; boolean</span> ) : <span style="font-weight: 400; opacity: 80%;">boolean</span> {: #RenderInstructionSRGBToLinearSRGB-equals data-toc-label='RenderInstructionSRGBToLinearSRGB-equals' }

#### execute( stack : <span style="font-weight: 400; opacity: 80%;">RenderExecutionStack</span>, context : <span style="font-weight: 400; opacity: 80%;">RenderEvaluationContext</span>, executor : <span style="font-weight: 400; opacity: 80%;">RenderExecutor</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #RenderInstructionSRGBToLinearSRGB-execute data-toc-label='RenderInstructionSRGBToLinearSRGB-execute' }

#### writeBinary( encoder : <span style="font-weight: 400; opacity: 80%;">ByteEncoder</span>, getOffset : <span style="font-weight: 400; opacity: 80%;">( location: RenderInstructionLocation ) =&gt; number</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #RenderInstructionSRGBToLinearSRGB-writeBinary data-toc-label='RenderInstructionSRGBToLinearSRGB-writeBinary' }

#### getBinaryLength() : <span style="font-weight: 400; opacity: 80%;">number</span> {: #RenderInstructionSRGBToLinearSRGB-getBinaryLength data-toc-label='RenderInstructionSRGBToLinearSRGB-getBinaryLength' }

### Static Properties

#### INSTANCE : <span style="font-weight: 400; opacity: 80%;">RenderInstructionSRGBToLinearSRGB</span> {: #RenderInstructionSRGBToLinearSRGB-INSTANCE data-toc-label='RenderInstructionSRGBToLinearSRGB-INSTANCE' }

(readonly)



## Source Code

See the source for [RenderSRGBToLinearSRGB.ts](https://github.com/phetsims/alpenglow/blob/main/js/render-program/RenderSRGBToLinearSRGB.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
