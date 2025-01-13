# Shape

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

#### new Shape( subpaths? : <span style="font-weight: 400; opacity: 80%;">Subpath[] | string</span>, bounds? : <span style="font-weight: 400; opacity: 80%;">Bounds2</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### moveTo( x : <span style="font-weight: 400; opacity: 80%;">number</span>, y : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">this</span> {: #moveTo data-toc-label='moveTo' }

Moves to a point given by the coordinates x and y

#### moveToRelative( x : <span style="font-weight: 400; opacity: 80%;">number</span>, y : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">this</span> {: #moveToRelative data-toc-label='moveToRelative' }

Moves a relative displacement (x,y) from last point

#### moveToPointRelative( displacement : <span style="font-weight: 400; opacity: 80%;">Vector2</span> ) : <span style="font-weight: 400; opacity: 80%;">this</span> {: #moveToPointRelative data-toc-label='moveToPointRelative' }

Moves a relative displacement (point) from last point

#### moveToPoint( point : <span style="font-weight: 400; opacity: 80%;">Vector2</span> ) : <span style="font-weight: 400; opacity: 80%;">this</span> {: #moveToPoint data-toc-label='moveToPoint' }

Adds to this shape a subpath that moves (no joint) it to a point

#### lineTo( x : <span style="font-weight: 400; opacity: 80%;">number</span>, y : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">this</span> {: #lineTo data-toc-label='lineTo' }

Adds to this shape a straight line from last point to the coordinate (x,y)

#### lineToRelative( x : <span style="font-weight: 400; opacity: 80%;">number</span>, y : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">this</span> {: #lineToRelative data-toc-label='lineToRelative' }

Adds to this shape a straight line displaced by a relative amount x, and y from last point

@param x - horizontal displacement
@param y - vertical displacement

#### lineToPointRelative( displacement : <span style="font-weight: 400; opacity: 80%;">Vector2</span> ) : <span style="font-weight: 400; opacity: 80%;">this</span> {: #lineToPointRelative data-toc-label='lineToPointRelative' }

Adds to this shape a straight line displaced by a relative displacement (point)

#### lineToPoint( point : <span style="font-weight: 400; opacity: 80%;">Vector2</span> ) : <span style="font-weight: 400; opacity: 80%;">this</span> {: #lineToPoint data-toc-label='lineToPoint' }

Adds to this shape a straight line from this lastPoint to point

#### horizontalLineTo( x : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">this</span> {: #horizontalLineTo data-toc-label='horizontalLineTo' }

Adds a horizontal line (x represents the x-coordinate of the end point)

#### horizontalLineToRelative( x : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">this</span> {: #horizontalLineToRelative data-toc-label='horizontalLineToRelative' }

Adds a horizontal line (x represent a horizontal displacement)

#### verticalLineTo( y : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">this</span> {: #verticalLineTo data-toc-label='verticalLineTo' }

Adds a vertical line (y represents the y-coordinate of the end point)

#### verticalLineToRelative( y : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">this</span> {: #verticalLineToRelative data-toc-label='verticalLineToRelative' }

Adds a vertical line (y represents a vertical displacement)

#### zigZagTo( endX : <span style="font-weight: 400; opacity: 80%;">number</span>, endY : <span style="font-weight: 400; opacity: 80%;">number</span>, amplitude : <span style="font-weight: 400; opacity: 80%;">number</span>, numberZigZags : <span style="font-weight: 400; opacity: 80%;">number</span>, symmetrical : <span style="font-weight: 400; opacity: 80%;">boolean</span> ) : <span style="font-weight: 400; opacity: 80%;">this</span> {: #zigZagTo data-toc-label='zigZagTo' }

Zig-zags between the current point and the specified point

@param endX - the end of the shape
@param endY - the end of the shape
@param amplitude - the vertical amplitude of the zig zag wave
@param numberZigZags - the number of oscillations
@param symmetrical - flag for drawing a symmetrical zig zag

#### zigZagToPoint( endPoint : <span style="font-weight: 400; opacity: 80%;">Vector2</span>, amplitude : <span style="font-weight: 400; opacity: 80%;">number</span>, numberZigZags : <span style="font-weight: 400; opacity: 80%;">number</span>, symmetrical : <span style="font-weight: 400; opacity: 80%;">boolean</span> ) : <span style="font-weight: 400; opacity: 80%;">this</span> {: #zigZagToPoint data-toc-label='zigZagToPoint' }

Zig-zags between the current point and the specified point.
Implementation moved from circuit-construction-kit-common on April 22, 2019.

@param endPoint - the end of the shape
@param amplitude - the vertical amplitude of the zig zag wave, signed to choose initial direction
@param numberZigZags - the number of complete oscillations
@param symmetrical - flag for drawing a symmetrical zig zag

#### quadraticCurveTo( cpx : <span style="font-weight: 400; opacity: 80%;">number</span>, cpy : <span style="font-weight: 400; opacity: 80%;">number</span>, x : <span style="font-weight: 400; opacity: 80%;">number</span>, y : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">this</span> {: #quadraticCurveTo data-toc-label='quadraticCurveTo' }

Adds a quadratic curve to this shape

The curve is guaranteed to pass through the coordinate (x,y) but does not pass through the control point

@param cpx - control point horizontal coordinate
@param cpy - control point vertical coordinate
@param x
@param y

#### quadraticCurveToRelative( cpx : <span style="font-weight: 400; opacity: 80%;">number</span>, cpy : <span style="font-weight: 400; opacity: 80%;">number</span>, x : <span style="font-weight: 400; opacity: 80%;">number</span>, y : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">this</span> {: #quadraticCurveToRelative data-toc-label='quadraticCurveToRelative' }

Adds a quadratic curve to this shape. The control and final points are specified as displacment from the last
point in this shape

