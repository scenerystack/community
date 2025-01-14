# PhetFont

## Overview

Encapsulation of the font used for PhET simulations.
Provides PhET-specific defaults, and guarantees a fallback for font family.

Sample use:
new PhetFont( { family: 'Futura', size: 24, weight: 'bold' } )
new PhetFont( 24 )

@author Chris Malley (PixelZoom, Inc.)

## Class PhetFont {: #PhetFont }


```js
import { PhetFont } from 'scenerystack/scenery-phet';
```
### Constructor

#### new PhetFont( providedOptions? : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span> | [FontOptions](../scenery/Font.md#FontOptions)</span> ) {: #PhetFont-constructor data-toc-label='new PhetFont' }

### Instance Methods





## Source Code

See the source for [PhetFont.ts](https://github.com/phetsims/scenery-phet/blob/main/js/PhetFont.ts) in the [scenery-phet](https://github.com/phetsims/scenery-phet) repository.
