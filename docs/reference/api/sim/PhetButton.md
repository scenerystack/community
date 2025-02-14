# PhetButton

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/joist/blob/main/js/PhetButton.ts](https://github.com/phetsims/joist/blob/main/js/PhetButton.ts) for the most up-to-date information.

## Overview

The button that pops up the PhET menu, which appears in the bottom right of the home screen and on the right side
of the navbar.

@author Sam Reid (PhET Interactive Simulations)
@author Michael Kauzmann (PhET Interactive Simulations)

## Class PhetButton {: #PhetButton }


```js
import { PhetButton } from 'scenerystack/sim';
```
### Constructor

#### new PhetButton( sim : <span style="font-weight: 400;">[Sim](../sim/Sim.md)</span>, backgroundFillProperty : <span style="font-weight: 400;">[TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;[Color](../scenery/Color.md)&gt;</span>, tandem : <span style="font-weight: 400;">[Tandem](../tandem/Tandem.md)</span> ) {: #PhetButton-constructor data-toc-label='new PhetButton' }

### Instance Methods



### Static Properties

#### PhetButtonIO : <span style="font-weight: 400;">[IOType](../tandem/IOType.md)</span> {: #PhetButtonIO data-toc-label='PhetButtonIO' }

(readonly)

PhET-iO Type for PhetButton, to interface with PhET-iO API.  The PhetButtonIO acts as the main phet-io branding/logo in
the sim. It doesn't inherit from NodeIO because we neither need all of NodeIO's API methods, nor do we want to
support maintaining overriding no-ops in this file see https://github.com/phetsims/scenery/issues/711 for more info.



## Source Code

See the source for [PhetButton.ts](https://github.com/phetsims/joist/blob/main/js/PhetButton.ts) in the [joist](https://github.com/phetsims/joist) repository.
