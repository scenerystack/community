# RenderInstruction

## Overview

Represents an instruction to execute part of a RenderProgram based on an execution stack

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class RenderInstruction {: #RenderInstruction }


```js
import { RenderInstruction } from 'scenerystack/alpenglow';
```
### Instance Methods

#### execute( stack : <span style="font-weight: 400; opacity: 80%;">RenderExecutionStack</span>, context : <span style="font-weight: 400; opacity: 80%;">RenderEvaluationContext</span>, executor : <span style="font-weight: 400; opacity: 80%;">RenderExecutor</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #execute data-toc-label='execute' }

#### toString() : <span style="font-weight: 400; opacity: 80%;">string</span> {: #toString data-toc-label='toString' }

#### equals( other : <span style="font-weight: 400; opacity: 80%;">RenderInstruction</span>, areLocationsEqual : <span style="font-weight: 400; opacity: 80%;">( a: RenderInstructionLocation, b: RenderInstructionLocation ) =&gt; boolean</span> ) : <span style="font-weight: 400; opacity: 80%;">boolean</span> {: #equals data-toc-label='equals' }

#### writeBinary( encoder : <span style="font-weight: 400; opacity: 80%;">ByteEncoder</span>, getOffset : <span style="font-weight: 400; opacity: 80%;">( location: RenderInstructionLocation ) =&gt; number</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #writeBinary data-toc-label='writeBinary' }

#### getBinaryLength() : <span style="font-weight: 400; opacity: 80%;">number</span> {: #getBinaryLength data-toc-label='getBinaryLength' }

The number of dwords (u32s, 4 bytes) that this instruction takes up in the binary stream.

### Static Methods

#### getInstructionLength( u32 : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">number</span> {: #getInstructionLength data-toc-label='getInstructionLength' }

Returns the length (in dwords) of the binary form of an instruction, based on the initial u32 value in the
instruction stream

#### instructionsToBinary( encoder : <span style="font-weight: 400; opacity: 80%;">ByteEncoder</span>, instructions : <span style="font-weight: 400; opacity: 80%;">RenderInstruction[]</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #instructionsToBinary data-toc-label='instructionsToBinary' }

Appends the binary form of the list of instructions to the encoder.

NOTE: The binary form will always have an exit instruction included at the end, so multiple instruction streams
can be written into the same buffer (and noted with offsets).

#### binaryToInstructions( encoder : <span style="font-weight: 400; opacity: 80%;">ByteEncoder</span>, offset : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">RenderInstruction[]</span> {: #binaryToInstructions data-toc-label='binaryToInstructions' }

Reads the binary from from the encoder (at a specific dword offset), and returns the list of instructions.

NOTE: No final "exit" is generated, since our executor for objects won't need it.

#### binaryToInstruction( encoder : <span style="font-weight: 400; opacity: 80%;">ByteEncoder</span>, offset : <span style="font-weight: 400; opacity: 80%;">number</span>, getLocation : <span style="font-weight: 400; opacity: 80%;">( offset: number ) =&gt; RenderInstructionLocation</span> ) : <span style="font-weight: 400; opacity: 80%;">RenderInstruction</span> {: #binaryToInstruction data-toc-label='binaryToInstruction' }

Extracts a single instruction from the binary format at a given (32bit dword) offset.

#### instructionsEquals( a : <span style="font-weight: 400; opacity: 80%;">RenderInstruction[]</span>, b : <span style="font-weight: 400; opacity: 80%;">RenderInstruction[]</span> ) : <span style="font-weight: 400; opacity: 80%;">boolean</span> {: #instructionsEquals data-toc-label='instructionsEquals' }

Returns whether two instruction lists are equivalent (allowing for equivalent location instructions).

It's possible to have one list where there are multiple location instructions in a row, so we'll need to
inspect locations for these cases (since they can be equivalent to a single location instruction).

### Static Properties

#### ExitCode {: #ExitCode data-toc-label='ExitCode' }

(readonly)

TODO: better code ordering, prevent duplicates
length 1
NOTE: only instructions with length 1 should fit in the mask 0xf (4 bits)
This condition will be detected

#### ReturnCode {: #ReturnCode data-toc-label='ReturnCode' }

(readonly)

#### StackBlendCode {: #StackBlendCode data-toc-label='StackBlendCode' }

(readonly)

#### LinearBlendCode {: #LinearBlendCode data-toc-label='LinearBlendCode' }

(readonly)

#### BlendComposeCode {: #BlendComposeCode data-toc-label='BlendComposeCode' }

(readonly)

#### OpaqueJumpCode {: #OpaqueJumpCode data-toc-label='OpaqueJumpCode' }

(readonly)

#### PremultiplyCode {: #PremultiplyCode data-toc-label='PremultiplyCode' }

(readonly)

#### UnpremultiplyCode {: #UnpremultiplyCode data-toc-label='UnpremultiplyCode' }

(readonly)

#### SRGBToLinearSRGBCode {: #SRGBToLinearSRGBCode data-toc-label='SRGBToLinearSRGBCode' }

(readonly)

#### LinearSRGBToSRGBCode {: #LinearSRGBToSRGBCode data-toc-label='LinearSRGBToSRGBCode' }

(readonly)

#### LinearDisplayP3ToLinearSRGBCode {: #LinearDisplayP3ToLinearSRGBCode data-toc-label='LinearDisplayP3ToLinearSRGBCode' }

(readonly)

#### LinearSRGBToLinearDisplayP3Code {: #LinearSRGBToLinearDisplayP3Code data-toc-label='LinearSRGBToLinearDisplayP3Code' }

(readonly)

#### OklabToLinearSRGBCode {: #OklabToLinearSRGBCode data-toc-label='OklabToLinearSRGBCode' }

(readonly)

#### LinearSRGBToOklabCode {: #LinearSRGBToOklabCode data-toc-label='LinearSRGBToOklabCode' }

(readonly)

#### NormalizeCode {: #NormalizeCode data-toc-label='NormalizeCode' }

(readonly)

#### NormalDebugCode {: #NormalDebugCode data-toc-label='NormalDebugCode' }

(readonly)

#### MultiplyScalarCode {: #MultiplyScalarCode data-toc-label='MultiplyScalarCode' }

(readonly)

Below here, the top bit MUST be set. This is to prevent the 0xf mask from matching these codes.
The bottom 5 bits will be used for the length (FOR NOW, this could change), and the 2 bits after will be used to
represent different instructions.
NOTE: If we have 4 more 1-length instructions, we'll need to figure out a different encoding here
NOTE: Actually, we really won't. For all of those 1-length ones, we can just PACK EVERYTHING IN THE HIGH BITS
NOTE: top 2 bits set will note variadic instructions.
So add... 0x80, 0xa0 as the two options
length 2

#### PhongCode {: #PhongCode data-toc-label='PhongCode' }

(readonly)

length 3

#### PushCode {: #PushCode data-toc-label='PushCode' }

(readonly)

length 5

#### ComputeLinearBlendRatioCode {: #ComputeLinearBlendRatioCode data-toc-label='ComputeLinearBlendRatioCode' }

(readonly)

length 7

#### BarycentricBlendCode {: #BarycentricBlendCode data-toc-label='BarycentricBlendCode' }

(readonly)

length 8

#### BarycentricPerspectiveBlendCode {: #BarycentricPerspectiveBlendCode data-toc-label='BarycentricPerspectiveBlendCode' }

(readonly)

length 11

#### ComputeRadialBlendRatioCode {: #ComputeRadialBlendRatioCode data-toc-label='ComputeRadialBlendRatioCode' }

(readonly)

length 12

#### FilterCode {: #FilterCode data-toc-label='FilterCode' }

(readonly)

length 21

#### ComputeLinearGradientRatioCode {: #ComputeLinearGradientRatioCode data-toc-label='ComputeLinearGradientRatioCode' }

(readonly)

variable length(!)

#### ComputeRadialGradientRatioCode {: #ComputeRadialGradientRatioCode data-toc-label='ComputeRadialGradientRatioCode' }

(readonly)

#### ImageCode {: #ImageCode data-toc-label='ImageCode' }

(readonly)

#### CODE_NAME_CONSTANTS {: #CODE_NAME_CONSTANTS data-toc-label='CODE_NAME_CONSTANTS' }

(readonly)

Something we can pass in shader options.



## Class RenderInstructionLocation {: #RenderInstructionLocation }


```js
import { RenderInstructionLocation } from 'scenerystack/alpenglow';
```
### Instance Methods

#### toString() : <span style="font-weight: 400; opacity: 80%;">string</span> {: #RenderInstructionLocation-toString data-toc-label='RenderInstructionLocation-toString' }

#### equals( other : <span style="font-weight: 400; opacity: 80%;">RenderInstruction</span>, areLocationsEqual : <span style="font-weight: 400; opacity: 80%;">( a: RenderInstructionLocation, b: RenderInstructionLocation ) =&gt; boolean</span> ) : <span style="font-weight: 400; opacity: 80%;">boolean</span> {: #RenderInstructionLocation-equals data-toc-label='RenderInstructionLocation-equals' }

#### execute( stack : <span style="font-weight: 400; opacity: 80%;">RenderExecutionStack</span>, context : <span style="font-weight: 400; opacity: 80%;">RenderEvaluationContext</span>, executor : <span style="font-weight: 400; opacity: 80%;">RenderExecutor</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #RenderInstructionLocation-execute data-toc-label='RenderInstructionLocation-execute' }

#### writeBinary( encoder : <span style="font-weight: 400; opacity: 80%;">ByteEncoder</span>, getOffset : <span style="font-weight: 400; opacity: 80%;">( location: RenderInstructionLocation ) =&gt; number</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #RenderInstructionLocation-writeBinary data-toc-label='RenderInstructionLocation-writeBinary' }

#### getBinaryLength() : <span style="font-weight: 400; opacity: 80%;">number</span> {: #RenderInstructionLocation-getBinaryLength data-toc-label='RenderInstructionLocation-getBinaryLength' }

### Instance Properties

#### id {: #RenderInstructionLocation-id data-toc-label='RenderInstructionLocation-id' }

#### index {: #RenderInstructionLocation-index data-toc-label='RenderInstructionLocation-index' }

To be filled in before execution (if in JS)



## Class RenderInstructionMultiplyScalar {: #RenderInstructionMultiplyScalar }


```js
import { RenderInstructionMultiplyScalar } from 'scenerystack/alpenglow';
```
### Constructor

#### new RenderInstructionMultiplyScalar( factor : <span style="font-weight: 400; opacity: 80%;">number</span> ) {: #RenderInstructionMultiplyScalar-constructor data-toc-label='RenderInstructionMultiplyScalar-constructor' }

### Instance Methods

#### toString() : <span style="font-weight: 400; opacity: 80%;">string</span> {: #RenderInstructionMultiplyScalar-toString data-toc-label='RenderInstructionMultiplyScalar-toString' }

#### equals( other : <span style="font-weight: 400; opacity: 80%;">RenderInstruction</span>, areLocationsEqual : <span style="font-weight: 400; opacity: 80%;">( a: RenderInstructionLocation, b: RenderInstructionLocation ) =&gt; boolean</span> ) : <span style="font-weight: 400; opacity: 80%;">boolean</span> {: #RenderInstructionMultiplyScalar-equals data-toc-label='RenderInstructionMultiplyScalar-equals' }

#### execute( stack : <span style="font-weight: 400; opacity: 80%;">RenderExecutionStack</span>, context : <span style="font-weight: 400; opacity: 80%;">RenderEvaluationContext</span>, executor : <span style="font-weight: 400; opacity: 80%;">RenderExecutor</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #RenderInstructionMultiplyScalar-execute data-toc-label='RenderInstructionMultiplyScalar-execute' }

#### writeBinary( encoder : <span style="font-weight: 400; opacity: 80%;">ByteEncoder</span>, getOffset : <span style="font-weight: 400; opacity: 80%;">( location: RenderInstructionLocation ) =&gt; number</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #RenderInstructionMultiplyScalar-writeBinary data-toc-label='RenderInstructionMultiplyScalar-writeBinary' }

#### getBinaryLength() : <span style="font-weight: 400; opacity: 80%;">number</span> {: #RenderInstructionMultiplyScalar-getBinaryLength data-toc-label='RenderInstructionMultiplyScalar-getBinaryLength' }

### Static Methods

#### fromBinary( encoder : <span style="font-weight: 400; opacity: 80%;">ByteEncoder</span>, offset : <span style="font-weight: 400; opacity: 80%;">number</span>, getLocation : <span style="font-weight: 400; opacity: 80%;">( offset: number ) =&gt; RenderInstructionLocation</span> ) : <span style="font-weight: 400; opacity: 80%;">RenderInstructionMultiplyScalar</span> {: #RenderInstructionMultiplyScalar-fromBinary data-toc-label='RenderInstructionMultiplyScalar-fromBinary' }



## Class RenderInstructionPush {: #RenderInstructionPush }


```js
import { RenderInstructionPush } from 'scenerystack/alpenglow';
```
### Constructor

#### new RenderInstructionPush( vector : <span style="font-weight: 400; opacity: 80%;">Vector4</span> ) {: #RenderInstructionPush-constructor data-toc-label='RenderInstructionPush-constructor' }

### Instance Methods

#### toString() : <span style="font-weight: 400; opacity: 80%;">string</span> {: #RenderInstructionPush-toString data-toc-label='RenderInstructionPush-toString' }

#### equals( other : <span style="font-weight: 400; opacity: 80%;">RenderInstruction</span>, areLocationsEqual : <span style="font-weight: 400; opacity: 80%;">( a: RenderInstructionLocation, b: RenderInstructionLocation ) =&gt; boolean</span> ) : <span style="font-weight: 400; opacity: 80%;">boolean</span> {: #RenderInstructionPush-equals data-toc-label='RenderInstructionPush-equals' }

#### execute( stack : <span style="font-weight: 400; opacity: 80%;">RenderExecutionStack</span>, context : <span style="font-weight: 400; opacity: 80%;">RenderEvaluationContext</span>, executor : <span style="font-weight: 400; opacity: 80%;">RenderExecutor</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #RenderInstructionPush-execute data-toc-label='RenderInstructionPush-execute' }

#### writeBinary( encoder : <span style="font-weight: 400; opacity: 80%;">ByteEncoder</span>, getOffset : <span style="font-weight: 400; opacity: 80%;">( location: RenderInstructionLocation ) =&gt; number</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #RenderInstructionPush-writeBinary data-toc-label='RenderInstructionPush-writeBinary' }

#### getBinaryLength() : <span style="font-weight: 400; opacity: 80%;">number</span> {: #RenderInstructionPush-getBinaryLength data-toc-label='RenderInstructionPush-getBinaryLength' }

### Static Methods

#### fromBinary( encoder : <span style="font-weight: 400; opacity: 80%;">ByteEncoder</span>, offset : <span style="font-weight: 400; opacity: 80%;">number</span>, getLocation : <span style="font-weight: 400; opacity: 80%;">( offset: number ) =&gt; RenderInstructionLocation</span> ) : <span style="font-weight: 400; opacity: 80%;">RenderInstructionPush</span> {: #RenderInstructionPush-fromBinary data-toc-label='RenderInstructionPush-fromBinary' }



## Class RenderInstructionReturn {: #RenderInstructionReturn }


```js
import { RenderInstructionReturn } from 'scenerystack/alpenglow';
```
### Instance Methods

#### toString() : <span style="font-weight: 400; opacity: 80%;">string</span> {: #RenderInstructionReturn-toString data-toc-label='RenderInstructionReturn-toString' }

#### equals( other : <span style="font-weight: 400; opacity: 80%;">RenderInstruction</span>, areLocationsEqual : <span style="font-weight: 400; opacity: 80%;">( a: RenderInstructionLocation, b: RenderInstructionLocation ) =&gt; boolean</span> ) : <span style="font-weight: 400; opacity: 80%;">boolean</span> {: #RenderInstructionReturn-equals data-toc-label='RenderInstructionReturn-equals' }

#### execute( stack : <span style="font-weight: 400; opacity: 80%;">RenderExecutionStack</span>, context : <span style="font-weight: 400; opacity: 80%;">RenderEvaluationContext</span>, executor : <span style="font-weight: 400; opacity: 80%;">RenderExecutor</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #RenderInstructionReturn-execute data-toc-label='RenderInstructionReturn-execute' }

#### writeBinary( encoder : <span style="font-weight: 400; opacity: 80%;">ByteEncoder</span>, getOffset : <span style="font-weight: 400; opacity: 80%;">( location: RenderInstructionLocation ) =&gt; number</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #RenderInstructionReturn-writeBinary data-toc-label='RenderInstructionReturn-writeBinary' }

#### getBinaryLength() : <span style="font-weight: 400; opacity: 80%;">number</span> {: #RenderInstructionReturn-getBinaryLength data-toc-label='RenderInstructionReturn-getBinaryLength' }

### Static Properties

#### INSTANCE : <span style="font-weight: 400; opacity: 80%;">RenderInstructionReturn</span> {: #RenderInstructionReturn-INSTANCE data-toc-label='RenderInstructionReturn-INSTANCE' }

(readonly)



## Source Code

See the source for [RenderInstruction.ts](https://github.com/phetsims/alpenglow/blob/main/js/render-program/RenderInstruction.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
