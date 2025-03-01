# GroupSelectView

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/scenery-phet/blob/main/js/accessibility/group-sort/view/GroupSelectView.ts](https://github.com/phetsims/scenery-phet/blob/main/js/accessibility/group-sort/view/GroupSelectView.ts) for the most up-to-date information.

## Overview

This doc assumes you have read the doc in GroupSelectModel. Read that first as it explains the "group select
interaction" more generally.

The view of the "Group Sort Interaction." This type handles adding the controller for selecting and grabbing
in the interaction for (keyboard). It also handles the individual and group focus highlights.

This class can be used per scene, but the model is best used per screen.

@author Michael Kauzmann (PhET Interactive Simulations)
@author Marla Schulz (PhET Interactive Simulations)

## Class GroupSelectView {: #GroupSelectView }


```js
import { GroupSelectView } from 'scenerystack/scenery-phet';
```
### Constructor

#### new GroupSelectView( model : <span style="font-weight: 400;">[GroupSelectModel](../scenery-phet/GroupSelectModel.md)&lt;ItemModel&gt;</span>, primaryFocusedNode : <span style="font-weight: 400;">[Node](../scenery/Node.md)</span>, providedOptions : <span style="font-weight: 400;">[GroupSelectViewOptions](../scenery-phet/GroupSelectView.md#GroupSelectViewOptions)&lt;ItemModel, ItemNode&gt;</span> ) {: #GroupSelectView-constructor data-toc-label='new GroupSelectView' }

### Instance Methods

#### onGroupItemChange( newGroupItem : <span style="font-weight: 400;">ItemModel</span> ) {: #onGroupItemChange data-toc-label='onGroupItemChange' }

(protected)

By "change" we mean sort or selection.

#### keyboardGrab( groupItem : <span style="font-weight: 400;">ItemModel</span> ) {: #keyboardGrab data-toc-label='keyboardGrab' }

Programmatic way to activate the group select interaction, set its selection, and grab that selection.

#### dispose() {: #dispose data-toc-label='dispose' }

### Instance Properties

#### groupSortGroupFocusHighlightPath : <span style="font-weight: 400;">[Path](../scenery/Path.md)</span> {: #groupSortGroupFocusHighlightPath data-toc-label='groupSortGroupFocusHighlightPath' }

(readonly)

Update group highlight dynamically by setting the `shape` of this path.

#### grabReleaseCueNode : <span style="font-weight: 400;">[Node](../scenery/Node.md)</span> {: #grabReleaseCueNode data-toc-label='grabReleaseCueNode' }

(readonly)

The cue node for grab/release.

#### positionSortCueNodeEmitter : <span style="font-weight: 400;">[Emitter](../axon/Emitter.md)</span> {: #positionSortCueNodeEmitter data-toc-label='positionSortCueNodeEmitter' }

(readonly)

Emitted when the sorting cue should be repositioned. Most likely because the selection has changed.

### Static Methods

#### createSortCueNode( visibleProperty : <span style="font-weight: 400;">[TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>&gt;</span>, scale ) : <span style="font-weight: 400;">[SortCueArrowNode](../scenery-phet/SortCueArrowNode.md)</span> {: #createSortCueNode data-toc-label='createSortCueNode' }

Use SortCueArrowNode to create a Node for the keyboard sorting cue. Can also be used as the mouse/touch cue
Node if desired.

#### create( model : <span style="font-weight: 400;">[GroupSelectModel](../scenery-phet/GroupSelectModel.md)&lt;ItemModel&gt;</span>, primaryFocusedNode : <span style="font-weight: 400;">[Node](../scenery/Node.md)</span>, providedOptions : <span style="font-weight: 400;">[GroupSelectViewOptions](../scenery-phet/GroupSelectView.md#GroupSelectViewOptions)&lt;ItemModel, ItemNode&gt;</span> ) : <span style="font-weight: 400;">[GroupSelectView](../scenery-phet/GroupSelectView.md)&lt;ItemModel, ItemNode&gt;</span> {: #create data-toc-label='create' }

Creator factory, similar to PhetioObject.create(). This is most useful if you don't need to keep the instance of
your GroupSortInteractionView.



## Type GroupSelectViewOptions {: #GroupSelectViewOptions }


```js
import type { GroupSelectViewOptions } from 'scenerystack/scenery-phet';
```


- **getGroupItemToSelect**: ( () =&gt; ItemModel | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span> )
<br>  If GroupSortInteraction doesn't know what the selection should be, this function is called to set the default or
  best guess selection. Return null to not supply a selection (no focus).
- **isGroupItemEnabled**?: ( groupItem: ItemModel ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
<br>  Return the enabled state of a group item. If a group item is not enabled it can be selected, but not sorted.
- **getNodeFromModelItem**: ( model: ItemModel ) =&gt; ItemNode | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
<br>  Given a model item, return the corresponding node. Support 'null' as a way to support multiple scenes. If you
  return null, it means that the provided itemModel is not associated with this view, and shouldn't be handled.
- **getHighlightNodeFromModelItem**?: ( model: ItemModel ) =&gt; [Node](../scenery/Node.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
<br>  Given a model item, return the corresponding focus highlight node. Defaults to the implementation of getNodeFromModelItem.
  Return null if no highlight should be shown for the selection (not recommended).
- **onGrab**?: ( groupItem: ItemModel ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span>
<br>  When the selected group item has been grabbed (into "sorting" state).
- **onRelease**?: ( groupItem: ItemModel ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span>
<br>  When the selected group item is released (back into "selecting" state).
- **grabReleaseCueOptions**?: Partial&lt;[StrictOmit](../phet-core/StrictOmit.md)&lt;[GrabReleaseCueNodeOptions](../scenery-phet/GrabReleaseCueNode.md#GrabReleaseCueNodeOptions), "visibleProperty"&gt;&gt;
<br>  To be passed to the grab/release cue node (which is added to the group focus highlight). The visibleProperty is
  always GroupSelectModel.grabReleaseCueVisibleProperty
- **primaryFocusedNodeOptions**?: [ParallelDOMOptions](../scenery/ParallelDOM.md#ParallelDOMOptions)
<br>  Accessible content provided to the node. This doesn't change from selecting/sorting states. Client is responsible
  for setting accessibleName according to grabbed state, see https://github.com/phetsims/scenery-phet/issues/860
- **grabReleaseKeyboardListenerOptions**?: [KeyboardListenerOptions](../scenery/KeyboardListener.md#KeyboardListenerOptions)&lt;[IntentionalAny](../phet-core/IntentionalAny.md)&gt;
- &amp; [DisposableOptions](../axon/Disposable.md#DisposableOptions)




## Source Code

See the source for [GroupSelectView.ts](https://github.com/phetsims/scenery-phet/blob/main/js/accessibility/group-sort/view/GroupSelectView.ts) in the [scenery-phet](https://github.com/phetsims/scenery-phet) repository.
