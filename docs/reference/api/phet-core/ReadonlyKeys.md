# ReadonlyKeys

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/phet-core/blob/main/js/types/ReadonlyKeys.ts](https://github.com/phetsims/phet-core/blob/main/js/types/ReadonlyKeys.ts) for the most up-to-date information.

## Overview



## Type ReadonlyKeys {: #ReadonlyKeys }


```js
import type { ReadonlyKeys } from 'scenerystack/phet-core';
```


{
  // eslint-disable-next-line @typescript-eslint/consistent-indexed-object-style
  [P in keyof T]-?: IfEquals&lt;Record&lt;P, T[P]&gt;, { -readonly [Q in P]: T[P] }, <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">never</span>, P&gt;
}[keyof T]



## Source Code

See the source for [ReadonlyKeys.ts](https://github.com/phetsims/phet-core/blob/main/js/types/ReadonlyKeys.ts) in the [phet-core](https://github.com/phetsims/phet-core) repository.
