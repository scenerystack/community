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

#### new ParallelKernel( execute : <span style="font-weight: 400;">( context: [ParallelContext](../alpenglow/ParallelContext.md)&lt;WorkgroupValues&gt; ) =&gt; Promise&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span>&gt;</span>, createWorkgroupValues : <span style="font-weight: 400;">() =&gt; WorkgroupValues</span>, storageArrays : <span style="font-weight: 400;">[ParallelStorageArray](../alpenglow/ParallelStorageArray.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">unknown</span>&gt;[]</span>, workgroupX, workgroupY, workgroupZ ) {: #constructor data-toc-label='constructor' }

### Instance Methods





## Source Code

See the source for [ParallelKernel.ts](https://github.com/phetsims/alpenglow/blob/main/js/parallel/ParallelKernel.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
