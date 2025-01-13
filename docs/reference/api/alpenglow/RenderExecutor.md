# RenderExecutor

## Overview

Executes stack-based evaluation of a RenderProgram

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class RenderExecutor {: #RenderExecutor }


```js
import { RenderExecutor } from 'scenerystack/alpenglow';
```
### Constructor

#### new RenderExecutor() {: #constructor data-toc-label='constructor' }

### Instance Methods

#### loadRenderProgram( renderProgram : <span style="font-weight: 400;">[RenderProgram](../alpenglow/RenderProgram.md)</span> ) {: #loadRenderProgram data-toc-label='loadRenderProgram' }

#### loadInstructions( instructions : <span style="font-weight: 400;">[RenderInstruction](../alpenglow/RenderInstruction.md)[]</span> ) {: #loadInstructions data-toc-label='loadInstructions' }

#### reset() {: #reset data-toc-label='reset' }

#### execute( context : <span style="font-weight: 400;">[RenderEvaluationContext](../alpenglow/RenderEvaluationContext.md)</span>, output : <span style="font-weight: 400;">[Vector4](../dot/Vector4.md)</span> ) : <span style="font-weight: 400;">[Vector4](../dot/Vector4.md)</span> {: #execute data-toc-label='execute' }

#### jump( location : <span style="font-weight: 400;">[RenderInstructionLocation](../alpenglow/RenderInstruction.md#RenderInstructionLocation)</span> ) {: #jump data-toc-label='jump' }

#### call( location : <span style="font-weight: 400;">[RenderInstructionLocation](../alpenglow/RenderInstruction.md#RenderInstructionLocation)</span> ) {: #call data-toc-label='call' }

#### return() {: #return data-toc-label='return' }

#### exit() {: #exit data-toc-label='exit' }

### Instance Properties

#### evaluator : <span style="font-weight: 400;">[RenderEvaluator](../alpenglow/RenderProgram.md#RenderEvaluator)</span> {: #evaluator data-toc-label='evaluator' }

(readonly)



## Source Code

See the source for [RenderExecutor.ts](https://github.com/phetsims/alpenglow/blob/main/js/render-program/RenderExecutor.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
