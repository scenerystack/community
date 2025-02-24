# KeyboardFuzzer

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/scenery/blob/main/js/accessibility/KeyboardFuzzer.ts](https://github.com/phetsims/scenery/blob/main/js/accessibility/KeyboardFuzzer.ts) for the most up-to-date information.

## Overview

?fuzzBoard keyboard fuzzer
TODO: keep track of keyState so that we don't trigger a keydown of keyA before the previous keyA keyup event has been called. https://github.com/phetsims/scenery/issues/1581

@author Michael Kauzmann (PhET Interactive Simulations)

## Class KeyboardFuzzer {: #KeyboardFuzzer }


```js
import { KeyboardFuzzer } from 'scenerystack/scenery';
```
### Constructor

#### new KeyboardFuzzer( display : <span style="font-weight: 400;">[Display](../scenery/Display.md)</span>, seed : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) {: #KeyboardFuzzer-constructor data-toc-label='new KeyboardFuzzer' }

### Instance Methods

#### fuzzBoardEvents( fuzzRate : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) {: #fuzzBoardEvents data-toc-label='fuzzBoardEvents' }

A random event creator that sends keyboard events. Based on the idea of fuzzMouse, but to test/spam accessibility
related keyboard navigation and alternate input implementation.

TODO: NOTE: Right now this is a very experimental implementation. Tread wearily https://github.com/phetsims/scenery/issues/1581
TODO: @param keyboardPressesPerFocusedItem {number} - basically would be the same as fuzzRate, but handling
TODO:     the keydown events for a focused item



## Source Code

See the source for [KeyboardFuzzer.ts](https://github.com/phetsims/scenery/blob/main/js/accessibility/KeyboardFuzzer.ts) in the [scenery](https://github.com/phetsims/scenery) repository.
