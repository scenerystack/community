# RectangleCanvasDrawable

## Overview

Canvas drawable for Rectangle nodes.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class RectangleCanvasDrawable {: #RectangleCanvasDrawable }


```js
import { RectangleCanvasDrawable } from 'scenerystack/scenery';
```
### Instance Methods

#### writeRectangularPath( context, node ) {: #writeRectangularPath data-toc-label='writeRectangularPath' }

Convenience function for drawing a rectangular path (with our Rectangle node's parameters) to the Canvas context.
@private

@param {CanvasRenderingContext2D} context - To execute drawing commands on.
@param {Node} node - The node whose rectangle we want to draw

#### paintCanvas( wrapper, node, matrix ) {: #paintCanvas data-toc-label='paintCanvas' }

Paints this drawable to a Canvas (the wrapper contains both a Canvas reference and its drawing context).
@public

Assumes that the Canvas's context is already in the proper local coordinate frame for the node, and that any
other required effects (opacity, clipping, etc.) have already been prepared.

This is part of the CanvasSelfDrawable API required to be implemented for subtypes.

@param {CanvasContextWrapper} wrapper - Contains the Canvas and its drawing context
@param {scenery.Node} node - Our node that is being drawn
@param {Matrix3} matrix - The transformation matrix applied for this node's coordinate system.

#### markDirtyRectangle() {: #markDirtyRectangle data-toc-label='markDirtyRectangle' }

@public

#### markDirtyX() {: #markDirtyX data-toc-label='markDirtyX' }

@public

#### markDirtyY() {: #markDirtyY data-toc-label='markDirtyY' }

@public

#### markDirtyWidth() {: #markDirtyWidth data-toc-label='markDirtyWidth' }

@public

#### markDirtyHeight() {: #markDirtyHeight data-toc-label='markDirtyHeight' }

@public

#### markDirtyCornerXRadius() {: #markDirtyCornerXRadius data-toc-label='markDirtyCornerXRadius' }

@public

#### markDirtyCornerYRadius() {: #markDirtyCornerYRadius data-toc-label='markDirtyCornerYRadius' }

@public



## Source Code

See the source for [RectangleCanvasDrawable.js](https://github.com/phetsims/scenery/blob/main/js/display/drawables/RectangleCanvasDrawable.js) in the [scenery](https://github.com/phetsims/scenery) repository.
