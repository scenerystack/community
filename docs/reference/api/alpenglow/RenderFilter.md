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

#### new RenderFilter( program : <span style="font-weight: 400;">[RenderProgram](../alpenglow/RenderProgram.md)</span>, colorMatrix : <span style="font-weight: 400;">[Matrix4](../dot/Matrix4.md)</span>, colorTranslation : <span style="font-weight: 400;">[Vector4](../dot/Vector4.md)</span>, logic? : <span style="font-weight: 400;">[RenderFilterLogic](../alpenglow/RenderFilter.md#RenderFilterLogic)</span> ) {: #RenderFilter-constructor data-toc-label='new RenderFilter' }

### Instance Methods

#### getName() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> {: #getName data-toc-label='getName' }

#### withChildren( children : <span style="font-weight: 400;">[RenderProgram](../alpenglow/RenderProgram.md)[]</span> ) : <span style="font-weight: 400;">[RenderFilter](../alpenglow/RenderFilter.md)</span> {: #withChildren data-toc-label='withChildren' }

#### equalsTyped( other : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #equalsTyped data-toc-label='equalsTyped' }

(protected)

#### getSimplified( children : <span style="font-weight: 400;">[RenderProgram](../alpenglow/RenderProgram.md)[]</span> ) : <span style="font-weight: 400;">[RenderProgram](../alpenglow/RenderProgram.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> {: #getSimplified data-toc-label='getSimplified' }

(protected)

#### evaluate( context : <span style="font-weight: 400;">[RenderEvaluationContext](../alpenglow/RenderEvaluationContext.md)</span> ) : <span style="font-weight: 400;">[Vector4](../dot/Vector4.md)</span> {: #evaluate data-toc-label='evaluate' }

#### writeInstructions( instructions : <span style="font-weight: 400;">[RenderInstruction](../alpenglow/RenderInstruction.md)[]</span> ) {: #writeInstructions data-toc-label='writeInstructions' }

#### serialize() : <span style="font-weight: 400;">[SerializedRenderFilter](../alpenglow/RenderFilter.md#SerializedRenderFilter)</span> {: #serialize data-toc-label='serialize' }

### Instance Properties

#### logic : <span style="font-weight: 400;">[RenderFilterLogic](../alpenglow/RenderFilter.md#RenderFilterLogic)</span> {: #logic data-toc-label='logic' }

(readonly)

### Static Methods

#### applyFilter( color : <span style="font-weight: 400;">[Vector4](../dot/Vector4.md)</span>, colorMatrix : <span style="font-weight: 400;">[Matrix4](../dot/Matrix4.md)</span>, colorTranslation : <span style="font-weight: 400;">[Vector4](../dot/Vector4.md)</span> ) : <span style="font-weight: 400;">[Vector4](../dot/Vector4.md)</span> {: #applyFilter data-toc-label='applyFilter' }

#### deserialize( obj : <span style="font-weight: 400;">[SerializedRenderFilter](../alpenglow/RenderFilter.md#SerializedRenderFilter)</span> ) : <span style="font-weight: 400;">[RenderFilter](../alpenglow/RenderFilter.md)</span> {: #deserialize data-toc-label='deserialize' }



## Class RenderFilterLogic {: #RenderFilterLogic }


```js
import { RenderFilterLogic } from 'scenerystack/alpenglow';
```
### Constructor

#### new RenderFilterLogic( colorMatrix : <span style="font-weight: 400;">[Matrix4](../dot/Matrix4.md)</span>, colorTranslation : <span style="font-weight: 400;">[Vector4](../dot/Vector4.md)</span> ) {: #RenderFilterLogic-RenderFilterLogic-constructor data-toc-label='new RenderFilterLogic-RenderFilterLogic' }

### Instance Methods

#### equals( other : <span style="font-weight: 400;">[RenderFilterLogic](../alpenglow/RenderFilter.md#RenderFilterLogic)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #RenderFilterLogic-equals data-toc-label='RenderFilterLogic-equals' }



## Class RenderInstructionFilter {: #RenderInstructionFilter }


```js
import { RenderInstructionFilter } from 'scenerystack/alpenglow';
```
### Constructor

#### new RenderInstructionFilter( logic : <span style="font-weight: 400;">[RenderFilterLogic](../alpenglow/RenderFilter.md#RenderFilterLogic)</span> ) {: #RenderInstructionFilter-RenderInstructionFilter-constructor data-toc-label='new RenderInstructionFilter-RenderInstructionFilter' }

### Instance Methods

#### toString() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> {: #RenderInstructionFilter-toString data-toc-label='RenderInstructionFilter-toString' }

#### equals( other : <span style="font-weight: 400;">[RenderInstruction](../alpenglow/RenderInstruction.md)</span>, areLocationsEqual : <span style="font-weight: 400;">( a: [RenderInstructionLocation](../alpenglow/RenderInstruction.md#RenderInstructionLocation), b: [RenderInstructionLocation](../alpenglow/RenderInstruction.md#RenderInstructionLocation) ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #RenderInstructionFilter-equals data-toc-label='RenderInstructionFilter-equals' }

#### execute( stack : <span style="font-weight: 400;">[RenderExecutionStack](../alpenglow/RenderExecutionStack.md)</span>, context : <span style="font-weight: 400;">[RenderEvaluationContext](../alpenglow/RenderEvaluationContext.md)</span>, executor : <span style="font-weight: 400;">[RenderExecutor](../alpenglow/RenderExecutor.md)</span> ) {: #RenderInstructionFilter-execute data-toc-label='RenderInstructionFilter-execute' }

#### writeBinary( encoder : <span style="font-weight: 400;">[ByteEncoder](../alpenglow/ByteEncoder.md)</span>, getOffset : <span style="font-weight: 400;">( location: [RenderInstructionLocation](../alpenglow/RenderInstruction.md#RenderInstructionLocation) ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) {: #RenderInstructionFilter-writeBinary data-toc-label='RenderInstructionFilter-writeBinary' }

#### getBinaryLength() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #RenderInstructionFilter-getBinaryLength data-toc-label='RenderInstructionFilter-getBinaryLength' }

### Static Methods

#### fromBinary( encoder : <span style="font-weight: 400;">[ByteEncoder](../alpenglow/ByteEncoder.md)</span>, offset : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, getLocation : <span style="font-weight: 400;">( offset: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> ) =&gt; [RenderInstructionLocation](../alpenglow/RenderInstruction.md#RenderInstructionLocation)</span> ) : <span style="font-weight: 400;">[RenderInstructionFilter](../alpenglow/RenderFilter.md#RenderInstructionFilter)</span> {: #RenderInstructionFilter-fromBinary data-toc-label='RenderInstructionFilter-fromBinary' }



## Type SerializedRenderFilter {: #SerializedRenderFilter }


```js
import type { SerializedRenderFilter } from 'scenerystack/alpenglow';
```


- **type**: "[RenderFilter](../alpenglow/RenderFilter.md)"
- **program**: [SerializedRenderProgram](../alpenglow/RenderProgram.md#SerializedRenderProgram)
- **colorMatrix**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>[]
- **colorTranslation**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>[]




## Source Code

See the source for [RenderFilter.ts](https://github.com/phetsims/alpenglow/blob/main/js/render-program/RenderFilter.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
