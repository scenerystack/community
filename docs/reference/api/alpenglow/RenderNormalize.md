# RenderNormalize

## Overview

RenderProgram for normalizing the result of another RenderProgram

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class RenderNormalize {: #RenderNormalize }


```js
import { RenderNormalize } from 'scenerystack/alpenglow';
```
### Constructor

#### new RenderNormalize( program : <span style="font-weight: 400; opacity: 80%;">RenderProgram</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### getName() : <span style="font-weight: 400; opacity: 80%;">string</span> {: #getName data-toc-label='getName' }

#### withChildren( children : <span style="font-weight: 400; opacity: 80%;">RenderProgram[]</span> ) : <span style="font-weight: 400; opacity: 80%;">RenderNormalize</span> {: #withChildren data-toc-label='withChildren' }

#### getSimplified( children : <span style="font-weight: 400; opacity: 80%;">RenderProgram[]</span> ) : <span style="font-weight: 400; opacity: 80%;">RenderProgram | null</span> {: #getSimplified data-toc-label='getSimplified' }

(protected)

#### evaluate( context : <span style="font-weight: 400; opacity: 80%;">RenderEvaluationContext</span> ) : <span style="font-weight: 400; opacity: 80%;">Vector4</span> {: #evaluate data-toc-label='evaluate' }

#### writeInstructions( instructions : <span style="font-weight: 400; opacity: 80%;">RenderInstruction[]</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #writeInstructions data-toc-label='writeInstructions' }

#### serialize() : <span style="font-weight: 400; opacity: 80%;">SerializedRenderNormalize</span> {: #serialize data-toc-label='serialize' }

### Static Methods

#### deserialize( obj : <span style="font-weight: 400; opacity: 80%;">SerializedRenderNormalize</span> ) : <span style="font-weight: 400; opacity: 80%;">RenderNormalize</span> {: #deserialize data-toc-label='deserialize' }



## Class RenderInstructionNormalize {: #RenderInstructionNormalize }


```js
import { RenderInstructionNormalize } from 'scenerystack/alpenglow';
```
### Instance Methods

#### toString() : <span style="font-weight: 400; opacity: 80%;">string</span> {: #RenderInstructionNormalize-toString data-toc-label='RenderInstructionNormalize-toString' }

#### equals( other : <span style="font-weight: 400; opacity: 80%;">RenderInstruction</span>, areLocationsEqual : <span style="font-weight: 400; opacity: 80%;">( a: RenderInstructionLocation, b: RenderInstructionLocation ) =&gt; boolean</span> ) : <span style="font-weight: 400; opacity: 80%;">boolean</span> {: #RenderInstructionNormalize-equals data-toc-label='RenderInstructionNormalize-equals' }

#### execute( stack : <span style="font-weight: 400; opacity: 80%;">RenderExecutionStack</span>, context : <span style="font-weight: 400; opacity: 80%;">RenderEvaluationContext</span>, executor : <span style="font-weight: 400; opacity: 80%;">RenderExecutor</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #RenderInstructionNormalize-execute data-toc-label='RenderInstructionNormalize-execute' }

#### writeBinary( encoder : <span style="font-weight: 400; opacity: 80%;">ByteEncoder</span>, getOffset : <span style="font-weight: 400; opacity: 80%;">( location: RenderInstructionLocation ) =&gt; number</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #RenderInstructionNormalize-writeBinary data-toc-label='RenderInstructionNormalize-writeBinary' }

#### getBinaryLength() : <span style="font-weight: 400; opacity: 80%;">number</span> {: #RenderInstructionNormalize-getBinaryLength data-toc-label='RenderInstructionNormalize-getBinaryLength' }

### Static Properties

#### INSTANCE : <span style="font-weight: 400; opacity: 80%;">RenderInstructionNormalize</span> {: #RenderInstructionNormalize-INSTANCE data-toc-label='RenderInstructionNormalize-INSTANCE' }

(readonly)



## Source Code

See the source for [RenderNormalize.ts](https://github.com/phetsims/alpenglow/blob/main/js/render-program/RenderNormalize.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
