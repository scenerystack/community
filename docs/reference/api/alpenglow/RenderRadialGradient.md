# RenderRadialGradient

## Overview

RenderProgram for a classic radial gradient.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class RenderRadialGradient {: #RenderRadialGradient }


```js
import { RenderRadialGradient } from 'scenerystack/alpenglow';
```
### Constructor

#### new RenderRadialGradient( transform : <span style="font-weight: 400; opacity: 80%;">Matrix3</span>, start : <span style="font-weight: 400; opacity: 80%;">Vector2</span>, startRadius : <span style="font-weight: 400; opacity: 80%;">number</span>, end : <span style="font-weight: 400; opacity: 80%;">Vector2</span>, endRadius : <span style="font-weight: 400; opacity: 80%;">number</span>, stops : <span style="font-weight: 400; opacity: 80%;">RenderGradientStop[]</span>, extend : <span style="font-weight: 400; opacity: 80%;">RenderExtend</span>, accuracy : <span style="font-weight: 400; opacity: 80%;">RenderRadialGradientAccuracy</span>, logic? : <span style="font-weight: 400; opacity: 80%;">RenderRadialGradientLogic</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### getName() : <span style="font-weight: 400; opacity: 80%;">string</span> {: #getName data-toc-label='getName' }

#### withChildren( children : <span style="font-weight: 400; opacity: 80%;">RenderProgram[]</span> ) : <span style="font-weight: 400; opacity: 80%;">RenderRadialGradient</span> {: #withChildren data-toc-label='withChildren' }

#### isSplittable() : <span style="font-weight: 400; opacity: 80%;">boolean</span> {: #isSplittable data-toc-label='isSplittable' }

#### transformed( transform : <span style="font-weight: 400; opacity: 80%;">Matrix3</span> ) : <span style="font-weight: 400; opacity: 80%;">RenderProgram</span> {: #transformed data-toc-label='transformed' }

#### equalsTyped( other : <span style="font-weight: 400; opacity: 80%;">this</span> ) : <span style="font-weight: 400; opacity: 80%;">boolean</span> {: #equalsTyped data-toc-label='equalsTyped' }

(protected)

#### getSimplified( children : <span style="font-weight: 400; opacity: 80%;">RenderProgram[]</span> ) : <span style="font-weight: 400; opacity: 80%;">RenderProgram | null</span> {: #getSimplified data-toc-label='getSimplified' }

(protected)

#### getLogic() : <span style="font-weight: 400; opacity: 80%;">RenderRadialGradientLogic</span> {: #getLogic data-toc-label='getLogic' }

#### evaluate( context : <span style="font-weight: 400; opacity: 80%;">RenderEvaluationContext</span> ) : <span style="font-weight: 400; opacity: 80%;">Vector4</span> {: #evaluate data-toc-label='evaluate' }

#### writeInstructions( instructions : <span style="font-weight: 400; opacity: 80%;">RenderInstruction[]</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #writeInstructions data-toc-label='writeInstructions' }

#### split( face : <span style="font-weight: 400; opacity: 80%;">RenderableFace</span> ) : <span style="font-weight: 400; opacity: 80%;">RenderableFace[]</span> {: #split data-toc-label='split' }

#### serialize() : <span style="font-weight: 400; opacity: 80%;">SerializedRenderRadialGradient</span> {: #serialize data-toc-label='serialize' }

### Static Methods

#### deserialize( obj : <span style="font-weight: 400; opacity: 80%;">SerializedRenderRadialGradient</span> ) : <span style="font-weight: 400; opacity: 80%;">RenderRadialGradient</span> {: #deserialize data-toc-label='deserialize' }



## Class RenderRadialGradientLogic {: #RenderRadialGradientLogic }


```js
import { RenderRadialGradientLogic } from 'scenerystack/alpenglow';
```
### Constructor

#### new RenderRadialGradientLogic( conicTransform : <span style="font-weight: 400; opacity: 80%;">Matrix3</span>, focalX : <span style="font-weight: 400; opacity: 80%;">number</span>, radius : <span style="font-weight: 400; opacity: 80%;">number</span>, kind : <span style="font-weight: 400; opacity: 80%;">RadialGradientType</span>, isSwapped : <span style="font-weight: 400; opacity: 80%;">boolean</span>, ratios : <span style="font-weight: 400; opacity: 80%;">number[]</span>, extend : <span style="font-weight: 400; opacity: 80%;">RenderExtend</span>, accuracy : <span style="font-weight: 400; opacity: 80%;">RenderRadialGradientAccuracy</span> ) {: #RenderRadialGradientLogic-constructor data-toc-label='RenderRadialGradientLogic-constructor' }

### Instance Methods

#### equals( other : <span style="font-weight: 400; opacity: 80%;">RenderRadialGradientLogic</span> ) : <span style="font-weight: 400; opacity: 80%;">boolean</span> {: #RenderRadialGradientLogic-equals data-toc-label='RenderRadialGradientLogic-equals' }

#### computeLinearValue( context : <span style="font-weight: 400; opacity: 80%;">RenderEvaluationContext</span> ) : <span style="font-weight: 400; opacity: 80%;">number</span> {: #RenderRadialGradientLogic-computeLinearValue data-toc-label='RenderRadialGradientLogic-computeLinearValue' }

### Static Methods

#### from( transform : <span style="font-weight: 400; opacity: 80%;">Matrix3</span>, start : <span style="font-weight: 400; opacity: 80%;">Vector2</span>, startRadius : <span style="font-weight: 400; opacity: 80%;">number</span>, end : <span style="font-weight: 400; opacity: 80%;">Vector2</span>, endRadius : <span style="font-weight: 400; opacity: 80%;">number</span>, ratios : <span style="font-weight: 400; opacity: 80%;">number[]</span>, extend : <span style="font-weight: 400; opacity: 80%;">RenderExtend</span>, accuracy : <span style="font-weight: 400; opacity: 80%;">RenderRadialGradientAccuracy</span> ) : <span style="font-weight: 400; opacity: 80%;">RenderRadialGradientLogic</span> {: #RenderRadialGradientLogic-from data-toc-label='RenderRadialGradientLogic-from' }



## Source Code

See the source for [RenderRadialGradient.ts](https://github.com/phetsims/alpenglow/blob/main/js/render-program/RenderRadialGradient.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
