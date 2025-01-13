# SVGSelfDrawable

## Overview

Represents an SVG visual element, and is responsible for tracking changes to the visual element, and then applying
any changes at a later time.

Abstract methods to implement for concrete implementations:
  updateSVGSelf() - Update the SVG element's state to what the Node's self should display
  updateDefsSelf( block ) - Update defs on the given block (or if block === null, remove)
  initializeState( renderer, instance )
  disposeState()

Subtypes should also implement drawable.svgElement, as the actual SVG element to be used.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class SVGSelfDrawable {: #SVGSelfDrawable }


```js
import { SVGSelfDrawable } from 'scenerystack/scenery';
```
### Instance Methods

#### initialize( renderer, instance, usesPaint, keepElements ) {: #initialize data-toc-label='initialize' }

@public

@param {number} renderer
@param {Instance} instance
@param {boolean} usesPaint - Effectively true if we mix in PaintableStatefulDrawable
@param {boolean} keepElements
@returns {SVGSelfDrawable}

#### update() {: #update data-toc-label='update' }

Updates the DOM appearance of this drawable (whether by preparing/calling draw calls, DOM element updates, etc.)
@public
@override

@returns {boolean} - Whether the update should continue (if false, further updates in supertype steps should not
                     be done).

#### setCachedPaints( cachedPaints ) {: #setCachedPaints data-toc-label='setCachedPaints' }

Updates the cached paints for this drawable. This should be called when the paints for the drawable have changed.
@protected

#### updateSVG() {: #updateSVG data-toc-label='updateSVG' }

Called to update the visual appearance of our svgElement
@protected

#### updateFillStrokeStyle( element ) {: #updateFillStrokeStyle data-toc-label='updateFillStrokeStyle' }

to be used by our passed in options.updateSVG
@protected

@param {SVGElement} element

#### updateSVGBlock( svgBlock ) {: #updateSVGBlock data-toc-label='updateSVGBlock' }

@public

@param {SVGBlock} svgBlock

#### dispose() {: #dispose data-toc-label='dispose' }

Releases references
@public
@override



## Source Code

See the source for [SVGSelfDrawable.js](https://github.com/phetsims/scenery/blob/main/js/display/SVGSelfDrawable.js) in the [scenery](https://github.com/phetsims/scenery) repository.
