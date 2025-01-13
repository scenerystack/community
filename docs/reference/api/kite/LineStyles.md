# LineStyles

## Overview

Styles needed to determine a stroked line shape. Generally immutable.

Mirrors much of what is done with SVG/Canvas, see https://svgwg.org/svg2-draft/painting.html for details.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class LineStyles {: #LineStyles }


```js
import { LineStyles } from 'scenerystack/kite';
```
### Constructor

#### new LineStyles( options? : <span style="font-weight: 400; opacity: 80%;">LineStylesOptions</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### equals( other : <span style="font-weight: 400; opacity: 80%;">LineStyles</span> ) : <span style="font-weight: 400; opacity: 80%;">boolean</span> {: #equals data-toc-label='equals' }

Determines of this lineStyles is equal to the other LineStyles

#### copy() : <span style="font-weight: 400; opacity: 80%;">LineStyles</span> {: #copy data-toc-label='copy' }

Returns a copy of this LineStyles.

#### leftJoin( center : <span style="font-weight: 400; opacity: 80%;">Vector2</span>, fromTangent : <span style="font-weight: 400; opacity: 80%;">Vector2</span>, toTangent : <span style="font-weight: 400; opacity: 80%;">Vector2</span> ) : <span style="font-weight: 400; opacity: 80%;">Segment[]</span> {: #leftJoin data-toc-label='leftJoin' }

Creates an array of Segments that make up a line join, to the left side.

Joins two segments together on the logical "left" side, at 'center' (where they meet), and un-normalized tangent
vectors in the direction of the stroking. To join on the "right" side, switch the tangent order and negate them.

#### rightJoin( center : <span style="font-weight: 400; opacity: 80%;">Vector2</span>, fromTangent : <span style="font-weight: 400; opacity: 80%;">Vector2</span>, toTangent : <span style="font-weight: 400; opacity: 80%;">Vector2</span> ) : <span style="font-weight: 400; opacity: 80%;">Segment[]</span> {: #rightJoin data-toc-label='rightJoin' }

Creates an array of Segments that make up a line join, to the right side.

Joins two segments together on the logical "right" side, at 'center' (where they meet), and normalized tangent
vectors in the direction of the stroking. To join on the "left" side, switch the tangent order and negate them.

#### cap( center : <span style="font-weight: 400; opacity: 80%;">Vector2</span>, tangent : <span style="font-weight: 400; opacity: 80%;">Vector2</span> ) : <span style="font-weight: 400; opacity: 80%;">Segment[]</span> {: #cap data-toc-label='cap' }

Creates an array of Segments that make up a line cap from the endpoint 'center' in the direction of the tangent

### Instance Properties

#### lineWidth : <span style="font-weight: 400; opacity: 80%;">number</span> {: #lineWidth data-toc-label='lineWidth' }

The width of the line (will be offset to each side by lineWidth/2)

#### lineCap : <span style="font-weight: 400; opacity: 80%;">LineCap</span> {: #lineCap data-toc-label='lineCap' }

'butt', 'round' or 'square' - Controls appearance at endpoints for non-closed subpaths.
- butt: straight-line at end point, going through the endpoint (perpendicular to the tangent)
- round: circular border with radius lineWidth/2 around endpoints
- square: straight-line past the end point (by lineWidth/2)
See: https://svgwg.org/svg2-draft/painting.html#LineCaps

#### lineJoin : <span style="font-weight: 400; opacity: 80%;">LineJoin</span> {: #lineJoin data-toc-label='lineJoin' }

'miter', 'round' or 'bevel' - Controls appearance at joints between segments (at the point)
- miter: Use sharp corners (which aren't too sharp, see miterLimit). Extends edges until they meed.
- round: circular border with radius lineWidth/2 around joints
- bevel: directly joins the gap with a line segment.
See: https://svgwg.org/svg2-draft/painting.html#LineJoin

#### lineDash : <span style="font-weight: 400; opacity: 80%;">number[]</span> {: #lineDash data-toc-label='lineDash' }

Even values in the array are the "dash" length, odd values are the "gap" length.
NOTE: If there is an odd number of entries, it behaves like lineDash.concat( lineDash ).
See: https://svgwg.org/svg2-draft/painting.html#StrokeDashing

#### lineDashOffset : <span style="font-weight: 400; opacity: 80%;">number</span> {: #lineDashOffset data-toc-label='lineDashOffset' }

Offset from the start of the subpath where the start of the line-dash array starts.

#### miterLimit : <span style="font-weight: 400; opacity: 80%;">number</span> {: #miterLimit data-toc-label='miterLimit' }

When to cut off lineJoin:miter to look like lineJoin:bevel. See https://svgwg.org/svg2-draft/painting.html



## Source Code

See the source for [LineStyles.ts](https://github.com/phetsims/kite/blob/main/js/util/LineStyles.ts) in the [kite](https://github.com/phetsims/kite) repository.
