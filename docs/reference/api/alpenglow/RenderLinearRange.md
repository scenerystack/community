# RenderLinearRange

## Overview

Represents a section of a gradient's "color stop" space.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class RenderLinearRange {: #RenderLinearRange }


```js
import { RenderLinearRange } from 'scenerystack/alpenglow';
```
### Constructor

#### new RenderLinearRange( start : <span style="font-weight: 400; opacity: 80%;">number</span>, end : <span style="font-weight: 400; opacity: 80%;">number</span>, startProgram : <span style="font-weight: 400; opacity: 80%;">RenderProgram</span>, endProgram : <span style="font-weight: 400; opacity: 80%;">RenderProgram</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### getUnitReversed() : <span style="font-weight: 400; opacity: 80%;">RenderLinearRange</span> {: #getUnitReversed data-toc-label='getUnitReversed' }

#### withOffset( offset : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">RenderLinearRange</span> {: #withOffset data-toc-label='withOffset' }

### Static Methods

#### getGradientLinearRanges( min : <span style="font-weight: 400; opacity: 80%;">number</span>, max : <span style="font-weight: 400; opacity: 80%;">number</span>, offset : <span style="font-weight: 400; opacity: 80%;">number</span>, extend : <span style="font-weight: 400; opacity: 80%;">RenderExtend</span>, stops : <span style="font-weight: 400; opacity: 80%;">RenderGradientStop[]</span> ) : <span style="font-weight: 400; opacity: 80%;">RenderLinearRange[]</span> {: #getGradientLinearRanges data-toc-label='getGradientLinearRanges' }



## Source Code

See the source for [RenderLinearRange.ts](https://github.com/phetsims/alpenglow/blob/main/js/render-program/RenderLinearRange.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
