# RenderGradientStop

## Overview

A gradient stop for linear/radial gradients

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class RenderGradientStop {: #RenderGradientStop }


```js
import { RenderGradientStop } from 'scenerystack/alpenglow';
```
### Constructor

#### new RenderGradientStop( ratio : <span style="font-weight: 400; opacity: 80%;">number</span>, program : <span style="font-weight: 400; opacity: 80%;">RenderProgram</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### withProgram( program : <span style="font-weight: 400; opacity: 80%;">RenderProgram</span> ) : <span style="font-weight: 400; opacity: 80%;">RenderGradientStop</span> {: #withProgram data-toc-label='withProgram' }

#### serialize() : <span style="font-weight: 400; opacity: 80%;">SerializedRenderGradientStop</span> {: #serialize data-toc-label='serialize' }

### Static Methods

#### evaluate( context : <span style="font-weight: 400; opacity: 80%;">RenderEvaluationContext</span>, stops : <span style="font-weight: 400; opacity: 80%;">RenderGradientStop[]</span>, t : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">Vector4</span> {: #evaluate data-toc-label='evaluate' }

#### deserialize( obj : <span style="font-weight: 400; opacity: 80%;">SerializedRenderGradientStop</span> ) : <span style="font-weight: 400; opacity: 80%;">RenderGradientStop</span> {: #deserialize data-toc-label='deserialize' }



## Source Code

See the source for [RenderGradientStop.ts](https://github.com/phetsims/alpenglow/blob/main/js/render-program/RenderGradientStop.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
