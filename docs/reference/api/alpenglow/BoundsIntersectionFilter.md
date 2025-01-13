# BoundsIntersectionFilter

## Overview

Acceleration of pairwise intersection tests for anything bounds-related

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class BoundsIntersectionFilter {: #BoundsIntersectionFilter }


```js
import { BoundsIntersectionFilter } from 'scenerystack/alpenglow';
```
### Static Methods

#### quadraticIntersect( maximumBounds : <span style="font-weight: 400; opacity: 80%;">Bounds2</span>, items : <span style="font-weight: 400; opacity: 80%;">T[]</span>, callback : <span style="font-weight: 400; opacity: 80%;">( itemA: T, itemB: T ) =&gt; void</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #quadraticIntersect data-toc-label='quadraticIntersect' }

#### sweepLineIntersect( maximumBounds : <span style="font-weight: 400; opacity: 80%;">Bounds2</span>, items : <span style="font-weight: 400; opacity: 80%;">Item[]</span>, callback : <span style="font-weight: 400; opacity: 80%;">( itemA: Item, itemB: Item ) =&gt; void</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #sweepLineIntersect data-toc-label='sweepLineIntersect' }

#### filterIntersect( maximumBounds : <span style="font-weight: 400; opacity: 80%;">Bounds2</span>, items : <span style="font-weight: 400; opacity: 80%;">Item[]</span>, callback : <span style="font-weight: 400; opacity: 80%;">( itemA: Item, itemB: Item ) =&gt; void</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #filterIntersect data-toc-label='filterIntersect' }



## Source Code

See the source for [BoundsIntersectionFilter.ts](https://github.com/phetsims/alpenglow/blob/main/js/cag/BoundsIntersectionFilter.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
