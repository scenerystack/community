# KeyboardListener

## Overview

A listener for general keyboard input. Specify the keys with a `keys` option in a readable format that looks like
this: [ 'shift+t', 'alt+shift+r' ]

- Each entry in the array represents a combination of keys that must be pressed to fire a callback.
- '+' separates each key in a single combination.
- The keys leading up to the last key in the combination are considered "modifier" keys. The last key in the
  combination needs to be pressed while the modifier keys are down to fire the callback.
- The order modifier keys are pressed does not matter for firing the callback.

In the above example "shift+t" OR "alt+shift+r" will fire the callback when pressed.

An example usage would like this:

this.addInputListener( new KeyboardListener( {
  keys: [ 'a+b', 'a+c', 'shift+arrowLeft', 'alt+g+t', 'ctrl+3', 'alt+ctrl+t' ],
  fire: ( event, keysPressed, listener ) =&gt; {
    if ( keysPressed === 'a+b' ) {
      console.log( 'you just pressed a+b!' );
    }
    else if ( keysPressed === 'a+c' ) {
      console.log( 'you just pressed a+c!' );
    }
    else if ( keysPressed === 'alt+g+t' ) {
      console.log( 'you just pressed alt+g+t' );
    }
    else if ( keysPressed === 'ctrl+3' ) {
      console.log( 'you just pressed ctrl+3' );
    }
    else if ( keysPressed === 'shift+arrowLeft' ) {
      console.log( 'you just pressed shift+arrowLeft' );
    }
  }
} ) );

By default, the fire callback will fire when the last key is pressed down. See additional options for firing on key
release or other press and hold behavior.

**Important Modifier Key Behavior**
Modifier keys prevent other key combinations from firing their behavior if they are pressed down.
For example, if you have a listener with 'shift+t' and 'y', pressing 'shift' will prevent 'y' from firing.
This behavior matches the behavior of the browser and is intended to prevent unexpected behavior. However,
this behavior is also true for custom (non-standard) modifier keys. For example, if you have a listener with
'j+t' and 'y', pressing 'j' will prevent 'y' from firing. This is a PhET specific design decision, but it
is consistent with typical modifier key behavior.

**Ignored Modifier Keys**
You can specify modifier keys that should be ignored while the hotkey is active. This allows you to override
default modifier key behavior. For example, if you have a listener for the 'y' key and you want it to
trigger even when the shift key is pressed, you would add 'shift' to the ignored modifier keys list.

Ignored modifier keys are indicated in the key string using the '?' character. You can also choose to ignore
all other modifier keys by placing the '?' before the modifier key. Here are some examples:

'shift?+y' - fires when 'y' is pressed, even if 'shift' is down.
'?shift+y' - fires when 'y' and shift are pressed, but also allows 'ctrl', 'alt', or 'meta' to be down.

**Global Keyboard Listeners**
A KeyboardListener can be added to a Node with addInputListener, and it will fire with normal scenery input dispatch
behavior when the Node has focus. However, a KeyboardListener can also be added "globally", meaning it will fire
regardless of where focus is in the document. Use KeyboardListener.createGlobal. This adds Hotkeys to the
globalHotkeyRegistry. Be sure to dispose of the KeyboardListener when it is no longer needed.

**Potential Pitfall!**
The fire callback is only called if exactly the keys in a group are pressed. If you need to listen to a modifier key,
you must include it in the keys array. For example if you add a listener for 'tab', you must ALSO include
'shift+tab' in the array to observe 'shift+tab' presses. If you provide 'tab' alone, the callback will not fire
if 'shift' is also pressed.

Beware of "key ghosting". Some key combinations are not possible on certain keyboards. For example, some keyboards
cannot press all arrow keys at the same time. Be sure to test your key combinations on a variety of keyboards.
See https://github.com/phetsims/scenery/issues/1655.

@author Jesse Greenberg (PhET Interactive Simulations)

## Class KeyboardListener {: #KeyboardListener }


```js
import { KeyboardListener } from 'scenerystack/scenery';
```
### Constructor

#### new KeyboardListener( providedOptions : <span style="font-weight: 400;">[KeyboardListenerOptions](../scenery/KeyboardListener.md#KeyboardListenerOptions)&lt;Keys&gt;</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### dispose() {: #dispose data-toc-label='dispose' }

Dispose of this listener by disposing of any Callback timers. Then clear all KeyGroups.

#### keydown( event : <span style="font-weight: 400;">[SceneryEvent](../scenery/SceneryEvent.md)&lt;KeyboardEvent&gt;</span> ) {: #keydown data-toc-label='keydown' }

Everything that uses a KeyboardListener should prevent more global scenery keyboard behavior, such as pan/zoom
from arrow keys.

#### focusout( event : <span style="font-weight: 400;">[SceneryEvent](../scenery/SceneryEvent.md)</span> ) {: #focusout data-toc-label='focusout' }

Public because this is called with the scenery listener API. Do not call this directly.

#### focusin( event : <span style="font-weight: 400;">[SceneryEvent](../scenery/SceneryEvent.md)</span> ) {: #focusin data-toc-label='focusin' }

Public because this is called through the scenery listener API. Do not call this directly.

#### cancel() {: #cancel data-toc-label='cancel' }

