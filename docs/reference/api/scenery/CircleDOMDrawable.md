# CircleDOMDrawable

## Overview

DOM drawable for Circle nodes.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class CircleDOMDrawable {: #CircleDOMDrawable }


```js
import { CircleDOMDrawable } from 'scenerystack/scenery';
```
### Constructor

#### new CircleDOMDrawable( renderer, instance ) {: #CircleDOMDrawable-constructor data-toc-label='new CircleDOMDrawable' }

### Instance Methods

#### initialize( renderer, instance ) {: #initialize data-toc-label='initialize' }

@public
@override

@param {number} renderer
@param {Instance} instance

#### updateDOM() {: #updateDOM data-toc-label='updateDOM' }

Updates our DOM element so that its appearance matches our node's representation.
@protected

This implements part of the DOMSelfDrawable required API for subtypes.

#### dispose() {: #dispose data-toc-label='dispose' }

Disposes the drawable.
@public
@override



## Source Code

See the source for [CircleDOMDrawable.js](https://github.com/phetsims/scenery/blob/main/js/display/drawables/CircleDOMDrawable.js) in the [scenery](https://github.com/phetsims/scenery) repository.