@param cpx - control point horizontal coordinate
@param cpy - control point vertical coordinate
@param x - final x position of the quadratic curve
@param y - final y position of the quadratic curve

#### quadraticCurveToPointRelative( controlPoint : <span style="font-weight: 400; opacity: 80%;">Vector2</span>, point : <span style="font-weight: 400; opacity: 80%;">Vector2</span> ) : <span style="font-weight: 400; opacity: 80%;">this</span> {: #quadraticCurveToPointRelative data-toc-label='quadraticCurveToPointRelative' }

Adds a quadratic curve to this shape. The control and final points are specified as displacement from the
last point in this shape

@param controlPoint
@param point - the quadratic curve passes through this point

#### smoothQuadraticCurveTo( x : <span style="font-weight: 400; opacity: 80%;">number</span>, y : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">this</span> {: #smoothQuadraticCurveTo data-toc-label='smoothQuadraticCurveTo' }

Adds a quadratic curve to this shape. The quadratic curves passes through the x and y coordinate.
The shape should join smoothly with the previous subpaths

TODO: consider a rename to put 'smooth' farther back? https://github.com/phetsims/kite/issues/76

@param x - final x position of the quadratic curve
@param y - final y position of the quadratic curve

#### smoothQuadraticCurveToRelative( x : <span style="font-weight: 400; opacity: 80%;">number</span>, y : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">this</span> {: #smoothQuadraticCurveToRelative data-toc-label='smoothQuadraticCurveToRelative' }

Adds a quadratic curve to this shape. The quadratic curves passes through the x and y coordinate.
The shape should join smoothly with the previous subpaths

@param x - final x position of the quadratic curve
@param y - final y position of the quadratic curve

#### quadraticCurveToPoint( controlPoint : <span style="font-weight: 400; opacity: 80%;">Vector2</span>, point : <span style="font-weight: 400; opacity: 80%;">Vector2</span> ) : <span style="font-weight: 400; opacity: 80%;">this</span> {: #quadraticCurveToPoint data-toc-label='quadraticCurveToPoint' }

Adds a quadratic bezier curve to this shape.

@param controlPoint
@param point - the quadratic curve passes through this point

#### cubicCurveTo( cp1x : <span style="font-weight: 400; opacity: 80%;">number</span>, cp1y : <span style="font-weight: 400; opacity: 80%;">number</span>, cp2x : <span style="font-weight: 400; opacity: 80%;">number</span>, cp2y : <span style="font-weight: 400; opacity: 80%;">number</span>, x : <span style="font-weight: 400; opacity: 80%;">number</span>, y : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">this</span> {: #cubicCurveTo data-toc-label='cubicCurveTo' }

Adds a cubic bezier curve to this shape.

@param cp1x - control point 1,  horizontal coordinate
@param cp1y - control point 1,  vertical coordinate
@param cp2x - control point 2,  horizontal coordinate
@param cp2y - control point 2,  vertical coordinate
@param x - final x position of the cubic curve
@param y - final y position of the cubic curve

#### cubicCurveToRelative( cp1x : <span style="font-weight: 400; opacity: 80%;">number</span>, cp1y : <span style="font-weight: 400; opacity: 80%;">number</span>, cp2x : <span style="font-weight: 400; opacity: 80%;">number</span>, cp2y : <span style="font-weight: 400; opacity: 80%;">number</span>, x : <span style="font-weight: 400; opacity: 80%;">number</span>, y : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">this</span> {: #cubicCurveToRelative data-toc-label='cubicCurveToRelative' }

@param cp1x - control point 1,  horizontal displacement
@param cp1y - control point 1,  vertical displacement
@param cp2x - control point 2,  horizontal displacement
@param cp2y - control point 2,  vertical displacement
@param x - final horizontal displacement
@param y - final vertical displacment

#### cubicCurveToPointRelative( control1 : <span style="font-weight: 400; opacity: 80%;">Vector2</span>, control2 : <span style="font-weight: 400; opacity: 80%;">Vector2</span>, point : <span style="font-weight: 400; opacity: 80%;">Vector2</span> ) : <span style="font-weight: 400; opacity: 80%;">this</span> {: #cubicCurveToPointRelative data-toc-label='cubicCurveToPointRelative' }

@param control1 - control displacement  1
@param control2 - control displacement 2
@param point - final displacement

#### smoothCubicCurveTo( cp2x : <span style="font-weight: 400; opacity: 80%;">number</span>, cp2y : <span style="font-weight: 400; opacity: 80%;">number</span>, x : <span style="font-weight: 400; opacity: 80%;">number</span>, y : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">this</span> {: #smoothCubicCurveTo data-toc-label='smoothCubicCurveTo' }

@param cp2x - control point 2,  horizontal coordinate
@param cp2y - control point 2,  vertical coordinate
@param x
@param y

#### smoothCubicCurveToRelative( cp2x : <span style="font-weight: 400; opacity: 80%;">number</span>, cp2y : <span style="font-weight: 400; opacity: 80%;">number</span>, x : <span style="font-weight: 400; opacity: 80%;">number</span>, y : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">this</span> {: #smoothCubicCurveToRelative data-toc-label='smoothCubicCurveToRelative' }

@param cp2x - control point 2,  horizontal coordinate
@param cp2y - control point 2,  vertical coordinate
@param x
@param y

#### cubicCurveToPoint( control1 : <span style="font-weight: 400; opacity: 80%;">Vector2</span>, control2 : <span style="font-weight: 400; opacity: 80%;">Vector2</span>, point : <span style="font-weight: 400; opacity: 80%;">Vector2</span> ) : <span style="font-weight: 400; opacity: 80%;">this</span> {: #cubicCurveToPoint data-toc-label='cubicCurveToPoint' }

