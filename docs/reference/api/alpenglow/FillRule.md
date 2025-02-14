# FillRule

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/alpenglow/blob/main/js/render-program/FillRule.ts](https://github.com/phetsims/alpenglow/blob/main/js/render-program/FillRule.ts) for the most up-to-date information.

## Overview



## Type FillRule {: #FillRule }


Fill rules, for determining how to fill a path (given the winding number of a face)

Nonzero
The path will be filled when it's winding number does not equal zero. In general this fill rule is
the default for PhET Scenery Stack rendering. For more info see: https://en.wikipedia.org/wiki/Nonzero-rule

Even-odd
The path will be filled when the winding number is odd. For more
info see: https://en.wikipedia.org/wiki/Even%E2%80%93odd_rule

Positive / Negative
These fill rules are used for 3D rendering. Only paths that have counter-clockwise orientations
will be filled in the positive fill rule (facing the camera). Paths with clockwise orientations will be filled in
the negative fill rule (away from the camera).

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

```js
import type { FillRule } from 'scenerystack/alpenglow';
```


"nonzero" | "evenodd" | "positive" | "negative"



## Source Code

See the source for [FillRule.ts](https://github.com/phetsims/alpenglow/blob/main/js/render-program/FillRule.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
