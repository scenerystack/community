# CanvasSelfDrawable

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/scenery/blob/main/js/display/CanvasSelfDrawable.js](https://github.com/phetsims/scenery/blob/main/js/display/CanvasSelfDrawable.js) for the most up-to-date information.

## Overview

TODO docs https://github.com/phetsims/scenery/issues/1581
  note paintCanvas() required, and other implementation-specific details

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class CanvasSelfDrawable {: #CanvasSelfDrawable }


```js
import { CanvasSelfDrawable } from 'scenerystack/scenery';
```
### Instance Methods

#### initialize( renderer, instance ) {: #initialize data-toc-label='initialize' }

@public

@param {number} renderer
@param {Instance} instance

#### markTransformDirty() {: #markTransformDirty data-toc-label='markTransformDirty' }

@public

#### markPaintDirty() {: #markPaintDirty data-toc-label='markPaintDirty' }

General flag set on the state, which we forward directly to the drawable's paint flag
@public

#### updateSelfVisibility() {: #updateSelfVisibility data-toc-label='updateSelfVisibility' }

@public
@override

#### dispose() {: #dispose data-toc-label='dispose' }

Releases references
@public
@override



## Source Code

See the source for [CanvasSelfDrawable.js](https://github.com/phetsims/scenery/blob/main/js/display/CanvasSelfDrawable.js) in the [scenery](https://github.com/phetsims/scenery) repository.
