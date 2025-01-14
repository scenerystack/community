# CanvasBlock

## Overview

Handles a visual Canvas layer of drawables.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class CanvasBlock {: #CanvasBlock }


```js
import { CanvasBlock } from 'scenerystack/scenery';
```
### Constructor

#### new CanvasBlock( display, renderer, transformRootInstance, filterRootInstance ) {: #CanvasBlock-constructor data-toc-label='new CanvasBlock' }

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

#### applyClip( drawable ) {: #applyClip data-toc-label='applyClip' }

Reapplies clips to the current context. It's necessary to fully apply every clipping area for every ancestor,
due to how Canvas is set up. Should ideally be called when the clip is dirty.
@private

This is necessary since you can't apply "nested" clipping areas naively in Canvas, but you specify one entire
clip area.

@param {CanvasSelfDrawable} Drawable

#### pushWrapper() {: #pushWrapper data-toc-label='pushWrapper' }

Pushes a wrapper onto our stack (creating if necessary), and initializes.
@private

#### popWrapper() {: #popWrapper data-toc-label='popWrapper' }

Pops a wrapper off of our stack.
@private

#### walkDown( trail, branchIndex ) {: #walkDown data-toc-label='walkDown' }

Walk down towards the root, popping any clip/opacity effects that were needed.
@private

@param {Trail} trail
@param {number} branchIndex - The first index where our before and after trails have diverged.

#### walkUp( trail, branchIndex ) {: #walkUp data-toc-label='walkUp' }

Walk up towards the next leaf, pushing any clip/opacity effects that are needed.
@private

@param {Trail} trail
@param {number} branchIndex - The first index where our before and after trails have diverged.

#### renderDrawable( drawable ) {: #renderDrawable data-toc-label='renderDrawable' }

Draws the drawable into our main Canvas.
@private

For things like opacity/clipping, as part of this we walk up/down part of the instance tree for rendering each
drawable.

@param {CanvasSelfDrawable} - TODO: In the future, we'll need to support Canvas caches (this should be updated https://github.com/phetsims/scenery/issues/1581
                              with a proper generalized type)

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

See the source for [CanvasBlock.js](https://github.com/phetsims/scenery/blob/main/js/display/CanvasBlock.js) in the [scenery](https://github.com/phetsims/scenery) repository.
