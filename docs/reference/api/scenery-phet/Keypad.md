# Keypad

## Overview

A flexible keypad that looks somewhat like a calculator or keyboard keypad.

@author Aadish Gupta
@author John Blanco

## Class Keypad {: #Keypad }


```js
import { Keypad } from 'scenerystack/scenery-phet';
```
### Constructor

#### new Keypad( layout : <span style="font-weight: 400;">( [Key](../scenery-phet/Key.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span> )[][]</span>, providedOptions? : <span style="font-weight: 400;">[KeypadOptions](../scenery-phet/Keypad.md#KeypadOptions)</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### clear() {: #clear data-toc-label='clear' }

Calls the clear function for the given accumulator

#### setClearOnNextKeyPress( clearOnNextKeyPress : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> ) {: #setClearOnNextKeyPress data-toc-label='setClearOnNextKeyPress' }

Determines whether pressing a key (except for backspace) will clear the existing value.

#### getClearOnNextKeyPress() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #getClearOnNextKeyPress data-toc-label='getClearOnNextKeyPress' }

Will pressing a key (except for backspace) clear the existing value?

#### dispose() {: #dispose data-toc-label='dispose' }

### Instance Properties

#### accumulatedKeysProperty : <span style="font-weight: 400;">[ReadOnlyProperty](../axon/ReadOnlyProperty.md)&lt;[KeyIDValue](../scenery-phet/KeyID.md#KeyIDValue)[]&gt;</span> {: #accumulatedKeysProperty data-toc-label='accumulatedKeysProperty' }

(readonly)

array of the keys that have been accumulated

#### stringProperty : <span style="font-weight: 400;">[ReadOnlyProperty](../axon/ReadOnlyProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>&gt;</span> {: #stringProperty data-toc-label='stringProperty' }

(readonly)

string representation of the keys that have been accumulated

#### valueProperty : <span style="font-weight: 400;">[ReadOnlyProperty](../axon/ReadOnlyProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>&gt;</span> {: #valueProperty data-toc-label='valueProperty' }

(readonly)

numeric representation of the keys that have been accumulated, null if no keys have been accumulated

### Static Properties

#### PositiveIntegerLayout : <span style="font-weight: 400;">[KeypadLayout](../scenery-phet/Keypad.md#KeypadLayout)</span> {: #PositiveIntegerLayout data-toc-label='PositiveIntegerLayout' }

(readonly)

------------------------------------------------------------------------------------------------------------------
static keypad layouts - These can be used 'as is' for common layouts or serve as examples for creating custom
layouts. If the vertical span is greater than 1, the column in the next row(s) has to be null.  If
the horizontal span is greater than 1, the next key in that row will not overlap and will be placed in the next
space in the grid. If a blank space is desired, null should be provided.
------------------------------------------------------------------------------------------------------------------

#### PositiveDecimalLayout : <span style="font-weight: 400;">[KeypadLayout](../scenery-phet/Keypad.md#KeypadLayout)</span> {: #PositiveDecimalLayout data-toc-label='PositiveDecimalLayout' }

(readonly)

#### PositiveAndNegativeIntegerLayout : <span style="font-weight: 400;">[KeypadLayout](../scenery-phet/Keypad.md#KeypadLayout)</span> {: #PositiveAndNegativeIntegerLayout data-toc-label='PositiveAndNegativeIntegerLayout' }

(readonly)

#### PositiveFloatingPointLayout : <span style="font-weight: 400;">[KeypadLayout](../scenery-phet/Keypad.md#KeypadLayout)</span> {: #PositiveFloatingPointLayout data-toc-label='PositiveFloatingPointLayout' }

(readonly)

#### PositiveAndNegativeFloatingPointLayout : <span style="font-weight: 400;">[KeypadLayout](../scenery-phet/Keypad.md#KeypadLayout)</span> {: #PositiveAndNegativeFloatingPointLayout data-toc-label='PositiveAndNegativeFloatingPointLayout' }

(readonly)

#### WeirdLayout : <span style="font-weight: 400;">[KeypadLayout](../scenery-phet/Keypad.md#KeypadLayout)</span> {: #WeirdLayout data-toc-label='WeirdLayout' }

(readonly)

Weird Layout is created for testing purposes to test the edge cases and layout capabilities

#### KEY_0 {: #KEY_0 data-toc-label='KEY_0' }

(readonly)

#### KEY_1 {: #KEY_1 data-toc-label='KEY_1' }

(readonly)

#### KEY_2 {: #KEY_2 data-toc-label='KEY_2' }

(readonly)

#### KEY_3 {: #KEY_3 data-toc-label='KEY_3' }

(readonly)

#### KEY_4 {: #KEY_4 data-toc-label='KEY_4' }

(readonly)

#### KEY_5 {: #KEY_5 data-toc-label='KEY_5' }

(readonly)

#### KEY_6 {: #KEY_6 data-toc-label='KEY_6' }

(readonly)

#### KEY_7 {: #KEY_7 data-toc-label='KEY_7' }

(readonly)

#### KEY_8 {: #KEY_8 data-toc-label='KEY_8' }

(readonly)

#### KEY_9 {: #KEY_9 data-toc-label='KEY_9' }

(readonly)

#### KEY_WIDE_ZERO {: #KEY_WIDE_ZERO data-toc-label='KEY_WIDE_ZERO' }

(readonly)

#### KEY_DECIMAL {: #KEY_DECIMAL data-toc-label='KEY_DECIMAL' }

(readonly)

#### KEY_BACKSPACE {: #KEY_BACKSPACE data-toc-label='KEY_BACKSPACE' }

(readonly)

#### KEY_PLUS_MINUS {: #KEY_PLUS_MINUS data-toc-label='KEY_PLUS_MINUS' }

(readonly)



## Type KeypadLayout {: #KeypadLayout }


```js
import type { KeypadLayout } from 'scenerystack/scenery-phet';
```
( [Key](../scenery-phet/Key.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span> )[][]



## Type KeypadOptions {: #KeypadOptions }


```js
import type { KeypadOptions } from 'scenerystack/scenery-phet';
```
- **buttonWidth**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **buttonHeight**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **xSpacing**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **ySpacing**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **touchAreaXDilation**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **touchAreaYDilation**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **buttonColor**?: [TPaint](../scenery/TPaint.md)
- **buttonFont**?: [Font](../scenery/Font.md)
- **accumulator**?: [AbstractKeyAccumulator](../scenery-phet/AbstractKeyAccumulator.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
- **accumulatorOptions**?: [NumberAccumulatorOptions](../scenery-phet/NumberAccumulator.md#NumberAccumulatorOptions) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
- **useGlobalKeyboardListener**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
- &amp; [NodeOptions](../scenery/Node.md#NodeOptions)




## Source Code

See the source for [Keypad.ts](https://github.com/phetsims/scenery-phet/blob/main/js/keypad/Keypad.ts) in the [scenery-phet](https://github.com/phetsims/scenery-phet) repository.
