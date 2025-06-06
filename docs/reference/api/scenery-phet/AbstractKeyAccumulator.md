# AbstractKeyAccumulator

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/scenery-phet/blob/main/js/keypad/AbstractKeyAccumulator.ts](https://github.com/phetsims/scenery-phet/blob/main/js/keypad/AbstractKeyAccumulator.ts) for the most up-to-date information.

## Overview

base type for an object that accumulates key presses, works in conjunction with the common-code keypad

@author John Blanco
@author Aadish Gupta

## Class AbstractKeyAccumulator {: #AbstractKeyAccumulator }


```js
import { AbstractKeyAccumulator } from 'scenerystack/scenery-phet';
```
### Constructor

#### new AbstractKeyAccumulator( validators : <span style="font-weight: 400;">( ( keys: [KeyIDValue](../scenery-phet/KeyID.md#KeyIDValue)[] ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span> )[]</span> ) {: #AbstractKeyAccumulator-constructor data-toc-label='new AbstractKeyAccumulator' }

### Instance Methods

#### clear() {: #clear data-toc-label='clear' }

Clears the accumulated keys.

#### setClearOnNextKeyPress( clearOnNextKeyPress : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> ) {: #setClearOnNextKeyPress data-toc-label='setClearOnNextKeyPress' }

Sets/clears the flag that determines whether pressing a key (except for backspace) will clear the accumulated keys.

#### getClearOnNextKeyPress() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #getClearOnNextKeyPress data-toc-label='getClearOnNextKeyPress' }

Gets the value of the flag determines whether pressing a key (except for backspace) will clear the accumulated keys.

#### validateKeys( proposedKeys : <span style="font-weight: 400;">[KeyIDValue](../scenery-phet/KeyID.md#KeyIDValue)[]</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #validateKeys data-toc-label='validateKeys' }

(protected)

validates a proposed set of keys and (if valid) update the property that represents the accumulated keys
@param proposedKeys - the proposed set of keys, to be validated

@returns boolean

#### updateKeys( proposedKeys : <span style="font-weight: 400;">[KeyIDValue](../scenery-phet/KeyID.md#KeyIDValue)[]</span> ) {: #updateKeys data-toc-label='updateKeys' }

(protected)

update the property that represents the accumulated keys
@param proposedKeys - the proposed set of keys

#### handleKeyPressed( keyIdentifier : <span style="font-weight: 400;">[KeyIDValue](../scenery-phet/KeyID.md#KeyIDValue)</span> ) {: #handleKeyPressed data-toc-label='handleKeyPressed' }

Called by the key accumulator when this key is pressed.

#### handleClearOnNextKeyPress( keyIdentifier : <span style="font-weight: 400;">[KeyIDValue](../scenery-phet/KeyID.md#KeyIDValue)</span> ) : <span style="font-weight: 400;">[KeyIDValue](../scenery-phet/KeyID.md#KeyIDValue)[]</span> {: #handleClearOnNextKeyPress data-toc-label='handleClearOnNextKeyPress' }

(protected)

creates an empty array if clearOnNextKeyPress is true, the behavior differs if Backspace key is pressed

#### dispose() {: #dispose data-toc-label='dispose' }

### Instance Properties

#### stringProperty : <span style="font-weight: 400;">[ReadOnlyProperty](../axon/ReadOnlyProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>&gt;</span> {: #stringProperty data-toc-label='stringProperty' }

(readonly)

string representation of the keys entered by the user

#### valueProperty : <span style="font-weight: 400;">[ReadOnlyProperty](../axon/ReadOnlyProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>&gt;</span> {: #valueProperty data-toc-label='valueProperty' }

(readonly)

numerical value of the keys entered by the user

#### accumulatedKeysProperty : <span style="font-weight: 400;">[Property](../axon/Property.md)&lt;[KeyIDValue](../scenery-phet/KeyID.md#KeyIDValue)[]&gt;</span> {: #accumulatedKeysProperty data-toc-label='accumulatedKeysProperty' }

(readonly)

Property that tracks the accumulated key presses as an array



## Source Code

See the source for [AbstractKeyAccumulator.ts](https://github.com/phetsims/scenery-phet/blob/main/js/keypad/AbstractKeyAccumulator.ts) in the [scenery-phet](https://github.com/phetsims/scenery-phet) repository.
