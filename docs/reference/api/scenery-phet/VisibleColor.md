# VisibleColor

## Overview

Provides a 2-way mapping between wavelength and Color.
The mapping is performed using a color lookup table.

Note that the sRGB colorspace is not capable of representing all visible colors.
So in converting visible wavelengths to Color, it is possible to lose some color information.

@author Chris Malley (PixelZoom, Inc.)

## Type WavelengthToColorOptions {: #WavelengthToColorOptions }


```js
import type { WavelengthToColorOptions } from 'scenerystack/scenery-phet';
```


- **irColor**?: TColorSubset
- **uvColor**?: TColorSubset
- **reduceIntensityAtExtrema**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>




## Source Code

See the source for [VisibleColor.ts](https://github.com/phetsims/scenery-phet/blob/main/js/VisibleColor.ts) in the [scenery-phet](https://github.com/phetsims/scenery-phet) repository.
