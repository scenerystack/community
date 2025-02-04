# RenderGradientStop

## Overview

A gradient stop for linear/radial gradients

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class RenderGradientStop {: #RenderGradientStop }


```js
import { RenderGradientStop } from 'scenerystack/alpenglow';
```
### Constructor

#### new RenderGradientStop( ratio : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, program : <span style="font-weight: 400;">[RenderProgram](../alpenglow/RenderProgram.md)</span> ) {: #RenderGradientStop-constructor data-toc-label='new RenderGradientStop' }

### Instance Methods

#### withProgram( program : <span style="font-weight: 400;">[RenderProgram](../alpenglow/RenderProgram.md)</span> ) : <span style="font-weight: 400;">[RenderGradientStop](../alpenglow/RenderGradientStop.md)</span> {: #withProgram data-toc-label='withProgram' }

#### serialize() : <span style="font-weight: 400;">[SerializedRenderGradientStop](../alpenglow/RenderGradientStop.md#SerializedRenderGradientStop)</span> {: #serialize data-toc-label='serialize' }

### Static Methods

#### evaluate( context : <span style="font-weight: 400;">[RenderEvaluationContext](../alpenglow/RenderEvaluationContext.md)</span>, stops : <span style="font-weight: 400;">[RenderGradientStop](../alpenglow/RenderGradientStop.md)[]</span>, t : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Vector4](../dot/Vector4.md)</span> {: #evaluate data-toc-label='evaluate' }



## Type SerializedRenderGradientStop {: #SerializedRenderGradientStop }


```js
import type { SerializedRenderGradientStop } from 'scenerystack/alpenglow';
```


- **ratio**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **program**: [SerializedRenderProgram](../alpenglow/RenderProgram.md#SerializedRenderProgram)




## Source Code

See the source for [RenderGradientStop.ts](https://github.com/phetsims/alpenglow/blob/main/js/render-program/RenderGradientStop.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
