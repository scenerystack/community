# RasterColorConverter

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/alpenglow/blob/main/js/raster/RasterColorConverter.ts](https://github.com/phetsims/alpenglow/blob/main/js/raster/RasterColorConverter.ts) for the most up-to-date information.

## Overview

An interface that handles converting between essentially three "color spaces":
- client space (e.g. premultiplied sRGB)
- accumulation space (e.g. premultiplied linear sRGB)
- output space (e.g. sRGB255, so we can write to ImageData)

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Type RasterColorConverter {: #RasterColorConverter }


```js
import type { RasterColorConverter } from 'scenerystack/alpenglow';
```






## Source Code

See the source for [RasterColorConverter.ts](https://github.com/phetsims/alpenglow/blob/main/js/raster/RasterColorConverter.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
