# IntersectionPoint

## Overview

Intersection of two line segments, with t0 and t1 representing the interpolation values for the two segments.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class IntersectionPoint {: #IntersectionPoint }


```js
import { IntersectionPoint } from 'scenerystack/alpenglow';
```
### Constructor

#### new IntersectionPoint( t0 : <span style="font-weight: 400; opacity: 80%;">BigRational</span>, t1 : <span style="font-weight: 400; opacity: 80%;">BigRational</span>, point : <span style="font-weight: 400; opacity: 80%;">BigRationalVector2</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### toString() : <span style="font-weight: 400; opacity: 80%;">string</span> {: #toString data-toc-label='toString' }

#### verify( p0 : <span style="font-weight: 400; opacity: 80%;">BigIntVector2</span>, p1 : <span style="font-weight: 400; opacity: 80%;">BigIntVector2</span>, p2 : <span style="font-weight: 400; opacity: 80%;">BigIntVector2</span>, p3 : <span style="font-weight: 400; opacity: 80%;">BigIntVector2</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #verify data-toc-label='verify' }

### Static Methods

#### intersectLineSegments( p0 : <span style="font-weight: 400; opacity: 80%;">BigIntVector2</span>, p1 : <span style="font-weight: 400; opacity: 80%;">BigIntVector2</span>, p2 : <span style="font-weight: 400; opacity: 80%;">BigIntVector2</span>, p3 : <span style="font-weight: 400; opacity: 80%;">BigIntVector2</span> ) : <span style="font-weight: 400; opacity: 80%;">IntersectionPoint[]</span> {: #intersectLineSegments data-toc-label='intersectLineSegments' }



## Source Code

See the source for [IntersectionPoint.ts](https://github.com/phetsims/alpenglow/blob/main/js/cag/IntersectionPoint.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
