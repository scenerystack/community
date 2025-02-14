# PaintSVGState

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/scenery/blob/main/js/display/PaintSVGState.js](https://github.com/phetsims/scenery/blob/main/js/display/PaintSVGState.js) for the most up-to-date information.

## Overview

Handles SVG &lt;defs&gt; and fill/stroke style for SVG elements (by composition, not a trait or for inheritance).

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class PaintSVGState {: #PaintSVGState }


```js
import { PaintSVGState } from 'scenerystack/scenery';
```
### Constructor

#### new PaintSVGState() {: #PaintSVGState-constructor data-toc-label='new PaintSVGState' }

### Instance Methods

#### initialize() {: #initialize data-toc-label='initialize' }

Initializes the state
@public

#### dispose() {: #dispose data-toc-label='dispose' }

Disposes the PaintSVGState, releasing listeners as needed.
@public

#### releaseFillPaint() {: #releaseFillPaint data-toc-label='releaseFillPaint' }

@private

#### releaseStrokePaint() {: #releaseStrokePaint data-toc-label='releaseStrokePaint' }

@private

#### updateFill( svgBlock, fill ) {: #updateFill data-toc-label='updateFill' }

Called when the fill needs to be updated, with the latest defs SVG block
@public

@param {SVGBlock} svgBlock
@param {null|string|Color|LinearGradient|RadialGradient|Pattern} fill

#### updateStroke( svgBlock, stroke ) {: #updateStroke data-toc-label='updateStroke' }

Called when the stroke needs to be updated, with the latest defs SVG block
@public

@param {SVGBlock} svgBlock
@param {null|string|Color|LinearGradient|RadialGradient|Pattern} fill

#### updateBaseStyle() {: #updateBaseStyle data-toc-label='updateBaseStyle' }

@private

#### updateStrokeDetailStyle( node ) {: #updateStrokeDetailStyle data-toc-label='updateStrokeDetailStyle' }

@private

@param {Node} node

#### updateSVGBlock( svgBlock ) {: #updateSVGBlock data-toc-label='updateSVGBlock' }

Called when the defs SVG block is switched (our SVG element was moved to another SVG top-level context)
@public

@param {SVGBlock} svgBlock



## Source Code

See the source for [PaintSVGState.js](https://github.com/phetsims/scenery/blob/main/js/display/PaintSVGState.js) in the [scenery](https://github.com/phetsims/scenery) repository.
