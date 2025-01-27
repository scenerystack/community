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

#### new AccordionBox( contentNode : <span style="font-weight: 400;">[Node](../scenery/Node.md)</span>, providedOptions? : <span style="font-weight: 400;">[AccordionBoxOptions](../sun/AccordionBox.md#AccordionBoxOptions)</span> ) {: #AccordionBox-constructor data-toc-label='new AccordionBox' }

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
<br>  If not provided, a Text node will be supplied. Should have and maintain well-defined bounds if passed in
- **expandedProperty**?: [Property](../axon/Property.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>&gt;
<br>  If not provided, a BooleanProperty will be created, defaulting to the value of expandedDefaultValue.
- **expandedDefaultValue**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
- **overrideTitleNodePickable**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
<br>  If true (the default), we'll adjust the title so that it isn't pickable at all
- **resize**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
<br>  If true, the AccordionBox will resize itself as needed when the title/content resizes.
  See https://github.com/phetsims/sun/issues/304
- **cursor**?: [NodeOptions](../scenery/Node.md#NodeOptions)[ 'cursor' ]
<br>  applied to multiple parts of this UI component (NOTE: cursor is NOT applied to the main node!!)
- **lineWidth**?: [PathOptions](../scenery/Path.md#PathOptions)[ 'lineWidth' ]
- **cornerRadius**?: [RectangleOptions](../scenery/Rectangle.md#RectangleOptions)[ 'cornerRadius' ]
- **stroke**?: [PaintableOptions](../scenery/Paintable.md#PaintableOptions)[ 'stroke' ]
<br>  For the box
- **fill**?: [PaintableOptions](../scenery/Paintable.md#PaintableOptions)[ 'fill' ]
- **minWidth**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **titleAlignX**?: "center" | "left" | "right"
<br>  horizontal alignment of the title, 'left'|'center'|'right'
- **titleAlignY**?: "top" | "center"
<br>  vertical alignment of the title, relative to expand/collapse button 'top'|'center'
- **titleXMargin**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
<br>  horizontal space between title and left|right edge of box
- **titleYMargin**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
<br>  vertical space between title and top of box
- **titleXSpacing**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
<br>  horizontal space between title and expand/collapse button
- **showTitleWhenExpanded**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
<br>  true = title is visible when expanded, false = title is hidden when expanded
  When true, the content is shown beneath the title. When false, the content is shown to the side of the title
- **useExpandedBoundsWhenCollapsed**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
<br>  If true, the expanded box will use the bounds of the content node when collapsed
- **useContentWidthWhenCollapsed**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
<br>  If true, the collapsed box will remain as wide as the collapsed content. If false, the collapsed box
  will only surround the expand/collapse button and title.
- **titleBarExpandCollapse**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
<br>  clicking on the title bar expands/collapses the accordion box
- **allowContentToOverlapTitle**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
<br>  if true, the content will overlap the title when expanded, and will use contentYMargin at the top
- **expandCollapseButtonOptions**?: [ExpandCollapseButtonOptions](../sun/ExpandCollapseButton.md#ExpandCollapseButtonOptions)
<br>  options passed to ExpandCollapseButton constructor
- **buttonAlign**?: "left" | "right"
<br>  expand/collapse button layout
- **buttonXMargin**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **buttonYMargin**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **contentAlign**?: "left" | "center" | "right"
<br>  content
- **contentVerticalAlign**?: "top" | "center" | "bottom"
- **contentXMargin**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **contentYMargin**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **contentXSpacing**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **contentYSpacing**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **titleBarOptions**?: [RectangleOptions](../scenery/Rectangle.md#RectangleOptions)
- **expandedSoundPlayer**?: [TSoundPlayer](../tambo/TSoundPlayer.md)
<br>  sound players for expand and collapse
- **collapsedSoundPlayer**?: [TSoundPlayer](../tambo/TSoundPlayer.md)
- **contextResponseExpanded**?: [TAlertable](../utterance-queue/Utterance.md#TAlertable)
<br>  pdom/voicing - responses to be spoke (both PDOM and Voicing) when the AccordionBox is expanded or collapsed
- **contextResponseCollapsed**?: [TAlertable](../utterance-queue/Utterance.md#TAlertable)
- **helpTextExpanded**?: [PDOMValueType](../scenery/ParallelDOM.md#PDOMValueType) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
<br>  pdom - AccordionBoxes usually don't have helpText. If they do, the content is usually only available
  when collapsed. There is one option for each state.
- **helpTextCollapsed**?: [PDOMValueType](../scenery/ParallelDOM.md#PDOMValueType) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
- **voicingHintResponseExpanded**?: [ResolvedResponse](../utterance-queue/ResponsePacket.md#ResolvedResponse)
<br>  voicing - AccordionBoxes usually don't have helpText, so default values for voicing are not
  set from helpText. Usually, the hint response is removed when the accordion box is expanded.
  There is one option for each state.
- **voicingHintResponseCollapsed**?: [ResolvedResponse](../utterance-queue/ResponsePacket.md#ResolvedResponse)
- **headingTagName**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>
<br>  pdom
- &amp; [NodeOptions](../scenery/Node.md#NodeOptions)




## Source Code

See the source for [AccordionBox.ts](https://github.com/phetsims/sun/blob/main/js/AccordionBox.ts) in the [sun](https://github.com/phetsims/sun) repository.
