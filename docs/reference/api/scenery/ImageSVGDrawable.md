# ImageSVGDrawable

## Overview

SVG drawable for Image nodes.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class ImageSVGDrawable {: #ImageSVGDrawable }


```js
import { ImageSVGDrawable } from 'scenerystack/scenery';
```
### Instance Methods

#### initialize( renderer, instance ) {: #initialize data-toc-label='initialize' }

@public
@override

@param {number} renderer
@param {Instance} instance

#### updateSVGSelf() {: #updateSVGSelf data-toc-label='updateSVGSelf' }

Updates the SVG elements so that they will appear like the current node's representation.
@protected

Implements the interface for SVGSelfDrawable (and is called from the SVGSelfDrawable's update).

#### updateURL( image, forced ) {: #updateURL data-toc-label='updateURL' }

@private

@param {SVGImageElement} image
@param {boolean} forced

#### updateMipmapStatus( usingMipmap ) {: #updateMipmapStatus data-toc-label='updateMipmapStatus' }

@private

@param {boolean} usingMipmap

#### onMipmap() {: #onMipmap data-toc-label='onMipmap' }

@private

#### onMipmapTransform() {: #onMipmapTransform data-toc-label='onMipmapTransform' }

@private

#### dispose() {: #dispose data-toc-label='dispose' }

Disposes the drawable.
@public
@override



## Source Code

See the source for [ImageSVGDrawable.js](https://github.com/phetsims/scenery/blob/main/js/display/drawables/ImageSVGDrawable.js) in the [scenery](https://github.com/phetsims/scenery) repository.