#### arc( centerX : <span style="font-weight: 400; opacity: 80%;">number</span>, centerY : <span style="font-weight: 400; opacity: 80%;">number</span>, radius : <span style="font-weight: 400; opacity: 80%;">number</span>, startAngle : <span style="font-weight: 400; opacity: 80%;">number</span>, endAngle : <span style="font-weight: 400; opacity: 80%;">number</span>, anticlockwise? : <span style="font-weight: 400; opacity: 80%;">boolean</span> ) : <span style="font-weight: 400; opacity: 80%;">this</span> {: #arc data-toc-label='arc' }

@param centerX - horizontal coordinate of the center of the arc
@param centerY - Center of the arc
@param radius - How far from the center the arc will be
@param startAngle - Angle (radians) of the start of the arc
@param endAngle - Angle (radians) of the end of the arc
@param [anticlockwise] - Decides which direction the arc takes around the center

#### arcPoint( center : <span style="font-weight: 400; opacity: 80%;">Vector2</span>, radius : <span style="font-weight: 400; opacity: 80%;">number</span>, startAngle : <span style="font-weight: 400; opacity: 80%;">number</span>, endAngle : <span style="font-weight: 400; opacity: 80%;">number</span>, anticlockwise? : <span style="font-weight: 400; opacity: 80%;">boolean</span> ) : <span style="font-weight: 400; opacity: 80%;">this</span> {: #arcPoint data-toc-label='arcPoint' }

@param center - Center of the arc (every point on the arc is equally far from the center)
@param radius - How far from the center the arc will be
@param startAngle - Angle (radians) of the start of the arc
@param endAngle - Angle (radians) of the end of the arc
@param [anticlockwise] - Decides which direction the arc takes around the center

#### ellipticalArc( centerX : <span style="font-weight: 400; opacity: 80%;">number</span>, centerY : <span style="font-weight: 400; opacity: 80%;">number</span>, radiusX : <span style="font-weight: 400; opacity: 80%;">number</span>, radiusY : <span style="font-weight: 400; opacity: 80%;">number</span>, rotation : <span style="font-weight: 400; opacity: 80%;">number</span>, startAngle : <span style="font-weight: 400; opacity: 80%;">number</span>, endAngle : <span style="font-weight: 400; opacity: 80%;">number</span>, anticlockwise? : <span style="font-weight: 400; opacity: 80%;">boolean</span> ) : <span style="font-weight: 400; opacity: 80%;">this</span> {: #ellipticalArc data-toc-label='ellipticalArc' }

Creates an elliptical arc

@param centerX - horizontal coordinate of the center of the arc
@param centerY -  vertical coordinate of the center of the arc
@param radiusX - semi axis
@param radiusY - semi axis
@param rotation - rotation of the elliptical arc with respect to the positive x axis.
@param startAngle
@param endAngle
@param [anticlockwise]

#### ellipticalArcPoint( center : <span style="font-weight: 400; opacity: 80%;">Vector2</span>, radiusX : <span style="font-weight: 400; opacity: 80%;">number</span>, radiusY : <span style="font-weight: 400; opacity: 80%;">number</span>, rotation : <span style="font-weight: 400; opacity: 80%;">number</span>, startAngle : <span style="font-weight: 400; opacity: 80%;">number</span>, endAngle : <span style="font-weight: 400; opacity: 80%;">number</span>, anticlockwise? : <span style="font-weight: 400; opacity: 80%;">boolean</span> ) : <span style="font-weight: 400; opacity: 80%;">this</span> {: #ellipticalArcPoint data-toc-label='ellipticalArcPoint' }

Creates an elliptic arc

@param center
@param radiusX
@param radiusY
@param rotation - rotation of the arc with respect to the positive x axis.
@param startAngle -
@param endAngle
@param [anticlockwise]

#### close() : <span style="font-weight: 400; opacity: 80%;">this</span> {: #close data-toc-label='close' }

Adds a subpath that joins the last point of this shape to the first point to form a closed shape


#### newSubpath() : <span style="font-weight: 400; opacity: 80%;">this</span> {: #newSubpath data-toc-label='newSubpath' }

Moves to the next subpath, but without adding any points to it (like a moveTo would do).

This is particularly helpful for cases where you don't want to have to compute the explicit starting point of
the next subpath. For instance, if you want three disconnected circles:
- shape.circle( 50, 50, 20 ).newSubpath().circle( 100, 100, 20 ).newSubpath().circle( 150, 50, 20 )

See https://github.com/phetsims/kite/issues/72 for more info.

#### makeImmutable() : <span style="font-weight: 400; opacity: 80%;">this</span> {: #makeImmutable data-toc-label='makeImmutable' }

Makes this Shape immutable, so that attempts to further change the Shape will fail. This allows clients to avoid
adding change listeners to this Shape.

#### isImmutable() : <span style="font-weight: 400; opacity: 80%;">boolean</span> {: #isImmutable data-toc-label='isImmutable' }

Returns whether this Shape is immutable (see makeImmutable for details).

#### ellipticalArcToRelative( radiusX : <span style="font-weight: 400; opacity: 80%;">number</span>, radiusY : <span style="font-weight: 400; opacity: 80%;">number</span>, rotation : <span style="font-weight: 400; opacity: 80%;">number</span>, largeArc : <span style="font-weight: 400; opacity: 80%;">boolean</span>, sweep : <span style="font-weight: 400; opacity: 80%;">boolean</span>, x : <span style="font-weight: 400; opacity: 80%;">number</span>, y : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">this</span> {: #ellipticalArcToRelative data-toc-label='ellipticalArcToRelative' }

Matches SVG's elliptical arc from http://www.w3.org/TR/SVG/paths.html

