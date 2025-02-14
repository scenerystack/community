# phetioCompareAPIs

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/chipper/blob/main/js/browser-and-node/phetioCompareAPIs.ts](https://github.com/phetsims/chipper/blob/main/js/browser-and-node/phetioCompareAPIs.ts) for the most up-to-date information.

## Overview

Compare PhET-iO APIs for two versions of the same sim. This function treats the first API as the "ground truth"
and compares the second API to see if it has any breaking changes against the first API. This function returns a
list of "problems".

This file runs in node (command line API comparison), in the diff wrapper (client-facing API comparison) and
in simulations in phetioEngine when ?ea&amp;phetioCompareAPI is specified (for CT).

Note that even though it is a preload, it uses a different global/namespacing pattern than phet-io-initialize-globals.js
in order to simplify usage in all these sites.


@author Sam Reid (PhET Interactive Simulations)
@author Michael Kauzmann (PhET Interactive Simulations)
Import only the types from LoDashStatic, the actual lodash instance is dependency-injected at runtime

## Type PhetioCompareAPIsOptions {: #PhetioCompareAPIsOptions }


```js
import type { PhetioCompareAPIsOptions } from 'scenerystack/chipper';
```


- **compareBreakingAPIChanges**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
- **compareDesignedAPIChanges**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>




## Source Code

See the source for [phetioCompareAPIs.ts](https://github.com/phetsims/chipper/blob/main/js/browser-and-node/phetioCompareAPIs.ts) in the [chipper](https://github.com/phetsims/chipper) repository.
