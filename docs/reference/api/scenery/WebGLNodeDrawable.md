# WebGLNodeDrawable

## Overview

WebGL drawable for WebGLNode.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;
@author Sam Reid (PhET Interactive Simulations)

## Class WebGLNodeDrawable {: #WebGLNodeDrawable }


```js
import { WebGLNodeDrawable } from 'scenerystack/scenery';
```
### Instance Methods

#### initialize( renderer, instance ) {: #initialize data-toc-label='initialize' }

@public
@override

@param {number} renderer
@param {Instance} instance

#### createPainter() {: #createPainter data-toc-label='createPainter' }

Creates an instance of our Node's "painter" type.
@private

@returns {*} - Whatever node.painterType is will be the type.

#### onWebGLContextChange() {: #onWebGLContextChange data-toc-label='onWebGLContextChange' }

Callback for when the WebGL context changes. We'll reconstruct the painter.
@public

#### onAddToBlock( webGLBlock ) {: #onAddToBlock data-toc-label='onAddToBlock' }

@public

@param {WebGLBlock} webGLBlock

#### onRemoveFromBlock( webGLBlock ) {: #onRemoveFromBlock data-toc-label='onRemoveFromBlock' }

@public

@param {WebGLBlock} webGLBlock

#### draw() {: #draw data-toc-label='draw' }

@public

@returns {WebGLNode.PAINTED_NOTHING|WebGLNode.PAINTED_SOMETHING}

#### dispose() {: #dispose data-toc-label='dispose' }

Disposes the drawable.
@public
@override

#### markPaintDirty() {: #markPaintDirty data-toc-label='markPaintDirty' }

A "catch-all" dirty method that directly marks the paintDirty flag and triggers propagation of dirty
information. This can be used by other mark* methods, or directly itself if the paintDirty flag is checked.
@public

It should be fired (indirectly or directly) for anything besides transforms that needs to make a drawable
dirty.



## Source Code

See the source for [WebGLNodeDrawable.js](https://github.com/phetsims/scenery/blob/main/js/display/drawables/WebGLNodeDrawable.js) in the [scenery](https://github.com/phetsims/scenery) repository.
