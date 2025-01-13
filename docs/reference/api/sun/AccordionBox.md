# AccordionBox

## Overview

Box that can be expanded/collapsed to show/hide contents.

@author John Blanco (PhET Interactive Simulations)
@author Chris Malley (PixelZoom, Inc.)

## Class AccordionBox {: #AccordionBox }


```js
import { AccordionBox } from 'scenerystack/sun';
```
### Constructor

#### new AccordionBox( contentNode : <span style="font-weight: 400; opacity: 80%;">Node</span>, providedOptions? : <span style="font-weight: 400; opacity: 80%;">AccordionBoxOptions</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### getCollapsedBoxHeight() : <span style="font-weight: 400; opacity: 80%;">number</span> {: #getCollapsedBoxHeight data-toc-label='getCollapsedBoxHeight' }

Returns the ideal height of the collapsed box (ignoring things like stroke width)

#### getExpandedBoxHeight() : <span style="font-weight: 400; opacity: 80%;">number</span> {: #getExpandedBoxHeight data-toc-label='getExpandedBoxHeight' }

Returns the ideal height of the expanded box (ignoring things like stroke width)

#### reset() : <span style="font-weight: 400; opacity: 80%;">void</span> {: #reset data-toc-label='reset' }

### Instance Properties

#### expandedProperty : <span style="font-weight: 400; opacity: 80%;">Property&lt;boolean&gt;</span> {: #expandedProperty data-toc-label='expandedProperty' }

(readonly)

### Static Properties

#### AccordionBoxIO : <span style="font-weight: 400; opacity: 80%;">IOType</span> {: #AccordionBoxIO data-toc-label='AccordionBoxIO' }

(readonly)



## Source Code

See the source for [AccordionBox.ts](https://github.com/phetsims/sun/blob/main/js/AccordionBox.ts) in the [sun](https://github.com/phetsims/sun) repository.
