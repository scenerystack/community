# KeysMatching

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/phet-core/blob/main/js/types/KeysMatching.ts](https://github.com/phetsims/phet-core/blob/main/js/types/KeysMatching.ts) for the most up-to-date information.

## Overview



## Type KeysMatching {: #KeysMatching }


Finds keys of an object that match a specific type, see
https://stackoverflow.com/questions/54520676/in-typescript-how-to-get-the-keys-of-an-object-type-whose-values-are-of-a-given

For instance, KeysMatching&lt;{ foo: number; x: string; k: number; }, number&gt; will be 'foo' | 'k'

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

```js
import type { KeysMatching } from 'scenerystack/phet-core';
```


{ [K in keyof T]-?: T[K] extends V ? K : <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">never</span> }[keyof T]



## Source Code

See the source for [KeysMatching.ts](https://github.com/phetsims/phet-core/blob/main/js/types/KeysMatching.ts) in the [phet-core](https://github.com/phetsims/phet-core) repository.
