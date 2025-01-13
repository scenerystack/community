# RenderFromNode

## Overview

Convert a Node to a RenderProgram

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class RenderFromNode {: #RenderFromNode }


```js
import { RenderFromNode } from 'scenerystack/alpenglow';
```
### Static Methods

#### nodeToRenderProgram( node : <span style="font-weight: 400; opacity: 80%;">Node</span>, matrix : <span style="font-weight: 400; opacity: 80%;">Matrix3</span> ) : <span style="font-weight: 400; opacity: 80%;">RenderProgram</span> {: #nodeToRenderProgram data-toc-label='nodeToRenderProgram' }

#### addBackgroundColor( renderProgram : <span style="font-weight: 400; opacity: 80%;">RenderProgram</span>, color : <span style="font-weight: 400; opacity: 80%;">Color</span> ) : <span style="font-weight: 400; opacity: 80%;">RenderProgram</span> {: #addBackgroundColor data-toc-label='addBackgroundColor' }

#### showSim() : <span style="font-weight: 400; opacity: 80%;">void</span> {: #showSim data-toc-label='showSim' }

#### nodeToJSON( node : <span style="font-weight: 400; opacity: 80%;">Node</span> ) : <span style="font-weight: 400; opacity: 80%;">string</span> {: #nodeToJSON data-toc-label='nodeToJSON' }

#### premultipliedSRGBToColor( premultiplied : <span style="font-weight: 400; opacity: 80%;">Vector4</span> ) : <span style="font-weight: 400; opacity: 80%;">Color</span> {: #premultipliedSRGBToColor data-toc-label='premultipliedSRGBToColor' }

#### colorFrom( ...args : <span style="font-weight: 400; opacity: 80%;">ConstructorParameters&lt;ConstructorOf&lt;Color&gt;&gt;</span> ) : <span style="font-weight: 400; opacity: 80%;">RenderColor</span> {: #colorFrom data-toc-label='colorFrom' }



## Source Code

See the source for [RenderFromNode.ts](https://github.com/phetsims/alpenglow/blob/main/js/render-program/RenderFromNode.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
