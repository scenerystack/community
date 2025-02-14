# WritableKeys

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/phet-core/blob/main/js/types/WritableKeys.ts](https://github.com/phetsims/phet-core/blob/main/js/types/WritableKeys.ts) for the most up-to-date information.

## Overview



## Type WritableKeys {: #WritableKeys }


```js
import type { WritableKeys } from 'scenerystack/phet-core';
```


{
  // eslint-disable-next-line @typescript-eslint/consistent-indexed-object-style
  [P in keyof T]-?: IfEquals&lt;Record&lt;P, T[P]&gt;, { -readonly [Q in P]: T[P] }, P&gt;
}[keyof T]



## Source Code

See the source for [WritableKeys.ts](https://github.com/phetsims/phet-core/blob/main/js/types/WritableKeys.ts) in the [phet-core](https://github.com/phetsims/phet-core) repository.
