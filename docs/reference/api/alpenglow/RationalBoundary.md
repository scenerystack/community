# RationalBoundary

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/alpenglow/blob/main/js/cag/RationalBoundary.ts](https://github.com/phetsims/alpenglow/blob/main/js/cag/RationalBoundary.ts) for the most up-to-date information.

## Overview

A loop of rational half-edges

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class RationalBoundary {: #RationalBoundary }


```js
import { RationalBoundary } from 'scenerystack/alpenglow';
```
### Instance Methods

#### computeProperties() {: #computeProperties data-toc-label='computeProperties' }

#### containsPoint( point : <span style="font-weight: 400;">[BigRationalVector2](../alpenglow/BigRationalVector2.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #containsPoint data-toc-label='containsPoint' }

#### toTransformedPolygon( matrix : <span style="font-weight: 400;">[Matrix3](../dot/Matrix3.md)</span> ) : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)[]</span> {: #toTransformedPolygon data-toc-label='toTransformedPolygon' }

#### toTransformedLinearEdges( matrix : <span style="font-weight: 400;">[Matrix3](../dot/Matrix3.md)</span> ) : <span style="font-weight: 400;">[LinearEdge](../alpenglow/LinearEdge.md)[]</span> {: #toTransformedLinearEdges data-toc-label='toTransformedLinearEdges' }

### Instance Properties

#### edges : <span style="font-weight: 400;">[RationalHalfEdge](../alpenglow/RationalHalfEdge.md)[]</span> {: #edges data-toc-label='edges' }

(readonly)

#### signedArea : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #signedArea data-toc-label='signedArea' }

#### bounds : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md)</span> {: #bounds data-toc-label='bounds' }

#### minimalXRationalPoint : <span style="font-weight: 400;">[BigRationalVector2](../alpenglow/BigRationalVector2.md)</span> {: #minimalXRationalPoint data-toc-label='minimalXRationalPoint' }



## Source Code

See the source for [RationalBoundary.ts](https://github.com/phetsims/alpenglow/blob/main/js/cag/RationalBoundary.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
