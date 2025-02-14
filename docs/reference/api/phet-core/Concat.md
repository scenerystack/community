# Concat

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/phet-core/blob/main/js/types/Concat.ts](https://github.com/phetsims/phet-core/blob/main/js/types/Concat.ts) for the most up-to-date information.

## Overview



## Type Concat {: #Concat }


Concatenating tuple types, see https://stackoverflow.com/questions/64630803/concat-tuple-types-in-typescript

For instance, Concat&lt;[A, B], [C, D]&gt; is equivalent to [A, B, C, D]. This can also flatten an array with
Concat&lt;...types&gt;.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

```js
import type { Concat } from 'scenerystack/phet-core';
```


T extends [ infer A, ...infer Rest ] ? A extends [IntentionalAny](../phet-core/IntentionalAny.md)[] ? [ ...A, ...( [Concat](../phet-core/Concat.md)&lt;Rest&gt; extends [IntentionalAny](../phet-core/IntentionalAny.md)[] ? [Concat](../phet-core/Concat.md)&lt;Rest&gt; : [] ) ] : A : T



## Source Code

See the source for [Concat.ts](https://github.com/phetsims/phet-core/blob/main/js/types/Concat.ts) in the [phet-core](https://github.com/phetsims/phet-core) repository.
