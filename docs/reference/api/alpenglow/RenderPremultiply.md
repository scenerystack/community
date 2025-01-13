# RenderPremultiply

## Overview

RenderProgram to premultiply the input color

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class RenderPremultiply {: #RenderPremultiply }


```js
import { RenderPremultiply } from 'scenerystack/alpenglow';
```
### Constructor

#### new RenderPremultiply( program : <span style="font-weight: 400; opacity: 80%;">RenderProgram</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### getName() : <span style="font-weight: 400; opacity: 80%;">string</span> {: #getName data-toc-label='getName' }

#### withChildren( children : <span style="font-weight: 400; opacity: 80%;">RenderProgram[]</span> ) : <span style="font-weight: 400; opacity: 80%;">RenderPremultiply</span> {: #withChildren data-toc-label='withChildren' }

#### writeInstructions( instructions : <span style="font-weight: 400; opacity: 80%;">RenderInstruction[]</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #writeInstructions data-toc-label='writeInstructions' }



## Class RenderInstructionPremultiply {: #RenderInstructionPremultiply }


```js
import { RenderInstructionPremultiply } from 'scenerystack/alpenglow';
```
### Instance Methods

#### toString() : <span style="font-weight: 400; opacity: 80%;">string</span> {: #RenderInstructionPremultiply-toString data-toc-label='RenderInstructionPremultiply-toString' }

#### equals( other : <span style="font-weight: 400; opacity: 80%;">RenderInstruction</span>, areLocationsEqual : <span style="font-weight: 400; opacity: 80%;">( a: RenderInstructionLocation, b: RenderInstructionLocation ) =&gt; boolean</span> ) : <span style="font-weight: 400; opacity: 80%;">boolean</span> {: #RenderInstructionPremultiply-equals data-toc-label='RenderInstructionPremultiply-equals' }

#### execute( stack : <span style="font-weight: 400; opacity: 80%;">RenderExecutionStack</span>, context : <span style="font-weight: 400; opacity: 80%;">RenderEvaluationContext</span>, executor : <span style="font-weight: 400; opacity: 80%;">RenderExecutor</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #RenderInstructionPremultiply-execute data-toc-label='RenderInstructionPremultiply-execute' }

#### writeBinary( encoder : <span style="font-weight: 400; opacity: 80%;">ByteEncoder</span>, getOffset : <span style="font-weight: 400; opacity: 80%;">( location: RenderInstructionLocation ) =&gt; number</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #RenderInstructionPremultiply-writeBinary data-toc-label='RenderInstructionPremultiply-writeBinary' }

#### getBinaryLength() : <span style="font-weight: 400; opacity: 80%;">number</span> {: #RenderInstructionPremultiply-getBinaryLength data-toc-label='RenderInstructionPremultiply-getBinaryLength' }

### Static Properties

#### INSTANCE : <span style="font-weight: 400; opacity: 80%;">RenderInstructionPremultiply</span> {: #RenderInstructionPremultiply-INSTANCE data-toc-label='RenderInstructionPremultiply-INSTANCE' }

(readonly)



## Source Code

See the source for [RenderPremultiply.ts](https://github.com/phetsims/alpenglow/blob/main/js/render-program/RenderPremultiply.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
