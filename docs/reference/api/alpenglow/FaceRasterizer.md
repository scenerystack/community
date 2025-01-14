# FaceRasterizer

## Overview



## Class FaceRasterizer {: #FaceRasterizer }


```js
import { FaceRasterizer } from 'scenerystack/alpenglow';
```
### Constructor

#### new FaceRasterizer( providedOptions : <span style="font-weight: 400;">FaceRasterizerOptions</span> ) {: #FaceRasterizer-constructor data-toc-label='new FaceRasterizer' }

### Instance Methods

#### getCanvasContext( canvas : <span style="font-weight: 400;">[HTMLCanvasElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement)</span>, colorSpace : <span style="font-weight: 400;">'srgb' | 'display-p3'</span> ) : <span style="font-weight: 400;">GPUCanvasContext</span> {: #getCanvasContext data-toc-label='getCanvasContext' }

#### runRenderProgram( program : <span style="font-weight: 400;">[RenderProgram](../alpenglow/RenderProgram.md)</span>, providedRunOptions : <span style="font-weight: 400;">StrictOmit&lt;FaceRasterizerRunOptions, 'renderableFaces'&gt;</span>, rasterizeOptions? : <span style="font-weight: 400;">[RasterizationOptions](../alpenglow/Rasterize.md#RasterizationOptions)</span> ) : <span style="font-weight: 400;">Promise&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span>&gt;</span> {: #runRenderProgram data-toc-label='runRenderProgram' }

#### run( providedOptions : <span style="font-weight: 400;">FaceRasterizerRunOptions</span> ) : <span style="font-weight: 400;">Promise&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span>&gt;</span> {: #run data-toc-label='run' }

#### dispose() {: #dispose data-toc-label='dispose' }



## Source Code

See the source for [FaceRasterizer.ts](https://github.com/phetsims/alpenglow/blob/main/js/webgpu/FaceRasterizer.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
