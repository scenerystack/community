# TransformTracker

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/scenery/blob/main/js/util/TransformTracker.ts](https://github.com/phetsims/scenery/blob/main/js/util/TransformTracker.ts) for the most up-to-date information.

## Overview

Used for identifying when any ancestor transform of a node in a trail causes that node's global transform to change.
It also provides fast computation of that global matrix, NOT recomputing every matrix, even on most transform
changes.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;
@author Jesse Greenberg

## Class TransformTracker {: #TransformTracker }


```js
import { TransformTracker } from 'scenerystack/scenery';
```
### Constructor

#### new TransformTracker( trail : <span style="font-weight: 400;">[Trail](../scenery/Trail.md)</span>, providedOptions? : <span style="font-weight: 400;">[TransformTrackerOptions](../scenery/TransformTracker.md#TransformTrackerOptions)</span> ) {: #TransformTracker-constructor data-toc-label='new TransformTracker' }

### Instance Methods

#### dispose() {: #dispose data-toc-label='dispose' }

Gets rid of all external references and listeners. This object is inoperable afterwards.

#### addListener( listener : <span style="font-weight: 400;">() =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span></span> ) {: #addListener data-toc-label='addListener' }

Adds a listener function that will be synchronously called whenever the transform for this Trail changes.

#### removeListener( listener : <span style="font-weight: 400;">() =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span></span> ) {: #removeListener data-toc-label='removeListener' }

Removes a listener that was previously added with addListener().

#### getMatrix() : <span style="font-weight: 400;">[Matrix3](../dot/Matrix3.md)</span> {: #getMatrix data-toc-label='getMatrix' }

Returns the local-to-global transformation matrix for the Trail, which transforms its leaf node's local
coordinate frame into the global coordinate frame.

NOTE: The matrix returned should not be mutated. Please make a copy if needed.



## Type TransformTrackerOptions {: #TransformTrackerOptions }


```js
import type { TransformTrackerOptions } from 'scenerystack/scenery';
```


- **isStatic**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
<br>  Whether the bounds listeners should be added with on() or onStatic().




## Source Code

See the source for [TransformTracker.ts](https://github.com/phetsims/scenery/blob/main/js/util/TransformTracker.ts) in the [scenery](https://github.com/phetsims/scenery) repository.
