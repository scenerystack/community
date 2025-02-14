# ShapeBasedOverlay

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/scenery/blob/main/js/overlays/ShapeBasedOverlay.ts](https://github.com/phetsims/scenery/blob/main/js/overlays/ShapeBasedOverlay.ts) for the most up-to-date information.

## Overview

Supertype for overlays that display colored shapes (updated every frame).

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class ShapeBasedOverlay {: #ShapeBasedOverlay }


```js
import { ShapeBasedOverlay } from 'scenerystack/scenery';
```
### Constructor

#### new ShapeBasedOverlay( display : <span style="font-weight: 400;">[Display](../scenery/Display.md)</span>, rootNode : <span style="font-weight: 400;">[Node](../scenery/Node.md)</span>, name : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> ) {: #ShapeBasedOverlay-constructor data-toc-label='new ShapeBasedOverlay' }

### Instance Methods

#### addShape( shape : <span style="font-weight: 400;">[Shape](../kite/Shape.md)</span>, color : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span>, isOffset : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> ) {: #addShape data-toc-label='addShape' }

#### update() {: #update data-toc-label='update' }

#### addShapes() {: #addShapes data-toc-label='addShapes' }

#### dispose() {: #dispose data-toc-label='dispose' }

Releases references

### Instance Properties

#### display : <span style="font-weight: 400;">[Display](../scenery/Display.md)</span> {: #display data-toc-label='display' }

(protected)

#### rootNode : <span style="font-weight: 400;">[Node](../scenery/Node.md)</span> {: #rootNode data-toc-label='rootNode' }

(protected)

#### svg : <span style="font-weight: 400;">SVGElement</span> {: #svg data-toc-label='svg' }

(protected)

#### domElement : <span style="font-weight: 400;">SVGElement</span> {: #domElement data-toc-label='domElement' }



## Source Code

See the source for [ShapeBasedOverlay.ts](https://github.com/phetsims/scenery/blob/main/js/overlays/ShapeBasedOverlay.ts) in the [scenery](https://github.com/phetsims/scenery) repository.
