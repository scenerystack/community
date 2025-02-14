# GrabDragInteraction

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/scenery-phet/blob/main/js/accessibility/grab-drag/GrabDragInteraction.ts](https://github.com/phetsims/scenery-phet/blob/main/js/accessibility/grab-drag/GrabDragInteraction.ts) for the most up-to-date information.

## Overview

The main interaction for grabbing and dragging an object through the PDOM and assistive technology. It works by
taking in a Node to augment with the PDOM interaction. In fact it works much like a mixin. In general, this type
will mutate the accessible content (PDOM) of the passed in Node, toggling
between an "idle" state and a "grabbed" state. When each state changes, the underlying PDOM element and general
interaction does as well.

To accomplish this there are options to be filled in that keep track of the scenery inputListeners for each state,
as well as options to mutate the Node for each state. By default the idle is a `button` with a containing  `div`,
and the grabbed state is a focusable `div` with an "application" aria role. It is up to the client to supply a
KeyboardDragListener as an arg that will be added to the Node in the "grabbed" state.

As a note on terminology, mostly things are referred to by their current "interaction state" which is either "idle"
or "grabbed".

This type will alert when the grabbed state is released, but no default alert is provided when the object is grabbed.
This is because in usages so far, that alert has been custom, context specific, and easier to just supply through
the onGrab callback option.

NOTE: You SHOULD NOT add listeners directly to the Node where it is constructed, instead see
`options.listenersWhileIdle/Grabbed`. These will keep track of the listeners for each interaction state, and
will set them accordingly. In rare cases it may be desirable to have a listener attached no matter the state, but that
has not come up so far.

NOTE: There is no "undo" for a mutate call, so it is the client's job to make sure that idle/grabbedStateOptions objects
appropriately "cancel" out the other. The same goes for any alterations that are done on `onGrab` and `onRelease`
callbacks.

NOTE: problems may occur if you change the focusHighlight or interactiveHighlight of the Node passed in after
creating this type.

NOTE: focusHighlightLayerable and interactiveHighlightLayerable is finicky with this type. In order to support
it, you must have set the focusHighlight or interactiveHighlight to the wrappedNode and added the focusHighlight
to the scene graph before calling this type's constructor.

NOTE on positioning the grab "cue" Node: transforming the wrappedNode after creating this type will not update the
layout of the grabCueNode. This is because the cue Node is a child of the focus highlight. As a
result, currently you must correctly position node before the cue Node is created.

NOTE: upon "activation" of this type, meaning that the user grabs the object and it turns into a grabbed, the
wrappedNode is blurred and refocused. This means that the input event "blur()" set in listenersWhileIdle will
not just fire when navigating through the sim, but also upon activation. This weirdness is to make sure that the
input event "focus()" is called and supported for within listenersWhileGrabbed

NOTE: For PhET-iO instrumentation, GrabDragInteraction.enabledProperty is phetioReadOnly, it makes the most sense
to link to whatever Node control's the mouse/touch input and toggle grab drag enabled when that Node's inputEnabled
changes. For example see Friction.

@author Michael Kauzmann (PhET Interactive Simulations)

## Class GrabDragInteraction {: #GrabDragInteraction }


Options that can be forwarded to the target Node when the state changes. Fields that are set by the implementation
of GrabDragInteraction are omitted.
type StateOptions = StrictOmit&lt;ParallelDOMOptions, 'descriptionContent' | 'accessibleHelpText' | 'descriptionTagName' | 'accessibleName' | 'innerContent' | 'ariaLabel'&gt;;

```js
import { GrabDragInteraction } from 'scenerystack/scenery-phet';
```
### Constructor

#### new GrabDragInteraction( node : <span style="font-weight: 400;">[Node](../scenery/Node.md)</span>, keyboardDragListener : <span style="font-weight: 400;">[KeyboardDragListener](../scenery/KeyboardDragListener.md)</span>, interactionCueParent : <span style="font-weight: 400;">[Node](../scenery/Node.md)</span>, providedOptions? : <span style="font-weight: 400;">GrabDragInteractionOptions</span> ) {: #GrabDragInteraction-constructor data-toc-label='new GrabDragInteraction' }

### Instance Methods

#### setGrabbedStateAccessibleName( name : <span style="font-weight: 400;">[PDOMValueType](../scenery/ParallelDOM.md#PDOMValueType)</span> ) {: #setGrabbedStateAccessibleName data-toc-label='setGrabbedStateAccessibleName' }

Sets the name to be used when in the "grabbed" state. If already grabbed, the name is set to the target Node right away.

#### setIdleStateAccessibleName( name : <span style="font-weight: 400;">[PDOMValueType](../scenery/ParallelDOM.md#PDOMValueType)</span> ) {: #setIdleStateAccessibleName data-toc-label='setIdleStateAccessibleName' }

Sets the name to be used when in the "idle" state. If already idle, the name is set to the target Node right away.
@param name

#### setKeyboardHelpText( text : <span style="font-weight: 400;">[PDOMValueType](../scenery/ParallelDOM.md#PDOMValueType)</span> ) {: #setKeyboardHelpText data-toc-label='setKeyboardHelpText' }

Set the help text for keboard input. If the runtime supports "gesture description" this is a no-op.

#### getKeyboardHelpText() : <span style="font-weight: 400;">[PDOMValueType](../scenery/ParallelDOM.md#PDOMValueType)</span> {: #getKeyboardHelpText data-toc-label='getKeyboardHelpText' }

#### setGestureHelpText( text : <span style="font-weight: 400;">[PDOMValueType](../scenery/ParallelDOM.md#PDOMValueType)</span> ) {: #setGestureHelpText data-toc-label='setGestureHelpText' }

Set the help text for gesture input. If the runtime does not support "gesture description" this is a no-op.

#### getGestureHelpText() : <span style="font-weight: 400;">[PDOMValueType](../scenery/ParallelDOM.md#PDOMValueType)</span> {: #getGestureHelpText data-toc-label='getGestureHelpText' }

#### setOnGrab( onGrab : <span style="font-weight: 400;">VoidFunction</span> ) {: #setOnGrab data-toc-label='setOnGrab' }

Set the callback that should be used when grabbed - called when switching from idle to grabbed state.

#### getOnGrab() : <span style="font-weight: 400;">VoidFunction</span> {: #getOnGrab data-toc-label='getOnGrab' }

#### setOnRelease( onRelease : <span style="font-weight: 400;">VoidFunction</span> ) {: #setOnRelease data-toc-label='setOnRelease' }

Set the callback that should be used when released - called when switching from grabbed to idle state.

#### getOnRelease() : <span style="font-weight: 400;">VoidFunction</span> {: #getOnRelease data-toc-label='getOnRelease' }

#### repositionCues( matrix : <span style="font-weight: 400;">[Matrix3](../dot/Matrix3.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> ) {: #repositionCues data-toc-label='repositionCues' }

Set the positions of the grabCueNode and dragCueNode relative to the target Node. The position is determined by
the CuePosition and the offsets.

#### interrupt() {: #interrupt data-toc-label='interrupt' }

Interrupt the grab drag interraction - interrupts any listeners attached and makes sure the
Node is back in its "idle" state.

#### isInputFromMouseOrTouch() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #isInputFromMouseOrTouch data-toc-label='isInputFromMouseOrTouch' }

Often onGrab callbacks need to know whether the grab was triggered from keyboard/pdom, in which case it should
trigger description, OR triggered via mouse/touch which may not trigger description because another listener may
be responsible.

#### reset() {: #reset data-toc-label='reset' }

Reset to initial state

### Instance Properties

#### grabCueNode : <span style="font-weight: 400;">[GrabReleaseCueNode](../scenery-phet/GrabReleaseCueNode.md)</span> {: #grabCueNode data-toc-label='grabCueNode' }

(readonly)

public ONLY to position dynamically. Prefer options.grabCueOptions when possible.



## Type CuePosition {: #CuePosition }


Valid positions for the interaction cue nodes relative to the target Node. For top and bottom, the cue is
centered horizontally. For left and right, the cue is centered vertically.

```js
import type { CuePosition } from 'scenerystack/scenery-phet';
```


"center" | "top" | "bottom" | "left" | "right"



## Source Code

See the source for [GrabDragInteraction.ts](https://github.com/phetsims/scenery-phet/blob/main/js/accessibility/grab-drag/GrabDragInteraction.ts) in the [scenery-phet](https://github.com/phetsims/scenery-phet) repository.
