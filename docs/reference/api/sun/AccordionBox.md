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

#### new AccordionBox( contentNode : <span style="font-weight: 400;">[Node](../scenery/Node.md)</span>, providedOptions? : <span style="font-weight: 400;">[AccordionBoxOptions](../sun/AccordionBox.md#AccordionBoxOptions)</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### getCollapsedBoxHeight() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #getCollapsedBoxHeight data-toc-label='getCollapsedBoxHeight' }

Returns the ideal height of the collapsed box (ignoring things like stroke width)

#### getExpandedBoxHeight() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #getExpandedBoxHeight data-toc-label='getExpandedBoxHeight' }

Returns the ideal height of the expanded box (ignoring things like stroke width)

#### reset() {: #reset data-toc-label='reset' }

### Instance Properties

#### expandedProperty : <span style="font-weight: 400;">[Property](../axon/Property.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>&gt;</span> {: #expandedProperty data-toc-label='expandedProperty' }

(readonly)

### Static Properties

#### AccordionBoxIO : <span style="font-weight: 400;">[IOType](../tandem/IOType.md)</span> {: #AccordionBoxIO data-toc-label='AccordionBoxIO' }

(readonly)



## Source Code

See the source for [AccordionBox.ts](https://github.com/phetsims/sun/blob/main/js/AccordionBox.ts) in the [sun](https://github.com/phetsims/sun) repository.
