# Key

## Overview

key object, intended for use in the PhET common-code keypad

@author Aadish Gupta
@author John Blanco

## Class Key {: #Key }


```js
import { Key } from 'scenerystack/scenery-phet';
```
### Constructor

#### new Key( label : <span style="font-weight: 400; opacity: 80%;">Node | string</span>, identifier : <span style="font-weight: 400; opacity: 80%;">KeyIDValue</span>, providedOptions? : <span style="font-weight: 400; opacity: 80%;">KeyOptions</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods



### Instance Properties

#### horizontalSpan : <span style="font-weight: 400; opacity: 80%;">number</span> {: #horizontalSpan data-toc-label='horizontalSpan' }

(readonly)

number of horizontal cells in the keypad grid that this key occupies

#### verticalSpan : <span style="font-weight: 400; opacity: 80%;">number</span> {: #verticalSpan data-toc-label='verticalSpan' }

(readonly)

number of vertical cells in the keypad grid that this key occupies

#### buttonTandemName : <span style="font-weight: 400; opacity: 80%;">string</span> {: #buttonTandemName data-toc-label='buttonTandemName' }

(readonly)

The tandem component name to use when creating a button from this key.

#### keyboardIdentifiers : <span style="font-weight: 400; opacity: 80%;">OneKeyStroke[]</span> {: #keyboardIdentifiers data-toc-label='keyboardIdentifiers' }

(readonly)

For keyboard input, this is used to identify the keystroke to activate this key (see KeyboardListener.ts)



## Source Code

See the source for [Key.ts](https://github.com/phetsims/scenery-phet/blob/main/js/keypad/Key.ts) in the [scenery-phet](https://github.com/phetsims/scenery-phet) repository.
