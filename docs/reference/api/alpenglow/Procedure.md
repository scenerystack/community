# Procedure

## Overview

TODO: doc

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class Procedure {: #Procedure }


```js
import { Procedure } from 'scenerystack/alpenglow';
```
### Constructor

#### new Procedure( routine : <span style="font-weight: 400; opacity: 80%;">Routine&lt;IntentionalAny, In, Out&gt;</span>, resourceMap : <span style="font-weight: 400; opacity: 80%;">Map&lt;ResourceSlot, Resource&gt;</span>, bindGroupMap : <span style="font-weight: 400; opacity: 80%;">Map&lt;BindGroupLayout, BindGroup&gt;</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### bind( slot : <span style="font-weight: 400; opacity: 80%;">ResourceSlot</span>, resource : <span style="font-weight: 400; opacity: 80%;">Resource</span> ) : <span style="font-weight: 400; opacity: 80%;">this</span> {: #bind data-toc-label='bind' }

#### bindTexture( textureSlot : <span style="font-weight: 400; opacity: 80%;">TextureViewSlot</span>, resource : <span style="font-weight: 400; opacity: 80%;">TextureViewResource</span> ) : <span style="font-weight: 400; opacity: 80%;">this</span> {: #bindTexture data-toc-label='bindTexture' }

Should be callable repeatedly (TODO test)

#### bindRemainingBuffers() : <span style="font-weight: 400; opacity: 80%;">this</span> {: #bindRemainingBuffers data-toc-label='bindRemainingBuffers' }

#### createChild() : <span style="font-weight: 400; opacity: 80%;">Procedure&lt;In, Out&gt;</span> {: #createChild data-toc-label='createChild' }

#### execute( executor : <span style="font-weight: 400; opacity: 80%;">Executor</span>, data : <span style="font-weight: 400; opacity: 80%;">In</span>, options? : <span style="font-weight: 400; opacity: 80%;">ProcedureExecuteOptions</span> ) : <span style="font-weight: 400; opacity: 80%;">Promise&lt;Out&gt;</span> {: #execute data-toc-label='execute' }

#### standaloneExecute( deviceContext : <span style="font-weight: 400; opacity: 80%;">DeviceContext</span>, data : <span style="font-weight: 400; opacity: 80%;">In</span>, options? : <span style="font-weight: 400; opacity: 80%;">ProcedureStandaloneExecuteOptions</span> ) : <span style="font-weight: 400; opacity: 80%;">Promise&lt;Out&gt;</span> {: #standaloneExecute data-toc-label='standaloneExecute' }

#### getLogBuffer() : <span style="font-weight: 400; opacity: 80%;">GPUBuffer | null</span> {: #getLogBuffer data-toc-label='getLogBuffer' }

#### dispose() : <span style="font-weight: 400; opacity: 80%;">void</span> {: #dispose data-toc-label='dispose' }



## Source Code

See the source for [Procedure.ts](https://github.com/phetsims/alpenglow/blob/main/js/webgpu/compute/Procedure.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
