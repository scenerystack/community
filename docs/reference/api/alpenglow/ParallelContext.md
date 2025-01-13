# ParallelContext

## Overview

Contains all the data/methods needed by a kernel to run in parallel. Passed to the kernel execution function, so that
it can make equivalent calls similar to the WGPU calls.

See ParallelExecutor for more high-level documentation.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class ParallelContext {: #ParallelContext }


```js
import { ParallelContext } from 'scenerystack/alpenglow';
```
### Constructor

#### new ParallelContext( kernel : <span style="font-weight: 400; opacity: 80%;">ParallelKernel&lt;WorkgroupValues&gt;</span>, localId : <span style="font-weight: 400; opacity: 80%;">Vector3</span>, workgroup : <span style="font-weight: 400; opacity: 80%;">ParallelWorkgroup&lt;WorkgroupValues&gt;</span>, executor : <span style="font-weight: 400; opacity: 80%;">ParallelExecutor&lt;WorkgroupValues&gt;</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### start() : <span style="font-weight: 400; opacity: 80%;">Promise&lt;void&gt;</span> {: #start data-toc-label='start' }

To be called from within the kernel execution function

#### workgroupBarrier() : <span style="font-weight: 400; opacity: 80%;">Promise&lt;void&gt;</span> {: #workgroupBarrier data-toc-label='workgroupBarrier' }

To be called from within the kernel execution function

#### storageBarrier() : <span style="font-weight: 400; opacity: 80%;">Promise&lt;void&gt;</span> {: #storageBarrier data-toc-label='storageBarrier' }

To be called from within the kernel execution function

#### afterSet() : <span style="font-weight: 400; opacity: 80%;">Promise&lt;void&gt;</span> {: #afterSet data-toc-label='afterSet' }

TODO: workgroupUniformLoad
To be called from within the kernel execution function

#### afterGet() : <span style="font-weight: 400; opacity: 80%;">Promise&lt;void&gt;</span> {: #afterGet data-toc-label='afterGet' }

To be called from within the kernel execution function

### Instance Properties

#### globalId : <span style="font-weight: 400; opacity: 80%;">Vector3</span> {: #globalId data-toc-label='globalId' }

(readonly)

#### localIndex : <span style="font-weight: 400; opacity: 80%;">number</span> {: #localIndex data-toc-label='localIndex' }

(readonly)

#### workgroupId : <span style="font-weight: 400; opacity: 80%;">Vector3</span> {: #workgroupId data-toc-label='workgroupId' }

(readonly)

#### workgroupValues : <span style="font-weight: 400; opacity: 80%;">WorkgroupValues</span> {: #workgroupValues data-toc-label='workgroupValues' }

(readonly)



## Source Code

See the source for [ParallelContext.ts](https://github.com/phetsims/alpenglow/blob/main/js/parallel/ParallelContext.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
