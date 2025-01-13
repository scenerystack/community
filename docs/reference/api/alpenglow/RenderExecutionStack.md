# RenderExecutionStack

## Overview

A stack of values (effectively vec4s) that are used by RenderInstructions to evaluate a RenderProgram.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class RenderExecutionStack {: #RenderExecutionStack }


```js
import { RenderExecutionStack } from 'scenerystack/alpenglow';
```
### Instance Methods

#### reset() : <span style="font-weight: 400; opacity: 80%;">void</span> {: #reset data-toc-label='reset' }

#### getLength() : <span style="font-weight: 400; opacity: 80%;">number</span> {: #getLength data-toc-label='getLength' }

#### getCurrentIndex() : <span style="font-weight: 400; opacity: 80%;">number</span> {: #getCurrentIndex data-toc-label='getCurrentIndex' }

#### getLastIndex() : <span style="font-weight: 400; opacity: 80%;">number</span> {: #getLastIndex data-toc-label='getLastIndex' }

#### push( vector : <span style="font-weight: 400; opacity: 80%;">Vector4</span> ) : <span style="font-weight: 400; opacity: 80%;">Vector4</span> {: #push data-toc-label='push' }

#### pushValues( x : <span style="font-weight: 400; opacity: 80%;">number</span>, y : <span style="font-weight: 400; opacity: 80%;">number</span>, z : <span style="font-weight: 400; opacity: 80%;">number</span>, w : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #pushValues data-toc-label='pushValues' }

#### pushNumber( n : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #pushNumber data-toc-label='pushNumber' }

We're padding for now (for simplicity)

#### popInto( vector : <span style="font-weight: 400; opacity: 80%;">Vector4</span> ) : <span style="font-weight: 400; opacity: 80%;">Vector4</span> {: #popInto data-toc-label='popInto' }

#### popNumber() : <span style="font-weight: 400; opacity: 80%;">number</span> {: #popNumber data-toc-label='popNumber' }

Just returns the X component

#### writeTop( vector : <span style="font-weight: 400; opacity: 80%;">Vector4</span> ) : <span style="font-weight: 400; opacity: 80%;">Vector4</span> {: #writeTop data-toc-label='writeTop' }

#### writeTopValues( x : <span style="font-weight: 400; opacity: 80%;">number</span>, y : <span style="font-weight: 400; opacity: 80%;">number</span>, z : <span style="font-weight: 400; opacity: 80%;">number</span>, w : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #writeTopValues data-toc-label='writeTopValues' }

#### readTop( vector : <span style="font-weight: 400; opacity: 80%;">Vector4</span> ) : <span style="font-weight: 400; opacity: 80%;">Vector4</span> {: #readTop data-toc-label='readTop' }

### Instance Properties

#### data : <span style="font-weight: 400; opacity: 80%;">ExecutionData</span> {: #data data-toc-label='data' }



## Source Code

See the source for [RenderExecutionStack.ts](https://github.com/phetsims/alpenglow/blob/main/js/render-program/RenderExecutionStack.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
