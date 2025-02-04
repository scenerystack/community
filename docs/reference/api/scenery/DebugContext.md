# DebugContext

## Overview

A debugging version of the CanvasRenderingContext2D that will output all commands issued,
but can also forward them to a real context

See the spec at http://www.whatwg.org/specs/web-apps/current-work/multipage/the-canvas-element.html#2dcontext
Wrapping of the CanvasRenderingContext2D interface as of January 27th, 2013 (but not other interfaces like TextMetrics and Path)

Shortcut to create:
   var context = new phet.scenery.DebugContext( document.createElement( 'canvas' ).getContext( '2d' ) );

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class DebugContext {: #DebugContext }


```js
import { DebugContext } from 'scenerystack/scenery';
```
### Constructor

#### new DebugContext( context ) {: #DebugContext-constructor data-toc-label='new DebugContext' }

### Instance Methods

#### commit() {: #commit data-toc-label='commit' }

@public

#### save() {: #save data-toc-label='save' }

@public

#### restore() {: #restore data-toc-label='restore' }

@public

#### scale( x, y ) {: #scale data-toc-label='scale' }

@public

@param {number} x
@param {number} y

#### rotate( angle ) {: #rotate data-toc-label='rotate' }

@public

@param {number} angle

#### translate( x, y ) {: #translate data-toc-label='translate' }

@public

@param {number} x
@param {number} y

#### transform( a, b, c, d, e, f ) {: #transform data-toc-label='transform' }

@public

@param {number} a
@param {number} b
@param {number} c
@param {number} d
@param {number} e
@param {number} f

#### setTransform( a, b, c, d, e, f ) {: #setTransform data-toc-label='setTransform' }

@public

@param {number} a
@param {number} b
@param {number} c
@param {number} d
@param {number} e
@param {number} f

#### resetTransform() {: #resetTransform data-toc-label='resetTransform' }

@public

#### createLinearGradient( x0, y0, x1, y1 ) {: #createLinearGradient data-toc-label='createLinearGradient' }

@public

@param {number} x0
@param {number} y0
@param {number} x1
@param {number} y1
@returns {*}

#### createRadialGradient( x0, y0, r0, x1, y1, r1 ) {: #createRadialGradient data-toc-label='createRadialGradient' }

@public

@param {number} x0
@param {number} y0
@param {number} r0
@param {number} x1
@param {number} y1
@param {number} r1
@returns {*}

#### createPattern( image, repetition ) {: #createPattern data-toc-label='createPattern' }

@public

@param {*} image
@param {string} repetition
@returns {*}

#### clearRect( x, y, w, h ) {: #clearRect data-toc-label='clearRect' }

@public

@param {number} x
@param {number} y
@param {number} w
@param {number} h

#### fillRect( x, y, w, h ) {: #fillRect data-toc-label='fillRect' }

@public

@param {number} x
@param {number} y
@param {number} w
@param {number} h

#### strokeRect( x, y, w, h ) {: #strokeRect data-toc-label='strokeRect' }

@public

@param {number} x
@param {number} y
@param {number} w
@param {number} h

#### beginPath() {: #beginPath data-toc-label='beginPath' }

@public

#### fill( path ) {: #fill data-toc-label='fill' }

@public

@param {Path2D} path

#### stroke( path ) {: #stroke data-toc-label='stroke' }

@public

@param {Path2D} path

#### scrollPathIntoView( path ) {: #scrollPathIntoView data-toc-label='scrollPathIntoView' }

@public

@param {Path2D} path

#### clip( path ) {: #clip data-toc-label='clip' }

@public

@param {Path2D} path

#### resetClip() {: #resetClip data-toc-label='resetClip' }

@public

#### isPointInPath( a, b, c ) {: #isPointInPath data-toc-label='isPointInPath' }

@public

@param {*} a
@param {*} b
@param {*} c
@returns {*}

#### fillText( text, x, y, maxWidth ) {: #fillText data-toc-label='fillText' }

@public

@param {*} text
@param {number} x
@param {number} y
@param {*} maxWidth

#### strokeText( text, x, y, maxWidth ) {: #strokeText data-toc-label='strokeText' }

@public

@param {*} text
@param {number} x
@param {number} y
@param {*} maxWidth

#### measureText( text ) {: #measureText data-toc-label='measureText' }

@public

@param {*} text
@returns {*}

#### drawImage( image, a, b, c, d, e, f, g, h ) {: #drawImage data-toc-label='drawImage' }

@public

@param {*} image
@param {*} a
@param {*} b
@param {*} c
@param {*} d
@param {*} e
@param {*} f
@param {*} g
@param {number} h

#### addHitRegion( options ) {: #addHitRegion data-toc-label='addHitRegion' }

@public

@param {[Object]} options

#### removeHitRegion( options ) {: #removeHitRegion data-toc-label='removeHitRegion' }

@public

@param {[Object]} options

#### createImageData( a, b ) {: #createImageData data-toc-label='createImageData' }

@public

@param {*} a
@param {*} b
@returns {*}

#### createImageDataHD( a, b ) {: #createImageDataHD data-toc-label='createImageDataHD' }

@public

@param {*} a
@param {*} b
@returns {*}

#### getImageData( sx, sy, sw, sh ) {: #getImageData data-toc-label='getImageData' }

@public

@param {*} sx
@param {*} sy
@param {*} sw
@param {*} sh
@returns {*}

#### getImageDataHD( sx, sy, sw, sh ) {: #getImageDataHD data-toc-label='getImageDataHD' }

@public

@param {*} sx
@param {*} sy
@param {*} sw
@param {*} sh
@returns {*}

#### putImageData( imageData, dx, dy, dirtyX, dirtyY, dirtyWidth, dirtyHeight ) {: #putImageData data-toc-label='putImageData' }

@public

@param {*} imageData
@param {*} dx
@param {*} dy
@param {*} dirtyX
@param {*} dirtyY
@param {*} dirtyWidth
@param {*} dirtyHeight

#### putImageDataHD( imageData, dx, dy, dirtyX, dirtyY, dirtyWidth, dirtyHeight ) {: #putImageDataHD data-toc-label='putImageDataHD' }

@public

@param {*} imageData
@param {*} dx
@param {*} dy
@param {*} dirtyX
@param {*} dirtyY
@param {*} dirtyWidth
@param {*} dirtyHeight

#### setLineDash( segments ) {: #setLineDash data-toc-label='setLineDash' }

@public

@param {*} segments

#### getLineDash() {: #getLineDash data-toc-label='getLineDash' }

@public
@returns {*}

#### closePath() {: #closePath data-toc-label='closePath' }

@public

#### moveTo( x, y ) {: #moveTo data-toc-label='moveTo' }

@public

@param {number} x
@param {number} y

#### lineTo( x, y ) {: #lineTo data-toc-label='lineTo' }

@public

@param {number} x
@param {number} y

#### quadraticCurveTo( cpx, cpy, x, y ) {: #quadraticCurveTo data-toc-label='quadraticCurveTo' }

@public

@param {*} cpx
@param {*} cpy
@param {number} x
@param {number} y

#### bezierCurveTo( cp1x, cp1y, cp2x, cp2y, x, y ) {: #bezierCurveTo data-toc-label='bezierCurveTo' }

@public

@param {*} cp1x
@param {*} cp1y
@param {*} cp2x
@param {*} cp2y
@param {number} x
@param {number} y

#### arcTo( x1, y1, x2, y2, radiusX, radiusY, rotation ) {: #arcTo data-toc-label='arcTo' }

@public

@param {number} x1
@param {number} y1
@param {number} x2
@param {number} y2
@param {number} radiusX
@param {number} radiusY
@param {number} rotation

#### rect( x, y, w, h ) {: #rect data-toc-label='rect' }

@public

@param {number} x
@param {number} y
@param {number} w
@param {number} h

#### arc( x, y, radius, startAngle, endAngle, anticlockwise ) {: #arc data-toc-label='arc' }

@public

@param {number} x
@param {number} y
@param {number} radius
@param {number} startAngle
@param {number} endAngle
@param {boolean} anticlockwise

#### ellipse( x, y, radiusX, radiusY, rotation, startAngle, endAngle, anticlockwise ) {: #ellipse data-toc-label='ellipse' }

@public

@param {number} x
@param {number} y
@param {number} radiusX
@param {number} radiusY
@param {number} rotation
@param {number} startAngle
@param {number} endAngle
@param {boolean} anticlockwise



## Source Code

See the source for [DebugContext.js](https://github.com/phetsims/scenery/blob/main/js/debug/DebugContext.js) in the [scenery](https://github.com/phetsims/scenery) repository.
