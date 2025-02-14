# RequiredOption

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/phet-core/blob/main/js/types/RequiredOption.ts](https://github.com/phetsims/phet-core/blob/main/js/types/RequiredOption.ts) for the most up-to-date information.

## Overview

Allows grabbing *the type* of a required option out of a type. For example if we have

type SelfOptions = { something?: number | string | Property&lt;Ray2&gt;; };

This can be used in a field of the type as:

something: RequiredOption&lt;SelfOptions, 'something'&gt;;

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Type RequiredOption {: #RequiredOption }


```js
import type { RequiredOption } from 'scenerystack/phet-core';
```


[NotUndefined](../phet-core/NotUndefined.md)&lt;Options[ Name ]&gt;



## Source Code

See the source for [RequiredOption.ts](https://github.com/phetsims/phet-core/blob/main/js/types/RequiredOption.ts) in the [phet-core](https://github.com/phetsims/phet-core) repository.
