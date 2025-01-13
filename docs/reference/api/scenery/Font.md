# Font

## Overview

Immutable font object.

Examples:
new phet.scenery.Font().font                      // "10px sans-serif" (the default)
new phet.scenery.Font( { family: 'serif' } ).font // "10px serif"
new phet.scenery.Font( { weight: 'bold' } ).font  // "bold 10px sans-serif"
new phet.scenery.Font( { size: 16 } ).font        // "16px sans-serif"
var font = new phet.scenery.Font( {
  family: '"Times New Roman", serif',
  style: 'italic',
  lineHeight: 10
} );
font.font;                                   // "italic 10px/10 'Times New Roman', serif"
font.family;                                 // "'Times New Roman', serif"
font.weight;                                 // 400 (the default)

Useful specs:
http://www.w3.org/TR/css3-fonts/

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class Font {: #Font }


```js
import { Font } from 'scenerystack/scenery';
```
### Constructor

#### new Font( providedOptions? : <span style="font-weight: 400; opacity: 80%;">FontOptions</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### getFont() : <span style="font-weight: 400; opacity: 80%;">string</span> {: #getFont data-toc-label='getFont' }

Returns this font's CSS shorthand, which includes all of the font's information reduced into a single string.

This can be used for CSS as the 'font' attribute, or is needed to set Canvas fonts.

https://www.w3.org/TR/css-fonts-3/#propdef-font contains detailed information on how this is formatted.

#### getStyle() : <span style="font-weight: 400; opacity: 80%;">FontStyle</span> {: #getStyle data-toc-label='getStyle' }

Returns this font's style. See the constructor for more details on valid values.

#### getVariant() : <span style="font-weight: 400; opacity: 80%;">FontVariant</span> {: #getVariant data-toc-label='getVariant' }

Returns this font's variant. See the constructor for more details on valid values.

#### getWeight() : <span style="font-weight: 400; opacity: 80%;">FontWeight</span> {: #getWeight data-toc-label='getWeight' }

Returns this font's weight. See the constructor for more details on valid values.

NOTE: If a numeric weight was passed in, it has been cast to a string, and a string will be returned here.

#### getStretch() : <span style="font-weight: 400; opacity: 80%;">FontStretch</span> {: #getStretch data-toc-label='getStretch' }

Returns this font's stretch. See the constructor for more details on valid values.

#### getSize() : <span style="font-weight: 400; opacity: 80%;">string</span> {: #getSize data-toc-label='getSize' }

Returns this font's size. See the constructor for more details on valid values.

NOTE: If a numeric size was passed in, it has been cast to a string, and a string will be returned here.

#### getNumericSize() : <span style="font-weight: 400; opacity: 80%;">number</span> {: #getNumericSize data-toc-label='getNumericSize' }

Returns an approximate value of this font's size in px.

#### getLineHeight() : <span style="font-weight: 400; opacity: 80%;">string</span> {: #getLineHeight data-toc-label='getLineHeight' }

Returns this font's line-height. See the constructor for more details on valid values.

#### getFamily() : <span style="font-weight: 400; opacity: 80%;">string</span> {: #getFamily data-toc-label='getFamily' }

Returns this font's family. See the constructor for more details on valid values.

#### copy( options? : <span style="font-weight: 400; opacity: 80%;">FontOptions</span> ) : <span style="font-weight: 400; opacity: 80%;">Font</span> {: #copy data-toc-label='copy' }

Returns a new Font object, which is a copy of this object. If options are provided, they override the current
values in this object.

#### toCSS() : <span style="font-weight: 400; opacity: 80%;">string</span> {: #toCSS data-toc-label='toCSS' }

Returns this font's CSS shorthand, which includes all of the font's information reduced into a single string.

NOTE: This is an alias of getFont().

This can be used for CSS as the 'font' attribute, or is needed to set Canvas fonts.

https://www.w3.org/TR/css-fonts-3/#propdef-font contains detailed information on how this is formatted.

### Static Methods

#### castSize( size : <span style="font-weight: 400; opacity: 80%;">string | number</span> ) : <span style="font-weight: 400; opacity: 80%;">string</span> {: #castSize data-toc-label='castSize' }

Converts a generic size to a specific CSS pixel string, assuming 'px' for numbers.

@param size - If it's a number, 'px' will be appended

#### isFontStyle( style : <span style="font-weight: 400; opacity: 80%;">string</span> ) : <span style="font-weight: 400; opacity: 80%;">style is FontStyle</span> {: #isFontStyle data-toc-label='isFontStyle' }

#### isFontVariant( variant : <span style="font-weight: 400; opacity: 80%;">string</span> ) : <span style="font-weight: 400; opacity: 80%;">variant is FontVariant</span> {: #isFontVariant data-toc-label='isFontVariant' }

#### isFontWeight( weight : <span style="font-weight: 400; opacity: 80%;">string</span> ) : <span style="font-weight: 400; opacity: 80%;">weight is FontWeight</span> {: #isFontWeight data-toc-label='isFontWeight' }

#### isFontStretch( stretch : <span style="font-weight: 400; opacity: 80%;">string</span> ) : <span style="font-weight: 400; opacity: 80%;">stretch is FontStretch</span> {: #isFontStretch data-toc-label='isFontStretch' }

#### fromCSS( cssString : <span style="font-weight: 400; opacity: 80%;">string</span> ) : <span style="font-weight: 400; opacity: 80%;">Font</span> {: #fromCSS data-toc-label='fromCSS' }

Parses a CSS-compliant "font" shorthand string into a Font object.

Font strings should be a valid CSS3 font declaration value (see http://www.w3.org/TR/css3-fonts/) which consists
of the following pattern:
  [ [ &lt;‘font-style’&gt; || &lt;font-variant-css21&gt; || &lt;‘font-weight’&gt; || &lt;‘font-stretch’&gt; ]? &lt;‘font-size’&gt;
  [ / &lt;‘line-height’&gt; ]? &lt;‘font-family’&gt; ]

### Static Properties

#### FontIO : <span style="font-weight: 400; opacity: 80%;">IOType&lt;Font, FontState&gt;</span> {: #FontIO data-toc-label='FontIO' }

#### DEFAULT : <span style="font-weight: 400; opacity: 80%;">Font</span> {: #DEFAULT data-toc-label='DEFAULT' }

(readonly)

{Font} - Default Font object (since they are immutable).



## Source Code

See the source for [Font.ts](https://github.com/phetsims/scenery/blob/main/js/util/Font.ts) in the [scenery](https://github.com/phetsims/scenery) repository.
