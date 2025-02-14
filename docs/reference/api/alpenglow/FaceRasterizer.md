# FaceRasterizer

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/alpenglow/blob/main/js/webgpu/FaceRasterizer.ts](https://github.com/phetsims/alpenglow/blob/main/js/webgpu/FaceRasterizer.ts) for the most up-to-date information.

## Overview



## Class FaceRasterizer {: #FaceRasterizer }


```js
import { FaceRasterizer } from 'scenerystack/alpenglow';
```
### Constructor

#### new FaceRasterizer( providedOptions : <span style="font-weight: 400;">[FaceRasterizerOptions](../alpenglow/FaceRasterizer.md#FaceRasterizerOptions)</span> ) {: #FaceRasterizer-constructor data-toc-label='new FaceRasterizer' }

### Instance Methods

#### getCanvasContext( canvas : <span style="font-weight: 400;">[HTMLCanvasElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement)</span>, colorSpace : <span style="font-weight: 400;">'srgb' | 'display-p3'</span> ) : <span style="font-weight: 400;">GPUCanvasContext</span> {: #getCanvasContext data-toc-label='getCanvasContext' }

#### runRenderProgram( program : <span style="font-weight: 400;">[RenderProgram](../alpenglow/RenderProgram.md)</span>, providedRunOptions : <span style="font-weight: 400;">[StrictOmit](../phet-core/StrictOmit.md)&lt;[FaceRasterizerRunOptions](../alpenglow/FaceRasterizer.md#FaceRasterizerRunOptions), 'renderableFaces'&gt;</span>, rasterizeOptions? : <span style="font-weight: 400;">[RasterizationOptions](../alpenglow/Rasterize.md#RasterizationOptions)</span> ) : <span style="font-weight: 400;">Promise&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span>&gt;</span> {: #runRenderProgram data-toc-label='runRenderProgram' }

#### run( providedOptions : <span style="font-weight: 400;">[FaceRasterizerRunOptions](../alpenglow/FaceRasterizer.md#FaceRasterizerRunOptions)</span> ) : <span style="font-weight: 400;">Promise&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span>&gt;</span> {: #run data-toc-label='run' }

#### dispose() {: #dispose data-toc-label='dispose' }



## Type FaceRasterizerExecutionInfo {: #FaceRasterizerExecutionInfo }


```js
import type { FaceRasterizerExecutionInfo } from 'scenerystack/alpenglow';
```


- **config**: [TwoPassConfig](../alpenglow/TwoPassConfig.md)
- **numTiles**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **numBins**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **initialRenderableFaces**: [TwoPassInitialRenderableFace](../alpenglow/TwoPassInitialRenderableFace.md)[]
- **initialEdges**: [LinearEdge](../alpenglow/LinearEdge.md)[]
- **renderProgramInstructions**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>[]
- **textureBlit**: [ GPUTextureView, GPUTextureView ] | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>




## Type FaceRasterizerOptions {: #FaceRasterizerOptions }


TODO: doc

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

```js
import type { FaceRasterizerOptions } from 'scenerystack/alpenglow';
```


- **deviceContext**: [DeviceContext](../alpenglow/DeviceContext.md)
- **supportsGridFiltering**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
- **supportsBilinear**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
- **supportsMitchellNetravali**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
- **maxRenderableFaces**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
<br>  TODO: add limits support for everything nested
- **maxInitialEdges**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **maxRenderProgramInstructions**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **maxCoarseRenderableFaces**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **maxCoarseEdges**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **maxFineFaces**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **maxFineEdges**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **maxBins**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>




## Type FaceRasterizerRunOptions {: #FaceRasterizerRunOptions }


```js
import type { FaceRasterizerRunOptions } from 'scenerystack/alpenglow';
```


- **renderableFaces**: [RenderableFace](../alpenglow/RenderableFace.md)[]
<br>  TODO: ideally run with no tile size (large!)
- **canvasContext**: GPUCanvasContext
- **rasterWidth**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **rasterHeight**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **colorSpace**?: "srgb" | "display-p3"
- **filterType**?: [PolygonFilterType](../alpenglow/PolygonFilterType.md)
- **filterScale**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>




## Source Code

See the source for [FaceRasterizer.ts](https://github.com/phetsims/alpenglow/blob/main/js/webgpu/FaceRasterizer.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
