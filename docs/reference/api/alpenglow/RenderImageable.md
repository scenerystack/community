# RenderImageable

## Overview

Represents queryable raster data (e.g. an image)

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Type RenderImageable {: #RenderImageable }


```js
import type { RenderImageable } from 'scenerystack/alpenglow';
```


- **width**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **height**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **isFullyOpaque**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
- **evaluate**: ( x: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>, y: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> ) =&gt; [Vector4](../dot/Vector4.md)




## Type SerializedRenderImageable {: #SerializedRenderImageable }


```js
import type { SerializedRenderImageable } from 'scenerystack/alpenglow';
```


- **width**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **height**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **isFullyOpaque**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
- **data**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>[]




## Source Code

See the source for [RenderImageable.ts](https://github.com/phetsims/alpenglow/blob/main/js/render-program/RenderImageable.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.