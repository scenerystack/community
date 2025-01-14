# IntersectionPoint

## Overview

Intersection of two line segments, with t0 and t1 representing the interpolation values for the two segments.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class IntersectionPoint {: #IntersectionPoint }


```js
import { IntersectionPoint } from 'scenerystack/alpenglow';
```
### Constructor

#### new IntersectionPoint( t0 : <span style="font-weight: 400;">[BigRational](../alpenglow/BigRational.md)</span>, t1 : <span style="font-weight: 400;">[BigRational](../alpenglow/BigRational.md)</span>, point : <span style="font-weight: 400;">[BigRationalVector2](../alpenglow/BigRationalVector2.md)</span> ) {: #IntersectionPoint-constructor data-toc-label='new IntersectionPoint' }

### Instance Methods

#### toString() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> {: #toString data-toc-label='toString' }

#### verify( p0 : <span style="font-weight: 400;">[BigIntVector2](../alpenglow/BigIntVector2.md)</span>, p1 : <span style="font-weight: 400;">[BigIntVector2](../alpenglow/BigIntVector2.md)</span>, p2 : <span style="font-weight: 400;">[BigIntVector2](../alpenglow/BigIntVector2.md)</span>, p3 : <span style="font-weight: 400;">[BigIntVector2](../alpenglow/BigIntVector2.md)</span> ) {: #verify data-toc-label='verify' }

### Static Methods

#### intersectLineSegments( p0 : <span style="font-weight: 400;">[BigIntVector2](../alpenglow/BigIntVector2.md)</span>, p1 : <span style="font-weight: 400;">[BigIntVector2](../alpenglow/BigIntVector2.md)</span>, p2 : <span style="font-weight: 400;">[BigIntVector2](../alpenglow/BigIntVector2.md)</span>, p3 : <span style="font-weight: 400;">[BigIntVector2](../alpenglow/BigIntVector2.md)</span> ) : <span style="font-weight: 400;">[IntersectionPoint](../alpenglow/IntersectionPoint.md)[]</span> {: #intersectLineSegments data-toc-label='intersectLineSegments' }



## Source Code

See the source for [IntersectionPoint.ts](https://github.com/phetsims/alpenglow/blob/main/js/cag/IntersectionPoint.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
