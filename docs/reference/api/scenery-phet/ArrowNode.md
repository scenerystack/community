# ArrowNode

## Overview

A single- or double-headed arrow. This is a convenience class, most of the work is done in ArrowShape.

@author John Blanco
@author Chris Malley (PixelZoom, Inc.)
@author Aaron Davis
@author Sam Reid (PhET Interactive Simulations)

## Class ArrowNode {: #ArrowNode }


```js
import { ArrowNode } from 'scenerystack/scenery-phet';
```
### Constructor

#### new ArrowNode( tailX : <span style="font-weight: 400; opacity: 80%;">number</span>, tailY : <span style="font-weight: 400; opacity: 80%;">number</span>, tipX : <span style="font-weight: 400; opacity: 80%;">number</span>, tipY : <span style="font-weight: 400; opacity: 80%;">number</span>, providedOptions? : <span style="font-weight: 400; opacity: 80%;">ArrowNodeOptions</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### setTailAndTip( tailX : <span style="font-weight: 400; opacity: 80%;">number</span>, tailY : <span style="font-weight: 400; opacity: 80%;">number</span>, tipX : <span style="font-weight: 400; opacity: 80%;">number</span>, tipY : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #setTailAndTip data-toc-label='setTailAndTip' }

Sets the tail and tip positions to update the arrow shape.
If the tail and tip are at the same point, the arrow is not shown.

#### setTail( tailX : <span style="font-weight: 400; opacity: 80%;">number</span>, tailY : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #setTail data-toc-label='setTail' }

Sets the tail position.

#### setTip( tipX : <span style="font-weight: 400; opacity: 80%;">number</span>, tipY : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #setTip data-toc-label='setTip' }

Sets the tip position.

#### setTailWidth( tailWidth : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #setTailWidth data-toc-label='setTailWidth' }

Sets the tail width.

#### setDoubleHead( doubleHead : <span style="font-weight: 400; opacity: 80%;">boolean</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #setDoubleHead data-toc-label='setDoubleHead' }

Sets whether the arrow has one or two heads.



## Source Code

See the source for [ArrowNode.ts](https://github.com/phetsims/scenery-phet/blob/main/js/ArrowNode.ts) in the [scenery-phet](https://github.com/phetsims/scenery-phet) repository.
