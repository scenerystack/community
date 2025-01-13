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

#### new ThreeNode( width : <span style="font-weight: 400; opacity: 80%;">number</span>, height : <span style="font-weight: 400; opacity: 80%;">number</span>, providedOptions? : <span style="font-weight: 400; opacity: 80%;">ThreeNodeOptions</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### projectPoint( point : <span style="font-weight: 400; opacity: 80%;">Vector3</span> ) : <span style="font-weight: 400; opacity: 80%;">Vector2</span> {: #projectPoint data-toc-label='projectPoint' }

Projects a 3d point in the global coordinate frame to one within the 2d global coordinate frame.

#### layout() : <span style="font-weight: 400; opacity: 80%;">void</span> {: #layout data-toc-label='layout' }

#### render( target : <span style="font-weight: 400; opacity: 80%;">THREE.WebGLRenderTarget | undefined</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #render data-toc-label='render' }

Renders the simulation to a specific rendering target

@param target - undefined for the default target

#### dispose() : <span style="font-weight: 400; opacity: 80%;">void</span> {: #dispose data-toc-label='dispose' }

Releases references.

### Instance Properties

#### stage : <span style="font-weight: 400; opacity: 80%;">ThreeStage</span> {: #stage data-toc-label='stage' }

(readonly)

#### backgroundEventTarget : <span style="font-weight: 400; opacity: 80%;">Node</span> {: #backgroundEventTarget data-toc-label='backgroundEventTarget' }

(readonly)



## Source Code

See the source for [ThreeNode.ts](https://github.com/phetsims/mobius/blob/main/js/ThreeNode.ts) in the [mobius](https://github.com/phetsims/mobius) repository.
