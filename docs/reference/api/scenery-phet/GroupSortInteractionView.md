# GroupSortInteractionView

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/scenery-phet/blob/main/js/accessibility/group-sort/view/GroupSortInteractionView.ts](https://github.com/phetsims/scenery-phet/blob/main/js/accessibility/group-sort/view/GroupSortInteractionView.ts) for the most up-to-date information.

## Overview

This doc assumes you have read the doc in GroupSelectModel. Read that first as it explains the "group select
interaction" more generally.

This type adds sorting on top of the GroupSelectView
in the interaction for (keyboard).

@author Michael Kauzmann (PhET Interactive Simulations)
@author Marla Schulz (PhET Interactive Simulations)

## Class GroupSortInteractionView {: #GroupSortInteractionView }


```js
import { GroupSortInteractionView } from 'scenerystack/scenery-phet';
```
### Constructor

#### new GroupSortInteractionView( model : <span style="font-weight: 400;">[GroupSelectModel](../scenery-phet/GroupSelectModel.md)&lt;ItemModel&gt;</span>, primaryFocusedNode : <span style="font-weight: 400;">[Node](../scenery/Node.md)</span>, providedOptions : <span style="font-weight: 400;">[GroupSortInteractionViewOptions](../scenery-phet/GroupSortInteractionView.md#GroupSortInteractionViewOptions)&lt;ItemModel, ItemNode&gt;</span> ) {: #GroupSortInteractionView-constructor data-toc-label='new GroupSortInteractionView' }

### Instance Methods

#### dispose() {: #dispose data-toc-label='dispose' }

### Static Methods

#### createSortCueNode( visibleProperty : <span style="font-weight: 400;">[TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>&gt;</span>, scale ) : <span style="font-weight: 400;">[SortCueArrowNode](../scenery-phet/SortCueArrowNode.md)</span> {: #createSortCueNode data-toc-label='createSortCueNode' }

Use SortCueArrowNode to create a Node for the keyboard sorting cue. Can also be used as the mouse/touch cue
Node if desired.



## Type GroupSortInteractionViewOptions {: #GroupSortInteractionViewOptions }


```js
import type { GroupSortInteractionViewOptions } from 'scenerystack/scenery-phet';
```


- **getNextSelectedGroupItem**: ( delta: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>, currentlySelectedGroupItem: ItemModel ) =&gt; ItemModel
<br>  Given the delta (difference from current value to new value), return the corresponding next group item model to be selected.
- **sortingRangeProperty**: [TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;[Range](../dot/Range.md)&gt;
<br>  The available range for sorting. This is the acceptable range for the valueProperty of ItemModel (see model.getGroupItemValue()).
- **sortingRangeListener**?: ( range: [Range](../dot/Range.md) ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span>
- **sortGroupItem**: ( groupItem: ItemModel, newValue: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span>
<br>  Do the sort operation, allowing for custom actions, must be implemented by all implementations, but likely just
  should default to updating the "valueProperty" of the selected group item to the new value that is provided.
- **onSort**?: ( groupItem: ItemModel, oldValue: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span>
<br>  Callback called after a group item is sorted. Note that sorting may not have changed its value (like if at the boundary
  trying to move past the range).
- **numberKeyMapper**?: ( ( pressedKeys: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span> ) =&gt; ( <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span> ) ) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
<br>  If provided, listen to the number keys as well to sort the selected group item. Provide the value that the
  number key maps to. A direct value, not a delta. If the function returns null, then no action takes place for the
  input. If the option is set to null, then number keys will not be listened to for this interaction.
- **sortStep**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
<br>  The value-change delta step size when selecting/sorting the group items.
- **pageSortStep**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **shiftSortStep**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- &amp; [GroupSelectViewOptions](../scenery-phet/GroupSelectView.md#GroupSelectViewOptions)&lt;ItemModel, ItemNode&gt;




## Source Code

See the source for [GroupSortInteractionView.ts](https://github.com/phetsims/scenery-phet/blob/main/js/accessibility/group-sort/view/GroupSortInteractionView.ts) in the [scenery-phet](https://github.com/phetsims/scenery-phet) repository.
