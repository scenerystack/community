# IndirectModule

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/alpenglow/blob/main/js/webgpu/compute/IndirectModule.ts](https://github.com/phetsims/alpenglow/blob/main/js/webgpu/compute/IndirectModule.ts) for the most up-to-date information.

## Overview

TODO: doc

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class IndirectModule {: #IndirectModule }


```js
import { IndirectModule } from 'scenerystack/alpenglow';
```
### Constructor

#### new IndirectModule( providedOptions : <span style="font-weight: 400;">[IndirectModuleOptions](../alpenglow/IndirectModule.md#IndirectModuleOptions)&lt;T&gt;</span> ) {: #IndirectModule-constructor data-toc-label='new IndirectModule' }

### Instance Methods





## Type IndirectModuleOptions {: #IndirectModuleOptions }


```js
import type { IndirectModuleOptions } from 'scenerystack/alpenglow';
```


- **create**: ( blueprint: [PipelineBlueprint](../alpenglow/PipelineBlueprint.md) ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span>
- **execute**: ( context: [ExecutionContext](../alpenglow/ExecutionContext.md), dispatch: ( context: [ExecutionContext](../alpenglow/ExecutionContext.md), indirectBuffer: GPUBuffer, indirectOffset: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span>, data: T ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span>
<br>  TODO: BufferSlot?
- &amp; [PipelineBlueprintOptions](../alpenglow/PipelineBlueprint.md#PipelineBlueprintOptions)




## Source Code

See the source for [IndirectModule.ts](https://github.com/phetsims/alpenglow/blob/main/js/webgpu/compute/IndirectModule.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
