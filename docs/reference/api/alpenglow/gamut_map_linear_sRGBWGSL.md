# gamut_map_linear_sRGBWGSL

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/alpenglow/blob/main/js/webgpu/wgsl/color/gamut_map_linear_sRGBWGSL.ts](https://github.com/phetsims/alpenglow/blob/main/js/webgpu/wgsl/color/gamut_map_linear_sRGBWGSL.ts) for the most up-to-date information.

## Overview

Maps a linear sRGB color to a color that is within the sRGB gamut, using oklab for measuring perceptual distance.

Relative colorimetric mapping. We could add more of a perceptual intent, but this is a good start.

NOTE: If changing this, also likely should change gamut_map_linear_displayP3

Modeled after https://drafts.csswg.org/css-color-4/#binsearch

See RenderColor.gamutMapLinearSRGB for more information.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;



## Source Code

See the source for [gamut_map_linear_sRGBWGSL.ts](https://github.com/phetsims/alpenglow/blob/main/js/webgpu/wgsl/color/gamut_map_linear_sRGBWGSL.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
