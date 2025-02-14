# Hotkey

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/scenery/blob/main/js/input/Hotkey.ts](https://github.com/phetsims/scenery/blob/main/js/input/Hotkey.ts) for the most up-to-date information.

## Overview

Represents a single hotkey (keyboard shortcut) that can be either:

1. Added to globalHotkeyRegistry (to be available regardless of keyboard focus)
2. Added to a node's inputListeners (to be available only when that node is part of the focused trail)

For example:

   globalHotkeyRegistry.add( new Hotkey( {
     keyStringProperty: new Property( 'y' ),
     fire: () =&gt; console.log( 'fire: y' )
   } ) );

   myNode.addInputListener( {
     hotkeys: [
       new Hotkey( {
         keyStringProperty: new Property( 'x' ),
         fire: () =&gt; console.log( 'fire: x' )
       } )
     ]
   } );

Also supports modifier keys that must be pressed in addition to the Key. See options for a description of how
they behave.

Hotkeys are managed by hotkeyManager, which determines which hotkeys are active based on the globalHotkeyRegistry
and what Node has focus. See that class for information about how hotkeys work.

@author Jesse Greenberg (PhET Interactive Simulations)
@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class Hotkey {: #Hotkey }


```js
import { Hotkey } from 'scenerystack/scenery';
```
### Constructor

#### new Hotkey( providedOptions : <span style="font-weight: 400;">[HotkeyOptions](../scenery/Hotkey.md#HotkeyOptions)</span> ) {: #Hotkey-constructor data-toc-label='new Hotkey' }

### Instance Methods

#### onRelease( event : <span style="font-weight: 400;">KeyboardEvent | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span>, interrupted : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span>, shouldFire : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> ) {: #onRelease data-toc-label='onRelease' }

On "release" of a Hotkey. All keys are released while the Hotkey is inactive. May also fire depending on
events. See hotkeyManager.

#### interrupt() {: #interrupt data-toc-label='interrupt' }

Manually interrupt this hotkey, releasing it and setting a flag so that it will not fire until the next time
keys are pressed.

#### dispose() {: #dispose data-toc-label='dispose' }

### Instance Properties

#### keyStringProperty : <span style="font-weight: 400;">[TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;[OneKeyStroke](../scenery/KeyDescriptor.md#OneKeyStroke)&gt;</span> {: #keyStringProperty data-toc-label='keyStringProperty' }

(readonly)

Straight from options

#### fire : <span style="font-weight: 400;">( event: KeyboardEvent | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span> ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span></span> {: #fire data-toc-label='fire' }

(readonly)

#### press : <span style="font-weight: 400;">( event: KeyboardEvent | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span> ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span></span> {: #press data-toc-label='press' }

(readonly)

#### release : <span style="font-weight: 400;">( event: KeyboardEvent | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span> ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span></span> {: #release data-toc-label='release' }

(readonly)

#### fireOnDown : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #fireOnDown data-toc-label='fireOnDown' }

(readonly)

#### fireOnHold : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #fireOnHold data-toc-label='fireOnHold' }

(readonly)

#### fireOnHoldTiming : <span style="font-weight: 400;">[HotkeyFireOnHoldTiming](../scenery/Hotkey.md#HotkeyFireOnHoldTiming)</span> {: #fireOnHoldTiming data-toc-label='fireOnHoldTiming' }

(readonly)

#### allowOverlap : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #allowOverlap data-toc-label='allowOverlap' }

(readonly)

#### override : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #override data-toc-label='override' }

(readonly)

#### keyDescriptorProperty : <span style="font-weight: 400;">[TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;[KeyDescriptor](../scenery/KeyDescriptor.md)&gt;</span> {: #keyDescriptorProperty data-toc-label='keyDescriptorProperty' }

(readonly)

A Property for the KeyDescriptor describing the key and modifier keys for this hotkey from the keyStringProperty.

#### keysProperty : <span style="font-weight: 400;">[TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;[AllowedKeysString](../scenery/KeyDescriptor.md#AllowedKeysString)[]&gt;</span> {: #keysProperty data-toc-label='keysProperty' }

All keys that are part of this hotkey (key + modifierKeys) as defined by the current KeyDescriptor.

#### isPressedProperty : <span style="font-weight: 400;">[TProperty](../axon/TProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>&gt;</span> {: #isPressedProperty data-toc-label='isPressedProperty' }

(readonly)

A Property that tracks whether the hotkey is currently pressed.
Will be true if it meets the following conditions:

1. Main `key` pressed
2. All modifier keys in the hotkey's `modifierKeys` are pressed
3. All modifier keys not in the hotkey's `modifierKeys` (but in the other enabled hotkeys) are not pressed

#### interrupted {: #interrupted data-toc-label='interrupted' }

(read-only for client code)
Whether the last release (value during isPressedProperty =&gt; false) was due to an interruption (e.g. focus changed).
If false, the hotkey was released due to the key being released.



## Type HotkeyFireOnHoldTiming {: #HotkeyFireOnHoldTiming }


```js
import type { HotkeyFireOnHoldTiming } from 'scenerystack/scenery';
```


"browser" | "custom"



## Type HotkeyOptions {: #HotkeyOptions }


```js
import type { HotkeyOptions } from 'scenerystack/scenery';
```


- **keyStringProperty**: [TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;[OneKeyStroke](../scenery/KeyDescriptor.md#OneKeyStroke)&gt;
<br>  Describes the keys, modifier keys, and ignored modifier keys for this hotkey. This is a Property to support
  dynamic behavior. This will be useful for i18n or creating new keymaps. See KeyDescriptor for documentation
  about the key and modifierKeys.
- **fire**?: ( event: KeyboardEvent | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span> ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span>
<br>  Called as fire() when the hotkey is fired (see fireOnDown/fireOnHold for when that happens).
  The event will be null if the hotkey was fired due to fire-on-hold.
- **press**?: ( event: KeyboardEvent | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span> ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span>
<br>  Called as press() when the hotkey is pressed. Note that the Hotkey may be pressed before firing depending
  on fireOnDown. And press is not called with fire-on-hold. The event may be null if there is a press due to
  the hotkey becoming active due to change in state without a key press.
- **release**?: ( event: KeyboardEvent | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span> ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span>
<br>  Called as release() when the Hotkey is released. Note that the Hotkey may release without calling fire() depending
  on fireOnDown. Event may be null in cases of interrupt or if the hotkey is released due to change in state without
  a key release.
- **fireOnDown**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
<br>  If true, the hotkey will fire when the hotkey is initially pressed.
  If false, the hotkey will fire when the hotkey is finally released.
- **fireOnHold**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
<br>  Whether the fire-on-hold feature is enabled
- **fireOnHoldTiming**?: [HotkeyFireOnHoldTiming](../scenery/Hotkey.md#HotkeyFireOnHoldTiming)
<br>  Whether we should listen to the browser's fire-on-hold timing, or use our own.
- **fireOnHoldCustomDelay**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
<br>  Start to fire continuously after pressing for this long (milliseconds)
- **fireOnHoldCustomInterval**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
<br>  Fire continuously at this interval (milliseconds)
- **allowOverlap**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
<br>  For each main `key`, the hotkey system will only allow one hotkey with allowOverlap:false to be active at any time.
  This is provided to allow multiple hotkeys with the same keys to fire. Default is false.
- **override**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
<br>  If true, any overlapping hotkeys (either added to an ancestor's inputListener or later in the local/global order)
  will be ignored.
- &amp; [EnabledComponentOptions](../axon/EnabledComponent.md#EnabledComponentOptions)




## Source Code

See the source for [Hotkey.ts](https://github.com/phetsims/scenery/blob/main/js/input/Hotkey.ts) in the [scenery](https://github.com/phetsims/scenery) repository.
