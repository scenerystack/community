# Plane

## Overview

A node which always fills the entire screen, no matter what the transform is.
Used for showing an overlay on the screen e.g., when a popup dialog is shown.
This can fade the background to focus on the dialog/popup as well as intercept mouse events for dismissing the dialog/popup.
Note: This is currently implemented using large numbers, it should be rewritten to work in any coordinate frame, possibly using phet.kite.Shape.plane()
TODO: Implement using infinite geometry https://github.com/phetsims/scenery/issues/1581

@author Sam Reid (PhET Interactive Simulations)

## Class Plane {: #Plane }


```js
import { Plane } from 'scenerystack/scenery';
```
### Constructor

#### new Plane( options? : <span style="font-weight: 400;">[PlaneOptions](../scenery/Plane.md#PlaneOptions)</span> ) {: #Plane-constructor data-toc-label='new Plane' }

### Instance Methods





## Type PlaneOptions {: #PlaneOptions }


```js
import type { PlaneOptions } from 'scenerystack/scenery';
```


[RectangleOptions](../scenery/Rectangle.md#RectangleOptions)



## Source Code

See the source for [Plane.ts](https://github.com/phetsims/scenery/blob/main/js/nodes/Plane.ts) in the [scenery](https://github.com/phetsims/scenery) repository.
