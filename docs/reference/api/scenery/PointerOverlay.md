# PointerOverlay

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/scenery/blob/main/js/overlays/PointerOverlay.ts](https://github.com/phetsims/scenery/blob/main/js/overlays/PointerOverlay.ts) for the most up-to-date information.

## Overview

The PointerOverlay shows pointer locations in the scene.  This is useful when recording a session for interviews or when a teacher is broadcasting
a tablet session on an overhead projector.  See https://github.com/phetsims/scenery/issues/111

Each pointer is rendered in a different &lt;svg&gt; so that CSS3 transforms can be used to make performance smooth on iPad.

@author Sam Reid (PhET Interactive Simulations)

## Class PointerOverlay {: #PointerOverlay }


```js
import { PointerOverlay } from 'scenerystack/scenery';
```
### Constructor

#### new PointerOverlay( display : <span style="font-weight: 400;">[Display](../scenery/Display.md)</span>, rootNode : <span style="font-weight: 400;">[Node](../scenery/Node.md)</span> ) {: #PointerOverlay-constructor data-toc-label='new PointerOverlay' }

### Instance Methods

#### dispose() {: #dispose data-toc-label='dispose' }

Releases references

#### update() {: #update data-toc-label='update' }

### Instance Properties

#### display : <span style="font-weight: 400;">[Display](../scenery/Display.md)</span> {: #display data-toc-label='display' }

(protected)

#### rootNode : <span style="font-weight: 400;">[Node](../scenery/Node.md)</span> {: #rootNode data-toc-label='rootNode' }

(protected)

#### pointerSVGContainer : <span style="font-weight: 400;">HTMLDivElement</span> {: #pointerSVGContainer data-toc-label='pointerSVGContainer' }

(protected)

#### domElement : <span style="font-weight: 400;">HTMLDivElement</span> {: #domElement data-toc-label='domElement' }



## Source Code

See the source for [PointerOverlay.ts](https://github.com/phetsims/scenery/blob/main/js/overlays/PointerOverlay.ts) in the [scenery](https://github.com/phetsims/scenery) repository.
