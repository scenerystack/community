# OptionalKeys

## Overview



## Type OptionalKeys {: #OptionalKeys }


Returns the keys of T that are optional.

See https://stackoverflow.com/questions/54520676/in-typescript-how-to-get-the-keys-of-an-object-type-whose-values-are-of-a-given
and https://stackoverflow.com/questions/52984808/is-there-a-way-to-get-all-required-properties-of-a-typescript-object

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;
@author Sam Reid (PhET Interactive Simulations)

```js
import type { OptionalKeys } from 'scenerystack/phet-core';
```


{ [K in keyof T]-?: {} extends Pick&lt;T, K&gt; ? K : <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">never</span> }[keyof T]



## Source Code

See the source for [OptionalKeys.ts](https://github.com/phetsims/phet-core/blob/main/js/types/OptionalKeys.ts) in the [phet-core](https://github.com/phetsims/phet-core) repository.
