# Shape

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/kite/blob/main/js/Shape.ts](https://github.com/phetsims/kite/blob/main/js/Shape.ts) for the most up-to-date information.

## Overview

Shape handling

Shapes are internally made up of Subpaths, which contain a series of segments, and are optionally closed.
Familiarity with how Canvas handles subpaths is helpful for understanding this code.

Canvas spec: http://www.w3.org/TR/2dcontext/
SVG spec: http://www.w3.org/TR/SVG/expanded-toc.html
          http://www.w3.org/TR/SVG/paths.html#PathData (for paths)
Notes for elliptical arcs: http://www.w3.org/TR/SVG/implnote.html#PathElementImplementationNotes
Notes for painting strokes: https://svgwg.org/svg2-draft/painting.html

TODO: add nonzero / evenodd support when browsers support it https://github.com/phetsims/kite/issues/76
TODO: docs

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class Shape {: #Shape }


```js
import { Shape } from 'scenerystack/kite';
```
### Constructor

#### new Shape( subpaths? : <span style="font-weight: 400;">[Subpath](../kite/Subpath.md)[] | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span>, bounds? : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md)</span> ) {: #Shape-constructor data-toc-label='new Shape' }

### Instance Methods

#### moveTo( x : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, y : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #moveTo data-toc-label='moveTo' }

Moves to a point given by the coordinates x and y

#### moveToRelative( x : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, y : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #moveToRelative data-toc-label='moveToRelative' }

Moves a relative displacement (x,y) from last point

#### moveToPointRelative( displacement : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #moveToPointRelative data-toc-label='moveToPointRelative' }

Moves a relative displacement (point) from last point

#### moveToPoint( point : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #moveToPoint data-toc-label='moveToPoint' }

Adds to this shape a subpath that moves (no joint) it to a point

#### lineTo( x : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, y : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #lineTo data-toc-label='lineTo' }

Adds to this shape a straight line from last point to the coordinate (x,y)

#### lineToRelative( x : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, y : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #lineToRelative data-toc-label='lineToRelative' }

Adds to this shape a straight line displaced by a relative amount x, and y from last point

@param x - horizontal displacement
@param y - vertical displacement

#### lineToPointRelative( displacement : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #lineToPointRelative data-toc-label='lineToPointRelative' }

Adds to this shape a straight line displaced by a relative displacement (point)

#### lineToPoint( point : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #lineToPoint data-toc-label='lineToPoint' }

Adds to this shape a straight line from this lastPoint to point

#### horizontalLineTo( x : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #horizontalLineTo data-toc-label='horizontalLineTo' }

Adds a horizontal line (x represents the x-coordinate of the end point)

#### horizontalLineToRelative( x : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #horizontalLineToRelative data-toc-label='horizontalLineToRelative' }

Adds a horizontal line (x represent a horizontal displacement)

#### verticalLineTo( y : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #verticalLineTo data-toc-label='verticalLineTo' }

Adds a vertical line (y represents the y-coordinate of the end point)

#### verticalLineToRelative( y : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #verticalLineToRelative data-toc-label='verticalLineToRelative' }

Adds a vertical line (y represents a vertical displacement)

#### zigZagTo( endX : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, endY : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, amplitude : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, numberZigZags : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, symmetrical : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #zigZagTo data-toc-label='zigZagTo' }

Zig-zags between the current point and the specified point

@param endX - the end of the shape
@param endY - the end of the shape
@param amplitude - the vertical amplitude of the zig zag wave
@param numberZigZags - the number of oscillations
@param symmetrical - flag for drawing a symmetrical zig zag

#### zigZagToPoint( endPoint : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span>, amplitude : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, numberZigZags : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, symmetrical : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #zigZagToPoint data-toc-label='zigZagToPoint' }

Zig-zags between the current point and the specified point.
Implementation moved from circuit-construction-kit-common on April 22, 2019.

@param endPoint - the end of the shape
@param amplitude - the vertical amplitude of the zig zag wave, signed to choose initial direction
@param numberZigZags - the number of complete oscillations
@param symmetrical - flag for drawing a symmetrical zig zag

#### quadraticCurveTo( cpx : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, cpy : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, x : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, y : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #quadraticCurveTo data-toc-label='quadraticCurveTo' }

Adds a quadratic curve to this shape

The curve is guaranteed to pass through the coordinate (x,y) but does not pass through the control point

@param cpx - control point horizontal coordinate
@param cpy - control point vertical coordinate
@param x
@param y

#### quadraticCurveToRelative( cpx : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, cpy : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, x : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, y : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #quadraticCurveToRelative data-toc-label='quadraticCurveToRelative' }

Adds a quadratic curve to this shape. The control and final points are specified as displacment from the last
point in this shape

@param cpx - control point horizontal coordinate
@param cpy - control point vertical coordinate
@param x - final x position of the quadratic curve
@param y - final y position of the quadratic curve

#### quadraticCurveToPointRelative( controlPoint : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span>, point : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #quadraticCurveToPointRelative data-toc-label='quadraticCurveToPointRelative' }

Adds a quadratic curve to this shape. The control and final points are specified as displacement from the
last point in this shape

@param controlPoint
@param point - the quadratic curve passes through this point

#### smoothQuadraticCurveTo( x : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, y : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #smoothQuadraticCurveTo data-toc-label='smoothQuadraticCurveTo' }

Adds a quadratic curve to this shape. The quadratic curves passes through the x and y coordinate.
The shape should join smoothly with the previous subpaths

TODO: consider a rename to put 'smooth' farther back? https://github.com/phetsims/kite/issues/76

@param x - final x position of the quadratic curve
@param y - final y position of the quadratic curve

#### smoothQuadraticCurveToRelative( x : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, y : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #smoothQuadraticCurveToRelative data-toc-label='smoothQuadraticCurveToRelative' }

Adds a quadratic curve to this shape. The quadratic curves passes through the x and y coordinate.
The shape should join smoothly with the previous subpaths

@param x - final x position of the quadratic curve
@param y - final y position of the quadratic curve

#### quadraticCurveToPoint( controlPoint : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span>, point : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #quadraticCurveToPoint data-toc-label='quadraticCurveToPoint' }

Adds a quadratic bezier curve to this shape.

@param controlPoint
@param point - the quadratic curve passes through this point

#### cubicCurveTo( cp1x : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, cp1y : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, cp2x : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, cp2y : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, x : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, y : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #cubicCurveTo data-toc-label='cubicCurveTo' }

Adds a cubic bezier curve to this shape.

@param cp1x - control point 1,  horizontal coordinate
@param cp1y - control point 1,  vertical coordinate
@param cp2x - control point 2,  horizontal coordinate
@param cp2y - control point 2,  vertical coordinate
@param x - final x position of the cubic curve
@param y - final y position of the cubic curve

#### cubicCurveToRelative( cp1x : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, cp1y : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, cp2x : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, cp2y : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, x : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, y : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #cubicCurveToRelative data-toc-label='cubicCurveToRelative' }

@param cp1x - control point 1,  horizontal displacement
@param cp1y - control point 1,  vertical displacement
@param cp2x - control point 2,  horizontal displacement
@param cp2y - control point 2,  vertical displacement
@param x - final horizontal displacement
@param y - final vertical displacment

#### cubicCurveToPointRelative( control1 : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span>, control2 : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span>, point : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #cubicCurveToPointRelative data-toc-label='cubicCurveToPointRelative' }

@param control1 - control displacement  1
@param control2 - control displacement 2
@param point - final displacement

#### smoothCubicCurveTo( cp2x : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, cp2y : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, x : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, y : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #smoothCubicCurveTo data-toc-label='smoothCubicCurveTo' }

@param cp2x - control point 2,  horizontal coordinate
@param cp2y - control point 2,  vertical coordinate
@param x
@param y

#### smoothCubicCurveToRelative( cp2x : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, cp2y : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, x : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, y : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #smoothCubicCurveToRelative data-toc-label='smoothCubicCurveToRelative' }

@param cp2x - control point 2,  horizontal coordinate
@param cp2y - control point 2,  vertical coordinate
@param x
@param y

#### cubicCurveToPoint( control1 : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span>, control2 : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span>, point : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #cubicCurveToPoint data-toc-label='cubicCurveToPoint' }

#### arc( centerX : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, centerY : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, radius : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, startAngle : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, endAngle : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, anticlockwise? : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #arc data-toc-label='arc' }

@param centerX - horizontal coordinate of the center of the arc
@param centerY - Center of the arc
@param radius - How far from the center the arc will be
@param startAngle - Angle (radians) of the start of the arc
@param endAngle - Angle (radians) of the end of the arc
@param [anticlockwise] - Decides which direction the arc takes around the center

#### arcPoint( center : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span>, radius : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, startAngle : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, endAngle : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, anticlockwise? : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #arcPoint data-toc-label='arcPoint' }

@param center - Center of the arc (every point on the arc is equally far from the center)
@param radius - How far from the center the arc will be
@param startAngle - Angle (radians) of the start of the arc
@param endAngle - Angle (radians) of the end of the arc
@param [anticlockwise] - Decides which direction the arc takes around the center

#### ellipticalArc( centerX : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, centerY : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, radiusX : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, radiusY : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, rotation : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, startAngle : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, endAngle : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, anticlockwise? : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #ellipticalArc data-toc-label='ellipticalArc' }

Creates an elliptical arc

@param centerX - horizontal coordinate of the center of the arc
@param centerY -  vertical coordinate of the center of the arc
@param radiusX - semi axis
@param radiusY - semi axis
@param rotation - rotation of the elliptical arc with respect to the positive x axis.
@param startAngle
@param endAngle
@param [anticlockwise]

#### ellipticalArcPoint( center : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span>, radiusX : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, radiusY : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, rotation : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, startAngle : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, endAngle : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, anticlockwise? : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #ellipticalArcPoint data-toc-label='ellipticalArcPoint' }

Creates an elliptic arc

@param center
@param radiusX
@param radiusY
@param rotation - rotation of the arc with respect to the positive x axis.
@param startAngle -
@param endAngle
@param [anticlockwise]

#### close() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #close data-toc-label='close' }

Adds a subpath that joins the last point of this shape to the first point to form a closed shape


#### newSubpath() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #newSubpath data-toc-label='newSubpath' }

Moves to the next subpath, but without adding any points to it (like a moveTo would do).

This is particularly helpful for cases where you don't want to have to compute the explicit starting point of
the next subpath. For instance, if you want three disconnected circles:
- shape.circle( 50, 50, 20 ).newSubpath().circle( 100, 100, 20 ).newSubpath().circle( 150, 50, 20 )

See https://github.com/phetsims/kite/issues/72 for more info.

#### makeImmutable() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #makeImmutable data-toc-label='makeImmutable' }

Makes this Shape immutable, so that attempts to further change the Shape will fail. This allows clients to avoid
adding change listeners to this Shape.

#### isImmutable() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #isImmutable data-toc-label='isImmutable' }

Returns whether this Shape is immutable (see makeImmutable for details).

#### ellipticalArcToRelative( radiusX : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, radiusY : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, rotation : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, largeArc : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span>, sweep : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span>, x : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, y : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #ellipticalArcToRelative data-toc-label='ellipticalArcToRelative' }

Matches SVG's elliptical arc from http://www.w3.org/TR/SVG/paths.html

WARNING: rotation (for now) is in DEGREES. This will probably change in the future.

@param radiusX - Semi-major axis size
@param radiusY - Semi-minor axis size
@param rotation - Rotation of the ellipse (its semi-major axis)
@param largeArc - Whether the arc will go the longest route around the ellipse.
@param sweep - Whether the arc made goes from start to end "clockwise" (opposite of anticlockwise flag)
@param x - End point X position
@param y - End point Y position

#### ellipticalArcTo( radiusX : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, radiusY : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, rotation : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, largeArc : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span>, sweep : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span>, x : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, y : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #ellipticalArcTo data-toc-label='ellipticalArcTo' }

Matches SVG's elliptical arc from http://www.w3.org/TR/SVG/paths.html

WARNING: rotation (for now) is in DEGREES. This will probably change in the future.

@param radiusX - Semi-major axis size
@param radiusY - Semi-minor axis size
@param rotation - Rotation of the ellipse (its semi-major axis)
@param largeArc - Whether the arc will go the longest route around the ellipse.
@param sweep - Whether the arc made goes from start to end "clockwise" (opposite of anticlockwise flag)
@param x - End point X position
@param y - End point Y position

#### circle( center : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span>, radius : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #circle data-toc-label='circle' }

Draws a circle using the arc() call

#### circle( centerX : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, centerY : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, radius : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #circle data-toc-label='circle' }

#### circle( centerX : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, centerY : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, radius? : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #circle data-toc-label='circle' }

#### ellipse( center : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span>, radiusX : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, radiusY : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, rotation : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #ellipse data-toc-label='ellipse' }

Draws an ellipse using the ellipticalArc() call

The rotation is about the centerX, centerY.

#### ellipse( centerX : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, centerY : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, radiusX : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, radiusY : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, rotation : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #ellipse data-toc-label='ellipse' }

#### ellipse( centerX : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, centerY : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, radiusX : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, radiusY : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, rotation? : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #ellipse data-toc-label='ellipse' }

#### rect( x : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, y : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, width : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, height : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #rect data-toc-label='rect' }

Creates a rectangle shape

@param x - left position
@param y - bottom position (in non inverted cartesian system)
@param width
@param height

#### roundRect( x : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, y : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, width : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, height : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, arcw : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, arch : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #roundRect data-toc-label='roundRect' }

Creates a round rectangle. All arguments are number.

@param x
@param y
@param width - width of the rectangle
@param height - height of the rectangle
@param arcw - arc width
@param arch - arc height

#### polygon( vertices : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)[]</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #polygon data-toc-label='polygon' }

Creates a polygon from an array of vertices.

#### cardinalSpline( positions : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)[]</span>, providedOptions? : <span style="font-weight: 400;">CardinalSplineOptions</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #cardinalSpline data-toc-label='cardinalSpline' }

This is a convenience function that allows to generate Cardinal splines
from a position array. Cardinal spline differs from Bezier curves in that all
defined points on a Cardinal spline are on the path itself.

It includes a tension parameter to allow the client to specify how tightly
the path interpolates between points. One can think of the tension as the tension in
a rubber band around pegs. however unlike a rubber band the tension can be negative.
the tension ranges from -1 to 1

#### copy() : <span style="font-weight: 400;">[Shape](../kite/Shape.md)</span> {: #copy data-toc-label='copy' }

Returns a copy of this shape

#### writeToContext( context : <span style="font-weight: 400;">[CanvasRenderingContext2D](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D)</span> ) {: #writeToContext data-toc-label='writeToContext' }

Writes out this shape's path to a canvas 2d context. does NOT include the beginPath()!

#### getSVGPath() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> {: #getSVGPath data-toc-label='getSVGPath' }

Returns something like "M150 0 L75 200 L225 200 Z" for a triangle (to be used with a SVG path element's 'd'
attribute)

#### transformed( matrix : <span style="font-weight: 400;">[Matrix3](../dot/Matrix3.md)</span> ) : <span style="font-weight: 400;">[Shape](../kite/Shape.md)</span> {: #transformed data-toc-label='transformed' }

Returns a new Shape that is transformed by the associated matrix

#### nonlinearTransformed( providedOptions? : <span style="font-weight: 400;">[NonlinearTransformedOptions](../kite/Shape.md#NonlinearTransformedOptions)</span> ) : <span style="font-weight: 400;">[Shape](../kite/Shape.md)</span> {: #nonlinearTransformed data-toc-label='nonlinearTransformed' }

Converts this subpath to a new shape made of many line segments (approximating the current shape) with the
transformation applied.

#### polarToCartesian( options? : <span style="font-weight: 400;">[NonlinearTransformedOptions](../kite/Shape.md#NonlinearTransformedOptions)</span> ) : <span style="font-weight: 400;">[Shape](../kite/Shape.md)</span> {: #polarToCartesian data-toc-label='polarToCartesian' }

Maps points by treating their x coordinate as polar angle, and y coordinate as polar magnitude.
See http://en.wikipedia.org/wiki/Polar_coordinate_system

Please see Shape.nonlinearTransformed for more documentation on adaptive discretization options (minLevels, maxLevels, distanceEpsilon, curveEpsilon)

Example: A line from (0,10) to (pi,10) will be transformed to a circular arc from (10,0) to (-10,0) passing through (0,10).

#### toPiecewiseLinear( options? : <span style="font-weight: 400;">[NonlinearTransformedOptions](../kite/Shape.md#NonlinearTransformedOptions)</span> ) : <span style="font-weight: 400;">[Shape](../kite/Shape.md)</span> {: #toPiecewiseLinear data-toc-label='toPiecewiseLinear' }

Converts each segment into lines, using an adaptive (midpoint distance subdivision) method.

NOTE: uses nonlinearTransformed method internally, but since we don't provide a pointMap or methodName, it won't create anything but line segments.
See nonlinearTransformed for documentation of options

#### containsPoint( point : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #containsPoint data-toc-label='containsPoint' }

Is this point contained in this shape

#### intersection( ray : <span style="font-weight: 400;">[Ray2](../dot/Ray2.md)</span> ) : <span style="font-weight: 400;">[RayIntersection](../kite/RayIntersection.md)[]</span> {: #intersection data-toc-label='intersection' }

Hit-tests this shape with the ray. An array of all intersections of the ray with this shape will be returned.
For this function, intersections will be returned sorted by the distance from the ray's position.

#### interiorIntersectsLineSegment( startPoint : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span>, endPoint : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #interiorIntersectsLineSegment data-toc-label='interiorIntersectsLineSegment' }

Returns whether the provided line segment would have some part on top or touching the interior (filled area) of
this shape.

This differs somewhat from an intersection of the line segment with the Shape's path, as we will return true
("intersection") if the line segment is entirely contained in the interior of the Shape's path.

@param startPoint - One end of the line segment
@param endPoint - The other end of the line segment

#### windingIntersection( ray : <span style="font-weight: 400;">[Ray2](../dot/Ray2.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #windingIntersection data-toc-label='windingIntersection' }

Returns the winding number for intersection with a ray

#### intersectsBounds( bounds : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #intersectsBounds data-toc-label='intersectsBounds' }

Whether the path of the Shape intersects (or is contained in) the provided bounding box.
Computed by checking intersections with all four edges of the bounding box, or whether the Shape is totally
contained within the bounding box.

#### getStrokedShape( lineStyles : <span style="font-weight: 400;">[LineStyles](../kite/LineStyles.md)</span> ) : <span style="font-weight: 400;">[Shape](../kite/Shape.md)</span> {: #getStrokedShape data-toc-label='getStrokedShape' }

Returns a new Shape that is an outline of the stroked path of this current Shape. currently not intended to be
nested (doesn't do intersection computations yet)

TODO: rename stroked( lineStyles )? https://github.com/phetsims/kite/issues/76

#### getOffsetShape( distance : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Shape](../kite/Shape.md)</span> {: #getOffsetShape data-toc-label='getOffsetShape' }

Gets a shape offset by a certain amount.

#### getDashedShape( lineDash : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>[]</span>, lineDashOffset : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, providedOptions? : <span style="font-weight: 400;">GetDashedShapeOptions</span> ) : <span style="font-weight: 400;">[Shape](../kite/Shape.md)</span> {: #getDashedShape data-toc-label='getDashedShape' }

Returns a copy of this subpath with the dash "holes" removed (has many subpaths usually).

#### getBounds() : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md)</span> {: #getBounds data-toc-label='getBounds' }

Returns the bounds of this shape. It is the bounding-box union of the bounds of each subpath contained.

#### getStrokedBounds( lineStyles : <span style="font-weight: 400;">[LineStyles](../kite/LineStyles.md)</span> ) : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md)</span> {: #getStrokedBounds data-toc-label='getStrokedBounds' }

Returns the bounds for a stroked version of this shape. The input lineStyles are used to determine the size and
style of the stroke, and then the bounds of the stroked shape are returned.

#### getSimplifiedAreaShape() : <span style="font-weight: 400;">[Shape](../kite/Shape.md)</span> {: #getSimplifiedAreaShape data-toc-label='getSimplifiedAreaShape' }

Returns a simplified form of this shape.

Runs it through the normal CAG process, which should combine areas where possible, handles self-intersection,
etc.

NOTE: Currently (2017-10-04) adjacent segments may get simplified only if they are lines. Not yet complete.

#### getBoundsWithTransform( matrix : <span style="font-weight: 400;">[Matrix3](../dot/Matrix3.md)</span>, lineStyles? : <span style="font-weight: 400;">[LineStyles](../kite/LineStyles.md)</span> ) : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md)</span> {: #getBoundsWithTransform data-toc-label='getBoundsWithTransform' }

#### getApproximateArea( numSamples : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #getApproximateArea data-toc-label='getApproximateArea' }

Return an approximate value of the area inside of this Shape (where containsPoint is true) using Monte-Carlo.

NOTE: Generally, use getArea(). This can be used for verification, but takes a large number of samples.

@param numSamples - How many times to randomly check for inclusion of points.

#### getNonoverlappingArea() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #getNonoverlappingArea data-toc-label='getNonoverlappingArea' }

Return the area inside the Shape (where containsPoint is true), assuming there is no self-intersection or
overlap, and the same orientation (winding order) is used. Should also support holes (with opposite orientation),
assuming they don't intersect the containing subpath.

#### getArea() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #getArea data-toc-label='getArea' }

Returns the area inside the shape.

NOTE: This requires running it through a lot of computation to determine a non-overlapping non-self-intersecting
      form first. If the Shape is "simple" enough, getNonoverlappingArea would be preferred.

#### getApproximateCentroid( numSamples : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> {: #getApproximateCentroid data-toc-label='getApproximateCentroid' }

Return the approximate location of the centroid of the Shape (the average of all points where containsPoint is true)
using Monte-Carlo methods.

@param numSamples - How many times to randomly check for inclusion of points.

#### getClosestPoints( point : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> ) : <span style="font-weight: 400;">[ClosestToPointResult](../kite/Segment.md#ClosestToPointResult)[]</span> {: #getClosestPoints data-toc-label='getClosestPoints' }

Returns an array of potential closest point results on the Shape to the given point.

#### getClosestPoint( point : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> ) : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> {: #getClosestPoint data-toc-label='getClosestPoint' }

Returns a single point ON the Shape boundary that is closest to the given point (picks an arbitrary one if there
are multiple).

#### invalidatePoints() {: #invalidatePoints data-toc-label='invalidatePoints' }

Should be called after mutating the x/y of Vector2 points that were passed in to various Shape calls, so that
derived information computed (bounds, etc.) will be correct, and any clients (e.g. Scenery Paths) will be
notified of the updates.

#### toString() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> {: #toString data-toc-label='toString' }

#### getLastPoint() : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> {: #getLastPoint data-toc-label='getLastPoint' }

Gets the last point in the last subpath, or null if it doesn't exist

#### shapeUnion( shape : <span style="font-weight: 400;">[Shape](../kite/Shape.md)</span> ) : <span style="font-weight: 400;">[Shape](../kite/Shape.md)</span> {: #shapeUnion data-toc-label='shapeUnion' }

Returns a new shape that contains a union of the two shapes (a point in either shape is in the resulting shape).

#### shapeIntersection( shape : <span style="font-weight: 400;">[Shape](../kite/Shape.md)</span> ) : <span style="font-weight: 400;">[Shape](../kite/Shape.md)</span> {: #shapeIntersection data-toc-label='shapeIntersection' }

Returns a new shape that contains the intersection of the two shapes (a point in both shapes is in the
resulting shape).

#### shapeDifference( shape : <span style="font-weight: 400;">[Shape](../kite/Shape.md)</span> ) : <span style="font-weight: 400;">[Shape](../kite/Shape.md)</span> {: #shapeDifference data-toc-label='shapeDifference' }

Returns a new shape that contains the difference of the two shapes (a point in the first shape and NOT in the
second shape is in the resulting shape).

#### shapeXor( shape : <span style="font-weight: 400;">[Shape](../kite/Shape.md)</span> ) : <span style="font-weight: 400;">[Shape](../kite/Shape.md)</span> {: #shapeXor data-toc-label='shapeXor' }

Returns a new shape that contains the xor of the two shapes (a point in only one shape is in the resulting
shape).

#### shapeClip( shape : <span style="font-weight: 400;">[Shape](../kite/Shape.md)</span>, options? : <span style="font-weight: 400;">{ includeExterior?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>; includeBoundary: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>; includeInterior: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span> }</span> ) : <span style="font-weight: 400;">[Shape](../kite/Shape.md)</span> {: #shapeClip data-toc-label='shapeClip' }

Returns a new shape that only contains portions of segments that are within the passed-in shape's area.

// TODO: convert Graph to TS and get the types from there https://github.com/phetsims/kite/issues/76

#### getArcLength( distanceEpsilon? : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, curveEpsilon? : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, maxLevels? : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #getArcLength data-toc-label='getArcLength' }

Returns the (sometimes approximate) arc length of all the shape's subpaths combined.

#### serialize() : <span style="font-weight: 400;">[SerializedShape](../kite/Shape.md#SerializedShape)</span> {: #serialize data-toc-label='serialize' }

Returns an object form that can be turned back into a segment with the corresponding deserialize method.

### Instance Properties

#### subpaths : <span style="font-weight: 400;">[Subpath](../kite/Subpath.md)[]</span> {: #subpaths data-toc-label='subpaths' }

(readonly)

Lower-level piecewise mathematical description using segments, also individually immutable

#### invalidatedEmitter : <span style="font-weight: 400;">[TinyEmitter](../axon/TinyEmitter.md)</span> {: #invalidatedEmitter data-toc-label='invalidatedEmitter' }

(readonly)

### Static Methods

#### deserialize( obj : <span style="font-weight: 400;">[SerializedShape](../kite/Shape.md#SerializedShape)</span> ) : <span style="font-weight: 400;">[Shape](../kite/Shape.md)</span> {: #deserialize data-toc-label='deserialize' }

Returns a Shape from the serialized representation.

#### rectangle( x : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, y : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, width : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, height : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Shape](../kite/Shape.md)</span> {: #rectangle data-toc-label='rectangle' }

Creates a rectangle

#### roundRect( x : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, y : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, width : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, height : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, arcw : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, arch : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Shape](../kite/Shape.md)</span> {: #roundRect data-toc-label='roundRect' }

Creates a round rectangle {Shape}, with {number} arguments. Uses circular or elliptical arcs if given.

#### roundedRectangleWithRadii( x : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, y : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, width : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, height : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, cornerRadii? : <span style="font-weight: 400;">Partial&lt;[CornerRadiiOptions](../kite/Shape.md#CornerRadiiOptions)&gt;</span> ) : <span style="font-weight: 400;">[Shape](../kite/Shape.md)</span> {: #roundedRectangleWithRadii data-toc-label='roundedRectangleWithRadii' }

Creates a rounded rectangle, where each corner can have a different radius. The radii default to 0, and may be set
using topLeft, topRight, bottomLeft and bottomRight in the options. If the specified radii are larger than the dimension
on that side, they radii are reduced proportionally, see https://github.com/phetsims/under-pressure/issues/151

E.g.:

var cornerRadius = 20;
var rect = Shape.roundedRectangleWithRadii( 0, 0, 200, 100, {
  topLeft: cornerRadius,
  topRight: cornerRadius
} );

@param x - Left edge position
@param y - Top edge position
@param width - Width of rectangle
@param height - Height of rectangle
@param [cornerRadii] - Optional object with potential radii for each corner.

#### boundsOffsetWithRadii( bounds : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md)</span>, offsets : <span style="font-weight: 400;">OffsetsOptions</span>, radii? : <span style="font-weight: 400;">[CornerRadiiOptions](../kite/Shape.md#CornerRadiiOptions)</span> ) : <span style="font-weight: 400;">[Shape](../kite/Shape.md)</span> {: #boundsOffsetWithRadii data-toc-label='boundsOffsetWithRadii' }

Returns a Shape from a bounds, offset (expanded) by certain amounts, and with certain corner radii.

#### polygon( vertices : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)[]</span> ) : <span style="font-weight: 400;">[Shape](../kite/Shape.md)</span> {: #polygon data-toc-label='polygon' }

Creates a closed polygon from an array of vertices by connecting them by a series of lines.
The lines are joining the adjacent vertices in the array.

#### bounds( bounds : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md)</span> ) : <span style="font-weight: 400;">[Shape](../kite/Shape.md)</span> {: #bounds data-toc-label='bounds' }

Creates a rectangular shape from bounds

#### lineSegment( x1 : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, y1 : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, x2 : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, y2 : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Shape](../kite/Shape.md)</span> {: #lineSegment data-toc-label='lineSegment' }

Creates a line segment, using either (x1,y1,x2,y2) or ({x1,y1},{x2,y2}) arguments

#### lineSegment( p1 : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span>, p2 : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> ) : <span style="font-weight: 400;">[Shape](../kite/Shape.md)</span> {: #lineSegment data-toc-label='lineSegment' }

#### lineSegment( a : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, b : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, c? : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, d? : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Shape](../kite/Shape.md)</span> {: #lineSegment data-toc-label='lineSegment' }

#### regularPolygon( sides : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, radius : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Shape](../kite/Shape.md)</span> {: #regularPolygon data-toc-label='regularPolygon' }

Returns a regular polygon of radius and number of sides
The regular polygon is oriented such that the first vertex lies on the positive x-axis.

@param sides - an integer
@param radius

#### circle( centerX : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, centerY : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, radius : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Shape](../kite/Shape.md)</span> {: #circle data-toc-label='circle' }

Creates a circle
supports both circle( centerX, centerY, radius ), circle( center, radius ), and circle( radius ) with the center default to 0,0

#### circle( center : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span>, radius : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Shape](../kite/Shape.md)</span> {: #circle data-toc-label='circle' }

#### circle( radius : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Shape](../kite/Shape.md)</span> {: #circle data-toc-label='circle' }

#### circle( a : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, b? : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, c? : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Shape](../kite/Shape.md)</span> {: #circle data-toc-label='circle' }

#### ellipse( centerX : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, centerY : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, radiusX : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, radiusY : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, rotation : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Shape](../kite/Shape.md)</span> {: #ellipse data-toc-label='ellipse' }

Supports ellipse( centerX, centerY, radiusX, radiusY, rotation ), ellipse( center, radiusX, radiusY, rotation ), and ellipse( radiusX, radiusY, rotation )
with the center default to 0,0 and rotation of 0.  The rotation is about the centerX, centerY.

#### ellipse( center : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span>, radiusX : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, radiusY : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, rotation : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Shape](../kite/Shape.md)</span> {: #ellipse data-toc-label='ellipse' }

#### ellipse( radiusX : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, radiusY : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, rotation : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Shape](../kite/Shape.md)</span> {: #ellipse data-toc-label='ellipse' }

#### ellipse( a : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, b : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, c : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, d? : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, e? : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Shape](../kite/Shape.md)</span> {: #ellipse data-toc-label='ellipse' }

#### arc( centerX : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, centerY : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, radius : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, startAngle : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, endAngle : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, anticlockwise? : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> ) : <span style="font-weight: 400;">[Shape](../kite/Shape.md)</span> {: #arc data-toc-label='arc' }

Supports both arc( centerX, centerY, radius, startAngle, endAngle, anticlockwise ) and arc( center, radius, startAngle, endAngle, anticlockwise )

@param radius - How far from the center the arc will be
@param startAngle - Angle (radians) of the start of the arc
@param endAngle - Angle (radians) of the end of the arc
@param [anticlockwise] - Decides which direction the arc takes around the center

#### arc( center : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span>, radius : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, startAngle : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, endAngle : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, anticlockwise? : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> ) : <span style="font-weight: 400;">[Shape](../kite/Shape.md)</span> {: #arc data-toc-label='arc' }

#### arc( a : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, b : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, c : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, d : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, e? : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span>, f? : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> ) : <span style="font-weight: 400;">[Shape](../kite/Shape.md)</span> {: #arc data-toc-label='arc' }

#### union( shapes : <span style="font-weight: 400;">[Shape](../kite/Shape.md)[]</span> ) : <span style="font-weight: 400;">[Shape](../kite/Shape.md)</span> {: #union data-toc-label='union' }

Returns the union of an array of shapes.

#### intersection( shapes : <span style="font-weight: 400;">[Shape](../kite/Shape.md)[]</span> ) : <span style="font-weight: 400;">[Shape](../kite/Shape.md)</span> {: #intersection data-toc-label='intersection' }

Returns the intersection of an array of shapes.

#### xor( shapes : <span style="font-weight: 400;">[Shape](../kite/Shape.md)[]</span> ) : <span style="font-weight: 400;">[Shape](../kite/Shape.md)</span> {: #xor data-toc-label='xor' }

Returns the xor of an array of shapes.

#### segments( segments : <span style="font-weight: 400;">[Segment](../kite/Segment.md)[]</span>, closed? : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> ) : <span style="font-weight: 400;">[Shape](../kite/Shape.md)</span> {: #segments data-toc-label='segments' }

Returns a new Shape constructed by appending a list of segments together.

#### fromGraph( graph : <span style="font-weight: 400;">[Graph](../kite/Shape.md#Graph)</span> ) : <span style="font-weight: 400;">[Shape](../kite/Shape.md)</span> {: #fromGraph data-toc-label='fromGraph' }

Returns a Shape that creates a subpath for each filled face (with the desired holes).

Generally should be called on a graph created with createFilledSubGraph().

#### fromSegment( segment : <span style="font-weight: 400;">[Segment](../kite/Segment.md)</span> ) : <span style="font-weight: 400;">[Shape](../kite/Shape.md)</span> {: #fromSegment data-toc-label='fromSegment' }

### Static Properties

#### rect {: #rect data-toc-label='rect' }

#### roundRectangle {: #roundRectangle data-toc-label='roundRectangle' }



## Type CornerRadiiOptions {: #CornerRadiiOptions }


```js
import type { CornerRadiiOptions } from 'scenerystack/kite';
```


- **topLeft**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **topRight**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **bottomRight**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **bottomLeft**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>




## Class Graph {: #Graph }


A multigraph whose edges are segments.

Supports general shape simplification, overlap/intersection removal and computation. General output would include
Shapes (from CAG - Constructive Area Geometry) and triangulations.

See Graph.binaryResult for the general procedure for CAG.

TODO: Use https://github.com/mauriciosantos/Buckets-JS for priority queue, implement simple sweep line https://github.com/phetsims/kite/issues/76
      with "enters" and "leaves" entries in the queue. When edge removed, remove "leave" from queue.
      and add any replacement edges. Applies to overlap and intersection handling.
      NOTE: This should impact performance a lot, as we are currently over-scanning and re-scanning a lot.
      Intersection is currently (by far?) the performance bottleneck.
TODO: Collapse non-Line adjacent edges together. Similar logic to overlap for each segment time, hopefully can
      factor this out.
TODO: Properly handle sorting edges around a vertex when two edges have the same tangent out. We'll need to use
      curvature, or do tricks to follow both curves by an 'epsilon' and sort based on that.
TODO: Consider separating out epsilon values (may be a general Kite thing rather than just ops)
TODO: Loop-Blinn output and constrained Delaunay triangulation

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

```js
import { Graph } from 'scenerystack/kite';
```
### Constructor

#### new Graph() {: #Graph-Graph-constructor data-toc-label='new Graph-Graph' }

### Instance Methods

#### serialize() : <span style="font-weight: 400;">[SerializedGraph](../kite/Shape.md#SerializedGraph)</span> {: #Graph-serialize data-toc-label='Graph-serialize' }

Returns an object form that can be turned back into a segment with the corresponding deserialize method.

#### addShape( shapeId : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, shape : <span style="font-weight: 400;">[Shape](../kite/Shape.md)</span>, options? : <span style="font-weight: 400;">[GraphAddOptions](../kite/Shape.md#GraphAddOptions)</span> ) {: #Graph-addShape data-toc-label='Graph-addShape' }

Adds a Shape (with a given ID for CAG purposes) to the graph.

@param shapeId - The ID which should be shared for all paths/shapes that should be combined with
                 respect to the winding number of faces. For CAG, independent shapes should be given
                 different IDs (so they have separate winding numbers recorded).

#### addSubpath( shapeId : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, subpath : <span style="font-weight: 400;">[Subpath](../kite/Subpath.md)</span>, providedOptions? : <span style="font-weight: 400;">[GraphAddOptions](../kite/Shape.md#GraphAddOptions)</span> ) {: #Graph-addSubpath data-toc-label='Graph-addSubpath' }

Adds a subpath of a Shape (with a given ID for CAG purposes) to the graph.

@param shapeId - See addShape() documentation

#### computeSimplifiedFaces() {: #Graph-computeSimplifiedFaces data-toc-label='Graph-computeSimplifiedFaces' }

Simplifies edges/vertices, computes boundaries and faces (with the winding map).

#### computeFaceInclusion( windingMapFilter : <span style="font-weight: 400;">( windingMap: Record&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>, <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>&gt; ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> ) {: #Graph-computeFaceInclusion data-toc-label='Graph-computeFaceInclusion' }

Sets whether each face should be filled or unfilled based on a filter function.

The windingMapFilter will be called on each face's winding map, and will use the return value as whether the face
is filled or not.

The winding map is an {Object} associated with each face that has a key for every shapeId that was used in
addShape/addSubpath, and the value for those keys is the winding number of the face given all paths with the
shapeId.

For example, imagine you added two shapeIds (0 and 1), and the iteration is on a face that is included in
one loop specified with shapeId:0 (inside a counter-clockwise curve), and is outside of any segments specified
by the second loop (shapeId:1). Then the winding map will be:
{
  0: 1 // shapeId:0 has a winding number of 1 for this face (generally filled)
  1: 0 // shapeId:1 has a winding number of 0 for this face (generally not filled)
}

Generally, winding map filters can be broken down into two steps:
1. Given the winding number for each shapeId, compute whether that loop was originally filled. Normally, this is
   done with a non-zero rule (any winding number is filled, except zero). SVG also provides an even-odd rule
   (odd numbers are filled, even numbers are unfilled).
2. Given booleans for each shapeId from step 1, compute CAG operations based on boolean formulas. Say you wanted
   to take the union of shapeIds 0 and 1, then remove anything in shapeId 2. Given the booleans above, this can
   be directly computed as (filled0 || filled1) &amp;&amp; !filled2.

#### createFilledSubGraph() : <span style="font-weight: 400;">[Graph](../kite/Shape.md#Graph)</span> {: #Graph-createFilledSubGraph data-toc-label='Graph-createFilledSubGraph' }

Create a new Graph object based only on edges in this graph that separate a "filled" face from an "unfilled"
face.

This is a convenient way to "collapse" adjacent filled and unfilled faces together, and compute the curves and
holes properly, given a filled "normal" graph.

#### facesToShape() : <span style="font-weight: 400;">[Shape](../kite/Shape.md)</span> {: #Graph-facesToShape data-toc-label='Graph-facesToShape' }

Returns a Shape that creates a subpath for each filled face (with the desired holes).

Generally should be called on a graph created with createFilledSubGraph().

#### dispose() {: #Graph-dispose data-toc-label='Graph-dispose' }

Releases owned objects to their pools, and clears references that may have been picked up from external sources.

#### computeBoundaryTree() {: #Graph-computeBoundaryTree data-toc-label='Graph-computeBoundaryTree' }

Given the inner and outer boundaries, it computes a tree representation to determine what boundaries are
holes of what other boundaries, then sets up face holes with the result.

This information is stored in the childBoundaries array of Boundary, and is then read out to set up faces.

### Instance Properties

#### vertices : <span style="font-weight: 400;">[Vertex](../kite/Vertex.md)[]</span> {: #Graph-vertices data-toc-label='Graph-vertices' }

#### edges : <span style="font-weight: 400;">[Edge](../kite/Edge.md)[]</span> {: #Graph-edges data-toc-label='Graph-edges' }

#### innerBoundaries : <span style="font-weight: 400;">[Boundary](../kite/Boundary.md)[]</span> {: #Graph-innerBoundaries data-toc-label='Graph-innerBoundaries' }

#### outerBoundaries : <span style="font-weight: 400;">[Boundary](../kite/Boundary.md)[]</span> {: #Graph-outerBoundaries data-toc-label='Graph-outerBoundaries' }

#### boundaries : <span style="font-weight: 400;">[Boundary](../kite/Boundary.md)[]</span> {: #Graph-boundaries data-toc-label='Graph-boundaries' }

#### shapeIds : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>[]</span> {: #Graph-shapeIds data-toc-label='Graph-shapeIds' }

#### loops : <span style="font-weight: 400;">[Loop](../kite/Loop.md)[]</span> {: #Graph-loops data-toc-label='Graph-loops' }

#### unboundedFace : <span style="font-weight: 400;">[Face](../kite/Face.md)</span> {: #Graph-unboundedFace data-toc-label='Graph-unboundedFace' }

#### faces : <span style="font-weight: 400;">[Face](../kite/Face.md)[]</span> {: #Graph-faces data-toc-label='Graph-faces' }

### Static Methods

#### deserialize( obj : <span style="font-weight: 400;">[SerializedGraph](../kite/Shape.md#SerializedGraph)</span> ) : <span style="font-weight: 400;">[Graph](../kite/Shape.md#Graph)</span> {: #Graph-deserialize data-toc-label='Graph-deserialize' }

Recreate a Graph based on serialized state from serialize()

#### isInternal( point : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span>, t : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, segment : <span style="font-weight: 400;">[Segment](../kite/Segment.md)</span>, distanceThreshold : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, tThreshold : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #Graph-isInternal data-toc-label='Graph-isInternal' }

#### BINARY_NONZERO_UNION( windingMap : <span style="font-weight: 400;">Record&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>, <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>&gt;</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #Graph-BINARY_NONZERO_UNION data-toc-label='Graph-BINARY_NONZERO_UNION' }

"Union" binary winding map filter for use with Graph.binaryResult.

This combines both shapes together so that a point is in the resulting shape if it was in either of the input
shapes.

@param windingMap - See computeFaceInclusion for more details

#### BINARY_NONZERO_INTERSECTION( windingMap : <span style="font-weight: 400;">Record&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>, <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>&gt;</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #Graph-BINARY_NONZERO_INTERSECTION data-toc-label='Graph-BINARY_NONZERO_INTERSECTION' }

"Intersection" binary winding map filter for use with Graph.binaryResult.

This combines both shapes together so that a point is in the resulting shape if it was in both of the input
shapes.

@param windingMap - See computeFaceInclusion for more details

#### BINARY_NONZERO_DIFFERENCE( windingMap : <span style="font-weight: 400;">Record&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>, <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>&gt;</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #Graph-BINARY_NONZERO_DIFFERENCE data-toc-label='Graph-BINARY_NONZERO_DIFFERENCE' }

"Difference" binary winding map filter for use with Graph.binaryResult.

This combines both shapes together so that a point is in the resulting shape if it was in the first shape AND
was NOT in the second shape.

@param windingMap - See computeFaceInclusion for more details

#### BINARY_NONZERO_XOR( windingMap : <span style="font-weight: 400;">Record&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>, <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>&gt;</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #Graph-BINARY_NONZERO_XOR data-toc-label='Graph-BINARY_NONZERO_XOR' }

"XOR" binary winding map filter for use with Graph.binaryResult.

This combines both shapes together so that a point is in the resulting shape if it is only in exactly one of the
input shapes. It's like the union minus intersection.

@param windingMap - See computeFaceInclusion for more details

#### binaryResult( shapeA : <span style="font-weight: 400;">[Shape](../kite/Shape.md)</span>, shapeB : <span style="font-weight: 400;">[Shape](../kite/Shape.md)</span>, windingMapFilter : <span style="font-weight: 400;">( windingMap: Record&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>, <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>&gt; ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> ) : <span style="font-weight: 400;">[Shape](../kite/Shape.md)</span> {: #Graph-binaryResult data-toc-label='Graph-binaryResult' }

Returns the resulting Shape obtained by combining the two shapes given with the filter.

#### unionNonZero( shapes : <span style="font-weight: 400;">[Shape](../kite/Shape.md)[]</span> ) : <span style="font-weight: 400;">[Shape](../kite/Shape.md)</span> {: #Graph-unionNonZero data-toc-label='Graph-unionNonZero' }

Returns the union of an array of shapes.

#### intersectionNonZero( shapes : <span style="font-weight: 400;">[Shape](../kite/Shape.md)[]</span> ) : <span style="font-weight: 400;">[Shape](../kite/Shape.md)</span> {: #Graph-intersectionNonZero data-toc-label='Graph-intersectionNonZero' }

Returns the intersection of an array of shapes.

#### xorNonZero( shapes : <span style="font-weight: 400;">[Shape](../kite/Shape.md)[]</span> ) : <span style="font-weight: 400;">[Shape](../kite/Shape.md)</span> {: #Graph-xorNonZero data-toc-label='Graph-xorNonZero' }

Returns the xor of an array of shapes.

TODO: reduce code duplication? https://github.com/phetsims/kite/issues/76

#### simplifyNonZero( shape : <span style="font-weight: 400;">[Shape](../kite/Shape.md)</span> ) : <span style="font-weight: 400;">[Shape](../kite/Shape.md)</span> {: #Graph-simplifyNonZero data-toc-label='Graph-simplifyNonZero' }

Returns a simplified Shape obtained from running it through the simplification steps with non-zero output.

#### clipShape( clipAreaShape : <span style="font-weight: 400;">[Shape](../kite/Shape.md)</span>, shape : <span style="font-weight: 400;">[Shape](../kite/Shape.md)</span>, providedOptions? : <span style="font-weight: 400;">[GraphClipOptions](../kite/Shape.md#GraphClipOptions)</span> ) : <span style="font-weight: 400;">[Shape](../kite/Shape.md)</span> {: #Graph-clipShape data-toc-label='Graph-clipShape' }

Returns a clipped version of `shape` that contains only the parts that are within the area defined by
`clipAreaShape`



## Type GraphAddOptions {: #GraphAddOptions }


```js
import type { GraphAddOptions } from 'scenerystack/kite';
```


- **ensureClosed**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>




## Type GraphClipOptions {: #GraphClipOptions }


```js
import type { GraphClipOptions } from 'scenerystack/kite';
```


- **includeExterior**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
<br>  Respectively whether segments should be in the returned shape if they are in the exterior of the
  clipAreaShape (outside), on the boundary, or in the interior.
- **includeBoundary**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
- **includeInterior**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>




## Type NonlinearTransformedOptions {: #NonlinearTransformedOptions }


```js
import type { NonlinearTransformedOptions } from 'scenerystack/kite';
```


- **includeCurvature**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
<br>  whether to include a default curveEpsilon (usually off by default)
- &amp; [PiecewiseLinearOptions](../kite/Segment.md#PiecewiseLinearOptions)




## Type SerializedGraph {: #SerializedGraph }


```js
import type { SerializedGraph } from 'scenerystack/kite';
```


- **type**: "[Graph](../kite/Shape.md#Graph)"
- **vertices**: [SerializedVertex](../kite/Vertex.md#SerializedVertex)[]
- **edges**: [SerializedEdge](../kite/Edge.md#SerializedEdge)[]
- **boundaries**: [SerializedBoundary](../kite/Boundary.md#SerializedBoundary)[]
- **innerBoundaries**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>[]
- **outerBoundaries**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>[]
- **shapeIds**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>[]
- **loops**: [SerializedLoop](../kite/Loop.md#SerializedLoop)[]
- **unboundedFace**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **faces**: [SerializedFace](../kite/Face.md#SerializedFace)[]




## Type SerializedShape {: #SerializedShape }


a normalized vector for non-zero winding checks
var weirdDir = v( Math.PI, 22 / 7 );

```js
import type { SerializedShape } from 'scenerystack/kite';
```


- **type**: "[Shape](../kite/Shape.md)"
- **subpaths**: [SerializedSubpath](../kite/Subpath.md#SerializedSubpath)[]




## Source Code

See the source for [Shape.ts](https://github.com/phetsims/kite/blob/main/js/Shape.ts) in the [kite](https://github.com/phetsims/kite) repository.