Part of the scenery listener API. On cancel, clear active KeyGroups and stop their behavior.

#### interrupt() {: #interrupt data-toc-label='interrupt' }

Part of the scenery listener API. Clear active KeyGroups and stop their callbacks.

#### createSyntheticEvent( pointer : <span style="font-weight: 400;">[PDOMPointer](../scenery/PDOMPointer.md)</span> ) : <span style="font-weight: 400;">[SceneryEvent](../scenery/SceneryEvent.md)&lt;KeyboardEvent&gt;</span> {: #createSyntheticEvent data-toc-label='createSyntheticEvent' }

(protected)

### Instance Properties

#### fireOnDown : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #fireOnDown data-toc-label='fireOnDown' }

(readonly)

#### fireOnHold : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #fireOnHold data-toc-label='fireOnHold' }

(readonly)

#### fireOnHoldTiming : <span style="font-weight: 400;">[HotkeyFireOnHoldTiming](../scenery/Hotkey.md#HotkeyFireOnHoldTiming)</span> {: #fireOnHoldTiming data-toc-label='fireOnHoldTiming' }

(readonly)

#### fireOnHoldCustomDelay : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #fireOnHoldCustomDelay data-toc-label='fireOnHoldCustomDelay' }

(readonly)

#### fireOnHoldCustomInterval : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #fireOnHoldCustomInterval data-toc-label='fireOnHoldCustomInterval' }

(readonly)

#### allowOverlap : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #allowOverlap data-toc-label='allowOverlap' }

(readonly)

#### hotkeys : <span style="font-weight: 400;">[Hotkey](../scenery/Hotkey.md)[]</span> {: #hotkeys data-toc-label='hotkeys' }

(readonly)

#### isPressedProperty : <span style="font-weight: 400;">[TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>&gt;</span> {: #isPressedProperty data-toc-label='isPressedProperty' }

(readonly)

A Property that is true when any of the keys

#### pressedKeyStringPropertiesProperty : <span style="font-weight: 400;">[TProperty](../axon/TProperty.md)&lt;[TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;[OneKeyStroke](../scenery/KeyDescriptor.md#OneKeyStroke)&gt;[]&gt;</span> {: #pressedKeyStringPropertiesProperty data-toc-label='pressedKeyStringPropertiesProperty' }

(readonly)

A Property that contains all the Property&lt;KeyDescriptor&gt; that are currently pressed down.

#### interrupted : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #interrupted data-toc-label='interrupted' }

(read-only) - Whether the last key press was interrupted. Will be valid until the next presss.

### Static Methods

#### createGlobal( target : <span style="font-weight: 400;">[Node](../scenery/Node.md)</span>, providedOptions : <span style="font-weight: 400;">[KeyboardListenerOptions](../scenery/KeyboardListener.md#KeyboardListenerOptions)&lt;[OneKeyStroke](../scenery/KeyDescriptor.md#OneKeyStroke)[]&gt;</span> ) : <span style="font-weight: 400;">[KeyboardListener](../scenery/KeyboardListener.md)&lt;[OneKeyStroke](../scenery/KeyDescriptor.md#OneKeyStroke)[]&gt;</span> {: #createGlobal data-toc-label='createGlobal' }

Adds a global KeyboardListener to a target Node. This listener will fire regardless of where focus is in
the document. The listener is returned so that it can be disposed.



## Type KeyboardListenerOptions {: #KeyboardListenerOptions }


```js
import type { KeyboardListenerOptions } from 'scenerystack/scenery';
```
- **keys**?: Keys | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
- **keyStringProperties**?: [TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;[OneKeyStroke](../scenery/KeyDescriptor.md#OneKeyStroke)&gt;[] | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
- **fire**?: ( event: KeyboardEvent | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>, keysPressed: Keys[<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>], listener: [KeyboardListener](../scenery/KeyboardListener.md)&lt;Keys&gt; ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span>
- **press**?: ( event: KeyboardEvent | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>, keysPressed: Keys[<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>], listener: [KeyboardListener](../scenery/KeyboardListener.md)&lt;Keys&gt; ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span>
- **release**?: ( event: KeyboardEvent | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>, keysPressed: Keys[<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>] | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>, listener: [KeyboardListener](../scenery/KeyboardListener.md)&lt;Keys&gt; ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span>
- **focus**?: ( listener: [KeyboardListener](../scenery/KeyboardListener.md)&lt;Keys&gt; ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span>
- **blur**?: ( listener: [KeyboardListener](../scenery/KeyboardListener.md)&lt;Keys&gt; ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span>
- **fireOnDown**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
- **fireOnHold**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
- **fireOnHoldTiming**?: [HotkeyFireOnHoldTiming](../scenery/Hotkey.md#HotkeyFireOnHoldTiming)
- **fireOnHoldCustomDelay**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **fireOnHoldCustomInterval**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **allowOverlap**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
- **override**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
- &amp; [EnabledComponentOptions](../axon/EnabledComponent.md#EnabledComponentOptions)




## Source Code

See the source for [KeyboardListener.ts](https://github.com/phetsims/scenery/blob/main/js/listeners/KeyboardListener.ts) in the [scenery](https://github.com/phetsims/scenery) repository.
