# WithoutNull

## Overview

Converts either an entire object (or a subset of keys of it) into non-null forms.

type T = {
  a: number | null;
  b: string | number[] | null;
  c: { x: number; };
};
type X = WithoutNull&lt;T&gt;; // { a: number, b: string | number[], c: { x: 5 } }
type Y = WithoutNull&lt;T, 'a'&gt;; // { a: number, b: string | number[] | null, c: { x: 5 } }

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Type WithoutNull {: #WithoutNull }


```js
import type { WithoutNull } from 'scenerystack/phet-core';
```


T &amp; { [key in keys]: [NotNull](../phet-core/NotNull.md)&lt;T[ key ]&gt; }



## Source Code

See the source for [WithoutNull.ts](https://github.com/phetsims/phet-core/blob/main/js/types/WithoutNull.ts) in the [phet-core](https://github.com/phetsims/phet-core) repository.
