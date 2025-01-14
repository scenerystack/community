# NumberDisplay

## Overview

Displays a Property of type {number} in a background rectangle.

@author Chris Malley (PixelZoom, Inc.)

## Class NumberDisplay {: #NumberDisplay }


```js
import { NumberDisplay } from 'scenerystack/scenery-phet';
```
### Constructor

#### new NumberDisplay( numberProperty : <span style="font-weight: 400;">[TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>&gt;</span>, displayRange : <span style="font-weight: 400;">[Range](../dot/Range.md)</span>, providedOptions? : <span style="font-weight: 400;">[NumberDisplayOptions](../scenery-phet/NumberDisplay.md#NumberDisplayOptions)</span> ) {: #NumberDisplay-constructor data-toc-label='new NumberDisplay' }

### Instance Methods

#### dispose() {: #dispose data-toc-label='dispose' }

#### setNumberFont( font : <span style="font-weight: 400;">[Font](../scenery/Font.md)</span> ) {: #setNumberFont data-toc-label='setNumberFont' }

Sets the number text font.

#### setNumberFill( fill : <span style="font-weight: 400;">[TPaint](../scenery/TPaint.md)</span> ) {: #setNumberFill data-toc-label='setNumberFill' }

Sets the number text fill.

#### setBackgroundFill( fill : <span style="font-weight: 400;">[TPaint](../scenery/TPaint.md)</span> ) {: #setBackgroundFill data-toc-label='setBackgroundFill' }

Sets the background fill.

#### getBackgroundFill() : <span style="font-weight: 400;">[TPaint](../scenery/TPaint.md)</span> {: #getBackgroundFill data-toc-label='getBackgroundFill' }

Gets the background fill.

#### setBackgroundStroke( stroke : <span style="font-weight: 400;">[TPaint](../scenery/TPaint.md)</span> ) {: #setBackgroundStroke data-toc-label='setBackgroundStroke' }

Sets the background stroke.

#### getBackgroundWidth() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #getBackgroundWidth data-toc-label='getBackgroundWidth' }

Get the width of the background.

#### setBackgroundWidth( width : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) {: #setBackgroundWidth data-toc-label='setBackgroundWidth' }

Set the width of the background node.

### Instance Properties

#### valueStringProperty : <span style="font-weight: 400;">[TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>&gt;</span> {: #valueStringProperty data-toc-label='valueStringProperty' }

(readonly)

### Static Properties

#### NumberDisplayIO : <span style="font-weight: 400;">[IOType](../tandem/IOType.md)</span> {: #NumberDisplayIO data-toc-label='NumberDisplayIO' }

(readonly)



## Type NumberDisplayOptions {: #NumberDisplayOptions }


```js
import type { NumberDisplayOptions } from 'scenerystack/scenery-phet';
```


- **align**?: NumberDisplayAlign
- **valuePattern**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span> | [TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>&gt;
<br>  Pattern used to format the value.
  Must contain SunConstants.VALUE_NAMED_PLACEHOLDER or SunConstants.VALUE_NUMBERED_PLACEHOLDER.
- **decimalPlaces**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
<br>  The number of decimal places to show. If null, the full value is displayed.
  We attempted to change the default to null, but there were too many usages that relied on the 0 default.
  See https://github.com/phetsims/scenery-phet/issues/511
- **numberFormatter**?: ( ( n: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span> ) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
<br>  Takes a {number} and returns a {string} for full control. Mutually exclusive with valuePattern and
  decimalPlaces.  Named "numberFormatter" instead of "formatter" to help clarify that it is separate from the
  noValueString/Align/Pattern defined below. Please see also numberFormatterDependencies
- **numberFormatterDependencies**?: [TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">unknown</span>&gt;[]
<br>  If your numberFormatter depends on other Properties, you must specify them so that the text will update when those
  dependencies change.
- **useRichText**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
- **useFullHeight**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
<br>  If set to true, the smaller text height (from applying the maxWidth) will NOT be used, and instead
  the height of the text (as if there was no maxWidth) will be used for layout and the background.
  See https://github.com/phetsims/density/issues/34.
- **textOptions**?: [TextOptions](../scenery/Text.md#TextOptions) | [RichTextOptions](../scenery/RichText.md#RichTextOptions)
<br>  // options passed to Text or RichText (depending on the value of options.useRichText) that displays the value
- **xMargin**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **yMargin**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **cornerRadius**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **backgroundFill**?: [TPaint](../scenery/TPaint.md)
- **backgroundStroke**?: [TPaint](../scenery/TPaint.md)
- **backgroundLineWidth**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **backgroundLineDash**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>[]
- **minBackgroundWidth**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **noValueString**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>
<br>  options related to display when numberProperty.value === null
- **noValueAlign**?: NumberDisplayAlign | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
- **noValuePattern**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span> | [TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>&gt; | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
- &amp; StrictOmit&lt;[NodeOptions](../scenery/Node.md#NodeOptions), "children"&gt;




## Source Code

See the source for [NumberDisplay.ts](https://github.com/phetsims/scenery-phet/blob/main/js/NumberDisplay.ts) in the [scenery-phet](https://github.com/phetsims/scenery-phet) repository.
