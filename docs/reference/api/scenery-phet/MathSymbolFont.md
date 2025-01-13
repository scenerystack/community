# MathSymbolFont

## Overview

MathSymbolFont is the font used for math symbols (e.g. 'x', 'y') in PhET sims.
See https://github.com/phetsims/scenery/issues/545

@author Chris Malley (PixelZoom, Inc.)

## Class MathSymbolFont {: #MathSymbolFont }


```js
import { MathSymbolFont } from 'scenerystack/scenery-phet';
```
### Constructor

#### new MathSymbolFont( providedOptions? : <span style="font-weight: 400; opacity: 80%;">number | string | MathSymbolFontOptions</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods



### Static Methods

#### getRichTextMarkup( text : <span style="font-weight: 400; opacity: 80%;">string</span>, style ) : <span style="font-weight: 400; opacity: 80%;">string</span> {: #getRichTextMarkup data-toc-label='getRichTextMarkup' }

Converts a string to the markup needed to display that string with RichText, using the same family as MathSymbolFont.
@param text
@param [style] - see Font options.style

#### createDerivedProperty( symbolStringProperty : <span style="font-weight: 400; opacity: 80%;">TReadOnlyProperty&lt;string&gt;</span>, providedOptions? : <span style="font-weight: 400; opacity: 80%;">CreateDerivedPropertyOptions</span> ) : <span style="font-weight: 400; opacity: 80%;">TReadOnlyProperty&lt;string&gt;</span> {: #createDerivedProperty data-toc-label='createDerivedProperty' }

Wraps a dynamic string in RichText markup that will display the string in the same font as MathSymbolFont.

### Static Properties

#### FAMILY {: #FAMILY data-toc-label='FAMILY' }

(readonly)



## Source Code

See the source for [MathSymbolFont.ts](https://github.com/phetsims/scenery-phet/blob/main/js/MathSymbolFont.ts) in the [scenery-phet](https://github.com/phetsims/scenery-phet) repository.
