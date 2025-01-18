# NumberEntryControl

## Overview

A composite Scenery node that brings together a keypad and a box where the entered values are displayed.  Kind of
looks like a calculator, though it doesn't behave as one.

@author Sharfudeen Ashraf
@author John Blanco
@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class NumberEntryControl {: #NumberEntryControl }


@deprecated depends on NumberKeypad, which is deprecated. Modify this to use Keypad, or create something new.

```js
import { NumberEntryControl } from 'scenerystack/scenery-phet';
```
### Constructor

#### new NumberEntryControl( options ) {: #NumberEntryControl-constructor data-toc-label='new NumberEntryControl' }

### Instance Methods

#### getValue() {: #getValue data-toc-label='getValue' }

Returns the numeric value of the currently entered number (0 for nothing entered).
@public

@returns {number}

#### setValue( number ) {: #setValue data-toc-label='setValue' }

Sets the currently entered number.
@public

@param {number} number

#### clear() {: #clear data-toc-label='clear' }

Clears the keypad, so nothing is entered
@public

#### getClearOnNextKeyPress() {: #getClearOnNextKeyPress data-toc-label='getClearOnNextKeyPress' }

Will pressing a key (except for the backspace point) clear the existing value?
@returns {boolean}
@public

#### setClearOnNextKeyPress( clearOnNextKeyPress ) {: #setClearOnNextKeyPress data-toc-label='setClearOnNextKeyPress' }

Determines whether pressing a key (except for the backspace) will clear the existing value.
@public

@param {boolean} clearOnNextKeyPress



## Source Code

See the source for [NumberEntryControl.js](https://github.com/phetsims/scenery-phet/blob/main/js/NumberEntryControl.js) in the [scenery-phet](https://github.com/phetsims/scenery-phet) repository.
