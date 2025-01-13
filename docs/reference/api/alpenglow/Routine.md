# Routine

## Overview

TODO: doc

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class Routine {: #Routine }


```js
import { Routine } from 'scenerystack/alpenglow';
```
### Instance Methods

#### execute( context : <span style="font-weight: 400; opacity: 80%;">ExecutionContext</span>, data : <span style="font-weight: 400; opacity: 80%;">In</span> ) : <span style="font-weight: 400; opacity: 80%;">Promise&lt;Out&gt;</span> {: #execute data-toc-label='execute' }

### Instance Properties

#### pipelineBlueprints : <span style="font-weight: 400; opacity: 80%;">PipelineBlueprint[]</span> {: #pipelineBlueprints data-toc-label='pipelineBlueprints' }

(readonly)

#### rootResourceSlots : <span style="font-weight: 400; opacity: 80%;">ResourceSlot[]</span> {: #rootResourceSlots data-toc-label='rootResourceSlots' }

(readonly)

#### bindGroupLayouts : <span style="font-weight: 400; opacity: 80%;">BindGroupLayout[]</span> {: #bindGroupLayouts data-toc-label='bindGroupLayouts' }

(readonly)

### Static Methods

#### create( deviceContext : <span style="font-weight: 400; opacity: 80%;">DeviceContext</span>, module : <span style="font-weight: 400; opacity: 80%;">Module&lt;T&gt;</span>, sharedBufferSlots : <span style="font-weight: 400; opacity: 80%;">BufferSlot&lt;IntentionalAny&gt;[]</span>, layoutStrategy : <span style="font-weight: 400; opacity: 80%;">( deviceContext: DeviceContext, pipelineBlueprints: PipelineBlueprint[] ) =&gt; Map&lt;PipelineBlueprint, PipelineLayout&gt;</span>, executeWrapper : <span style="font-weight: 400; opacity: 80%;">( context: ExecutionContext, execute: ( context: ExecutionContext, value: T ) =&gt; void, value: In ) =&gt; Promise&lt;Out&gt;</span> ) : <span style="font-weight: 400; opacity: 80%;">Promise&lt;Routine&lt;T, In, Out&gt;&gt;</span> {: #create data-toc-label='create' }

### Static Properties

#### INDIVIDUAL_LAYOUT_STRATEGY {: #INDIVIDUAL_LAYOUT_STRATEGY data-toc-label='INDIVIDUAL_LAYOUT_STRATEGY' }

(readonly)

TODO: Since we're returning a map, it's enforcing "no different layouts for different locations of the same blueprint"
TODO: which is less than ideal(!). Figure this out, and possibly different bind groups for the same bind group layout.

#### COMBINE_ALL_LAYOUT_STRATEGY {: #COMBINE_ALL_LAYOUT_STRATEGY data-toc-label='COMBINE_ALL_LAYOUT_STRATEGY' }

(readonly)



## Source Code

See the source for [Routine.ts](https://github.com/phetsims/alpenglow/blob/main/js/webgpu/compute/Routine.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
