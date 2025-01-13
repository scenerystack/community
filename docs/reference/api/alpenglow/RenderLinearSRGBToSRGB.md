# RenderLinearSRGBToSRGB

## Overview

RenderProgram to convert linear sRGB =&gt; sRGB

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class RenderLinearSRGBToSRGB {: #RenderLinearSRGBToSRGB }


```js
import { RenderLinearSRGBToSRGB } from 'scenerystack/alpenglow';
```
### Constructor

#### new RenderLinearSRGBToSRGB( program : <span style="font-weight: 400; opacity: 80%;">RenderProgram</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### getName() : <span style="font-weight: 400; opacity: 80%;">string</span> {: #getName data-toc-label='getName' }

#### withChildren( children : <span style="font-weight: 400; opacity: 80%;">RenderProgram[]</span> ) : <span style="font-weight: 400; opacity: 80%;">RenderLinearSRGBToSRGB</span> {: #withChildren data-toc-label='withChildren' }

#### writeInstructions( instructions : <span style="font-weight: 400; opacity: 80%;">RenderInstruction[]</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #writeInstructions data-toc-label='writeInstructions' }



## Class RenderInstructionLinearSRGBToSRGB {: #RenderInstructionLinearSRGBToSRGB }


```js
import { RenderInstructionLinearSRGBToSRGB } from 'scenerystack/alpenglow';
```
### Instance Methods

#### toString() : <span style="font-weight: 400; opacity: 80%;">string</span> {: #RenderInstructionLinearSRGBToSRGB-toString data-toc-label='RenderInstructionLinearSRGBToSRGB-toString' }

#### equals( other : <span style="font-weight: 400; opacity: 80%;">RenderInstruction</span>, areLocationsEqual : <span style="font-weight: 400; opacity: 80%;">( a: RenderInstructionLocation, b: RenderInstructionLocation ) =&gt; boolean</span> ) : <span style="font-weight: 400; opacity: 80%;">boolean</span> {: #RenderInstructionLinearSRGBToSRGB-equals data-toc-label='RenderInstructionLinearSRGBToSRGB-equals' }

#### execute( stack : <span style="font-weight: 400; opacity: 80%;">RenderExecutionStack</span>, context : <span style="font-weight: 400; opacity: 80%;">RenderEvaluationContext</span>, executor : <span style="font-weight: 400; opacity: 80%;">RenderExecutor</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #RenderInstructionLinearSRGBToSRGB-execute data-toc-label='RenderInstructionLinearSRGBToSRGB-execute' }

#### writeBinary( encoder : <span style="font-weight: 400; opacity: 80%;">ByteEncoder</span>, getOffset : <span style="font-weight: 400; opacity: 80%;">( location: RenderInstructionLocation ) =&gt; number</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #RenderInstructionLinearSRGBToSRGB-writeBinary data-toc-label='RenderInstructionLinearSRGBToSRGB-writeBinary' }

#### getBinaryLength() : <span style="font-weight: 400; opacity: 80%;">number</span> {: #RenderInstructionLinearSRGBToSRGB-getBinaryLength data-toc-label='RenderInstructionLinearSRGBToSRGB-getBinaryLength' }

### Static Properties

#### INSTANCE : <span style="font-weight: 400; opacity: 80%;">RenderInstructionLinearSRGBToSRGB</span> {: #RenderInstructionLinearSRGBToSRGB-INSTANCE data-toc-label='RenderInstructionLinearSRGBToSRGB-INSTANCE' }

(readonly)



## Source Code

See the source for [RenderLinearSRGBToSRGB.ts](https://github.com/phetsims/alpenglow/blob/main/js/render-program/RenderLinearSRGBToSRGB.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
