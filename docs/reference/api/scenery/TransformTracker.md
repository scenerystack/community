# TransformTracker

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

#### new TransformTracker( trail : <span style="font-weight: 400; opacity: 80%;">Trail</span>, providedOptions? : <span style="font-weight: 400; opacity: 80%;">TransformTrackerOptions</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### dispose() : <span style="font-weight: 400; opacity: 80%;">void</span> {: #dispose data-toc-label='dispose' }

Gets rid of all external references and listeners. This object is inoperable afterwards.

#### addListener( listener : <span style="font-weight: 400; opacity: 80%;">() =&gt; void</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #addListener data-toc-label='addListener' }

Adds a listener function that will be synchronously called whenever the transform for this Trail changes.

#### removeListener( listener : <span style="font-weight: 400; opacity: 80%;">() =&gt; void</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #removeListener data-toc-label='removeListener' }

Removes a listener that was previously added with addListener().

#### getMatrix() : <span style="font-weight: 400; opacity: 80%;">Matrix3</span> {: #getMatrix data-toc-label='getMatrix' }

Returns the local-to-global transformation matrix for the Trail, which transforms its leaf node's local
coordinate frame into the global coordinate frame.

NOTE: The matrix returned should not be mutated. Please make a copy if needed.



## Source Code

See the source for [TransformTracker.ts](https://github.com/phetsims/scenery/blob/main/js/util/TransformTracker.ts) in the [scenery](https://github.com/phetsims/scenery) repository.
