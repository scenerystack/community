# SVGBlock

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/scenery/blob/main/js/display/SVGBlock.js](https://github.com/phetsims/scenery/blob/main/js/display/SVGBlock.js) for the most up-to-date information.

## Overview

Handles a visual SVG layer of drawables.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class SVGBlock {: #SVGBlock }


```js
import { SVGBlock } from 'scenerystack/scenery';
```
### Constructor

#### new SVGBlock( display, renderer, transformRootInstance, filterRootInstance ) {: #SVGBlock-constructor data-toc-label='new SVGBlock' }

### Instance Methods

#### initialize( display, renderer, transformRootInstance, filterRootInstance ) {: #initialize data-toc-label='initialize' }

@public

@param {Display} display - the scenery Display this SVGBlock will appear in
@param {number} renderer - the bitmask for the renderer, see Renderer.js
@param {Instance} transformRootInstance - All transforms of this instance and its ancestors will already have been
                                          applied. This block will only be responsible for applying transforms of
                                          this instance's descendants.
@param {Instance} filterRootInstance - All filters (visibility/opacity/filters) of this instance and its ancestors
                                       will already have been applied. This block will only be responsible for
                                       applying filters of this instance's descendants.
@returns {FittedBlock}

#### onAddPaint( paint ) {: #onAddPaint data-toc-label='onAddPaint' }

Callback for paintCountMap's create
@private

@param {Paint} paint
@returns {SVGGradient|SVGPattern}

#### onRemovePaint( paint, svgPaint ) {: #onRemovePaint data-toc-label='onRemovePaint' }

Callback for paintCountMap's destroy
@private

@param {Paint} paint
@param {SVGGradient|SVGPattern} svgPaint

#### incrementPaint( paint ) {: #incrementPaint data-toc-label='incrementPaint' }

Increases our reference count for the specified {Paint}. If it didn't exist before, we'll add the SVG def to the
paint can be referenced by SVG id.
@public

@param {Paint} paint

#### decrementPaint( paint ) {: #decrementPaint data-toc-label='decrementPaint' }

Decreases our reference count for the specified {Paint}. If this was the last reference, we'll remove the SVG def
from our SVG tree to prevent memory leaks, etc.
@public

@param {Paint} paint

#### markDirtyGradient( gradient ) {: #markDirtyGradient data-toc-label='markDirtyGradient' }

@public

@param {SVGGradient} gradient

#### markDirtyGroup( block ) {: #markDirtyGroup data-toc-label='markDirtyGroup' }

@public

@param {Block} block

#### markDirtyDrawable( drawable ) {: #markDirtyDrawable data-toc-label='markDirtyDrawable' }

@public

@param {Drawable} drawable

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

#### reduceReferences() {: #reduceReferences data-toc-label='reduceReferences' }

Looks to remove dirty objects that may have been disposed.
See https://github.com/phetsims/energy-forms-and-changes/issues/356
@public

@public

#### dispose() {: #dispose data-toc-label='dispose' }

Releases references
@public

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

#### toString() {: #toString data-toc-label='toString' }

Returns a string form of this object
@public

@returns {string}



## Source Code

See the source for [SVGBlock.js](https://github.com/phetsims/scenery/blob/main/js/display/SVGBlock.js) in the [scenery](https://github.com/phetsims/scenery) repository.
