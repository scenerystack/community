# KeyDescriptor

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

#### new KeyDescriptor( providedOptions? : <span style="font-weight: 400;">[KeyDescriptorOptions](../scenery/KeyDescriptor.md#KeyDescriptorOptions)</span> ) {: #constructor data-toc-label='constructor' }

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
- **modifierKeys**?: [AllowedKeysString](../scenery/KeyDescriptor.md#AllowedKeysString)[]
- **ignoredModifierKeys**?: [AllowedKeysString](../scenery/KeyDescriptor.md#AllowedKeysString)[]




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
