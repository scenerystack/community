# rasterizeNode

## Overview

Rasterization utilities for arbitrary Nodes.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Type RasterizedOptions {: #RasterizedOptions }


```js
import type { RasterizedOptions } from 'scenerystack/scenery';
```


- **resolution**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
<br>  {number} - Controls the resolution of the image relative to the local view units. For example, if our Node is
  ~100 view units across (in the local coordinate frame) but you want the image to actually have a ~200-pixel
  resolution, provide resolution:2.
  Defaults to 1.0
- **sourceBounds**?: [Bounds2](../dot/Bounds2.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
<br>  {Bounds2|null} - If provided, it will control the x/y/width/height of the toCanvas call. See toCanvas for
  details on how this controls the rasterization. This is in the "parent" coordinate frame, similar to
  node.bounds.
  Defaults to null
- **useTargetBounds**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
<br>  {boolean} - If true, the localBounds of the result will be set in a way such that it will precisely match
  the visible bounds of the original Node (this). Note that antialiased content (with a much lower resolution)
  may somewhat spill outside these bounds if this is set to true. Usually this is fine and should be the
  recommended option. If sourceBounds are provided, they will restrict the used bounds (so it will just
  represent the bounds of the sliced part of the image).
  Defaults to true
- **wrap**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
<br>  {boolean} - If true, the created Image Node gets wrapped in an extra Node so that it can be transformed
  independently. If there is no need to transform the resulting node, wrap:false can be passed so that no extra
  Node is created.
  Defaults to true
- **useCanvas**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
<br>  {boolean} - If true, it will directly use the &lt;canvas&gt; element (only works with canvas/webgl renderers)
  instead of converting this into a form that can be used with any renderer. May have slightly better
  performance if svg/dom renderers do not need to be used.
  Defaults to false
- **nodeOptions**?: [NodeOptions](../scenery/Node.md#NodeOptions)
<br>  Options to be passed to the Node that is returned by the rasterizeNode call, this could be the direct Image or a
  wrapped Node, depending on the value of options.wrap. In general it is best to use this option, and only provide
  imageOptions for specific requirements. These options will override any imageOptions if wrap:false. Defaults to \
  the empty object.
- **imageOptions**?: [ImageOptions](../scenery/Image.md#ImageOptions)
<br>  To be passed to the Image node created from the rasterization. See below for options that will override
  what is passed in. In general, it is better to use nodeOptions. These options are overridden by nodeOptions when
  wrap:false. Defaults to the empty object.




## Source Code

See the source for [rasterizeNode.ts](https://github.com/phetsims/scenery/blob/main/js/util/rasterizeNode.ts) in the [scenery](https://github.com/phetsims/scenery) repository.
