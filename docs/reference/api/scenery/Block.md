# Block

## Overview

A specialized drawable for a layer of drawables with the same renderer (basically, it's a Canvas element, SVG
element, or some type of DOM container). Doesn't strictly have to have its DOM element used directly (Canvas block
used for caches).  This type is abstract, and meant to be subclassed.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class Block {: #Block }


```js
import { Block } from 'scenerystack/scenery';
```
### Instance Methods

#### initialize( display, renderer ) {: #initialize data-toc-label='initialize' }

@public

@param {Display} display
@param {number} renderer

#### dispose() {: #dispose data-toc-label='dispose' }

Releases references
@public
@override

#### addDrawable( drawable ) {: #addDrawable data-toc-label='addDrawable' }

Adds a drawable to this block.
@public

@param {Drawable} drawable

#### removeDrawable( drawable ) {: #removeDrawable data-toc-label='removeDrawable' }

Removes a drawable from this block.
@public

@param {Drawable} drawable

#### onIntervalChange( firstDrawable, lastDrawable ) {: #onIntervalChange data-toc-label='onIntervalChange' }

@protected

@param {Drawable} firstDrawable
@param {Drawable} lastDrawable

#### updateInterval() {: #updateInterval data-toc-label='updateInterval' }

@public

#### notifyInterval( firstDrawable, lastDrawable ) {: #notifyInterval data-toc-label='notifyInterval' }

@public

@param {Drawable} firstDrawable
@param {Drawable} lastDrawable

#### audit( allowPendingBlock, allowPendingList, allowDirty ) {: #audit data-toc-label='audit' }

Runs checks on the drawable, based on certain flags.
@public
@override

@param {boolean} allowPendingBlock
@param {boolean} allowPendingList
@param {boolean} allowDirty



## Source Code

See the source for [Block.js](https://github.com/phetsims/scenery/blob/main/js/display/Block.js) in the [scenery](https://github.com/phetsims/scenery) repository.
