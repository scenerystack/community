# BackboneDrawable

## Overview

A DOM drawable (div element) that contains child blocks (and is placed in the main DOM tree when visible). It should
use z-index for properly ordering its blocks in the correct stacking order.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class BackboneDrawable {: #BackboneDrawable }


```js
import { BackboneDrawable } from 'scenerystack/scenery';
```
### Constructor

#### new BackboneDrawable( display, backboneInstance, transformRootInstance, renderer, isDisplayRoot ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### initialize( display, backboneInstance, transformRootInstance, renderer, isDisplayRoot ) {: #initialize data-toc-label='initialize' }

@public

@param {Display} display
@param {Instance} backboneInstance
@param {Instance} transformRootInstance
@param {number} renderer
@param {boolean} isDisplayRoot

#### dispose() {: #dispose data-toc-label='dispose' }

Releases references
@public

#### markBlocksForDisposal() {: #markBlocksForDisposal data-toc-label='markBlocksForDisposal' }

Dispose all of the blocks while clearing our references to them
@public

#### updateBackboneVisibility() {: #updateBackboneVisibility data-toc-label='updateBackboneVisibility' }

@private

#### markForDisposal( display ) {: #markForDisposal data-toc-label='markForDisposal' }

Marks this backbone for disposal.
@public
@override

NOTE: Should be called during syncTree

@param {Display} display

#### markDirtyDrawable( drawable ) {: #markDirtyDrawable data-toc-label='markDirtyDrawable' }

Marks a drawable as dirty.
@public

@param {Drawable} drawable

#### markTransformDirty() {: #markTransformDirty data-toc-label='markTransformDirty' }

Marks our transform as dirty.
@public

#### onFilterDirty() {: #onFilterDirty data-toc-label='onFilterDirty' }

Marks our opacity as dirty.
@private

#### onClipDirty() {: #onClipDirty data-toc-label='onClipDirty' }

Marks our clip as dirty.
@private

#### update() {: #update data-toc-label='update' }

Updates the DOM appearance of this drawable (whether by preparing/calling draw calls, DOM element updates, etc.)
@public
@override

@returns {boolean} - Whether the update should continue (if false, further updates in supertype steps should not
                     be done).

#### getFilterVisibility() {: #getFilterVisibility data-toc-label='getFilterVisibility' }

Returns the combined visibility of nodes "above us" that will need to be taken into account for displaying this
backbone.
@public

@returns {boolean}

#### getFilterClip() {: #getFilterClip data-toc-label='getFilterClip' }

Returns the combined clipArea (string???) for nodes "above us".
@public

@returns {string}

#### reindexBlocks() {: #reindexBlocks data-toc-label='reindexBlocks' }

Ensures that z-indices are strictly increasing, while trying to minimize the number of times we must change it
@public

#### stitch( firstDrawable, lastDrawable, firstChangeInterval, lastChangeInterval ) {: #stitch data-toc-label='stitch' }

Stitches multiple change intervals.
@public

@param {Drawable} firstDrawable
@param {Drawable} lastDrawable
@param {ChangeInterval} firstChangeInterval
@param {ChangeInterval} lastChangeInterval

#### audit( allowPendingBlock, allowPendingList, allowDirty ) {: #audit data-toc-label='audit' }

Runs checks on the drawable, based on certain flags.
@public
@override

@param {boolean} allowPendingBlock
@param {boolean} allowPendingList
@param {boolean} allowDirty

### Static Methods

#### createDivBackbone() {: #createDivBackbone data-toc-label='createDivBackbone' }

Creates a base DOM element for a backbone.
@public

@returns {HTMLDivElement}

#### repurposeBackboneContainer( element ) {: #repurposeBackboneContainer data-toc-label='repurposeBackboneContainer' }

Given an external element, we apply the necessary style to make it compatible as a backbone DOM element.
@public

@param {HTMLElement} element
@returns {HTMLElement} - For chaining



## Source Code

See the source for [BackboneDrawable.js](https://github.com/phetsims/scenery/blob/main/js/display/BackboneDrawable.js) in the [scenery](https://github.com/phetsims/scenery) repository.
