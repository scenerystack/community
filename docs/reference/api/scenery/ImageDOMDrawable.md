# ImageDOMDrawable

## Overview

DOM drawable for Image nodes.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class ImageDOMDrawable {: #ImageDOMDrawable }


```js
import { ImageDOMDrawable } from 'scenerystack/scenery';
```
### Constructor

#### new ImageDOMDrawable( renderer, instance ) {: #ImageDOMDrawable-constructor data-toc-label='new ImageDOMDrawable' }

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

See the source for [ImageDOMDrawable.js](https://github.com/phetsims/scenery/blob/main/js/display/drawables/ImageDOMDrawable.js) in the [scenery](https://github.com/phetsims/scenery) repository.
