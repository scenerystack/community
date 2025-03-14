# FlowConstraint

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/scenery/blob/main/js/layout/constraints/FlowConstraint.ts](https://github.com/phetsims/scenery/blob/main/js/layout/constraints/FlowConstraint.ts) for the most up-to-date information.

## Overview

Main flow-layout logic. Usually used indirectly through FlowBox, but can also be used directly (say, if nodes don't
have the same parent, or a FlowBox can't be used).

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class FlowConstraint {: #FlowConstraint }


```js
import { FlowConstraint } from 'scenerystack/scenery';
```
### Constructor

#### new FlowConstraint( ancestorNode : <span style="font-weight: 400;">[Node](../scenery/Node.md)</span>, providedOptions? : <span style="font-weight: 400;">[FlowConstraintOptions](../scenery/FlowConstraint.md#FlowConstraintOptions)</span> ) {: #FlowConstraint-constructor data-toc-label='new FlowConstraint' }

### Instance Methods

#### layout() {: #layout data-toc-label='layout' }

(protected)

#### insertCell( index : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, cell : <span style="font-weight: 400;">[FlowCell](../scenery/FlowCell.md)</span> ) {: #insertCell data-toc-label='insertCell' }

#### removeCell( cell : <span style="font-weight: 400;">[FlowCell](../scenery/FlowCell.md)</span> ) {: #removeCell data-toc-label='removeCell' }

#### getCellQuantity() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #getCellQuantity data-toc-label='getCellQuantity' }

#### reorderCells( cells : <span style="font-weight: 400;">[FlowCell](../scenery/FlowCell.md)[]</span>, minChangeIndex : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, maxChangeIndex : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) {: #reorderCells data-toc-label='reorderCells' }

#### dispose() {: #dispose data-toc-label='dispose' }

Releases references

### Static Methods

#### create( ancestorNode : <span style="font-weight: 400;">[Node](../scenery/Node.md)</span>, options? : <span style="font-weight: 400;">[FlowConstraintOptions](../scenery/FlowConstraint.md#FlowConstraintOptions)</span> ) : <span style="font-weight: 400;">[FlowConstraint](../scenery/FlowConstraint.md)</span> {: #create data-toc-label='create' }



## Type FlowConstraintOptions {: #FlowConstraintOptions }


```js
import type { FlowConstraintOptions } from 'scenerystack/scenery';
```


- **spacing**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
<br>  The default spacing in-between elements in the primary direction. If additional (or less) spacing is desired for
  certain elements, per-element margins (even negative) can be set in the layoutOptions of nodes contained.
- **lineSpacing**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
<br>  The default spacing in-between lines long the secondary axis.
- **justify**?: [HorizontalLayoutJustification](../scenery/LayoutJustification.md#HorizontalLayoutJustification) | [VerticalLayoutJustification](../scenery/LayoutJustification.md#VerticalLayoutJustification)
<br>  How extra space along the primary axis is allocated. The default is spaceBetween.
- **justifyLines**?: [HorizontalLayoutJustification](../scenery/LayoutJustification.md#HorizontalLayoutJustification) | [VerticalLayoutJustification](../scenery/LayoutJustification.md#VerticalLayoutJustification) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
<br>  How extra space along the secondary axis is allocated. The default is null (which will expand content to fit)
- **wrap**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
<br>  Whether line-wrapping is enabled. If so, the primary preferred axis will determine where things are wrapped.
- **preferredWidthProperty**?: [TProperty](../axon/TProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>&gt;
<br>  The preferred width/height (ideally from a container's localPreferredWidth/localPreferredHeight.
- **preferredHeightProperty**?: [TProperty](../axon/TProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>&gt;
- **minimumWidthProperty**?: [TProperty](../axon/TProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>&gt;
<br>  The minimum width/height (ideally from a container's localMinimumWidth/localMinimumHeight.
- **minimumHeightProperty**?: [TProperty](../axon/TProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>&gt;
- &amp; [ExternalFlowConfigurableOptions](../scenery/FlowConfigurable.md#ExternalFlowConfigurableOptions) &amp; [NodeLayoutAvailableConstraintOptions](../scenery/NodeLayoutConstraint.md#NodeLayoutAvailableConstraintOptions)




## Source Code

See the source for [FlowConstraint.ts](https://github.com/phetsims/scenery/blob/main/js/layout/constraints/FlowConstraint.ts) in the [scenery](https://github.com/phetsims/scenery) repository.
