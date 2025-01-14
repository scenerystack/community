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

#### new Key( label : <span style="font-weight: 400;">[Node](../scenery/Node.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span>, identifier : <span style="font-weight: 400;">[KeyIDValue](../scenery-phet/KeyID.md#KeyIDValue)</span>, providedOptions? : <span style="font-weight: 400;">[KeyOptions](../scenery-phet/Key.md#KeyOptions)</span> ) {: #Key-constructor data-toc-label='new Key' }

### Instance Methods



### Instance Properties

#### horizontalSpan : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #horizontalSpan data-toc-label='horizontalSpan' }

(readonly)

number of horizontal cells in the keypad grid that this key occupies

#### verticalSpan : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #verticalSpan data-toc-label='verticalSpan' }

(readonly)

number of vertical cells in the keypad grid that this key occupies

#### buttonTandemName : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> {: #buttonTandemName data-toc-label='buttonTandemName' }

(readonly)

The tandem component name to use when creating a button from this key.

#### keyboardIdentifiers : <span style="font-weight: 400;">[OneKeyStroke](../scenery/KeyDescriptor.md#OneKeyStroke)[]</span> {: #keyboardIdentifiers data-toc-label='keyboardIdentifiers' }

(readonly)

For keyboard input, this is used to identify the keystroke to activate this key (see KeyboardListener.ts)



## Type KeyOptions {: #KeyOptions }


```js
import type { KeyOptions } from 'scenerystack/scenery-phet';
```


- **horizontalSpan**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **verticalSpan**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **keyboardIdentifiers**?: [OneKeyStroke](../scenery/KeyDescriptor.md#OneKeyStroke)[]




## Source Code

See the source for [Key.ts](https://github.com/phetsims/scenery-phet/blob/main/js/keypad/Key.ts) in the [scenery-phet](https://github.com/phetsims/scenery-phet) repository.