WARNING: rotation (for now) is in DEGREES. This will probably change in the future.

@param radiusX - Semi-major axis size
@param radiusY - Semi-minor axis size
@param rotation - Rotation of the ellipse (its semi-major axis)
@param largeArc - Whether the arc will go the longest route around the ellipse.
@param sweep - Whether the arc made goes from start to end "clockwise" (opposite of anticlockwise flag)
@param x - End point X position
@param y - End point Y position

#### ellipticalArcTo( radiusX : <span style="font-weight: 400; opacity: 80%;">number</span>, radiusY : <span style="font-weight: 400; opacity: 80%;">number</span>, rotation : <span style="font-weight: 400; opacity: 80%;">number</span>, largeArc : <span style="font-weight: 400; opacity: 80%;">boolean</span>, sweep : <span style="font-weight: 400; opacity: 80%;">boolean</span>, x : <span style="font-weight: 400; opacity: 80%;">number</span>, y : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">this</span> {: #ellipticalArcTo data-toc-label='ellipticalArcTo' }

Matches SVG's elliptical arc from http://www.w3.org/TR/SVG/paths.html

WARNING: rotation (for now) is in DEGREES. This will probably change in the future.

@param radiusX - Semi-major axis size
@param radiusY - Semi-minor axis size
@param rotation - Rotation of the ellipse (its semi-major axis)
@param largeArc - Whether the arc will go the longest route around the ellipse.
@param sweep - Whether the arc made goes from start to end "clockwise" (opposite of anticlockwise flag)
@param x - End point X position
@param y - End point Y position

#### circle( center : <span style="font-weight: 400; opacity: 80%;">Vector2</span>, radius : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">this</span> {: #circle data-toc-label='circle' }

Draws a circle using the arc() call

#### circle( centerX : <span style="font-weight: 400; opacity: 80%;">number</span>, centerY : <span style="font-weight: 400; opacity: 80%;">number</span>, radius : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">this</span> {: #circle data-toc-label='circle' }

#### circle( centerX : <span style="font-weight: 400; opacity: 80%;">Vector2 | number</span>, centerY : <span style="font-weight: 400; opacity: 80%;">number</span>, radius? : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">this</span> {: #circle data-toc-label='circle' }

#### ellipse( center : <span style="font-weight: 400; opacity: 80%;">Vector2</span>, radiusX : <span style="font-weight: 400; opacity: 80%;">number</span>, radiusY : <span style="font-weight: 400; opacity: 80%;">number</span>, rotation : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">this</span> {: #ellipse data-toc-label='ellipse' }

Draws an ellipse using the ellipticalArc() call

The rotation is about the centerX, centerY.

#### ellipse( centerX : <span style="font-weight: 400; opacity: 80%;">number</span>, centerY : <span style="font-weight: 400; opacity: 80%;">number</span>, radiusX : <span style="font-weight: 400; opacity: 80%;">number</span>, radiusY : <span style="font-weight: 400; opacity: 80%;">number</span>, rotation : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">this</span> {: #ellipse data-toc-label='ellipse' }

#### ellipse( centerX : <span style="font-weight: 400; opacity: 80%;">Vector2 | number</span>, centerY : <span style="font-weight: 400; opacity: 80%;">number</span>, radiusX : <span style="font-weight: 400; opacity: 80%;">number</span>, radiusY : <span style="font-weight: 400; opacity: 80%;">number</span>, rotation? : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">this</span> {: #ellipse data-toc-label='ellipse' }

#### rect( x : <span style="font-weight: 400; opacity: 80%;">number</span>, y : <span style="font-weight: 400; opacity: 80%;">number</span>, width : <span style="font-weight: 400; opacity: 80%;">number</span>, height : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">this</span> {: #rect data-toc-label='rect' }

Creates a rectangle shape

@param x - left position
@param y - bottom position (in non inverted cartesian system)
@param width
@param height

#### roundRect( x : <span style="font-weight: 400; opacity: 80%;">number</span>, y : <span style="font-weight: 400; opacity: 80%;">number</span>, width : <span style="font-weight: 400; opacity: 80%;">number</span>, height : <span style="font-weight: 400; opacity: 80%;">number</span>, arcw : <span style="font-weight: 400; opacity: 80%;">number</span>, arch : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">this</span> {: #roundRect data-toc-label='roundRect' }

Creates a round rectangle. All arguments are number.

@param x
@param y
@param width - width of the rectangle
@param height - height of the rectangle
@param arcw - arc width
@param arch - arc height

#### polygon( vertices : <span style="font-weight: 400; opacity: 80%;">Vector2[]</span> ) : <span style="font-weight: 400; opacity: 80%;">this</span> {: #polygon data-toc-label='polygon' }

Creates a polygon from an array of vertices.

#### cardinalSpline( positions : <span style="font-weight: 400; opacity: 80%;">Vector2[]</span>, providedOptions? : <span style="font-weight: 400; opacity: 80%;">CardinalSplineOptions</span> ) : <span style="font-weight: 400; opacity: 80%;">this</span> {: #cardinalSpline data-toc-label='cardinalSpline' }

This is a convenience function that allows to generate Cardinal splines
from a position array. Cardinal spline differs from Bezier curves in that all
defined points on a Cardinal spline are on the path itself.

It includes a tension parameter to allow the client to specify how tightly
the path interpolates between points. One can think of the tension as the tension in
a rubber band around pegs. however unlike a rubber band the tension can be negative.
the tension ranges from -1 to 1

#### copy() : <span style="font-weight: 400; opacity: 80%;">Shape</span> {: #copy data-toc-label='copy' }

Returns a copy of this shape

#### writeToContext( context : <span style="font-weight: 400; opacity: 80%;">CanvasRenderingContext2D</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #writeToContext data-toc-label='writeToContext' }

