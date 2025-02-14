# ImageWebGLDrawable

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/scenery/blob/main/js/display/drawables/ImageWebGLDrawable.js](https://github.com/phetsims/scenery/blob/main/js/display/drawables/ImageWebGLDrawable.js) for the most up-to-date information.

## Overview

WebGL drawable for Image nodes.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class ImageWebGLDrawable {: #ImageWebGLDrawable }


```js
import { ImageWebGLDrawable } from 'scenerystack/scenery';
```
### Instance Methods

#### initialize( renderer, instance ) {: #initialize data-toc-label='initialize' }

@public
@override

@param {number} renderer
@param {Instance} instance

#### onAddToBlock( webglBlock ) {: #onAddToBlock data-toc-label='onAddToBlock' }

@public

@param {WebGLBlock} webGLBlock

#### onRemoveFromBlock( webglBlock ) {: #onRemoveFromBlock data-toc-label='onRemoveFromBlock' }

@public

@param {WebGLBlock} webGLBlock

#### reserveSprite() {: #reserveSprite data-toc-label='reserveSprite' }

@private

#### unreserveSprite() {: #unreserveSprite data-toc-label='unreserveSprite' }

@private

#### markTransformDirty() {: #markTransformDirty data-toc-label='markTransformDirty' }

@public
@override

#### markPaintDirty() {: #markPaintDirty data-toc-label='markPaintDirty' }

A "catch-all" dirty method that directly marks the paintDirty flag and triggers propagation of dirty
information. This can be used by other mark* methods, or directly itself if the paintDirty flag is checked.
@public

It should be fired (indirectly or directly) for anything besides transforms that needs to make a drawable
dirty.

#### update() {: #update data-toc-label='update' }

Updates the DOM appearance of this drawable (whether by preparing/calling draw calls, DOM element updates, etc.)
@public
@override

@returns {boolean} - Whether the update should continue (if false, further updates in supertype steps should not
                     be done).



## Source Code

See the source for [ImageWebGLDrawable.js](https://github.com/phetsims/scenery/blob/main/js/display/drawables/ImageWebGLDrawable.js) in the [scenery](https://github.com/phetsims/scenery) repository.
