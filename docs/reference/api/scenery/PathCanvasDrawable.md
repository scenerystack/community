# PathCanvasDrawable

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/scenery/blob/main/js/display/drawables/PathCanvasDrawable.js](https://github.com/phetsims/scenery/blob/main/js/display/drawables/PathCanvasDrawable.js) for the most up-to-date information.

## Overview

Canvas drawable for Path nodes.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class PathCanvasDrawable {: #PathCanvasDrawable }


```js
import { PathCanvasDrawable } from 'scenerystack/scenery';
```
### Instance Methods

#### paintCanvas( wrapper, node, matrix ) {: #paintCanvas data-toc-label='paintCanvas' }

Paints this drawable to a Canvas (the wrapper contains both a Canvas reference and its drawing context).
@public

Assumes that the Canvas's context is already in the proper local coordinate frame for the node, and that any
other required effects (opacity, clipping, etc.) have already been prepared.

This is part of the CanvasSelfDrawable API required to be implemented for subtypes.

@param {CanvasContextWrapper} wrapper - Contains the Canvas and its drawing context
@param {scenery.Node} node - Our node that is being drawn
@param {Matrix3} matrix - The transformation matrix applied for this node's coordinate system.

#### markDirtyShape() {: #markDirtyShape data-toc-label='markDirtyShape' }

@public



## Source Code

See the source for [PathCanvasDrawable.js](https://github.com/phetsims/scenery/blob/main/js/display/drawables/PathCanvasDrawable.js) in the [scenery](https://github.com/phetsims/scenery) repository.
