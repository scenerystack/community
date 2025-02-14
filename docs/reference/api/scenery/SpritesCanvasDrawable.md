# SpritesCanvasDrawable

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/scenery/blob/main/js/display/drawables/SpritesCanvasDrawable.js](https://github.com/phetsims/scenery/blob/main/js/display/drawables/SpritesCanvasDrawable.js) for the most up-to-date information.

## Overview

Canvas drawable for Sprites nodes.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class SpritesCanvasDrawable {: #SpritesCanvasDrawable }


```js
import { SpritesCanvasDrawable } from 'scenerystack/scenery';
```
### Instance Methods

#### paintCanvas( wrapper, node, matrix ) {: #paintCanvas data-toc-label='paintCanvas' }

Paints this drawable to a Canvas (the wrapper contains both a Canvas reference and its drawing context).
@public

Assumes that the Canvas's context is already in the proper local coordinate frame for the node, and that any
other required effects (opacity, clipping, etc.) have already been prepared.

This is part of the CanvasSelfDrawable API required to be implemented for subtypes.

@param {CanvasContextWrapper} wrapper - Contains the Canvas and its drawing context
@param {Node} node - Our node that is being drawn
@param {Matrix3} matrix - The transformation matrix applied for this node's coordinate system.



## Source Code

See the source for [SpritesCanvasDrawable.js](https://github.com/phetsims/scenery/blob/main/js/display/drawables/SpritesCanvasDrawable.js) in the [scenery](https://github.com/phetsims/scenery) repository.
