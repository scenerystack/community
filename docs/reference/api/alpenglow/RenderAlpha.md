# RenderAlpha

## Overview

RenderProgram for alpha (an opacity) applied to a RenderProgram

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class RenderAlpha {: #RenderAlpha }


```js
import { RenderAlpha } from 'scenerystack/alpenglow';
```
### Constructor

#### new RenderAlpha( program : <span style="font-weight: 400;">[RenderProgram](../alpenglow/RenderProgram.md)</span>, alpha : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) {: #RenderAlpha-constructor data-toc-label='new RenderAlpha' }

### Instance Methods

#### getName() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> {: #getName data-toc-label='getName' }

#### withChildren( children : <span style="font-weight: 400;">[RenderProgram](../alpenglow/RenderProgram.md)[]</span> ) : <span style="font-weight: 400;">[RenderAlpha](../alpenglow/RenderAlpha.md)</span> {: #withChildren data-toc-label='withChildren' }

#### equalsTyped( other : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #equalsTyped data-toc-label='equalsTyped' }

(protected)

#### getSimplified( children : <span style="font-weight: 400;">[RenderProgram](../alpenglow/RenderProgram.md)[]</span> ) : <span style="font-weight: 400;">[RenderProgram](../alpenglow/RenderProgram.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> {: #getSimplified data-toc-label='getSimplified' }

(protected)

#### evaluate( context : <span style="font-weight: 400;">[RenderEvaluationContext](../alpenglow/RenderEvaluationContext.md)</span> ) : <span style="font-weight: 400;">[Vector4](../dot/Vector4.md)</span> {: #evaluate data-toc-label='evaluate' }

#### writeInstructions( instructions : <span style="font-weight: 400;">[RenderInstruction](../alpenglow/RenderInstruction.md)[]</span> ) {: #writeInstructions data-toc-label='writeInstructions' }

#### getExtraDebugString() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> {: #getExtraDebugString data-toc-label='getExtraDebugString' }

(protected)

#### serialize() : <span style="font-weight: 400;">[SerializedRenderAlpha](../alpenglow/RenderAlpha.md#SerializedRenderAlpha)</span> {: #serialize data-toc-label='serialize' }

### Static Methods

#### deserialize( obj : <span style="font-weight: 400;">[SerializedRenderAlpha](../alpenglow/RenderAlpha.md#SerializedRenderAlpha)</span> ) : <span style="font-weight: 400;">[RenderAlpha](../alpenglow/RenderAlpha.md)</span> {: #deserialize data-toc-label='deserialize' }



## Type SerializedRenderAlpha {: #SerializedRenderAlpha }


```js
import type { SerializedRenderAlpha } from 'scenerystack/alpenglow';
```


- **type**: "[RenderAlpha](../alpenglow/RenderAlpha.md)"
- **program**: [SerializedRenderProgram](../alpenglow/RenderProgram.md#SerializedRenderProgram)
- **alpha**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>




## Source Code

See the source for [RenderAlpha.ts](https://github.com/phetsims/alpenglow/blob/main/js/render-program/RenderAlpha.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
