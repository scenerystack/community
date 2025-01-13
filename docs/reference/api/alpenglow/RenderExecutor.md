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

#### loadRenderProgram( renderProgram : <span style="font-weight: 400; opacity: 80%;">RenderProgram</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #loadRenderProgram data-toc-label='loadRenderProgram' }

#### loadInstructions( instructions : <span style="font-weight: 400; opacity: 80%;">RenderInstruction[]</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #loadInstructions data-toc-label='loadInstructions' }

#### reset() : <span style="font-weight: 400; opacity: 80%;">void</span> {: #reset data-toc-label='reset' }

#### execute( context : <span style="font-weight: 400; opacity: 80%;">RenderEvaluationContext</span>, output : <span style="font-weight: 400; opacity: 80%;">Vector4</span> ) : <span style="font-weight: 400; opacity: 80%;">Vector4</span> {: #execute data-toc-label='execute' }

#### jump( location : <span style="font-weight: 400; opacity: 80%;">RenderInstructionLocation</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #jump data-toc-label='jump' }

#### call( location : <span style="font-weight: 400; opacity: 80%;">RenderInstructionLocation</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #call data-toc-label='call' }

#### return() : <span style="font-weight: 400; opacity: 80%;">void</span> {: #return data-toc-label='return' }

#### exit() : <span style="font-weight: 400; opacity: 80%;">void</span> {: #exit data-toc-label='exit' }

### Instance Properties

#### evaluator : <span style="font-weight: 400; opacity: 80%;">RenderEvaluator</span> {: #evaluator data-toc-label='evaluator' }

(readonly)



## Source Code

See the source for [RenderExecutor.ts](https://github.com/phetsims/alpenglow/blob/main/js/render-program/RenderExecutor.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
