# GroupSelectModel

## Overview

"Group Sort Interaction" overview:
Model type for the "group sort" interaction. This interaction behaves as such:
- Alt input treats the entire group as a single entity. Instead of using scenery focus control, it is handled internally.
- Focusing on the group highlights a "selected" group item. The interaction starts in "selection" state.
- Interaction keys change the "selection" (focus) of a group item. Focus highlight around the selected item is solid.
- The selected item is grabbable (see note below).
- Space/enter are used to "grab" the selection, turning the interaction state to "sorting" state. Pressing again
  toggles back to "selection" state. In sorting state, the focus highlight is dashed.
- Interaction keys in "sorting" state sort the group item, which changes the value of that group item.

NOTE: "focus" in this interaction is called "selection" as to not overload the term. This is because the
"focused" group item is stored and changed even when it doesn't have browser focus on it. See selectedGroupItemProperty.

Class Overview:
This class holds model information about the state of the group sort interaction. This includes specifics about
whether the interaction is in "selection" or "sorting" state. Also about if portions of the interaction have
"successfully" occurred such that hint cues don't need to be displayed anymore.

A note about mouse input:
All group sort instances thus far have been accompanied by mouse/touch input as well. Though this goes beyond the
scope of group sort to implement, there are mouse-specific Properties here in the model that help sync group
sort state/cueing with the visual cueing too. Please follow instructions below to make sure those are used
appropriately.

A note about using with scenes:
In general, there is just one instance of this per model, and not per scene. This is because if someone can
successfully grab and sort in one scene, then that learned understanding about the interaction should transfer to
the next scene.

A note about PhET-iO:
Properties that handle visual cue states are not PhET-iO instrumented, because they are considered transient.
See showMouseCueProperty for the extent of PhET-iO customization.

Implementation steps (these steps apply to the model and view):
- use with GroupSortInteractionView
- reset selectedGroupItemProperty with a sim-specific heuristic when the underlying model needs to update the best
  first selection. (Also see GroupSortInteractionView.getGroupItemToSelect for a hook to apply this on group focus).
- the grab/release cue is created for you, and can be repositioned by accessing from your GroupSortInteractionView instance.
- Handle your own keyboard and mouse "sort indicator cue node" (see registerUpdateSortCueNode())
- use setMouseSortedGroupItem( true ) on mouse/touch sorting interactions to make sure that the mouse sort cue visibility is correct.
- mouseSortCueVisibleProperty should be set by client, using mouseSortCueShouldBeVisible() in addition to any sim-specific logic required.
- It is best to use one model per screen and one view per scene.
- use GroupSortInteractionView.groupSortGroupFocusHighlightPath.shape to set the group highlight dynamically
- use positionSortCueNodeEmitter to update the position of the sort cue for the keyboard interaction.
- use enabledProperty to control if sorting is enabled. Note that focus and selection are always available (for keyboard tab order consistency)
- Note that if GroupSelectModel is PhET-iO instrumented, ItemModel must be a PhetioObject.

@author Michael Kauzmann (PhET Interactive Simulations)
@author Marla Schulz (PhET Interactive Simulations)

## Class GroupSelectModel {: #GroupSelectModel }


```js
import { GroupSelectModel } from 'scenerystack/scenery-phet';
```
### Constructor

#### new GroupSelectModel( providedOptions? : <span style="font-weight: 400;">[GroupSelectModelOptions](../scenery-phet/GroupSelectModel.md#GroupSelectModelOptions)&lt;ItemModel&gt;</span> ) {: #GroupSelectModel-constructor data-toc-label='new GroupSelectModel' }

### Instance Methods

#### setMouseSortedGroupItem( sortedByMouse : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> ) {: #setMouseSortedGroupItem data-toc-label='setMouseSortedGroupItem' }

Wrap this in a function to make sure that hasMouseSortedGroupItemProperty is never read or listened to. Instead,
listen to hasGroupItemBeenSortedProperty (like to set the mouseSortCueVisibleProperty).

#### mouseSortCueShouldBeVisible() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #mouseSortCueShouldBeVisible data-toc-label='mouseSortCueShouldBeVisible' }

Given the knowledge that GroupSelectModel has, should the mouse sort cue be visible? This most often
isn't the complete boolean, since there will be sim-specific knowledge that contributes to the final visibility
of the Node.

#### resetInteractionState() {: #resetInteractionState data-toc-label='resetInteractionState' }

Reset the interaction without changing the cueing logic. This is best called during a data "erase" and also when
switching between scenes.

#### reset() {: #reset data-toc-label='reset' }

#### clearSelection() {: #clearSelection data-toc-label='clearSelection' }

Clear the selection state for the interaction (setting to null)

#### registerUpdateSortCueNode( updateSortIndicatorNode : <span style="font-weight: 400;">() =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span></span> ) {: #registerUpdateSortCueNode data-toc-label='registerUpdateSortCueNode' }

Register your closure responsible for updating the sort-indicator node. This should be called with a callback that
updates mouseSortCueVisibleProperty and maybe does other things. You will likely need to call this update function
for sim specific usages as well.

#### interrupt() {: #interrupt data-toc-label='interrupt' }

Interrupt the group sort interaction

#### dispose() {: #dispose data-toc-label='dispose' }

### Instance Properties

