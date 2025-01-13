# RectangleWebGLDrawable

## Overview

WebGL drawable for Rectangle nodes.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class RectangleWebGLDrawable {: #RectangleWebGLDrawable }


```js
import { RectangleWebGLDrawable } from 'scenerystack/scenery';
```
### Instance Methods

#### initialize( renderer, instance ) {: #initialize data-toc-label='initialize' }

@public
@override

@param {number} renderer
@param {Instance} instance

#### onAddToBlock( webglBlock ) {: #onAddToBlock data-toc-label='onAddToBlock' }

@public

@param {WebGLBlock} webglBlock

#### onRemoveFromBlock( webglBlock ) {: #onRemoveFromBlock data-toc-label='onRemoveFromBlock' }

@public

@param {WebGLBlock} webglBlock

#### markTransformDirty() {: #markTransformDirty data-toc-label='markTransformDirty' }

@public
@override

#### update() {: #update data-toc-label='update' }

Updates the DOM appearance of this drawable (whether by preparing/calling draw calls, DOM element updates, etc.)
@public
@override

@returns {boolean} - Whether the update should continue (if false, further updates in supertype steps should not
                     be done).



## Source Code

See the source for [RectangleWebGLDrawable.js](https://github.com/phetsims/scenery/blob/main/js/display/drawables/RectangleWebGLDrawable.js) in the [scenery](https://github.com/phetsims/scenery) repository.
