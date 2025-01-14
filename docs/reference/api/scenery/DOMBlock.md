# DOMBlock

## Overview

DOM Drawable wrapper for another DOM Drawable. Used so that we can have our own independent siblings, generally as part
of a Backbone's layers/blocks.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class DOMBlock {: #DOMBlock }


```js
import { DOMBlock } from 'scenerystack/scenery';
```
### Constructor

#### new DOMBlock( display, domDrawable ) {: #DOMBlock-constructor data-toc-label='new DOMBlock' }

### Instance Methods

#### initialize( display, domDrawable ) {: #initialize data-toc-label='initialize' }

@public

@param {Display} display
@param {Drawable} domDrawable
@returns {DOMBlock} - For chaining

#### update() {: #update data-toc-label='update' }

Updates the DOM appearance of this drawable (whether by preparing/calling draw calls, DOM element updates, etc.)
@public
@override

@returns {boolean} - Whether the update should continue (if false, further updates in supertype steps should not
                     be done).

#### dispose() {: #dispose data-toc-label='dispose' }

Releases references
@public
@override

#### markDirtyDrawable( drawable ) {: #markDirtyDrawable data-toc-label='markDirtyDrawable' }

@public

@param {Drawable} drawable

#### addDrawable( drawable ) {: #addDrawable data-toc-label='addDrawable' }

Adds a drawable to this block.
@public
@override

@param {Drawable} drawable

#### removeDrawable( drawable ) {: #removeDrawable data-toc-label='removeDrawable' }

Removes a drawable from this block.
@public
@override

@param {Drawable} drawable



## Source Code

See the source for [DOMBlock.js](https://github.com/phetsims/scenery/blob/main/js/display/DOMBlock.js) in the [scenery](https://github.com/phetsims/scenery) repository.
