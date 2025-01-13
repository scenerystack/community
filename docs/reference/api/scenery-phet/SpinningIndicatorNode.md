# SpinningIndicatorNode

## Overview

SpinningIndicatorNode is a spinning progress indicator, used to indicate operation is in progress (but with no
indication of how far along it is).  It spins in a circular clockwise pattern.

The actual rectangles/circles/etc. (called elements in the documentation) stay in fixed positions, but their fill is
changed to give the impression of rotation.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;
@author Chris Malley (PixelZoom, Inc.)

## Class SpinningIndicatorNode {: #SpinningIndicatorNode }


```js
import { SpinningIndicatorNode } from 'scenerystack/scenery-phet';
```
### Constructor

#### new SpinningIndicatorNode( providedOptions? : <span style="font-weight: 400; opacity: 80%;">SpinningIndicatorNodeOptions</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### step( dt : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #step data-toc-label='step' }

#### dispose() : <span style="font-weight: 400; opacity: 80%;">void</span> {: #dispose data-toc-label='dispose' }

### Static Methods

#### rectangleFactory( diameter : <span style="font-weight: 400; opacity: 80%;">number</span>, numberOfElements : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">Rectangle</span> {: #rectangleFactory data-toc-label='rectangleFactory' }

Factory method for creating rectangle-shaped elements, sized to fit.

#### circleFactory( diameter : <span style="font-weight: 400; opacity: 80%;">number</span>, numberOfElements : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">Circle</span> {: #circleFactory data-toc-label='circleFactory' }

Factory method for creating circle-shaped elements, sized to fit.



## Source Code

See the source for [SpinningIndicatorNode.ts](https://github.com/phetsims/scenery-phet/blob/main/js/SpinningIndicatorNode.ts) in the [scenery-phet](https://github.com/phetsims/scenery-phet) repository.
