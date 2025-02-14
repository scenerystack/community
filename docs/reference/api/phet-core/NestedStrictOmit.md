# NestedStrictOmit

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/phet-core/blob/main/js/types/NestedStrictOmit.ts](https://github.com/phetsims/phet-core/blob/main/js/types/NestedStrictOmit.ts) for the most up-to-date information.

## Overview

Omits properties that are nested one level deep.

Example: NestedStrictOmit&lt;NumberControl, 'sliderOptions', 'trackNode' | 'thumbNode'&gt;

@author Sam Reid (PhET Interactive Simulations)

## Type NestedStrictOmit {: #NestedStrictOmit }


```js
import type { NestedStrictOmit } from 'scenerystack/phet-core';
```


[StrictOmit](../phet-core/StrictOmit.md)&lt;T, P&gt; &amp; ( <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">undefined</span> extends T[P] ? Partial&lt;Omit2&lt;T, P, K&gt;&gt; : Omit2&lt;T, P, K&gt; )



## Source Code

See the source for [NestedStrictOmit.ts](https://github.com/phetsims/phet-core/blob/main/js/types/NestedStrictOmit.ts) in the [phet-core](https://github.com/phetsims/phet-core) repository.
