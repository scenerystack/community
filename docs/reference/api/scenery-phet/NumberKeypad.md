# NumberKeypad

## Overview

A scenery node that looks like a number key pad and allows the user to enter a number. The entered number is not
displayed by this node - it is intended to be used in conjunction with a separate display of some sort.

@author John Blanco
@author Andrey Zelenkov (MLearner)
@author Chris Malley (PixelZoom, Inc.)

## Class NumberKeypad {: #NumberKeypad }


@deprecated - This keypad has been replaced by a more flexible and general version.
While there are no plans to go back and replace existing usages, new implementations should use Keypad.js.
See https://github.com/phetsims/scenery-phet/issues/283 for the history of this. -jbphet, Aug 2017

```js
import { NumberKeypad } from 'scenerystack/scenery-phet';
```
### Constructor

#### new NumberKeypad( options ) {: #NumberKeypad-constructor data-toc-label='new NumberKeypad' }

### Instance Methods

#### clear() {: #clear data-toc-label='clear' }

Clear anything that has been accumulated in the valueStringProperty field.
@public

#### setClearOnNextKeyPress( clearOnNextKeyPress ) {: #setClearOnNextKeyPress data-toc-label='setClearOnNextKeyPress' }

Determines whether pressing a key (except for the backspace) will clear the existing value.
@param {boolean} clearOnNextKeyPress
@public

#### getClearOnNextKeyPress() {: #getClearOnNextKeyPress data-toc-label='getClearOnNextKeyPress' }

Will pressing a key (except for the backspace point) clear the existing value?
@returns {boolean}
@public

### Static Methods

#### validateMaxDigits( options ) {: #validateMaxDigits data-toc-label='validateMaxDigits' }

Creates a validation function that constrains the value to a maximum number of digits, with 1 leading zero.
@param {Object} [options]
@returns {function(string, string)}
@public



## Source Code

See the source for [NumberKeypad.js](https://github.com/phetsims/scenery-phet/blob/main/js/NumberKeypad.js) in the [scenery-phet](https://github.com/phetsims/scenery-phet) repository.
