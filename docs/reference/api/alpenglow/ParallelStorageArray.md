# ParallelStorageArray

## Overview

Represents a storage-level array.

We need to track which execution threads/invocations have written to which indices, so that we can (a) ensure that
we won't get data races (and will have uniform control flow), and (b) in the future potentially simulate cases where
we might get more undefined-like behavior between which values we get.

For storage-level arrays, we'll need to track (a) which workgroup, and (b) which local invocation within that
workgroup wrote to that index. When a workgroup synchronizes with storageBarrier(), it will ONLY synchronize the
actions that THAT SPECIFIC workgroup has done, and will leave the records of modifications from others alone.

TODO: for NOW, we'll lock out and fail on reads (if another thread wrote), OR multiple-thread writes, HOWEVER
TODO: we should make it possible to return arbitrary results (and track values) for other cases

See ParallelExecutor for more high-level documentation.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class ParallelStorageArray {: #ParallelStorageArray }


```js
import { ParallelStorageArray } from 'scenerystack/alpenglow';
```
### Constructor

#### new ParallelStorageArray( data : <span style="font-weight: 400; opacity: 80%;">T[]</span>, indeterminateValue : <span style="font-weight: 400; opacity: 80%;">T</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### get( context : <span style="font-weight: 400; opacity: 80%;">ParallelContext&lt;WorkgroupValues&gt;</span>, index : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">Promise&lt;T&gt;</span> {: #get data-toc-label='get' }

#### set( context : <span style="font-weight: 400; opacity: 80%;">ParallelContext&lt;WorkgroupValues&gt;</span>, index : <span style="font-weight: 400; opacity: 80%;">number</span>, value : <span style="font-weight: 400; opacity: 80%;">T</span> ) : <span style="font-weight: 400; opacity: 80%;">Promise&lt;void&gt;</span> {: #set data-toc-label='set' }

#### synchronize( workgroupId : <span style="font-weight: 400; opacity: 80%;">Vector3</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #synchronize data-toc-label='synchronize' }

#### synchronizeFull() : <span style="font-weight: 400; opacity: 80%;">void</span> {: #synchronizeFull data-toc-label='synchronizeFull' }



## Source Code

See the source for [ParallelStorageArray.ts](https://github.com/phetsims/alpenglow/blob/main/js/parallel/ParallelStorageArray.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
