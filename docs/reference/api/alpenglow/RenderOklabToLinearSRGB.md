# RenderOklabToLinearSRGB

## Overview

RenderProgram to convert Oklab =&gt; linear sRGB

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class RenderOklabToLinearSRGB {: #RenderOklabToLinearSRGB }


```js
import { RenderOklabToLinearSRGB } from 'scenerystack/alpenglow';
```
### Constructor

#### new RenderOklabToLinearSRGB( program : <span style="font-weight: 400; opacity: 80%;">RenderProgram</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### getName() : <span style="font-weight: 400; opacity: 80%;">string</span> {: #getName data-toc-label='getName' }

#### withChildren( children : <span style="font-weight: 400; opacity: 80%;">RenderProgram[]</span> ) : <span style="font-weight: 400; opacity: 80%;">RenderOklabToLinearSRGB</span> {: #withChildren data-toc-label='withChildren' }

#### writeInstructions( instructions : <span style="font-weight: 400; opacity: 80%;">RenderInstruction[]</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #writeInstructions data-toc-label='writeInstructions' }



## Class RenderInstructionOklabToLinearSRGB {: #RenderInstructionOklabToLinearSRGB }


```js
import { RenderInstructionOklabToLinearSRGB } from 'scenerystack/alpenglow';
```
### Instance Methods

#### toString() : <span style="font-weight: 400; opacity: 80%;">string</span> {: #RenderInstructionOklabToLinearSRGB-toString data-toc-label='RenderInstructionOklabToLinearSRGB-toString' }

#### equals( other : <span style="font-weight: 400; opacity: 80%;">RenderInstruction</span>, areLocationsEqual : <span style="font-weight: 400; opacity: 80%;">( a: RenderInstructionLocation, b: RenderInstructionLocation ) =&gt; boolean</span> ) : <span style="font-weight: 400; opacity: 80%;">boolean</span> {: #RenderInstructionOklabToLinearSRGB-equals data-toc-label='RenderInstructionOklabToLinearSRGB-equals' }

#### execute( stack : <span style="font-weight: 400; opacity: 80%;">RenderExecutionStack</span>, context : <span style="font-weight: 400; opacity: 80%;">RenderEvaluationContext</span>, executor : <span style="font-weight: 400; opacity: 80%;">RenderExecutor</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #RenderInstructionOklabToLinearSRGB-execute data-toc-label='RenderInstructionOklabToLinearSRGB-execute' }

#### writeBinary( encoder : <span style="font-weight: 400; opacity: 80%;">ByteEncoder</span>, getOffset : <span style="font-weight: 400; opacity: 80%;">( location: RenderInstructionLocation ) =&gt; number</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #RenderInstructionOklabToLinearSRGB-writeBinary data-toc-label='RenderInstructionOklabToLinearSRGB-writeBinary' }

#### getBinaryLength() : <span style="font-weight: 400; opacity: 80%;">number</span> {: #RenderInstructionOklabToLinearSRGB-getBinaryLength data-toc-label='RenderInstructionOklabToLinearSRGB-getBinaryLength' }

### Static Properties

#### INSTANCE : <span style="font-weight: 400; opacity: 80%;">RenderInstructionOklabToLinearSRGB</span> {: #RenderInstructionOklabToLinearSRGB-INSTANCE data-toc-label='RenderInstructionOklabToLinearSRGB-INSTANCE' }

(readonly)



## Source Code

See the source for [RenderOklabToLinearSRGB.ts](https://github.com/phetsims/alpenglow/blob/main/js/render-program/RenderOklabToLinearSRGB.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
