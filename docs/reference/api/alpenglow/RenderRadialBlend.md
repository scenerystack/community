# RenderRadialBlend

## Overview

RenderProgram for a radial blend (essentially a chunk of a radial gradient with only a linear transition between
two things.

RenderRadialBlend will interpolate between two different RenderPrograms based on the location. It will evaluate
`clamp( ( averageFragmentRadius - radius0 ) / ( radius1 - radius0 ), 0, 1 )`, and will linearly blend
between the "zero" program (when the value is 0) and the "one" program (when the value is 1).

It can be used in a standalone way, however it is primarily meant to be used when a `RenderRadialGradient`
is circular, and is split into each radial-linear partition.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class RenderRadialBlend {: #RenderRadialBlend }


```js
import { RenderRadialBlend } from 'scenerystack/alpenglow';
```
### Constructor

#### new RenderRadialBlend( transform : <span style="font-weight: 400; opacity: 80%;">Matrix3</span>, radius0 : <span style="font-weight: 400; opacity: 80%;">number</span>, radius1 : <span style="font-weight: 400; opacity: 80%;">number</span>, accuracy : <span style="font-weight: 400; opacity: 80%;">RenderRadialBlendAccuracy</span>, zero : <span style="font-weight: 400; opacity: 80%;">RenderProgram</span>, one : <span style="font-weight: 400; opacity: 80%;">RenderProgram</span>, logic? : <span style="font-weight: 400; opacity: 80%;">RenderRadialBlendLogic</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### getName() : <span style="font-weight: 400; opacity: 80%;">string</span> {: #getName data-toc-label='getName' }

#### withChildren( children : <span style="font-weight: 400; opacity: 80%;">RenderProgram[]</span> ) : <span style="font-weight: 400; opacity: 80%;">RenderRadialBlend</span> {: #withChildren data-toc-label='withChildren' }

#### transformed( transform : <span style="font-weight: 400; opacity: 80%;">Matrix3</span> ) : <span style="font-weight: 400; opacity: 80%;">RenderProgram</span> {: #transformed data-toc-label='transformed' }

#### equalsTyped( other : <span style="font-weight: 400; opacity: 80%;">this</span> ) : <span style="font-weight: 400; opacity: 80%;">boolean</span> {: #equalsTyped data-toc-label='equalsTyped' }

(protected)

#### getSimplified( children : <span style="font-weight: 400; opacity: 80%;">RenderProgram[]</span> ) : <span style="font-weight: 400; opacity: 80%;">RenderProgram | null</span> {: #getSimplified data-toc-label='getSimplified' }

(protected)

#### evaluate( context : <span style="font-weight: 400; opacity: 80%;">RenderEvaluationContext</span> ) : <span style="font-weight: 400; opacity: 80%;">Vector4</span> {: #evaluate data-toc-label='evaluate' }

#### writeInstructions( instructions : <span style="font-weight: 400; opacity: 80%;">RenderInstruction[]</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #writeInstructions data-toc-label='writeInstructions' }

#### serialize() : <span style="font-weight: 400; opacity: 80%;">SerializedRenderRadialBlend</span> {: #serialize data-toc-label='serialize' }

### Instance Properties

#### logic : <span style="font-weight: 400; opacity: 80%;">RenderRadialBlendLogic</span> {: #logic data-toc-label='logic' }

(readonly)

### Static Methods

#### deserialize( obj : <span style="font-weight: 400; opacity: 80%;">SerializedRenderRadialBlend</span> ) : <span style="font-weight: 400; opacity: 80%;">RenderRadialBlend</span> {: #deserialize data-toc-label='deserialize' }



## Class RenderRadialBlendLogic {: #RenderRadialBlendLogic }


```js
import { RenderRadialBlendLogic } from 'scenerystack/alpenglow';
```
### Constructor

#### new RenderRadialBlendLogic( transform : <span style="font-weight: 400; opacity: 80%;">Matrix3</span>, radius0 : <span style="font-weight: 400; opacity: 80%;">number</span>, radius1 : <span style="font-weight: 400; opacity: 80%;">number</span>, accuracy : <span style="font-weight: 400; opacity: 80%;">RenderRadialBlendAccuracy</span> ) {: #RenderRadialBlendLogic-constructor data-toc-label='RenderRadialBlendLogic-constructor' }

### Instance Methods

#### equals( other : <span style="font-weight: 400; opacity: 80%;">RenderRadialBlendLogic</span> ) : <span style="font-weight: 400; opacity: 80%;">boolean</span> {: #RenderRadialBlendLogic-equals data-toc-label='RenderRadialBlendLogic-equals' }

#### computeLinearValue( context : <span style="font-weight: 400; opacity: 80%;">RenderEvaluationContext</span> ) : <span style="font-weight: 400; opacity: 80%;">number</span> {: #RenderRadialBlendLogic-computeLinearValue data-toc-label='RenderRadialBlendLogic-computeLinearValue' }

### Instance Properties

#### inverseTransform : <span style="font-weight: 400; opacity: 80%;">Matrix3</span> {: #RenderRadialBlendLogic-inverseTransform data-toc-label='RenderRadialBlendLogic-inverseTransform' }

(readonly)



## Source Code

See the source for [RenderRadialBlend.ts](https://github.com/phetsims/alpenglow/blob/main/js/render-program/RenderRadialBlend.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
