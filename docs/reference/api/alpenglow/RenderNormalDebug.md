# RenderNormalDebug

## Overview

RenderProgram for showing normals colored for debugging

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class RenderNormalDebug {: #RenderNormalDebug }


```js
import { RenderNormalDebug } from 'scenerystack/alpenglow';
```
### Constructor

#### new RenderNormalDebug( normalProgram : <span style="font-weight: 400; opacity: 80%;">RenderProgram</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### getName() : <span style="font-weight: 400; opacity: 80%;">string</span> {: #getName data-toc-label='getName' }

#### withChildren( children : <span style="font-weight: 400; opacity: 80%;">RenderProgram[]</span> ) : <span style="font-weight: 400; opacity: 80%;">RenderNormalDebug</span> {: #withChildren data-toc-label='withChildren' }

#### equalsTyped( other : <span style="font-weight: 400; opacity: 80%;">this</span> ) : <span style="font-weight: 400; opacity: 80%;">boolean</span> {: #equalsTyped data-toc-label='equalsTyped' }

(protected)

#### getSimplified( children : <span style="font-weight: 400; opacity: 80%;">RenderProgram[]</span> ) : <span style="font-weight: 400; opacity: 80%;">RenderProgram | null</span> {: #getSimplified data-toc-label='getSimplified' }

(protected)

#### getNormalDebug( normal : <span style="font-weight: 400; opacity: 80%;">Vector4</span> ) : <span style="font-weight: 400; opacity: 80%;">Vector4</span> {: #getNormalDebug data-toc-label='getNormalDebug' }

#### evaluate( context : <span style="font-weight: 400; opacity: 80%;">RenderEvaluationContext</span> ) : <span style="font-weight: 400; opacity: 80%;">Vector4</span> {: #evaluate data-toc-label='evaluate' }

#### writeInstructions( instructions : <span style="font-weight: 400; opacity: 80%;">RenderInstruction[]</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #writeInstructions data-toc-label='writeInstructions' }

#### serialize() : <span style="font-weight: 400; opacity: 80%;">SerializedRenderNormalDebug</span> {: #serialize data-toc-label='serialize' }

### Static Methods

#### deserialize( obj : <span style="font-weight: 400; opacity: 80%;">SerializedRenderNormalDebug</span> ) : <span style="font-weight: 400; opacity: 80%;">RenderNormalDebug</span> {: #deserialize data-toc-label='deserialize' }



## Class RenderInstructionNormalDebug {: #RenderInstructionNormalDebug }


```js
import { RenderInstructionNormalDebug } from 'scenerystack/alpenglow';
```
### Instance Methods

#### toString() : <span style="font-weight: 400; opacity: 80%;">string</span> {: #RenderInstructionNormalDebug-toString data-toc-label='RenderInstructionNormalDebug-toString' }

#### equals( other : <span style="font-weight: 400; opacity: 80%;">RenderInstruction</span>, areLocationsEqual : <span style="font-weight: 400; opacity: 80%;">( a: RenderInstructionLocation, b: RenderInstructionLocation ) =&gt; boolean</span> ) : <span style="font-weight: 400; opacity: 80%;">boolean</span> {: #RenderInstructionNormalDebug-equals data-toc-label='RenderInstructionNormalDebug-equals' }

#### execute( stack : <span style="font-weight: 400; opacity: 80%;">RenderExecutionStack</span>, context : <span style="font-weight: 400; opacity: 80%;">RenderEvaluationContext</span>, executor : <span style="font-weight: 400; opacity: 80%;">RenderExecutor</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #RenderInstructionNormalDebug-execute data-toc-label='RenderInstructionNormalDebug-execute' }

#### writeBinary( encoder : <span style="font-weight: 400; opacity: 80%;">ByteEncoder</span>, getOffset : <span style="font-weight: 400; opacity: 80%;">( location: RenderInstructionLocation ) =&gt; number</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #RenderInstructionNormalDebug-writeBinary data-toc-label='RenderInstructionNormalDebug-writeBinary' }

#### getBinaryLength() : <span style="font-weight: 400; opacity: 80%;">number</span> {: #RenderInstructionNormalDebug-getBinaryLength data-toc-label='RenderInstructionNormalDebug-getBinaryLength' }

### Static Properties

#### INSTANCE : <span style="font-weight: 400; opacity: 80%;">RenderInstructionNormalDebug</span> {: #RenderInstructionNormalDebug-INSTANCE data-toc-label='RenderInstructionNormalDebug-INSTANCE' }

(readonly)



## Source Code

See the source for [RenderNormalDebug.ts](https://github.com/phetsims/alpenglow/blob/main/js/render-program/RenderNormalDebug.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
