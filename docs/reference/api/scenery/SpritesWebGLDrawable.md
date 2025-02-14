# SpritesWebGLDrawable

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/scenery/blob/main/js/display/drawables/SpritesWebGLDrawable.js](https://github.com/phetsims/scenery/blob/main/js/display/drawables/SpritesWebGLDrawable.js) for the most up-to-date information.

## Overview

WebGL drawable for Sprites.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class SpritesWebGLDrawable {: #SpritesWebGLDrawable }


```js
import { SpritesWebGLDrawable } from 'scenerystack/scenery';
```
### Instance Methods

#### initialize( renderer, instance ) {: #initialize data-toc-label='initialize' }

@public
@override

@param {number} renderer
@param {Instance} instance

#### addSpriteImage( spriteImage ) {: #addSpriteImage data-toc-label='addSpriteImage' }

Adds a SpriteImage to our SpriteSheet.
@private

@param {SpriteImage} spriteImage

#### removeSpriteImage( spriteImage ) {: #removeSpriteImage data-toc-label='removeSpriteImage' }

Removes a SpriteImage from our SpriteSheet.
@private

@param {SpriteImage} spriteImage

#### onSpriteChange( newSpriteImage, oldSpriteImage ) {: #onSpriteChange data-toc-label='onSpriteChange' }

Called when a Sprite's SpriteImage changes.
@private

@param {SpriteImage} newSpriteImage
@param {SpriteImage} oldSpriteImage

#### setup() {: #setup data-toc-label='setup' }

Sets up everything with a new WebGL context

@private

#### onWebGLContextChange() {: #onWebGLContextChange data-toc-label='onWebGLContextChange' }

Callback for when the WebGL context changes. We'll reconstruct the painter.
@public

#### onAddToBlock( webGLBlock ) {: #onAddToBlock data-toc-label='onAddToBlock' }

Called when this drawable is added to a block.
@public

@param {WebGLBlock} webGLBlock

#### onRemoveFromBlock( webGLBlock ) {: #onRemoveFromBlock data-toc-label='onRemoveFromBlock' }

Called when this drawable is removed from a block.
@public

@param {WebGLBlock} webGLBlock

#### draw() {: #draw data-toc-label='draw' }

Draws the WebGL content.
@public

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

See the source for [SpritesWebGLDrawable.js](https://github.com/phetsims/scenery/blob/main/js/display/drawables/SpritesWebGLDrawable.js) in the [scenery](https://github.com/phetsims/scenery) repository.
