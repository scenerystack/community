# Dialog

## Overview

General dialog type. Migrated from Joist on 4/10/2018

@author Jonathan Olson (PhET Interactive Simulations)
@author Sam Reid (PhET Interactive Simulations)
@author Andrea Lin (PhET Interactive Simulations)
@author Chris Malley (PixelZoom, Inc.)

## Class Dialog {: #Dialog }


```js
import { Dialog } from 'scenerystack/sim';
```
### Constructor

#### new Dialog( content : <span style="font-weight: 400;">[Node](../scenery/Node.md)</span>, providedOptions? : <span style="font-weight: 400;">[DialogOptions](../sim/Dialog.md#DialogOptions)</span> ) {: #Dialog-constructor data-toc-label='new Dialog' }

### Instance Methods

#### dispose() {: #dispose data-toc-label='dispose' }

### Static Properties

#### DialogIO : <span style="font-weight: 400;">[IOType](../tandem/IOType.md)</span> {: #DialogIO data-toc-label='DialogIO' }



## Type DialogOptions {: #DialogOptions }


```js
import type { DialogOptions } from 'scenerystack/sim';
```


- **xSpacing**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **ySpacing**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **topMargin**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **bottomMargin**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **leftMargin**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
- **maxWidthMargin**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **maxHeightMargin**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **closeButtonLength**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **closeButtonTopMargin**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **closeButtonRightMargin**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **title**?: [Node](../scenery/Node.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
- **titleAlign**?: DialogTitleAlign
- **layoutStrategy**?: DialogLayoutStrategy
- **closeButtonListener**?: () =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span>
- **closeButtonColor**?: [TColor](../scenery/TColor.md)
- **closeButtonTouchAreaXDilation**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **closeButtonTouchAreaYDilation**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **closeButtonMouseAreaXDilation**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **closeButtonMouseAreaYDilation**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **closeButtonVoicingDialogTitle**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span> | [TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>&gt; | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
- **closeButtonLastInPDOM**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
- **openedSoundPlayer**?: TSoundPlayer
- **closedSoundPlayer**?: TSoundPlayer
- **sim**?: [Sim](../sim/Sim.md)
- **showCallback**?: ( () =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span> ) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
- **hideCallback**?: ( () =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span> ) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
- &amp; StrictOmit&lt;TrimmedParentOptions, "xMargin" | "yMargin"&gt;




## Source Code

See the source for [Dialog.ts](https://github.com/phetsims/sun/blob/main/js/Dialog.ts) in the [sun](https://github.com/phetsims/sun) repository.
