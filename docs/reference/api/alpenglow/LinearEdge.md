# LinearEdge

## Overview

A line segment (between two points).

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class LinearEdge {: #LinearEdge }


```js
import { LinearEdge } from 'scenerystack/alpenglow';
```
### Constructor

#### new LinearEdge( startPoint : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span>, endPoint : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span>, containsFakeCorner ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### getLineIntegralArea() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #getLineIntegralArea data-toc-label='getLineIntegralArea' }

If you take the sum of these for a closed polygon, it should be the area of the polygon.

#### getLineIntegralZero() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #getLineIntegralZero data-toc-label='getLineIntegralZero' }

If you take the sum of these for a closed polygon, it should be zero (used to check computations).

#### serialize() : <span style="font-weight: 400;">[SerializedLinearEdge](../alpenglow/LinearEdge.md#SerializedLinearEdge)</span> {: #serialize data-toc-label='serialize' }

#### toString() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> {: #toString data-toc-label='toString' }

### Static Methods

#### fromPolygon( polygon : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)[]</span> ) : <span style="font-weight: 400;">[LinearEdge](../alpenglow/LinearEdge.md)[]</span> {: #fromPolygon data-toc-label='fromPolygon' }

#### fromPolygons( polygons : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)[][]</span> ) : <span style="font-weight: 400;">[LinearEdge](../alpenglow/LinearEdge.md)[]</span> {: #fromPolygons data-toc-label='fromPolygons' }

#### toPolygons( edges : <span style="font-weight: 400;">[LinearEdge](../alpenglow/LinearEdge.md)[]</span>, epsilon ) : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)[][]</span> {: #toPolygons data-toc-label='toPolygons' }

Returns a simplified version of the edges as a list of polygons.

NOTE: This is a low-performance method, mainly intended for debugging display.

#### withOppositesRemoved( edges : <span style="font-weight: 400;">[LinearEdge](../alpenglow/LinearEdge.md)[]</span>, epsilon ) : <span style="font-weight: 400;">[LinearEdge](../alpenglow/LinearEdge.md)[]</span> {: #withOppositesRemoved data-toc-label='withOppositesRemoved' }

Detects edges that are exact opposites of other edges, and returns a new list of edges with those removed.

#### withOverlappingRemoved( edges : <span style="font-weight: 400;">[LinearEdge](../alpenglow/LinearEdge.md)[]</span>, epsilon ) : <span style="font-weight: 400;">[LinearEdge](../alpenglow/LinearEdge.md)[]</span> {: #withOverlappingRemoved data-toc-label='withOverlappingRemoved' }

Detects ANY "opposite-direction" overlap between edges, and returns a new list of edges with those removed.

NOTE: This is a low-performance method, mainly intended for debugging display.

#### polygonsToShape( polygons : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)[][]</span> ) : <span style="font-weight: 400;">[Shape](../kite/Shape.md)</span> {: #polygonsToShape data-toc-label='polygonsToShape' }

Returns a simplified version of the polygons as a kite Shape.

TODO: perhaps... move something like this to kite?

NOTE: This is a low-performance method, mainly intended for debugging display.

#### evaluateLineIntegralShoelaceArea( p0x : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, p0y : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, p1x : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, p1y : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #evaluateLineIntegralShoelaceArea data-toc-label='evaluateLineIntegralShoelaceArea' }

Cancelled subexpressions for fewer multiplications

#### evaluateLineIntegralArea( p0x : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, p0y : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, p1x : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, p1y : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #evaluateLineIntegralArea data-toc-label='evaluateLineIntegralArea' }

Without the subexpression cancelling

#### evaluateLineIntegralPartialCentroid( p0x : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, p0y : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, p1x : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, p1y : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> {: #evaluateLineIntegralPartialCentroid data-toc-label='evaluateLineIntegralPartialCentroid' }

If you take the sum of these for a closed polygon and DIVIDE IT by the area, it should be the centroid of the
polygon.

#### evaluateLineIntegralZero( p0x : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, p0y : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, p1x : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, p1y : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #evaluateLineIntegralZero data-toc-label='evaluateLineIntegralZero' }

#### evaluateLineIntegralDistance( p0x : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, p0y : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, p1x : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, p1y : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #evaluateLineIntegralDistance data-toc-label='evaluateLineIntegralDistance' }

#### deserialize( obj : <span style="font-weight: 400;">[SerializedLinearEdge](../alpenglow/LinearEdge.md#SerializedLinearEdge)</span> ) : <span style="font-weight: 400;">[LinearEdge](../alpenglow/LinearEdge.md)</span> {: #deserialize data-toc-label='deserialize' }

#### getPolygonArea( polygon : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)[]</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #getPolygonArea data-toc-label='getPolygonArea' }

#### getPolygonCentroid( polygon : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)[]</span> ) : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> {: #getPolygonCentroid data-toc-label='getPolygonCentroid' }

#### getEdgesArea( clippedEdges : <span style="font-weight: 400;">[LinearEdge](../alpenglow/LinearEdge.md)[]</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #getEdgesArea data-toc-label='getEdgesArea' }

#### evaluateClosestDistanceToOrigin( p0x : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, p0y : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, p1x : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, p1y : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #evaluateClosestDistanceToOrigin data-toc-label='evaluateClosestDistanceToOrigin' }

Given a line segment, returns the distance from the origin to the closest point on the line segment.

#### leftComparison( p0x : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, p0y : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, p1x : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, p1y : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, x : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, y : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #leftComparison data-toc-label='leftComparison' }

Tests if the point (x,y) is left/on/right of the infinite line determined by (p0x,p0y) and (p1x,p1y).
Return: &gt;0 for P2 left of the line through P0 and P1
        =0 for P2  on the line
        &lt;0 for P2  right of the line

#### windingContribution( p0x : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, p0y : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, p1x : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, p1y : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, x : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, y : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #windingContribution data-toc-label='windingContribution' }

Gets the winding contribution of an edge segment to a point with the Dan Sunday winding number algorithm.

See https://web.archive.org/web/20130126163405/http://geomalgorithms.com/a03-_inclusion.html

#### getWindingNumberEdges( edges : <span style="font-weight: 400;">[LinearEdge](../alpenglow/LinearEdge.md)[]</span>, point : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #getWindingNumberEdges data-toc-label='getWindingNumberEdges' }

#### getWindingNumberPolygon( polygon : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)[]</span>, point : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #getWindingNumberPolygon data-toc-label='getWindingNumberPolygon' }

#### getWindingNumberPolygons( polygons : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)[][]</span>, point : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #getWindingNumberPolygons data-toc-label='getWindingNumberPolygons' }

#### addDistanceRange( startPoint : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span>, endPoint : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span>, point : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span>, range : <span style="font-weight: 400;">[Range](../dot/Range.md)</span> ) {: #addDistanceRange data-toc-label='addDistanceRange' }

Given an edge defined by startPoint/endPoint, compute the range of distances from the given point to the edge, and
add it to the range.

#### validateStartEndMatches( edges : <span style="font-weight: 400;">[LinearEdge](../alpenglow/LinearEdge.md)[]</span> ) {: #validateStartEndMatches data-toc-label='validateStartEndMatches' }



## Type SerializedLinearEdge {: #SerializedLinearEdge }


```js
import type { SerializedLinearEdge } from 'scenerystack/alpenglow';
```
- **startPoint**:
  - **x**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
  - **y**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **endPoint**:
  - **x**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
  - **y**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **containsFakeCorner**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>




## Source Code

See the source for [LinearEdge.ts](https://github.com/phetsims/alpenglow/blob/main/js/cag/LinearEdge.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