Writes out this shape's path to a canvas 2d context. does NOT include the beginPath()!

#### getSVGPath() : <span style="font-weight: 400; opacity: 80%;">string</span> {: #getSVGPath data-toc-label='getSVGPath' }

Returns something like "M150 0 L75 200 L225 200 Z" for a triangle (to be used with a SVG path element's 'd'
attribute)

#### transformed( matrix : <span style="font-weight: 400; opacity: 80%;">Matrix3</span> ) : <span style="font-weight: 400; opacity: 80%;">Shape</span> {: #transformed data-toc-label='transformed' }

Returns a new Shape that is transformed by the associated matrix

#### nonlinearTransformed( providedOptions? : <span style="font-weight: 400; opacity: 80%;">NonlinearTransformedOptions</span> ) : <span style="font-weight: 400; opacity: 80%;">Shape</span> {: #nonlinearTransformed data-toc-label='nonlinearTransformed' }

Converts this subpath to a new shape made of many line segments (approximating the current shape) with the
transformation applied.

#### polarToCartesian( options? : <span style="font-weight: 400; opacity: 80%;">NonlinearTransformedOptions</span> ) : <span style="font-weight: 400; opacity: 80%;">Shape</span> {: #polarToCartesian data-toc-label='polarToCartesian' }

Maps points by treating their x coordinate as polar angle, and y coordinate as polar magnitude.
See http://en.wikipedia.org/wiki/Polar_coordinate_system

Please see Shape.nonlinearTransformed for more documentation on adaptive discretization options (minLevels, maxLevels, distanceEpsilon, curveEpsilon)

Example: A line from (0,10) to (pi,10) will be transformed to a circular arc from (10,0) to (-10,0) passing through (0,10).

#### toPiecewiseLinear( options? : <span style="font-weight: 400; opacity: 80%;">NonlinearTransformedOptions</span> ) : <span style="font-weight: 400; opacity: 80%;">Shape</span> {: #toPiecewiseLinear data-toc-label='toPiecewiseLinear' }

Converts each segment into lines, using an adaptive (midpoint distance subdivision) method.

NOTE: uses nonlinearTransformed method internally, but since we don't provide a pointMap or methodName, it won't create anything but line segments.
See nonlinearTransformed for documentation of options

#### containsPoint( point : <span style="font-weight: 400; opacity: 80%;">Vector2</span> ) : <span style="font-weight: 400; opacity: 80%;">boolean</span> {: #containsPoint data-toc-label='containsPoint' }

Is this point contained in this shape

#### intersection( ray : <span style="font-weight: 400; opacity: 80%;">Ray2</span> ) : <span style="font-weight: 400; opacity: 80%;">RayIntersection[]</span> {: #intersection data-toc-label='intersection' }

Hit-tests this shape with the ray. An array of all intersections of the ray with this shape will be returned.
For this function, intersections will be returned sorted by the distance from the ray's position.

#### interiorIntersectsLineSegment( startPoint : <span style="font-weight: 400; opacity: 80%;">Vector2</span>, endPoint : <span style="font-weight: 400; opacity: 80%;">Vector2</span> ) : <span style="font-weight: 400; opacity: 80%;">boolean</span> {: #interiorIntersectsLineSegment data-toc-label='interiorIntersectsLineSegment' }

Returns whether the provided line segment would have some part on top or touching the interior (filled area) of
this shape.

This differs somewhat from an intersection of the line segment with the Shape's path, as we will return true
("intersection") if the line segment is entirely contained in the interior of the Shape's path.

@param startPoint - One end of the line segment
@param endPoint - The other end of the line segment

#### windingIntersection( ray : <span style="font-weight: 400; opacity: 80%;">Ray2</span> ) : <span style="font-weight: 400; opacity: 80%;">number</span> {: #windingIntersection data-toc-label='windingIntersection' }

Returns the winding number for intersection with a ray

#### intersectsBounds( bounds : <span style="font-weight: 400; opacity: 80%;">Bounds2</span> ) : <span style="font-weight: 400; opacity: 80%;">boolean</span> {: #intersectsBounds data-toc-label='intersectsBounds' }

Whether the path of the Shape intersects (or is contained in) the provided bounding box.
Computed by checking intersections with all four edges of the bounding box, or whether the Shape is totally
contained within the bounding box.

#### getStrokedShape( lineStyles : <span style="font-weight: 400; opacity: 80%;">LineStyles</span> ) : <span style="font-weight: 400; opacity: 80%;">Shape</span> {: #getStrokedShape data-toc-label='getStrokedShape' }

