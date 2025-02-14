# EnglishStringToCodeMap

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/scenery/blob/main/js/accessibility/EnglishStringToCodeMap.ts](https://github.com/phetsims/scenery/blob/main/js/accessibility/EnglishStringToCodeMap.ts) for the most up-to-date information.

## Overview

Maps the english key you want to use to the associated KeyboardEvent.codes for usage in listeners.
If a key has multiple code values, listener behavior will fire if either are pressed.

@author Jesse Greenberg (PhET Interactive Simulations)

## Type EnglishKey {: #EnglishKey }


```js
import type { EnglishKey } from 'scenerystack/scenery';
```


keyof typeof [EnglishStringToCodeMap](../scenery/EnglishStringToCodeMap.md)



## Type EnglishKeyString {: #EnglishKeyString }


```js
import type { EnglishKeyString } from 'scenerystack/scenery';
```


`${[EnglishKey](../scenery/EnglishStringToCodeMap.md#EnglishKey)}`



## Source Code

See the source for [EnglishStringToCodeMap.ts](https://github.com/phetsims/scenery/blob/main/js/accessibility/EnglishStringToCodeMap.ts) in the [scenery](https://github.com/phetsims/scenery) repository.
