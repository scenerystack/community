# ClippableFace

## Overview

An interface for clippable/subdivide-able faces, with defined bounds and area.

NOTE: "fake" corners are needed for some clipping operations (notably the binary line clipping operations, without
bounds). These are corners that are not actually part of the face, but are used when we don't have access to the
entire polygon, and need to output edges which will match up with other results. In these cases, we might generate
edges that go OUTSIDE of the resulting bounds, so if we need to access bounds of the ClippableFace, we'll need to
ignore these "fake" corners.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Type ClippableFace {: #ClippableFace }


TODO: assertions that all types of ClippableFace give the same results for the same methods

```js
import type { ClippableFace } from 'scenerystack/alpenglow';
```






## Type ClippableFaceAccumulator {: #ClippableFaceAccumulator }


This is a type meant for building a ClippableFace (of a specific type) by adding edges, and (optionally) marking
where we have finished one polygon, and are now going to add edges for another polygon.

When you are done adding edges, use finalizeFace() to get the resulting ClippableFace. If there is no data that gives
a non-zero area face, it will return null. This will also reset the internal state, so it can be used to create a
fresh new face.

```js
import type { ClippableFaceAccumulator } from 'scenerystack/alpenglow';
```


- **usesEndPoint**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>




## Source Code

See the source for [ClippableFace.ts](https://github.com/phetsims/alpenglow/blob/main/js/cag/ClippableFace.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
