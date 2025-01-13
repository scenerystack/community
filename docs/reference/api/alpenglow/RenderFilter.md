# RenderFilter

## Overview

RenderProgram for applying a color-matrix filter

NOTE: This operates on unpremultiplied colors. Presumably for most operations, you'll want to wrap it in
the corresponding conversions.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class RenderFilter {: #RenderFilter }


```js
import { RenderFilter } from 'scenerystack/alpenglow';
```
### Constructor

#### new RenderFilter( program : <span style="font-weight: 400; opacity: 80%;">RenderProgram</span>, colorMatrix : <span style="font-weight: 400; opacity: 80%;">Matrix4</span>, colorTranslation : <span style="font-weight: 400; opacity: 80%;">Vector4</span>, logic? : <span style="font-weight: 400; opacity: 80%;">RenderFilterLogic</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### getName() : <span style="font-weight: 400; opacity: 80%;">string</span> {: #getName data-toc-label='getName' }

#### withChildren( children : <span style="font-weight: 400; opacity: 80%;">RenderProgram[]</span> ) : <span style="font-weight: 400; opacity: 80%;">RenderFilter</span> {: #withChildren data-toc-label='withChildren' }

#### equalsTyped( other : <span style="font-weight: 400; opacity: 80%;">this</span> ) : <span style="font-weight: 400; opacity: 80%;">boolean</span> {: #equalsTyped data-toc-label='equalsTyped' }

(protected)

#### getSimplified( children : <span style="font-weight: 400; opacity: 80%;">RenderProgram[]</span> ) : <span style="font-weight: 400; opacity: 80%;">RenderProgram | null</span> {: #getSimplified data-toc-label='getSimplified' }

(protected)

#### evaluate( context : <span style="font-weight: 400; opacity: 80%;">RenderEvaluationContext</span> ) : <span style="font-weight: 400; opacity: 80%;">Vector4</span> {: #evaluate data-toc-label='evaluate' }

#### writeInstructions( instructions : <span style="font-weight: 400; opacity: 80%;">RenderInstruction[]</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #writeInstructions data-toc-label='writeInstructions' }

#### serialize() : <span style="font-weight: 400; opacity: 80%;">SerializedRenderFilter</span> {: #serialize data-toc-label='serialize' }

### Instance Properties

#### logic : <span style="font-weight: 400; opacity: 80%;">RenderFilterLogic</span> {: #logic data-toc-label='logic' }

(readonly)

### Static Methods

#### applyFilter( color : <span style="font-weight: 400; opacity: 80%;">Vector4</span>, colorMatrix : <span style="font-weight: 400; opacity: 80%;">Matrix4</span>, colorTranslation : <span style="font-weight: 400; opacity: 80%;">Vector4</span> ) : <span style="font-weight: 400; opacity: 80%;">Vector4</span> {: #applyFilter data-toc-label='applyFilter' }

#### deserialize( obj : <span style="font-weight: 400; opacity: 80%;">SerializedRenderFilter</span> ) : <span style="font-weight: 400; opacity: 80%;">RenderFilter</span> {: #deserialize data-toc-label='deserialize' }



## Class RenderFilterLogic {: #RenderFilterLogic }


```js
import { RenderFilterLogic } from 'scenerystack/alpenglow';
```
### Constructor

#### new RenderFilterLogic( colorMatrix : <span style="font-weight: 400; opacity: 80%;">Matrix4</span>, colorTranslation : <span style="font-weight: 400; opacity: 80%;">Vector4</span> ) {: #RenderFilterLogic-constructor data-toc-label='RenderFilterLogic-constructor' }

### Instance Methods

#### equals( other : <span style="font-weight: 400; opacity: 80%;">RenderFilterLogic</span> ) : <span style="font-weight: 400; opacity: 80%;">boolean</span> {: #RenderFilterLogic-equals data-toc-label='RenderFilterLogic-equals' }



## Class RenderInstructionFilter {: #RenderInstructionFilter }


```js
import { RenderInstructionFilter } from 'scenerystack/alpenglow';
```
### Constructor

#### new RenderInstructionFilter( logic : <span style="font-weight: 400; opacity: 80%;">RenderFilterLogic</span> ) {: #RenderInstructionFilter-constructor data-toc-label='RenderInstructionFilter-constructor' }

### Instance Methods

#### toString() : <span style="font-weight: 400; opacity: 80%;">string</span> {: #RenderInstructionFilter-toString data-toc-label='RenderInstructionFilter-toString' }

#### equals( other : <span style="font-weight: 400; opacity: 80%;">RenderInstruction</span>, areLocationsEqual : <span style="font-weight: 400; opacity: 80%;">( a: RenderInstructionLocation, b: RenderInstructionLocation ) =&gt; boolean</span> ) : <span style="font-weight: 400; opacity: 80%;">boolean</span> {: #RenderInstructionFilter-equals data-toc-label='RenderInstructionFilter-equals' }

#### execute( stack : <span style="font-weight: 400; opacity: 80%;">RenderExecutionStack</span>, context : <span style="font-weight: 400; opacity: 80%;">RenderEvaluationContext</span>, executor : <span style="font-weight: 400; opacity: 80%;">RenderExecutor</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #RenderInstructionFilter-execute data-toc-label='RenderInstructionFilter-execute' }

#### writeBinary( encoder : <span style="font-weight: 400; opacity: 80%;">ByteEncoder</span>, getOffset : <span style="font-weight: 400; opacity: 80%;">( location: RenderInstructionLocation ) =&gt; number</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #RenderInstructionFilter-writeBinary data-toc-label='RenderInstructionFilter-writeBinary' }

#### getBinaryLength() : <span style="font-weight: 400; opacity: 80%;">number</span> {: #RenderInstructionFilter-getBinaryLength data-toc-label='RenderInstructionFilter-getBinaryLength' }

### Static Methods

#### fromBinary( encoder : <span style="font-weight: 400; opacity: 80%;">ByteEncoder</span>, offset : <span style="font-weight: 400; opacity: 80%;">number</span>, getLocation : <span style="font-weight: 400; opacity: 80%;">( offset: number ) =&gt; RenderInstructionLocation</span> ) : <span style="font-weight: 400; opacity: 80%;">RenderInstructionFilter</span> {: #RenderInstructionFilter-fromBinary data-toc-label='RenderInstructionFilter-fromBinary' }



## Source Code

See the source for [RenderFilter.ts](https://github.com/phetsims/alpenglow/blob/main/js/render-program/RenderFilter.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
