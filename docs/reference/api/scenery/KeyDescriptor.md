# KeyDescriptor

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/scenery/blob/main/js/input/KeyDescriptor.ts](https://github.com/phetsims/scenery/blob/main/js/input/KeyDescriptor.ts) for the most up-to-date information.

## Overview

A collection of fields that describes keys for a Hotkey. This includes a key that should be pressed to fire the
behavior, modifier keys that must be pressed in addition to the key, and ignored modifier keys that will not prevent
the hotkey from firing even if they are down.

See the KeyDescriptorOptions for detailed information.

@author Jesse Greenberg (PhET Interactive Simulations)

## Class KeyDescriptor {: #KeyDescriptor }


```js
import { KeyDescriptor } from 'scenerystack/scenery';
```
### Constructor

#### new KeyDescriptor( providedOptions? : <span style="font-weight: 400;">[KeyDescriptorOptions](../scenery/KeyDescriptor.md#KeyDescriptorOptions)</span> ) {: #KeyDescriptor-constructor data-toc-label='new KeyDescriptor' }

### Instance Methods

#### getHotkeyString() : <span style="font-weight: 400;">[OneKeyStroke](../scenery/KeyDescriptor.md#OneKeyStroke)[<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>]</span> {: #getHotkeyString data-toc-label='getHotkeyString' }

Returns a string representation of the hotkey in the format of "natural" english. Modifier keys first, followed
by the final key. For example, if the key is 't' and the modifier keys are 'shift', the string would be 'shift+t'.

### Instance Properties

#### key : <span style="font-weight: 400;">[AllowedKeysString](../scenery/KeyDescriptor.md#AllowedKeysString)</span> {: #key data-toc-label='key' }

(readonly)

#### modifierKeys : <span style="font-weight: 400;">[AllowedKeysString](../scenery/KeyDescriptor.md#AllowedKeysString)[]</span> {: #modifierKeys data-toc-label='modifierKeys' }

(readonly)

#### ignoredModifierKeys : <span style="font-weight: 400;">[AllowedKeysString](../scenery/KeyDescriptor.md#AllowedKeysString)[]</span> {: #ignoredModifierKeys data-toc-label='ignoredModifierKeys' }

(readonly)

### Static Methods

#### keyStrokeToKeyDescriptor( keyStroke : <span style="font-weight: 400;">[OneKeyStroke](../scenery/KeyDescriptor.md#OneKeyStroke)</span> ) : <span style="font-weight: 400;">[KeyDescriptor](../scenery/KeyDescriptor.md)</span> {: #keyStrokeToKeyDescriptor data-toc-label='keyStrokeToKeyDescriptor' }

Parses an input string to extract the main key and its associated modifier keys, while considering ignored
modifier keys based on the placement of the '?' delimiter.

See KeyboardListener for a description of key and modifierKey behavior.

The function handles the following cases:
1. If a word is followed by '?', it is added to `ignoredModifierKeys`.
2. If a word is preceded by '?', it indicates all other default modifier keys should be ignored,
   except the word itself, which is added to `modifierKeys`.

keyStrokeToKeyDescriptor('r');
// Output: { key: 'r', modifierKeys: [], ignoredModifierKeys: [] }

keyStrokeToKeyDescriptor('alt+r');
// Output: { key: 'r', modifierKeys: ['alt'], ignoredModifierKeys: [] }

keyStrokeToKeyDescriptor('alt+j+r');
// Output: { key: 'r', modifierKeys: ['alt', 'j'], ignoredModifierKeys: [] }

keyStrokeToKeyDescriptor('alt?+j+r');
// Output: { key: 'r', modifierKeys: ['j'], ignoredModifierKeys: ['alt'] }

keyStrokeToKeyDescriptor('shift?+t');
// Output: { key: 't', modifierKeys: [], ignoredModifierKeys: ['shift'] }

keyStrokeToKeyDescriptor('?shift+t');
// Output: { key: 't', modifierKeys: ['shift'], ignoredModifierKeys: ['alt', 'control', 'meta'] }

keyStrokeToKeyDescriptor('?shift+t+j');
// Output: { key: 'j', modifierKeys: ['shift', 't'], ignoredModifierKeys: ['alt', 'control', 'meta'] }




## Type AllowedKeysString {: #AllowedKeysString }


Allowed keys as a string - the format they will be provided by the user.

```js
import type { AllowedKeysString } from 'scenerystack/scenery';
```


`${AllowedKeys}`



## Type KeyDescriptorOptions {: #KeyDescriptorOptions }


These combinations are not supported by TypeScript: "TS2590: Expression produces a union type that is too complex to
represent." See above note and https://github.com/microsoft/TypeScript/issues/41160#issuecomment-1287271132.
`${AllowedKeys}+${AllowedKeys}+${AllowedKeys}+${AllowedKeys}`;
type KeyCombinations = `${OneKeyStroke}` | `${OneKeyStroke},${OneKeyStroke}`;

```js
import type { KeyDescriptorOptions } from 'scenerystack/scenery';
```


- **key**: [AllowedKeysString](../scenery/KeyDescriptor.md#AllowedKeysString)
<br>  The key that should be pressed to trigger the hotkey (in fireOnDown:true mode) or released to trigger the hotkey
  (in fireOnDown:false mode).
- **modifierKeys**?: [AllowedKeysString](../scenery/KeyDescriptor.md#AllowedKeysString)[]
<br>  A set of modifier keys that:
  
  1. Need to be pressed before the main key before this hotkey is considered pressed.
  2. Must NOT be pressed for other hotkeys to be activated when this hotkey is present.
  
  A Hotkey will also not activate if the standard modifier keys (ctrl/alt/meta/shift) are pressed, unless they
  are explicitly included in the modifierKeys array.
  
  NOTE: This is a generalization of the normal concept of "modifier key"
  (https://en.wikipedia.org/wiki/Modifier_key). It is a PhET-specific concept that allows other non-standard
  modifier keys to be used as modifiers. The standard modifier keys (ctrl/alt/meta/shift) are automatically handled
  by the hotkey system, but this can expand the set of modifier keys that can be used. When a modifier key is added,
  pressing it will prevent any other Hotkeys from becoming active. This is how the typical modifier keys behave and
  so that is kept consistent for PhET-specific modifier keys.
  
  Note that the release of a modifier key may "activate" the hotkey for "fire-on-hold", but not for "fire-on-down".
- **ignoredModifierKeys**?: [AllowedKeysString](../scenery/KeyDescriptor.md#AllowedKeysString)[]
<br>  A set of modifier keys that can be down and the hotkey will still fire. Essentially ignoring the modifier
  key behavior for this key.




## Type OneKeyStroke {: #OneKeyStroke }


```js
import type { OneKeyStroke } from 'scenerystack/scenery';
```


`${AllowedKeys}` | `${ModifierKey}+${AllowedKeys}` | `${ModifierKey}+${ModifierKey}+${AllowedKeys}` | `${IgnoreModifierKey}+${AllowedKeys}` | `${IgnoreModifierKey}+${ModifierKey}+${AllowedKeys}` | `${IgnoreOtherModifierKeys}+${AllowedKeys}` | `${IgnoreOtherModifierKeys}+${ModifierKey}+${AllowedKeys}`



## Type OneKeyStrokeEntry {: #OneKeyStrokeEntry }


A key stroke entry is a single key or a key with "ignore" modifiers, see examples and keyStrokeToKeyDescriptor.

```js
import type { OneKeyStrokeEntry } from 'scenerystack/scenery';
```


`${AllowedKeys}` | `${IgnoreModifierKey}+${[EnglishKey](../scenery/EnglishStringToCodeMap.md#EnglishKey)}` | `${IgnoreOtherModifierKeys}+${[EnglishKey](../scenery/EnglishStringToCodeMap.md#EnglishKey)}`



## Source Code

See the source for [KeyDescriptor.ts](https://github.com/phetsims/scenery/blob/main/js/input/KeyDescriptor.ts) in the [scenery](https://github.com/phetsims/scenery) repository.
