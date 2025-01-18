# RequiredKeys

## Overview



## Type RequiredKeys {: #RequiredKeys }


Returns the keys of T that are required.

See https://stackoverflow.com/questions/54520676/in-typescript-how-to-get-the-keys-of-an-object-type-whose-values-are-of-a-given
and https://stackoverflow.com/questions/52984808/is-there-a-way-to-get-all-required-properties-of-a-typescript-object

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;
@author Sam Reid (PhET Interactive Simulations)

```js
import type { RequiredKeys } from 'scenerystack/phet-core';
```


{ [K in keyof T]-?: {} extends Pick&lt;T, K&gt; ? <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">never</span> : K }[keyof T]



## Source Code

See the source for [RequiredKeys.ts](https://github.com/phetsims/phet-core/blob/main/js/types/RequiredKeys.ts) in the [phet-core](https://github.com/phetsims/phet-core) repository.
