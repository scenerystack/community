# StringDisplay

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/scenery-phet/blob/main/js/StringDisplay.ts](https://github.com/phetsims/scenery-phet/blob/main/js/StringDisplay.ts) for the most up-to-date information.

## Overview

StringDisplay displays the value of a string or TReadOnlyProperty&lt;string&gt; on a background. The background can
be a fixed size, or it can dynamically size itself to fit the displayed string.

StringDisplay is a nice alternative to NumberDisplay, when the thing you're displaying is not a number,
or when formatting is more-cleanly implemented using a TReadOnlyProperty&lt;string&gt;.

@author Chris Malley (PixelZoom, Inc.)

## Class StringDisplay {: #StringDisplay }


```js
import { StringDisplay } from 'scenerystack/scenery-phet';
```
### Constructor

#### new StringDisplay( string : <span style="font-weight: 400;">[TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>&gt; | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span>, providedOptions? : <span style="font-weight: 400;">[StringDisplayOptions](../scenery-phet/StringDisplay.md#StringDisplayOptions)</span> ) {: #StringDisplay-constructor data-toc-label='new StringDisplay' }

### Instance Methods

#### dispose() {: #dispose data-toc-label='dispose' }



## Type StringDisplayOptions {: #StringDisplayOptions }


```js
import type { StringDisplayOptions } from 'scenerystack/scenery-phet';
```


- **size**?: [Dimension2](../dot/Dimension2.md)
<br>  Fixed size of the background.
  If provided, the text will be scaled to fit the background.
  If not provided, the background will be dynamically sized to fix the text.
- **xMargin**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
<br>  Margins inside the background
- **yMargin**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **alignX**?: AlignX
<br>  How the string is aligned in the background
- **alignY**?: AlignY
- **rectangleOptions**?: [RectangleOptions](../scenery/Rectangle.md#RectangleOptions)
<br>  Options passed to the background Rectangle
- **useRichText**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
<br>  true = use RichText, false = use Text
- **textOptions**?: [StrictOmit](../phet-core/StrictOmit.md)&lt;[TextOptions](../scenery/Text.md#TextOptions) | [RichTextOptions](../scenery/RichText.md#RichTextOptions), "maxWidth" | "maxHeight"&gt;
<br>  Options passed to the RichText that displays the string
- &amp; [NodeOptions](../scenery/Node.md#NodeOptions)




## Source Code

See the source for [StringDisplay.ts](https://github.com/phetsims/scenery-phet/blob/main/js/StringDisplay.ts) in the [scenery-phet](https://github.com/phetsims/scenery-phet) repository.
