# PickRequired

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/phet-core/blob/main/js/types/PickRequired.ts](https://github.com/phetsims/phet-core/blob/main/js/types/PickRequired.ts) for the most up-to-date information.

## Overview



## Type PickRequired {: #PickRequired }


Use PickRequired to pick properties of a type T and make them required.
This is useful when picking superclass options that you want to expose in a subclass API.
It makes life a little easier because you have to fiddle with fewer '&lt;' and '&gt;' characters.

Example:
type MyClassOptions = PickRequired&lt;PhetioObjectOptions, 'tandem' | 'phetioDocumentation'&gt;;
Result:
{ tandem: Tandem, phetioDocumentation: string }

@author Chris Malley (PixelZoom, Inc.)

```js
import type { PickRequired } from 'scenerystack/phet-core';
```


Pick&lt;Required&lt;T&gt;, list&gt;



## Source Code

See the source for [PickRequired.ts](https://github.com/phetsims/phet-core/blob/main/js/types/PickRequired.ts) in the [phet-core](https://github.com/phetsims/phet-core) repository.
