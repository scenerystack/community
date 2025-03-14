# Imageable

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/scenery/blob/main/js/nodes/Imageable.ts](https://github.com/phetsims/scenery/blob/main/js/nodes/Imageable.ts) for the most up-to-date information.

## Overview

Isolates Image handling with HTML/Canvas images, with mipmaps and general support.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Type ImageableImage {: #ImageableImage }


The available ways to specify an image as an input to Imageable. See onImagePropertyChange() for parsing logic.
We support a few different 'image' types that can be passed in:

HTMLImageElement - A normal HTML &lt;img&gt;. If it hasn't been fully loaded yet, Scenery will take care of adding a
  listener that will update Scenery with its width/height (and load its data) when the image is fully loaded.
  NOTE that if you just created the &lt;img&gt;, it probably isn't loaded yet, particularly in Safari. If the Image
  node is constructed with an &lt;img&gt; that hasn't fully loaded, it will have a width and height of 0, which may
  cause issues if you are using bounds for layout. Please see initialWidth/initialHeight notes below.

URL - Provide a {string}, and Scenery will assume it is a URL. This can be a normal URL, or a data URI, both will
  work. Please note that this has the same loading-order issues as using HTMLImageElement, but that it's almost
  always guaranteed to not have a width/height when you create the Image node. Note that data URI support for
  formats depends on the browser - only JPEG and PNG are supported broadly. Please see initialWidth/initialHeight
  notes below.
  Additionally, note that if a URL is provided, accessing image.getImage() or image.image will result not in the
  original URL (currently), but with the automatically created HTMLImageElement.

HTMLCanvasElement - It's possible to pass an HTML5 Canvas directly into the Image node. It will immediately be
  aware of the width/height (bounds) of the Canvas, but NOTE that the Image node will not listen to Canvas size
  changes. It is assumed that after you pass in a Canvas to an Image node that it will not be modified further.
  Additionally, the Image node will only be rendered using Canvas or WebGL if a Canvas is used as input.

Mipmap data structure - Image supports a mipmap data structure that provides rasterized mipmap levels. The 'top'
  level (level 0) is the entire full-size image, and every other level is twice as small in every direction
  (~1/4 the pixels), rounding dimensions up. This is useful for browsers that display the image badly if the
  image is too large. Instead, Scenery will dynamically pick the most appropriate size of the image to use,
  which improves the image appearance.
  The passed in 'image' should be an Array of mipmap objects of the format:
  {
    img: {HTMLImageElement}, // preferably preloaded, but it isn't required
    url: {string}, // URL (usually a data URL) for the image level
    width: {number}, // width of the mipmap level, in pixels
    height: {number} // height of the mipmap level, in pixels,
    canvas: {HTMLCanvasElement} // Canvas element containing the image data for the img.
    [updateCanvas]: {function} // If available, should be called before using the Canvas directly.
  }
  At least one level is required (level 0), and each mipmap level corresponds to the index in the array, e.g.:
  [
    level 0 (full size, e.g. 100x64)
    level 1 (half size, e.g. 50x32)
    level 2 (quarter size, e.g. 25x16)
    level 3 (eighth size, e.g. 13x8 - note the rounding up)
    ...
    level N (single pixel, e.g. 1x1 - this is the smallest level permitted, and there should only be one)
  ]
  Additionally, note that (currently) image.getImage() will return the HTMLImageElement from the first level,
  not the mipmap data.

 Also note that if the underlying image (like Canvas data) has changed, it is recommended to call
 invalidateImage() instead of changing the image reference (calling setImage() multiple times)

```js
import type { ImageableImage } from 'scenerystack/scenery';
```


<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span> | [HTMLImageElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement) | [HTMLCanvasElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement) | [Mipmap](../scenery/Imageable.md#Mipmap)



## Type ImageableOptions {: #ImageableOptions }


```js
import type { ImageableOptions } from 'scenerystack/scenery';
```


- **image**?: [ImageableImage](../scenery/Imageable.md#ImageableImage)
- **imageProperty**?: [TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;[ImageableImage](../scenery/Imageable.md#ImageableImage)&gt;
- **imageOpacity**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **initialWidth**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **initialHeight**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **mipmap**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
- **mipmapBias**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **mipmapInitialLevel**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **mipmapMaxLevel**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **hitTestPixels**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>




## Type Mipmap {: #Mipmap }


```js
import type { Mipmap } from 'scenerystack/scenery';
```


{
  width: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>;
  height: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>;
  url: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>;
  canvas?: [HTMLCanvasElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement);
  img?: [HTMLImageElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement);
  updateCanvas?: () =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span>;
}[]



## Source Code

See the source for [Imageable.ts](https://github.com/phetsims/scenery/blob/main/js/nodes/Imageable.ts) in the [scenery](https://github.com/phetsims/scenery) repository.
