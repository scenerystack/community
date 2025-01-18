# RenderFromNode

## Overview

Convert a Node to a RenderProgram

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class RenderFromNode {: #RenderFromNode }


```js
import { RenderFromNode } from 'scenerystack/alpenglow';
```
### Static Methods

#### nodeToRenderProgram( node : <span style="font-weight: 400;">[Node](../scenery/Node.md)</span>, matrix : <span style="font-weight: 400;">[Matrix3](../dot/Matrix3.md)</span> ) : <span style="font-weight: 400;">[RenderProgram](../alpenglow/RenderProgram.md)</span> {: #nodeToRenderProgram data-toc-label='nodeToRenderProgram' }

#### addBackgroundColor( renderProgram : <span style="font-weight: 400;">[RenderProgram](../alpenglow/RenderProgram.md)</span>, color : <span style="font-weight: 400;">[Color](../scenery/Color.md)</span> ) : <span style="font-weight: 400;">[RenderProgram](../alpenglow/RenderProgram.md)</span> {: #addBackgroundColor data-toc-label='addBackgroundColor' }

#### showSim() {: #showSim data-toc-label='showSim' }

#### nodeToJSON( node : <span style="font-weight: 400;">[Node](../scenery/Node.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> {: #nodeToJSON data-toc-label='nodeToJSON' }

#### premultipliedSRGBToColor( premultiplied : <span style="font-weight: 400;">[Vector4](../dot/Vector4.md)</span> ) : <span style="font-weight: 400;">[Color](../scenery/Color.md)</span> {: #premultipliedSRGBToColor data-toc-label='premultipliedSRGBToColor' }

#### colorFrom( ...args : <span style="font-weight: 400;">ConstructorParameters&lt;[ConstructorOf](../phet-core/ConstructorOf.md)&lt;[Color](../scenery/Color.md)&gt;&gt;</span> ) : <span style="font-weight: 400;">[RenderColor](../alpenglow/RenderColor.md)</span> {: #colorFrom data-toc-label='colorFrom' }



## Source Code

See the source for [RenderFromNode.ts](https://github.com/phetsims/alpenglow/blob/main/js/render-program/RenderFromNode.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
