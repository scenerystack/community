# RenderColorSpaceConversion

## Overview

RenderProgram to convert between color spaces. Should not change whether something is transparent or opaque

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class RenderColorSpaceConversion {: #RenderColorSpaceConversion }


```js
import { RenderColorSpaceConversion } from 'scenerystack/alpenglow';
```
### Constructor

#### new RenderColorSpaceConversion( program : <span style="font-weight: 400;">[RenderProgram](../alpenglow/RenderProgram.md)</span>, convert : <span style="font-weight: 400;">( color: [Vector4](../dot/Vector4.md) ) =&gt; [Vector4](../dot/Vector4.md)</span> ) {: #RenderColorSpaceConversion-constructor data-toc-label='new RenderColorSpaceConversion' }

### Instance Methods

#### getSimplified( children : <span style="font-weight: 400;">[RenderProgram](../alpenglow/RenderProgram.md)[]</span> ) : <span style="font-weight: 400;">[RenderProgram](../alpenglow/RenderProgram.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> {: #getSimplified data-toc-label='getSimplified' }

(protected)

#### evaluate( context : <span style="font-weight: 400;">[RenderEvaluationContext](../alpenglow/RenderEvaluationContext.md)</span> ) : <span style="font-weight: 400;">[Vector4](../dot/Vector4.md)</span> {: #evaluate data-toc-label='evaluate' }

#### serialize() : <span style="font-weight: 400;">[SerializedRenderColorSpaceConversion](../alpenglow/RenderColorSpaceConversion.md#SerializedRenderColorSpaceConversion)</span> {: #serialize data-toc-label='serialize' }

### Instance Properties

#### inverse : <span style="font-weight: 400;">[Constructor](../phet-core/Constructor.md)&lt;[RenderColorSpaceConversion](../alpenglow/RenderColorSpaceConversion.md)&gt;</span> {: #inverse data-toc-label='inverse' }



## Type SerializedRenderColorSpaceConversion {: #SerializedRenderColorSpaceConversion }


```js
import type { SerializedRenderColorSpaceConversion } from 'scenerystack/alpenglow';
```


- **type**: "[RenderColorSpaceConversion](../alpenglow/RenderColorSpaceConversion.md)"
- **subtype**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>
- **program**: [SerializedRenderProgram](../alpenglow/RenderProgram.md#SerializedRenderProgram)




## Source Code

See the source for [RenderColorSpaceConversion.ts](https://github.com/phetsims/alpenglow/blob/main/js/render-program/RenderColorSpaceConversion.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
