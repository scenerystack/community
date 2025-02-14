# TextDOMDrawable

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/scenery/blob/main/js/display/drawables/TextDOMDrawable.js](https://github.com/phetsims/scenery/blob/main/js/display/drawables/TextDOMDrawable.js) for the most up-to-date information.

## Overview

DOM drawable for Text nodes.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class TextDOMDrawable {: #TextDOMDrawable }


```js
import { TextDOMDrawable } from 'scenerystack/scenery';
```
### Constructor

#### new TextDOMDrawable( renderer, instance ) {: #TextDOMDrawable-constructor data-toc-label='new TextDOMDrawable' }

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

See the source for [TextDOMDrawable.js](https://github.com/phetsims/scenery/blob/main/js/display/drawables/TextDOMDrawable.js) in the [scenery](https://github.com/phetsims/scenery) repository.
