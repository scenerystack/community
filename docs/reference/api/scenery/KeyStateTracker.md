# KeyStateTracker

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/scenery/blob/main/js/accessibility/KeyStateTracker.ts](https://github.com/phetsims/scenery/blob/main/js/accessibility/KeyStateTracker.ts) for the most up-to-date information.

## Overview

A type that will manage the state of the keyboard. This will track which keys are being held down and for how long.
It also offers convenience methods to determine whether or not specific keys are down like shift or enter using
KeyboardUtils' key schema.

@author Michael Kauzmann (PhET Interactive Simulations)
@author Jesse Greenberg (PhET Interactive Simulations)
@author Michael Barlow

## Class KeyStateTracker {: #KeyStateTracker }


```js
import { KeyStateTracker } from 'scenerystack/scenery';
```
### Constructor

#### new KeyStateTracker( options? : <span style="font-weight: 400;">[KeyStateTrackerOptions](../scenery/KeyStateTracker.md#KeyStateTrackerOptions)</span> ) {: #KeyStateTracker-constructor data-toc-label='new KeyStateTracker' }

### Instance Methods

#### keydownUpdate( domEvent : <span style="font-weight: 400;">KeyboardEvent</span> ) {: #keydownUpdate data-toc-label='keydownUpdate' }

Implements keyboard dragging when listener is attached to the Node, public so listener is attached
with addInputListener(). Only updated when enabled.

Note that this event is assigned in the constructor, and not to the prototype. As of writing this,
`Node.addInputListener` only supports type properties as event listeners, and not the event keys as
prototype methods. Please see https://github.com/phetsims/scenery/issues/851 for more information.

#### keyupUpdate( domEvent : <span style="font-weight: 400;">KeyboardEvent</span> ) {: #keyupUpdate data-toc-label='keyupUpdate' }

Behavior for keyboard 'up' DOM event. Public so it can be attached with addInputListener(). Only updated when
enabled.

Note that this event is assigned in the constructor, and not to the prototype. As of writing this,
`Node.addInputListener` only supports type properties as event listeners, and not the event keys as
prototype methods. Please see https://github.com/phetsims/scenery/issues/851 for more information.

#### getLastKeyDown() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> {: #getLastKeyDown data-toc-label='getLastKeyDown' }

Returns the KeyboardEvent.code from the last key down that updated the keystate.

#### isKeyDown( key : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #isKeyDown data-toc-label='isKeyDown' }

Returns true if a key with the KeyboardEvent.code is currently down.

#### isEnglishKeyDown( key : <span style="font-weight: 400;">[EnglishKey](../scenery/EnglishStringToCodeMap.md#EnglishKey)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #isEnglishKeyDown data-toc-label='isEnglishKeyDown' }

Returns true if the key with the KeyboardEvent.code is currently down.

#### getKeysDown() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>[]</span> {: #getKeysDown data-toc-label='getKeysDown' }

Returns the set of keys that are currently down.

NOTE: Always returns a new array, so a defensive copy is not needed.

#### getEnglishKeysDown() : <span style="font-weight: 400;">Set&lt;[EnglishKeyString](../scenery/EnglishStringToCodeMap.md#EnglishKeyString)&gt;</span> {: #getEnglishKeysDown data-toc-label='getEnglishKeysDown' }

Returns the set of EnglishKeys that are currently down.

NOTE: Always returns a new Set, so a defensive copy is not needed.

#### isAnyKeyInListDown( keyList : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>[]</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #isAnyKeyInListDown data-toc-label='isAnyKeyInListDown' }

Returns true if any of the keys in the list are currently down. Keys are the KeyboardEvent.code strings.

#### areKeysDown( keyList : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>[]</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #areKeysDown data-toc-label='areKeysDown' }

Returns true if ALL of the keys in the list are currently down. Values of the keyList array are the
KeyboardEvent.code for the keys you are interested in.

#### areKeysDownWithoutExtraModifiers( keyList : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>[]</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #areKeysDownWithoutExtraModifiers data-toc-label='areKeysDownWithoutExtraModifiers' }

Returns true if every key in the list is down but no other modifier keys are down, unless
the modifier key is in the list. For example
areKeysDownWithoutModifiers( [ 'ShiftLeft', 'ArrowLeft' ] ) -&gt; true if left shift and left arrow keys are down.
areKeysDownWithoutModifiers( [ 'ShiftLeft', 'ArrowLeft' ] ) -&gt; true if left shift, left arrow, and J keys are down.
areKeysDownWithoutModifiers( [ 'ArrowLeft' ] ) -&gt; false if left shift and arrow left keys are down.
areKeysDownWithoutModifiers( [ 'ArrowLeft' ] ) -&gt; true if the left arrow key is down.
areKeysDownWithoutModifiers( [ 'ArrowLeft' ] ) -&gt; true if the left arrow and R keys are down.

This is important for determining when keyboard events should fire listeners. Say you have two KeyboardListeners -
One fires from key 'c' and another fires from 'shift-c'. If the user presses 'shift-c', you do NOT want both to
fire.

@param keyList - List of KeyboardEvent.code strings for keys you are interested in.

#### keysAreDown() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #keysAreDown data-toc-label='keysAreDown' }

Returns true if any keys are down according to teh keyState.

#### timeDownForKey( key : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #timeDownForKey data-toc-label='timeDownForKey' }

Returns the amount of time that the provided key has been held down. Error if the key is not currently down.
@param key - KeyboardEvent.code for the key you are inspecting.

#### clearState( skipNotify? : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> ) {: #clearState data-toc-label='clearState' }

Clear the entire state of the key tracker, basically restarting the tracker.

#### attachToWindow() {: #attachToWindow data-toc-label='attachToWindow' }

Add this KeyStateTracker to the self so that it updates whenever the document receives key events. This is
useful if you want to observe key presses while DOM focus not within the PDOM root.

#### setEnabled( enabled : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> ) {: #setEnabled data-toc-label='setEnabled' }

The KeyState is cleared when the tracker is disabled.

#### isEnabled() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #isEnabled data-toc-label='isEnabled' }

#### detachFromDocument() {: #detachFromDocument data-toc-label='detachFromDocument' }

Detach listeners from the document that would update the state of this KeyStateTracker on key presses.

#### dispose() {: #dispose data-toc-label='dispose' }

### Instance Properties

#### keydownEmitter : <span style="font-weight: 400;">[TEmitter](../axon/TEmitter.md)&lt;[ KeyboardEvent ]&gt;</span> {: #keydownEmitter data-toc-label='keydownEmitter' }

(readonly)

Emits events when keyup/keydown updates are received. These will emit after any updates to the
keyState so that keyState is correct in time for listeners. Note the valueType is a native KeyboardEvent event.

#### keyupEmitter : <span style="font-weight: 400;">[TEmitter](../axon/TEmitter.md)&lt;[ KeyboardEvent ]&gt;</span> {: #keyupEmitter data-toc-label='keyupEmitter' }

(readonly)

#### keyDownStateChangedEmitter : <span style="font-weight: 400;">[TEmitter](../axon/TEmitter.md)&lt;[ KeyboardEvent | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span> ]&gt;</span> {: #keyDownStateChangedEmitter data-toc-label='keyDownStateChangedEmitter' }

(readonly)

Emits when any key "down" state changes. This is useful for when you want to know if any key is down or up.
Does NOT change for timeDown changes. DOES fire if the browser sends fire-on-hold down.

#### keydownUpdateAction : <span style="font-weight: 400;">[PhetioAction](../tandem/PhetioAction.md)&lt;[ KeyboardEvent ]&gt;</span> {: #keydownUpdateAction data-toc-label='keydownUpdateAction' }

(readonly)

Action which updates the KeyStateTracker, when it is time to do so - the update is wrapped by an Action so that
the KeyStateTracker state is captured for PhET-iO.

#### keyupUpdateAction : <span style="font-weight: 400;">[PhetioAction](../tandem/PhetioAction.md)&lt;[ KeyboardEvent ]&gt;</span> {: #keyupUpdateAction data-toc-label='keyupUpdateAction' }

(readonly)

Action which updates the state of the KeyStateTracker on key release. This is wrapped in an Action so that state
is captured for PhET-iO.



## Type KeyStateTrackerOptions {: #KeyStateTrackerOptions }


```js
import type { KeyStateTrackerOptions } from 'scenerystack/scenery';
```


[PickOptional](../phet-core/PickOptional.md)&lt;[PhetioObjectOptions](../tandem/PhetioObject.md#PhetioObjectOptions), "tandem"&gt;



## Source Code

See the source for [KeyStateTracker.ts](https://github.com/phetsims/scenery/blob/main/js/accessibility/KeyStateTracker.ts) in the [scenery](https://github.com/phetsims/scenery) repository.
