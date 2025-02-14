# RasterPremultipliedConverter

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/alpenglow/blob/main/js/raster/RasterPremultipliedConverter.ts](https://github.com/phetsims/alpenglow/blob/main/js/raster/RasterPremultipliedConverter.ts) for the most up-to-date information.

## Overview

A RasterColorConverter which handles either sRGB or Display P3 for everything but we have:
- client space: premultiplied
- accumulation space: premultiplied linear
- output space: 0-255 (non-premultiplied non-linear), so we can write to ImageData

This works well to share code, since the only difference is the gamut mapping (sRGB and Display P3 have the same
transfer curve), and we want the same 0-255 non-premultiplied output.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class RasterPremultipliedConverter {: #RasterPremultipliedConverter }


```js
import { RasterPremultipliedConverter } from 'scenerystack/alpenglow';
```
### Constructor

#### new RasterPremultipliedConverter( gamutMap : <span style="font-weight: 400;">( color: [Vector4](../dot/Vector4.md) ) =&gt; [Vector4](../dot/Vector4.md)</span> ) {: #RasterPremultipliedConverter-constructor data-toc-label='new RasterPremultipliedConverter' }

### Instance Methods

#### clientToAccumulation( client : <span style="font-weight: 400;">[Vector4](../dot/Vector4.md)</span> ) : <span style="font-weight: 400;">[Vector4](../dot/Vector4.md)</span> {: #clientToAccumulation data-toc-label='clientToAccumulation' }

NOTE: DO NOT STORE THE VALUES OF THESE RESULTS, THEY ARE MUTATED. Create a copy if needed

#### clientToOutput( client : <span style="font-weight: 400;">[Vector4](../dot/Vector4.md)</span> ) : <span style="font-weight: 400;">[Vector4](../dot/Vector4.md)</span> {: #clientToOutput data-toc-label='clientToOutput' }

NOTE: DO NOT STORE THE VALUES OF THESE RESULTS, THEY ARE MUTATED. Create a copy if needed

#### accumulationToOutput( accumulation : <span style="font-weight: 400;">[Vector4](../dot/Vector4.md)</span> ) : <span style="font-weight: 400;">[Vector4](../dot/Vector4.md)</span> {: #accumulationToOutput data-toc-label='accumulationToOutput' }

NOTE: DO NOT STORE THE VALUES OF THESE RESULTS, THEY ARE MUTATED. Create a copy if needed

### Static Methods

#### getOutOfGamutColor( color : <span style="font-weight: 400;">[Vector4](../dot/Vector4.md)</span> ) : <span style="font-weight: 400;">[Vector4](../dot/Vector4.md)</span> {: #getOutOfGamutColor data-toc-label='getOutOfGamutColor' }

### Static Properties

#### SRGB : <span style="font-weight: 400;">[RasterPremultipliedConverter](../alpenglow/RasterPremultipliedConverter.md)</span> {: #SRGB data-toc-label='SRGB' }

(readonly)

#### DISPLAY_P3 : <span style="font-weight: 400;">[RasterPremultipliedConverter](../alpenglow/RasterPremultipliedConverter.md)</span> {: #DISPLAY_P3 data-toc-label='DISPLAY_P3' }

(readonly)

#### SRGB_SHOW_OUT_OF_GAMUT : <span style="font-weight: 400;">[RasterPremultipliedConverter](../alpenglow/RasterPremultipliedConverter.md)</span> {: #SRGB_SHOW_OUT_OF_GAMUT data-toc-label='SRGB_SHOW_OUT_OF_GAMUT' }

(readonly)

#### DISPLAY_P3_SHOW_OUT_OF_GAMUT : <span style="font-weight: 400;">[RasterPremultipliedConverter](../alpenglow/RasterPremultipliedConverter.md)</span> {: #DISPLAY_P3_SHOW_OUT_OF_GAMUT data-toc-label='DISPLAY_P3_SHOW_OUT_OF_GAMUT' }

(readonly)



## Source Code

See the source for [RasterPremultipliedConverter.ts](https://github.com/phetsims/alpenglow/blob/main/js/raster/RasterPremultipliedConverter.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
