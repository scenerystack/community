# PointerCoordinatesNode

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/scenery-phet/blob/main/js/PointerCoordinatesNode.ts](https://github.com/phetsims/scenery-phet/blob/main/js/PointerCoordinatesNode.ts) for the most up-to-date information.

## Overview

Shows the model and view coordinates that correspond to the cursor position.
Originally implemented for use in gas-properties, where it was used exclusively for debugging.
CAUTION! This adds a listener to the Display, see notes below.

@author Chris Malley (PixelZoom, Inc.)

## Class PointerCoordinatesNode {: #PointerCoordinatesNode }


```js
import { PointerCoordinatesNode } from 'scenerystack/scenery-phet';
```
### Constructor

#### new PointerCoordinatesNode( modelViewTransform : <span style="font-weight: 400;">[ModelViewTransform2](../phetcommon/ModelViewTransform2.md)</span>, providedOptions? : <span style="font-weight: 400;">[PointerCoordinatesNodeOptions](../scenery-phet/PointerCoordinatesNode.md#PointerCoordinatesNodeOptions)</span> ) {: #PointerCoordinatesNode-constructor data-toc-label='new PointerCoordinatesNode' }

### Instance Methods





## Type PointerCoordinatesNodeOptions {: #PointerCoordinatesNodeOptions }


```js
import type { PointerCoordinatesNodeOptions } from 'scenerystack/scenery-phet';
```


- **display**?: [Display](../scenery/Display.md)
- **pickable**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
- **font**?: [Font](../scenery/Font.md)
<br>  RichText
- **textColor**?: [TColor](../scenery/TColor.md)
- **align**?: [RichTextAlign](../scenery/RichText.md#RichTextAlign)
- **modelDecimalPlaces**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **viewDecimalPlaces**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **backgroundColor**?: [TColor](../scenery/TColor.md)
<br>  Rectangle




## Source Code

See the source for [PointerCoordinatesNode.ts](https://github.com/phetsims/scenery-phet/blob/main/js/PointerCoordinatesNode.ts) in the [scenery-phet](https://github.com/phetsims/scenery-phet) repository.
