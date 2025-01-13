# Paint

## Overview

Base type for gradients and patterns (and NOT the only type for fills/strokes)

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class Paint {: #Paint }


```js
import { Paint } from 'scenerystack/scenery';
```
### Constructor

#### new Paint() {: #constructor data-toc-label='constructor' }

### Instance Methods

#### getCanvasStyle() : <span style="font-weight: 400; opacity: 80%;">string | CanvasGradient | CanvasPattern</span> {: #getCanvasStyle data-toc-label='getCanvasStyle' }

Returns an object that can be passed to a Canvas context's fillStyle or strokeStyle.

#### setTransformMatrix( transformMatrix : <span style="font-weight: 400; opacity: 80%;">Matrix3</span> ) : <span style="font-weight: 400; opacity: 80%;">this</span> {: #setTransformMatrix data-toc-label='setTransformMatrix' }

Sets how this paint (pattern/gradient) is transformed, compared with the local coordinate frame of where it is

NOTE: This should only be used before the pattern/gradient is ever displayed.
TODO: Catch if this is violated? https://github.com/phetsims/scenery/issues/1581

NOTE: The scale should be symmetric if it will be used as a stroke. It is difficult to set a different x and y scale
for canvas at the same time.

#### createSVGPaint( svgBlock : <span style="font-weight: 400; opacity: 80%;">SVGBlock</span> ) : <span style="font-weight: 400; opacity: 80%;">SVGGradient | SVGPattern</span> {: #createSVGPaint data-toc-label='createSVGPaint' }

Creates an SVG paint object for creating/updating the SVG equivalent definition.

#### toString() : <span style="font-weight: 400; opacity: 80%;">string</span> {: #toString data-toc-label='toString' }

Returns a string form of this object

### Instance Properties

#### isPaint : <span style="font-weight: 400; opacity: 80%;">boolean</span> {: #isPaint data-toc-label='isPaint' }



## Source Code

See the source for [Paint.ts](https://github.com/phetsims/scenery/blob/main/js/util/Paint.ts) in the [scenery](https://github.com/phetsims/scenery) repository.
