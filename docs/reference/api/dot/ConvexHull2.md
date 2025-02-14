# ConvexHull2

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/dot/blob/main/js/ConvexHull2.ts](https://github.com/phetsims/dot/blob/main/js/ConvexHull2.ts) for the most up-to-date information.

## Overview

Construction of 2D convex hulls from a list of points.

For example:
<div id="sandbox-0" class="sandbox-example"></div><script type="module" async>
import { createSandbox } from "/js/createSandbox.js";

createSandbox( "sandbox-0", ( scene, stepEmitter, display ) => {
  const box = ( () => {
/*START*/
const points = [ ...Array( 50 ).keys() ].map( () => {
  return new Vector2( 5 + ( 256 - 10 ) * Math.random(), 5 + ( 128 - 10 ) * Math.random() );
} );
const hullPoints = ConvexHull2.grahamScan( points, false );
/*END*/

const content = new Node( {
  children: [
    new Path( Shape.polygon( hullPoints ), { fill: '#eee', stroke: 'f00' } ),
    ...points.map( point => new Circle( 2, {
      fill: '#00f',
      translation: point
    } ) )
  ]
} );

    return content;
  } )();
  scene.addChild( box );
}, {  } );
</script>

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;



## Source Code

See the source for [ConvexHull2.ts](https://github.com/phetsims/dot/blob/main/js/ConvexHull2.ts) in the [dot](https://github.com/phetsims/dot) repository.
