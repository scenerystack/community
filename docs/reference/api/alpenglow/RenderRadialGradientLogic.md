# RenderRadialGradientLogic

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/alpenglow/blob/main/js/render-program/RenderRadialGradientLogic.ts](https://github.com/phetsims/alpenglow/blob/main/js/render-program/RenderRadialGradientLogic.ts) for the most up-to-date information.

## Overview

Logic for a radial gradient

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class RenderRadialGradientLogic {: #RenderRadialGradientLogic }


```js
import { RenderRadialGradientLogic } from 'scenerystack/alpenglow';
```
### Constructor

#### new RenderRadialGradientLogic( conicTransform : <span style="font-weight: 400;">[Matrix3](../dot/Matrix3.md)</span>, focalX : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, radius : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, kind : <span style="font-weight: 400;">[RadialGradientType](../alpenglow/RadialGradientType.md)</span>, isSwapped : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span>, ratios : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>[]</span>, extend : <span style="font-weight: 400;">[RenderExtend](../alpenglow/RenderExtend.md)</span>, accuracy : <span style="font-weight: 400;">[RenderRadialGradientAccuracy](../alpenglow/RenderRadialGradientAccuracy.md)</span> ) {: #RenderRadialGradientLogic-constructor data-toc-label='new RenderRadialGradientLogic' }

### Instance Methods

#### equals( other : <span style="font-weight: 400;">[RenderRadialGradientLogic](../alpenglow/RenderRadialGradientLogic.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #equals data-toc-label='equals' }

#### computeLinearValue( context : <span style="font-weight: 400;">[RenderEvaluationContext](../alpenglow/RenderEvaluationContext.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #computeLinearValue data-toc-label='computeLinearValue' }

#### isLinear() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #isLinear data-toc-label='isLinear' }

### Static Methods

#### from( transform : <span style="font-weight: 400;">[Matrix3](../dot/Matrix3.md)</span>, start : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span>, startRadius : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, end : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span>, endRadius : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, ratios : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>[]</span>, extend : <span style="font-weight: 400;">[RenderExtend](../alpenglow/RenderExtend.md)</span>, accuracy : <span style="font-weight: 400;">[RenderRadialGradientAccuracy](../alpenglow/RenderRadialGradientAccuracy.md)</span> ) : <span style="font-weight: 400;">[RenderRadialGradientLogic](../alpenglow/RenderRadialGradientLogic.md)</span> {: #from data-toc-label='from' }



## Source Code

See the source for [RenderRadialGradientLogic.ts](https://github.com/phetsims/alpenglow/blob/main/js/render-program/RenderRadialGradientLogic.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
