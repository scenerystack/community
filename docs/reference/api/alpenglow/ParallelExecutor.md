# ParallelExecutor

## Overview

Executes a kernel in parallel, using async/await to simulate the WGPU execution model.

Designed so that we can test WGPU-like code, but use the debugging facilities of the browser to debug it.

We'll randomly choose which item to execute next, so that as much as possible things are executed with a random order

Things are structured so that execution thread functions will:
- await context.start() - at the very start of the call
- await all of the inter-thread primitives (like get/set)
- resolve when complete

Thus the executor will keep ONE thread going at a time, and every time one of those actions is taken, we'll toss
the function to resolve that in a list (with the others), and will randomly choose which one to resolve next.
This will execute things with a fairly random order.

(needs a working knowledge of the WGSL execution model to understand)

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class ParallelExecutor {: #ParallelExecutor }


```js
import { ParallelExecutor } from 'scenerystack/alpenglow';
```
### Constructor

#### new ParallelExecutor( kernel : <span style="font-weight: 400;">[ParallelKernel](../alpenglow/ParallelKernel.md)&lt;WorkgroupValues&gt;</span> ) {: #ParallelExecutor-constructor data-toc-label='new ParallelExecutor' }

### Instance Methods

#### dispatch( dispatchX, dispatchY, dispatchZ ) : <span style="font-weight: 400;">Promise&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span>&gt;</span> {: #dispatch data-toc-label='dispatch' }

Execute the kernel in parallel, with the given dispatch dimensions (controls how many workgroups there are)

#### next() {: #next data-toc-label='next' }

Kick off the next pending execution thread action.

#### start() : <span style="font-weight: 400;">Promise&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span>&gt;</span> {: #start data-toc-label='start' }

Called from execution threads at the start of their execution. We'll pause all of them until we're ready to
proceed.

#### workgroupBarrier( workgroup : <span style="font-weight: 400;">[ParallelWorkgroup](../alpenglow/ParallelWorkgroup.md)&lt;WorkgroupValues&gt;</span> ) : <span style="font-weight: 400;">Promise&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span>&gt;</span> {: #workgroupBarrier data-toc-label='workgroupBarrier' }

Called from execution threads through the context

#### storageBarrier( workgroup : <span style="font-weight: 400;">[ParallelWorkgroup](../alpenglow/ParallelWorkgroup.md)&lt;WorkgroupValues&gt;</span> ) : <span style="font-weight: 400;">Promise&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span>&gt;</span> {: #storageBarrier data-toc-label='storageBarrier' }

Called from execution threads through the context

#### afterSet() : <span style="font-weight: 400;">Promise&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span>&gt;</span> {: #afterSet data-toc-label='afterSet' }

Called indirectly from execution threads through the context (when they set a value in a storage/workgroup array)

#### afterGet() : <span style="font-weight: 400;">Promise&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span>&gt;</span> {: #afterGet data-toc-label='afterGet' }

Called indirectly from execution threads through the context (when they get a value in a storage/workgroup array)

### Instance Properties

#### resolves : <span style="font-weight: 400;">( () =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span> )[]</span> {: #resolves data-toc-label='resolves' }

(readonly)

A list of functions to call when we're ready to execute the next item.
Each one will resolve a promise that one kernel execution thread is waiting on, which SHOULD trigger another
method on this executor (OR will resolve the promise for the kernel execution thread).

#### donePromises : <span style="font-weight: 400;">Promise&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span>&gt;[]</span> {: #donePromises data-toc-label='donePromises' }

(readonly)

All of the promises returned by the async kernel execution thread functions. When all of these are done, our
dispatch is complete (and dispatch() will resolve shortly thereafter).



## Source Code

See the source for [ParallelExecutor.ts](https://github.com/phetsims/alpenglow/blob/main/js/parallel/ParallelExecutor.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
