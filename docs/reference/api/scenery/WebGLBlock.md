# WebGLBlock

## Overview

Renders a visual layer of WebGL drawables.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;
@author Sam Reid (PhET Interactive Simulations)
@author Sharfudeen Ashraf (For Ghent University)

## Class WebGLBlock {: #WebGLBlock }


```js
import { WebGLBlock } from 'scenerystack/scenery';
```
### Constructor

#### new WebGLBlock( display, renderer, transformRootInstance, filterRootInstance ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### initialize( display, renderer, transformRootInstance, filterRootInstance ) {: #initialize data-toc-label='initialize' }

@public

@param {Display} display
@param {number} renderer
@param {Instance} transformRootInstance - All transforms of this instance and its ancestors will already have been
                                          applied. This block will only be responsible for applying transforms of
                                          this instance's descendants.
@param {Instance} filterRootInstance - All filters (visibility/opacity/filters) of this instance and its ancestors
                                       will already have been applied. This block will only be responsible for
                                       applying filters of this instance's descendants.
@returns {WebGLBlock} - For chaining

#### rebuildCanvas() {: #rebuildCanvas data-toc-label='rebuildCanvas' }

Forces a rebuild of the Canvas and its context (as long as a context can be obtained).
@private

This can be necessary when the browser won't restore our context that was lost (and we need to create another
canvas to get a valid context).

#### setupContext( gl ) {: #setupContext data-toc-label='setupContext' }

Takes a fresh WebGL context switches the WebGL block over to use it.
@private

@param {WebGLRenderingContext} gl

#### delayedRebuildCanvas() {: #delayedRebuildCanvas data-toc-label='delayedRebuildCanvas' }

Attempts to force a Canvas rebuild to get a new Canvas/context pair.
@private

#### onContextLoss( domEvent ) {: #onContextLoss data-toc-label='onContextLoss' }

Callback for whenever our WebGL context is lost.
@private

@param {WebGLContextEvent} domEvent

#### onContextRestoration( domEvent ) {: #onContextRestoration data-toc-label='onContextRestoration' }

Callback for whenever our WebGL context is restored.
@private

@param {WebGLContextEvent} domEvent

#### getContextFromCanvas( canvas ) {: #getContextFromCanvas data-toc-label='getContextFromCanvas' }

Attempts to get a WebGL context from a Canvas.
@private

@param {HTMLCanvasElement}
@returns {WebGLRenderingContext|*} - If falsy, it did not succeed.

#### setSizeFullDisplay() {: #setSizeFullDisplay data-toc-label='setSizeFullDisplay' }

@public
@override

#### setSizeFitBounds() {: #setSizeFitBounds data-toc-label='setSizeFitBounds' }

@public
@override

#### update() {: #update data-toc-label='update' }

Updates the DOM appearance of this drawable (whether by preparing/calling draw calls, DOM element updates, etc.)
@public
@override

@returns {boolean} - Whether the update should continue (if false, further updates in supertype steps should not
                     be done).

#### dispose() {: #dispose data-toc-label='dispose' }

Releases references
@public

#### markDirtyDrawable( drawable ) {: #markDirtyDrawable data-toc-label='markDirtyDrawable' }

@public

@param {Drawable} drawable

#### addDrawable( drawable ) {: #addDrawable data-toc-label='addDrawable' }

@public
@override

@param {Drawable} drawable

#### removeDrawable( drawable ) {: #removeDrawable data-toc-label='removeDrawable' }

@public
@override

@param {Drawable} drawable

#### addSpriteSheetImage( image, width, height ) {: #addSpriteSheetImage data-toc-label='addSpriteSheetImage' }

Ensures we have an allocated part of a SpriteSheet for this image. If a SpriteSheet already contains this image,
we'll just increase the reference count. Otherwise, we'll attempt to add it into one of our SpriteSheets. If
it doesn't fit, we'll add a new SpriteSheet and add the image to it.
@public

@param {HTMLImageElement | HTMLCanvasElement} image
@param {number} width
@param {number} height

@returns {Sprite} - Throws an error if we can't accommodate the image

#### removeSpriteSheetImage( sprite ) {: #removeSpriteSheetImage data-toc-label='removeSpriteSheetImage' }

Removes the reference to the sprite in our spritesheets.
@public

@param {Sprite} sprite

#### onIntervalChange( firstDrawable, lastDrawable ) {: #onIntervalChange data-toc-label='onIntervalChange' }

@public
@override

@param {Drawable} firstDrawable
@param {Drawable} lastDrawable

#### onPotentiallyMovedDrawable( drawable ) {: #onPotentiallyMovedDrawable data-toc-label='onPotentiallyMovedDrawable' }

@public

@param {Drawable} drawable

#### toString() {: #toString data-toc-label='toString' }

Returns a string form of this object
@public

@returns {string}



## Source Code

See the source for [WebGLBlock.js](https://github.com/phetsims/scenery/blob/main/js/display/WebGLBlock.js) in the [scenery](https://github.com/phetsims/scenery) repository.
