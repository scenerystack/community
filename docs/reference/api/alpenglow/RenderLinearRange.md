# RenderLinearRange

## Overview

Represents a section of a gradient's "color stop" space.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class RenderLinearRange {: #RenderLinearRange }


```js
import { RenderLinearRange } from 'scenerystack/alpenglow';
```
### Constructor

#### new RenderLinearRange( start : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, end : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, startProgram : <span style="font-weight: 400;">[RenderProgram](../alpenglow/RenderProgram.md)</span>, endProgram : <span style="font-weight: 400;">[RenderProgram](../alpenglow/RenderProgram.md)</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### getUnitReversed() : <span style="font-weight: 400;">[RenderLinearRange](../alpenglow/RenderLinearRange.md)</span> {: #getUnitReversed data-toc-label='getUnitReversed' }

#### withOffset( offset : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[RenderLinearRange](../alpenglow/RenderLinearRange.md)</span> {: #withOffset data-toc-label='withOffset' }

### Static Methods

#### getGradientLinearRanges( min : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, max : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, offset : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, extend : <span style="font-weight: 400;">[RenderExtend](../alpenglow/RenderExtend.md)</span>, stops : <span style="font-weight: 400;">[RenderGradientStop](../alpenglow/RenderGradientStop.md)[]</span> ) : <span style="font-weight: 400;">[RenderLinearRange](../alpenglow/RenderLinearRange.md)[]</span> {: #getGradientLinearRanges data-toc-label='getGradientLinearRanges' }



## Source Code

See the source for [RenderLinearRange.ts](https://github.com/phetsims/alpenglow/blob/main/js/render-program/RenderLinearRange.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
