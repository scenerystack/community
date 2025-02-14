# Pattern

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/scenery/blob/main/js/util/Pattern.ts](https://github.com/phetsims/scenery/blob/main/js/util/Pattern.ts) for the most up-to-date information.

## Overview

A pattern that will deliver a fill or stroke that will repeat an image in both directions (x and y).

TODO: future support for repeat-x, repeat-y or no-repeat (needs SVG support) https://github.com/phetsims/scenery/issues/1581
TODO: support scene or other various content (SVG is flexible, can backport to canvas)

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class Pattern {: #Pattern }


```js
import { Pattern } from 'scenerystack/scenery';
```
### Constructor

#### new Pattern( image : <span style="font-weight: 400;">HTMLImageElement</span> ) {: #Pattern-constructor data-toc-label='new Pattern' }

### Instance Methods

#### getCanvasStyle() : <span style="font-weight: 400;">CanvasPattern</span> {: #getCanvasStyle data-toc-label='getCanvasStyle' }

Returns an object that can be passed to a Canvas context's fillStyle or strokeStyle.

#### createSVGPaint( svgBlock : <span style="font-weight: 400;">[SVGBlock](../scenery/SVGBlock.md)</span> ) : <span style="font-weight: 400;">[SVGPattern](../scenery/SVGPattern.md)</span> {: #createSVGPaint data-toc-label='createSVGPaint' }

Creates an SVG paint object for creating/updating the SVG equivalent definition.

#### toString() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> {: #toString data-toc-label='toString' }

Returns a string form of this object

### Instance Properties

#### image : <span style="font-weight: 400;">HTMLImageElement</span> {: #image data-toc-label='image' }

#### canvasPattern : <span style="font-weight: 400;">CanvasPattern</span> {: #canvasPattern data-toc-label='canvasPattern' }

#### isPattern : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #isPattern data-toc-label='isPattern' }



## Source Code

See the source for [Pattern.ts](https://github.com/phetsims/scenery/blob/main/js/util/Pattern.ts) in the [scenery](https://github.com/phetsims/scenery) repository.
