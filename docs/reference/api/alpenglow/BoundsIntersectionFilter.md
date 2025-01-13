# BoundsIntersectionFilter

## Overview

Acceleration of pairwise intersection tests for anything bounds-related

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class BoundsIntersectionFilter {: #BoundsIntersectionFilter }


```js
import { BoundsIntersectionFilter } from 'scenerystack/alpenglow';
```
### Static Methods

#### quadraticIntersect( maximumBounds : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md)</span>, items : <span style="font-weight: 400;">T[]</span>, callback : <span style="font-weight: 400;">( itemA: T, itemB: T ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span></span> ) {: #quadraticIntersect data-toc-label='quadraticIntersect' }

#### sweepLineIntersect( maximumBounds : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md)</span>, items : <span style="font-weight: 400;">Item[]</span>, callback : <span style="font-weight: 400;">( itemA: Item, itemB: Item ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span></span> ) {: #sweepLineIntersect data-toc-label='sweepLineIntersect' }

#### filterIntersect( maximumBounds : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md)</span>, items : <span style="font-weight: 400;">Item[]</span>, callback : <span style="font-weight: 400;">( itemA: Item, itemB: Item ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span></span> ) {: #filterIntersect data-toc-label='filterIntersect' }



## Source Code

See the source for [BoundsIntersectionFilter.ts](https://github.com/phetsims/alpenglow/blob/main/js/cag/BoundsIntersectionFilter.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
