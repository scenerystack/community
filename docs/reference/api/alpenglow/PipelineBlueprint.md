# PipelineBlueprint

## Overview

TODO: doc

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class PipelineBlueprint {: #PipelineBlueprint }


```js
import { PipelineBlueprint } from 'scenerystack/alpenglow';
```
### Constructor

#### new PipelineBlueprint( providedOptions : <span style="font-weight: 400; opacity: 80%;">PipelineBlueprintOptions</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### toComputePipeline( deviceContext : <span style="font-weight: 400; opacity: 80%;">DeviceContext</span>, pipelineLayout : <span style="font-weight: 400; opacity: 80%;">PipelineLayout</span> ) : <span style="font-weight: 400; opacity: 80%;">Promise&lt;ComputePipeline&gt;</span> {: #toComputePipeline data-toc-label='toComputePipeline' }

#### add( name : <span style="font-weight: 400; opacity: 80%;">string</span>, declarations : <span style="font-weight: 400; opacity: 80%;">WGSLModuleDeclarations</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #add data-toc-label='add' }

#### addSlot( name : <span style="font-weight: 400; opacity: 80%;">string</span>, slot : <span style="font-weight: 400; opacity: 80%;">ResourceSlot</span>, bindingType : <span style="font-weight: 400; opacity: 80%;">BindingType</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #addSlot data-toc-label='addSlot' }

#### toString( pipelineLayout : <span style="font-weight: 400; opacity: 80%;">PipelineLayout</span> ) : <span style="font-weight: 400; opacity: 80%;">string</span> {: #toString data-toc-label='toString' }

#### toDebugString() : <span style="font-weight: 400; opacity: 80%;">string</span> {: #toDebugString data-toc-label='toDebugString' }

### Instance Properties

#### usages : <span style="font-weight: 400; opacity: 80%;">ResourceUsage[]</span> {: #usages data-toc-label='usages' }

(readonly)

#### name : <span style="font-weight: 400; opacity: 80%;">string</span> {: #name data-toc-label='name' }

(readonly)

#### log : <span style="font-weight: 400; opacity: 80%;">boolean</span> {: #log data-toc-label='log' }

(readonly)

### Static Properties

#### LOG_BUFFER_SLOT : <span style="font-weight: 400; opacity: 80%;">BufferSlot</span> {: #LOG_BUFFER_SLOT data-toc-label='LOG_BUFFER_SLOT' }

(readonly)

TODO: oh no, we need to put the atomic in here(!)
TODO: Or actually, just an ability to put structs of arbitrary types in ConcreteTypes



## Source Code

See the source for [PipelineBlueprint.ts](https://github.com/phetsims/alpenglow/blob/main/js/webgpu/compute/PipelineBlueprint.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
