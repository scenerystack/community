# Routine

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/alpenglow/blob/main/js/webgpu/compute/Routine.ts](https://github.com/phetsims/alpenglow/blob/main/js/webgpu/compute/Routine.ts) for the most up-to-date information.

## Overview

TODO: doc

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class Routine {: #Routine }


```js
import { Routine } from 'scenerystack/alpenglow';
```
### Instance Methods

#### execute( context : <span style="font-weight: 400;">[ExecutionContext](../alpenglow/ExecutionContext.md)</span>, data : <span style="font-weight: 400;">In</span> ) : <span style="font-weight: 400;">Promise&lt;Out&gt;</span> {: #execute data-toc-label='execute' }

### Instance Properties

#### pipelineBlueprints : <span style="font-weight: 400;">[PipelineBlueprint](../alpenglow/PipelineBlueprint.md)[]</span> {: #pipelineBlueprints data-toc-label='pipelineBlueprints' }

(readonly)

#### rootResourceSlots : <span style="font-weight: 400;">[ResourceSlot](../alpenglow/ResourceSlot.md)[]</span> {: #rootResourceSlots data-toc-label='rootResourceSlots' }

(readonly)

#### bindGroupLayouts : <span style="font-weight: 400;">[BindGroupLayout](../alpenglow/BindGroupLayout.md)[]</span> {: #bindGroupLayouts data-toc-label='bindGroupLayouts' }

(readonly)

### Static Methods

#### create( deviceContext : <span style="font-weight: 400;">[DeviceContext](../alpenglow/DeviceContext.md)</span>, module : <span style="font-weight: 400;">[Module](../alpenglow/Module.md)&lt;T&gt;</span>, sharedBufferSlots : <span style="font-weight: 400;">[BufferSlot](../alpenglow/BufferSlot.md)&lt;[IntentionalAny](../phet-core/IntentionalAny.md)&gt;[]</span>, layoutStrategy : <span style="font-weight: 400;">( deviceContext: [DeviceContext](../alpenglow/DeviceContext.md), pipelineBlueprints: [PipelineBlueprint](../alpenglow/PipelineBlueprint.md)[] ) =&gt; Map&lt;[PipelineBlueprint](../alpenglow/PipelineBlueprint.md), [PipelineLayout](../alpenglow/PipelineLayout.md)&gt;</span>, executeWrapper : <span style="font-weight: 400;">( context: [ExecutionContext](../alpenglow/ExecutionContext.md), execute: ( context: [ExecutionContext](../alpenglow/ExecutionContext.md), value: T ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span>, value: In ) =&gt; Promise&lt;Out&gt;</span> ) : <span style="font-weight: 400;">Promise&lt;[Routine](../alpenglow/Routine.md)&lt;T, In, Out&gt;&gt;</span> {: #create data-toc-label='create' }

### Static Properties

#### INDIVIDUAL_LAYOUT_STRATEGY {: #INDIVIDUAL_LAYOUT_STRATEGY data-toc-label='INDIVIDUAL_LAYOUT_STRATEGY' }

(readonly)

TODO: Since we're returning a map, it's enforcing "no different layouts for different locations of the same blueprint"
TODO: which is less than ideal(!). Figure this out, and possibly different bind groups for the same bind group layout.

#### COMBINE_ALL_LAYOUT_STRATEGY {: #COMBINE_ALL_LAYOUT_STRATEGY data-toc-label='COMBINE_ALL_LAYOUT_STRATEGY' }

(readonly)



## Source Code

See the source for [Routine.ts](https://github.com/phetsims/alpenglow/blob/main/js/webgpu/compute/Routine.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
