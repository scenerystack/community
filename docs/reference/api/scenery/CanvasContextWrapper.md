# CanvasContextWrapper

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/scenery/blob/main/js/util/CanvasContextWrapper.js](https://github.com/phetsims/scenery/blob/main/js/util/CanvasContextWrapper.js) for the most up-to-date information.

## Overview

Wraps the context and contains a reference to the canvas, so that we can absorb unnecessary state changes,
and possibly combine certain fill operations.

TODO: performance analysis, possibly axe this and use direct modification. https://github.com/phetsims/scenery/issues/1581

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class CanvasContextWrapper {: #CanvasContextWrapper }


```js
import { CanvasContextWrapper } from 'scenerystack/scenery';
```
### Constructor

#### new CanvasContextWrapper( canvas, context ) {: #CanvasContextWrapper-constructor data-toc-label='new CanvasContextWrapper' }

### Instance Methods

#### resetStyles() {: #resetStyles data-toc-label='resetStyles' }

Set local styles to undefined, so that they will be invalidated later
@public

#### setDimensions( width, height ) {: #setDimensions data-toc-label='setDimensions' }

Sets a (possibly) new width and height, and clears the canvas.
@public

@param {number} width
@param {number} height

#### setFillStyle( style ) {: #setFillStyle data-toc-label='setFillStyle' }

@public

@param {string|Color|Property.&lt;string&gt;} style

#### setStrokeStyle( style ) {: #setStrokeStyle data-toc-label='setStrokeStyle' }

@public

@param {string|Color|Property.&lt;string&gt;} style

#### setLineWidth( width ) {: #setLineWidth data-toc-label='setLineWidth' }

@public

@param {number} width

#### setLineCap( cap ) {: #setLineCap data-toc-label='setLineCap' }

@public

@param {string} cap

#### setLineJoin( join ) {: #setLineJoin data-toc-label='setLineJoin' }

@public

@param {string} join

#### setMiterLimit( miterLimit ) {: #setMiterLimit data-toc-label='setMiterLimit' }

@public

@param {number} miterLimit

#### setLineDash( dash ) {: #setLineDash data-toc-label='setLineDash' }

@public

@param {Array.&lt;number&gt;|null} dash

#### setLineDashOffset( lineDashOffset ) {: #setLineDashOffset data-toc-label='setLineDashOffset' }

@public

@param {number} lineDashOffset

#### setFont( font ) {: #setFont data-toc-label='setFont' }

@public

@param {string} font

#### setDirection( direction ) {: #setDirection data-toc-label='setDirection' }

@public

@param {string} direction



## Source Code

See the source for [CanvasContextWrapper.js](https://github.com/phetsims/scenery/blob/main/js/util/CanvasContextWrapper.js) in the [scenery](https://github.com/phetsims/scenery) repository.
