# StrictOmit

## Overview



## Type StrictOmit {: #StrictOmit }


Just like Omit, except it enforces the presence of omitted keys in the original type.
i.e.:
type X = { hello: number; hola: boolean; };
type Y1 = Omit&lt;X, 'goodbye'&gt;; // Wouldn't throw an error
type Y2 = StrictOmit&lt;X, 'goodbye'&gt;; // Will throw an error

@author Michael Kauzmann (PhET Interactive Simulations)
@author Agustín Vallejo (PhET Interactive Simulations)

```js
import type { StrictOmit } from 'scenerystack/phet-core';
```


Pick&lt;ObjectType, Exclude&lt;keyof ObjectType, KeysType&gt;&gt;



## Source Code

See the source for [StrictOmit.ts](https://github.com/phetsims/phet-core/blob/main/js/types/StrictOmit.ts) in the [phet-core](https://github.com/phetsims/phet-core) repository.
