# PickOptional

## Overview



## Type PickOptional {: #PickOptional }


Use PickOptional to pick properties of a type T and make them optional.
This is useful when picking superclass options that you want to expose in a subclass API.
(Careful if you pick a required superclass option and make it optional - you'll need to provide a default!)
It makes life a little easier because you have to fiddle with fewer '&lt;' and '&gt;' characters,
and PickOptional makes a little more sense than Pick&lt;Partial&gt; in the context of options.

Example:
type MyClassOptions = PickOptional&lt;PathOptions, 'stroke', 'lineWidth'&gt;;
Result:
{ stroke?: ColorDef, lineWidth?: number }

@author Chris Malley (PixelZoom, Inc.)

```js
import type { PickOptional } from 'scenerystack/phet-core';
```


Pick&lt;Partial&lt;T&gt;, list&gt;



## Source Code

See the source for [PickOptional.ts](https://github.com/phetsims/phet-core/blob/main/js/types/PickOptional.ts) in the [phet-core](https://github.com/phetsims/phet-core) repository.
