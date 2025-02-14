# DOMSelfDrawable

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/scenery/blob/main/js/display/DOMSelfDrawable.js](https://github.com/phetsims/scenery/blob/main/js/display/DOMSelfDrawable.js) for the most up-to-date information.

## Overview

DOM drawable for a single painted node.

Subtypes should expose the following API that is used by DOMSelfDrawable:
- drawable.domElement {HTMLElement} - The primary DOM element that will get transformed and added.
- drawable.updateDOM() {function} - Called with no arguments in order to update the domElement's view.

TODO: make abstract subtype methods for improved documentation https://github.com/phetsims/scenery/issues/1581

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class DOMSelfDrawable {: #DOMSelfDrawable }


```js
import { DOMSelfDrawable } from 'scenerystack/scenery';
```
### Instance Methods

#### initialize( renderer, instance ) {: #initialize data-toc-label='initialize' }

@public
@override

@param {number} renderer
@param {Instance} instance
@returns {DOMSelfDrawable}

#### markTransformDirty() {: #markTransformDirty data-toc-label='markTransformDirty' }

@public

#### getTransformMatrix() {: #getTransformMatrix data-toc-label='getTransformMatrix' }

@public

Called from the Node, probably during updateDOM

@returns {Matrix3}

#### update() {: #update data-toc-label='update' }

Updates the DOM appearance of this drawable (whether by preparing/calling draw calls, DOM element updates, etc.)
@public
@override

@returns {boolean} - Whether the update should continue (if false, further updates in supertype steps should not
                     be done).

#### updateDOM() {: #updateDOM data-toc-label='updateDOM' }

Called to update the visual appearance of our domElement
@protected
@abstract

#### updateSelfVisibility() {: #updateSelfVisibility data-toc-label='updateSelfVisibility' }

@public
@override

#### dispose() {: #dispose data-toc-label='dispose' }

Releases references
@public
@override



## Source Code

See the source for [DOMSelfDrawable.js](https://github.com/phetsims/scenery/blob/main/js/display/DOMSelfDrawable.js) in the [scenery](https://github.com/phetsims/scenery) repository.