#### selectedGroupItemProperty : <span style="font-weight: 400;">[Property](../axon/Property.md)&lt;ItemModel | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>&gt;</span> {: #selectedGroupItemProperty data-toc-label='selectedGroupItemProperty' }

(readonly)

The group item that is the selected/focused/sorted. If null, then there is nothing to sort (no items?), and the
interaction will no-op. Feel free to dynamically change this value to update the realtime selection of the
group sort interaction.

#### isGroupItemKeyboardGrabbedProperty : <span style="font-weight: 400;">[BooleanProperty](../axon/BooleanProperty.md)</span> {: #isGroupItemKeyboardGrabbedProperty data-toc-label='isGroupItemKeyboardGrabbedProperty' }

(readonly)

Whether a group item is being grabbed via keyboard interaction. When true, the focus highlight will display as
dashed instead of solid.

#### grabReleaseCueVisibleProperty : <span style="font-weight: 400;">[TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>&gt;</span> {: #grabReleaseCueVisibleProperty data-toc-label='grabReleaseCueVisibleProperty' }

(readonly)

Whether the 'Press SPACE to Grab or Release' dialog is showing

#### keyboardSortCueVisibleProperty : <span style="font-weight: 400;">[TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>&gt;</span> {: #keyboardSortCueVisibleProperty data-toc-label='keyboardSortCueVisibleProperty' }

(readonly)

Whether the keyboard sort icon cue is showing

#### isKeyboardFocusedProperty : <span style="font-weight: 400;">[BooleanProperty](../axon/BooleanProperty.md)</span> {: #isKeyboardFocusedProperty data-toc-label='isKeyboardFocusedProperty' }

(readonly)

Whether the keyboard is currently focused on a sim component

#### hasKeyboardGrabbedGroupItemProperty : <span style="font-weight: 400;">[BooleanProperty](../axon/BooleanProperty.md)</span> {: #hasKeyboardGrabbedGroupItemProperty data-toc-label='hasKeyboardGrabbedGroupItemProperty' }

(readonly)

Properties that switch to true when the specified action has occurred once.

#### hasKeyboardSortedGroupItemProperty : <span style="font-weight: 400;">[BooleanProperty](../axon/BooleanProperty.md)</span> {: #hasKeyboardSortedGroupItemProperty data-toc-label='hasKeyboardSortedGroupItemProperty' }

(readonly)

Whether a group item has been sorted with keyboard input.

#### hasKeyboardSelectedGroupItemProperty : <span style="font-weight: 400;">[BooleanProperty](../axon/BooleanProperty.md)</span> {: #hasKeyboardSelectedGroupItemProperty data-toc-label='hasKeyboardSelectedGroupItemProperty' }

(readonly)

Whether the user has changed the selected group item with the keyboard controls. Note, this will not be true until
the selection changes from the default upon focus.

#### mouseSortCueVisibleProperty : <span style="font-weight: 400;">[Property](../axon/Property.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>&gt;</span> {: #mouseSortCueVisibleProperty data-toc-label='mouseSortCueVisibleProperty' }

(readonly)

Whether the mouse/touch sort icon cue is currently showing on the group item area.
Client should set this Property as well as use it for their mouse sort cue node.
Client should manually register callbacks to update the visual cue with registerUpdateSortCueNode().

#### hasMouseSortedGroupItemProperty : <span style="font-weight: 400;">[BooleanProperty](../axon/BooleanProperty.md)</span> {: #hasMouseSortedGroupItemProperty data-toc-label='hasMouseSortedGroupItemProperty' }

(readonly)

Whether a group item has been sorted with mouse/touch (non keyboard) input. This is set to true from outside
input (not from keyboard/group sort input), but is important for cue showing.

#### hasGroupItemBeenSortedProperty : <span style="font-weight: 400;">[TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>&gt;</span> {: #hasGroupItemBeenSortedProperty data-toc-label='hasGroupItemBeenSortedProperty' }

(readonly)

Whether any group item has yet been sorted to a new value, even if not by the "group sort" interaction. This
Property should be used to control the mouseSortCueVisibleProperty. The mouse sort cue does not need to be shown
if a keyboard sort has occurred (because now the user knows that the group items are sortable).

#### getGroupItemValue : <span style="font-weight: 400;">( itemModel: ItemModel ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> {: #getGroupItemValue data-toc-label='getGroupItemValue' }

(readonly)



## Type GroupSelectModelOptions {: #GroupSelectModelOptions }


```js
import type { GroupSelectModelOptions } from 'scenerystack/scenery-phet';
```


- **getGroupItemValue**: ( itemModel: ItemModel ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
<br>  A function that returns the "value" for a group item set to it. The value is where the item should be sorted.
  Null means that it isn't part of this interaction (different scene/not active/etc).
- **initialMouseSortCueVisible**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
<br>  Define the startup value of the mouseSortCue. False by default.
- &amp; Pick&lt;[PhetioObjectOptions](../tandem/PhetioObject.md#PhetioObjectOptions), "tandem"&gt; &amp; [EnabledComponentOptions](../axon/EnabledComponent.md#EnabledComponentOptions)




## Source Code

See the source for [GroupSelectModel.ts](https://github.com/phetsims/scenery-phet/blob/main/js/accessibility/group-sort/model/GroupSelectModel.ts) in the [scenery-phet](https://github.com/phetsims/scenery-phet) repository.
