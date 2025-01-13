# ParallelWorkgroupArray

## Overview

Represents a storage-level array.

We need to track which execution threads/invocations have written to which indices, so that we can (a) ensure that
we won't get data races (and will have uniform control flow), and (b) in the future potentially simulate cases where
we might get more undefined-like behavior between which values we get.

For workgroup-level arrays, we only need to track the local invocation within that workgroup wrote to that index.

TODO: for NOW, we'll lock out and fail on reads (if another thread wrote), OR multiple-thread writes, HOWEVER
TODO: we should make it possible to return arbitrary results (and track values) for other cases

See ParallelExecutor for more high-level documentation.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class ParallelWorkgroupArray {: #ParallelWorkgroupArray }


```js
import { ParallelWorkgroupArray } from 'scenerystack/alpenglow';
```
### Constructor

#### new ParallelWorkgroupArray( data : <span style="font-weight: 400; opacity: 80%;">T[]</span>, indeterminateValue : <span style="font-weight: 400; opacity: 80%;">T</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### get( context : <span style="font-weight: 400; opacity: 80%;">ParallelContext&lt;WorkgroupValues&gt;</span>, index : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">Promise&lt;T&gt;</span> {: #get data-toc-label='get' }

#### set( context : <span style="font-weight: 400; opacity: 80%;">ParallelContext&lt;WorkgroupValues&gt;</span>, index : <span style="font-weight: 400; opacity: 80%;">number</span>, value : <span style="font-weight: 400; opacity: 80%;">T</span> ) : <span style="font-weight: 400; opacity: 80%;">Promise&lt;void&gt;</span> {: #set data-toc-label='set' }

#### synchronize( workgroupId : <span style="font-weight: 400; opacity: 80%;">Vector3</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #synchronize data-toc-label='synchronize' }



## Source Code

See the source for [ParallelWorkgroupArray.ts](https://github.com/phetsims/alpenglow/blob/main/js/parallel/ParallelWorkgroupArray.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
