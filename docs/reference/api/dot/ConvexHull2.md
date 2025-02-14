# ConvexHull2

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/dot/blob/main/js/ConvexHull2.ts](https://github.com/phetsims/dot/blob/main/js/ConvexHull2.ts) for the most up-to-date information.

## Overview

Construction of 2D convex hulls from a list of points.

For example:
#begin canvasExample grahamScan 256x128
#on
var points = _.range( 50 ).map( function() {
  return new phet.dot.Vector2( 5 + ( 256 - 10 ) * Math.random(), 5 + ( 128 - 10 ) * Math.random() );
} );
var hullPoints = phet.dot.ConvexHull2.grahamScan( points, false );
#off
context.beginPath();
hullPoints.forEach( function( point ) {
  context.lineTo( point.x, point.y );
} );
context.closePath();
context.fillStyle = '#eee';
context.fill();
context.strokeStyle = '#f00';
context.stroke();

context.beginPath();
points.forEach( function( point ) {
  context.arc( point.x, point.y, 2, 0, Math.PI * 2, false );
  context.closePath();
} );
context.fillStyle = '#00f';
context.fill();
#end canvasExample

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;



## Source Code

See the source for [ConvexHull2.ts](https://github.com/phetsims/dot/blob/main/js/ConvexHull2.ts) in the [dot](https://github.com/phetsims/dot) repository.
