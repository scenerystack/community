# PipelineBlueprint

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/alpenglow/blob/main/js/webgpu/compute/PipelineBlueprint.ts](https://github.com/phetsims/alpenglow/blob/main/js/webgpu/compute/PipelineBlueprint.ts) for the most up-to-date information.

## Overview

TODO: doc

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class PipelineBlueprint {: #PipelineBlueprint }


```js
import { PipelineBlueprint } from 'scenerystack/alpenglow';
```
### Constructor

#### new PipelineBlueprint( providedOptions : <span style="font-weight: 400;">[PipelineBlueprintOptions](../alpenglow/PipelineBlueprint.md#PipelineBlueprintOptions)</span> ) {: #PipelineBlueprint-constructor data-toc-label='new PipelineBlueprint' }

### Instance Methods

#### add( name : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span>, declarations : <span style="font-weight: 400;">[WGSLModuleDeclarations](../alpenglow/WGSLString.md#WGSLModuleDeclarations)</span> ) {: #add data-toc-label='add' }

#### addSlot( name : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span>, slot : <span style="font-weight: 400;">[ResourceSlot](../alpenglow/ResourceSlot.md)</span>, bindingType : <span style="font-weight: 400;">[BindingType](../alpenglow/BindingType.md)</span> ) {: #addSlot data-toc-label='addSlot' }

#### toString( pipelineLayout : <span style="font-weight: 400;">[PipelineLayout](../alpenglow/PipelineLayout.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> {: #toString data-toc-label='toString' }

#### toDebugString() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> {: #toDebugString data-toc-label='toDebugString' }

### Instance Properties

#### usages : <span style="font-weight: 400;">[ResourceUsage](../alpenglow/ResourceUsage.md)[]</span> {: #usages data-toc-label='usages' }

(readonly)

#### name : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> {: #name data-toc-label='name' }

(readonly)

#### log : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #log data-toc-label='log' }

(readonly)



## Type PipelineBlueprintOptions {: #PipelineBlueprintOptions }


```js
import type { PipelineBlueprintOptions } from 'scenerystack/alpenglow';
```


- **name**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>
- **log**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
<br>  TODO: NOTE that this is not really... needed? Can we remove it? (log should only be for the WGSL generation)




## Source Code

See the source for [PipelineBlueprint.ts](https://github.com/phetsims/alpenglow/blob/main/js/webgpu/compute/PipelineBlueprint.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
