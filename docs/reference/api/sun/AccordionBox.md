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



## Type AccordionBoxOptions {: #AccordionBoxOptions }


```js
import type { AccordionBoxOptions } from 'scenerystack/sun';
```


- **titleNode**?: [Node](../scenery/Node.md)
- **expandedProperty**?: [Property](../axon/Property.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>&gt;
- **expandedDefaultValue**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
- **overrideTitleNodePickable**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
- **resize**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
- **cursor**?: [NodeOptions](../scenery/Node.md#NodeOptions)[ 'cursor' ]
- **lineWidth**?: [PathOptions](../scenery/Path.md#PathOptions)[ 'lineWidth' ]
- **cornerRadius**?: [RectangleOptions](../scenery/Rectangle.md#RectangleOptions)[ 'cornerRadius' ]
- **stroke**?: [PaintableOptions](../scenery/Paintable.md#PaintableOptions)[ 'stroke' ]
- **fill**?: [PaintableOptions](../scenery/Paintable.md#PaintableOptions)[ 'fill' ]
- **minWidth**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **titleAlignX**?: "center" | "left" | "right"
- **titleAlignY**?: "top" | "center"
- **titleXMargin**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **titleYMargin**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **titleXSpacing**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **showTitleWhenExpanded**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
- **useExpandedBoundsWhenCollapsed**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
- **useContentWidthWhenCollapsed**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
- **titleBarExpandCollapse**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
- **allowContentToOverlapTitle**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
- **expandCollapseButtonOptions**?: [ExpandCollapseButtonOptions](../sun/ExpandCollapseButton.md#ExpandCollapseButtonOptions)
- **buttonAlign**?: "left" | "right"
- **buttonXMargin**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **buttonYMargin**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **contentAlign**?: "left" | "center" | "right"
- **contentVerticalAlign**?: "top" | "center" | "bottom"
- **contentXMargin**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **contentYMargin**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **contentXSpacing**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **contentYSpacing**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **titleBarOptions**?: [RectangleOptions](../scenery/Rectangle.md#RectangleOptions)
- **expandedSoundPlayer**?: TSoundPlayer
- **collapsedSoundPlayer**?: TSoundPlayer
- **expandedContextResponse**?: TAlertable
- **collapsedContextResponse**?: TAlertable
- **voicingNameResponse**?: VoicingResponse
- **voicingObjectResponse**?: VoicingResponse
- **voicingContextResponse**?: VoicingResponse
- **voicingHintResponse**?: VoicingResponse
- **headingTagName**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>
- &amp; [NodeOptions](../scenery/Node.md#NodeOptions)




## Source Code

See the source for [AccordionBox.ts](https://github.com/phetsims/sun/blob/main/js/AccordionBox.ts) in the [sun](https://github.com/phetsims/sun) repository.
