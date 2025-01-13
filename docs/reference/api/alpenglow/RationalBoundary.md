# RationalBoundary

## Overview

A loop of rational half-edges

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class RationalBoundary {: #RationalBoundary }


```js
import { RationalBoundary } from 'scenerystack/alpenglow';
```
### Instance Methods

#### computeProperties() : <span style="font-weight: 400; opacity: 80%;">void</span> {: #computeProperties data-toc-label='computeProperties' }

#### containsPoint( point : <span style="font-weight: 400; opacity: 80%;">BigRationalVector2</span> ) : <span style="font-weight: 400; opacity: 80%;">boolean</span> {: #containsPoint data-toc-label='containsPoint' }

#### toTransformedPolygon( matrix : <span style="font-weight: 400; opacity: 80%;">Matrix3</span> ) : <span style="font-weight: 400; opacity: 80%;">Vector2[]</span> {: #toTransformedPolygon data-toc-label='toTransformedPolygon' }

#### toTransformedLinearEdges( matrix : <span style="font-weight: 400; opacity: 80%;">Matrix3</span> ) : <span style="font-weight: 400; opacity: 80%;">LinearEdge[]</span> {: #toTransformedLinearEdges data-toc-label='toTransformedLinearEdges' }

### Instance Properties

#### edges : <span style="font-weight: 400; opacity: 80%;">RationalHalfEdge[]</span> {: #edges data-toc-label='edges' }

(readonly)

#### signedArea : <span style="font-weight: 400; opacity: 80%;">number</span> {: #signedArea data-toc-label='signedArea' }

#### bounds : <span style="font-weight: 400; opacity: 80%;">Bounds2</span> {: #bounds data-toc-label='bounds' }

#### minimalXRationalPoint : <span style="font-weight: 400; opacity: 80%;">BigRationalVector2</span> {: #minimalXRationalPoint data-toc-label='minimalXRationalPoint' }



## Source Code

See the source for [RationalBoundary.ts](https://github.com/phetsims/alpenglow/blob/main/js/cag/RationalBoundary.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
