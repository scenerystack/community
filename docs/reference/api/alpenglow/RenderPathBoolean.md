# RenderPathBoolean

## Overview

RenderPathBoolean will display one RenderProgram "inside" the path, and another RenderProgram "outside" the path.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class RenderPathBoolean {: #RenderPathBoolean }


```js
import { RenderPathBoolean } from 'scenerystack/alpenglow';
```
### Constructor

#### new RenderPathBoolean( path : <span style="font-weight: 400; opacity: 80%;">RenderPath</span>, inside : <span style="font-weight: 400; opacity: 80%;">RenderProgram</span>, outside : <span style="font-weight: 400; opacity: 80%;">RenderProgram</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### getName() : <span style="font-weight: 400; opacity: 80%;">string</span> {: #getName data-toc-label='getName' }

#### withChildren( children : <span style="font-weight: 400; opacity: 80%;">RenderProgram[]</span> ) : <span style="font-weight: 400; opacity: 80%;">RenderPathBoolean</span> {: #withChildren data-toc-label='withChildren' }

#### transformed( transform : <span style="font-weight: 400; opacity: 80%;">Matrix3</span> ) : <span style="font-weight: 400; opacity: 80%;">RenderProgram</span> {: #transformed data-toc-label='transformed' }

#### equalsTyped( other : <span style="font-weight: 400; opacity: 80%;">this</span> ) : <span style="font-weight: 400; opacity: 80%;">boolean</span> {: #equalsTyped data-toc-label='equalsTyped' }

(protected)

#### isOneSided() : <span style="font-weight: 400; opacity: 80%;">boolean</span> {: #isOneSided data-toc-label='isOneSided' }

#### getOneSide() : <span style="font-weight: 400; opacity: 80%;">RenderProgram</span> {: #getOneSide data-toc-label='getOneSide' }

#### withOneSide( program : <span style="font-weight: 400; opacity: 80%;">RenderProgram</span> ) : <span style="font-weight: 400; opacity: 80%;">RenderProgram</span> {: #withOneSide data-toc-label='withOneSide' }

#### getSimplified( children : <span style="font-weight: 400; opacity: 80%;">RenderProgram[]</span> ) : <span style="font-weight: 400; opacity: 80%;">RenderProgram | null</span> {: #getSimplified data-toc-label='getSimplified' }

(protected)

#### evaluate( context : <span style="font-weight: 400; opacity: 80%;">RenderEvaluationContext</span> ) : <span style="font-weight: 400; opacity: 80%;">Vector4</span> {: #evaluate data-toc-label='evaluate' }

#### getExtraDebugString() : <span style="font-weight: 400; opacity: 80%;">string</span> {: #getExtraDebugString data-toc-label='getExtraDebugString' }

(protected)

#### serialize() : <span style="font-weight: 400; opacity: 80%;">SerializedRenderPathBoolean</span> {: #serialize data-toc-label='serialize' }

### Static Methods

#### deserialize( obj : <span style="font-weight: 400; opacity: 80%;">SerializedRenderPathBoolean</span> ) : <span style="font-weight: 400; opacity: 80%;">RenderPathBoolean</span> {: #deserialize data-toc-label='deserialize' }

#### fromInside( path : <span style="font-weight: 400; opacity: 80%;">RenderPath</span>, inside : <span style="font-weight: 400; opacity: 80%;">RenderProgram</span> ) : <span style="font-weight: 400; opacity: 80%;">RenderPathBoolean</span> {: #fromInside data-toc-label='fromInside' }



## Source Code

See the source for [RenderPathBoolean.ts](https://github.com/phetsims/alpenglow/blob/main/js/render-program/RenderPathBoolean.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
