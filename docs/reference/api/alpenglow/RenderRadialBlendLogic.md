# RenderRadialBlendLogic

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/alpenglow/blob/main/js/render-program/RenderRadialBlendLogic.ts](https://github.com/phetsims/alpenglow/blob/main/js/render-program/RenderRadialBlendLogic.ts) for the most up-to-date information.

## Overview

Logic for a radial blend

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class RenderRadialBlendLogic {: #RenderRadialBlendLogic }


```js
import { RenderRadialBlendLogic } from 'scenerystack/alpenglow';
```
### Constructor

#### new RenderRadialBlendLogic( transform : <span style="font-weight: 400;">[Matrix3](../dot/Matrix3.md)</span>, radius0 : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, radius1 : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, accuracy : <span style="font-weight: 400;">[RenderRadialBlendAccuracy](../alpenglow/RenderRadialBlendAccuracy.md)</span> ) {: #RenderRadialBlendLogic-constructor data-toc-label='new RenderRadialBlendLogic' }

### Instance Methods

#### equals( other : <span style="font-weight: 400;">[RenderRadialBlendLogic](../alpenglow/RenderRadialBlendLogic.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #equals data-toc-label='equals' }

#### computeLinearValue( context : <span style="font-weight: 400;">[RenderEvaluationContext](../alpenglow/RenderEvaluationContext.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #computeLinearValue data-toc-label='computeLinearValue' }

#### isLinear() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #isLinear data-toc-label='isLinear' }

### Instance Properties

#### inverseTransform : <span style="font-weight: 400;">[Matrix3](../dot/Matrix3.md)</span> {: #inverseTransform data-toc-label='inverseTransform' }

(readonly)



## Source Code

See the source for [RenderRadialBlendLogic.ts](https://github.com/phetsims/alpenglow/blob/main/js/render-program/RenderRadialBlendLogic.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
