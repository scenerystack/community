# GroupItemOptions

## Overview

For groups like radio button groups or checkbox groups, where we need to flow the tandem through to the items.

@author Sam Reid (PhET Interactive Simulations)

## Type GroupItemOptions {: #GroupItemOptions }


```js
import type { GroupItemOptions } from 'scenerystack/sun';
```


- **createNode**: ( contentTandem: [Tandem](../tandem/Tandem.md) ) =&gt; T
- **tandemName**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>
<br>  If PhET-iO instrumented, tandemName must be supplied to supply the instrumentation. Optional to support
  uninstrumented sims and demos.
  
  NOTE!!!: This is not necessarily the contentTandem passed to createNode. It depends on the implementation.
  There is sometimes a swap, where this tandemName will go to an AlignBox/Checkbox parent, etc. instead of the content.




## Source Code

See the source for [GroupItemOptions.ts](https://github.com/phetsims/sun/blob/main/js/GroupItemOptions.ts) in the [sun](https://github.com/phetsims/sun) repository.
