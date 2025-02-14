# OopsDialog

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/scenery-phet/blob/main/js/OopsDialog.ts](https://github.com/phetsims/scenery-phet/blob/main/js/OopsDialog.ts) for the most up-to-date information.

## Overview

OopsDialog is displayed when some limitation of the simulation is encountered.
So named because the message typically begins with 'Oops!', so that's how people referred to it.
See https://github.com/phetsims/equality-explorer/issues/48

@author Chris Malley (PixelZoom, Inc.)

## Class OopsDialog {: #OopsDialog }


```js
import { OopsDialog } from 'scenerystack/sim';
```
### Constructor

#### new OopsDialog( messageString : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span> | [ReadOnlyProperty](../axon/ReadOnlyProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>&gt;</span>, providedOptions? : <span style="font-weight: 400;">[OopsDialogOptions](../sim/OopsDialog.md#OopsDialogOptions)</span> ) {: #OopsDialog-constructor data-toc-label='new OopsDialog' }

### Instance Methods

#### dispose() {: #dispose data-toc-label='dispose' }

### Static Properties

#### OopsDialogIO : <span style="font-weight: 400;">[IOType](../tandem/IOType.md)</span> {: #OopsDialogIO data-toc-label='OopsDialogIO' }

(readonly)



## Type OopsDialogOptions {: #OopsDialogOptions }


```js
import type { OopsDialogOptions } from 'scenerystack/sim';
```


- **iconNode**?: [Node](../scenery/Node.md)
<br>  Icon that will be placed to the right of the image.
  If not provided, then a PhET Girl image is used.
  If provided, the caller is responsible for all aspects of the icon, including scale.
- **iconPosition**?: "left" | "right"
<br>  Position of optional icon, relative to message text.
- **richTextOptions**?: [RichTextOptions](../scenery/RichText.md#RichTextOptions)
<br>  Passed to RichText node that displays messageString
- &amp; [DialogOptions](../sim/Dialog.md#DialogOptions)




## Source Code

See the source for [OopsDialog.ts](https://github.com/phetsims/scenery-phet/blob/main/js/OopsDialog.ts) in the [scenery-phet](https://github.com/phetsims/scenery-phet) repository.
