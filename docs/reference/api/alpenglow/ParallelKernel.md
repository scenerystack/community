# ParallelKernel

## Overview

Represents a WGPU-like kernel that can be executed in parallel. Designed so that we can test WGPU-like code, but use
the debugging facilities of the browser to debug it.

See ParallelExecutor for more high-level documentation.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class ParallelKernel {: #ParallelKernel }


```js
import { ParallelKernel } from 'scenerystack/alpenglow';
```
### Constructor

#### new ParallelKernel( execute : <span style="font-weight: 400; opacity: 80%;">( context: ParallelContext&lt;WorkgroupValues&gt; ) =&gt; Promise&lt;void&gt;</span>, createWorkgroupValues : <span style="font-weight: 400; opacity: 80%;">() =&gt; WorkgroupValues</span>, storageArrays : <span style="font-weight: 400; opacity: 80%;">ParallelStorageArray&lt;unknown&gt;[]</span>, workgroupX, workgroupY, workgroupZ ) {: #constructor data-toc-label='constructor' }

### Instance Methods





## Source Code

See the source for [ParallelKernel.ts](https://github.com/phetsims/alpenglow/blob/main/js/parallel/ParallelKernel.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
