# ThreeNode

## Overview

Shows three.js content within a rectangle, displayed to be inside of a rectangle in arbitrary places in the scene
graph.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class ThreeNode {: #ThreeNode }


```js
import { ThreeNode } from 'scenerystack/mobius';
```
### Constructor

#### new ThreeNode( width : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, height : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, providedOptions? : <span style="font-weight: 400;">[ThreeNodeOptions](../mobius/ThreeNode.md#ThreeNodeOptions)</span> ) {: #ThreeNode-constructor data-toc-label='new ThreeNode' }

### Instance Methods

#### projectPoint( point : <span style="font-weight: 400;">[Vector3](../dot/Vector3.md)</span> ) : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> {: #projectPoint data-toc-label='projectPoint' }

Projects a 3d point in the global coordinate frame to one within the 2d global coordinate frame.

#### layout() {: #layout data-toc-label='layout' }

#### render( target? : <span style="font-weight: 400;">[THREE](../mobius/THREE.md).WebGLRenderTarget</span> ) {: #render data-toc-label='render' }

Renders the simulation to a specific rendering target

@param [target] - undefined for the default target

#### dispose() {: #dispose data-toc-label='dispose' }

Releases references.

### Instance Properties

#### stage : <span style="font-weight: 400;">[ThreeStage](../mobius/ThreeStage.md)</span> {: #stage data-toc-label='stage' }

(readonly)

#### backgroundEventTarget : <span style="font-weight: 400;">[Node](../scenery/Node.md)</span> {: #backgroundEventTarget data-toc-label='backgroundEventTarget' }

(readonly)



## Type ThreeNodeOptions {: #ThreeNodeOptions }


```js
import type { ThreeNodeOptions } from 'scenerystack/mobius';
```


- **fov**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- &amp; [ThreeStageOptions](../mobius/ThreeStage.md#ThreeStageOptions) &amp; [NodeOptions](../scenery/Node.md#NodeOptions)




## Source Code

See the source for [ThreeNode.ts](https://github.com/phetsims/mobius/blob/main/js/ThreeNode.ts) in the [mobius](https://github.com/phetsims/mobius) repository.
