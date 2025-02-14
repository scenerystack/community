# SceneImage

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/scenery/blob/main/js/util/SceneImage.js](https://github.com/phetsims/scenery/blob/main/js/util/SceneImage.js) for the most up-to-date information.

## Overview

An HTMLImageElement that is backed by a scene. Call update() on this SceneImage to update the image from the scene.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class SceneImage {: #SceneImage }


```js
import { SceneImage } from 'scenerystack/scenery';
```
### Constructor

#### new SceneImage( scene ) {: #SceneImage-constructor data-toc-label='new SceneImage' }

### Instance Methods

#### update( onComplete ) {: #update data-toc-label='update' }

NOTE: calling this before the previous update() completes may cause the previous onComplete to not be executed
@public

@param {function} onComplete



## Source Code

See the source for [SceneImage.js](https://github.com/phetsims/scenery/blob/main/js/util/SceneImage.js) in the [scenery](https://github.com/phetsims/scenery) repository.
