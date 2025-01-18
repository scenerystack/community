# KeysNotMatching

## Overview



## Type KeysNotMatching {: #KeysNotMatching }


Finds keys of an object that do not match a specific type, see

For instance, KeysMatching&lt;{ foo: number; x: string; k: number; }, number&gt; will be 'x'

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

```js
import type { KeysNotMatching } from 'scenerystack/phet-core';
```


{ [K in keyof T]-?: T[K] extends V ? <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">never</span> : K }[keyof T]



## Source Code

See the source for [KeysNotMatching.ts](https://github.com/phetsims/phet-core/blob/main/js/types/KeysNotMatching.ts) in the [phet-core](https://github.com/phetsims/phet-core) repository.
