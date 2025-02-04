# RenderLinearGradientLogic

## Overview

Logic for a linear gradient

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class RenderLinearGradientLogic {: #RenderLinearGradientLogic }


```js
import { RenderLinearGradientLogic } from 'scenerystack/alpenglow';
```
### Constructor

#### new RenderLinearGradientLogic( inverseTransform : <span style="font-weight: 400;">[Matrix3](../dot/Matrix3.md)</span>, start : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span>, gradDelta : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span>, ratios : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>[]</span>, extend : <span style="font-weight: 400;">[RenderExtend](../alpenglow/RenderExtend.md)</span>, accuracy : <span style="font-weight: 400;">[RenderLinearGradientAccuracy](../alpenglow/RenderLinearGradientAccuracy.md)</span> ) {: #RenderLinearGradientLogic-constructor data-toc-label='new RenderLinearGradientLogic' }

### Instance Methods

#### equals( other : <span style="font-weight: 400;">[RenderLinearGradientLogic](../alpenglow/RenderLinearGradientLogic.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #equals data-toc-label='equals' }

#### computeLinearValue( context : <span style="font-weight: 400;">[RenderEvaluationContext](../alpenglow/RenderEvaluationContext.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #computeLinearValue data-toc-label='computeLinearValue' }

#### isLinear() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #isLinear data-toc-label='isLinear' }

### Static Methods

#### from( transform : <span style="font-weight: 400;">[Matrix3](../dot/Matrix3.md)</span>, start : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span>, end : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span>, ratios : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>[]</span>, extend : <span style="font-weight: 400;">[RenderExtend](../alpenglow/RenderExtend.md)</span>, accuracy : <span style="font-weight: 400;">[RenderLinearGradientAccuracy](../alpenglow/RenderLinearGradientAccuracy.md)</span> ) : <span style="font-weight: 400;">[RenderLinearGradientLogic](../alpenglow/RenderLinearGradientLogic.md)</span> {: #from data-toc-label='from' }



## Source Code

See the source for [RenderLinearGradientLogic.ts](https://github.com/phetsims/alpenglow/blob/main/js/render-program/RenderLinearGradientLogic.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
