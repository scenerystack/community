# RenderPathBoolean

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/alpenglow/blob/main/js/render-program/RenderPathBoolean.ts](https://github.com/phetsims/alpenglow/blob/main/js/render-program/RenderPathBoolean.ts) for the most up-to-date information.

## Overview

RenderPathBoolean will display one RenderProgram "inside" the path, and another RenderProgram "outside" the path.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class RenderPathBoolean {: #RenderPathBoolean }


```js
import { RenderPathBoolean } from 'scenerystack/alpenglow';
```
### Constructor

#### new RenderPathBoolean( path : <span style="font-weight: 400;">[RenderPath](../alpenglow/RenderPath.md)</span>, inside : <span style="font-weight: 400;">[RenderProgram](../alpenglow/RenderProgram.md)</span>, outside : <span style="font-weight: 400;">[RenderProgram](../alpenglow/RenderProgram.md)</span> ) {: #RenderPathBoolean-constructor data-toc-label='new RenderPathBoolean' }

### Instance Methods

#### getName() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> {: #getName data-toc-label='getName' }

#### withChildren( children : <span style="font-weight: 400;">[RenderProgram](../alpenglow/RenderProgram.md)[]</span> ) : <span style="font-weight: 400;">[RenderPathBoolean](../alpenglow/RenderPathBoolean.md)</span> {: #withChildren data-toc-label='withChildren' }

#### transformed( transform : <span style="font-weight: 400;">[Matrix3](../dot/Matrix3.md)</span> ) : <span style="font-weight: 400;">[RenderProgram](../alpenglow/RenderProgram.md)</span> {: #transformed data-toc-label='transformed' }

#### equalsTyped( other : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #equalsTyped data-toc-label='equalsTyped' }

(protected)

#### isOneSided() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #isOneSided data-toc-label='isOneSided' }

#### getOneSide() : <span style="font-weight: 400;">[RenderProgram](../alpenglow/RenderProgram.md)</span> {: #getOneSide data-toc-label='getOneSide' }

#### withOneSide( program : <span style="font-weight: 400;">[RenderProgram](../alpenglow/RenderProgram.md)</span> ) : <span style="font-weight: 400;">[RenderProgram](../alpenglow/RenderProgram.md)</span> {: #withOneSide data-toc-label='withOneSide' }

#### getSimplified( children : <span style="font-weight: 400;">[RenderProgram](../alpenglow/RenderProgram.md)[]</span> ) : <span style="font-weight: 400;">[RenderProgram](../alpenglow/RenderProgram.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> {: #getSimplified data-toc-label='getSimplified' }

(protected)

#### evaluate( context : <span style="font-weight: 400;">[RenderEvaluationContext](../alpenglow/RenderEvaluationContext.md)</span> ) : <span style="font-weight: 400;">[Vector4](../dot/Vector4.md)</span> {: #evaluate data-toc-label='evaluate' }

#### getExtraDebugString() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> {: #getExtraDebugString data-toc-label='getExtraDebugString' }

(protected)

#### serialize() : <span style="font-weight: 400;">[SerializedRenderPathBoolean](../alpenglow/RenderPathBoolean.md#SerializedRenderPathBoolean)</span> {: #serialize data-toc-label='serialize' }

### Static Methods

#### fromInside( path : <span style="font-weight: 400;">[RenderPath](../alpenglow/RenderPath.md)</span>, inside : <span style="font-weight: 400;">[RenderProgram](../alpenglow/RenderProgram.md)</span> ) : <span style="font-weight: 400;">[RenderPathBoolean](../alpenglow/RenderPathBoolean.md)</span> {: #fromInside data-toc-label='fromInside' }



## Type SerializedRenderPathBoolean {: #SerializedRenderPathBoolean }


```js
import type { SerializedRenderPathBoolean } from 'scenerystack/alpenglow';
```


- **type**: "[RenderPathBoolean](../alpenglow/RenderPathBoolean.md)"
- **path**: [SerializedRenderPath](../alpenglow/RenderPath.md#SerializedRenderPath)
- **inside**: [SerializedRenderProgram](../alpenglow/RenderProgram.md#SerializedRenderProgram)
- **outside**: [SerializedRenderProgram](../alpenglow/RenderProgram.md#SerializedRenderProgram)




## Source Code

See the source for [RenderPathBoolean.ts](https://github.com/phetsims/alpenglow/blob/main/js/render-program/RenderPathBoolean.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
