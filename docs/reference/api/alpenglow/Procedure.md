# Procedure

## Overview

TODO: doc

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class Procedure {: #Procedure }


```js
import { Procedure } from 'scenerystack/alpenglow';
```
### Constructor

#### new Procedure( routine : <span style="font-weight: 400;">[Routine](../alpenglow/Routine.md)&lt;IntentionalAny, In, Out&gt;</span>, resourceMap : <span style="font-weight: 400;">Map&lt;[ResourceSlot](../alpenglow/ResourceSlot.md), [Resource](../alpenglow/Resource.md)&gt;</span>, bindGroupMap : <span style="font-weight: 400;">Map&lt;[BindGroupLayout](../alpenglow/BindGroupLayout.md), [BindGroup](../alpenglow/BindGroup.md)&gt;</span> ) {: #Procedure-constructor data-toc-label='new Procedure' }

### Instance Methods

#### bind( slot : <span style="font-weight: 400;">[ResourceSlot](../alpenglow/ResourceSlot.md)</span>, resource : <span style="font-weight: 400;">[Resource](../alpenglow/Resource.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #bind data-toc-label='bind' }

#### bindTexture( textureSlot : <span style="font-weight: 400;">[TextureViewSlot](../alpenglow/TextureViewSlot.md)</span>, resource : <span style="font-weight: 400;">[TextureViewResource](../alpenglow/TextureViewResource.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #bindTexture data-toc-label='bindTexture' }

Should be callable repeatedly (TODO test)

#### bindRemainingBuffers() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #bindRemainingBuffers data-toc-label='bindRemainingBuffers' }

#### createChild() : <span style="font-weight: 400;">[Procedure](../alpenglow/Procedure.md)&lt;In, Out&gt;</span> {: #createChild data-toc-label='createChild' }

#### execute( executor : <span style="font-weight: 400;">[Executor](../alpenglow/Executor.md)</span>, data : <span style="font-weight: 400;">In</span>, options? : <span style="font-weight: 400;">[ProcedureExecuteOptions](../alpenglow/Procedure.md#ProcedureExecuteOptions)</span> ) : <span style="font-weight: 400;">Promise&lt;Out&gt;</span> {: #execute data-toc-label='execute' }

#### standaloneExecute( deviceContext : <span style="font-weight: 400;">[DeviceContext](../alpenglow/DeviceContext.md)</span>, data : <span style="font-weight: 400;">In</span>, options? : <span style="font-weight: 400;">ProcedureStandaloneExecuteOptions</span> ) : <span style="font-weight: 400;">Promise&lt;Out&gt;</span> {: #standaloneExecute data-toc-label='standaloneExecute' }

#### getLogBuffer() : <span style="font-weight: 400;">GPUBuffer | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> {: #getLogBuffer data-toc-label='getLogBuffer' }

#### dispose() {: #dispose data-toc-label='dispose' }



## Type ProcedureExecuteOptions {: #ProcedureExecuteOptions }


```js
import type { ProcedureExecuteOptions } from 'scenerystack/alpenglow';
```


- **separateComputePasses**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>




## Source Code

See the source for [Procedure.ts](https://github.com/phetsims/alpenglow/blob/main/js/webgpu/compute/Procedure.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
