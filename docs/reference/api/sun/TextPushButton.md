# TextPushButton

## Overview

TextPushButton is a convenience class for creating a rectangular push button with a text label.

@author John Blanco (PhET Interactive Simulations)

## Class TextPushButton {: #TextPushButton }


```js
import { TextPushButton } from 'scenerystack/sun';
```
### Constructor

#### new TextPushButton( string : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span> | [TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>&gt;</span>, providedOptions? : <span style="font-weight: 400;">[TextPushButtonOptions](../sun/TextPushButton.md#TextPushButtonOptions)</span> ) {: #TextPushButton-constructor data-toc-label='new TextPushButton' }

### Instance Methods

#### dispose() {: #dispose data-toc-label='dispose' }



## Type TextPushButtonOptions {: #TextPushButtonOptions }


```js
import type { TextPushButtonOptions } from 'scenerystack/sun';
```


- **font**?: [Font](../scenery/Font.md)
- **textFill**?: [TPaint](../scenery/TPaint.md)
- **maxTextWidth**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
- **textNodeOptions**?: [TextOptions](../scenery/Text.md#TextOptions)
- &amp; StrictOmit&lt;[RectangularPushButtonOptions](../sun/RectangularPushButton.md#RectangularPushButtonOptions), "content"&gt;




## Source Code

See the source for [TextPushButton.ts](https://github.com/phetsims/sun/blob/main/js/buttons/TextPushButton.ts) in the [sun](https://github.com/phetsims/sun) repository.
