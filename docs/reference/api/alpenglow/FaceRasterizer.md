# FaceRasterizer

## Overview



## Class FaceRasterizer {: #FaceRasterizer }


```js
import { FaceRasterizer } from 'scenerystack/alpenglow';
```
### Constructor

#### new FaceRasterizer( providedOptions : <span style="font-weight: 400; opacity: 80%;">FaceRasterizerOptions</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### getCanvasContext( canvas : <span style="font-weight: 400; opacity: 80%;">HTMLCanvasElement</span>, colorSpace : <span style="font-weight: 400; opacity: 80%;">'srgb' | 'display-p3'</span> ) : <span style="font-weight: 400; opacity: 80%;">GPUCanvasContext</span> {: #getCanvasContext data-toc-label='getCanvasContext' }

#### runRenderProgram( program : <span style="font-weight: 400; opacity: 80%;">RenderProgram</span>, providedRunOptions : <span style="font-weight: 400; opacity: 80%;">StrictOmit&lt;FaceRasterizerRunOptions, 'renderableFaces'&gt;</span>, rasterizeOptions? : <span style="font-weight: 400; opacity: 80%;">RasterizationOptions</span> ) : <span style="font-weight: 400; opacity: 80%;">Promise&lt;void&gt;</span> {: #runRenderProgram data-toc-label='runRenderProgram' }

#### run( providedOptions : <span style="font-weight: 400; opacity: 80%;">FaceRasterizerRunOptions</span> ) : <span style="font-weight: 400; opacity: 80%;">Promise&lt;void&gt;</span> {: #run data-toc-label='run' }

#### dispose() : <span style="font-weight: 400; opacity: 80%;">void</span> {: #dispose data-toc-label='dispose' }



## Source Code

See the source for [FaceRasterizer.ts](https://github.com/phetsims/alpenglow/blob/main/js/webgpu/FaceRasterizer.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
