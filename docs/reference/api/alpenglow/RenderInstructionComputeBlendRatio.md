# RenderInstructionComputeBlendRatio

## Overview

Computes the blend ratio between two RenderPrograms based on a linear or radial blend.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class RenderInstructionComputeBlendRatio {: #RenderInstructionComputeBlendRatio }


```js
import { RenderInstructionComputeBlendRatio } from 'scenerystack/alpenglow';
```
### Constructor

#### new RenderInstructionComputeBlendRatio( logic : <span style="font-weight: 400;">[RenderLinearBlendLogic](../alpenglow/RenderLinearBlendLogic.md) | [RenderRadialBlendLogic](../alpenglow/RenderRadialBlendLogic.md)</span>, zeroLocation : <span style="font-weight: 400;">[RenderInstructionLocation](../alpenglow/RenderInstruction.md#RenderInstructionLocation)</span>, oneLocation : <span style="font-weight: 400;">[RenderInstructionLocation](../alpenglow/RenderInstruction.md#RenderInstructionLocation)</span>, blendLocation : <span style="font-weight: 400;">[RenderInstructionLocation](../alpenglow/RenderInstruction.md#RenderInstructionLocation)</span> ) {: #RenderInstructionComputeBlendRatio-constructor data-toc-label='new RenderInstructionComputeBlendRatio' }

### Instance Methods

#### toString() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> {: #toString data-toc-label='toString' }

#### equals( other : <span style="font-weight: 400;">[RenderInstruction](../alpenglow/RenderInstruction.md)</span>, areLocationsEqual : <span style="font-weight: 400;">( a: [RenderInstructionLocation](../alpenglow/RenderInstruction.md#RenderInstructionLocation), b: [RenderInstructionLocation](../alpenglow/RenderInstruction.md#RenderInstructionLocation) ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #equals data-toc-label='equals' }

#### execute( stack : <span style="font-weight: 400;">[RenderExecutionStack](../alpenglow/RenderExecutionStack.md)</span>, context : <span style="font-weight: 400;">[RenderEvaluationContext](../alpenglow/RenderEvaluationContext.md)</span>, executor : <span style="font-weight: 400;">[RenderExecutor](../alpenglow/RenderExecutor.md)</span> ) {: #execute data-toc-label='execute' }

#### writeBinary( encoder : <span style="font-weight: 400;">[ByteEncoder](../alpenglow/ByteEncoder.md)</span>, getOffset : <span style="font-weight: 400;">( location: [RenderInstructionLocation](../alpenglow/RenderInstruction.md#RenderInstructionLocation) ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) {: #writeBinary data-toc-label='writeBinary' }

#### getBinaryLength() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #getBinaryLength data-toc-label='getBinaryLength' }



## Source Code

See the source for [RenderInstructionComputeBlendRatio.ts](https://github.com/phetsims/alpenglow/blob/main/js/render-program/RenderInstructionComputeBlendRatio.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
