# getLineBreakRanges

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/scenery/blob/main/js/util/getLineBreakRanges.ts](https://github.com/phetsims/scenery/blob/main/js/util/getLineBreakRanges.ts) for the most up-to-date information.

## Overview

Returns where possible line breaks can exist in a given string, according to the
Unicode Line Breaking Algorithm (UAX #14). Uses https://github.com/foliojs/linebreak.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Type GetLineBreaksOptions {: #GetLineBreaksOptions }


```js
import type { GetLineBreaksOptions } from 'scenerystack/scenery';
```


- **requiredOnly**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
<br>  Line breaks can be "required" or "optional". If this is true, ranges will only be given for required line breaks.




## Source Code

See the source for [getLineBreakRanges.ts](https://github.com/phetsims/scenery/blob/main/js/util/getLineBreakRanges.ts) in the [scenery](https://github.com/phetsims/scenery) repository.
