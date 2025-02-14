# RenderExecutionStack

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/alpenglow/blob/main/js/render-program/RenderExecutionStack.ts](https://github.com/phetsims/alpenglow/blob/main/js/render-program/RenderExecutionStack.ts) for the most up-to-date information.

## Overview

A stack of values (effectively vec4s) that are used by RenderInstructions to evaluate a RenderProgram.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class RenderExecutionStack {: #RenderExecutionStack }


```js
import { RenderExecutionStack } from 'scenerystack/alpenglow';
```
### Instance Methods

#### reset() {: #reset data-toc-label='reset' }

#### getLength() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #getLength data-toc-label='getLength' }

#### getCurrentIndex() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #getCurrentIndex data-toc-label='getCurrentIndex' }

#### getLastIndex() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #getLastIndex data-toc-label='getLastIndex' }

#### push( vector : <span style="font-weight: 400;">[Vector4](../dot/Vector4.md)</span> ) : <span style="font-weight: 400;">[Vector4](../dot/Vector4.md)</span> {: #push data-toc-label='push' }

#### pushValues( x : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, y : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, z : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, w : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) {: #pushValues data-toc-label='pushValues' }

#### pushNumber( n : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) {: #pushNumber data-toc-label='pushNumber' }

We're padding for now (for simplicity)

#### popInto( vector : <span style="font-weight: 400;">[Vector4](../dot/Vector4.md)</span> ) : <span style="font-weight: 400;">[Vector4](../dot/Vector4.md)</span> {: #popInto data-toc-label='popInto' }

#### popNumber() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #popNumber data-toc-label='popNumber' }

Just returns the X component

#### writeTop( vector : <span style="font-weight: 400;">[Vector4](../dot/Vector4.md)</span> ) : <span style="font-weight: 400;">[Vector4](../dot/Vector4.md)</span> {: #writeTop data-toc-label='writeTop' }

#### writeTopValues( x : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, y : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, z : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, w : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) {: #writeTopValues data-toc-label='writeTopValues' }

#### readTop( vector : <span style="font-weight: 400;">[Vector4](../dot/Vector4.md)</span> ) : <span style="font-weight: 400;">[Vector4](../dot/Vector4.md)</span> {: #readTop data-toc-label='readTop' }

### Instance Properties

#### data : <span style="font-weight: 400;">ExecutionData</span> {: #data data-toc-label='data' }



## Source Code

See the source for [RenderExecutionStack.ts](https://github.com/phetsims/alpenglow/blob/main/js/render-program/RenderExecutionStack.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
