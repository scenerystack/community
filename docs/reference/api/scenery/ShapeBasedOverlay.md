# ShapeBasedOverlay

## Overview

Supertype for overlays that display colored shapes (updated every frame).

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class ShapeBasedOverlay {: #ShapeBasedOverlay }


```js
import { ShapeBasedOverlay } from 'scenerystack/scenery';
```
### Constructor

#### new ShapeBasedOverlay( display : <span style="font-weight: 400; opacity: 80%;">Display</span>, rootNode : <span style="font-weight: 400; opacity: 80%;">Node</span>, name : <span style="font-weight: 400; opacity: 80%;">string</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### addShape( shape : <span style="font-weight: 400; opacity: 80%;">Shape</span>, color : <span style="font-weight: 400; opacity: 80%;">string</span>, isOffset : <span style="font-weight: 400; opacity: 80%;">boolean</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #addShape data-toc-label='addShape' }

#### update() : <span style="font-weight: 400; opacity: 80%;">void</span> {: #update data-toc-label='update' }

#### addShapes() : <span style="font-weight: 400; opacity: 80%;">void</span> {: #addShapes data-toc-label='addShapes' }

#### dispose() : <span style="font-weight: 400; opacity: 80%;">void</span> {: #dispose data-toc-label='dispose' }

Releases references

### Instance Properties

#### display : <span style="font-weight: 400; opacity: 80%;">Display</span> {: #display data-toc-label='display' }

(protected)

#### rootNode : <span style="font-weight: 400; opacity: 80%;">Node</span> {: #rootNode data-toc-label='rootNode' }

(protected)

#### svg : <span style="font-weight: 400; opacity: 80%;">SVGElement</span> {: #svg data-toc-label='svg' }

(protected)

#### domElement : <span style="font-weight: 400; opacity: 80%;">SVGElement</span> {: #domElement data-toc-label='domElement' }



## Source Code

See the source for [ShapeBasedOverlay.ts](https://github.com/phetsims/scenery/blob/main/js/overlays/ShapeBasedOverlay.ts) in the [scenery](https://github.com/phetsims/scenery) repository.
