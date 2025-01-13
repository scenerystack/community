# RenderAlpha

## Overview

RenderProgram for alpha (an opacity) applied to a RenderProgram

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class RenderAlpha {: #RenderAlpha }


```js
import { RenderAlpha } from 'scenerystack/alpenglow';
```
### Constructor

#### new RenderAlpha( program : <span style="font-weight: 400; opacity: 80%;">RenderProgram</span>, alpha : <span style="font-weight: 400; opacity: 80%;">number</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### getName() : <span style="font-weight: 400; opacity: 80%;">string</span> {: #getName data-toc-label='getName' }

#### withChildren( children : <span style="font-weight: 400; opacity: 80%;">RenderProgram[]</span> ) : <span style="font-weight: 400; opacity: 80%;">RenderAlpha</span> {: #withChildren data-toc-label='withChildren' }

#### equalsTyped( other : <span style="font-weight: 400; opacity: 80%;">this</span> ) : <span style="font-weight: 400; opacity: 80%;">boolean</span> {: #equalsTyped data-toc-label='equalsTyped' }

(protected)

#### getSimplified( children : <span style="font-weight: 400; opacity: 80%;">RenderProgram[]</span> ) : <span style="font-weight: 400; opacity: 80%;">RenderProgram | null</span> {: #getSimplified data-toc-label='getSimplified' }

(protected)

#### evaluate( context : <span style="font-weight: 400; opacity: 80%;">RenderEvaluationContext</span> ) : <span style="font-weight: 400; opacity: 80%;">Vector4</span> {: #evaluate data-toc-label='evaluate' }

#### writeInstructions( instructions : <span style="font-weight: 400; opacity: 80%;">RenderInstruction[]</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #writeInstructions data-toc-label='writeInstructions' }

#### getExtraDebugString() : <span style="font-weight: 400; opacity: 80%;">string</span> {: #getExtraDebugString data-toc-label='getExtraDebugString' }

(protected)

#### serialize() : <span style="font-weight: 400; opacity: 80%;">SerializedRenderAlpha</span> {: #serialize data-toc-label='serialize' }

### Static Methods

#### deserialize( obj : <span style="font-weight: 400; opacity: 80%;">SerializedRenderAlpha</span> ) : <span style="font-weight: 400; opacity: 80%;">RenderAlpha</span> {: #deserialize data-toc-label='deserialize' }



## Source Code

See the source for [RenderAlpha.ts](https://github.com/phetsims/alpenglow/blob/main/js/render-program/RenderAlpha.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