Returns a new Shape that is an outline of the stroked path of this current Shape. currently not intended to be
nested (doesn't do intersection computations yet)

TODO: rename stroked( lineStyles )? https://github.com/phetsims/kite/issues/76

#### getOffsetShape( distance : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">Shape</span> {: #getOffsetShape data-toc-label='getOffsetShape' }

Gets a shape offset by a certain amount.

#### getDashedShape( lineDash : <span style="font-weight: 400; opacity: 80%;">number[]</span>, lineDashOffset : <span style="font-weight: 400; opacity: 80%;">number</span>, providedOptions? : <span style="font-weight: 400; opacity: 80%;">GetDashedShapeOptions</span> ) : <span style="font-weight: 400; opacity: 80%;">Shape</span> {: #getDashedShape data-toc-label='getDashedShape' }

Returns a copy of this subpath with the dash "holes" removed (has many subpaths usually).

#### getBounds() : <span style="font-weight: 400; opacity: 80%;">Bounds2</span> {: #getBounds data-toc-label='getBounds' }

Returns the bounds of this shape. It is the bounding-box union of the bounds of each subpath contained.

#### getStrokedBounds( lineStyles : <span style="font-weight: 400; opacity: 80%;">LineStyles</span> ) : <span style="font-weight: 400; opacity: 80%;">Bounds2</span> {: #getStrokedBounds data-toc-label='getStrokedBounds' }

Returns the bounds for a stroked version of this shape. The input lineStyles are used to determine the size and
style of the stroke, and then the bounds of the stroked shape are returned.

#### getSimplifiedAreaShape() : <span style="font-weight: 400; opacity: 80%;">Shape</span> {: #getSimplifiedAreaShape data-toc-label='getSimplifiedAreaShape' }

Returns a simplified form of this shape.

Runs it through the normal CAG process, which should combine areas where possible, handles self-intersection,
etc.

NOTE: Currently (2017-10-04) adjacent segments may get simplified only if they are lines. Not yet complete.

#### getBoundsWithTransform( matrix : <span style="font-weight: 400; opacity: 80%;">Matrix3</span>, lineStyles? : <span style="font-weight: 400; opacity: 80%;">LineStyles</span> ) : <span style="font-weight: 400; opacity: 80%;">Bounds2</span> {: #getBoundsWithTransform data-toc-label='getBoundsWithTransform' }

#### getApproximateArea( numSamples : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">number</span> {: #getApproximateArea data-toc-label='getApproximateArea' }

Return an approximate value of the area inside of this Shape (where containsPoint is true) using Monte-Carlo.

NOTE: Generally, use getArea(). This can be used for verification, but takes a large number of samples.

@param numSamples - How many times to randomly check for inclusion of points.

#### getNonoverlappingArea() : <span style="font-weight: 400; opacity: 80%;">number</span> {: #getNonoverlappingArea data-toc-label='getNonoverlappingArea' }

Return the area inside the Shape (where containsPoint is true), assuming there is no self-intersection or
overlap, and the same orientation (winding order) is used. Should also support holes (with opposite orientation),
assuming they don't intersect the containing subpath.

#### getArea() : <span style="font-weight: 400; opacity: 80%;">number</span> {: #getArea data-toc-label='getArea' }

Returns the area inside the shape.

NOTE: This requires running it through a lot of computation to determine a non-overlapping non-self-intersecting
      form first. If the Shape is "simple" enough, getNonoverlappingArea would be preferred.

#### getApproximateCentroid( numSamples : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">Vector2</span> {: #getApproximateCentroid data-toc-label='getApproximateCentroid' }

Return the approximate location of the centroid of the Shape (the average of all points where containsPoint is true)
using Monte-Carlo methods.

@param numSamples - How many times to randomly check for inclusion of points.

#### getClosestPoints( point : <span style="font-weight: 400; opacity: 80%;">Vector2</span> ) : <span style="font-weight: 400; opacity: 80%;">ClosestToPointResult[]</span> {: #getClosestPoints data-toc-label='getClosestPoints' }

Returns an array of potential closest point results on the Shape to the given point.

#### getClosestPoint( point : <span style="font-weight: 400; opacity: 80%;">Vector2</span> ) : <span style="font-weight: 400; opacity: 80%;">Vector2</span> {: #getClosestPoint data-toc-label='getClosestPoint' }

Returns a single point ON the Shape boundary that is closest to the given point (picks an arbitrary one if there
are multiple).

#### invalidatePoints() : <span style="font-weight: 400; opacity: 80%;">void</span> {: #invalidatePoints data-toc-label='invalidatePoints' }

Should be called after mutating the x/y of Vector2 points that were passed in to various Shape calls, so that
derived information computed (bounds, etc.) will be correct, and any clients (e.g. Scenery Paths) will be
notified of the updates.

#### toString() : <span style="font-weight: 400; opacity: 80%;">string</span> {: #toString data-toc-label='toString' }

#### getLastPoint() : <span style="font-weight: 400; opacity: 80%;">Vector2</span> {: #getLastPoint data-toc-label='getLastPoint' }

Gets the last point in the last subpath, or null if it doesn't exist

#### shapeUnion( shape : <span style="font-weight: 400; opacity: 80%;">Shape</span> ) : <span style="font-weight: 400; opacity: 80%;">Shape</span> {: #shapeUnion data-toc-label='shapeUnion' }

Returns a new shape that contains a union of the two shapes (a point in either shape is in the resulting shape).

#### shapeIntersection( shape : <span style="font-weight: 400; opacity: 80%;">Shape</span> ) : <span style="font-weight: 400; opacity: 80%;">Shape</span> {: #shapeIntersection data-toc-label='shapeIntersection' }

Returns a new shape that contains the intersection of the two shapes (a point in both shapes is in the
resulting shape).

#### shapeDifference( shape : <span style="font-weight: 400; opacity: 80%;">Shape</span> ) : <span style="font-weight: 400; opacity: 80%;">Shape</span> {: #shapeDifference data-toc-label='shapeDifference' }

Returns a new shape that contains the difference of the two shapes (a point in the first shape and NOT in the
second shape is in the resulting shape).

#### shapeXor( shape : <span style="font-weight: 400; opacity: 80%;">Shape</span> ) : <span style="font-weight: 400; opacity: 80%;">Shape</span> {: #shapeXor data-toc-label='shapeXor' }

Returns a new shape that contains the xor of the two shapes (a point in only one shape is in the resulting
shape).

#### shapeClip( shape : <span style="font-weight: 400; opacity: 80%;">Shape</span>, options? : <span style="font-weight: 400; opacity: 80%;">{ includeExterior?: boolean; includeBoundary: boolean; includeInterior: boolean }</span> ) : <span style="font-weight: 400; opacity: 80%;">Shape</span> {: #shapeClip data-toc-label='shapeClip' }

Returns a new shape that only contains portions of segments that are within the passed-in shape's area.

// TODO: convert Graph to TS and get the types from there https://github.com/phetsims/kite/issues/76

#### getArcLength( distanceEpsilon? : <span style="font-weight: 400; opacity: 80%;">number</span>, curveEpsilon? : <span style="font-weight: 400; opacity: 80%;">number</span>, maxLevels? : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">number</span> {: #getArcLength data-toc-label='getArcLength' }

Returns the (sometimes approximate) arc length of all the shape's subpaths combined.

#### serialize() : <span style="font-weight: 400; opacity: 80%;">SerializedShape</span> {: #serialize data-toc-label='serialize' }

Returns an object form that can be turned back into a segment with the corresponding deserialize method.

### Instance Properties

#### subpaths : <span style="font-weight: 400; opacity: 80%;">Subpath[]</span> {: #subpaths data-toc-label='subpaths' }

(readonly)

Lower-level piecewise mathematical description using segments, also individually immutable

#### invalidatedEmitter : <span style="font-weight: 400; opacity: 80%;">TinyEmitter</span> {: #invalidatedEmitter data-toc-label='invalidatedEmitter' }

(readonly)

### Static Methods

#### deserialize( obj : <span style="font-weight: 400; opacity: 80%;">SerializedShape</span> ) : <span style="font-weight: 400; opacity: 80%;">Shape</span> {: #deserialize data-toc-label='deserialize' }

Returns a Shape from the serialized representation.

#### rectangle( x : <span style="font-weight: 400; opacity: 80%;">number</span>, y : <span style="font-weight: 400; opacity: 80%;">number</span>, width : <span style="font-weight: 400; opacity: 80%;">number</span>, height : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">Shape</span> {: #rectangle data-toc-label='rectangle' }

Creates a rectangle

#### roundRect( x : <span style="font-weight: 400; opacity: 80%;">number</span>, y : <span style="font-weight: 400; opacity: 80%;">number</span>, width : <span style="font-weight: 400; opacity: 80%;">number</span>, height : <span style="font-weight: 400; opacity: 80%;">number</span>, arcw : <span style="font-weight: 400; opacity: 80%;">number</span>, arch : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">Shape</span> {: #roundRect data-toc-label='roundRect' }

Creates a round rectangle {Shape}, with {number} arguments. Uses circular or elliptical arcs if given.

#### roundedRectangleWithRadii( x : <span style="font-weight: 400; opacity: 80%;">number</span>, y : <span style="font-weight: 400; opacity: 80%;">number</span>, width : <span style="font-weight: 400; opacity: 80%;">number</span>, height : <span style="font-weight: 400; opacity: 80%;">number</span>, cornerRadii? : <span style="font-weight: 400; opacity: 80%;">Partial&lt;CornerRadiiOptions&gt;</span> ) : <span style="font-weight: 400; opacity: 80%;">Shape</span> {: #roundedRectangleWithRadii data-toc-label='roundedRectangleWithRadii' }

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

#### boundsOffsetWithRadii( bounds : <span style="font-weight: 400; opacity: 80%;">Bounds2</span>, offsets : <span style="font-weight: 400; opacity: 80%;">OffsetsOptions</span>, radii? : <span style="font-weight: 400; opacity: 80%;">CornerRadiiOptions</span> ) : <span style="font-weight: 400; opacity: 80%;">Shape</span> {: #boundsOffsetWithRadii data-toc-label='boundsOffsetWithRadii' }

Returns a Shape from a bounds, offset (expanded) by certain amounts, and with certain corner radii.

#### polygon( vertices : <span style="font-weight: 400; opacity: 80%;">Vector2[]</span> ) : <span style="font-weight: 400; opacity: 80%;">Shape</span> {: #polygon data-toc-label='polygon' }

Creates a closed polygon from an array of vertices by connecting them by a series of lines.
The lines are joining the adjacent vertices in the array.

#### bounds( bounds : <span style="font-weight: 400; opacity: 80%;">Bounds2</span> ) : <span style="font-weight: 400; opacity: 80%;">Shape</span> {: #bounds data-toc-label='bounds' }

Creates a rectangular shape from bounds

#### lineSegment( x1 : <span style="font-weight: 400; opacity: 80%;">number</span>, y1 : <span style="font-weight: 400; opacity: 80%;">number</span>, x2 : <span style="font-weight: 400; opacity: 80%;">number</span>, y2 : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">Shape</span> {: #lineSegment data-toc-label='lineSegment' }

Creates a line segment, using either (x1,y1,x2,y2) or ({x1,y1},{x2,y2}) arguments

#### lineSegment( p1 : <span style="font-weight: 400; opacity: 80%;">Vector2</span>, p2 : <span style="font-weight: 400; opacity: 80%;">Vector2</span> ) : <span style="font-weight: 400; opacity: 80%;">Shape</span> {: #lineSegment data-toc-label='lineSegment' }

#### lineSegment( a : <span style="font-weight: 400; opacity: 80%;">Vector2 | number</span>, b : <span style="font-weight: 400; opacity: 80%;">Vector2 | number</span>, c? : <span style="font-weight: 400; opacity: 80%;">number</span>, d? : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">Shape</span> {: #lineSegment data-toc-label='lineSegment' }

#### regularPolygon( sides : <span style="font-weight: 400; opacity: 80%;">number</span>, radius : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">Shape</span> {: #regularPolygon data-toc-label='regularPolygon' }

Returns a regular polygon of radius and number of sides
The regular polygon is oriented such that the first vertex lies on the positive x-axis.

@param sides - an integer
@param radius

#### circle( centerX : <span style="font-weight: 400; opacity: 80%;">number</span>, centerY : <span style="font-weight: 400; opacity: 80%;">number</span>, radius : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">Shape</span> {: #circle data-toc-label='circle' }

Creates a circle
supports both circle( centerX, centerY, radius ), circle( center, radius ), and circle( radius ) with the center default to 0,0

#### circle( center : <span style="font-weight: 400; opacity: 80%;">Vector2</span>, radius : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">Shape</span> {: #circle data-toc-label='circle' }

#### circle( radius : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">Shape</span> {: #circle data-toc-label='circle' }

#### circle( a : <span style="font-weight: 400; opacity: 80%;">Vector2 | number</span>, b? : <span style="font-weight: 400; opacity: 80%;">number</span>, c? : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">Shape</span> {: #circle data-toc-label='circle' }

#### ellipse( centerX : <span style="font-weight: 400; opacity: 80%;">number</span>, centerY : <span style="font-weight: 400; opacity: 80%;">number</span>, radiusX : <span style="font-weight: 400; opacity: 80%;">number</span>, radiusY : <span style="font-weight: 400; opacity: 80%;">number</span>, rotation : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">Shape</span> {: #ellipse data-toc-label='ellipse' }

Supports ellipse( centerX, centerY, radiusX, radiusY, rotation ), ellipse( center, radiusX, radiusY, rotation ), and ellipse( radiusX, radiusY, rotation )
with the center default to 0,0 and rotation of 0.  The rotation is about the centerX, centerY.

#### ellipse( center : <span style="font-weight: 400; opacity: 80%;">Vector2</span>, radiusX : <span style="font-weight: 400; opacity: 80%;">number</span>, radiusY : <span style="font-weight: 400; opacity: 80%;">number</span>, rotation : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">Shape</span> {: #ellipse data-toc-label='ellipse' }

#### ellipse( radiusX : <span style="font-weight: 400; opacity: 80%;">number</span>, radiusY : <span style="font-weight: 400; opacity: 80%;">number</span>, rotation : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">Shape</span> {: #ellipse data-toc-label='ellipse' }

#### ellipse( a : <span style="font-weight: 400; opacity: 80%;">Vector2 | number</span>, b : <span style="font-weight: 400; opacity: 80%;">number</span>, c : <span style="font-weight: 400; opacity: 80%;">number</span>, d? : <span style="font-weight: 400; opacity: 80%;">number</span>, e? : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">Shape</span> {: #ellipse data-toc-label='ellipse' }

#### arc( centerX : <span style="font-weight: 400; opacity: 80%;">number</span>, centerY : <span style="font-weight: 400; opacity: 80%;">number</span>, radius : <span style="font-weight: 400; opacity: 80%;">number</span>, startAngle : <span style="font-weight: 400; opacity: 80%;">number</span>, endAngle : <span style="font-weight: 400; opacity: 80%;">number</span>, anticlockwise? : <span style="font-weight: 400; opacity: 80%;">boolean</span> ) : <span style="font-weight: 400; opacity: 80%;">Shape</span> {: #arc data-toc-label='arc' }

Supports both arc( centerX, centerY, radius, startAngle, endAngle, anticlockwise ) and arc( center, radius, startAngle, endAngle, anticlockwise )

@param radius - How far from the center the arc will be
@param startAngle - Angle (radians) of the start of the arc
@param endAngle - Angle (radians) of the end of the arc
@param [anticlockwise] - Decides which direction the arc takes around the center

#### arc( center : <span style="font-weight: 400; opacity: 80%;">Vector2</span>, radius : <span style="font-weight: 400; opacity: 80%;">number</span>, startAngle : <span style="font-weight: 400; opacity: 80%;">number</span>, endAngle : <span style="font-weight: 400; opacity: 80%;">number</span>, anticlockwise? : <span style="font-weight: 400; opacity: 80%;">boolean</span> ) : <span style="font-weight: 400; opacity: 80%;">Shape</span> {: #arc data-toc-label='arc' }

#### arc( a : <span style="font-weight: 400; opacity: 80%;">Vector2 | number</span>, b : <span style="font-weight: 400; opacity: 80%;">number</span>, c : <span style="font-weight: 400; opacity: 80%;">number</span>, d : <span style="font-weight: 400; opacity: 80%;">number</span>, e? : <span style="font-weight: 400; opacity: 80%;">number | boolean</span>, f? : <span style="font-weight: 400; opacity: 80%;">boolean</span> ) : <span style="font-weight: 400; opacity: 80%;">Shape</span> {: #arc data-toc-label='arc' }

#### union( shapes : <span style="font-weight: 400; opacity: 80%;">Shape[]</span> ) : <span style="font-weight: 400; opacity: 80%;">Shape</span> {: #union data-toc-label='union' }

Returns the union of an array of shapes.

#### intersection( shapes : <span style="font-weight: 400; opacity: 80%;">Shape[]</span> ) : <span style="font-weight: 400; opacity: 80%;">Shape</span> {: #intersection data-toc-label='intersection' }

Returns the intersection of an array of shapes.

#### xor( shapes : <span style="font-weight: 400; opacity: 80%;">Shape[]</span> ) : <span style="font-weight: 400; opacity: 80%;">Shape</span> {: #xor data-toc-label='xor' }

Returns the xor of an array of shapes.

#### segments( segments : <span style="font-weight: 400; opacity: 80%;">Segment[]</span>, closed? : <span style="font-weight: 400; opacity: 80%;">boolean</span> ) : <span style="font-weight: 400; opacity: 80%;">Shape</span> {: #segments data-toc-label='segments' }

Returns a new Shape constructed by appending a list of segments together.

### Static Properties

#### rect {: #rect data-toc-label='rect' }

#### roundRectangle {: #roundRectangle data-toc-label='roundRectangle' }



## Source Code

See the source for [Shape.ts](https://github.com/phetsims/kite/blob/main/js/Shape.ts) in the [kite](https://github.com/phetsims/kite) repository.
